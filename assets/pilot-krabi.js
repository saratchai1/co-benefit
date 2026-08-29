(() => {
  const NEWS_URL = 'https://www.prachachat.net/advertorial/news-2041325';
  const NEWS_IMAGE = 'https://www.prachachat.net/wp-content/uploads/2026/07/image-263.png';

  const addNewsStyles = () => {
    if (document.getElementById('krabi-news-feature-styles')) return;
    const style = document.createElement('style');
    style.id = 'krabi-news-feature-styles';
    style.textContent = `
      .krabi-news-feature {
        position: relative;
        padding: 72px 0;
        overflow: hidden;
        border-bottom: 1px solid var(--kp-line);
        background:
          radial-gradient(circle at 6% 15%, rgba(41,169,197,.12), transparent 28%),
          radial-gradient(circle at 94% 85%, rgba(241,164,60,.14), transparent 28%),
          linear-gradient(145deg,#f7fbff,#f2fbf8 62%,#fff8eb);
      }
      .krabi-news-feature::before {
        position: absolute;
        inset: 0;
        content: "";
        opacity: .35;
        background-image: linear-gradient(rgba(23,105,170,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(23,105,170,.045) 1px,transparent 1px);
        background-size: 46px 46px;
        pointer-events: none;
      }
      .krabi-news-feature .container { position: relative; z-index: 1; }
      .news-feature-kicker {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-bottom: 18px;
      }
      .news-feature-kicker span {
        display: inline-flex;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: .66rem;
        font-weight: 900;
        letter-spacing: .07em;
        text-transform: uppercase;
      }
      .news-source-badge { color: #fff; background: linear-gradient(135deg,var(--kp-blue),var(--kp-teal)); }
      .news-advertorial-badge { color: #a25713; border: 1px solid #f0c987; background: #fff4dc; }
      .news-date-badge { color: #5f4b9a; border: 1px solid #ddd0fa; background: #f6f1ff; }
      .news-feature-card {
        display: grid;
        grid-template-columns: minmax(0,1.04fr) minmax(360px,.96fr);
        gap: 0;
        overflow: hidden;
        border: 1px solid rgba(23,105,170,.16);
        border-radius: 28px;
        background: #fff;
        box-shadow: 0 28px 78px rgba(21,79,101,.14);
      }
      .news-feature-media {
        position: relative;
        min-height: 430px;
        overflow: hidden;
        background: linear-gradient(135deg,#dff4fb,#e9faf4);
      }
      .news-feature-media img {
        width: 100%;
        height: 100%;
        min-height: 430px;
        object-fit: cover;
        object-position: center;
        transition: transform .35s ease;
      }
      .news-feature-card:hover .news-feature-media img { transform: scale(1.018); }
      .news-image-credit {
        position: absolute;
        right: 14px;
        bottom: 14px;
        left: 14px;
        padding: 9px 11px;
        color: #fff;
        border: 1px solid rgba(255,255,255,.22);
        border-radius: 11px;
        background: rgba(5,37,54,.72);
        backdrop-filter: blur(10px);
        font-size: .66rem;
        line-height: 1.45;
      }
      .news-feature-copy {
        display: flex;
        flex-direction: column;
        padding: 34px;
      }
      .news-feature-copy > span {
        color: var(--kp-blue);
        font-size: .68rem;
        font-weight: 900;
        letter-spacing: .1em;
        text-transform: uppercase;
      }
      .news-feature-copy h2 {
        margin: 13px 0 12px;
        color: var(--kp-navy);
        font-size: clamp(1.55rem,2.4vw,2.3rem);
        line-height: 1.28;
        letter-spacing: -.025em;
      }
      .news-feature-copy > p {
        margin: 0;
        color: var(--kp-muted);
        font-size: .88rem;
      }
      .news-signal-grid {
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 10px;
        margin-top: 22px;
      }
      .news-signal-grid article {
        min-height: 114px;
        padding: 15px;
        border: 1px solid var(--kp-line);
        border-radius: 14px;
        background: #f8fbfd;
      }
      .news-signal-grid article:nth-child(1) { border-top: 4px solid var(--kp-blue); }
      .news-signal-grid article:nth-child(2) { border-top: 4px solid var(--kp-teal); }
      .news-signal-grid article:nth-child(3) { border-top: 4px solid var(--kp-gold); }
      .news-signal-grid article:nth-child(4) { border-top: 4px solid var(--kp-coral); }
      .news-signal-grid strong {
        display: block;
        color: var(--kp-navy);
        font-size: .78rem;
      }
      .news-signal-grid span {
        display: block;
        margin-top: 5px;
        color: var(--kp-muted);
        font-size: .71rem;
        line-height: 1.55;
      }
      .news-feature-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        margin-top: auto;
        padding-top: 24px;
      }
      .news-feature-actions a {
        display: inline-flex;
        min-height: 42px;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 9px 14px;
        border-radius: 11px;
        font-size: .76rem;
        font-weight: 850;
      }
      .news-open-source { color: #fff; background: linear-gradient(135deg,var(--kp-blue),var(--kp-teal)); box-shadow: 0 10px 24px rgba(23,105,170,.2); }
      .news-jump-evidence { color: var(--kp-blue); border: 1px solid #bdd8ea; background: #f4faff; }
      .news-evidence-note {
        display: grid;
        grid-template-columns: 34px 1fr;
        gap: 11px;
        align-items: start;
        margin-top: 18px;
        padding: 14px;
        border: 1px solid #f0d1a0;
        border-radius: 14px;
        background: #fff8e9;
      }
      .news-evidence-note b {
        display: grid;
        width: 31px;
        height: 31px;
        place-items: center;
        color: #fff;
        border-radius: 10px;
        background: var(--kp-gold);
        font-size: .72rem;
      }
      .news-evidence-note span { color: #705d3b; font-size: .74rem; line-height: 1.55; }
      @media (max-width: 980px) {
        .news-feature-card { grid-template-columns: 1fr; }
        .news-feature-media,.news-feature-media img { min-height: 420px; }
      }
      @media (max-width: 620px) {
        .krabi-news-feature { padding: 54px 0; }
        .news-feature-copy { padding: 24px 20px; }
        .news-feature-media,.news-feature-media img { min-height: 310px; }
        .news-signal-grid { grid-template-columns: 1fr; }
      }
      @media print {
        .krabi-news-feature { padding: 7mm 0; background: #fff !important; }
        .news-feature-card { grid-template-columns: .9fr 1.1fr; box-shadow: none; }
        .news-feature-media,.news-feature-media img { min-height: 250px; }
        .news-feature-actions { display: none; }
      }
    `;
    document.head.appendChild(style);
  };

  const addNewsFeature = () => {
    if (document.getElementById('prachachat-news-feature')) return;
    const hero = document.querySelector('.krabi-hero');
    if (!hero) return;

    const section = document.createElement('section');
    section.id = 'prachachat-news-feature';
    section.className = 'krabi-news-feature';
    section.setAttribute('aria-labelledby', 'prachachat-news-title');
    section.innerHTML = `
      <div class="container">
        <div class="news-feature-kicker">
          <span class="news-source-badge">ข่าวต้นทางของ Pilot</span>
          <span class="news-advertorial-badge">Advertorial · ใช้เป็น Published Testimony</span>
          <span class="news-date-badge">22 กรกฎาคม 2569</span>
        </div>
        <article class="news-feature-card">
          <a class="news-feature-media" href="${NEWS_URL}" target="_blank" rel="noreferrer" aria-label="เปิดบทความประชาชาติธุรกิจในแท็บใหม่">
            <img src="${NEWS_IMAGE}" alt="ภาพประกอบบทความประชาชาติธุรกิจ แสดงตัวแทนชุมชนจากจังหวัดกระบี่ตามคำบรรยายภาพต้นฉบับ" loading="lazy" referrerpolicy="no-referrer">
            <span class="news-image-credit">ภาพจากประชาชาติธุรกิจ · คำบรรยายต้นฉบับระบุว่าเป็นตัวแทนชุมชนจาก จ.กระบี่</span>
          </a>
          <div class="news-feature-copy">
            <span>ประชาชาติธุรกิจ · Blu Green Token</span>
            <h2 id="prachachat-news-title">DITTO ปักธง “Blu Green Token” หนุนเศรษฐกิจสีเขียวและชุมชนยั่งยืน</h2>
            <p>บทความรายงานทั้งมิติสินทรัพย์ดิจิทัลเพื่อสิ่งแวดล้อม เทคโนโลยีติดตามป่าชายเลน และคำให้ข้อมูลจากตัวแทนชุมชนในจังหวัดกระบี่ ซึ่งเป็นฐานตั้งต้นของ Krabi Dual-Site Pilot นี้</p>

            <div class="news-signal-grid">
              <article><strong>โมเดลสามฝ่าย</strong><span>เอกชนสนับสนุนทุนและการดำเนินงาน ชุมชนดูแลพื้นที่ และภาครัฐสนับสนุนด้านที่เกี่ยวข้อง</span></article>
              <article><strong>บ้านโคกยูง</strong><span>กองทุนชุมชน ทุนการศึกษา วิสาหกิจท่องเที่ยวเชิงอนุรักษ์ และกิจกรรมพายคายัค</span></article>
              <article><strong>บ้านท่าประดู่</strong><span>สัตว์น้ำและรายได้ประมงที่ชุมชนสังเกตว่าดีขึ้น รวมถึงการเลี้ยงชันโรงเป็นอาชีพเสริม</span></article>
              <article><strong>สิ่งที่ Pilot ต้องทำต่อ</strong><span>จับคู่ Plot/MOU ขอ Consent สร้าง Baseline และตรวจ Outcome ก่อนยกระดับ Claim</span></article>
            </div>

            <div class="news-evidence-note"><b>C</b><span>ข่าวชิ้นนี้เป็นแหล่งข้อมูลแบบ Advertorial จึงใช้ยืนยันว่ามีการเผยแพร่คำให้ข้อมูลดังกล่าวได้ แต่ยังไม่ใช่ Independent Verification ของรายได้ ผลทางนิเวศ หรือความสัมพันธ์เชิงเหตุ–ผล</span></div>

            <div class="news-feature-actions">
              <a class="news-open-source" href="${NEWS_URL}" target="_blank" rel="noreferrer">อ่านข่าวต้นฉบับ <span aria-hidden="true">↗</span></a>
              <a class="news-jump-evidence" href="#source-basis">ดูขอบเขตการใช้หลักฐาน <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </article>
      </div>`;

    hero.after(section);

    const image = section.querySelector('img');
    image?.addEventListener('error', () => {
      const media = section.querySelector('.news-feature-media');
      if (!media) return;
      image.remove();
      media.insertAdjacentHTML('afterbegin', '<div style="min-height:430px;display:grid;place-items:center;padding:32px;color:#1769aa;background:linear-gradient(135deg,#e8f6ff,#ecfff7);font-weight:900;text-align:center">เปิดภาพประกอบจากข่าวต้นฉบับไม่ได้<br><small style="margin-top:8px;color:#60737c;font-weight:700">กดที่พื้นที่นี้เพื่อเปิดบทความประชาชาติธุรกิจ</small></div>');
    });
  };

  const updateImagePolicyNote = () => {
    const note = document.querySelector('.source-alert span');
    if (!note) return;
    note.textContent = 'หน้า Pilot ใช้ภาพจากบทความเฉพาะในรูปแบบ News Preview พร้อมเครดิตและลิงก์กลับต้นฉบับ ไม่ดัดแปลงเป็นภาพโฆษณา ไม่สร้าง Public Personal Profile และไม่ใช้คำสัมภาษณ์นอกบริบทก่อนมี Consent สำหรับแพลตฟอร์ม';
  };

  addNewsStyles();
  addNewsFeature();
  updateImagePolicyNote();

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
