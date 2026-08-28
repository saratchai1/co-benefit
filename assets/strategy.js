(() => {
  const pillars = [
    {
      number: '01', color: '#2f7a60', title: 'Nature Recovery & Coastal Resilience',
      goal: 'พิสูจน์ว่าพื้นที่ไม่ได้เพียงมีต้นไม้รอด แต่กำลังกลับไปทำหน้าที่เป็นระบบนิเวศชายฝั่ง',
      actions: ['ติดตามเรือนยอด การงอกใหม่ และโครงสร้างป่า', 'สำรวจชนิดพันธุ์และตัวชี้วัดความหลากหลายทางชีวภาพ', 'ติดตามแนวชายฝั่ง ตะกอน น้ำ และสัญญาณความทนทาน', 'ปรับการบำรุงและปลูกซ่อมด้วย Adaptive Management'],
      value: 'Nature-positive evidence · Risk intelligence · Environmental data services'
    },
    {
      number: '02', color: '#c9822b', title: 'Community Shared Value',
      goal: 'ทำให้ชุมชนเป็นหุ้นส่วนที่มีสิทธิ มีรายได้ และร่วมตัดสินใจ ไม่ใช่เพียงผู้รับกิจกรรม',
      actions: ['ทำ Community Benefit Agreement รายพื้นที่', 'จ้างดูแลป่าและติดตามข้อมูลแบบมีค่าตอบแทน', 'เพิ่ม Local Procurement และทะเบียนผู้ให้บริการ', 'ทดลอง Blue Livelihood ที่ไม่ทำลายระบบนิเวศ'],
      value: 'Social license · Local capability · Stable field operations'
    },
    {
      number: '03', color: '#2e7180', title: 'Learning, Research & Innovation',
      goal: 'ใช้พื้นที่จริงเป็น Living Lab สำหรับการเรียนรู้ การวิจัย และการพัฒนาวิธีวัดที่ทำซ้ำได้',
      actions: ['Citizen Science ร่วมกับโรงเรียนและชุมชน', 'โจทย์วิจัยร่วมกับมหาวิทยาลัยและผู้เชี่ยวชาญ', 'พัฒนา Digital Spatial Platform และ Data Products', 'สร้าง Replication Toolkit สำหรับพื้นที่อื่น'],
      value: 'Innovation · IP/know-how · Talent pipeline · Replicable methods'
    },
    {
      number: '04', color: '#785b7d', title: 'Corporate Engagement & Market Value',
      goal: 'เปลี่ยนหลักฐานภาคสนามให้เป็นความเชื่อมั่น ความสัมพันธ์ และความแตกต่างเชิงธุรกิจ',
      actions: ['Employee & Leadership Stewardship', 'Client / Investor Impact Visit', 'CSR/ESG Partnership Package และ Co-funding', 'เชื่อมผลลัพธ์กับ Proposal, ESG, TNFD และ GRI'],
      value: 'Brand trust · BD differentiation · Employer brand · Partnerships'
    },
    {
      number: '05', color: '#a85d4e', title: 'Evidence, Governance & Disclosure',
      goal: 'ทำให้ทุกคำกล่าวอ้างมีข้อมูลต้นทาง วิธีวัด เจ้าของข้อมูล และการตรวจสอบย้อนหลัง',
      actions: ['Co-benefit Registry และ Data Dictionary', 'Claim Policy แยกจาก Carbon Credit MRV', 'Annual Beyond Carbon Impact Report', 'Independent Review และ Corrective-action tracking'],
      value: 'Credibility · Claim control · ESG readiness · Management discipline'
    }
  ];

  const programmes = [
    ['1. Co-benefit Baseline & Registry', 'Baseline, KPI, วิธีวัด, Evidence ID และ Claim Level รายพื้นที่', 'ผู้บริหาร · ทีมโครงการ · ผู้ตรวจสอบ', 'ควบคุมคำกล่าวอ้างและตัดสินใจจากข้อมูล', 'Core · เริ่มทันที'],
    ['2. Community Benefit Agreement', 'บทบาท สิทธิประโยชน์ การตัดสินใจ และช่องทางข้อร้องเรียน', 'ชุมชน · ผู้ปฏิบัติงานพื้นที่', 'Social license และลดความขัดแย้ง', 'Core · เริ่มทันที'],
    ['3. Nature Recovery Monitoring', 'Canopy, regeneration, biodiversity, hydrology และ adaptive action', 'ระบบนิเวศ · หน่วยงาน · นักวิจัย', 'Nature-positive case และบริการข้อมูล', 'Core · ต่อเนื่อง'],
    ['4. Community Stewardship Contracts', 'งานดูแลป่าแบบจ่ายค่าตอบแทน พร้อมมาตรฐานงานและหลักฐานส่งมอบ', 'แรงงาน · กลุ่มชุมชน', 'คุณภาพงานต่อเนื่องและรายได้ท้องถิ่น', 'Core · Pilot Y4'],
    ['5. Local Procurement Programme', 'ทะเบียนผู้ขาย หมวดงานที่ชุมชนทำได้ และเป้าหมายสัดส่วนจัดซื้อ', 'ธุรกิจท้องถิ่น · ผู้ให้บริการ', 'กระจายประโยชน์และเพิ่มความคล่องตัวหน้างาน', 'Core · Y4–Y5'],
    ['6. Mangrove Living Lab', 'พื้นที่ทดลอง โปรโตคอล ชุดข้อมูล และโจทย์ร่วมมหาวิทยาลัย', 'นักเรียน · นักศึกษา · นักวิจัย', 'Innovation, know-how และบุคลากร', 'Growth · Y5'],
    ['7. Citizen Science Network', 'หลักสูตร คู่มือสำรวจ และข้อมูลจากชุมชน/โรงเรียนที่ผ่าน QA', 'เยาวชน · โรงเรียน · ชุมชน', 'ภาพลักษณ์ด้านการศึกษาและฐานผู้สนับสนุน', 'Growth · Pilot Y4'],
    ['8. Blue Livelihood Incubator', 'ทดลองโมเดลรายได้ที่สอดคล้องกับนิเวศและมี Business Case', 'ครัวเรือน · กลุ่มอาชีพ', 'Shared value ที่ชัดกว่าการบริจาค', 'Growth · Y5–Y6'],
    ['9. Employee & Leadership Stewardship', 'ภารกิจเรียนรู้ เก็บข้อมูล และเชื่อมกลับสู่การตัดสินใจองค์กร', 'พนักงาน · ผู้นำองค์กร', 'Engagement, leadership และ employer brand', 'Growth · Pilot Y4'],
    ['10. Client & Investor Impact Visit', 'เส้นทางเยี่ยมชม Dashboard, Before–After evidence และบทสนทนา ESG', 'ลูกค้า · นักลงทุน · พันธมิตร', 'Relationship building และ BD differentiation', 'Growth · Y5'],
    ['11. Annual Beyond Carbon Report', 'ผลลัพธ์ ความล้มเหลว การแก้ไข ค่าใช้จ่าย และกรณีศึกษา', 'ผู้มีส่วนได้ส่วนเสียทั้งหมด', 'Transparency และ ESG disclosure readiness', 'Core · ทุกปี'],
    ['12. Replication & Partnership Toolkit', 'คู่มือ โมเดลงบประมาณ ข้อกำหนดข้อมูล และแพ็กเกจพื้นที่ใหม่', 'ลูกค้า · พันธมิตร · หน่วยงาน', 'ต่อยอดสู่บริการและการขยายผล', 'Scale · Y7–Y8']
  ];

  const roadmap = [
    { year: 'ปี 4', date: '28 ส.ค. 2569–27 ส.ค. 2570', color: '#2f7a60', title: 'สร้างฐานและ Pilot', actions: ['รวมหลักฐาน 3 ปีและปิด Evidence Gap', 'ทำ Baseline ครบหนึ่งรอบฤดูกาล', 'ทำ Community Benefit Agreement', 'Pilot งานชุมชน Citizen Science และ Employee Stewardship', 'เปิด Registry / Dashboard รุ่นแรก'], gate: 'Baseline และ Claim Policy ได้รับอนุมัติ; Pilot มีข้อมูลต้นทุน–ผลลัพธ์ครบ' },
    { year: 'ปี 5', date: '28 ส.ค. 2570–27 ส.ค. 2571', color: '#2e7180', title: 'พิสูจน์ผลเต็มรอบ', actions: ['ดำเนิน Monitoring และ Stewardship เต็มปี', 'เปิด Living Lab และ Blue Livelihood Pilot', 'เริ่ม Client / Investor Impact Visit', 'ออกรายงานประจำปีและ Independent Review ครั้งที่ 1'], gate: 'คัดเลือกเฉพาะโมเดลที่มีผลสุทธิและชุมชนยอมรับเพื่อขยาย' },
    { year: 'ปี 6', date: '28 ส.ค. 2571–27 ส.ค. 2572', color: '#c9822b', title: 'ขยายโมเดลที่ผ่าน', actions: ['ขยาย Community Stewardship และ Local Procurement', 'ขยาย Citizen Science และ Livelihood ที่ผ่านเกณฑ์', 'พัฒนา Nature Recovery Index และ Data Products', 'วัด Stakeholder Trust และ Business Contribution กลางแผน'], gate: 'แสดงผลลัพธ์เชิงธรรมชาติ ชุมชน และธุรกิจที่มีหลักฐานต่อเนื่อง' },
    { year: 'ปี 7', date: '28 ส.ค. 2572–27 ส.ค. 2573', color: '#785b7d', title: 'ฝังในระบบองค์กร', actions: ['เชื่อม KPI กับ ESG, HR, Procurement, BD และ Risk', 'เปิด Partnership / Co-funding pipeline', 'สร้าง Replication Toolkit', 'Independent Review ครั้งที่ 2 และปรับ Governance'], gate: 'มีเจ้าของกระบวนการและงบประจำ ไม่พึ่งทีมโครงการเพียงชุดเดียว' },
    { year: 'ปี 8', date: '28 ส.ค. 2573–27 ส.ค. 2574', color: '#a85d4e', title: 'ประเมินและส่งต่อ', actions: ['ประเมิน Nature, Community และ Business Value ปลายแผน', 'วาง Community Fund / long-term ownership', 'ถ่ายทอดข้อมูล วิธีวัด และคู่มือ', 'ออก Final Beyond Carbon Report และแผน 5 ปีถัดไป'], gate: 'ตัดสินใจ Sustain / Replicate / Scale พร้อมงบ เจ้าภาพ และเงื่อนไขชัดเจน' }
  ];

  const businessValues = [
    ['Brand trust & reputation', 'สร้างภาพจำว่าบริษัททำงานระยะยาวและยอมเปิดเผยทั้งผลสำเร็จและสิ่งที่ต้องแก้', 'Trust survey · media quality · verified claims'],
    ['Business development', 'ใช้พื้นที่จริง หลักฐาน และ Data Platform เป็นความแตกต่างในข้อเสนอและการพบลูกค้า', 'Proposal log · client visits · influenced pipeline'],
    ['Risk & social license', 'ลดความขัดแย้ง ความล่าช้า และความเสี่ยงจากคำกล่าวอ้างเกินจริงด้วยข้อตกลงและ grievance system', 'Issue closure · conflict days · claim review'],
    ['People & employer brand', 'ใช้โครงการพัฒนาผู้นำ ความเข้าใจ ESG และความผูกพันของบุคลากรผ่านภารกิจที่มีสาระ', 'Learning gain · engagement · retention signals'],
    ['Community relationships', 'สร้างคู่ปฏิบัติงานและผู้ให้บริการท้องถิ่นที่ทำงานต่อเนื่องได้มากกว่ากิจกรรมอาสาหนึ่งวัน', 'Paid work · procurement · partner continuity'],
    ['Data, IP & new services', 'ต่อยอดวิธีติดตาม ฟื้นฟู และสื่อสารผลกระทบเป็นบริการหรือผลิตภัณฑ์ข้อมูลใหม่', 'Validated methods · datasets · service concepts']
  ];

  const kpis = [
    ['Nature', '#2f7a60', 'Canopy & vegetation trajectory', 'แนวโน้มเรือนยอดและโครงสร้างพืชดีขึ้นเทียบ Baseline', 'Satellite · UAV · permanent plots', 'รายปี / หลังเหตุผิดปกติ'],
    ['Nature', '#2f7a60', 'Natural regeneration', 'ระบบเริ่มทดแทนตัวเอง ไม่พึ่งปลูกซ่อมตลอดเวลา', 'Field plots · high-resolution imagery', 'ปีละ 1–2 ครั้ง'],
    ['Nature', '#2f7a60', 'Biodiversity indicators', 'ชนิดพันธุ์หรือกลุ่มชี้วัดตอบสนองต่อการฟื้นตัวของถิ่นอาศัย', 'Expert survey · community observations', 'ตามฤดูกาล / รายปี'],
    ['Resilience', '#2e7180', 'Shoreline, sediment & water signals', 'แนวโน้มพื้นที่ชายฝั่งและปัจจัยน้ำที่เกี่ยวข้อง', 'GIS · survey point · water/sediment records', 'รายไตรมาส–รายปี'],
    ['Community', '#c9822b', 'Paid local work & procurement', 'เงินโครงการหมุนเวียนในพื้นที่ผ่านงานและการจัดซื้อที่โปร่งใส', 'สัญญา · ใบงาน · บัญชีจัดซื้อ', 'รายเดือน / รายไตรมาส'],
    ['Community', '#c9822b', 'Net household / group benefit', 'รายได้หรือประโยชน์สุทธิหลังหักต้นทุน เวลา และความเสี่ยง', 'Survey · income/expense · interview', 'ราย 6 เดือน / รายปี'],
    ['Community', '#c9822b', 'Benefit distribution & voice', 'ประโยชน์ไม่กระจุกตัวและชุมชนมีอำนาจร่วมตัดสินใจ', 'Beneficiary registry · forums · grievance log', 'รายไตรมาส / รายปี'],
    ['Knowledge', '#2e7180', 'Learning completion & data quality', 'เกิดทักษะและข้อมูล Citizen Science ผ่านเกณฑ์ QA', 'Pre/post assessment · QA records', 'ทุกกิจกรรม / รายปี'],
    ['Innovation', '#2e7180', 'Validated methods & research outputs', 'วิธีวัดหรือผลิตภัณฑ์ข้อมูลทำซ้ำและใช้ต่อได้', 'Protocol · dataset · publication · prototype', 'ราย 6 เดือน'],
    ['Business', '#785b7d', 'Stakeholder trust & engagement quality', 'ความเชื่อมั่นและคุณภาพการมีส่วนร่วมดีขึ้น', 'Survey · interview · participation records', 'Baseline / Y6 / Y8'],
    ['Business', '#785b7d', 'BD & partnership contribution', 'โครงการสร้างความสัมพันธ์ ข้อเสนอ หรือเงินร่วมสนับสนุน', 'CRM · proposal log · agreements', 'รายไตรมาส'],
    ['Governance', '#a85d4e', 'Evidence completeness & claim control', 'คำกล่าวอ้างมีวิธีวัด วันที่ พื้นที่ เจ้าของ และหลักฐานครบ', 'Co-benefit Registry · audit trail', 'ต่อเนื่อง / รายไตรมาส'],
    ['Governance', '#a85d4e', 'Corrective action closure', 'ข้อผิดพลาด ข้อร้องเรียน และข้อค้นพบได้รับการแก้ไข', 'Issue log · grievance log · review report', 'รายเดือน / รายไตรมาส']
  ];

  const governance = [
    ['01', 'Executive Steering Committee', 'อนุมัติเป้าหมาย งบประมาณ Risk Appetite และตัดสินใจ Stop / Adapt / Scale รายปี'],
    ['02', 'Co-benefit Programme Office', 'ดูแล Roadmap, Registry, KPI, รายงาน การประสานงาน และ corrective actions'],
    ['03', 'Nature & Data Lead', 'รับผิดชอบ Monitoring Protocol, QA/QC, Baseline และการตีความผลเชิงนิเวศ'],
    ['04', 'Community Partnership Lead', 'ดูแลข้อตกลง การจ้างงาน การกระจายประโยชน์ และ grievance mechanism'],
    ['05', 'Corporate Value Lead', 'เชื่อมผลลัพธ์เข้ากับ ESG, HR, Procurement, Communications, IR และ BD']
  ];

  const references = [
    ['TNFD', 'Nature-related dependencies, impacts, risks & opportunities', 'ใช้เป็นกรอบเชื่อมผลกระทบต่อธรรมชาติกับความเสี่ยงและโอกาสขององค์กร', 'https://tnfd.global/recommendations-of-the-tnfd/'],
    ['GRI 101', 'Biodiversity 2024', 'ใช้ช่วยออกแบบการเปิดเผยข้อมูลผลกระทบ การบริหาร และความโปร่งใสด้านความหลากหลายทางชีวภาพ', 'https://www.globalreporting.org/standards/standards-development/topic-standard-project-for-biodiversity/'],
    ['IUCN', 'Global Standard for Nature-based Solutions', 'ใช้ตรวจความครบถ้วนของการออกแบบ NbS ตั้งแต่โจทย์สังคม ธรรมชาติ ผู้มีส่วนได้ส่วนเสีย ไปจนถึง adaptive management', 'https://portals.iucn.org/library/node/49070'],
    ['IFC PS6', 'Biodiversity Conservation & Ecosystem Services', 'ใช้เป็นแนวคิดด้าน biodiversity risk, ecosystem services และการจัดลำดับหลีกเลี่ยง–ลด–ฟื้นฟูผลกระทบ', 'https://www.ifc.org/en/insights-reports/2012/ifc-performance-standard-6']
  ];

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const renderPillars = () => {
    const root = byId('pillar-grid');
    if (!root) return;
    root.innerHTML = pillars.map((item) => `
      <article class="pillar-card" style="--pillar-color:${item.color}">
        <span class="pillar-number">${item.number}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="pillar-goal">${escapeHtml(item.goal)}</p>
        <div class="pillar-divider"></div>
        <div class="pillar-columns">
          <div><span class="pillar-label">แผนงานหลัก</span><ul class="clean-list">${item.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join('')}</ul></div>
          <div><span class="pillar-label">คุณค่าต่อบริษัท</span><span class="value-chip">${escapeHtml(item.value)}</span></div>
        </div>
      </article>`).join('');
  };

  const renderProgrammes = () => {
    const root = byId('portfolio-body');
    if (!root) return;
    root.innerHTML = programmes.map((row) => {
      const priorityClass = row[4].startsWith('Core') ? 'priority-core' : row[4].startsWith('Growth') ? 'priority-growth' : 'priority-later';
      return `<tr><td><strong>${escapeHtml(row[0])}</strong></td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td><td>${escapeHtml(row[3])}</td><td><span class="priority-tag ${priorityClass}">${escapeHtml(row[4])}</span></td></tr>`;
    }).join('');
  };

  const renderRoadmap = () => {
    const root = byId('roadmap-grid');
    if (!root) return;
    root.innerHTML = roadmap.map((item) => `
      <article class="year-card" style="--year-color:${item.color}">
        <p class="year-index">${item.year}</p><h3>${escapeHtml(item.title)}</h3><span class="year-date">${escapeHtml(item.date)}</span>
        <ul>${item.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join('')}</ul>
        <div class="decision-gate"><small>Decision gate</small><strong>${escapeHtml(item.gate)}</strong></div>
      </article>`).join('');
  };

  const renderBusinessValues = () => {
    const root = byId('value-grid');
    if (!root) return;
    root.innerHTML = businessValues.map((item, index) => `
      <article class="value-card"><div class="icon-wrap" aria-hidden="true"><strong>${String(index + 1).padStart(2, '0')}</strong></div>
      <h3>${escapeHtml(item[0])}</h3><p>${escapeHtml(item[1])}</p><div class="value-evidence">${escapeHtml(item[2])}</div></article>`).join('');
  };

  const renderKpis = () => {
    const root = byId('kpi-body');
    if (!root) return;
    root.innerHTML = kpis.map((row) => `
      <tr><td><span class="kpi-group"><span class="kpi-dot" style="--group-color:${row[1]}"></span>${escapeHtml(row[0])}</span></td>
      <td><strong>${escapeHtml(row[2])}</strong></td><td>${escapeHtml(row[3])}</td><td>${escapeHtml(row[4])}</td><td class="kpi-frequency">${escapeHtml(row[5])}</td></tr>`).join('');
  };

  const renderGovernance = () => {
    const root = byId('governance-stack');
    if (!root) return;
    root.innerHTML = governance.map((item) => `
      <article class="governance-card"><span class="step-icon">${item[0]}</span><div><h3>${escapeHtml(item[1])}</h3><p>${escapeHtml(item[2])}</p></div></article>`).join('');
  };

  const renderReferences = () => {
    const root = byId('source-grid');
    if (!root) return;
    root.innerHTML = references.map((item) => `
      <a class="source-card" href="${item[3]}" target="_blank" rel="noreferrer">
        <span class="source-label">${escapeHtml(item[0])}</span><h3>${escapeHtml(item[1])}</h3><p>${escapeHtml(item[2])}</p><span class="source-arrow" aria-hidden="true">↗</span>
      </a>`).join('');
  };

  renderPillars();
  renderProgrammes();
  renderRoadmap();
  renderBusinessValues();
  renderKpis();
  renderGovernance();
  renderReferences();
})();
