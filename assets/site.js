(() => {
  const currentScript = document.currentScript;
  const assetBase = currentScript?.src ? new URL('.', currentScript.src) : null;
  const rawAssetBase = 'https://raw.githubusercontent.com/saratchai1/co-benefit/main/assets/';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const normalizedPath = (href) => {
    try { return new URL(href, window.location.href).pathname.replace(/\/+$/, '') || '/'; }
    catch (_) { return ''; }
  };

  const rootUrl = () => {
    const brandHref = document.querySelector('.brand')?.href || new URL('/', window.location.href).href;
    const brandUrl = new URL(brandHref, window.location.href);
    const path = brandUrl.pathname.replace(/\/+$/, '');
    if (path.endsWith('/gantt') || path.endsWith('/exsum') || path.endsWith('/pilot-krabi')) {
      return new URL('../', brandUrl);
    }
    return brandUrl;
  };

  const addExecutiveSummaryNav = () => {
    if (!nav) return;
    const existing = [...nav.querySelectorAll('a')].find((link) => normalizedPath(link.href).endsWith('/exsum'));
    if (existing) {
      existing.dataset.exsumNav = 'true';
      if (normalizedPath(window.location.href).endsWith('/exsum')) existing.setAttribute('aria-current', 'page');
      return;
    }

    const link = document.createElement('a');
    link.dataset.exsumNav = 'true';
    link.href = new URL('exsum/', rootUrl()).href;
    link.textContent = 'Executive Summary';
    if (normalizedPath(window.location.href).endsWith('/exsum')) link.setAttribute('aria-current', 'page');

    const ganttLink = nav.querySelector('.nav-cta');
    nav.insertBefore(link, ganttLink || nav.firstChild);
  };

  const addKrabiPilotNav = () => {
    if (!nav) return;
    const existing = [...nav.querySelectorAll('a')].find((link) => normalizedPath(link.href).endsWith('/pilot-krabi'));
    if (existing) {
      existing.dataset.pilotNav = 'true';
      if (normalizedPath(window.location.href).endsWith('/pilot-krabi')) existing.setAttribute('aria-current', 'page');
      return;
    }

    const link = document.createElement('a');
    link.dataset.pilotNav = 'true';
    link.href = new URL('pilot-krabi/', rootUrl()).href;
    link.textContent = 'Krabi Pilot';
    if (normalizedPath(window.location.href).endsWith('/pilot-krabi')) link.setAttribute('aria-current', 'page');

    const ganttLink = nav.querySelector('.nav-cta');
    nav.insertBefore(link, ganttLink || nav.firstChild);
  };

  const addKrabiPilotTabs = () => {
    document.querySelectorAll('.strategy-tab-list').forEach((list) => {
      const existing = [...list.querySelectorAll('a')].find((link) => normalizedPath(link.href).endsWith('/pilot-krabi'));
      if (existing) {
        existing.dataset.pilotTab = 'true';
        return;
      }

      const link = document.createElement('a');
      link.dataset.pilotTab = 'true';
      link.className = list.querySelector('.exsum-tab') ? 'exsum-tab' : 'strategy-gantt-link';
      link.href = new URL('pilot-krabi/', rootUrl()).href;
      link.textContent = 'Krabi Pilot';
      link.setAttribute('role', 'tab');
      link.setAttribute('aria-selected', 'false');

      const ganttLink = list.querySelector('.strategy-gantt-link');
      list.insertBefore(link, ganttLink || null);
    });
  };

  addExecutiveSummaryNav();
  addKrabiPilotNav();
  addKrabiPilotTabs();

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
      const revised = replacements.reduce((text, [from, to]) => text.replaceAll(from, to), original);
      if (revised !== original) node.nodeValue = revised;
    });
  };

  const addLinkedAsset = (name, type, id) => {
    if (!assetBase || document.getElementById(id)) return;
    if (type === 'style') {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = new URL(name, assetBase).href;
      document.head.appendChild(link);
      return;
    }
    const script = document.createElement('script');
    script.id = id;
    script.src = new URL(name, assetBase).href;
    script.async = false;
    document.body.appendChild(script);
  };

  const loadCombinedExtension = () => {
    if (!assetBase) return;
    addLinkedAsset('combined-extension.css', 'style', 'combined-extension-styles');
    addLinkedAsset('combined-extension.js', 'script', 'combined-extension-script');
  };

  const injectFetchedAsset = (content, type, id, sourceName) => {
    if (document.getElementById(id)) return;
    if (type === 'style') {
      const style = document.createElement('style');
      style.id = id;
      style.textContent = content;
      document.head.appendChild(style);
      return;
    }
    const script = document.createElement('script');
    script.id = id;
    script.textContent = `${content}\n//# sourceURL=${sourceName}`;
    document.body.appendChild(script);
  };

  const loadExecutiveLayer = () => {
    const relevantPage = document.getElementById('portfolio') || document.getElementById('gantt-grid');
    if (!relevantPage || window.__coBenefitExecutiveLoading) return;
    window.__coBenefitExecutiveLoading = true;

    if (assetBase) {
      addLinkedAsset('executive-summary.css', 'style', 'executive-summary-styles');
      addLinkedAsset('executive-summary.js', 'script', 'executive-summary-script');
      return;
    }

    const stamp = Date.now();
    Promise.all([
      fetch(`${rawAssetBase}executive-summary.css?v=${stamp}`, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Executive CSS returned ${response.status}`);
        return response.text();
      }),
      fetch(`${rawAssetBase}executive-summary.js?v=${stamp}`, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`Executive JS returned ${response.status}`);
        return response.text();
      })
    ])
      .then(([css, js]) => {
        injectFetchedAsset(css, 'style', 'executive-summary-styles', 'github/assets/executive-summary.css');
        injectFetchedAsset(js, 'script', 'executive-summary-script', 'github/assets/executive-summary.js');
      })
      .catch((error) => {
        window.__coBenefitExecutiveLoading = false;
        console.error('Unable to load executive presentation layer', error);
      });
  };

  const initialize = () => {
    applyPlanCalendar();
    addExecutiveSummaryNav();
    addKrabiPilotNav();
    addKrabiPilotTabs();
    loadCombinedExtension();
    loadExecutiveLayer();
  };

  const tabObserver = new MutationObserver(() => addKrabiPilotTabs());
  tabObserver.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(() => tabObserver.disconnect(), 8000);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
