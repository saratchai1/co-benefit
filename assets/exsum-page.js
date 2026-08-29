(() => {
  document.getElementById('print-exsum')?.addEventListener('click', () => window.print());

  const links = document.querySelectorAll('.exsum-tab, .strategy-gantt-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      try { window.sessionStorage.removeItem('coBenefitStrategyView'); } catch (_) { /* no-op */ }
    });
  });
})();
