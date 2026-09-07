# Co-benefit Impact Studio

เว็บแอปแบบ Static MVP สำหรับบันทึกและสรุปหลักฐาน Community & Co-benefit โดยแยกจากหน้ากลยุทธ์เดิมและระบบติดตามภาพดาวเทียม

## URL

หลัง merge และ deploy:

```text
/impact-studio/
```

## ความสามารถ

- Dashboard สรุปจำนวนรายการ ไฟล์สื่อ พื้นที่ และมูลค่าที่บันทึก
- กรองตามปี ประเภทพื้นที่ จังหวัด และชุมชน
- กราฟวงกลมแสดงสัดส่วนรายการตาม SDG
- รองรับ SDG 1, 8, 11, 13, 14, 15 และ 17 ตามไฟล์ Direction
- เลือกประเภทพื้นที่ `ป่าชุมชน` หรือ `ป่าบุคคลภายนอก`
- บันทึกรายละเอียดแบบข้อความอิสระ ไม่บังคับให้ทุกหัวข้อใช้ฟิลด์เหมือนกัน
- อัปโหลดรูปภาพและวิดีโอหลายไฟล์ พร้อม preview และ playback
- คลังสื่อ ค้นหา กรอง เปิดดู ดาวน์โหลด และลบรายการ
- สถานะข้อมูลร่าง / รอตรวจสอบ / ตรวจสอบแล้ว
- ฟิลด์ consent สำหรับควบคุมสิทธิ์ใช้ภาพ เสียง และวิดีโอ
- ส่งออกและนำเข้า Metadata เป็น JSON
- Responsive สำหรับ desktop, tablet และ mobile

## การจัดเก็บข้อมูลของ MVP

เวอร์ชันนี้ใช้ `IndexedDB` จึงเก็บรายการและ binary ของรูป/วิดีโอในเบราว์เซอร์เครื่องที่ใช้งาน ข้อมูลยังไม่ซิงก์ข้ามอุปกรณ์หรือผู้ใช้

ข้อจำกัด:

- พื้นที่เก็บไฟล์ขึ้นกับ quota ของแต่ละเบราว์เซอร์
- กำหนดเพดานใน UI ที่ 250 MB ต่อไฟล์ และ 600 MB ต่อรายการ
- JSON export มีเฉพาะ Metadata ไม่รวมไฟล์รูปและวิดีโอ
- การล้าง browser storage จะทำให้ข้อมูลหาย

## แนวทางยกระดับเป็น Production

1. เพิ่ม Authentication และ Role เช่น Admin, Data Entry, Reviewer และ Public Viewer
2. เก็บไฟล์ใน Object Storage เช่น Cloudflare R2, Amazon S3 หรือ Vercel Blob
3. เก็บ Metadata ในฐานข้อมูลกลางและสร้าง signed upload URL
4. เพิ่ม virus scan, transcoding, thumbnail generation และข้อจำกัดชนิดไฟล์ฝั่ง server
5. เพิ่ม audit log, consent document, claim review และ publication workflow
6. เชื่อม Community/Plot master data กับระบบโครงการ โดยไม่รวม Satellite/Heatmap logic ไว้ในโมดูลนี้

## ไฟล์

```text
impact-studio/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## ทดสอบในเครื่อง

จาก root repository:

```bash
python3 -m http.server 8000
```

เปิด:

```text
http://localhost:8000/impact-studio/
```
