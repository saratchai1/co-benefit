# Mangrove Co-benefit 2031

เว็บไซต์นำเสนอแผน Co-benefit 5 ปี สำหรับโครงการปลูกป่าชายเลนที่ดำเนินการมาแล้ว 3 ปี โดยวางแผนต่อเนื่องใน **ปีโครงการที่ 4–8** ระหว่างวันที่ **29 สิงหาคม 2569 – 28 สิงหาคม 2574**

## เว็บไซต์ที่เผยแพร่แล้ว

- Strategy: https://co-benefit-swart.vercel.app/
- Gantt Chart: https://co-benefit-swart.vercel.app/gantt/

## มุมมองในหน้า Strategy

หน้า `/` แบ่งเป็นแท็บเพื่อรักษาเนื้อหาเดิมและเพิ่มมุมมองสำหรับผู้บริหาร:

- **Executive Summary** — เปิดเป็นค่าเริ่มต้น สรุปข้อเสนออนุมัติ คุณค่าต่อองค์กร Roadmap 5 ปี Portfolio Priority, Executive Scorecard, Risk และแผน 90 วัน
- **Full Strategy** — เนื้อหาเดิมครบทั้งหมด รวม 5 เสาหลัก 20 โปรแกรม Roadmap, KPI, Governance และ Advanced Co-benefit Modules
- **Implementation Gantt** — ลิงก์ไปหน้า Gantt 20 ไตรมาสที่แยกเป็นอีกหน้า

## หน้าเว็บไซต์

- `/` — Executive Summary และ Full Strategy ในรูปแบบแท็บ
- `/gantt/` — Gantt Chart 20 ไตรมาส พร้อมตัวกรอง 5 Workstream, Milestone, Decision Gate และงานเสริมจากแผนเชิงลึก

## ประเด็นที่รวมเพิ่มจากเอกสารเชิงลึก

- CBEMR และ Ecological Hydrology
- eDNA Biodiversity Evidence
- SROI Impact Valuation
- TNFD LEAP Integration
- Eco-Social Enterprise และ Coastal Food Security
- Learning Center และ Community-Based Tourism
- Co-management, Land/Right Due Diligence และ Institutional Partnership
- Public Health / Pollution Evidence ในฐานะ Research Candidate ที่ต้องพิสูจน์ Attribution ก่อน

โมดูลเหล่านี้ถูกเพิ่มเป็นงานแบบมีเงื่อนไข ไม่ใช่การกล่าวอ้างว่าโครงการบรรลุผลแล้ว ต้องผ่าน Baseline, Feasibility, สิทธิพื้นที่, Carrying Capacity และ Decision Gate ที่เกี่ยวข้องก่อนดำเนินการหรือสื่อสารภายนอก

## โครงสร้างไฟล์

```text
.
├── index.html
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
│   ├── site.js
│   ├── strategy.js
│   ├── gantt.js
│   ├── combined-extension.js
│   └── executive-summary.js
├── vercel.json
└── .github/workflows/
    ├── deploy-pages.yml
    └── validate.yml
```

`site.js` โหลดส่วนขยายหลังหน้าเดิม render เสร็จ:

- `combined-extension.css/js` เพิ่มเนื้อหาเชิงลึกโดยไม่ลบ Strategy/Gantt เดิม
- `executive-summary.css/js` เพิ่มแท็บ Executive Summary และปรับ Presentation Layer สำหรับผู้บริหาร โดย Full Strategy เดิมยังคงอยู่ครบ

## เปิดดูในเครื่อง

```bash
python3 -m http.server 8000
```

จากนั้นเปิด:

```text
http://localhost:8000/
http://localhost:8000/gantt/
```

## แก้ไข Executive Summary

- เนื้อหาและลำดับการเล่าเรื่อง: `assets/executive-summary.js`
- รูปแบบ Presentation และ Responsive UI: `assets/executive-summary.css`

## แก้ไขแผน Gantt

ข้อมูล Work package เดิม, Owner, Quarter และ Milestone อยู่ใน `assets/gantt.js`

งานที่รวมเพิ่มจากเอกสารเชิงลึกอยู่ใน `extendedTasks` ภายใน `assets/combined-extension.js`

Quarter ใช้เลข 1–20:

- 1–4 = ปีโครงการที่ 4
- 5–8 = ปีโครงการที่ 5
- 9–12 = ปีโครงการที่ 6
- 13–16 = ปีโครงการที่ 7
- 17–20 = ปีโครงการที่ 8

ตัวอย่างงานต่อเนื่อง:

```js
{
  start: 5,
  end: 20,
  label: 'Annual programme',
  recurring: true
}
```

ตัวอย่าง Milestone:

```js
{
  at: 8,
  kind: 'milestone',
  label: 'Independent review'
}
```

## Validation

Workflow `validate.yml` ตรวจ JavaScript syntax ของไฟล์หลักและส่วนขยาย รวมถึงลิงก์ภายในและไฟล์ CSS/asset ทุกครั้งที่ push เข้า `main` หรือเปิด Pull Request

## Deployment

เว็บไซต์เป็น Static Site และมี `vercel.json` สำหรับนำเข้า Vercel โดยตรง

Production URL อ่านไฟล์ล่าสุดจาก GitHub `main` ดังนั้นการอัปเดตเนื้อหาใน Repository จะปรากฏหลัง Refresh โดยไม่ต้องสร้างโปรเจกต์ใหม่

สำหรับ GitHub Pages ให้เปิดครั้งแรกที่:

```text
Repository Settings > Pages > Source: GitHub Actions
```

จากนั้นเปิดแท็บ Actions และสั่ง workflow `Deploy static site to GitHub Pages` ด้วย `Run workflow`

URL เป้าหมายเมื่อ Pages เปิดใช้งาน:

```text
https://saratchai1.github.io/co-benefit/
https://saratchai1.github.io/co-benefit/gantt/
```

Workflow ถูกตั้งเป็น Manual เพื่อไม่ให้ขึ้นสถานะล้มเหลวในกรณีที่ GitHub Pages ยังไม่ได้เปิดใช้งาน เว็บไซต์ไม่มี backend, database หรือ secret key

## หลักการของแผน

- Co-benefit แยกจาก Carbon Credit และ Carbon MRV
- ตั้งเป้าหมายเชิงผลลัพธ์หลังสร้าง Baseline ครบหนึ่งรอบฤดูกาล
- แยก Output, Outcome, Impact และ Business Value
- ทุก Claim ต้องมีพื้นที่ วันที่ วิธีวัด เจ้าของข้อมูล และหลักฐานต้นทาง
- มี Independent Review ในปีที่ 5, 7 และปลายปีที่ 8
- ทุกปีมี Decision Gate สำหรับ Stop, Adapt หรือ Scale
- eDNA, SROI, Biodiversity Net Gain, การลดมลพิษ และผลด้านสุขภาพต้องเปิดเผยข้อจำกัดของวิธีและ Attribution

กรอบอ้างอิงในเว็บไซต์ใช้เพื่อช่วยออกแบบระบบ ไม่ใช่คำรับรองว่าโครงการผ่านมาตรฐาน TNFD, GRI, IUCN หรือ IFC แล้ว
