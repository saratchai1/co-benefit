# Mangrove Co-benefit 2031

เว็บไซต์นำเสนอแผน Co-benefit 5 ปี สำหรับโครงการปลูกป่าชายเลนที่ดำเนินการมาแล้ว 3 ปี โดยวางแผนต่อเนื่องใน **ปีโครงการที่ 4–8** ระหว่างวันที่ **29 สิงหาคม 2569 – 28 สิงหาคม 2574**

## เว็บไซต์ที่เผยแพร่แล้ว

- Strategy: https://co-benefit-swart.vercel.app/
- Gantt Chart: https://co-benefit-swart.vercel.app/gantt/

## หน้าเว็บไซต์

- `/` — แผนยุทธศาสตร์ Beyond Carbon: 5 เสาหลัก, 12 โปรแกรม, Roadmap, Business Value, KPI และ Governance
- `/gantt/` — Gantt Chart 20 ไตรมาส พร้อมตัวกรอง 5 Workstream, Milestone และ Decision Gate

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
│   ├── site.js
│   ├── strategy.js
│   └── gantt.js
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
http://localhost:8000/gantt/
```

## แก้ไขแผน Gantt

ข้อมูล Work package, Owner, Quarter และ Milestone อยู่ใน `assets/gantt.js`

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

Workflow `validate.yml` ตรวจ JavaScript syntax, ลิงก์ภายใน และไฟล์ CSS/asset ทุกครั้งที่ push เข้า `main` หรือเปิด Pull Request

## Deployment

เว็บไซต์เป็น Static Site และมี `vercel.json` สำหรับนำเข้า Vercel โดยตรง

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

กรอบอ้างอิงในเว็บไซต์ใช้เพื่อช่วยออกแบบระบบ ไม่ใช่คำรับรองว่าโครงการผ่านมาตรฐาน TNFD, GRI, IUCN หรือ IFC แล้ว
