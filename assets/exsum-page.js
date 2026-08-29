(() => {
  const RAW_BASE = 'https://raw.githubusercontent.com/saratchai1/co-benefit/main/';
  const params = new URLSearchParams(window.location.search);
  const wantsKrabiPilot = params.get('view') === 'krabi-pilot';

  const injectScript = (code, id, sourceName) => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = id;
    script.textContent = `${code}\n//# sourceURL=${sourceName}`;
    document.body.appendChild(script);
  };

  const renderKrabiPilot = async () => {
    const stamp = Date.now();
    document.body.classList.add('pilot-view-loading');

    try {
      const [htmlResponse, cssResponse, jsResponse] = await Promise.all([
        fetch(`${RAW_BASE}pilot-krabi/index.html?v=${stamp}`, { cache: 'no-store' }),
        fetch(`${RAW_BASE}assets/pilot-krabi.css?v=${stamp}`, { cache: 'no-store' }),
        fetch(`${RAW_BASE}assets/pilot-krabi.js?v=${stamp}`, { cache: 'no-store' })
      ]);

      if (!htmlResponse.ok) throw new Error(`Pilot HTML returned ${htmlResponse.status}`);
      if (!cssResponse.ok) throw new Error(`Pilot CSS returned ${cssResponse.status}`);
      if (!jsResponse.ok) throw new Error(`Pilot JS returned ${jsResponse.status}`);

      const [html, css, js] = await Promise.all([
        htmlResponse.text(),
        cssResponse.text(),
        jsResponse.text()
      ]);

      const parsed = new DOMParser().parseFromString(html, 'text/html');
      document.title = parsed.title || 'Krabi Pilot Case | Mangrove Co-benefit 2031';

      const sourceTheme = parsed.querySelector('meta[name="theme-color"]')?.getAttribute('content');
      const theme = document.querySelector('meta[name="theme-color"]');
      if (theme && sourceTheme) theme.setAttribute('content', sourceTheme);

      document.documentElement.lang = parsed.documentElement.lang || 'th';
      document.body.className = parsed.body.className;
      document.body.innerHTML = parsed.body.innerHTML;

      const oldStyle = document.getElementById('krabi-pilot-live-styles');
      if (oldStyle) oldStyle.remove();
      const style = document.createElement('style');
      style.id = 'krabi-pilot-live-styles';
      style.textContent = css;
      document.head.appendChild(style);

      injectScript(js, 'krabi-pilot-live-script', 'github/assets/pilot-krabi.js');
    } catch (error) {
      console.error('Unable to render Krabi pilot view', error);
      document.body.className = 'exsum-page';
      document.body.innerHTML = `
        <main style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#f7fbfe;color:#15303c;font-family:Tahoma,Arial,sans-serif">
          <section style="max-width:620px;padding:32px;border:1px solid #d8e5ea;border-radius:20px;background:#fff;box-shadow:0 20px 60px rgba(20,79,100,.12)">
            <h1 style="margin:0 0 10px;font-size:1.5rem">ไม่สามารถเปิด Krabi Pilot ได้</h1>
            <p style="margin:0 0 18px;color:#60737c">${String(error.message || error)}</p>
            <a href="/exsum/" style="display:inline-flex;padding:10px 16px;color:#fff;border-radius:10px;background:#1769aa;text-decoration:none;font-weight:700">กลับ Executive Summary</a>
          </section>
        </main>`;
    }
  };

  if (wantsKrabiPilot) {
    renderKrabiPilot();
    return;
  }

  const routes = {
    executive: '/exsum/',
    pilot: '/exsum/?view=krabi-pilot',
    strategy: '/',
    gantt: '/gantt/'
  };

  const normalizeNavigation = () => {
    const anchors = [...document.querySelectorAll('a')];

    anchors.forEach((anchor) => {
      const label = (anchor.textContent || '').replace('↗', '').trim().toLowerCase();
      const rawHref = anchor.getAttribute('href') || '';
      let target = null;

      if (label.includes('krabi pilot')) {
        target = routes.pilot;
      } else if (label.includes('implementation gantt') || label.includes('20 ไตรมาส') || /gantt/i.test(rawHref)) {
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
      try {
        const url = new URL(link.href, window.location.href);
        return url.pathname.replace(/\/+$/, '').endsWith('/exsum') && url.searchParams.get('view') !== 'krabi-pilot';
      } catch (_) { return false; }
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
