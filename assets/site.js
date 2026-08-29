(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
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

    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // The five-year window is counted from 29 August 2026, the date the plan was requested.
  // Keeping the replacement map here ensures that static and JavaScript-rendered sections
  // show one consistent project calendar on both pages.
  const applyPlanCalendar = () => {
    const replacements = [
      ['28 ส.ค. 2569 – 27 ส.ค. 2574', '29 ส.ค. 2569 – 28 ส.ค. 2574'],
      ['28 ส.ค. 2569–27 ส.ค. 2570', '29 ส.ค. 2569–28 ส.ค. 2570'],
      ['28 ส.ค. 2570–27 ส.ค. 2571', '29 ส.ค. 2570–28 ส.ค. 2571'],
      ['28 ส.ค. 2571–27 ส.ค. 2572', '29 ส.ค. 2571–28 ส.ค. 2572'],
      ['28 ส.ค. 2572–27 ส.ค. 2573', '29 ส.ค. 2572–28 ส.ค. 2573'],
      ['28 ส.ค. 2573–27 ส.ค. 2574', '29 ส.ค. 2573–28 ส.ค. 2574'],
      ['28 สิงหาคมของทุกปี', '29 สิงหาคมของทุกปี'],
      ['28 สิงหาคม 2569', '29 สิงหาคม 2569'],
      ['27 สิงหาคม 2574', '28 สิงหาคม 2574'],
      ['28 ส.ค. 2569', '29 ส.ค. 2569'],
      ['27 ส.ค. 2574', '28 ส.ค. 2574'],
      ['28 August 2026', '29 August 2026']
    ];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];

    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const original = node.nodeValue || '';
      const revised = replacements.reduce(
        (text, [from, to]) => text.replaceAll(from, to),
        original
      );

      if (revised !== original) node.nodeValue = revised;
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPlanCalendar, { once: true });
  } else {
    applyPlanCalendar();
  }
})();
