(() => {
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

  const links = document.querySelectorAll('.exsum-tab, .strategy-gantt-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      try { window.sessionStorage.removeItem('coBenefitStrategyView'); } catch (_) { /* no-op */ }
    });
  });
})();
