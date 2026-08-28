# Mangrove Co-benefit 2031

เว็บไซต์นำเสนอแผน Co-benefit 5 ปี สำหรับโครงการปลูกป่าชายเลนที่ดำเนินการมาแล้ว 3 ปี โดยวางแผนต่อเนื่องใน **ปีโครงการที่ 4–8** ระหว่างวันที่ **28 สิงหาคม 2569 – 27 สิงหาคม 2574**

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
│   ├── site.js
│   └── gantt.js
└── .github/workflows/
    └── deploy-pages.yml
```

## เปิดดูในเครื่อง

```bash
python3 -m http.server 8000
```

จากนั้นเปิด `http://localhost:8000/` และ `http://localhost:8000/gantt/`

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

## Deployment

Workflow `deploy-pages.yml` เตรียมไว้สำหรับ GitHub Pages และจะทำงานเมื่อ push เข้า `main` หรือสั่ง `workflow_dispatch`

URL เป้าหมายเมื่อ Pages เปิดใช้งาน:

```text
https://saratchai1.github.io/co-benefit/
```

เว็บไซต์เป็น static site ไม่มี backend, database หรือ secret key

## หลักการของแผน

- Co-benefit แยกจาก Carbon Credit และ Carbon MRV
- ตั้งเป้าหมายเชิงผลลัพธ์หลังสร้าง Baseline ครบหนึ่งรอบฤดูกาล
- แยก Output, Outcome, Impact และ Business Value
- ทุก Claim ต้องมีพื้นที่ วันที่ วิธีวัด เจ้าของข้อมูล และหลักฐานต้นทาง
- มี Independent Review ในปีที่ 5, 7 และปลายปีที่ 8

กรอบอ้างอิงในเว็บไซต์ใช้เพื่อช่วยออกแบบระบบ ไม่ใช่คำรับรองว่าโครงการผ่านมาตรฐาน TNFD, GRI, IUCN หรือ IFC แล้ว
