(() => {
  const routes = {
    executive: '/exsum/',
    strategy: '/',
    gantt: '/gantt/'
  };

  const normalizeNavigation = () => {
    const anchors = [...document.querySelectorAll('a')];

    anchors.forEach((anchor) => {
      const label = (anchor.textContent || '').trim().toLowerCase();
      const rawHref = anchor.getAttribute('href') || '';
      let target = null;

      if (label.includes('implementation gantt') || label.includes('20 ไตรมาส') || /gantt/i.test(rawHref)) {
        target = routes.gantt;
      } else if (label.includes('full strategy') || label.includes('แผนฉบับเต็ม')) {
        target = routes.strategy;
      } else if (label.includes('executive summary')) {
        target = routes.executive;
      } else if (anchor.classList.contains('brand') && anchor.closest('.site-header')) {
        target = routes.strategy;
      }

      if (!target) return;
      anchor.setAttribute('href', target);
      anchor.dataset.absoluteRoute = target;
    });
  };

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[data-absolute-route]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    window.location.assign(anchor.dataset.absoluteRoute);
  });

  document.getElementById('print-exsum')?.addEventListener('click', () => window.print());

  const nav = document.querySelector('.site-nav');
  if (nav) {
    const exsumLinks = [...nav.querySelectorAll('a')].filter((link) => {
      try { return new URL(link.href, window.location.href).pathname.replace(/\/+$/, '').endsWith('/exsum'); }
      catch (_) { return false; }
    });

    exsumLinks.forEach((link, index) => {
      if (index === 0) {
        link.dataset.exsumNav = 'true';
        link.setAttribute('aria-current', 'page');
      } else {
        link.remove();
      }
    });
  }

  document.querySelectorAll('.exsum-tab, .strategy-gantt-link').forEach((link) => {
    link.addEventListener('click', () => {
      try { window.sessionStorage.removeItem('coBenefitStrategyView'); } catch (_) { /* no-op */ }
    });
  });

  normalizeNavigation();
})();
