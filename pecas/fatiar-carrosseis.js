// Carrosséis do relançamento "Fio Condutor":  node pecas/fatiar-carrosseis.js
// Renderiza fonte/carrossel-6.html e fonte/carrossel-9.html (5 slides lado a lado, 5400×1350) e recorta em
// png/carrossel-6-02.png … 06 e png/carrossel-9-02.png … 06 (o slide 1 de cada um é relancamento-06/09.png).
// Confere sozinho: fonte menor que 28 px, texto fora da margem de 90 px e texto encostando no fio.
const { chromium } = require('playwright');
const path = require('path');
const fonte = path.join(__dirname, 'fonte'), out = path.join(__dirname, 'png');
const W = 1080, H = 1350;
(async () => {
  const b = await chromium.launch(), problemas = [];
  for (const n of ['6', '9']) {
    const p = await b.newPage({ viewport: { width: 5 * W, height: H } });
    await p.goto('file://' + path.join(fonte, `carrossel-${n}.html`), { waitUntil: 'networkidle' });
    const ok = await p.evaluate(async () => { await document.fonts.ready;
      return [...document.fonts].some(f => f.family.includes('Playfair') && f.status === 'loaded'); });
    if (!ok) console.warn('⚠️  Playfair Display NÃO carregou em carrossel-' + n);
    problemas.push(...await p.evaluate(({ n, W }) => {
      const { segs, ignorar = [] } = window.__fio, erros = [];
      const toca = (r, folga) => segs.some(([a, c, raio]) => {
        for (let t = 0; t <= 1; t += 0.002) {
          const x = a[0] + (c[0] - a[0]) * t, y = a[1] + (c[1] - a[1]) * t, m = raio + folga;
          if (x > r.left - m && x < r.right + m && y > r.top - m && y < r.bottom + m) return true;
        } return false; });
      [...document.querySelectorAll('.s *')].filter(e => [...e.childNodes].some(x => x.nodeType === 3 && x.textContent.trim()))
        .forEach(e => {
          const sl = e.closest('.s'), i = Math.round(sl.getBoundingClientRect().left / W) + 2, box = sl.getBoundingClientRect();
          const fs = parseFloat(getComputedStyle(e).fontSize), txt = e.textContent.trim().slice(0, 30);
          if (fs < 28) erros.push(`carrossel-${n} slide ${i}: fonte ${fs}px < 28 em "${txt}"`);
          const rg = document.createRange(); rg.selectNodeContents(e);
          [...rg.getClientRects()].filter(r => r.width > 1).forEach(r => {
            if (!ignorar.includes(e.id) && toca(r, 12)) erros.push(`carrossel-${n} slide ${i}: texto encosta no fio: "${txt}"`);
            if (r.left < box.left + 89 || r.right > box.right - 89 || r.top < box.top + 89 || r.bottom > box.bottom - 60)
              erros.push(`carrossel-${n} slide ${i}: texto fora da margem: "${txt}"`);
          });
        });
      return erros;
    }, { n, W }));
    for (let i = 0; i < 5; i++) {
      const nome = `carrossel-${n}-0${i + 2}.png`;
      await p.screenshot({ path: path.join(out, nome), clip: { x: i * W, y: 0, width: W, height: H } });
      console.log('✓', nome);
    }
    await p.close();
  }
  await b.close();
  if (problemas.length) { console.log('\n⚠️  QA automático encontrou:'); problemas.forEach(e => console.log('  -', e)); }
  else console.log('\nQA automático: nada encosta no fio, tudo dentro da margem de 90 px e com 28 px ou mais.');
})();
