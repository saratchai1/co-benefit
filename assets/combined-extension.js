(() => {
  const EXTENSION_ID = 'additional-strategy-integration';

  const colors = {
    governance: '#a85d4e',
    nature: '#2f7a60',
    community: '#c9822b',
    learning: '#2e7180',
    business: '#785b7d'
  };

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const modules = [
    {
      tag: 'Ecological restoration',
      color: colors.nature,
      title: 'CBEMR & Ecological Hydrology',
      description: 'ใช้ Community-Based Ecological Mangrove Restoration ตรวจระบบน้ำขึ้นน้ำลง ร่องน้ำ ตะกอน และความเหมาะสมของชนิดพันธุ์ ก่อนตัดสินใจปลูกซ่อมหรือแทรกแซงพื้นที่',
      timing: 'ปี 4 เป็นฐาน และติดตามต่อเนื่อง',
      evidence: 'Hydrology map · tidal connectivity · sediment record · adaptive action log',
      gate: 'แทรกแซงเฉพาะจุดที่การไหลเวียนน้ำเป็นข้อจำกัดและผ่านการออกแบบร่วมกับชุมชน/ผู้เชี่ยวชาญ'
    },
    {
      tag: 'Biodiversity innovation',
      color: colors.learning,
      title: 'eDNA Biodiversity Evidence',
      description: 'เก็บตัวอย่างน้ำ ดิน หรือตะกอนเพื่อค้นหาร่องรอยพันธุกรรมของสิ่งมีชีวิต โดยใช้เสริมการสำรวจภาคสนามและการเปิดเผยข้อมูลด้าน Biodiversity ของ GRI',
      timing: 'Baseline ปี 4 · ทวนซ้ำปี 6 และปี 8',
      evidence: 'Sampling protocol · laboratory QA/QC · species list · reference database',
      gate: 'ใช้เป็นหลักฐานเสริม ไม่ตีความการตรวจพบ eDNA ว่าเท่ากับจำนวนประชากรหรือการฟื้นตัวโดยอัตโนมัติ'
    },
    {
      tag: 'Impact valuation',
      color: colors.business,
      title: 'SROI — Social Return on Investment',
      description: 'แปลงผลลัพธ์ทางสังคม เศรษฐกิจ และสิ่งแวดล้อมเป็นมูลค่าที่เปรียบเทียบกับเงินลงทุน พร้อมหัก Deadweight, Attribution และ Drop-off',
      timing: 'Initial SROI ปี 6 · Comprehensive SROI ปี 8',
      evidence: 'Outcome data · financial proxies · stakeholder validation · sensitivity analysis',
      gate: 'ห้ามเลือกเฉพาะผลประโยชน์ที่ทำให้ตัวเลขสูง ต้องเปิดเผยสมมติฐาน ขอบเขต และปัจจัยลดทอนครบ'
    },
    {
      tag: 'Nature-risk management',
      color: colors.governance,
      title: 'TNFD LEAP Integration',
      description: 'ใช้ Locate, Evaluate, Assess และ Prepare เพื่อเชื่อมพื้นที่ป่าชายเลนกับการพึ่งพาธรรมชาติ ผลกระทบ ความเสี่ยง และโอกาสขององค์กร',
      timing: 'เริ่มปี 6 และอัปเดตรายปี',
      evidence: 'GIS interface map · dependency/impact register · risk/opportunity register · response plan',
      gate: 'การใช้ LEAP เป็นกระบวนการบริหาร ไม่ใช่คำรับรองว่าองค์กรผ่านการรับรองจาก TNFD'
    },
    {
      tag: 'Community economy',
      color: colors.community,
      title: 'Eco-Social Enterprise & Coastal Food Security',
      description: 'ศึกษาความเหมาะสมและทดลองวิสาหกิจ เช่น ธนาคารสัตว์น้ำ ผึ้งชันโรง ผ้ามัดย้อมจากวัสดุที่เก็บอย่างยั่งยืน พืชทนเค็ม หรือผลิตภัณฑ์ชุมชนสำหรับ Corporate Gifts',
      timing: 'Feasibility/Pilot ปี 5 · ขยายเฉพาะโมเดลที่ผ่านในปี 6–8',
      evidence: 'Net income · resource-use rule · local procurement · benefit distribution · ecological impact',
      gate: 'แต่ละกิจกรรมต้องผ่านความเหมาะสมของพื้นที่ ตลาด สิทธิการใช้ทรัพยากร และผลกระทบต่อระบบนิเวศ'
    },
    {
      tag: 'Social asset',
      color: colors.learning,
      title: 'Learning Center & Community-Based Tourism',
      description: 'พัฒนาพื้นที่เป็นศูนย์เรียนรู้ เส้นทางศึกษาธรรมชาติแบบ Low-impact และระบบมัคคุเทศก์ท้องถิ่น เมื่อสภาพป่า สิทธิพื้นที่ และความสามารถรองรับผ่านเกณฑ์',
      timing: 'Feasibility ปี 5–6 · ออกแบบ/ดำเนินการแบบมีเงื่อนไขปี 7–8',
      evidence: 'Carrying capacity · visitor management · guide income · learning assessment · maintenance plan',
      gate: 'ไม่สร้าง Boardwalk หรือหอชมวิวเพียงเพื่อภาพลักษณ์ ต้องมีสิทธิพื้นที่ งบดูแล และการประเมินผลกระทบก่อน'
    },
    {
      tag: 'Rights & institutions',
      color: colors.governance,
      title: 'Co-management & Institutional Partnership',
      description: 'ตรวจกรรมสิทธิ์และสิทธิใช้ประโยชน์ วางบทบาทองค์กรเป็น Enabler/Facilitator สนับสนุนการบริหารร่วมกับชุมชน และสร้าง MOU กับหน่วยงานหรือเครือข่ายที่เกี่ยวข้อง',
      timing: 'Due diligence ปี 4 · พัฒนา partnership ปี 4–5 · ทบทวนต่อเนื่อง',
      evidence: 'Land/right register · consent record · agreement · grievance log · institutional workplan',
      gate: 'หลีกเลี่ยง Green Grabbing และห้ามสื่อสารความเป็นเจ้าของเหนือสิทธิของชุมชนหรือหน่วยงานรัฐ'
    },
    {
      tag: 'Research candidate',
      color: '#5e6f77',
      title: 'Public Health & Pollution Evidence',
      description: 'ศึกษาความเป็นไปได้ของการวัดคุณภาพน้ำ อากาศ เสียง หรือผลต่อสุขภาพ เฉพาะพื้นที่ที่มีแหล่งมลพิษ เส้นทางผลกระทบ และข้อมูลเปรียบเทียบเพียงพอ',
      timing: 'Feasibility ปี 6 ก่อนตัดสินใจเป็น KPI หลัก',
      evidence: 'Pollution baseline · exposure pathway · comparison/control · health or avoided-cost data',
      gate: 'ไม่กล่าวอ้างว่าป่าลด PM2.5 โรค หรือค่ารักษาพยาบาล หากยังพิสูจน์ Causal Attribution ไม่ได้'
    }
  ];

  const programmeRows = [
    ['13. CBEMR & Ecological Hydrology', 'สำรวจระบบน้ำขึ้นลง ร่องน้ำ ตะกอน และข้อจำกัดทางกายภาพ พร้อม Adaptive Restoration Plan', 'ระบบนิเวศ · ชุมชน · ทีมภาคสนาม', 'ลดการปลูกซ่อมที่ไม่เหมาะสมและเพิ่มความน่าเชื่อถือด้านวิชาการ', 'Core · Y4'],
    ['14. eDNA Biodiversity Evidence', 'Baseline และการตรวจซ้ำจากน้ำ/ดิน/ตะกอน เชื่อมกับการสำรวจชนิดพันธุ์ภาคสนาม', 'นักวิจัย · หน่วยงาน · ผู้ตรวจสอบ', 'Conservation innovation และหลักฐาน Biodiversity ที่สื่อสารได้', 'Growth · Y4/Y6/Y8'],
    ['15. SROI Impact Valuation', 'Impact map, financial proxy, Deadweight, Attribution, Drop-off และ sensitivity analysis', 'ผู้บริหาร · ชุมชน · นักลงทุน', 'แสดงความคุ้มค่าของ CSR/CSV ด้วยกรอบที่ตรวจสอบสมมติฐานได้', 'Growth · Y6/Y8'],
    ['16. TNFD LEAP Integration', 'Locate–Evaluate–Assess–Prepare เชื่อมพื้นที่ธรรมชาติกับ Risk/Opportunity ขององค์กร', 'Risk · ESG · Finance · BD', 'Nature-risk readiness และโอกาสเชิงกลยุทธ์', 'Growth · Y6–Y8'],
    ['17. Eco-Social Enterprise & Food Security', 'Feasibility และ Pilot วิสาหกิจ/ธนาคารสัตว์น้ำที่เหมาะกับทรัพยากรและตลาดของพื้นที่', 'ครัวเรือน · ประมงพื้นบ้าน · กลุ่มอาชีพ', 'Shared value, local procurement และผลิตภัณฑ์ที่มีเรื่องราว', 'Pilot · Y5'],
    ['18. Learning Center & Community Tourism', 'Carrying-capacity study, low-impact design, local guide training และ visitor management', 'เยาวชน · ชุมชน · ผู้มาเยือน', 'Social asset, brand experience และรายได้บริการท้องถิ่น', 'Conditional · Y5–Y8'],
    ['19. Co-management & Institutional Partnership', 'Land/right due diligence, consent, MOU, technical partnership และ grievance mechanism', 'ชุมชน · หน่วยงานรัฐ · ภาคีวิชาการ', 'Legitimacy, continuity และลด Green Grabbing risk', 'Core · Y4–Y8'],
    ['20. Public Health & Pollution Evidence', 'Feasibility study สำหรับน้ำ อากาศ เสียง และผลสุขภาพพร้อม causal/attribution design', 'ชุมชน · หน่วยงานสาธารณสุข · นักวิจัย', 'ข้อมูลคุณภาพชีวิตที่กล่าวอ้างได้อย่างระมัดระวัง', 'Research · Y6']
  ];

  const roadmapAdditions = [
    [
      'สำรวจ CBEMR และ Ecological Hydrology: น้ำขึ้นลง ร่องน้ำ ตะกอน และ Natural Regeneration',
      'เก็บ eDNA Baseline ควบคู่กับการสำรวจชนิดพันธุ์ภาคสนาม',
      'ทำ Land/Right Due Diligence และวางกรอบ Co-management/MOU กับภาคีที่เกี่ยวข้อง'
    ],
    [
      'Pilot Eco-Social Enterprise และ Coastal Food Security เฉพาะโมเดลที่ผ่าน Feasibility',
      'ศึกษาความเป็นไปได้ของ Learning Center, Low-impact Boardwalk และ Community-based Tourism',
      'พัฒนาผลิตภัณฑ์ชุมชน/Corporate Gifts ภายใต้กติกาการใช้ทรัพยากรที่ยั่งยืน'
    ],
    [
      'ประเมิน Initial SROI โดยหัก Deadweight, Attribution และ Drop-off',
      'ดำเนิน TNFD LEAP Pilot และเชื่อม Nature Risk/Opportunity เข้าระบบองค์กร',
      'ทดสอบ eDNA รอบกลางและทำ Feasibility ด้านมลพิษ/สุขภาพก่อนตั้ง Claim'
    ],
    [
      'พัฒนา Learning Center หรือโครงสร้าง Low-impact เฉพาะพื้นที่ที่ผ่านสิทธิและ Carrying Capacity',
      'ฝึก Local Guide/มัคคุเทศก์น้อยและวางระบบ Visitor Management',
      'ฝัง Co-management, Local Enterprise และ Institutional Partnership ในกระบวนการประจำ'
    ],
    [
      'ตรวจ eDNA รอบปลายเทียบ Baseline และประเมิน Biodiversity Net Gain อย่างมีเงื่อนไข',
      'ทำ Comprehensive SROI และทดสอบความไวของ Financial Proxy',
      'จัดเวทีวิชาการ/Knowledge Sharing และขยายโมเดลที่ผ่านการตรวจสอบ'
    ]
  ];

  const kpiRows = [
    ['Ecological function', colors.nature, 'Tidal connectivity & hydrological suitability', 'ระบบน้ำขึ้นลงและร่องน้ำสนับสนุน Natural Regeneration มากขึ้น', 'Hydrology survey · water level · channel map · sediment record', 'Baseline / หลัง intervention / รายปี'],
    ['Biodiversity', colors.learning, 'eDNA species detection with field validation', 'องค์ประกอบชนิดพันธุ์เปลี่ยนอย่างไรเมื่อเทียบ Baseline โดยไม่ตีความเกินข้อจำกัดวิธี', 'Water/soil/sediment samples · laboratory QA/QC · field survey', 'Y4 / Y6 / Y8'],
    ['Social value', colors.business, 'SROI and net attributable impact', 'เงินลงทุนสร้างมูลค่าสุทธิเท่าใดหลังหัก Deadweight, Attribution และ Drop-off', 'Outcome database · financial proxies · stakeholder validation', 'Initial Y6 / Final Y8'],
    ['Community enterprise', colors.community, 'Enterprise viability & benefit distribution', 'กิจกรรมสร้างรายได้สุทธิจริง ใช้ทรัพยากรยั่งยืน และไม่กระจุกตัว', 'Revenue/cost · resource-use records · beneficiary registry', 'รายไตรมาส / รายปี'],
    ['Learning & tourism', colors.learning, 'Carrying capacity, learning gain & local service income', 'การเยี่ยมชมไม่เกินความสามารถรองรับและสร้างรายได้/การเรียนรู้ที่วัดได้', 'Visitor log · assessment · guide income · maintenance record', 'ทุกกิจกรรม / รายปี'],
    ['Rights & partnership', colors.governance, 'Co-management and institutional readiness', 'สิทธิ บทบาท ความยินยอม MOU และช่องทางข้อร้องเรียนมีความชัดเจน', 'Right register · agreement · consent · grievance log', 'ทบทวนราย 6 เดือน'],
    ['Health research', '#5e6f77', 'Pollution/health attribution feasibility', 'มี Baseline เส้นทางการสัมผัส และแบบประเมินที่พอจะแยกผลของโครงการหรือไม่', 'Environmental monitoring · comparison data · health/economic proxy', 'Feasibility Y6 ก่อนใช้เป็น KPI']
  ];

  const extendedTasks = [
    {
      id: 'G10', category: 'governance', tag: 'Rights', owner: 'Legal + Community Partnership Lead',
      title: 'Land/right due diligence และกรอบ Co-management',
      segments: [
        { start: 1, end: 4, label: 'Rights & co-management review' },
        { start: 5, end: 20, label: 'Annual rights review', recurring: true }
      ]
    },
    {
      id: 'G11', category: 'governance', tag: 'Partnership', owner: 'Programme Office + relevant agencies',
      title: 'MOU และ Institutional / Technical Partnership',
      segments: [
        { start: 2, end: 8, label: 'MOU & partnership workplan' },
        { start: 9, end: 20, label: 'Operate partnership', recurring: true }
      ]
    },
    {
      id: 'N9', category: 'nature', tag: 'CBEMR', owner: 'Ecology + Hydrology + community experts',
      title: 'CBEMR hydrology diagnosis และ selective restoration',
      segments: [
        { start: 1, end: 3, label: 'Hydrology diagnosis' },
        { start: 3, end: 6, label: 'Selective intervention' },
        { start: 7, end: 20, label: 'Monitor response', recurring: true }
      ]
    },
    {
      id: 'N10', category: 'nature', tag: 'eDNA', owner: 'Biodiversity team + laboratory partner',
      title: 'eDNA baseline และ repeat biodiversity verification',
      segments: [
        { start: 2, end: 4, label: 'eDNA baseline' },
        { at: 12, kind: 'milestone', label: 'Midterm sampling' },
        { start: 18, end: 20, label: 'Final repeat & comparison' }
      ]
    },
    {
      id: 'N11', category: 'nature', tag: 'Valuation', owner: 'Coastal engineers + economists',
      title: 'Coastal protection และ ecosystem-service valuation',
      segments: [
        { start: 7, end: 12, label: 'Shoreline, wave & avoided-cost study' },
        { at: 16, kind: 'milestone', label: 'Valuation update' }
      ]
    },
    {
      id: 'N12', category: 'nature', tag: 'Research', owner: 'Environment + public-health research partner',
      title: 'Pollution / public-health evidence feasibility',
      segments: [
        { start: 9, end: 12, label: 'Baseline & attribution feasibility' },
        { at: 12, kind: 'milestone', label: 'Go / No-go decision' }
      ]
    },
    {
      id: 'C10', category: 'community', tag: 'Enterprise', owner: 'Community enterprise + business mentors',
      title: 'Eco-social enterprise feasibility และ pilots',
      segments: [
        { start: 5, end: 8, label: 'Pilot selected products' },
        { start: 9, end: 20, label: 'Scale viable models', recurring: true }
      ]
    },
    {
      id: 'C11', category: 'community', tag: 'Food security', owner: 'Local fishers + Community Lead',
      title: 'Coastal food-security / aquatic-bank pilot',
      segments: [
        { start: 5, end: 8, label: 'Feasibility & co-design' },
        { start: 7, end: 12, label: 'Pilot & outcome review' }
      ]
    },
    {
      id: 'C12', category: 'community', tag: 'Tourism', owner: 'Community Lead + local guides',
      title: 'Community tourism และ Local Guide capacity',
      segments: [
        { start: 11, end: 16, label: 'Carrying capacity & training' },
        { start: 14, end: 20, label: 'Conditional operation', recurring: true }
      ]
    },
    {
      id: 'L7', category: 'learning', tag: 'TNFD', owner: 'ESG + Risk + Nature/Data Lead',
      title: 'TNFD LEAP nature-risk assessment',
      segments: [
        { start: 8, end: 12, label: 'Locate–Evaluate–Assess–Prepare' },
        { start: 13, end: 20, label: 'Integrate & update', recurring: true }
      ]
    },
    {
      id: 'L8', category: 'learning', tag: 'SROI', owner: 'Independent evaluator + Finance + Community Lead',
      title: 'Initial และ Comprehensive SROI assessment',
      segments: [
        { start: 9, end: 12, label: 'Initial SROI' },
        { start: 17, end: 20, label: 'Final SROI & sensitivity' }
      ]
    },
    {
      id: 'L9', category: 'learning', tag: 'Infrastructure', owner: 'Design team + Ecology + Community Lead',
      title: 'Learning Center / low-impact infrastructure',
      segments: [
        { start: 10, end: 13, label: 'Feasibility & concept design' },
        { start: 14, end: 16, label: 'Conditional implementation' }
      ]
    },
    {
      id: 'L10', category: 'learning', tag: 'Knowledge', owner: 'Innovation Lead + institutional partners',
      title: 'Academic forum และ strategic knowledge sharing',
      segments: [
        { at: 16, kind: 'milestone', label: 'Regional learning forum' },
        { at: 20, kind: 'milestone', label: 'Final thought-leadership forum' }
      ]
    },
    {
      id: 'B10', category: 'business', tag: 'Procurement', owner: 'Procurement + Community Enterprise Lead',
      title: 'Corporate gifts และ social-enterprise procurement',
      segments: [
        { start: 6, end: 10, label: 'Product & procurement pilot' },
        { start: 11, end: 20, label: 'Annual sourcing', recurring: true }
      ]
    },
    {
      id: 'B11', category: 'business', tag: 'Thought leadership', owner: 'Communications + ESG + BD',
      title: 'Nature-positive public case และ policy-level scaling',
      segments: [
        { start: 13, end: 20, label: 'Cases, forums & strategic scaling', recurring: true }
      ]
    }
  ];

  const addProgrammeRows = () => {
    const body = document.getElementById('portfolio-body');
    if (!body || body.querySelector('[data-source-extension="true"]')) return;

    programmeRows.forEach((row) => {
      const priorityClass = row[4].startsWith('Core')
        ? 'priority-core'
        : row[4].startsWith('Growth') || row[4].startsWith('Pilot')
          ? 'priority-growth'
          : 'priority-later';

      body.insertAdjacentHTML('beforeend', `
        <tr data-source-extension="true">
          <td><strong>${escapeHtml(row[0])}</strong></td>
          <td>${escapeHtml(row[1])}</td>
          <td>${escapeHtml(row[2])}</td>
          <td>${escapeHtml(row[3])}</td>
          <td><span class="priority-tag ${priorityClass}">${escapeHtml(row[4])}</span></td>
        </tr>`);
    });

    const heading = document.querySelector('#portfolio .section-heading h2');
    if (heading) heading.textContent = '20 โปรแกรมที่ควรมี โดยไม่จำเป็นต้องทำทุกอย่างพร้อมกัน';
  };

  const addRoadmapItems = () => {
    const cards = document.querySelectorAll('#roadmap-grid .year-card');
    if (cards.length !== roadmapAdditions.length) return;

    cards.forEach((card, index) => {
      const list = card.querySelector('ul');
      if (!list || list.querySelector('.source-added')) return;

      roadmapAdditions[index].forEach((text) => {
        const item = document.createElement('li');
        item.className = 'source-added';
        item.textContent = text;
        list.appendChild(item);
      });
    });
  };

  const addKpiRows = () => {
    const body = document.getElementById('kpi-body');
    if (!body || body.querySelector('.kpi-source-row')) return;

    kpiRows.forEach((row) => {
      body.insertAdjacentHTML('beforeend', `
        <tr class="kpi-source-row">
          <td><span class="kpi-group"><span class="kpi-dot" style="--group-color:${row[1]}"></span>${escapeHtml(row[0])}</span></td>
          <td><strong>${escapeHtml(row[2])}</strong></td>
          <td>${escapeHtml(row[3])}</td>
          <td>${escapeHtml(row[4])}</td>
          <td class="kpi-frequency">${escapeHtml(row[5])}</td>
        </tr>`);
    });
  };

  const addAdvancedSection = () => {
    if (document.getElementById(EXTENSION_ID)) return;
    const referenceSection = document.getElementById('references');
    if (!referenceSection) return;

    const section = document.createElement('section');
    section.className = 'section extension-section';
    section.id = EXTENSION_ID;
    section.innerHTML = `
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="overline">Advanced co-benefit modules</span>
            <h2>ส่วนขยายที่เพิ่มจากแผนเชิงลึก: ฟื้นฟูระบบน้ำ วัด Biodiversity และตีมูลค่าผลกระทบ</h2>
          </div>
          <p>โมดูลเหล่านี้ช่วยยกระดับโครงการจาก Monitoring ทั่วไปไปสู่การฟื้นฟูเชิงนิเวศ การวิเคราะห์มูลค่า และการสร้างสถาบันร่วม แต่ทุกโมดูลต้องผ่าน Baseline, Feasibility และ Decision Gate ก่อนนำไปกล่าวอ้างหรือขยายผล</p>
        </div>

        <div class="extension-intro">
          <article class="extension-principle">
            <span class="extension-kicker">Integration principle</span>
            <h3>ไม่แทนที่แผนเดิม แต่เพิ่มระดับความลึกให้ Workstream ที่มีอยู่</h3>
            <p>CBEMR และ eDNA อยู่ภายใต้ Nature/Learning, SROI และ LEAP อยู่ภายใต้ Evidence/Business, ส่วนวิสาหกิจ ศูนย์เรียนรู้ และ Co-management อยู่ภายใต้ Community/Governance เพื่อให้ระบบบริหารยังคงเป็นชุดเดียว</p>
          </article>
          <article class="extension-source-note">
            <span class="extension-kicker">Claim discipline</span>
            <h3>ข้อเสนอที่มีศักยภาพสูง ไม่เท่ากับผลลัพธ์ที่พิสูจน์แล้ว</h3>
            <p>คำว่า Biodiversity Net Gain, ลดคลื่น ลดโรค หรือ SROI สูง ต้องใช้ข้อมูลเฉพาะพื้นที่ แบบประเมินที่เหมาะสม และการตรวจอิสระ เว็บไซต์จึงนำเสนอเป็นแผนงาน/สมมติฐานที่ต้องทดสอบ ไม่ใช่ข้อเท็จจริงของโครงการในปัจจุบัน</p>
          </article>
        </div>

        <div class="advanced-module-grid">
          ${modules.map((module) => `
            <article class="advanced-module-card" style="--module-color:${module.color}">
              <span class="module-tag">${escapeHtml(module.tag)}</span>
              <h3>${escapeHtml(module.title)}</h3>
              <p>${escapeHtml(module.description)}</p>
              <div class="module-meta">
                <div><strong>Timing</strong><span>${escapeHtml(module.timing)}</span></div>
                <div><strong>Evidence</strong><span>${escapeHtml(module.evidence)}</span></div>
                <div><strong>Gate</strong><span>${escapeHtml(module.gate)}</span></div>
              </div>
            </article>`).join('')}
        </div>

        <div class="extension-method-grid">
          <article class="method-panel">
            <h3>TNFD LEAP สำหรับโครงการป่าชายเลน</h3>
            <p>ใช้เป็นลำดับการวิเคราะห์เพื่อเชื่อมข้อมูลพื้นที่กับการตัดสินใจขององค์กร</p>
            <div class="leap-grid">
              <div class="leap-step"><strong>L · Locate</strong><span>ทำแผนที่จุดปฏิสัมพันธ์กับธรรมชาติและพื้นที่เปราะบาง</span></div>
              <div class="leap-step"><strong>E · Evaluate</strong><span>ประเมิน Dependencies และ Impacts ต่อระบบนิเวศ</span></div>
              <div class="leap-step"><strong>A · Assess</strong><span>วิเคราะห์ Physical/Transition Risks และ Opportunities</span></div>
              <div class="leap-step"><strong>P · Prepare</strong><span>กำหนด Response, Target, Resource และ Disclosure</span></div>
            </div>
          </article>
          <article class="method-panel">
            <h3>SROI ต้องคำนวณ “ผลกระทบสุทธิ”</h3>
            <p>ตัวเลข SROI ที่น่าเชื่อถือไม่ได้เกิดจากการรวมมูลค่าประโยชน์ทั้งหมด แต่ต้องลดทอนส่วนที่ไม่ได้เกิดจากโครงการ</p>
            <div class="sroi-formula">
              <span>SROI =</span>
              <span class="fraction"><span>Present Value of Net Benefits</span><span>Present Value of Investment</span></span>
            </div>
            <small>Net Benefits ต้องพิจารณา Deadweight, Attribution, Displacement, Duration และ Drop-off พร้อมทำ Sensitivity Analysis ต่อ Financial Proxy สำคัญ</small>
          </article>
        </div>
      </div>`;

    referenceSection.before(section);
  };

  const quarterName = (index) => {
    const projectYear = Math.floor((index - 1) / 4) + 4;
    const quarter = ((index - 1) % 4) + 1;
    return `ปี ${projectYear} Q${quarter}`;
  };

  const createTaskRow = (task) => {
    const color = colors[task.category] || colors.nature;
    const row = document.createElement('div');
    row.className = 'gantt-row source-extension';
    row.dataset.category = task.category;
    row.dataset.taskId = task.id;
    row.style.setProperty('--extension-color', color);
    row.setAttribute('role', 'row');

    const taskCell = document.createElement('div');
    taskCell.className = 'gantt-task';
    taskCell.setAttribute('role', 'rowheader');

    const title = document.createElement('strong');
    title.textContent = `${task.id} · ${task.title}`;
    title.title = task.title;

    const meta = document.createElement('div');
    meta.className = 'gantt-task-meta';

    const tag = document.createElement('span');
    tag.className = 'task-type';
    tag.style.setProperty('--category-color', color);
    tag.textContent = task.tag;

    const owner = document.createElement('span');
    owner.className = 'task-owner';
    owner.textContent = task.owner;
    owner.title = `Owner: ${task.owner}`;

    meta.append(tag, owner);
    taskCell.append(title, meta);
    row.appendChild(taskCell);

    for (let index = 1; index <= 20; index += 1) {
      const cell = document.createElement('div');
      cell.className = 'quarter-cell';
      if ([1, 5, 9, 13, 17].includes(index)) cell.classList.add('year-start');
      if (Math.floor((index - 1) / 4) % 2 === 1) cell.classList.add('alt-year');
      cell.style.gridColumn = String(index + 1);
      cell.setAttribute('aria-hidden', 'true');
      row.appendChild(cell);
    }

    task.segments.forEach((segment) => {
      const isMilestone = segment.kind === 'milestone';
      const element = document.createElement('div');
      element.style.setProperty('--bar-color', color);

      if (isMilestone) {
        element.className = 'gantt-milestone';
        element.style.gridColumn = String(segment.at + 1);
        element.title = `${segment.label} · ${quarterName(segment.at)}`;
        element.setAttribute('role', 'img');
        element.setAttribute('aria-label', `${task.title}: ${segment.label} ใน ${quarterName(segment.at)}`);
      } else {
        element.className = 'gantt-bar';
        if (segment.recurring) element.classList.add('recurring');
        element.style.gridColumn = `${segment.start + 1} / ${segment.end + 2}`;
        element.title = `${segment.label} · ${quarterName(segment.start)}–${quarterName(segment.end)}`;
        element.setAttribute('role', 'img');
        element.setAttribute('aria-label', `${task.title}: ${segment.label} ตั้งแต่ ${quarterName(segment.start)} ถึง ${quarterName(segment.end)}`);

        const label = document.createElement('span');
        label.textContent = segment.label;
        element.appendChild(label);
      }

      row.appendChild(element);
    });

    return row;
  };

  const updateGanttCount = () => {
    const grid = document.getElementById('gantt-grid');
    const count = document.getElementById('task-count');
    if (!grid || !count) return;

    const rows = [...grid.querySelectorAll('.gantt-row')];
    const total = rows.length;
    const visible = rows.filter((row) => !row.hidden).length;
    const activeFilter = document.querySelector('.filter-button[aria-pressed="true"]')?.dataset.filter || 'all';
    count.textContent = activeFilter === 'all' ? String(total) : `${visible} / ${total}`;
  };

  const addGanttTasks = () => {
    const grid = document.getElementById('gantt-grid');
    if (!grid || grid.querySelector('.gantt-row.source-extension')) return;

    Object.keys(colors).forEach((category) => {
      const group = grid.querySelector(`.gantt-group-row[data-category="${category}"]`);
      if (!group) return;

      let nextGroup = group.nextElementSibling;
      while (nextGroup && !nextGroup.classList.contains('gantt-group-row')) {
        nextGroup = nextGroup.nextElementSibling;
      }

      extendedTasks
        .filter((task) => task.category === category)
        .forEach((task) => grid.insertBefore(createTaskRow(task), nextGroup));
    });

    document.querySelectorAll('.filter-button').forEach((button) => {
      button.addEventListener('click', () => window.setTimeout(updateGanttCount, 0));
    });

    const footnotes = document.querySelector('.gantt-footnotes');
    if (footnotes && !footnotes.querySelector('.extension-gantt-note')) {
      footnotes.insertAdjacentHTML('beforeend', `
        <article class="gantt-note-card extension-gantt-note">
          <h3>Conditional modules added</h3>
          <p><strong>CBEMR, eDNA, SROI, วิสาหกิจชุมชน และศูนย์เรียนรู้</strong> ถูกเพิ่มเข้า Gantt แล้ว แต่การดำเนินงานจริงต้องผ่านสิทธิพื้นที่ Feasibility, Baseline, Carrying Capacity และ Decision Gate ที่เกี่ยวข้องก่อน</p>
        </article>`);
    }

    updateGanttCount();
  };

  const run = () => {
    addProgrammeRows();
    addRoadmapItems();
    addKpiRows();
    addAdvancedSection();
    addGanttTasks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
