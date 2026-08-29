(() => {
  document.getElementById('print-krabi-pilot')?.addEventListener('click', () => window.print());

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav && !toggle.dataset.boundPilotMenu) {
    toggle.dataset.boundPilotMenu = 'true';
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'เปิดเมนู');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'เปิดเมนู' : 'ปิดเมนู');
      nav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const routeMap = new Map([
    ['Executive Summary', '/exsum/'],
    ['Krabi Pilot', '/exsum/?view=krabi-pilot'],
    ['Full Strategy', '/'],
    ['Implementation Gantt', '/gantt/']
  ]);

  document.querySelectorAll('a').forEach((link) => {
    const label = link.textContent.replace('↗', '').trim();
    if (routeMap.has(label)) link.setAttribute('href', routeMap.get(label));
  });
})();
