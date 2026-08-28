(() => {
  const categories = {
    governance: {
      label: 'Evidence & Governance',
      color: '#a85d4e',
      description: 'ระบบหลักฐาน ธรรมาภิบาล การรายงาน และการตรวจอิสระ'
    },
    nature: {
      label: 'Nature & Coastal Resilience',
      color: '#2f7a60',
      description: 'การฟื้นตัวของระบบนิเวศและความทนทานชายฝั่ง'
    },
    community: {
      label: 'Community Shared Value',
      color: '#c9822b',
      description: 'การมีส่วนร่วม รายได้ท้องถิ่น และการแบ่งปันประโยชน์'
    },
    learning: {
      label: 'Learning, Research & Innovation',
      color: '#2e7180',
      description: 'Living Lab, Citizen Science, งานวิจัย และผลิตภัณฑ์ข้อมูล'
    },
    business: {
      label: 'Corporate Engagement & Market Value',
      color: '#785b7d',
      description: 'บุคลากร ลูกค้า พันธมิตร ESG และการต่อยอดเชิงธุรกิจ'
    }
  };

  const years = [
    { label: 'ปี 4', dates: 'ส.ค. 69–ส.ค. 70', start: 1, end: 4 },
    { label: 'ปี 5', dates: 'ส.ค. 70–ส.ค. 71', start: 5, end: 8 },
    { label: 'ปี 6', dates: 'ส.ค. 71–ส.ค. 72', start: 9, end: 12 },
    { label: 'ปี 7', dates: 'ส.ค. 72–ส.ค. 73', start: 13, end: 16 },
    { label: 'ปี 8', dates: 'ส.ค. 73–ส.ค. 74', start: 17, end: 20 }
  ];

  const tasks = [
    // Evidence & Governance
    {
      id: 'G1', category: 'governance', tag: 'Set-up', owner: 'Executive Steering Committee',
      title: 'แต่งตั้ง Steering Committee และเจ้าของ KPI',
      segments: [{ start: 1, end: 1, label: 'ตั้งโครงสร้าง' }]
    },
    {
      id: 'G2', category: 'governance', tag: 'Core', owner: 'Programme Office',
      title: 'ทบทวนหลักฐานและบทเรียนจาก 3 ปีแรก',
      segments: [{ start: 1, end: 2, label: 'Evidence gap review' }]
    },
    {
      id: 'G3', category: 'governance', tag: 'Core', owner: 'Nature/Data + Community Leads',
      title: 'สร้าง Baseline, Data Dictionary และ Monitoring Protocol',
      segments: [{ start: 1, end: 3, label: 'Baseline & MRV protocol' }]
    },
    {
      id: 'G4', category: 'governance', tag: 'Platform', owner: 'Programme Office + Digital Team',
      title: 'Co-benefit Registry และ Public Dashboard',
      segments: [
        { start: 2, end: 5, label: 'MVP' },
        { start: 6, end: 20, label: 'Operate & improve', recurring: true }
      ]
    },
    {
      id: 'G5', category: 'governance', tag: 'Control', owner: 'ESG + Communications + Legal',
      title: 'Claim Policy และคู่มือการใช้ข้อมูลสื่อสาร',
      segments: [{ start: 1, end: 3, label: 'Claim controls' }]
    },
    {
      id: 'G6', category: 'governance', tag: 'Report', owner: 'Programme Office',
      title: 'Annual Beyond Carbon Impact Report',
      segments: [4, 8, 12, 16, 20].map((at) => ({ at, kind: 'milestone', label: 'Annual report' }))
    },
    {
      id: 'G7', category: 'governance', tag: 'Assurance', owner: 'Independent reviewer',
      title: 'Independent Review / Assurance',
      segments: [8, 16, 20].map((at) => ({ at, kind: 'milestone', label: 'Independent review' }))
    },
    {
      id: 'G8', category: 'governance', tag: 'Recurring', owner: 'Programme Office + Workstream Leads',
      title: 'Risk, grievance และ corrective-action tracking',
      segments: [{ start: 2, end: 20, label: 'Track & close', recurring: true }]
    },
    {
      id: 'G9', category: 'governance', tag: 'Decision', owner: 'Executive Steering Committee',
      title: 'Annual Decision Gate: Stop / Adapt / Scale',
      segments: [4, 8, 12, 16, 20].map((at) => ({ at, kind: 'milestone', label: 'Decision gate' }))
    },

    // Nature & Resilience
    {
      id: 'N1', category: 'nature', tag: 'Set-up', owner: 'Nature/Data Lead',
      title: 'ออกแบบ Monitoring และแบ่งกลุ่มสภาพพื้นที่',
      segments: [{ start: 1, end: 2, label: 'Monitoring design' }]
    },
    {
      id: 'N2', category: 'nature', tag: 'Baseline', owner: 'Ecology team + local monitors',
      title: 'Ecological baseline ครบหนึ่งรอบฤดูกาล',
      segments: [{ start: 1, end: 4, label: 'Seasonal baseline' }]
    },
    {
      id: 'N3', category: 'nature', tag: 'Recurring', owner: 'Remote sensing + field team',
      title: 'ติดตาม Satellite / UAV / Field รายปี',
      segments: [{ start: 2, end: 20, label: 'Annual monitoring', recurring: true }]
    },
    {
      id: 'N4', category: 'nature', tag: 'Recurring', owner: 'Ecology team + community monitors',
      title: 'Permanent plots และ Natural Regeneration',
      segments: [{ start: 2, end: 20, label: 'Permanent plots', recurring: true }]
    },
    {
      id: 'N5', category: 'nature', tag: 'Recurring', owner: 'Ecology experts + Citizen Science QA',
      title: 'Biodiversity indicator surveys',
      segments: [{ start: 3, end: 20, label: 'Indicator surveys', recurring: true }]
    },
    {
      id: 'N6', category: 'nature', tag: 'Evidence', owner: 'Coastal / water specialists',
      title: 'ติดตามแนวชายฝั่ง ตะกอน น้ำ และสัญญาณ Resilience',
      segments: [{ start: 3, end: 16, label: 'Resilience monitoring', recurring: true }]
    },
    {
      id: 'N7', category: 'nature', tag: 'Adaptive', owner: 'Field operations + community crews',
      title: 'Adaptive maintenance และปลูกซ่อมตามหลักฐาน',
      segments: [{ start: 1, end: 12, label: 'Maintain / adapt', recurring: true }]
    },
    {
      id: 'N8', category: 'nature', tag: 'Evaluation', owner: 'Nature/Data Lead + independent experts',
      title: 'Nature Recovery Index และการประเมินปลายแผน',
      segments: [
        { start: 9, end: 16, label: 'Develop index' },
        { start: 17, end: 20, label: 'Final evaluation' }
      ]
    },

    // Community Shared Value
    {
      id: 'C1', category: 'community', tag: 'Core', owner: 'Community Partnership Lead',
      title: 'Stakeholder map และ Community Benefit Agreement',
      segments: [{ start: 1, end: 3, label: 'Co-design agreement' }]
    },
    {
      id: 'C2', category: 'community', tag: 'Pilot', owner: 'Community Lead + Field Operations',
      title: 'Pilot สัญญาจ้างดูแลป่าแบบมีค่าตอบแทน',
      segments: [{ start: 2, end: 4, label: 'Paid stewardship pilot' }]
    },
    {
      id: 'C3', category: 'community', tag: 'Scale', owner: 'Community Lead + local groups',
      title: 'ขยาย Community Stewardship และงานดูแลระยะยาว',
      segments: [{ start: 5, end: 20, label: 'Scale stewardship', recurring: true }]
    },
    {
      id: 'C4', category: 'community', tag: 'Procurement', owner: 'Procurement + Community Lead',
      title: 'ทะเบียนผู้ขายท้องถิ่นและเป้าหมาย Local Procurement',
      segments: [{ start: 2, end: 6, label: 'Register & target' }]
    },
    {
      id: 'C5', category: 'community', tag: 'Recurring', owner: 'Community Lead + Programme Office',
      title: 'ทบทวนการกระจายประโยชน์และข้อร้องเรียน',
      segments: [{ start: 3, end: 20, label: 'Equity & grievance review', recurring: true }]
    },
    {
      id: 'C6', category: 'community', tag: 'Design', owner: 'Community + business specialists',
      title: 'Co-design และ Feasibility ของ Blue Livelihood',
      segments: [{ start: 3, end: 6, label: 'Co-design & feasibility' }]
    },
    {
      id: 'C7', category: 'community', tag: 'Pilot → Scale', owner: 'Community enterprises + partners',
      title: 'Pilot และขยายโมเดลรายได้ที่ผ่านเกณฑ์',
      segments: [
        { start: 6, end: 8, label: 'Pilot' },
        { start: 9, end: 20, label: 'Scale selected models', recurring: true }
      ]
    },
    {
      id: 'C8', category: 'community', tag: 'Legacy', owner: 'Community + Finance + partners',
      title: 'Community Benefit Fund และเจ้าภาพระยะยาว',
      segments: [{ start: 10, end: 20, label: 'Fund & ownership model' }]
    },
    {
      id: 'C9', category: 'community', tag: 'Outcome', owner: 'Independent social evaluator',
      title: 'Community outcome survey และตรวจผลประโยชน์สุทธิ',
      segments: [4, 8, 12, 16, 20].map((at) => ({ at, kind: 'milestone', label: 'Outcome survey' }))
    },

    // Learning, Research & Innovation
    {
      id: 'L1', category: 'learning', tag: 'Set-up', owner: 'Innovation Lead + universities',
      title: 'ออกแบบ Mangrove Living Lab และพันธมิตรมหาวิทยาลัย',
      segments: [{ start: 2, end: 5, label: 'Living Lab design' }]
    },
    {
      id: 'L2', category: 'learning', tag: 'Pilot', owner: 'Education partners + Community Lead',
      title: 'Citizen Science และเครือข่ายโรงเรียนระยะ Pilot',
      segments: [{ start: 3, end: 8, label: 'Pilot & QA' }]
    },
    {
      id: 'L3', category: 'learning', tag: 'Scale', owner: 'Education partners + local coordinators',
      title: 'ขยายเครือข่ายการเรียนรู้และ Community Monitoring',
      segments: [{ start: 7, end: 20, label: 'Scale network', recurring: true }]
    },
    {
      id: 'L4', category: 'learning', tag: 'Research', owner: 'Research consortium',
      title: 'Research programme และวิธีวัดที่ผ่านการตรวจสอบ',
      segments: [{ start: 5, end: 20, label: 'Research & validation', recurring: true }]
    },
    {
      id: 'L5', category: 'learning', tag: 'Digital', owner: 'Digital / GIS / Data team',
      title: 'Digital spatial platform และ Data Products',
      segments: [
        { start: 3, end: 8, label: 'Platform MVP' },
        { start: 9, end: 20, label: 'Integrate & improve', recurring: true }
      ]
    },
    {
      id: 'L6', category: 'learning', tag: 'Legacy', owner: 'Innovation Lead + Programme Office',
      title: 'Replication Toolkit และ Knowledge Transfer',
      segments: [
        { start: 13, end: 19, label: 'Build toolkit' },
        { at: 20, kind: 'milestone', label: 'Knowledge transfer' }
      ]
    },

    // Corporate & Market Value
    {
      id: 'B1', category: 'business', tag: 'Baseline', owner: 'Corporate Value Lead',
      title: 'Business value และ Stakeholder Trust baseline',
      segments: [{ start: 2, end: 4, label: 'Value baseline' }]
    },
    {
      id: 'B2', category: 'business', tag: 'Pilot', owner: 'HR + Leadership + Programme Office',
      title: 'Employee / Leadership Stewardship Pilot',
      segments: [{ start: 3, end: 5, label: 'Pilot' }]
    },
    {
      id: 'B3', category: 'business', tag: 'Recurring', owner: 'HR + site coordinators',
      title: 'Annual Employee Stewardship Programme',
      segments: [{ start: 5, end: 20, label: 'Annual programme', recurring: true }]
    },
    {
      id: 'B4', category: 'business', tag: 'Engagement', owner: 'BD + IR + Communications',
      title: 'Client / Investor Impact Visit',
      segments: [
        { start: 4, end: 6, label: 'Design package' },
        { start: 6, end: 20, label: 'Operate visits', recurring: true }
      ]
    },
    {
      id: 'B5', category: 'business', tag: 'Partnership', owner: 'BD + ESG + Finance',
      title: 'CSR/ESG Partnership Package และ Co-funding pipeline',
      segments: [
        { start: 5, end: 10, label: 'Build package' },
        { start: 8, end: 20, label: 'Partnership pipeline', recurring: true }
      ]
    },
    {
      id: 'B6', category: 'business', tag: 'Integration', owner: 'ESG + BD + IR + Risk',
      title: 'เชื่อมผลลัพธ์กับ Proposal, ESG, TNFD และ GRI',
      segments: [{ start: 7, end: 20, label: 'Corporate integration', recurring: true }]
    },
    {
      id: 'B7', category: 'business', tag: 'Communication', owner: 'Communications + Programme Office',
      title: 'Annual flagship communication จากหลักฐานที่ตรวจสอบได้',
      segments: [4, 8, 12, 16, 20].map((at) => ({ at, kind: 'milestone', label: 'Flagship communication' }))
    },
    {
      id: 'B8', category: 'business', tag: 'Review', owner: 'Corporate Value Lead + external evaluator',
      title: 'Midterm และ Final Brand / Trust Review',
      segments: [12, 20].map((at) => ({ at, kind: 'milestone', label: 'Brand & trust review' }))
    },
    {
      id: 'B9', category: 'business', tag: 'Legacy', owner: 'Executive + Programme Office + Finance',
      title: 'Business case และแผนความต่อเนื่องระยะถัดไป',
      segments: [{ start: 17, end: 20, label: 'Next 5-year plan' }]
    }
  ];

  const grid = document.getElementById('gantt-grid');
  const scroller = document.getElementById('gantt-scroller');
  const taskCount = document.getElementById('task-count');

  if (!grid) return;

  const quarterName = (index) => {
    const yearIndex = Math.floor((index - 1) / 4);
    const quarter = ((index - 1) % 4) + 1;
    return `ปี ${yearIndex + 4} Q${quarter}`;
  };

  const createYearHeader = () => {
    const row = document.createElement('div');
    row.className = 'gantt-year-row';
    row.setAttribute('role', 'row');

    const label = document.createElement('div');
    label.className = 'gantt-header-label';
    label.textContent = 'Work package / Owner';
    label.setAttribute('role', 'columnheader');
    row.appendChild(label);

    years.forEach((year) => {
      const cell = document.createElement('div');
      cell.className = 'gantt-year';
      cell.style.gridColumn = `${year.start + 1} / ${year.end + 2}`;
      cell.setAttribute('role', 'columnheader');

      const yearLabel = document.createElement('span');
      yearLabel.textContent = year.label;
      const dateLabel = document.createElement('small');
      dateLabel.textContent = year.dates;
      cell.append(yearLabel, dateLabel);
      row.appendChild(cell);
    });

    return row;
  };

  const createQuarterHeader = () => {
    const row = document.createElement('div');
    row.className = 'gantt-quarter-row';
    row.setAttribute('role', 'row');

    const label = document.createElement('div');
    label.className = 'gantt-header-label';
    label.textContent = 'รอบปีโครงการ';
    label.setAttribute('role', 'columnheader');
    row.appendChild(label);

    for (let index = 1; index <= 20; index += 1) {
      const cell = document.createElement('div');
      cell.className = 'gantt-quarter-label';
      if ([1, 5, 9, 13, 17].includes(index)) cell.classList.add('year-start');
      cell.style.gridColumn = String(index + 1);
      cell.textContent = `Q${((index - 1) % 4) + 1}`;
      cell.title = quarterName(index);
      cell.setAttribute('role', 'columnheader');
      cell.setAttribute('aria-label', quarterName(index));
      row.appendChild(cell);
    }

    return row;
  };

  const createGroupRow = (categoryKey) => {
    const category = categories[categoryKey];
    const row = document.createElement('div');
    row.className = 'gantt-group-row';
    row.dataset.category = categoryKey;
    row.style.setProperty('--group-color', category.color);
    row.setAttribute('role', 'rowgroup');

    const label = document.createElement('div');
    label.className = 'gantt-group-label';
    label.textContent = category.label;
    label.title = category.description;
    row.appendChild(label);
    return row;
  };

  const createTaskRow = (task) => {
    const category = categories[task.category];
    const row = document.createElement('div');
    row.className = 'gantt-row';
    row.dataset.category = task.category;
    row.dataset.taskId = task.id;
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
    tag.style.setProperty('--category-color', category.color);
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
      element.style.setProperty('--bar-color', category.color);

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

  const render = () => {
    const fragment = document.createDocumentFragment();
    fragment.append(createYearHeader(), createQuarterHeader());

    Object.keys(categories).forEach((categoryKey) => {
      fragment.appendChild(createGroupRow(categoryKey));
      tasks
        .filter((task) => task.category === categoryKey)
        .forEach((task) => fragment.appendChild(createTaskRow(task)));
    });

    grid.replaceChildren(fragment);
    grid.setAttribute('role', 'table');
    grid.setAttribute('aria-label', 'Gantt Chart แผน Co-benefit ปีโครงการที่ 4 ถึง 8');
    if (taskCount) taskCount.textContent = String(tasks.length);
  };

  const applyFilter = (filter) => {
    const rows = grid.querySelectorAll('.gantt-row');
    const groups = grid.querySelectorAll('.gantt-group-row');
    let visible = 0;

    rows.forEach((row) => {
      const shouldShow = filter === 'all' || row.dataset.category === filter;
      row.hidden = !shouldShow;
      if (shouldShow) visible += 1;
    });

    groups.forEach((group) => {
      group.hidden = filter !== 'all' && group.dataset.category !== filter;
    });

    document.querySelectorAll('.filter-button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });

    if (taskCount) {
      taskCount.textContent = filter === 'all' ? String(tasks.length) : `${visible} / ${tasks.length}`;
    }
  };

  render();

  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all'));
  });

  document.getElementById('scroll-start')?.addEventListener('click', () => {
    scroller?.scrollTo({ left: 0, top: scroller.scrollTop, behavior: 'smooth' });
  });

  document.getElementById('print-gantt')?.addEventListener('click', () => window.print());
})();
