# Mangrove Co-benefit 2031

เว็บไซต์นำเสนอแผน Co-benefit 5 ปี สำหรับโครงการปลูกป่าชายเลนที่ดำเนินการมาแล้ว 3 ปี โดยวางแผนต่อเนื่องใน **ปีโครงการที่ 4–8** ระหว่างวันที่ **29 สิงหาคม 2569 – 28 สิงหาคม 2574**

## เว็บไซต์ที่เผยแพร่แล้ว

- Executive Summary: https://co-benefit-swart.vercel.app/exsum/
- Krabi Pilot Case: https://co-benefit-swart.vercel.app/pilot-krabi/
- Full Strategy: https://co-benefit-swart.vercel.app/
- Gantt Chart: https://co-benefit-swart.vercel.app/gantt/

## หน้าเว็บไซต์

- `/exsum/` — Executive Summary สำหรับผู้บริหาร
- `/pilot-krabi/` — Krabi Dual-Site Pilot: บ้านโคกยูงและบ้านท่าประดู่
- `/` — Full Strategy: 5 เสาหลัก, 20 โปรแกรม, Roadmap, KPI, Governance และ Advanced Co-benefit Modules
- `/gantt/` — Gantt Chart 20 ไตรมาส พร้อมตัวกรอง 5 Workstream, Milestone และ Decision Gate

## Krabi Dual-Site Pilot

Pilot ใช้บทความประชาชาติธุรกิจเรื่อง Blu Green Token เป็นแหล่งตั้งต้น โดยแยกเป็นสอง Track:

1. **บ้านโคกยูง อ.เกาะลันตา** — ความร่วมมือสามฝ่าย กองทุนชุมชน ทุนการศึกษา วิสาหกิจท่องเที่ยว และกิจกรรมคายัค
2. **บ้านท่าประดู่ อ.คลองท่อม** — ความอุดมสมบูรณ์ของสัตว์น้ำ รายได้ประมง และการเลี้ยงชันโรง

หน้า Pilot ไม่ถือว่าข้อความในข่าวเป็นผลกระทบที่ตรวจสอบแล้ว เพราะแหล่งข่าวเป็น `ADVERTORIAL / NON_INDEPENDENT` จึงกำหนด Claim เริ่มต้นเป็น Evidence Rating `C` หรือ `D` และต้องผ่าน:

```text
Source Snapshot → Consent → Community/Plot/MOU Matching → Baseline
→ Operational Log → Outcome Measurement → Independent Review
→ Stop / Adapt / Scale
```

ข้อควบคุมสำคัญ:

- ไม่เดา Plot ID, MOU ID, ขอบเขต พิกัด รายได้ จำนวน Booking หรือจำนวนผู้ได้รับประโยชน์
- ไม่ตีความการมีชันโรงว่าเป็นหลักฐานเพียงพอว่าพื้นที่ปลอดสารเคมี
- ไม่ใช้คำว่า “การปลูกป่าทำให้รายได้ประมงเพิ่มขึ้น” จนกว่าจะมี CPUE, Fishing Effort, รายได้–ต้นทุน และข้อมูลเปรียบเทียบ
- ไม่สร้าง Homestay Claim จากแหล่งข่าวนี้
- แสดงชื่อบุคคลเฉพาะการอ้างอิงแหล่งข่าว และไม่ใช้ภาพ/เสียง/คำสัมภาษณ์เพื่อโฆษณาก่อนมี Consent
- ข้อมูลพื้นที่จากหน่วยงานรัฐใช้เป็น Administrative Context ไม่ถือเป็น Plot Match โดยอัตโนมัติ

## ประเด็นเชิงลึกในแผน 5 ปี

- CBEMR และ Ecological Hydrology
- eDNA Biodiversity Evidence
- SROI Impact Valuation
- TNFD LEAP Integration
- Eco-Social Enterprise และ Coastal Food Security
- Learning Center และ Community-Based Tourism
- Co-management, Land/Right Due Diligence และ Institutional Partnership
- Public Health / Pollution Evidence ในฐานะ Research Candidate

## โครงสร้างไฟล์

```text
.
├── index.html
├── exsum/
│   └── index.html
├── pilot-krabi/
│   └── index.html
├── gantt/
│   └── index.html
├── assets/
│   ├── styles.css
│   ├── styles-foundation.css
│   ├── styles-strategy.css
│   ├── styles-gantt.css
│   ├── styles-responsive.css
│   ├── combined-extension.css
│   ├── executive-summary.css
│   ├── exsum-page.css
│   ├── pilot-krabi.css
│   ├── site.js
│   ├── strategy.js
│   ├── gantt.js
│   ├── combined-extension.js
│   ├── executive-summary.js
│   ├── exsum-page.js
│   └── pilot-krabi.js
├── vercel.json
└── .github/workflows/
    ├── deploy-pages.yml
    └── validate.yml
```

## เปิดดูในเครื่อง

```bash
python3 -m http.server 8000
```

จากนั้นเปิด:

```text
http://localhost:8000/
http://localhost:8000/exsum/
http://localhost:8000/pilot-krabi/
http://localhost:8000/gantt/
```

## แก้ไขเนื้อหา

- Strategy: `assets/strategy.js`
- Advanced Modules และ Gantt additions: `assets/combined-extension.js`
- Executive Summary route: `exsum/index.html`, `assets/exsum-page.css`, `assets/exsum-page.js`
- Krabi Pilot: `pilot-krabi/index.html`, `assets/pilot-krabi.css`, `assets/pilot-krabi.js`
- Gantt core: `assets/gantt.js`
- Shared navigation and dynamic tabs: `assets/site.js`

## Validation

Workflow `validate.yml` ตรวจ:

- JavaScript syntax ของไฟล์หลักและส่วนขยาย
- การมีอยู่ของ 4 routes
- ลิงก์ภายในแบบ relative และ root-relative
- CSS และ dynamic assets

## Deployment

เว็บไซต์เป็น Static Site และ Production URL อ่านไฟล์ล่าสุดจาก GitHub `main` ผ่าน Vercel loader ดังนั้นการแก้เนื้อหาใน Repository จะปรากฏหลัง Refresh

## หลักการของแผน

- Co-benefit แยกจาก Carbon Credit และ Carbon MRV
- Baseline ก่อน Target
- Pilot ก่อน Scale
- Evidence ก่อน Claim
- แยก Output, Outcome, Impact และ Business Value
- ทุก Claim ต้องมีพื้นที่ วันที่ วิธีวัด เจ้าของข้อมูล และหลักฐานต้นทาง
- ทุกปีมี Decision Gate สำหรับ Stop, Adapt หรือ Scale
- eDNA, SROI, Biodiversity Net Gain, การลดมลพิษ และผลด้านสุขภาพต้องเปิดเผยข้อจำกัดของวิธีและ Attribution

กรอบอ้างอิงในเว็บไซต์ใช้เพื่อช่วยออกแบบระบบ ไม่ใช่คำรับรองว่าโครงการผ่านมาตรฐาน TNFD, GRI, IUCN หรือ IFC แล้ว
