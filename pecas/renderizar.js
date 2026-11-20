// Gera os PNGs: node pecas/renderizar.js  (usa o Playwright já instalado, grátis)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, 'fonte'), out = path.join(__dirname, 'png');
const tam = { 'perfil': [1080, 1080, 1], 'banner-linkedin': [1128, 191, 2] };
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.html'))) {
    const nome = f.replace('.html', ''), [w, h, s] = tam[nome] || [1080, 1350, 1];
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: s });
    await p.goto('file://' + path.join(dir, f), { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    const ok = await p.evaluate(async () => { await document.fonts.ready;
      return [...document.fonts].some(f => f.family.includes('Playfair') && f.status === 'loaded'); });
    if (!ok) console.warn('⚠️  Playfair Display NÃO carregou em', f);
    await p.screenshot({ path: path.join(out, nome + '.png') });
    console.log('✓', nome + '.png');
    await p.close();
  }
  await b.close();
})();
