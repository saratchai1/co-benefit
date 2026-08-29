(() => {
  document.getElementById('print-krabi-pilot')?.addEventListener('click', () => window.print());

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Keep navigation root-relative so no click can become /pilot-krabi/gantt/.
  const routeMap = new Map([
    ['Executive Summary', '/exsum/'],
    ['Krabi Pilot', '/pilot-krabi/'],
    ['Full Strategy', '/'],
    ['Implementation Gantt', '/gantt/']
  ]);

  document.querySelectorAll('a').forEach((link) => {
    const label = link.textContent.replace('↗', '').trim();
    if (routeMap.has(label)) link.setAttribute('href', routeMap.get(label));
  });
})();
