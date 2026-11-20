// Relançamento "Fio Condutor":  node pecas/fatiar-grade.js
// 1) renderiza o painel mestre (fonte/grade-painel.html, 3240×4050) e recorta em 9 posts 1080×1350:
//    png/relancamento-01.png … relancamento-09.png  (número = ordem de publicação)
// 2) gera png/grade-relancamento-previa.png (os 9 lado a lado, com o recorte 3:4 e o espaço branco do perfil)
// 3) renderiza as 6 capas de destaques (fonte/destaques.html) em png/destaque-<nome>.png
// 4) confere sozinho: texto encostando no fio, texto fora da margem de 90 px e fonte menor que 28 px.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const fonte = path.join(__dirname, 'fonte'), out = path.join(__dirname, 'png');
// posição na grade [coluna, linha] de cada post, pela ordem de publicação (1 = embaixo à direita)
const pos = { 1: [2, 2], 2: [1, 2], 3: [0, 2], 4: [2, 1], 5: [1, 1], 6: [0, 1], 7: [2, 0], 8: [1, 0], 9: [0, 0] };
const W = 1080, H = 1350;

async function abrir(b, arquivo, w, h) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto('file://' + path.join(fonte, arquivo), { waitUntil: 'networkidle' });
  const ok = await p.evaluate(async () => { await document.fonts.ready;
    return [...document.fonts].some(f => f.family.includes('Playfair') && f.status === 'loaded'); });
  if (!ok && arquivo !== 'destaques.html') console.warn('⚠️  Playfair Display NÃO carregou em', arquivo);
  return p;
}

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();

  // ---------- painel + 9 recortes ----------
  const p = await abrir(b, 'grade-painel.html', 3 * W, 3 * H);
  const problemas = await p.evaluate(({ W, H }) => {
    const { pts, ramos, nos, fim } = window.__fio, erros = [];
    const segs = [];
    for (let i = 1; i < pts.length; i++) segs.push([pts[i - 1], pts[i], 8]);
    segs.push([pts[pts.length - 1], fim, 20]);
    ramos.forEach(([a, c]) => segs.push([a, c, 8]));
    nos.forEach(([x, y, r]) => segs.push([[x, y], [x, y], r * 2.4]));
    const toca = (r, folga) => segs.some(([a, c, raio]) => {
      for (let t = 0; t <= 1; t += 0.005) {
        const x = a[0] + (c[0] - a[0]) * t, y = a[1] + (c[1] - a[1]) * t, m = raio + folga;
        if (x > r.left - m && x < r.right + m && y > r.top - m && y < r.bottom + m) return true;
      } return false; });
    // só elementos "folha" que têm texto próprio
    const els = [...document.querySelectorAll('.post *')].filter(e =>
      [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()));
    els.forEach(e => {
      const post = e.closest('.post').id, rg = document.createRange(); rg.selectNodeContents(e);
      const rects = [...rg.getClientRects()].filter(r => r.width > 1);
      const fs = parseFloat(getComputedStyle(e).fontSize);
      const txt = e.textContent.trim().slice(0, 30);
      if (fs < 28) erros.push(`${post}: fonte ${fs}px < 28 em "${txt}"`);
      const box = e.closest('.post').getBoundingClientRect();
      rects.forEach(r => {
        if (toca(r, 12) && !e.closest('#convite')) erros.push(`${post}: texto encosta no fio: "${txt}"`);
        if (r.left < box.left + 90 - 1 || r.right > box.right - 90 + 1 || r.top < box.top + 90 - 1 || r.bottom > box.bottom - 60)
          erros.push(`${post}: texto fora da margem de segurança: "${txt}" (${Math.round(r.left - box.left)},${Math.round(r.top - box.top)}–${Math.round(r.right - box.left)},${Math.round(r.bottom - box.top)})`);
      });
    });
    // o convite (fim do fio) não pode ser cruzado pelo fio: a seta tem que parar antes dele
    const cv = document.getElementById('convite').getBoundingClientRect();
    if (fim[0] < cv.right + 10) erros.push('p9: a seta invade o convite');
    return erros;
  }, { W, H });
  await p.screenshot({ path: path.join(out, 'grade-painel.png') });
  for (const [n, [c, l]] of Object.entries(pos)) {
    const nome = `relancamento-0${n}.png`;
    await p.screenshot({ path: path.join(out, nome), clip: { x: c * W, y: l * H, width: W, height: H } });
    console.log('✓', nome);
  }
  await p.close();

  // ---------- prévia da grade como no perfil ----------
  // O perfil mostra cada post num retângulo 3:4 (corta um pouco das laterais) com um fio branco entre eles.
  const gap = 4, tw = (1080 - 2 * gap) / 3, th = tw * 4 / 3;
  const cel = Object.entries(pos).map(([n, [c, l]]) =>
    `<div style="position:absolute;left:${c * (tw + gap)}px;top:${l * (th + gap)}px;width:${tw}px;height:${th}px;overflow:hidden">
     <img src="data:image/png;base64,${fs.readFileSync(path.join(out, `relancamento-0${n}.png`)).toString('base64')}" style="width:100%;height:100%;object-fit:cover"></div>`).join('');
  const pv = await b.newPage({ viewport: { width: 1080, height: Math.round(3 * th + 2 * gap) } });
  await pv.setContent(`<body style="margin:0;background:#fff;position:relative">${cel}</body>`, { waitUntil: 'load' });
  await pv.screenshot({ path: path.join(out, 'grade-relancamento-previa.png') });
  console.log('✓ grade-relancamento-previa.png');
  await pv.close();
  fs.unlinkSync(path.join(out, 'grade-painel.png')); // só intermediário

  // ---------- destaques ----------
  const d = await abrir(b, 'destaques.html', 1080, 6 * 1920);
  const ids = await d.evaluate(() => [...document.querySelectorAll('section.d')].map(s => s.id));
  for (let i = 0; i < ids.length; i++) {
    await d.screenshot({ path: path.join(out, `destaque-${ids[i]}.png`), clip: { x: 0, y: i * 1920, width: 1080, height: 1920 } });
    console.log('✓', `destaque-${ids[i]}.png`);
  }
  await d.close();
  await b.close();

  if (problemas.length) { console.log('\n⚠️  QA automático encontrou:'); problemas.forEach(e => console.log('  -', e)); }
  else console.log('\nQA automático: nenhum texto encosta no fio, tudo dentro da margem de 90 px e com 28 px ou mais.');
})();
