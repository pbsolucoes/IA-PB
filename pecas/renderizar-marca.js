// Gera logos (fundo transparente) e o guia da marca: node pecas/renderizar-marca.js → pecas/marca/
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const out = path.join(__dirname, 'marca'); fs.mkdirSync(out, { recursive: true });
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 2000, height: 1200 } });
  await p.goto('file://' + path.join(__dirname, 'fonte', 'marca-kit.html'), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  for (const id of await p.$$eval('.peca', els => els.map(e => e.id))) {
    await p.locator('#' + id).screenshot({ path: path.join(out, id + '.png'), omitBackground: id !== 'guia-da-marca' });
    console.log('✓', id + '.png');
  }
  await b.close();
})();
