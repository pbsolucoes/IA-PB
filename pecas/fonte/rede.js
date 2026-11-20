// Desenha o motivo de "rede de agentes" (pontos + linhas em bronze) em <svg class="rede" data-seed="1" data-area="x0,y0,x1,y1" data-n="18">
document.querySelectorAll('svg.rede').forEach(svg => {
  let s = Number(svg.dataset.seed || 1);
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const W = document.body.clientWidth, H = document.body.clientHeight;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const [x0, y0, x1, y1] = (svg.dataset.area || `0,0,${W},${H}`).split(',').map(Number);
  const n = Number(svg.dataset.n || 18), cor = svg.dataset.cor || '#AB7646', op = Number(svg.dataset.op || 0.55);
  const pts = Array.from({ length: n }, () => [x0 + rnd() * (x1 - x0), y0 + rnd() * (y1 - y0)]);
  let out = '';
  pts.forEach((p, i) => {
    pts.map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1])]).filter(([j]) => j !== i)
      .sort((a, b) => a[1] - b[1]).slice(0, 2)
      .forEach(([j]) => { if (j > i || true) out += `<line x1="${p[0]}" y1="${p[1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" stroke="${cor}" stroke-width="1.6" opacity="${op * 0.7}"/>`; });
  });
  pts.forEach((p, i) => {
    const r = i % 5 === 0 ? 9 : 5;
    out += `<circle cx="${p[0]}" cy="${p[1]}" r="${r * 2.4}" fill="${cor}" opacity="${op * 0.18}"/><circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${cor}" opacity="${op}"/>`;
  });
  svg.innerHTML = out;
});
