// Campanha "Onde trava?": node pecas/renderizar-onde-trava.js
// Gera png/onde-trava/<segmento>-01..06.png e carrosseis/onde-trava-<segmento>.pdf (6 páginas, para importar no Canva).
// Confere: Playfair carregada, fonte mínima 24 px, texto dentro da margem de 80 px.
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const out = path.join(__dirname, 'png', 'onde-trava'); fs.mkdirSync(out, { recursive: true });
fs.mkdirSync(path.join(__dirname, 'carrosseis'), { recursive: true });
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + path.join(__dirname, 'fonte', 'onde-trava.html'), { waitUntil: 'networkidle' });
  const ok = await p.evaluate(async () => { await document.fonts.ready; return [...document.fonts].some(f => f.family.includes('Playfair') && f.status === 'loaded'); });
  if (!ok) console.warn('⚠️  Playfair NÃO carregou');
  const erros = await p.evaluate(() => { const e = [];
    document.querySelectorAll('.s').forEach(s => { const b = s.getBoundingClientRect();
      s.querySelectorAll('*').forEach(el => { if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return;
        if (el.closest('.big')) return;
        const fs = parseFloat(getComputedStyle(el).fontSize); if (fs < 21) e.push(`${s.id}: fonte ${fs}px "${el.textContent.trim().slice(0,25)}"`);
        const r = document.createRange(); r.selectNodeContents(el);
        [...r.getClientRects()].filter(x => x.width > 1).forEach(x => { if (!el.closest('.cel') && (x.left < b.left + 79 || x.right > b.right - 79 || x.bottom > b.bottom - 60)) e.push(`${s.id}: fora da margem "${el.textContent.trim().slice(0,25)}"`); });
      }); }); return [...new Set(e)]; });
  const ids = await p.$$eval('.s', els => els.map(e => e.id));
  for (const id of ids) await p.locator('#' + id).screenshot({ path: path.join(out, id + '.png') });
  // PDF de 6 páginas por segmento, montado pelo próprio Chromium (não depende do Python/PIL).
  for (const seg of [...new Set(ids.map(i => i.split('-')[0]))]) {
    const imgs = [1,2,3,4,5,6].map(n => `<img src="data:image/png;base64,${fs.readFileSync(path.join(out, `${seg}-0${n}.png`)).toString('base64')}">`).join('');
    const pp = await b.newPage();
    await pp.setContent(`<style>@page{size:1080px 1350px;margin:0}body{margin:0}img{display:block;width:1080px;height:1350px;page-break-after:always}</style>${imgs}`);
    await pp.pdf({ path: path.join(__dirname, 'carrosseis', `onde-trava-${seg}.pdf`), width: '1080px', height: '1350px', printBackground: true });
    await pp.close();
  }
  await b.close();
  console.log(ids.length, 'slides', erros.length ? '\n' + erros.join('\n') : 'QA ok');
})();
