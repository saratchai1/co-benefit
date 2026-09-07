(() => {
  "use strict";

  const DB_NAME = "co-benefit-impact-studio";
  const DB_VERSION = 1;
  const MAX_FILE_BYTES = 250 * 1024 * 1024;
  const MAX_PENDING_BYTES = 600 * 1024 * 1024;

  const SDGS = [
    {
      id: "SDG1",
      number: "1",
      title: "ขจัดความยากจน",
      short: "ความยากจน",
      color: "#e5243b",
      description: "ติดตามว่าทรัพยากรหรือเงินสนับสนุนช่วยสร้างประโยชน์ต่อครัวเรือนและชุมชนอย่างไร",
      evidence: "รูปช่วงติดตามเงินสนับสนุน 200,000 บาท และข้อมูลว่าชุมชนนำเงินไปทำอะไรบ้าง"
    },
    {
      id: "SDG8",
      number: "8",
      title: "งานที่มีคุณค่าและการเติบโตทางเศรษฐกิจ",
      short: "งานและเศรษฐกิจ",
      color: "#a21942",
      description: "บันทึกการจ้างงาน รายได้ กิจกรรมท่องเที่ยว และผลกระทบต่อเศรษฐกิจท้องถิ่น",
      evidence: "รูปการจ้างชุมชนปลูก ซ่อม และดูแลป่า รวมถึงการใช้เงินสนับสนุนต่อยอดกิจกรรมท่องเที่ยวหรือธุรกิจชุมชน"
    },
    {
      id: "SDG11",
      number: "11",
      title: "เมืองและชุมชนที่ยั่งยืน",
      short: "ชุมชนยั่งยืน",
      color: "#fd9d24",
      description: "แสดงความเข้มแข็ง ความปลอดภัย ความน่าอยู่ และความสามารถในการปรับตัวของชุมชน",
      evidence: "ใช้หลักฐานที่เกี่ยวข้องจาก SDG1 และ SDG8 พร้อมอธิบายว่าช่วยให้ชุมชนยั่งยืนขึ้นอย่างไร"
    },
    {
      id: "SDG13",
      number: "13",
      title: "การรับมือการเปลี่ยนแปลงสภาพภูมิอากาศ",
      short: "สภาพภูมิอากาศ",
      color: "#3f7e44",
      description: "บันทึกกิจกรรมปลูก ซ่อม ดูแล และสภาพพื้นที่ป่าที่ช่วยเพิ่มความยืดหยุ่นต่อสภาพภูมิอากาศ",
      evidence: "รูปทีมงานปลูก ซ่อม ดูแลป่า และรูปแปลงต้นไม้ที่เห็นสภาพพื้นที่ชัดเจน"
    },
    {
      id: "SDG14",
      number: "14",
      title: "ทรัพยากรทางทะเล",
      short: "ทะเลและชายฝั่ง",
      color: "#0a97d9",
      description: "รวบรวมหลักฐานด้านสัตว์น้ำ ความอุดมสมบูรณ์ของชายฝั่ง การลดการกัดเซาะ และพื้นที่ดินที่เพิ่มขึ้น",
      evidence: "รูปชาวบ้านหาอาหารทะเล ป่าชายเลนติดทะเล สัตว์ทะเล และข้อมูลการลดการกัดเซาะหรือดินงอก"
    },
    {
      id: "SDG15",
      number: "15",
      title: "ระบบนิเวศบนบก",
      short: "ระบบนิเวศบนบก",
      color: "#56c02b",
      description: "บันทึกชนิดสัตว์ พืช และสภาพระบบนิเวศในแปลงป่าชายเลน โดยเฉพาะพื้นที่ที่ไม่ติดทะเล",
      evidence: "รูปสัตว์และสิ่งมีชีวิตในป่าชายเลน รวมถึงสภาพถิ่นอาศัยในแปลงที่ไม่ติดทะเล"
    },
    {
      id: "SDG17",
      number: "17",
      title: "ความร่วมมือเพื่อการพัฒนาที่ยั่งยืน",
      short: "ความร่วมมือ",
      color: "#19486a",
      description: "แสดงบทบาทของชุมชน หน่วยงานรัฐ ภาคเอกชน และทีมโครงการในการร่วมวางแผนและพัฒนาพื้นที่",
      evidence: "รูปการประชุมกับชุมชนหรือหน่วยงาน ทช. และรูปการช่วยพัฒนาผลิตภัณฑ์หรือศักยภาพชุมชน"
    }
  ];

  const PROVINCES = [
    "กระบี่", "พังงา", "ภูเก็ต", "ระนอง", "สุราษฎร์ธานี", "นครศรีธรรมราช", "ตรัง", "สตูล", "ชุมพร",
    "ประจวบคีรีขันธ์", "เพชรบุรี", "สมุทรสงคราม", "สมุทรสาคร", "สมุทรปราการ", "กรุงเทพมหานคร",
    "ฉะเชิงเทรา", "ชลบุรี", "ระยอง", "จันทบุรี", "ตราด", "อื่น ๆ"
  ];

  const COMMUNITY_OPTIONS = {
    "กระบี่": ["บ้านโคกยูง อ.เกาะลันตา", "บ้านท่าประดู่ อ.คลองท่อม"],
    "พังงา": ["พื้นที่โครงการจังหวัดพังงา"],
    "ภูเก็ต": ["พื้นที่โครงการจังหวัดภูเก็ต"],
    "ระนอง": ["พื้นที่โครงการจังหวัดระนอง"],
    "สตูล": ["พื้นที่โครงการจังหวัดสตูล"],
    "สมุทรสงคราม": ["พื้นที่โครงการจังหวัดสมุทรสงคราม"],
    "สมุทรสาคร": ["พื้นที่โครงการจังหวัดสมุทรสาคร"],
    "ระยอง": ["พื้นที่โครงการจังหวัดระยอง"]
  };

  const STATUS = {
    draft: { label: "ข้อมูลร่าง", className: "status-draft" },
    review: { label: "รอตรวจสอบ", className: "status-review" },
    verified: { label: "ตรวจสอบแล้ว", className: "status-verified" }
  };

  const state = {
    db: null,
    entries: [],
    media: [],
    activeSdg: "all",
    pendingFiles: [],
    objectUrls: new Map(),
    pendingUrls: new Map(),
    currentTab: "dashboard"
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("beforeunload", revokeAllUrls);

  async function init() {
    populateStaticControls();
    bindEvents();

    try {
      state.db = await openDatabase();
      await seedDemoData();
      await refreshData();
      await updateStorageEstimate();
      setStorageState(true);
    } catch (error) {
      console.error(error);
      setStorageState(false);
      showToast("ไม่สามารถเปิดพื้นที่จัดเก็บของเบราว์เซอร์ได้", true);
    }

    setFormDefaults();
  }

  function populateStaticControls() {
    const yearOptions = [];
    for (let year = 2566; year <= 2575; year += 1) yearOptions.push(`<option value="${year}">${year}</option>`);
    $("#entry-year").innerHTML = `<option value="">เลือกปีโครงการ</option>${yearOptions.join("")}`;

    $("#entry-province").innerHTML = `<option value="">เลือกจังหวัด</option>${PROVINCES.map((province) => `<option value="${escapeHtml(province)}">${escapeHtml(province)}</option>`).join("")}`;

    const sdgOptions = SDGS.map((sdg) => `<option value="${sdg.id}">${sdg.id} · ${escapeHtml(sdg.title)}</option>`).join("");
    $("#library-sdg").innerHTML = `<option value="all">ทุก SDG</option>${sdgOptions}`;

    $("#sdg-choice-grid").innerHTML = SDGS.map((sdg) => `
      <button class="sdg-choice" type="button" data-select-sdg="${sdg.id}" style="--sdg-color:${sdg.color}" aria-pressed="false">
        <span>${sdg.id}</span><span>${escapeHtml(sdg.short)}</span>
      </button>
    `).join("");
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const tabButton = event.target.closest("[data-open-tab], .nav-tab[data-tab]");
      if (tabButton) {
        const tabName = tabButton.dataset.openTab || tabButton.dataset.tab;
        switchTab(tabName);
      }

      const sdgChoice = event.target.closest("[data-select-sdg]");
      if (sdgChoice) selectFormSdg(sdgChoice.dataset.selectSdg);

      const sdgFocus = event.target.closest("[data-focus-sdg]");
      if (sdgFocus) {
        state.activeSdg = sdgFocus.dataset.focusSdg;
        renderDashboard();
      }

      const viewButton = event.target.closest("[data-view-entry]");
      if (viewButton) openEntryDialog(viewButton.dataset.viewEntry, viewButton.dataset.mediaId || null);

      const deleteButton = event.target.closest("[data-delete-entry]");
      if (deleteButton) requestDeleteEntry(deleteButton.dataset.deleteEntry);

      const downloadButton = event.target.closest("[data-download-media]");
      if (downloadButton) downloadMedia(downloadButton.dataset.downloadMedia);

      const pendingRemove = event.target.closest("[data-remove-pending]");
      if (pendingRemove) removePendingFile(pendingRemove.dataset.removePending);
    });

    $("#filter-year").addEventListener("change", renderDashboard);
    $("#filter-project-type").addEventListener("change", renderDashboard);
    $("#filter-province").addEventListener("change", renderDashboard);
    $("#filter-community").addEventListener("change", renderDashboard);
    $("#reset-filters").addEventListener("click", resetFilters);
    $("#show-all-sdg").addEventListener("click", () => {
      state.activeSdg = "all";
      renderDashboard();
    });

    $("#clear-demo-button").addEventListener("click", requestClearDemo);
    $("#dismiss-demo-banner").addEventListener("click", () => $("#demo-banner").classList.add("is-hidden"));

    $("#entry-project-type").addEventListener("change", updateLocationLabels);
    $("#entry-province").addEventListener("change", updateCommunityOptions);
    $("#entry-community").addEventListener("change", toggleCustomCommunity);

    const dropZone = $("#drop-zone");
    const mediaInput = $("#media-input");
    mediaInput.addEventListener("change", () => addPendingFiles([...mediaInput.files]));
    ["dragenter", "dragover"].forEach((type) => dropZone.addEventListener(type, (event) => {
      event.preventDefault();
      dropZone.classList.add("is-dragging");
    }));
    ["dragleave", "drop"].forEach((type) => dropZone.addEventListener(type, (event) => {
      event.preventDefault();
      dropZone.classList.remove("is-dragging");
    }));
    dropZone.addEventListener("drop", (event) => addPendingFiles([...event.dataTransfer.files]));

    $("#evidence-form").addEventListener("submit", saveEntry);
    $("#evidence-form").addEventListener("reset", () => setTimeout(resetFormState, 0));

    ["#library-search", "#library-sdg", "#library-type", "#library-status"].forEach((selector) => {
      $(selector).addEventListener(selector === "#library-search" ? "input" : "change", renderLibrary);
    });

    $("#export-button").addEventListener("click", exportMetadata);
    $("#settings-export").addEventListener("click", exportMetadata);
    $("#import-input").addEventListener("change", importMetadata);
    $("#refresh-storage").addEventListener("click", updateStorageEstimate);
    $("#clear-all-button").addEventListener("click", requestClearAll);

    $("#dialog-close").addEventListener("click", () => $("#media-dialog").close());
    $("#media-dialog").addEventListener("click", (event) => {
      if (event.target === $("#media-dialog")) $("#media-dialog").close();
    });
  }

  function switchTab(tabName) {
    if (!$("#panel-" + tabName)) return;
    state.currentTab = tabName;
    $$(".nav-tab").forEach((tab) => {
      const active = tab.dataset.tab === tabName;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    $$(".panel").forEach((panel) => {
      const active = panel.id === "panel-" + tabName;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    if (tabName === "library") renderLibrary();
    if (tabName === "settings") updateStorageEstimate();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setStorageState(ready) {
    const chip = $("#storage-chip");
    chip.innerHTML = ready
      ? `<span class="status-dot"></span> เก็บข้อมูลในเครื่องนี้`
      : `<span class="status-dot" style="background:#e37777"></span> พื้นที่จัดเก็บไม่พร้อม`;
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("entries")) {
          const entries = db.createObjectStore("entries", { keyPath: "id" });
          entries.createIndex("createdAt", "createdAt");
          entries.createIndex("sdg", "sdg");
        }
        if (!db.objectStoreNames.contains("media")) {
          const media = db.createObjectStore("media", { keyPath: "id" });
          media.createIndex("entryId", "entryId");
          media.createIndex("kind", "kind");
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Database upgrade blocked"));
    });
  }

  function requestPromise(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function transactionDone(transaction) {
    return new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error || new Error("Transaction aborted"));
    });
  }

  async function seedDemoData() {
    const existing = await requestPromise(state.db.transaction("entries", "readonly").objectStore("entries").count());
    if (existing > 0) return;

    const now = Date.now();
    const demos = [
      {
        id: makeId(), sdg: "SDG1", projectType: "community", province: "กระบี่", community: "บ้านโคกยูง อ.เกาะลันตา",
        year: 2569, activityDate: "2026-08-31", title: "ตัวอย่าง · ติดตามการใช้เงินสนับสนุนชุมชน",
        amount: 200000, beneficiaries: null, description: "รายการตัวอย่างสำหรับบันทึกว่าชุมชนนำเงินสนับสนุนไปใช้ทำกิจกรรมใด พร้อมแนบหลักฐานก่อนสื่อสารผลลัพธ์",
        source: "ข้อมูลตัวอย่างจากแนวทางประชุม", status: "draft", consent: false, isDemo: true, createdAt: new Date(now - 400000).toISOString(), updatedAt: new Date(now - 400000).toISOString(), mediaIds: []
      },
      {
        id: makeId(), sdg: "SDG8", projectType: "community", province: "กระบี่", community: "บ้านท่าประดู่ อ.คลองท่อม",
        year: 2569, activityDate: "2026-09-01", title: "ตัวอย่าง · การจ้างชุมชนดูแลและซ่อมแซมแปลงป่า",
        amount: 85000, beneficiaries: 18, description: "บันทึกจำนวนคน วันทำงาน ลักษณะงาน และหลักฐานการจ้าง เพื่อแยก output ออกจาก outcome ด้านรายได้",
        source: "ข้อมูลตัวอย่างจากแนวทางประชุม", status: "review", consent: true, isDemo: true, createdAt: new Date(now - 300000).toISOString(), updatedAt: new Date(now - 300000).toISOString(), mediaIds: []
      },
      {
        id: makeId(), sdg: "SDG13", projectType: "private", province: "ระยอง", community: "พื้นที่โครงการจังหวัดระยอง",
        year: 2569, activityDate: "2026-09-02", title: "ตัวอย่าง · ภาพแปลงปลูกและการดูแลหลังปลูก",
        amount: null, beneficiaries: null, description: "ใช้รูปภาคสนามประกอบข้อมูลวันสำรวจ สภาพน้ำ สภาพดิน และกิจกรรมดูแล โดยไม่รวมข้อมูล Heatmap ดาวเทียมในหน้านี้",
        source: "ทีมพื้นที่", status: "draft", consent: true, isDemo: true, createdAt: new Date(now - 200000).toISOString(), updatedAt: new Date(now - 200000).toISOString(), mediaIds: []
      },
      {
        id: makeId(), sdg: "SDG17", projectType: "community", province: "สมุทรสงคราม", community: "พื้นที่โครงการจังหวัดสมุทรสงคราม",
        year: 2569, activityDate: "2026-09-03", title: "ตัวอย่าง · ประชุมร่วมกับชุมชนและหน่วยงานพื้นที่",
        amount: null, beneficiaries: 24, description: "เก็บภาพการประชุม รายชื่อหน่วยงาน ประเด็นตัดสินใจ และผู้รับผิดชอบ เพื่อใช้เป็นหลักฐานความร่วมมือ",
        source: "ทีมโครงการ", status: "review", consent: true, isDemo: true, createdAt: new Date(now - 100000).toISOString(), updatedAt: new Date(now - 100000).toISOString(), mediaIds: []
      }
    ];

    const transaction = state.db.transaction(["entries", "media"], "readwrite");
    const entryStore = transaction.objectStore("entries");
    const mediaStore = transaction.objectStore("media");

    for (const entry of demos) {
      const mediaId = makeId();
      const sdg = getSdg(entry.sdg);
      const blob = makeDemoSvgBlob(entry, sdg);
      entry.mediaIds = [mediaId];
      entryStore.put(entry);
      mediaStore.put({
        id: mediaId,
        entryId: entry.id,
        name: `${entry.sdg.toLowerCase()}-demo.svg`,
        type: "image/svg+xml",
        kind: "image",
        size: blob.size,
        createdAt: entry.createdAt,
        isDemo: true,
        blob
      });
    }
    await transactionDone(transaction);
  }

  function makeDemoSvgBlob(entry, sdg) {
    const safeTitle = escapeXml(entry.title.replace("ตัวอย่าง · ", ""));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${sdg.color}"/><stop offset="1" stop-color="#123b32"/></linearGradient></defs>
      <rect width="1200" height="750" fill="url(#g)"/><circle cx="1040" cy="90" r="240" fill="white" opacity=".08"/><circle cx="110" cy="680" r="190" fill="white" opacity=".07"/>
      <path d="M600 110c-110 125-107 244 8 332 125-87 121-216 8-332Z" fill="white" opacity=".18"/>
      <path d="M600 410v230M600 495l-115 145M600 495l115 145M600 565l-55 75M600 565l55 75" stroke="white" stroke-width="22" stroke-linecap="round" opacity=".7"/>
      <text x="72" y="90" fill="white" font-family="Arial,sans-serif" font-size="42" font-weight="700">${sdg.id} · DEMO EVIDENCE</text>
      <text x="72" y="660" fill="white" font-family="Arial,sans-serif" font-size="48" font-weight="700">${safeTitle}</text>
      <text x="72" y="708" fill="white" opacity=".72" font-family="Arial,sans-serif" font-size="26">${escapeXml(entry.province)} · ${entry.year}</text>
    </svg>`;
    return new Blob([svg], { type: "image/svg+xml" });
  }

  async function refreshData() {
    if (!state.db) return;
    const transaction = state.db.transaction(["entries", "media"], "readonly");
    const [entries, media] = await Promise.all([
      requestPromise(transaction.objectStore("entries").getAll()),
      requestPromise(transaction.objectStore("media").getAll())
    ]);
    state.entries = entries.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    state.media = media;
    cleanupStaleObjectUrls();
    refreshFilterOptions();
    renderDashboard();
    renderLibrary();
  }

  function refreshFilterOptions() {
    const current = {
      year: $("#filter-year").value,
      province: $("#filter-province").value,
      community: $("#filter-community").value
    };
    const years = unique(state.entries.map((entry) => entry.year).filter(Boolean)).sort((a, b) => b - a);
    const provinces = unique(state.entries.map((entry) => entry.province).filter(Boolean)).sort(localeSort);
    const communities = unique(state.entries.map((entry) => entry.community).filter(Boolean)).sort(localeSort);
    setSelectOptions($("#filter-year"), years, "ทุกปี", current.year);
    setSelectOptions($("#filter-province"), provinces, "ทุกจังหวัด", current.province);
    setSelectOptions($("#filter-community"), communities, "ทุกพื้นที่", current.community);
  }

  function setSelectOptions(select, values, allLabel, currentValue) {
    select.innerHTML = `<option value="all">${allLabel}</option>${values.map((value) => `<option value="${escapeHtml(String(value))}">${escapeHtml(String(value))}</option>`).join("")}`;
    select.value = values.map(String).includes(String(currentValue)) ? String(currentValue) : "all";
  }

  function getFilteredEntries() {
    const filters = {
      year: $("#filter-year").value,
      projectType: $("#filter-project-type").value,
      province: $("#filter-province").value,
      community: $("#filter-community").value
    };
    return state.entries.filter((entry) =>
      (filters.year === "all" || String(entry.year) === filters.year) &&
      (filters.projectType === "all" || entry.projectType === filters.projectType) &&
      (filters.province === "all" || entry.province === filters.province) &&
      (filters.community === "all" || entry.community === filters.community)
    );
  }

  function renderDashboard() {
    const filtered = getFilteredEntries();
    const selected = state.activeSdg === "all" ? filtered : filtered.filter((entry) => entry.sdg === state.activeSdg);
    const filteredIds = new Set(filtered.map((entry) => entry.id));
    const mediaCount = state.media.filter((item) => filteredIds.has(item.entryId)).length;
    const locations = unique(filtered.map((entry) => entry.community || entry.province).filter(Boolean)).length;
    const amount = filtered.reduce((sum, entry) => sum + (Number(entry.amount) || 0), 0);

    $("#kpi-entries").textContent = formatNumber(filtered.length);
    $("#kpi-media").textContent = formatNumber(mediaCount);
    $("#kpi-locations").textContent = formatNumber(locations);
    $("#kpi-amount").textContent = formatCurrencyCompact(amount);

    renderDonut(filtered);
    renderFocus(selected);
    renderSdgCards(filtered);
    renderRecent(selected);

    const hasDemo = state.entries.some((entry) => entry.isDemo);
    $("#demo-banner").classList.toggle("is-hidden", !hasDemo);
    $("#clear-demo-button").classList.toggle("is-hidden", !hasDemo);
  }

  function renderDonut(entries) {
    const counts = Object.fromEntries(SDGS.map((sdg) => [sdg.id, entries.filter((entry) => entry.sdg === sdg.id).length]));
    const total = entries.length;
    const radius = 78;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    const circles = total > 0 ? SDGS.map((sdg) => {
      const value = counts[sdg.id];
      const length = (value / total) * circumference;
      const circle = `<circle class="donut-segment${state.activeSdg === sdg.id ? " is-active" : ""}" data-focus-sdg="${sdg.id}" cx="110" cy="110" r="${radius}" fill="none" stroke="${sdg.color}" stroke-width="22" stroke-linecap="butt" stroke-dasharray="${length} ${Math.max(0, circumference - length)}" stroke-dashoffset="${-offset}" opacity="${state.activeSdg === "all" || state.activeSdg === sdg.id ? 1 : .24}" transform="rotate(-90 110 110)" tabindex="0"><title>${sdg.id}: ${value} รายการ</title></circle>`;
      offset += length;
      return circle;
    }).join("") : `<circle cx="110" cy="110" r="${radius}" fill="none" stroke="#dfe7e3" stroke-width="22"/>`;

    $("#donut-chart").innerHTML = `
      <svg viewBox="0 0 220 220" role="img" aria-label="${total} รายการ แบ่งตาม SDG">
        ${circles}
        <circle cx="110" cy="110" r="57" fill="#fff"/>
        <text class="donut-center-total" x="110" y="106" text-anchor="middle">${formatNumber(total)}</text>
        <text class="donut-center-label" x="110" y="124" text-anchor="middle">รายการหลักฐาน</text>
      </svg>`;

    $("#chart-legend").innerHTML = SDGS.map((sdg) => {
      const percent = total ? Math.round((counts[sdg.id] / total) * 100) : 0;
      return `<button type="button" class="legend-item${state.activeSdg === sdg.id ? " is-active" : ""}" data-focus-sdg="${sdg.id}">
        <span class="legend-dot" style="background:${sdg.color}"></span>
        <strong>${sdg.id} · ${escapeHtml(sdg.short)}</strong>
        <span>${counts[sdg.id]} · ${percent}%</span>
      </button>`;
    }).join("");
  }

  function renderFocus(entries) {
    const sdg = state.activeSdg === "all" ? null : getSdg(state.activeSdg);
    $("#focus-title").textContent = sdg ? `${sdg.id} · ${sdg.title}` : "หลักฐานทั้งหมด";
    $("#focus-count").textContent = `${formatNumber(entries.length)} รายการ`;
    $("#focus-description").textContent = sdg ? sdg.evidence : "กดที่ส่วนของกราฟหรือการ์ด SDG เพื่อเจาะดูรายการและไฟล์หลักฐาน";

    const tiles = [];
    for (const entry of entries) {
      const media = getMediaForEntry(entry.id);
      if (media.length) {
        for (const item of media) {
          tiles.push(renderFocusTile(entry, item));
          if (tiles.length >= 4) break;
        }
      } else {
        tiles.push(renderFocusTile(entry, null));
      }
      if (tiles.length >= 4) break;
    }

    $("#focus-media").innerHTML = tiles.length ? tiles.join("") : emptyStateMarkup("ยังไม่มีหลักฐานในตัวกรองนี้", "เพิ่มรายการใหม่หรือเปลี่ยนตัวกรองเพื่อดูข้อมูล");
  }

  function renderFocusTile(entry, media) {
    const mediaHtml = media ? mediaElement(media, false) : placeholderArt(entry);
    return `<button class="focus-tile" type="button" data-view-entry="${entry.id}"${media ? ` data-media-id="${media.id}"` : ""}>
      ${mediaHtml}<span>${escapeHtml(entry.title)}</span>
    </button>`;
  }

  function renderSdgCards(entries) {
    const total = entries.length;
    $("#sdg-grid").innerHTML = SDGS.map((sdg) => {
      const sdgEntries = entries.filter((entry) => entry.sdg === sdg.id);
      const mediaCount = sdgEntries.reduce((sum, entry) => sum + getMediaForEntry(entry.id).length, 0);
      const percent = total ? Math.round((sdgEntries.length / total) * 100) : 0;
      return `<button class="sdg-card${state.activeSdg === sdg.id ? " is-active" : ""}" type="button" data-focus-sdg="${sdg.id}" style="--sdg-color:${sdg.color}">
        <div class="sdg-card-top"><span class="sdg-number">${sdg.id}</span><span class="sdg-percent">${percent}%</span></div>
        <h4>${escapeHtml(sdg.title)}</h4>
        <p>${escapeHtml(sdg.description)}</p>
        <footer><span><strong>${sdgEntries.length}</strong> รายการ</span><span><strong>${mediaCount}</strong> ไฟล์</span></footer>
      </button>`;
    }).join("");
  }

  function renderRecent(entries) {
    const recent = [...entries].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 7);
    $("#recent-evidence").innerHTML = recent.length ? recent.map(renderEvidenceRow).join("") : emptyStateMarkup("ยังไม่มีรายการ", "เพิ่มกิจกรรมและหลักฐานเพื่อเริ่มสร้าง dashboard");
  }

  function renderEvidenceRow(entry) {
    const sdg = getSdg(entry.sdg);
    const status = STATUS[entry.status] || STATUS.draft;
    const mediaCount = getMediaForEntry(entry.id).length;
    return `<article class="evidence-row">
      <span class="evidence-sdg" style="background:${sdg.color}">${sdg.id}</span>
      <div class="evidence-main"><strong>${escapeHtml(entry.title)}</strong><small>${escapeHtml(entry.community || entry.province)} · ปี ${entry.year} · ${mediaCount} ไฟล์</small></div>
      <span class="status-pill ${status.className}">${status.label}</span>
      <div class="row-actions">
        <button class="row-action" type="button" data-view-entry="${entry.id}" aria-label="เปิดดูรายการ">↗</button>
        <button class="row-action" type="button" data-delete-entry="${entry.id}" aria-label="ลบรายการ">×</button>
      </div>
    </article>`;
  }

  function renderLibrary() {
    if (!$("#library-grid")) return;
    const query = normalizeText($("#library-search").value);
    const sdgFilter = $("#library-sdg").value;
    const typeFilter = $("#library-type").value;
    const statusFilter = $("#library-status").value;
    const cards = [];

    for (const entry of state.entries) {
      const haystack = normalizeText([entry.title, entry.description, entry.province, entry.community, entry.source, entry.sdg].join(" "));
      if (query && !haystack.includes(query)) continue;
      if (sdgFilter !== "all" && entry.sdg !== sdgFilter) continue;
      if (statusFilter !== "all" && entry.status !== statusFilter) continue;

      const mediaItems = getMediaForEntry(entry.id);
      if (!mediaItems.length) {
        if (typeFilter === "all" || typeFilter === "none") cards.push(renderLibraryCard(entry, null));
        continue;
      }

      for (const media of mediaItems) {
        if (typeFilter !== "all" && typeFilter !== media.kind) continue;
        cards.push(renderLibraryCard(entry, media));
      }
    }

    $("#library-grid").innerHTML = cards.length ? cards.join("") : emptyStateMarkup("ไม่พบข้อมูลที่ตรงกับตัวกรอง", "ลองเปลี่ยนคำค้นหา หรือเพิ่มหลักฐานใหม่");
  }

  function renderLibraryCard(entry, media) {
    const sdg = getSdg(entry.sdg);
    const status = STATUS[entry.status] || STATUS.draft;
    const mediaLabel = !media ? "ไม่มีไฟล์" : media.kind === "video" ? "วิดีโอ" : "รูปภาพ";
    const visual = media ? mediaElement(media, false) : placeholderArt(entry);
    return `<article class="library-card">
      <button class="library-media" type="button" data-view-entry="${entry.id}"${media ? ` data-media-id="${media.id}"` : ""} aria-label="เปิดดู ${escapeHtml(entry.title)}">
        ${visual}<span class="media-type-badge">${mediaLabel}</span>
      </button>
      <div class="library-body">
        <div class="library-meta"><span class="library-sdg" style="color:${sdg.color}">${sdg.id} · ${escapeHtml(sdg.short)}</span><span class="status-pill ${status.className}">${status.label}</span></div>
        <h3>${escapeHtml(entry.title)}</h3>
        <p>${escapeHtml(entry.description)}</p>
        <div class="library-footer">
          <span>${escapeHtml(entry.community || entry.province)} · ${entry.year}</span>
          <span class="library-actions">
            ${media ? `<button class="row-action" type="button" data-download-media="${media.id}" aria-label="ดาวน์โหลดไฟล์">↓</button>` : ""}
            <button class="row-action" type="button" data-delete-entry="${entry.id}" aria-label="ลบรายการ">×</button>
          </span>
        </div>
      </div>
    </article>`;
  }

  function selectFormSdg(sdgId) {
    const sdg = getSdg(sdgId);
    $("#entry-sdg").value = sdg.id;
    $$("[data-select-sdg]").forEach((button) => {
      const selected = button.dataset.selectSdg === sdg.id;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    $("#selected-sdg-detail").innerHTML = `<div class="sdg-detail-box" style="--sdg-color:${sdg.color}"><strong>${sdg.id} · ${escapeHtml(sdg.title)}</strong><p><b>หลักฐานที่แนะนำ:</b> ${escapeHtml(sdg.evidence)}</p></div>`;
  }

  function updateLocationLabels() {
    const type = $("#entry-project-type").value;
    const label = type === "private" ? "พื้นที่ / แปลง" : "ชุมชน / พื้นที่";
    $("#community-select-field > span").innerHTML = `${label} <b>*</b>`;
    updateCommunityOptions();
  }

  function updateCommunityOptions() {
    const province = $("#entry-province").value;
    const type = $("#entry-project-type").value;
    const options = COMMUNITY_OPTIONS[province] || [];
    const generic = province ? `${type === "private" ? "พื้นที่โครงการ" : "ชุมชนโครงการ"}จังหวัด${province}` : "";
    const values = unique([...options, ...(generic ? [generic] : [])]);
    $("#entry-community").innerHTML = `<option value="">เลือกชุมชนหรือพื้นที่</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}<option value="__custom__">+ ระบุชื่อใหม่</option>`;
    toggleCustomCommunity();
  }

  function toggleCustomCommunity() {
    const custom = $("#entry-community").value === "__custom__";
    $("#community-custom-field").classList.toggle("is-hidden", !custom);
    $("#entry-community-custom").required = custom;
    if (!custom) $("#entry-community-custom").value = "";
  }

  function addPendingFiles(files) {
    if (!files.length) return;
    let currentBytes = state.pendingFiles.reduce((sum, item) => sum + item.file.size, 0);
    let added = 0;

    for (const file of files) {
      const kind = getFileKind(file);
      if (!kind) {
        showToast(`ไม่รองรับไฟล์ ${file.name}`, true);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        showToast(`${file.name} มีขนาดเกิน 250 MB`, true);
        continue;
      }
      if (currentBytes + file.size > MAX_PENDING_BYTES) {
        showToast("ไฟล์ที่เลือกมีขนาดรวมเกิน 600 MB", true);
        break;
      }
      const id = makeId();
      state.pendingFiles.push({ id, file, kind });
      state.pendingUrls.set(id, URL.createObjectURL(file));
      currentBytes += file.size;
      added += 1;
    }

    $("#media-input").value = "";
    renderPendingFiles();
    if (added) showToast(`เพิ่ม ${added} ไฟล์ในรายการรอบันทึก`);
  }

  function getFileKind(file) {
    const type = String(file.type || "").toLowerCase();
    const name = String(file.name || "").toLowerCase();
    if (type.startsWith("image/") || /\.(jpg|jpeg|png|webp|gif|heic|svg)$/.test(name)) return "image";
    if (["video/mp4", "video/webm", "video/quicktime"].includes(type) || /\.(mp4|webm|mov|m4v)$/.test(name)) return "video";
    return null;
  }

  function removePendingFile(id) {
    state.pendingFiles = state.pendingFiles.filter((item) => item.id !== id);
    const url = state.pendingUrls.get(id);
    if (url) URL.revokeObjectURL(url);
    state.pendingUrls.delete(id);
    renderPendingFiles();
  }

  function renderPendingFiles() {
    const totalBytes = state.pendingFiles.reduce((sum, item) => sum + item.file.size, 0);
    $("#upload-summary").textContent = state.pendingFiles.length
      ? `${state.pendingFiles.length} ไฟล์ · ${formatBytes(totalBytes)}`
      : "ยังไม่ได้เลือกไฟล์";
    $("#pending-media").innerHTML = state.pendingFiles.map((item) => {
      const url = state.pendingUrls.get(item.id);
      const preview = item.kind === "video"
        ? `<video src="${url}" muted preload="metadata"></video>`
        : `<img src="${url}" alt="">`;
      return `<div class="pending-item"><div class="pending-preview">${preview}</div><div class="pending-info"><strong>${escapeHtml(item.file.name)}</strong><small>${item.kind === "video" ? "วิดีโอ" : "รูปภาพ"} · ${formatBytes(item.file.size)}</small></div><button class="pending-remove" type="button" data-remove-pending="${item.id}" aria-label="นำไฟล์ออก">×</button></div>`;
    }).join("");
  }

  async function saveEntry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const sdgId = $("#entry-sdg").value;
    if (!sdgId) {
      showToast("กรุณาเลือก SDG", true);
      $("#sdg-choice-grid").scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const community = $("#entry-community").value === "__custom__"
      ? $("#entry-community-custom").value.trim()
      : $("#entry-community").value;
    if (!community) {
      showToast("กรุณาระบุชุมชนหรือพื้นที่", true);
      return;
    }

    const button = $("#save-entry-button");
    button.disabled = true;
    button.textContent = "กำลังบันทึก…";

    const id = makeId();
    const now = new Date().toISOString();
    const mediaRecords = state.pendingFiles.map((item) => ({
      id: makeId(),
      entryId: id,
      name: item.file.name,
      type: item.file.type || (item.kind === "video" ? "video/mp4" : "image/jpeg"),
      kind: item.kind,
      size: item.file.size,
      createdAt: now,
      isDemo: false,
      blob: item.file
    }));

    const entry = {
      id,
      sdg: sdgId,
      projectType: $("#entry-project-type").value,
      province: $("#entry-province").value,
      community,
      year: Number($("#entry-year").value),
      activityDate: $("#entry-date").value || null,
      title: $("#entry-title").value.trim(),
      amount: parseOptionalNumber($("#entry-amount").value),
      beneficiaries: parseOptionalNumber($("#entry-beneficiaries").value),
      description: $("#entry-description").value.trim(),
      source: $("#entry-source").value.trim(),
      status: $("#entry-status").value,
      consent: $("#entry-consent").checked,
      isDemo: false,
      createdAt: now,
      updatedAt: now,
      mediaIds: mediaRecords.map((media) => media.id)
    };

    try {
      const transaction = state.db.transaction(["entries", "media"], "readwrite");
      transaction.objectStore("entries").put(entry);
      for (const media of mediaRecords) transaction.objectStore("media").put(media);
      await transactionDone(transaction);
      clearPendingFiles();
      form.reset();
      await refreshData();
      switchTab("dashboard");
      showToast("บันทึกรายการและไฟล์เรียบร้อยแล้ว");
    } catch (error) {
      console.error(error);
      const quotaMessage = error && (error.name === "QuotaExceededError" || String(error).includes("quota"));
      showToast(quotaMessage ? "พื้นที่จัดเก็บไม่พอ กรุณาลดขนาดวิดีโอหรือลบไฟล์เก่า" : "บันทึกข้อมูลไม่สำเร็จ", true);
    } finally {
      button.disabled = false;
      button.textContent = "บันทึกรายการและไฟล์";
    }
  }

  function resetFormState() {
    clearPendingFiles();
    $("#entry-sdg").value = "";
    $("#selected-sdg-detail").innerHTML = "";
    $$("[data-select-sdg]").forEach((button) => {
      button.classList.remove("is-selected");
      button.setAttribute("aria-pressed", "false");
    });
    setFormDefaults();
    updateCommunityOptions();
  }

  function setFormDefaults() {
    const today = new Date();
    const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    if (!$("#entry-date").value) $("#entry-date").value = iso;
    if (!$("#entry-year").value) $("#entry-year").value = "2569";
  }

  function clearPendingFiles() {
    for (const url of state.pendingUrls.values()) URL.revokeObjectURL(url);
    state.pendingUrls.clear();
    state.pendingFiles = [];
    renderPendingFiles();
  }

  async function requestDeleteEntry(entryId) {
    const entry = state.entries.find((item) => item.id === entryId);
    if (!entry) return;
    const confirmed = await askConfirmation("ลบรายการนี้หรือไม่", `รายการ “${entry.title}” รวมถึงรูปและวิดีโอทั้งหมดของรายการจะถูกลบ`);
    if (!confirmed) return;
    await deleteEntries([entryId]);
    showToast("ลบรายการแล้ว");
  }

  async function requestClearDemo() {
    const ids = state.entries.filter((entry) => entry.isDemo).map((entry) => entry.id);
    if (!ids.length) return;
    const confirmed = await askConfirmation("ลบข้อมูลตัวอย่าง", "ระบบจะลบเฉพาะรายการและภาพตัวอย่าง โดยไม่กระทบข้อมูลที่คุณบันทึกเอง");
    if (!confirmed) return;
    await deleteEntries(ids);
    state.activeSdg = "all";
    showToast("ลบข้อมูลตัวอย่างแล้ว");
  }

  async function deleteEntries(entryIds) {
    const idSet = new Set(entryIds);
    const transaction = state.db.transaction(["entries", "media"], "readwrite");
    const entryStore = transaction.objectStore("entries");
    const mediaStore = transaction.objectStore("media");
    const mediaItems = state.media.filter((media) => idSet.has(media.entryId));
    for (const id of entryIds) entryStore.delete(id);
    for (const media of mediaItems) mediaStore.delete(media.id);
    await transactionDone(transaction);
    for (const media of mediaItems) revokeMediaUrl(media.id);
    await refreshData();
  }

  async function requestClearAll() {
    const confirmed = await askConfirmation("ล้างข้อมูลทั้งหมด", "รายการ รูปภาพ และวิดีโอทั้งหมดในเบราว์เซอร์เครื่องนี้จะถูกลบ และไม่สามารถกู้คืนได้");
    if (!confirmed) return;
    const transaction = state.db.transaction(["entries", "media"], "readwrite");
    transaction.objectStore("entries").clear();
    transaction.objectStore("media").clear();
    await transactionDone(transaction);
    revokeAllUrls();
    await refreshData();
    showToast("ล้างข้อมูลทั้งหมดแล้ว");
  }

  function resetFilters() {
    $("#filter-year").value = "all";
    $("#filter-project-type").value = "all";
    $("#filter-province").value = "all";
    $("#filter-community").value = "all";
    state.activeSdg = "all";
    renderDashboard();
  }

  function openEntryDialog(entryId, preferredMediaId) {
    const entry = state.entries.find((item) => item.id === entryId);
    if (!entry) return;
    const mediaItems = getMediaForEntry(entry.id);
    const media = mediaItems.find((item) => item.id === preferredMediaId) || mediaItems[0] || null;
    const sdg = getSdg(entry.sdg);
    const status = STATUS[entry.status] || STATUS.draft;
    const visual = media
      ? (media.kind === "video" ? `<video class="dialog-media" src="${getMediaUrl(media)}" controls playsinline></video>` : `<img class="dialog-media" src="${getMediaUrl(media)}" alt="${escapeHtml(entry.title)}">`)
      : `<div class="dialog-media placeholder-art" style="height:420px;--art-a:${sdg.color};--art-b:#123b32"><span>${sdg.id}</span></div>`;

    $("#dialog-content").innerHTML = `${visual}<div class="dialog-info">
      <span class="eyebrow" style="color:#d3e879">${sdg.id} · ${escapeHtml(sdg.title)}</span>
      <h3>${escapeHtml(entry.title)}</h3>
      <p>${escapeHtml(entry.description)}</p>
      <dl>
        <div><dt>พื้นที่</dt><dd>${escapeHtml(entry.community || entry.province)}</dd></div>
        <div><dt>ปี / วันที่</dt><dd>${entry.year}${entry.activityDate ? ` · ${formatThaiDate(entry.activityDate)}` : ""}</dd></div>
        <div><dt>สถานะ</dt><dd>${status.label}</dd></div>
        <div><dt>มูลค่า</dt><dd>${entry.amount != null ? formatCurrency(entry.amount) : "ไม่ได้ระบุ"}</dd></div>
        <div><dt>ผู้ได้รับประโยชน์</dt><dd>${entry.beneficiaries != null ? `${formatNumber(entry.beneficiaries)} คน` : "ไม่ได้ระบุ"}</dd></div>
        <div><dt>สิทธิ์ใช้สื่อ</dt><dd>${entry.consent ? "ยืนยันแล้ว" : "ยังไม่ยืนยัน"}</dd></div>
      </dl>
    </div>`;
    const dialog = $("#media-dialog");
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function downloadMedia(mediaId) {
    const media = state.media.find((item) => item.id === mediaId);
    if (!media) return;
    const link = document.createElement("a");
    link.href = getMediaUrl(media);
    link.download = media.name || `co-benefit-${media.id}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function mediaElement(media, controls) {
    const url = getMediaUrl(media);
    if (media.kind === "video") return `<video src="${url}" ${controls ? "controls" : "muted preload=\"metadata\""} playsinline></video>`;
    return `<img src="${url}" alt="" loading="lazy">`;
  }

  function placeholderArt(entry) {
    const sdg = getSdg(entry.sdg);
    return `<div class="placeholder-art" style="--art-a:${sdg.color};--art-b:#123b32"><span>${sdg.id}</span></div>`;
  }

  function getMediaForEntry(entryId) {
    return state.media.filter((item) => item.entryId === entryId);
  }

  function getMediaUrl(media) {
    if (!state.objectUrls.has(media.id)) state.objectUrls.set(media.id, URL.createObjectURL(media.blob));
    return state.objectUrls.get(media.id);
  }

  function cleanupStaleObjectUrls() {
    const valid = new Set(state.media.map((item) => item.id));
    for (const [id, url] of state.objectUrls.entries()) {
      if (!valid.has(id)) {
        URL.revokeObjectURL(url);
        state.objectUrls.delete(id);
      }
    }
  }

  function revokeMediaUrl(id) {
    const url = state.objectUrls.get(id);
    if (url) URL.revokeObjectURL(url);
    state.objectUrls.delete(id);
  }

  function revokeAllUrls() {
    for (const url of state.objectUrls.values()) URL.revokeObjectURL(url);
    for (const url of state.pendingUrls.values()) URL.revokeObjectURL(url);
    state.objectUrls.clear();
    state.pendingUrls.clear();
  }

  function exportMetadata() {
    const mediaMetadata = state.media.map(({ blob, ...metadata }) => metadata);
    const payload = {
      schema: "co-benefit-impact-studio",
      version: 1,
      exportedAt: new Date().toISOString(),
      note: "ไฟล์นี้มีเฉพาะ metadata ไม่รวม binary รูปภาพและวิดีโอ",
      entries: state.entries,
      media: mediaMetadata
    };
    downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }), `co-benefit-impact-${dateStamp()}.json`);
    showToast("ส่งออกข้อมูล Metadata แล้ว");
  }

  async function importMetadata(event) {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      if (!payload || !Array.isArray(payload.entries)) throw new Error("Invalid format");
      const transaction = state.db.transaction("entries", "readwrite");
      const store = transaction.objectStore("entries");
      let imported = 0;
      for (const raw of payload.entries) {
        if (!raw || !raw.title || !getSdg(raw.sdg)) continue;
        const now = new Date().toISOString();
        store.put({
          ...raw,
          id: makeId(),
          mediaIds: [],
          isDemo: false,
          createdAt: raw.createdAt || now,
          updatedAt: now,
          title: String(raw.title).slice(0, 160),
          description: String(raw.description || "").slice(0, 4000)
        });
        imported += 1;
      }
      await transactionDone(transaction);
      await refreshData();
      showToast(`นำเข้า ${imported} รายการแล้ว โดยไม่รวมไฟล์สื่อ`);
    } catch (error) {
      console.error(error);
      showToast("นำเข้าไม่สำเร็จ กรุณาเลือก JSON ที่ส่งออกจากระบบนี้", true);
    }
  }

  async function updateStorageEstimate() {
    const target = $("#storage-estimate");
    if (!target) return;
    if (!navigator.storage || !navigator.storage.estimate) {
      target.textContent = "เบราว์เซอร์นี้ไม่รองรับการแสดงพื้นที่จัดเก็บ";
      return;
    }
    try {
      const estimate = await navigator.storage.estimate();
      const usage = estimate.usage || 0;
      const quota = estimate.quota || 0;
      const percent = quota ? ((usage / quota) * 100).toFixed(1) : "0.0";
      target.textContent = `ใช้งาน ${formatBytes(usage)} จากพื้นที่ที่เบราว์เซอร์อนุญาต ${formatBytes(quota)} (${percent}%)`;
    } catch (error) {
      target.textContent = "ไม่สามารถตรวจพื้นที่จัดเก็บได้";
    }
  }

  function askConfirmation(title, message) {
    const dialog = $("#confirm-dialog");
    if (typeof dialog.showModal !== "function") return Promise.resolve(window.confirm(message));
    $("#confirm-title").textContent = title;
    $("#confirm-message").textContent = message;
    return new Promise((resolve) => {
      const handler = () => {
        dialog.removeEventListener("close", handler);
        resolve(dialog.returnValue === "confirm");
      };
      dialog.addEventListener("close", handler);
      dialog.showModal();
    });
  }

  function emptyStateMarkup(title, description) {
    return `<div class="empty-state"><span aria-hidden="true">◇</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><button class="button button-primary" data-open-tab="entry" type="button">เพิ่มหลักฐาน</button></div>`;
  }

  function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = `toast${isError ? " error" : ""}`;
    toast.textContent = message;
    $("#toast-region").appendChild(toast);
    setTimeout(() => toast.remove(), 3800);
  }

  function getSdg(id) {
    return SDGS.find((sdg) => sdg.id === id) || SDGS[0];
  }

  function parseOptionalNumber(value) {
    if (value === "" || value == null) return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function normalizeText(value) {
    return String(value || "").toLocaleLowerCase("th-TH").replace(/\s+/g, " ").trim();
  }

  function unique(values) {
    return [...new Set(values)];
  }

  function localeSort(a, b) {
    return String(a).localeCompare(String(b), "th");
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("th-TH").format(value || 0);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(value || 0);
  }

  function formatCurrencyCompact(value) {
    return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", notation: value >= 1000000 ? "compact" : "standard", maximumFractionDigits: value >= 1000000 ? 1 : 0 }).format(value || 0);
  }

  function formatBytes(bytes) {
    if (!bytes) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / Math.pow(1024, index);
    return `${value.toFixed(index === 0 ? 0 : value >= 10 ? 1 : 2)} ${units[index]}`;
  }

  function formatThaiDate(value) {
    const date = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat("th-TH", { day: "numeric", month: "short", year: "numeric" }).format(date);
  }

  function makeId() {
    return crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }

  function dateStamp() {
    const date = new Date();
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
  }

  function escapeXml(value) {
    return escapeHtml(value).replace(/'/g, "&apos;");
  }
})();
