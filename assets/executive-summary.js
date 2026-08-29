(() => {
  const SUMMARY_ID = 'executive-summary';
  const TAB_BAR_ID = 'strategy-view-tabs';

  const decisions = [
    {
      index: '01',
      color: '#0e6652',
      title: 'อนุมัติกรอบ 5 ปี และงบปีที่ 4',
      description: 'เริ่มจาก Baseline, ระบบหลักฐาน และการฟื้นฟูที่แก้ข้อจำกัดจริงของพื้นที่ ก่อนขยายกิจกรรมด้านภาพลักษณ์',
      scope: 'Baseline · CBEMR · Registry · Community Agreement',
      outcome: 'ได้ฐานตัดสินใจที่น่าเชื่อถือภายใน 12 เดือน'
    },
    {
      index: '02',
      color: '#356f80',
      title: 'ตั้งเจ้าภาพและกติกาการกล่าวอ้าง',
      description: 'แยกผู้เก็บข้อมูล ผู้ตรวจข้อมูล และผู้อนุมัติ Claim พร้อม Steering Committee ที่ตัดสินใจ Stop, Adapt หรือ Scale',
      scope: 'Governance · Claim Policy · QA/QC · Review',
      outcome: 'ลด Greenwashing Risk และทำให้ข้อมูลใช้ใน ESG ได้'
    },
    {
      index: '03',
      color: '#c08b37',
      title: 'เลือก Pilot ที่เป็นตัวแทน ไม่ทำทุกอย่างพร้อมกัน',
      description: 'เลือกพื้นที่ 3–5 รูปแบบเพื่อพิสูจน์โมเดลชุมชน Biodiversity การเรียนรู้ และคุณค่าต่อธุรกิจ ก่อนลงทุนขยาย',
      scope: 'Pilot portfolio · Cost/outcome data · Decision gates',
      outcome: 'ขยายเฉพาะโมเดลที่ให้ผลสุทธิและชุมชนยอมรับ'
    }
  ];

  const stages = [
    {
      label: '01 · Evidence',
      title: 'พิสูจน์ว่าธรรมชาติฟื้นตัว',
      description: 'วัดเรือนยอด การงอกใหม่ ระบบน้ำ ตะกอน Biodiversity และการเปลี่ยนแปลงชายฝั่งด้วย Satellite, UAV, Field และ eDNA',
      evidence: 'Nature Recovery Index · Hydrology record · Verified datasets'
    },
    {
      label: '02 · Shared value',
      title: 'ทำให้ชุมชนได้ประโยชน์จริง',
      description: 'สร้างงานแบบมีค่าตอบแทน Local Procurement ทักษะ วิสาหกิจที่เหมาะสม และสิทธิร่วมตัดสินใจภายใต้ Community Benefit Agreement',
      evidence: 'Paid local work · Net benefit · Benefit distribution · Grievance closure'
    },
    {
      label: '03 · Corporate value',
      title: 'เปลี่ยนผลลัพธ์เป็นสินทรัพย์องค์กร',
      description: 'ใช้พื้นที่จริงและข้อมูลที่ตรวจสอบได้เพื่อสร้าง Brand Trust, Nature-risk readiness, ความสัมพันธ์ลูกค้า และบริการข้อมูลใหม่',
      evidence: 'Trust · Partnership · BD contribution · Replicable methods'
    }
  ];

  const roadmap = [
    {
      year: 'ปี 4',
      date: '2569–2570',
      phase: 'Foundation',
      title: 'สร้างฐานและ Pilot',
      focus: 'รวมหลักฐาน 3 ปี สร้าง Baseline ตรวจ Hydrology/eDNA ทำข้อตกลงชุมชน และเปิด Registry รุ่นแรก',
      gate: 'Baseline และ Claim Policy ผ่านอนุมัติ'
    },
    {
      year: 'ปี 5',
      date: '2570–2571',
      phase: 'Validation',
      title: 'พิสูจน์เต็มหนึ่งรอบ',
      focus: 'เดิน Monitoring และ Stewardship เต็มปี ทดลองวิสาหกิจ/การเรียนรู้ และทำ Independent Review ครั้งแรก',
      gate: 'คัดเฉพาะโมเดลที่มีผลสุทธิสำหรับขยาย'
    },
    {
      year: 'ปี 6',
      date: '2571–2572',
      phase: 'Selective scale',
      title: 'ขยายโมเดลที่ผ่าน',
      focus: 'ขยายงานชุมชน Local Procurement และ Citizen Science พร้อม Initial SROI, TNFD LEAP และ Data Products',
      gate: 'แสดงผล Nature–Community–Business ต่อเนื่อง'
    },
    {
      year: 'ปี 7',
      date: '2572–2573',
      phase: 'Institutionalize',
      title: 'ฝังในระบบองค์กร',
      focus: 'เชื่อม KPI เข้ากับ ESG, HR, Procurement, Risk และ BD พร้อมสร้าง Partnership และ Replication Toolkit',
      gate: 'มีเจ้าภาพและงบประจำ ไม่พึ่งทีมเฉพาะกิจ'
    },
    {
      year: 'ปี 8',
      date: '2573–2574',
      phase: 'Assure & replicate',
      title: 'ประเมิน ส่งต่อ และขยายผล',
      focus: 'ทำ Final Nature/Community/Business Evaluation, Comprehensive SROI, eDNA รอบสรุป และแผนระยะถัดไป',
      gate: 'Board ตัดสินใจ Sustain / Replicate / Scale'
    }
  ];

  const priorities = [
    {
      className: 'priority-now',
      label: 'Do now · ปี 4',
      title: 'ระบบพื้นฐานที่ขาดไม่ได้',
      items: [
        'Baseline และการแบ่งกลุ่มสภาพพื้นที่',
        'CBEMR / Ecological Hydrology',
        'Community Benefit Agreement',
        'Co-benefit Registry และ Claim Policy',
        'Owner, QA/QC และ Decision Gate'
      ]
    },
    {
      className: 'priority-prove',
      label: 'Prove next · ปี 4–6',
      title: 'โมเดลที่ต้องพิสูจน์ก่อนขยาย',
      items: [
        'eDNA ควบคู่ Field Biodiversity Survey',
        'Paid Community Stewardship',
        'Local Procurement และ Citizen Science',
        'Employee / Client Impact Visit',
        'Blue Livelihood และผลิตภัณฑ์ชุมชน'
      ]
    },
    {
      className: 'priority-scale',
      label: 'Scale conditionally · ปี 6–8',
      title: 'ลงทุนเมื่อมีหลักฐานและ Business Case',
      items: [
        'SROI และ TNFD LEAP',
        'Learning Center / Community Tourism',
        'Nature-based Data Products',
        'Partnership และ Co-funding',
        'Replication Toolkit และ Thought Leadership'
      ]
    }
  ];

  const scorecards = [
    ['Nature recovery', 'แนวโน้มเรือนยอด การงอกใหม่ และ Biodiversity เทียบ Baseline', 'รายปี / ตามฤดูกาล'],
    ['Community value', 'งานที่จ่ายจริง Local Procurement และประโยชน์สุทธิที่กระจายอย่างเป็นธรรม', 'รายไตรมาส / รายปี'],
    ['Evidence quality', 'สัดส่วน Claim ที่มีพื้นที่ วันที่ วิธีวัด เจ้าของ และหลักฐานครบ', 'ต่อเนื่อง / รายไตรมาส'],
    ['Stakeholder trust', 'ความเชื่อมั่น คุณภาพการมีส่วนร่วม และการปิดข้อร้องเรียน', 'Baseline / ปี 6 / ปี 8'],
    ['Business contribution', 'Partnership, Proposal, Client Visit และบริการใหม่ที่โครงการมีส่วนสนับสนุน', 'รายไตรมาส'],
    ['Impact valuation', 'SROI ที่หัก Deadweight, Attribution, Displacement และ Drop-off แล้ว', 'ปี 6 และปี 8']
  ];

  const risks = [
    ['ฟื้นฟูผิดปัญหา', 'ปลูกซ้ำในพื้นที่ที่ระบบน้ำหรือตะกอนไม่เหมาะสม', 'ใช้ CBEMR/Hydrology Review ก่อนแทรกแซง'],
    ['สิทธิพื้นที่และ Green Grabbing', 'สื่อสารหรือดำเนินงานเกินสิทธิของชุมชน/รัฐ', 'Land-right due diligence, consent และ co-management'],
    ['Greenwashing', 'ใช้จำนวนต้นไม้หรือกิจกรรมแทน Outcome/Impact', 'Claim level, evidence ID และ independent review'],
    ['Portfolio กระจายเกินไป', 'ทำ 20 โปรแกรมพร้อมกันจนงบและทีมบาง', 'แบ่ง Core–Pilot–Conditional และใช้ annual gate'],
    ['โครงสร้างพื้นฐานสร้างภาระ', 'ลงทุน Boardwalk/ศูนย์เรียนรู้ก่อนมีสิทธิ งบดูแล หรือ carrying capacity', 'Feasibility และ maintenance plan ก่อนลงทุน']
  ];

  const ninetyDays = [
    ['0–30 วัน', 'ตั้งระบบกำกับ', 'แต่งตั้ง Steering Committee, Workstream Owners และรวบรวม Evidence จาก 3 ปีแรก'],
    ['31–60 วัน', 'ออกแบบฐานและเลือก Pilot', 'แบ่งกลุ่มพื้นที่ เลือกแปลงตัวแทน ออกแบบ Baseline และร่าง Community Benefit Agreement'],
    ['61–90 วัน', 'เริ่มภาคสนามและอนุมัติงบ', 'เก็บ Baseline รอบแรก เปิด Registry MVP อนุมัติ Claim Policy และงบปีที่ 4']
  ];

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const executiveMarkup = () => `
    <section class="executive-hero" aria-labelledby="executive-title">
      <div class="container">
        <div class="executive-hero-grid">
          <div>
            <p class="eyebrow">Executive Summary · Project years 4–8</p>
            <h1 id="executive-title">จากโครงการปลูกป่า สู่ <span class="accent">สินทรัพย์เชิงยุทธศาสตร์ขององค์กร</span></h1>
            <p class="hero-lead">ข้อเสนอ 5 ปีนี้เปลี่ยนหน่วยวัดจาก “ปลูกกี่ต้น” ไปสู่ “ธรรมชาติฟื้นอย่างไร ชุมชนได้ประโยชน์อะไร และบริษัทนำหลักฐานไปสร้างความเชื่อมั่น ลดความเสี่ยง และต่อยอดธุรกิจได้อย่างไร”</p>
            <div class="hero-actions">
              <a class="button button-primary" href="./gantt/">เปิด Implementation Gantt <span aria-hidden="true">→</span></a>
              <button class="button button-secondary" id="print-executive" type="button">พิมพ์ Executive Summary</button>
            </div>
            <div class="executive-status-row">
              <span class="executive-status-chip">แยกจาก Carbon Credit MRV</span>
              <span class="executive-status-chip">Baseline ก่อนตั้ง Target</span>
              <span class="executive-status-chip">Pilot ก่อน Scale</span>
              <span class="executive-status-chip">Independent Review</span>
            </div>
          </div>

          <aside class="board-takeaway" aria-label="ข้อเสนอสำหรับผู้บริหาร">
            <span class="board-takeaway-label">Recommendation to management</span>
            <h2>อนุมัติ “กรอบ 5 ปี” แต่อนุมัติการลงทุนแบบเป็นขั้น ไม่เปิดทุกโปรแกรมพร้อมกัน</h2>
            <ul class="board-takeaway-list">
              <li><span class="takeaway-number">1</span><span>ปีที่ 4 ลงทุนใน Baseline, Governance และ Pilot ที่วัดผลได้</span></li>
              <li><span class="takeaway-number">2</span><span>ปีที่ 5–6 ขยายเฉพาะโมเดลที่มีผลสุทธิและชุมชนยืนยันประโยชน์</span></li>
              <li><span class="takeaway-number">3</span><span>ปีที่ 7–8 ฝังใน ESG, HR, Procurement, Risk และ Business Development</span></li>
            </ul>
            <div class="board-recommendation"><strong>ข้อเสนอการตัดสินใจ:</strong> อนุมัติงบและเจ้าภาพปีที่ 4 พร้อมกำหนด Annual Gate แบบ Stop / Adapt / Scale</div>
          </aside>
        </div>

        <div class="executive-metric-strip" aria-label="ตัวเลขสรุปแผน">
          <div class="executive-metric"><strong>5 ปี</strong><span>29 ส.ค. 2569 – 28 ส.ค. 2574</span></div>
          <div class="executive-metric"><strong>20 ไตรมาส</strong><span>มี Milestone และ Decision Gate ชัดเจน</span></div>
          <div class="executive-metric"><strong>20 โปรแกรม</strong><span>แบ่ง Core, Pilot และ Conditional Scale</span></div>
          <div class="executive-metric"><strong>5 Workstreams</strong><span>Nature · Community · Learning · Business · Governance</span></div>
        </div>
      </div>
    </section>

    <section class="executive-section" id="executive-decisions">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Board decisions</span><h2>3 เรื่องที่ผู้บริหารต้องตัดสินใจก่อนเริ่มปีที่ 4</h2></div>
          <p>รายละเอียดทางเทคนิคมีอยู่ใน Full Strategy แต่การเริ่มแผนให้ถูกลำดับขึ้นอยู่กับสามการตัดสินใจนี้</p>
        </div>
        <div class="decision-grid">
          ${decisions.map((item) => `
            <article class="decision-card" style="--decision-color:${item.color}">
              <span class="decision-index">${item.index}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              <div class="decision-meta">
                <div><strong>Scope</strong><span>${escapeHtml(item.scope)}</span></div>
                <div><strong>Outcome</strong><span>${escapeHtml(item.outcome)}</span></div>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section executive-section-dark" id="executive-value">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Value thesis</span><h2>เส้นทางสร้างคุณค่า: หลักฐาน → คุณค่าร่วม → สินทรัพย์องค์กร</h2></div>
          <p>ภาพลักษณ์ที่ยั่งยืนต้องเกิดจากผลลัพธ์ที่ตรวจสอบได้ ไม่ใช่เริ่มจากการประชาสัมพันธ์ แล้วค่อยหาหลักฐานภายหลัง</p>
        </div>
        <div class="value-thesis">
          ${stages.map((item) => `
            <article class="value-stage">
              <span class="stage-label">${escapeHtml(item.label)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              <div class="stage-evidence"><strong>Evidence</strong><span>${escapeHtml(item.evidence)}</span></div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section executive-section-soft" id="executive-roadmap">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Five-year journey</span><h2>หนึ่งประโยคต่อหนึ่งปี พร้อมเกณฑ์ผ่านก่อนเดินต่อ</h2></div>
          <p>Roadmap ไม่ใช่รายการกิจกรรมต่อเนื่องอัตโนมัติ ทุกปีต้องจบด้วยข้อมูลที่พอสำหรับการตัดสินใจว่าจะหยุด ปรับ หรือขยาย</p>
        </div>
        <div class="executive-roadmap">
          ${roadmap.map((item, index) => `
            <article class="executive-year-card">
              <div class="executive-year-top"><span class="year-step">${String(index + 1).padStart(2, '0')}</span><span class="year-phase">${escapeHtml(item.phase)}</span></div>
              <span class="year-label">${escapeHtml(item.year)} · ${escapeHtml(item.date)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.focus)}</p>
              <div class="year-gate"><span>Decision Gate</span><strong>${escapeHtml(item.gate)}</strong></div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section" id="executive-priorities">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Portfolio discipline</span><h2>แบ่ง 20 โปรแกรมเป็น 3 ระดับการลงทุน</h2></div>
          <p>วิธีนี้ป้องกันแผนใหญ่เกินกำลังและทำให้ผู้บริหารเห็นชัดว่างบใดเป็น Foundation งบใดเป็น Pilot และงบใดต้องรอหลักฐาน</p>
        </div>
        <div class="priority-board">
          ${priorities.map((column) => `
            <article class="priority-column ${column.className}">
              <span class="priority-label">${escapeHtml(column.label)}</span>
              <h3>${escapeHtml(column.title)}</h3>
              <ul>${column.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section executive-section-soft" id="executive-scorecard">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Executive scorecard</span><h2>ผู้บริหารติดตามเพียง 6 ตัวชี้วัดแกนกลาง</h2></div>
          <p>เป้าหมายเชิงตัวเลขของ Nature และ Community ควรกำหนดหลังจบ Baseline ปีที่ 4 เพื่อไม่ใช้ตัวเลขเดียวกับพื้นที่ที่มีสภาพต่างกัน</p>
        </div>
        <div class="executive-scorecard">
          ${scorecards.map((item, index) => `
            <article class="scorecard-item">
              <span class="score-index">${String(index + 1).padStart(2, '0')}</span>
              <div><h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p><span class="score-frequency">${escapeHtml(item[2])}</span></div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section" id="executive-risks">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">Risk & guardrails</span><h2>ความเสี่ยงที่อาจทำให้ CSR กลายเป็นภาระด้านชื่อเสียง</h2></div>
          <p>แผนนี้จึงวาง Claim Discipline, Rights Due Diligence และ Feasibility Gate ไว้ตั้งแต่ต้น ไม่รอให้เกิดปัญหาแล้วค่อยแก้</p>
        </div>
        <div class="risk-register">
          <div class="risk-header"><span>ความเสี่ยง</span><span>เหตุที่ต้องระวัง</span><span>มาตรการควบคุม</span></div>
          ${risks.map((item) => `<div class="risk-row"><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span><span>${escapeHtml(item[2])}</span></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="executive-section executive-section-dark" id="executive-next">
      <div class="container">
        <div class="executive-heading">
          <div><span class="overline">First 90 days</span><h2>เริ่มได้ทันทีโดยยังไม่ต้องรอให้แผนทั้ง 5 ปีสมบูรณ์ทุกจุด</h2></div>
          <p>เป้าหมาย 90 วันแรกคือสร้างเจ้าภาพ ฐานข้อมูล และพื้นที่ Pilot ที่ทำให้การอนุมัติงบและการทำงานภาคสนามมีทิศทางเดียวกัน</p>
        </div>
        <div class="ninety-day-grid">
          ${ninetyDays.map((item) => `
            <article class="ninety-day-card"><span>${escapeHtml(item[0])}</span><h3>${escapeHtml(item[1])}</h3><p>${escapeHtml(item[2])}</p></article>`).join('')}
        </div>
        <div class="executive-final-cta">
          <div><span>Recommended next step</span><strong>รับรองกรอบ 5 ปี และมอบหมายให้ Programme Office จัดทำ Year-4 Investment Case ภายในรอบอนุมัติงบถัดไป</strong></div>
          <div class="executive-final-actions"><button type="button" class="button button-secondary" data-open-full-strategy>เปิด Full Strategy</button><a class="button button-primary" href="./gantt/">ดู Gantt 20 ไตรมาส →</a></div>
        </div>
      </div>
    </section>`;

  const setView = (view, options = {}) => {
    const { scrollTop = false, updateStorage = true } = options;
    const isFull = view === 'full';

    document.body.classList.toggle('strategy-view-full', isFull);
    document.body.classList.toggle('strategy-view-executive', !isFull);

    document.querySelectorAll('[data-strategy-view]').forEach((button) => {
      const active = button.dataset.strategyView === view;
      button.setAttribute('aria-selected', String(active));
      button.setAttribute('aria-pressed', String(active));
      button.tabIndex = active ? 0 : -1;
    });

    if (updateStorage) {
      try { window.sessionStorage.setItem('coBenefitStrategyView', view); } catch (_) { /* no-op */ }
    }

    if (scrollTop) {
      document.getElementById(TAB_BAR_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const addTabs = (main) => {
    if (document.getElementById(TAB_BAR_ID)) return;

    const bar = document.createElement('div');
    bar.id = TAB_BAR_ID;
    bar.className = 'strategy-view-bar';
    bar.innerHTML = `
      <div class="container strategy-view-inner">
        <div class="strategy-view-label"><span>Presentation view</span><strong>เลือกมุมมองให้เหมาะกับผู้ชม</strong></div>
        <div class="strategy-tab-list" role="tablist" aria-label="มุมมองแผน Co-benefit">
          <button type="button" role="tab" data-strategy-view="executive" aria-controls="${SUMMARY_ID}">Executive Summary</button>
          <button type="button" role="tab" data-strategy-view="full" aria-controls="overview">Full Strategy</button>
          <a class="strategy-gantt-link" href="./gantt/">Implementation Gantt <span aria-hidden="true">↗</span></a>
        </div>
      </div>`;
    main.insertBefore(bar, main.firstChild);
  };

  const addSummary = (main) => {
    if (document.getElementById(SUMMARY_ID)) return;
    const summary = document.createElement('div');
    summary.id = SUMMARY_ID;
    summary.className = 'executive-summary-view';
    summary.innerHTML = executiveMarkup();
    const tabs = document.getElementById(TAB_BAR_ID);
    tabs?.after(summary);
  };

  const bindInteractions = () => {
    document.querySelectorAll('[data-strategy-view]').forEach((button) => {
      button.addEventListener('click', () => setView(button.dataset.strategyView || 'executive', { scrollTop: true }));
      button.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        const tabs = [...document.querySelectorAll('[data-strategy-view]')];
        const current = tabs.indexOf(button);
        const next = event.key === 'ArrowRight' ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        setView(tabs[next].dataset.strategyView || 'executive');
      });
    });

    document.querySelectorAll('[data-open-full-strategy]').forEach((button) => {
      button.addEventListener('click', () => setView('full', { scrollTop: true }));
    });

    document.getElementById('print-executive')?.addEventListener('click', () => window.print());

    document.querySelectorAll('.site-nav a[href*="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const url = new URL(link.href, window.location.href);
        const targetId = url.hash.replace('#', '');
        const target = document.getElementById(targetId);
        if (!target || target.closest(`#${SUMMARY_ID}`)) return;
        event.preventDefault();
        setView('full', { updateStorage: true });
        window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
      });
    });
  };

  const initialView = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== SUMMARY_ID && document.getElementById(hash)) return 'full';
    try {
      const stored = window.sessionStorage.getItem('coBenefitStrategyView');
      if (stored === 'full' || stored === 'executive') return stored;
    } catch (_) { /* no-op */ }
    return 'executive';
  };

  const enhanceGantt = () => {
    const section = document.querySelector('.gantt-section');
    if (!section || document.querySelector('.gantt-management-lens')) return;

    const lens = document.createElement('div');
    lens.className = 'gantt-management-lens';
    lens.innerHTML = `
      <div class="container gantt-management-grid">
        <div><span>01 · Foundation</span><strong>ปี 4</strong><p>Baseline, rights, governance และ pilot</p></div>
        <div><span>02 · Prove & scale</span><strong>ปี 5–6</strong><p>พิสูจน์ผลเต็มรอบและขยายเฉพาะโมเดลที่ผ่าน</p></div>
        <div><span>03 · Institutionalize</span><strong>ปี 7–8</strong><p>ฝังในองค์กร ประเมินผล และส่งต่อ</p></div>
        <a href="../" class="gantt-back-executive">กลับ Executive Summary <span aria-hidden="true">↗</span></a>
      </div>`;
    section.before(lens);
  };

  const run = () => {
    const main = document.getElementById('main-content');
    if (!main) return;

    if (document.getElementById('portfolio')) {
      addTabs(main);
      addSummary(main);
      bindInteractions();
      setView(initialView(), { updateStorage: false });
    }

    if (document.getElementById('gantt-grid')) enhanceGantt();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
