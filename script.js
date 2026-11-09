// User-supplied personnel snapshot: 169 name/position pairs, 2026-11-09.
const EMBEDDED_PERSONNEL = [
  {
    "name": "อิทธิโชติ จักรไพวงศ์",
    "position": "รองอธิการบดีฝ่ายกายภาพและสิ่งแวดล้อม"
  },
  {
    "name": "พุฒิเศรษฐ์ ตันติเมฆิน",
    "position": "วิศวกรโยธา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุพจน์ ภาษีรอด",
    "position": "นักวิเคราะห์นโยบายและแผน ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "เนตรา แย้มเดช",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการ"
  },
  {
    "name": "อรวรรณ ไพรี",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ปิยนุช ถาวร",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ฤทัยรัตน์ พิเชฐบวรกุล",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "อิสสรียา จิตวรานนท์",
    "position": "นักนิเทศศิลป์"
  },
  {
    "name": "รรินทิพย์ จักรพันธุ์ ณ อยุธยา",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "พรหมสิทธิ์ แคฝอย",
    "position": "พนักงานขับรถยนต์"
  },
  {
    "name": "นงนุช คนมั่น",
    "position": "พนักงานบริการเอกสารทั่วไป"
  },
  {
    "name": "พิรดาณัฐ พยุง",
    "position": "พนักงานธุรการ"
  },
  {
    "name": "วรวัฒน์ ภมรพล",
    "position": "พนักงานธุรการ"
  },
  {
    "name": "พิรญาณ์ ณ น่าน",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "วรัญญา การะเวก",
    "position": "นักวิชาการการเงินและบัญชี"
  },
  {
    "name": "วริษฐา จันทร์เจือศิริ",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "ธิระพงศ์ เหมทานนท์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "นิภาพร พูลเพิ่ม",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ลินทศักดิ์ จักรพันธุ์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "อมรรัตน์ โคตรวงค์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ศรีวิตรา ปิ่นตบแต่ง",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "วิษณุ สว่างใจธรรม",
    "position": "พนักงานขับรถยนต์"
  },
  {
    "name": "พร้อมพงศ์ ผุงเพิ่มตระกูล",
    "position": "วิศวกรโยธา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ปราศรัย เพ็งปรีชา",
    "position": "วิศวกรโยธา"
  },
  {
    "name": "สมชาย มิตรเทวิน",
    "position": "สถาปนิก ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ครรชิต ยอดแก้ว",
    "position": "วิศวกรโยธา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ศุภวรรณ อารีจิตรานุสรณ์",
    "position": "สถาปนิก ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สาธร เบญจชาด",
    "position": "วิศวกรโยธา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุภาดา ศรีสารคาม",
    "position": "สถาปนิก ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ณัฐ ตรีลักษณวิลัย",
    "position": "วิศวกรโยธา"
  },
  {
    "name": "มนตรี แสงทวี",
    "position": "วิศวกรโยธา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ศุภชัย เด่นไตรรัตน์",
    "position": "วิศวกรโยธา"
  },
  {
    "name": "ยุทธวัชร อภิวาทนสิริ",
    "position": "สถาปนิก"
  },
  {
    "name": "อัจฉรา กิตติอภินันท์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "อัครนันท์ เซี่ยงเห็น",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "วราลักษณ์ นามเสถียร",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุรินทร์ วงษ์ตา",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ฐิตารีย์ วรรณาภรณ์สกุล",
    "position": "วิศวกร"
  },
  {
    "name": "พิสิษฐ์ พยุง",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "พนอ เปียทอง",
    "position": "ช่างก่อสร้าง"
  },
  {
    "name": "วีระศักดิ์ บัวพันธ์",
    "position": "เจ้าหน้าที่บริหารงานก่อสร้าง"
  },
  {
    "name": "สุพัฒน์ ศรีเอี่ยมจันทร์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุระเชน มะลิงาม",
    "position": "วิศวกรเครื่องกล ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุริยัน จันทร์เงิน",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สัญชัย สถิตย์สารธรรม",
    "position": "วิศวกรไฟฟ้า"
  },
  {
    "name": "พิชยนันท์ พิมพ์ชื่น",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "กมลพรรณ จงคงคาวุฒิ",
    "position": "วิศวกรเครื่องกล ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ประวิทย์ ไชยชุมภู",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ณัฐวัฒน์ จันทร์แปลง",
    "position": "วิศวกรไฟฟ้า"
  },
  {
    "name": "ฤทธิพร เพียรจันทร์",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "นราธิป เขียวคำรพ",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "กบินทร์ จงขะวะดี",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "วรรษชล แก้วมณี",
    "position": "ช่างไฟฟ้า"
  },
  {
    "name": "เมธาวี ชาบัญ",
    "position": "วิศวกร"
  },
  {
    "name": "ชัยวัฒน์ วิริยะกุล",
    "position": "วิศวกรเครื่องกล ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "วรทัต หงส์วาณิชวงศ์",
    "position": "วิศวกรไฟฟ้า"
  },
  {
    "name": "ทศพร ศรีไกรรส",
    "position": "วิศวกรไฟฟ้า ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "นวพล ยอดภักดี",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ประพันธ์ ชื่นชมเชาวน์",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ชนะโชติ เกษาภรณ์",
    "position": "วิศวกร ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "อนพัทย์ จันทร์ปราง",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "วีระชน อยู่สำราญ",
    "position": "วิศวกรไฟฟ้า"
  },
  {
    "name": "พันธกานต์ แจ่มแจ้ง",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ไตรภูมิ สุจจิตร์จูล",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ชลกานต์ เจริญสุข",
    "position": "วิศวกร"
  },
  {
    "name": "เทิดศักดิ์ ช้างหล่อ",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "สมยศ ลบล้ำเลิศ",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "สรวุฒิ เหล่าสิม",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "ทวี ทัดเทียม",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "ธนชาติ เศรษฐบุตร",
    "position": "นักวิชาการโสตทัศนศึกษา ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ภัทรพล ไชยมาตย์",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ยุทธภูมิ ญานเพิ่ม",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการ"
  },
  {
    "name": "พิชญา ดลมินทร์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ศักดิ์นรินทร์ คัญทัพ",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "วิฑูรย์ สุวรรณกิจ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "พีรพงษ์ จินดานิล",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "บัญชา ฟักเฟื่อง",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "พรชัย โพธิ์ไซย์",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "สถาพร แจ่มใจ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ตะวัน ทรัพย์อบรมย์",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "สุรศักดิ์ ต้วมสี",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "โสภาณา จันทร์ทวีนุช",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ทรงกลด สุดตา",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "นพกร เมืองแก้ว",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ไกรสอน คชมิตร",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ชนสรณ์ เนียมสุภาพ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "อำนาจ แม้นพรม",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "นฤเดช เวชบุญ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ศุภชัย เรืองเพชร",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "สุรชัย สุวรรณราฐ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "อนิน นาควัชระ",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "ปิยนันท์ ศรีชุมพวง",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "พชร สาธร",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "อนุชา สิทธิขำ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ชัยเทพ เจียมวีระบรรยง",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "บุญฤทธิ์ สายลือนาม",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "ศักดิ์นรินทร์ แก้วหานาม",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "มนัสชาย ประเดิมชัย",
    "position": "เจ้าหน้าที่บริหารงานก่อสร้าง"
  },
  {
    "name": "อุทัยวรรณ เกิดบุญ",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "วรพจน์ เฉลิมกลิ่น",
    "position": "นักวิชาการเกษตร ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สมพงษ์ พิเชฐบวรกุล",
    "position": "นักวิชาการเกษตร"
  },
  {
    "name": "กรรณิการ์ ศรีราณี",
    "position": "นักวิชาการเกษตร"
  },
  {
    "name": "สมชาย สุวิมล",
    "position": "คนสวน"
  },
  {
    "name": "สมพล คงอยู่",
    "position": "พนักงานพิมพ์"
  },
  {
    "name": "จวน แก่นละออ",
    "position": "คนสวน"
  },
  {
    "name": "ชาย ศรีสุริยวงษ์",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "พรภพ ยาเณร",
    "position": "พนักงานขับรถยนต์"
  },
  {
    "name": "อนนท์ ปรางค์แก้ว",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "ธีรพงษ์ การะเกตุ",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "สมหมาย เรืองยศ",
    "position": "คนสวน"
  },
  {
    "name": "มนตรี นาคไร่ขิง",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "ศราวุธ เนียมหมวด",
    "position": "พนักงานธุรการ"
  },
  {
    "name": "จีรวัฒน์ หลีล้วน",
    "position": "พนักงานสถานที่"
  },
  {
    "name": "จักรี โพธิ์ทอง",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "ไตรรงค์ นาคไร่ขิง",
    "position": "ผู้ช่วยช่างทั่วไป"
  },
  {
    "name": "ธนดล เรืองสุภาพ",
    "position": "คนสวน"
  },
  {
    "name": "ศิริ โตโสภณ",
    "position": "พนักงานขับเครื่องจักรกลขนาดเบา"
  },
  {
    "name": "อนันต์ ฤทธิ์คำรพ",
    "position": "คนสวน"
  },
  {
    "name": "สราวุฒิ โตสัมพันธ์",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "ธนกฤต เพ็งนาเรนทร์",
    "position": "คนสวน"
  },
  {
    "name": "วิทวัฒน์ กิจคงชีพ",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "อัครเดช ดนุดิษฐ",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "อภิชาติ มอญสะแก",
    "position": "พนักงานขับรถยนต์"
  },
  {
    "name": "หนึ่ง เที่ยงราตรี",
    "position": "ผู้ช่วยช่างทั่วไป"
  },
  {
    "name": "ศุภชัย เนียมสุภาพ",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "อนุรักษ์ สีสดใส",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "ศราวุธ พรศรี",
    "position": "ผู้ช่วยช่างทั่วไป"
  },
  {
    "name": "วีรยุทธ ทัศนดี",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "วันชนะ พลายจันทร์",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "กฤษณ ทองศรีเมือง",
    "position": "คนสวน"
  },
  {
    "name": "อำนาจ ศรีสัมพันธ์",
    "position": "คนสวน"
  },
  {
    "name": "จักรยศนันท์ เตียวตระกูล",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "อุทุมพร สุดสวาสดิ์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "วรพจน์ ปัญจมานนท์",
    "position": "วิศวกรไฟฟ้า"
  },
  {
    "name": "บัณฑิต โอษคลัง",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "กฤตนันท์ วิจิตรกูล",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "ธีรพงศ์ เกียรติกมลชัย",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "อภิวัฒน์ เศรษฐจารุรักษ์",
    "position": "นักวิชาการโสตทัศนศึกษา"
  },
  {
    "name": "จิรศักดิ์ ทับทิมหอม",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "อภิรักษ์ ฟักภู่",
    "position": "พนักงานสถานที่"
  },
  {
    "name": "อรรถพร ประกอบเพชร",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "วสันต์ รัตนนิธาน",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ศิริพร ศรีเพ็ญแก้ว",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "อคิราภ์ ภูริรักษ์พิติกร",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "ศศิวิมล ผุงเพิ่มตระกูล",
    "position": "นักวิชาการสิ่งแวดล้อม"
  },
  {
    "name": "มะลุลี เลี่ยมแหลม",
    "position": "นักวิชาการสิ่งแวดล้อม ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "ศันสณีย์ ศิริลักษณ์",
    "position": "นักวิชาการสิ่งแวดล้อม"
  },
  {
    "name": "รุ่งทิวา บัวดี",
    "position": "นักวิชาการสิ่งแวดล้อม"
  },
  {
    "name": "วราทิพย์ วัฒนวินิจฉัย",
    "position": "นักวิชาการสิ่งแวดล้อม ผู้ชำนาญการพิเศษ"
  },
  {
    "name": "สุฑานาศ สุยพงษ์พันธ์",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "เจริญชัย แสงอุทัย",
    "position": "วิศวกรเครื่องกล"
  },
  {
    "name": "สุเทพ วงษ์คำ",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "สวัสดิ์ อาจมาก",
    "position": "คนสวน"
  },
  {
    "name": "สมนึก แจ้งเจียนหัด",
    "position": "คนสวน"
  },
  {
    "name": "บุญเลิศ ต่ายกระทึก",
    "position": "คนสวน"
  },
  {
    "name": "เสน่ห์ ทองศรีเมือง",
    "position": "คนสวน"
  },
  {
    "name": "สุดารัตน์ คำภิมูล",
    "position": "พนักงานธุรการ"
  },
  {
    "name": "รวี จำเนียร",
    "position": "เจ้าหน้าที่บริหารงานทั่วไป"
  },
  {
    "name": "วศิน แสวงสุข",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "นิรมล กมลยชาติ",
    "position": "พนักงานธุุรการ"
  },
  {
    "name": "วัชระ วัดครุฑ",
    "position": "พนักงานขับรถยนต์"
  },
  {
    "name": "กัญญาณัฐ อุณชาติ",
    "position": "นักวิชาการสิ่งแวดล้อม"
  },
  {
    "name": "อดิศักดิ์ อุทัย",
    "position": "วิศวกรเครื่องกล"
  },
  {
    "name": "ปรเมธ เผือกทอง",
    "position": "ช่างเทคนิค"
  },
  {
    "name": "ป้อม แจ่มจรูญ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "วุฒิชัย แสงเจริญเกียรติ",
    "position": "พนักงานรักษาความปลอดภัย"
  },
  {
    "name": "นนทนันท์  ศรีจันทร์",
    "position": "นักวิชาการสิ่งแวดล้อม"
  },
  {
    "name": "ศิริชัย สว่างชม",
    "position": "พนักงานทั่วไป"
  },
  {
    "name": "วิชญ์พงศ์ วรรธนะโกวินท์",
    "position": "วิศวกรเครื่องกล"
  }
];
function normalizePersonnelSearch(value) { return String(value || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('th'); }
function searchEmbeddedPersonnel(query) {
    const prefix = normalizePersonnelSearch(query);
    if (!prefix) return {data: [], hasMore: false};
    const matches = EMBEDDED_PERSONNEL.filter(person => normalizePersonnelSearch(person.name).startsWith(prefix));
    return {data: matches.slice(0, 20), hasMore: matches.length > 20};
}
function resolveEmbeddedPersonnel(name) {
    const exact = normalizePersonnelSearch(name);
    const matches = EMBEDDED_PERSONNEL.filter(person => normalizePersonnelSearch(person.name) === exact);
    return matches.length === 1 ? {status: 'success', data: matches[0]} : {status: matches.length ? 'ambiguous' : 'not_found'};
}

// Format only the display; submit the ungrouped decimal string without rounding.
function normalizeContractMoney(value) {
    const raw = String(value == null ? '' : value).replace(/,/g, '').trim();
    if (raw === '') return '';
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw)) return null;
    const parts = raw.split('.');
    const integer = (parts[0] || '0').replace(/^0+(?=\d)/, '');
    return integer + (parts.length > 1 && parts[1] !== '' ? '.' + parts[1] : '');
}
function formatContractMoney(value) {
    const raw = String(value == null ? '' : value).replace(/,/g, '').trim();
    if (raw === '') return '';
    if (raw === '.') return '0.';
    const normalized = normalizeContractMoney(raw);
    if (normalized === null) return null;
    const parts = normalized.split('.');
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
        (parts.length > 1 ? '.' + parts[1] : raw.endsWith('.') ? '.' : '');
}
function formatContractMoneyInput(input, recalculate = true) {
    const original = input.value;
    const caret = input.selectionStart ?? original.length;
    const significantBeforeCaret = original.slice(0, caret).replace(/,/g, '').length;
    const formatted = formatContractMoney(original);
    if (formatted === null) {
        input.setCustomValidity('กรุณากรอกมูลค่าสัญญาเป็นตัวเลขเท่านั้น');
        return;
    }
    input.setCustomValidity('');
    input.value = formatted;
    let position = 0, count = 0;
    while (position < formatted.length && count < significantBeforeCaret) {
        if (formatted[position] !== ',') count++;
        position++;
    }
    input.setSelectionRange(position, position);
    if (recalculate) calculateAccumulatedMoney();
}
document.addEventListener('DOMContentLoaded', () => {
    const money = document.getElementById('contractValue');
    if (!money) return;
    money.addEventListener('input', event => { if (!event.isComposing) formatContractMoneyInput(money); });
    money.addEventListener('compositionend', () => formatContractMoneyInput(money));
    money.addEventListener('blur', () => formatContractMoneyInput(money));
});


// Prior-record lookup is scoped to all five criteria, never just the subject.
let contractRequestId = 0;
let visitRequestId = 0;
let previousContractLookupKey = null;
let submissionInstallmentEdited = false;
document.addEventListener('DOMContentLoaded', () => {
    const installment = document.getElementById('submissionInstallment');
    if (installment) installment.addEventListener('input', () => { submissionInstallmentEdited = true; });
});
function normalizeLookupText(value) { return String(value == null ? '' : value).trim(); }
function normalizeBudgetYear(value) {
    return normalizeLookupText(value).replace(/[๐-๙]/g, digit => String('๐๑๒๓๔๕๖๗๘๙'.indexOf(digit)));
}
function getContractLookup() {
    const read = id => document.getElementById(id)?.value || '';
    return { budgetYear: normalizeBudgetYear(read('fiscalYear')), location: normalizeLookupText(read('locationInput')),
        category: normalizeLookupText(read('categoryInput')), pwiCode: normalizeLookupText(read('pwiInput')), subject: normalizeLookupText(read('subject')) };
}
function getContractLookupKey() {
    const values = Object.values(getContractLookup());
    return values.every(Boolean) ? JSON.stringify(values) : '';
}
function lookupMatchesResponse(expected, actual) {
    return actual && Object.keys(expected).every(key => expected[key] === (key === 'budgetYear' ? normalizeBudgetYear(actual[key]) : normalizeLookupText(actual[key])));
}
function normalizeSupervisorNames(raw) {
    if (Array.isArray(raw)) return raw;
    try { const parsed = JSON.parse(raw); if (Array.isArray(parsed)) return parsed; } catch (error) {}
    return String(raw || '').split(',').map(name => name.trim()).filter(Boolean);
}
function clearContractAutofill() {
    ++visitRequestId;
    submissionInstallmentEdited = false;
    const installment = document.getElementById('submissionInstallment');
    if (installment) installment.value = '1';
    const fields = ['companyName','contractStart','contractEnd','contractDays','contractValue','contractVisits',
        'currentVisit','accumulatedMoney','contractSigningDate','expectedWorkers','workStart','workEnd','workDays','contractNumber','committeeChair','committeeChairName','committeeChairPosition','chiefSupervisor','chiefSupervisorName','chiefSupervisorPosition','supervisorPopupTrigger','supervisorsData','supervisorsPeople'];
    fields.forEach(name => {
        const field = document.getElementById(name) || document.getElementsByName(name)[0];
        if (!field) return;
        field.value = '';
        field.removeAttribute('data-date');
        if (field._flatpickr) field._flatpickr.clear(false);
        try { localStorage.removeItem('form_global_cache_' + (field.id || field.name)); } catch (error) {}
    });
    const signingStatus = document.getElementById('contractSigningDateStatus');
    if (signingStatus) signingStatus.textContent = '';
    try { localStorage.removeItem('form_global_cache_supervisor_subject'); } catch (error) {}
}
function refreshContractLookup() {
    const key = getContractLookupKey();
    if (key === previousContractLookupKey) return;
    previousContractLookupKey = key;
    fetchContractDetails(getContractLookup().subject);
}
document.addEventListener('DOMContentLoaded', () => {
    // Fiscal year must be selected explicitly; do not restore an old default.
    const year = document.getElementById('fiscalYear');
    if (year) year.value = '';
    setTimeout(refreshContractLookup, 0);
    ['fiscalYear','locationInput','categoryInput','pwiInput','subject'].forEach(id => {
        const field = document.getElementById(id);
        if (!field) return;
        field.addEventListener('change', refreshContractLookup);
        field.addEventListener('input', refreshContractLookup);
        field.addEventListener('blur', refreshContractLookup);
    });
    // Existing popup handlers assign .value directly without dispatching change.
    document.addEventListener('click', () => setTimeout(refreshContractLookup, 0));
});
document.addEventListener("DOMContentLoaded", () => {
    
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth(); // 0-11
    const yearCE = today.getFullYear(); // ค.ศ.
    const yearBE = yearCE + 543; // พ.ศ.

    const monthNamesThai = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const displayThaiDate = `${day} ${monthNamesThai[month]} ${yearBE}`;

if (document.getElementById('displayThaiDateInput')) {
    document.getElementById('displayThaiDateInput').value = displayThaiDate;
}

    // 2. รูปแบบ DD/MM/YYYY สำหรับส่งเข้า Google Sheet (ซ่อนไว้)
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month + 1).padStart(2, '0');
    const sheetDate = `${formattedDay}/${formattedMonth}/${yearCE}`;
    
    // ปรับตรงนี้ให้ส่งรูปแบบภาษาไทยเต็มเข้า Google Sheet
if (document.getElementById('entryDate')) {
    document.getElementById('entryDate').value = displayThaiDate;
}

    // ==========================================
    // ส่วนจัดการ POPUP สถานที่ดำเนินการ
    // ==========================================
    const locationInput = document.getElementById('locationInput');
    const locationModal = document.getElementById('locationModal');
    const closeLocationModal = document.getElementById('closeLocationModal');
    const locationList = document.getElementById('locationList');

    if (locationInput && locationModal) {
        // เมื่อคลิกช่อง ให้เปิด Popup
        locationInput.addEventListener('click', () => {
            // บังคับเอาโฟกัสออกเพื่อไม่ให้คีย์บอร์ดมือถือเด้งขึ้นมากวนตอนเลือก Popup
            locationInput.blur(); 
            locationModal.classList.add('active');
        });

        // กดปุ่มกากบาท หรือ คลิกพื้นที่ว่างเพื่อปิด
        if (closeLocationModal) closeLocationModal.addEventListener('click', () => locationModal.classList.remove('active'));
        locationModal.addEventListener('click', (e) => {
            if (e.target === locationModal) locationModal.classList.remove('active');
        });

        // จัดการเมื่อเลือกสถานที่ในลิสต์
        if (locationList) {
            const items = locationList.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    const val = this.getAttribute('data-value');
                    
                    // หากเลือก "พื้นที่ไม่อยู่ในรายการ"
                    if (val === 'custom') {
                        locationInput.removeAttribute('readonly'); // ปลดล็อกให้พิมพ์ได้
                        locationInput.value = '';
                        locationInput.placeholder = 'กรุณาพิมพ์ระบุสถานที่...';
                        locationInput.focus(); // เด้งคีย์บอร์ดให้พิมพ์ทันที
                    } else {
                        // หากเลือกสถานที่ปกติ
                        locationInput.setAttribute('readonly', 'true'); // ล็อกไว้เหมือนเดิม
                        locationInput.value = val || this.textContent.trim();
                    }
                    
                    locationModal.classList.remove('active'); // ปิดหน้าต่าง
                });
            });
        }
    }
    // ==========================================
    // ส่วนจัดการ POPUP หมวดหมู่งาน 13 หมวด
    // ==========================================
    const categoryInput = document.getElementById('categoryInput');
    const categoryModal = document.getElementById('categoryModal');
    const closeCategoryModal = document.getElementById('closeCategoryModal');
    const categoryList = document.getElementById('categoryList');

    if (categoryInput && categoryModal) {
        // เมื่อคลิกช่องหมวดหมู่งาน ให้แสดง Popup
        categoryInput.addEventListener('click', () => {
            categoryModal.classList.add('active');
        });

        // เมื่อกดปุ่มกากบาท ให้ปิด Popup
        if (closeCategoryModal) {
            closeCategoryModal.addEventListener('click', () => {
                categoryModal.classList.remove('active');
            });
        }

        // เมื่อคลิกพื้นที่สีดำรอบนอก Popup ให้ปิด Popup
        categoryModal.addEventListener('click', (e) => {
            if (e.target === categoryModal) {
                categoryModal.classList.remove('active');
            }
        });

        // เมื่อเลือกหมวดงานใดหมวดงานหนึ่ง
        if (categoryList) {
            const items = categoryList.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    categoryInput.value = this.getAttribute('data-value') || this.textContent.trim();
                    categoryModal.classList.remove('active');
                });
            });
        }
    }
});

async function checkEmailAndProceed() {
    const emailInput = document.getElementById('startEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('กรุณากรอก E-Mail ก่อนดำเนินการต่อ');
        return;
    }

    const btn = document.getElementById('verifyEmailBtn');
    btn.innerText = 'กำลังดึงข้อมูล...';
    btn.disabled = true;

    try {
        if (CONFIG && CONFIG.GOOGLE_SCRIPT_URL) {
            const response = await fetch(`${CONFIG.GOOGLE_SCRIPT_URL}?action=getUser&email=${encodeURIComponent(email)}`);
            const result = await response.json();

            if (result.status === 'success' && result.data) {
                let rawName = result.data.name || '';
                let cleanName = rawName.replace(/นาย|นางสาว|นาง/g, '').trim();
                cleanName = cleanName.replace(/\s+/g, ' ');

                if (document.getElementById('recorderName')) document.getElementById('recorderName').value = cleanName;
                if (document.getElementById('position')) document.getElementById('position').value = result.data.position || '';
                if (document.getElementById('departmentName')) document.getElementById('departmentName').value = result.data.department || '';
                if (document.getElementById('department')) document.getElementById('department').value = result.data.shortCode || result.data.deptCode || '';
            } else {
                alert('ไม่พบข้อมูลอีเมลในระบบ (คุณสามารถกรอกข้อมูลเองในแบบฟอร์มได้ครับ)');
                clearUserInfo();
            }
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล แต่คุณสามารถกรอกข้อมูลเองได้ครับ');
        clearUserInfo();
    } finally {
        btn.innerText = 'ดึงข้อมูลและดำเนินการต่อ';
        btn.disabled = false;
        
        if (document.getElementById('hiddenEmail')) document.getElementById('hiddenEmail').value = email;
        if (document.getElementById('displayEmailInput')) document.getElementById('displayEmailInput').value = email;
        if (document.getElementById('displayEmail')) document.getElementById('displayEmail').innerText = email;
        if (document.getElementById('email')) document.getElementById('email').value = email;

        expandForm();
    }
}

function clearUserInfo() {
    if (document.getElementById('recorderName')) document.getElementById('recorderName').value = '';
    if (document.getElementById('position')) document.getElementById('position').value = '';
    if (document.getElementById('departmentName')) document.getElementById('departmentName').value = '';
    if (document.getElementById('department')) document.getElementById('department').value = '';
}

function expandForm() {
    const container = document.getElementById('appContainer');
    document.getElementById('emailInputGroup').style.display = 'none';
    document.getElementById('authSubtitle').style.display = 'none';
    document.getElementById('verifiedUserGroup').style.display = 'block';

    container.classList.remove('compact');
    container.classList.add('expanded');
    
    setTimeout(() => {
        document.getElementById('mainFormContent').style.display = 'block';
    }, 150);
}

function resetEmail() {
    const container = document.getElementById('appContainer');
    document.getElementById('mainFormContent').style.display = 'none';
    container.classList.remove('expanded');
    container.classList.add('compact');
    
    document.getElementById('verifiedUserGroup').style.display = 'none';
    document.getElementById('emailInputGroup').style.display = 'flex';
    document.getElementById('authSubtitle').style.display = 'block';
}

function calculateDays(startId, endId, resultId) {
    // เปลี่ยนมาดึงจาก data-date แทน
    const startDate = document.getElementById(startId).getAttribute('data-date');
    const endDate = document.getElementById(endId).getAttribute('data-date');
    const resultInput = document.getElementById(resultId);

    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        
        if (end >= start) {
            resultInput.value = diffDays;
        } else {
            resultInput.value = "";
            alert("วันที่สิ้นสุดต้องมากกว่าหรือเท่ากับวันที่เริ่มต้น");
        }
    }
}

document.getElementById('contractStart').addEventListener('change', () => calculateDays('contractStart', 'contractEnd', 'contractDays'));
document.getElementById('contractEnd').addEventListener('change', () => calculateDays('contractStart', 'contractEnd', 'contractDays'));
document.getElementById('workStart').addEventListener('change', () => calculateDays('workStart', 'workEnd', 'workDays'));
document.getElementById('workEnd').addEventListener('change', () => calculateDays('workStart', 'workEnd', 'workDays'));

async function submitForm() {
    const form = document.getElementById('mahidolForm');
    const submitBtn = document.querySelector('.submit-btn');
    if (document.getElementById('jobStatusInput')?.value === 'ไม่แล้วเสร็จ' && !document.getElementById('jobDetailInput')?.value.trim()) {
        alert('กรุณาระบุเหตุผลที่งานไม่แล้วเสร็จ');
        document.getElementById('jobDetailInput')?.focus();
        return;
    }
    
    if (!CONFIG || !CONFIG.GOOGLE_SCRIPT_URL) {
        alert("กรุณาตั้งค่า GOOGLE_SCRIPT_URL ในไฟล์ config.js ให้ถูกต้อง");
        return;
    }
    
    if (!getContractLookupKey()) {
        alert('กรุณาเลือกปีงบประมาณ สถานที่ หมวดหมู่งาน P/WI และเรื่องที่ดำเนินการให้ครบ');
        return;
    }
    refreshContractLookup();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });
    data.budgetYear = getContractLookup().budgetYear;
    ['committeeChair','chiefSupervisor'].forEach(id => {
        const field = document.getElementById(id);
        if (field) data[id] = getPersonnelName(field);
    });
    const money = normalizeContractMoney(data.contractValue);
    if (money === null) {
        alert('กรุณากรอกมูลค่าสัญญาเป็นตัวเลข เช่น 1,000,000.50');
        return;
    }
    data.contractValue = money;
    const accumulatedMoney = normalizeContractMoney(data.accumulatedMoney);
    if (accumulatedMoney === null) {
        alert('กรุณากรอกเงินสะสมเป็นตัวเลข');
        return;
    }
    data.accumulatedMoney = accumulatedMoney;

    // === 🟢 เพิ่มโค้ดดึงค่าจาก 4 ฟิลด์ใหม่ตรงนี้ ===
    // เช็คก่อนว่ามีอิลิเมนต์ในหน้าเว็บหรือไม่ เพื่อป้องกัน Error
    if (document.getElementById('contractSigningDate')) {
        data['contractSigningDate'] = document.getElementById('contractSigningDate').getAttribute('data-date') || document.getElementById('contractSigningDate').value;
    }
    if (document.getElementById('submissionLetterNo')) {
        data['submissionLetterNo'] = document.getElementById('submissionLetterNo').value;
    }
    if (document.getElementById('submissionDate')) {
        data['submissionDate'] = document.getElementById('submissionDate').getAttribute('data-date') || document.getElementById('submissionDate').value;
    }
    if (document.getElementById('submissionInstallment')) {
        data['submissionInstallment'] = document.getElementById('submissionInstallment').value;
        if (!/^[1-9]\d*$/.test(data['submissionInstallment'])) {
            alert('กรุณาระบุงวดส่งงานเป็นจำนวนเต็มตั้งแต่ 1 ขึ้นไป');
            return;
        }
    }
    // =======================================

    // รวบรวมรายชื่อผู้ควบคุมงานจาก Popup ( Hidden Input: supervisorsData )
    const supervisorsDataRaw = document.getElementById('supervisorsData')?.value;
    if (supervisorsDataRaw) {
        try {
            const supArray = JSON.parse(supervisorsDataRaw);
            data['supervisorsData'] = supArray.join(', '); // รวมรายชื่อเป็นข้อความคั่นด้วยลูกน้ำ
        } catch(e) {
            data['supervisorsData'] = supervisorsDataRaw;
        }
    } else {
        data['supervisorsData'] = '';
    }

    // แปลงค่าวันที่ทั้ง 4 ช่องให้อยู่ในรูปแบบภาษาไทยเต็ม (เช่น 1 กันยายน 2569)
    const dateInputIds = ['contractStart', 'contractEnd', 'workStart', 'workEnd'];
    dateInputIds.forEach(id => {
        const input = document.getElementById(id);
        if (input && input.getAttribute('data-date')) {
            const parts = input.getAttribute('data-date').split('-'); // YYYY-MM-DD
            if (parts.length === 3) {
                const dayNum = parseInt(parts[2], 10);
                const monthNum = parseInt(parts[1], 10) - 1;
                const yearBE = parseInt(parts[0], 10) + 543;
                data[id] = `${dayNum} ${monthNamesThai[monthNum]} ${yearBE}`;
            }
        } else if (input && input.value) {
            data[id] = input.value;
        }
    });

    // วันที่กรอกข้อมูลให้เป็นภาษาไทยเต็มด้วย
    const now = new Date();
    data['entryDate'] = `${now.getDate()} ${monthNamesThai[now.getMonth()]} ${now.getFullYear() + 543}`;

    submitBtn.disabled = true;
    submitBtn.innerText = 'กำลังบันทึกข้อมูล...';

    try {
        // 1. รอให้ส่งข้อมูลไป Google Sheet ให้เสร็จก่อน (เพิ่ม await)
        const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(data)
        });
        const result = await response.json();

        if (result.status === 'success') {
            console.log('บันทึกลงชีทสำเร็จ:', result.message);
            
            // 2. เด้ง Popup เมื่อส่งข้อมูลสำเร็จแล้วจริงๆ
            Swal.fire({
                icon: 'success',
                title: 'ส่งข้อมูลเรียบร้อย!',
                text: 'ระบบบันทึกข้อมูลลงชีทสำเร็จ',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#28a745'
            }).then((res) => {
                if (res.isConfirmed) {
                    // ล้างแคชฟอร์มรวมถึงแคชรายชื่อผู้ควบคุมงาน
                    const cachedInputs = document.querySelectorAll('.save-cache');
                    cachedInputs.forEach(input => {
                        const key = "form_global_cache_" + (input.id || input.name);
                        localStorage.removeItem(key);
                    });
                    localStorage.removeItem('form_global_cache_supervisorsData');
                    
                    window.location.reload();
                }
            });
        } else {
            console.error('พบปัญหาฝั่งชีท:', result.message);
            alert('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์: ' + result.message);
            submitBtn.disabled = false;
            submitBtn.innerText = 'บันทึกข้อมูล';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('ไม่สามารถเชื่อมต่อกับระบบได้ กรุณาลองใหม่อีกครั้ง');
        submitBtn.disabled = false;
        submitBtn.innerText = 'บันทึกข้อมูล';
    }
}

async function updateVisitCount() {
    const lookup = getContractLookup();
    const key = getContractLookupKey();
    const requestId = ++visitRequestId;
    const output = document.getElementById('currentVisit');
    if (!output) return;
    output.value = '';
    if (!key || !CONFIG || !CONFIG.GOOGLE_SCRIPT_URL) return;
    try {
        const response = await fetch(`${CONFIG.GOOGLE_SCRIPT_URL}?${new URLSearchParams({ action: 'getVisitCount', ...lookup })}`);
        const result = await response.json();
        if (requestId !== visitRequestId || key !== getContractLookupKey()) return;
        if (result.status === 'success' && lookupMatchesResponse(lookup, result.lookup) && Number.isInteger(result.count) && result.count >= 0) {
            const total = document.getElementById('contractVisits').value.trim() || '?';
            output.value = `${result.count + 1}/${total}`;
            const installment = document.getElementById('submissionInstallment');
            if (installment && !submissionInstallmentEdited) installment.value = String(result.count + 1);
        }
    } catch (error) { console.error('Error fetching visit count:', error); }
    if (requestId === visitRequestId && key === getContractLookupKey()) calculateAccumulatedMoney();
}

document.getElementById('subject').addEventListener('blur', updateVisitCount);
document.getElementById('contractVisits').addEventListener('blur', updateVisitCount);

document.getElementById('contractVisits').addEventListener('input', () => {
    const currentVisitInput = document.getElementById('currentVisit');
    const totalVisits = document.getElementById('contractVisits').value.trim() || '?';
    
    if (currentVisitInput.value && currentVisitInput.value !== 'กำลังนับ...') {
        const currentCount = currentVisitInput.value.split('/')[0];
        currentVisitInput.value = `${currentCount}/${totalVisits}`;
    }
});
// ==========================================
    // ฐานข้อมูล P/WI ตามหมวดหมู่งาน (1 - 13)
    // ==========================================
    const pwiDatabase = {
        "1. งานบริหารจัดการระบบมาตรฐานและองค์กร": [
            "OPPE-01-M-01 คู่มือระบบการจัดการสิ่งแวดล้อม อาชีวอนามัย และความปลอดภัย",
            "OPPE-01-P-01 การประเมินประเด็นสิ่งแวดล้อมและความเสี่ยง",
            "OPPE-01-P-02 การจัดการกฎหมายและความสอดคล้อง",
            "OPPE-01-P-03 การจัดการวัตถุประสงค์และแผนงาน",
            "OPPE-01-P-04 การจัดการความสามารถและความตระหนัก",
            "OPPE-01-P-05 การสื่อสารและการมีส่วนร่วม",
            "OPPE-01-P-06 การควบคุมข้อมูลสารสนเทศ",
            "OPPE-01-P-07 การจัดการความเปลี่ยนแปลง",
            "OPPE-01-P-08 การจัดซื้อจัดจ้างและการควบคุมควบคุมผู้รับเหมา",
            "OPPE-01-P-09 การจัดการพลังงานและทรัพยากร",
            "OPPE-01-P-10 การเฝ้าระวังและวัดผลคุณภาพ ระบบการจัดการสิ่งแวดล้อม อาชีวอนามัย และความปลอดภัย",
            "OPPE-01-P-11 การรายงานและสอบสวนอุบัติการณ์",
            "OPPE-01-P-12 การเตรียมพร้อมและตอบโต้ภาวะฉุกเฉิน",
            "OPPE-01-P-13 การเฝ้าระวังสุขภาพพนักงาน",
            "OPPE-01-P-14 การตรวจประเมินภายใน",
            "OPPE-01-P-15 การทบทวนโดยฝ่ายบริหาร",
            "OPPE-01-P-16 การจัดการสิ่งที่ไม่เป็นไปตามข้อกำหนด"
        ],
        "2. งานบริหารจัดการพื้นที่ ภูมิทัศน์ และพิธีการ": [
            "OPPE-02-P-01 การจัดการพื้นที่และสิ่งอำนวยความสะดวก",
            "OPPE-02-P-02 การจัดการภูมิทัศน์และพื้นที่สีเขียว",
            "OPPE-02-P-03 การจัดการพิธีการและตกแต่งภูมิทัศน์ชั่วคราว"
        ],
        "3. งานบริหารจัดการระบบขนส่งและจราจร": [
            "OPPE-03-P-01 การจัดการจราจร",
            "OPPE-03-P-02 การจัดการและบริการรถโดยสารไฟฟ้า (MUVE Bus)",
            "OPPE-03-P-03 การจัดการและบริการรถราง",
            "OPPE-03-P-04 การจัดการและบริการจักรยานสาธารณะ",
            "OPPE-03-P-05 การจัดการยานพาหนะประจำกองกายภาพและสิ่งแวดล้อม"
        ],
        "4. งานบริหารจัดการออกแบบและควบคุมงานก่อสร้าง": [
            "OPPE-04-P-01 การควบคุมและตรวจสอบงานก่อสร้าง",
            "OPPE-04-P-02 การออกแบบและกำกับดูแลผังแม่บท"
        ],
        "5. งานบริหารจัดการสุขอนามัยและสภาพแวดล้อม": [
            "OPPE-05-P-01 การรักษาความสะอาดและสุขอนามัย",
            "OPPE-05-P-02 การควบคุมเชื้อราและฆ่าเชื้อโรค",
            "OPPE-05-P-03 การควบคุมสุขลักษณะการล้างภาชนะ",
            "OPPE-05-P-04 การจัดการสัตว์พาหะและสิ่งรบกวน"
        ],
        "6. งานบริหารจัดการขยะและของเสีย": [
            "OPPE-06-P-01 การจัดการขยะ"
        ],
        "7. งานบริหารจัดการระบบน้ำและสุขาภิบาล": [
            "OPPE-07-P-01 การจัดการระบบจำหน่ายน้ำประปา",
            "OPPE-07-P-02 การจัดการระบบน้ำประปาภายในอาคาร",
            "OPPE-07-P-03 การจัดการระบบน้ำรีไซเคิล",
            "OPPE-07-P-04 การจัดการระบบน้ำเสีย",
            "OPPE-07-P-05 การจัดการน้ำผิวดินและป้องกันน้ำท่วม"
        ],
        "8. งานบริหารจัดการระบบไฟฟ้าและพลังงาน": [
            "OPPE-08-P-01 การบริการและบำรุงรักษาระบบจำหน่ายไฟฟ้า",
            "OPPE-08-P-02 การบำรุงรักษาสถานีไฟฟ้าย่อย",
            "OPPE-08-P-03 การดำเนินงานและบำรุงรักษาระบบไฟฟ้าประจำอาคาร",
            "OPPE-08-P-04 การดำเนินงานและบำรุงรักษาระบบเครื่องกำเนิดไฟฟ้า",
            "OPPE-08-P-05 การดำเนินงานและบำรุงรักษาระบบสำรองไฟอัตโนมัติ (UPS)",
            "OPPE-08-P-06 การดำเนินงานและบำรุงรักษาระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์"
        ],
        "9. งานบริหารจัดการระบบปรับอากาศ": [
            "OPPE-09-P-01 การดำเนินงานและบำรุงรักษาระบบปรับอากาศ (Chiller)",
            "OPPE-09-P-02 การดำเนินงานและบำรุงรักษาระบบปรับอากาศ (Split Type / VRV)",
            "OPPE-09-P-03 การดำเนินงานและบำรุงรักษาระบบควบคุมความชื้น"
        ],
        "10. งานบริหารจัดการระบบความปลอดภัยและป้องกันเหตุ": [
            "OPPE-10-P-01 การรักษาความปลอดภัยพื้นที่ส่วนกลางและอาคาร โดยเจ้าหน้าที่รักษาความปลอดภัย",
            "OPPE-10-P-02 การรักษาความปลอดภัยพื้นที่ส่วนกลางและอาคาร โดยระบบ CCTV",
            "OPPE-10-P-03 การดำเนินงานและบำรุงรักษาระบบแจ้งเหตุและสัญญาณเตือนภัย",
            "OPPE-10-P-04 การดำเนินงานและบำรุงรักษาระบบป้องกันและระงับอัคคีภัย"
        ],
        "11. งานบริหารจัดการระบบแก๊สและท่อดูดควัน": [
            "OPPE-11-P-01 การดำเนินงานและบำรุงรักษาระบบประกอบศูนย์อาหาร"
        ],
        "12. งานบริหารจัดการระบบลิฟต์และรถกระเช้าไฟฟ้า": [
            "OPPE-12-P-01 การดำเนินงานและบำรุงรักษาระบบลิฟต์โดยสาร",
            "OPPE-12-P-02 การดำเนินงานและบำรุงรักษารถกระเช้าไฟฟ้า"
        ],
        "13. งานบริหารจัดการโสตทัศนูปกรณ์และวิศวกรรมเวที": [
            "OPPE-13-P-01 การดำเนินงานและบำรุงรักษาระบบขยายเสียงและกระจายเสียง",
            "OPPE-13-P-02 การดำเนินงานและบำรุงรักษาระบบเสียงและภาพหลัก",
            "OPPE-13-P-03 การดำเนินงานและบำรุงรักษารักษางานวิศวกรรมเวที"
        ]
    };


    
    // ==========================================
    // ส่วนจัดการพฤติกรรมช่อง P/WI เมื่อเปลี่ยนหมวดหมู่
    // ==========================================
    const pwiInput = document.getElementById('pwiInput');
    const pwiModal = document.getElementById('pwiModal');
    const closePwiModal = document.getElementById('closePwiModal');
    const pwiList = document.getElementById('pwiList');

    if (categoryList && pwiInput) {
        const catItems = categoryList.querySelectorAll('li');
        catItems.forEach(item => {
            item.addEventListener('click', function() {
                // เคลียร์ค่าช่อง P/WI ทุกครั้งที่เปลี่ยนหมวดหมู่งาน
                pwiInput.value = ''; 
                pwiInput.setAttribute('readonly', 'true');
                pwiInput.style.cursor = 'pointer';
                pwiInput.style.backgroundColor = '#fff';
                pwiInput.placeholder = 'คลิกเพื่อเลือก P/WI';
            });
        });
    }

    // ==========================================
    // ส่วนจัดการแสดงผล POPUP รายชื่อ P/WI
    // ==========================================
    if (pwiInput && pwiModal) {
        pwiInput.addEventListener('click', () => {
            const currentCategory = categoryInput ? categoryInput.value : '';
            
            // หากผู้ใช้ยังไม่ได้เลือกหมวดหมู่ ให้แจ้งเตือนก่อน
            if (!currentCategory) {
                alert('กรุณาเลือก "หมวดหมู่งาน" ก่อนเลือกรหัส P/WI');
                return;
            }

            pwiInput.blur(); // เอาโฟกัสออกกันคีย์บอร์ดเด้ง
            
            // สร้าง List รายการใหม่ ตามหมวดหมู่ที่เลือก
            pwiList.innerHTML = ''; 
            
            const pwiItems = pwiDatabase[currentCategory] || [];
            
            pwiItems.forEach(pwi => {
                const li = document.createElement('li');
                li.setAttribute('data-value', pwi);
                li.textContent = pwi;
                pwiList.appendChild(li);
            });
            
            // เพิ่มปุ่ม "ไม่อยู่ในรายการ (ระบุเอง)" ไว้ด่านล่างสุดเสมอ
            const customLi = document.createElement('li');
            customLi.setAttribute('data-value', 'custom');
            customLi.style.fontWeight = '600';
            customLi.style.color = '#dc3545';
            customLi.textContent = 'ไม่อยู่ในรายการ (ระบุ P/WI เอง)';
            pwiList.appendChild(customLi);

            // ฝัง Event ไว้ในรายการที่เพิ่งสร้างขึ้นมา
            const items = pwiList.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    const val = this.getAttribute('data-value');
                    
                    if (val === 'custom') {
                        pwiInput.removeAttribute('readonly');
                        pwiInput.style.cursor = 'text';
                        pwiInput.value = '';
                        pwiInput.placeholder = 'กรุณาพิมพ์ระบุ P/WI...';
                        pwiInput.focus();
                    } else {
                        pwiInput.setAttribute('readonly', 'true');
                        pwiInput.style.cursor = 'pointer';
                        pwiInput.value = val || this.textContent.trim();
                    }
                    
                    pwiModal.classList.remove('active');
                });
            });

            // เปิด Modal P/WI
            pwiModal.classList.add('active');
        });

        // จัดการการปิด Popup P/WI
        if (closePwiModal) {
            closePwiModal.addEventListener('click', () => pwiModal.classList.remove('active'));
        }
        pwiModal.addEventListener('click', (e) => {
            if (e.target === pwiModal) pwiModal.classList.remove('active');
        });
    }
    // ==========================================
    // ส่วนจัดการ POPUP ปฏิทิน (Date Modal + Dropdown)
    // ==========================================
    const dateModal = document.getElementById('dateModal');
    const closeDateModal = document.getElementById('closeDateModal');
    const calMonthSelect = document.getElementById('calMonthSelect');
    const calYearSelect = document.getElementById('calYearSelect');
    const calendarDays = document.getElementById('calendarDays');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const dateModalTitle = document.getElementById('dateModalTitle');

    let activeDateInput = null;
    let currentCalDate = new Date();

    const monthNamesThai = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    // สร้างตัวเลือกใน Dropdown เดือน และ ปี (ย้อนหลัง 10 ปี - ล่วงหน้า 10 ปี)
    function initCalSelects() {
        if (!calMonthSelect || !calYearSelect) return;

        // ใส่รายการเดือน
        calMonthSelect.innerHTML = '';
        monthNamesThai.forEach((m, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = m;
            calMonthSelect.appendChild(opt);
        });

        // ใส่รายการปี (แสดงเป็น พ.ศ.)
        calYearSelect.innerHTML = '';
        const currentYear = new Date().getFullYear();
        for (let y = currentYear - 10; y <= currentYear + 10; y++) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = y + 543; // เปลี่ยน ค.ศ. เป็น พ.ศ.
            calYearSelect.appendChild(opt);
        }
    }

    initCalSelects();

    // อีเวนต์เมื่อเปลี่ยน Dropdown เดือน/ปี
    if (calMonthSelect) {
        calMonthSelect.addEventListener('change', () => {
            currentCalDate.setMonth(parseInt(calMonthSelect.value));
            renderCalendar();
        });
    }

    if (calYearSelect) {
        calYearSelect.addEventListener('change', () => {
            currentCalDate.setFullYear(parseInt(calYearSelect.value));
            renderCalendar();
        });
    }

    // ผูก Event ให้ช่องวันที่ทั้ง 4 ช่อง
    const dateInputIds = ['contractSigningDate', 'submissionDate', 'contractStart', 'contractEnd', 'workStart', 'workEnd'];
    dateInputIds.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('click', () => {
                activeDateInput = input;
                input.blur();

                const label = input.closest('.form-group')?.querySelector('label')?.textContent || 'เลือกวันที่';
                if (dateModalTitle) dateModalTitle.textContent = `เลือก${label}`;

                const savedDate = input.getAttribute('data-date') || parseAndFormatThaiDate(input.value).isoDate;
                if (savedDate) {
                    const parts = savedDate.split('-').map(Number);
                    currentCalDate = new Date(parts[0], parts[1] - 1, parts[2]);
                } else {
                    currentCalDate = new Date();
                }

                renderCalendar();
                if (dateModal) dateModal.classList.add('active');
            });
        }
    });

    if (closeDateModal) {
        closeDateModal.addEventListener('click', () => dateModal.classList.remove('active'));
    }
    if (dateModal) {
        dateModal.addEventListener('click', (e) => {
            if (e.target === dateModal) dateModal.classList.remove('active');
        });
    }

    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentCalDate.setMonth(currentCalDate.getMonth() - 1);
            renderCalendar();
        });
    }

    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', () => {
            currentCalDate.setMonth(currentCalDate.getMonth() + 1);
            renderCalendar();
        });
    }

    function renderCalendar() {
        if (!calendarDays) return;

        const year = currentCalDate.getFullYear();
        const month = currentCalDate.getMonth();

        // อัปเดตค่า Dropdown ให้ตรงกับเดือน/ปี ปัจจุบัน
        if (calMonthSelect) calMonthSelect.value = month;
        if (calYearSelect) calYearSelect.value = year;

        calendarDays.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();
        const today = new Date();

        let cellsCount = 0;

        // ช่องว่างก่อนวันที่ 1
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cal-day-cell empty';
            calendarDays.appendChild(emptyCell);
            cellsCount++;
        }

        // วันที่ในเดือน
        for (let day = 1; day <= totalDays; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'cal-day-cell';
            dayCell.textContent = day;

            const formattedMonth = String(month + 1).padStart(2, '0');
            const formattedDay = String(day).padStart(2, '0');
            const dateStr = `${year}-${formattedMonth}-${formattedDay}`;

            if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
                dayCell.classList.add('today');
            }

            if (activeDateInput && (activeDateInput.getAttribute('data-date') || parseAndFormatThaiDate(activeDateInput.value).isoDate) === dateStr) {
                dayCell.classList.add('selected');
            }

            dayCell.addEventListener('click', () => {
                if (activeDateInput) {
                    // 1. สร้างวันที่ภาษาไทยแบบเต็ม (เช่น 1 กันยายน 2569)
                    const yearBE = year + 543;
                    const thaiDateStr = `${day} ${monthNamesThai[month]} ${yearBE}`;
                    
                    // 2. แสดงผลรูปแบบภาษาไทยเต็มลงในช่อง
                    activeDateInput.value = thaiDateStr;
                    
                    // 3. เก็บค่า YYYY-MM-DD ซ่อนไว้ใน attribute เพื่อใช้คำนวณจำนวนวัน
                    activeDateInput.setAttribute('data-date', dateStr);
                    if (activeDateInput.id === 'contractSigningDate') {
                        const status = document.getElementById('contractSigningDateStatus');
                        if (status) status.textContent = '';
                    }
                    
                    // 4. สั่งคำนวณวัน
                    if (activeDateInput.id === 'contractStart' || activeDateInput.id === 'contractEnd') {
                        calculateDays('contractStart', 'contractEnd', 'contractDays');
                    } else if (activeDateInput.id === 'workStart' || activeDateInput.id === 'workEnd') {
                        calculateDays('workStart', 'workEnd', 'workDays');
                    }
                }
                dateModal.classList.remove('active');
            });

            calendarDays.appendChild(dayCell);
            cellsCount++;
        }

        // เติมช่องว่างให้ครบ 42 ช่อง (6 แถว x 7 วัน) เพื่อล็อกความสูงตารางไม่ให้ดิ้น
        while (cellsCount < 42) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cal-day-cell empty';
            calendarDays.appendChild(emptyCell);
            cellsCount++;
        }
    }
    // เพิ่ม 3 ฟิลด์ใหม่เข้าใน hseData
const hseData = {
    budgetYear: ["2567", "2568", "2569", "2570", "2571"], // เพิ่มบรรทัดนี้และปรับปีตามต้องการ
    healthCheckTypeInput: ["ตรวจสุขภาพก่อนเข้างาน", "ตรวจสุขภาพประจำปี", "ตรวจสุขภาพตามปัจจัยเสี่ยง", "ตรวจสุขภาพก่อนกลับเข้าทำงาน (หลังป่วยหนักหรือเจ็บป่วยจากการทำงาน)", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    // ... (โค้ดเดิม)
    healthCheckResultInput: ["พร้อมทำงานปกติ", "พร้อมทำงานแต่มีเงื่อนไข ( - เช่น ห้ามยกของหนัก)", "ไม่พร้อมทำงาน", "รอผลการตรวจวินิจฉัยเพิ่มเติม", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    coshemInput: ["ผ่านการอบรม", "ยังไม่ผ่านการอบรม / รอคิวอบรม", "ไม่ผ่านการอบรม", "บัตรอบรมหมดอายุ", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    criminalCheckInput: ["ผ่าน / ไม่พบประวัติ", "ไม่ผ่าน / พบประวัติความผิดร้ายแรง", "ผ่านแบบมีเงื่อนไข (เช่น ความผิดลหุโทษในอดีตที่บริษัทอนุโลม)", "อยู่ระหว่างตรวจสอบ", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    drugTestInput: ["ผ่าน / ไม่พบสารเสพติด", "ไม่ผ่าน / พบสารเสพติด", "อยู่ระหว่างรอผลจากห้องปฏิบัติการ", "ปฏิเสธการตรวจ", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    workPermitInput: ["ใบอนุญาตทำงานในที่อับอากาศ", "ใบอนุญาตทำงานบนที่สูง", "ใบอนุญาตทำงานที่ทำให้เกิดความร้อน/ประกายไฟ", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    permitStatusInput: ["รอการอนุมัติ", "อนุมัติแล้ว / กำลังดำเนินการ", "ระงับการทำงานชั่วคราว ( เช่น สภาพอากาศไม่อำนวย หรือพบความไม่ปลอดภัย)", "ไม่อนุมัติ", "ปิดงานสมบูรณ์", "ยกเลิก", "ไม่เกี่ยวข้อง (ในสัญญาไม่มีการกำกับควบคุม)"],
    sdsStatusInput: ["ไม่เกี่ยวข้องกับสารเคมี", "ไม่อนุมัติ / สารเคมีห้ามใช้", "รออนุมัติใช้งาน / รอตรวจสอบ", "อนุมัติให้ใช้ (มี SDS ฉบับปรับปรุงล่าสุด)", "SDS หมดอายุ / ต้องขอฉบับใหม่จากผู้ผลิต (ต้องทบทวนทุก 3-5 ปี)"],

    // --- เพิ่ม 3 รายการใหม่ตรงนี้ ---
    // ... (โค้ดก่อนหน้า)
    impactCharacterInput: [
        "ไม่มีผลกระทบ (None) ไม่ส่งผลใดๆ ต่อความปลอดภัยและสิ่งแวดล้อม",
        "ด้านความปลอดภัยและอาชีวอนามัย (OH&S) เสี่ยงต่อการบาดเจ็บ โรคจากการทำงาน อัคคีภัย หรือกระทบสภาพแวดล้อม (แสง เสียง ความร้อน)",
        "ด้านสิ่งแวดล้อม (Environment) เสี่ยงต่อสารเคมีรั่วไหล น้ำเสีย มลพิษทางอากาศ หรือกากของเสียเพิ่มขึ้น"
    ],
    changeTypeInput: [
        "ไม่เข้าข่ายเกณฑ์ MOC (MOC Not Required) ตรวจสอบแล้วเป็นเพียงการซ่อมบำรุงปกติ หรือใช้สเปกเดิม",
        "การเปลี่ยนแปลงแบบถาวร (Permanent) เปลี่ยนแปลงแล้วใช้งานตลอดไป ไม่กลับไปใช้แบบเดิม",
        "การเปลี่ยนแปลงแบบชั่วคราว (Temporary) เปลี่ยนแปลงเฉพาะช่วงเวลาที่กำหนด เมื่อครบกำหนดจะกลับไปใช้แบบเดิม",
        "การเปลี่ยนแปลงกรณีฉุกเฉิน (Emergency) การแก้ไขเร่งด่วนเพื่อป้องกันความสูญเสีย โดยไม่ได้วางแผนไว้ล่วงหน้า"
    ],
    mitigationResultInput: [
        "ความเสี่ยงยอมรับได้ ระดับความเสี่ยงปลอดภัยเพียงพอ สามารถดำเนินการต่อได้เลย",
        "ต้องจัดทำมาตรการควบคุมเพิ่มเติม ความเสี่ยงสูงเกินไป ต้องมีมาตรการลดความเสี่ยงก่อนเริ่มงาน",
        "พบโอกาสในการปรับปรุง การเปลี่ยนแปลงนี้ส่งผลดี ช่วยลดความเสี่ยงหรือเพิ่มประสิทธิภาพรักษ์โลก"
    ],
        meetingRequirementInput: [
        "ไม่จำเป็นต้องนำเข้าที่ประชุม (จัดการและตัดสินใจได้ในระดับปฏิบัติการ)",
        "จำเป็น - เพื่อขอการตัดสินใจ/กำหนดนโยบายจากผู้บริหาร (เช่น กรณีมีผลกระทบรุนแรงต่อความปลอดภัย/สิ่งแวดล้อม หรือมีข้อพิพาทเรื่องสัญญา) (โปรดระบุรายละเอียดในช่องหมายเหตุเพื่อจัดทำวาระการประชุม)",
        "จำเป็น - เพื่อขออนุมัติงบประมาณ/ทรัพยากรเพิ่มเติม (เช่น ต้องจ้างซ่อมภายนอกที่มีมูลค่าสูง หรือต้องซื้อเครื่องจักรใหม่) (โปรดระบุรายละเอียดในช่องหมายเหตุเพื่อจัดทำวาระการประชุม)",
        "จำเป็น - เพื่อรายงานเป็นข้อมูล/สถิติเท่านั้น (เช่น รายงานสรุปการซ่อมบำรุง หรือรายงานอุบัติการณ์ประจำเดือน)"
    ],
    jobStatusInput: [
        "ไม่แล้วเสร็จ",
        "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา",
        "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา แต่มีการดำเนินการซ่อมแซม ดำเนินการได้เอง",
        "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา แต่มีการดำเนินการซ่อมแซม ส่งพัสดุมหาลัย"
        // ไม่ต้องพิมพ์ "อื่นๆ (โปรดระบุ)" เพราะระบบจะดึงมาให้อัตโนมัติเหมือนช่องอื่น
    ],
    jobDetailInput: [] // ปล่อยว่างไว้ ระบบจะเอาข้อมูลมาเติมตามเงื่อนไข
    
};


    

    // ==========================================
    // 1. ระบบจัดการ Popup แบบเลือกข้อเดียว (Generic Single Select)
    // ==========================================
    const modalGeneric = document.getElementById('modal_generic');
    const listGeneric = document.getElementById('list_generic');
    const titleGeneric = document.getElementById('modal_generic_title');
    let currentGenericInput = null;

    Object.keys(hseData).forEach(inputId => {
        const inputEl = document.getElementById(inputId);
        if (inputEl) {
            inputEl.addEventListener('click', () => {
                if (inputId === 'jobDetailInput' && document.getElementById('jobStatusInput')?.value === 'ไม่แล้วเสร็จ') return;
                currentGenericInput = inputEl;
                titleGeneric.innerText = `เลือก${inputEl.previousElementSibling.innerText}`;
                listGeneric.innerHTML = '';
                
                // นำรายการมาวนลูปสร้างบรรทัด
                hseData[inputId].forEach(val => {
                    const li = document.createElement('li');
                    li.textContent = val;
                    li.addEventListener('click', () => selectGenericItem(val, false));
                    listGeneric.appendChild(li);
                });

                // สำหรับ sdsStatusInput ไม่ต้องมี "อื่นๆ"
                if (inputId !== 'sdsStatusInput') {
                    const liCustom = document.createElement('li');
                    liCustom.textContent = "อื่นๆ (โปรดระบุ)";
                    liCustom.style.color = "#dc3545";
                    liCustom.style.fontWeight = "bold";
                    liCustom.addEventListener('click', () => selectGenericItem("", true));
                    listGeneric.appendChild(liCustom);
                }

                modalGeneric.classList.add('active');
            });
        }
    });

    document.getElementById('close_modal_generic').addEventListener('click', () => modalGeneric.classList.remove('active'));

    function selectGenericItem(val, isCustom) {
        if (!currentGenericInput) return;
        
        if (isCustom) {
            currentGenericInput.removeAttribute('readonly');
            currentGenericInput.value = '';
            currentGenericInput.placeholder = 'อื่นๆ โปรดระบุ...';
            currentGenericInput.classList.add('custom-red-placeholder');
            currentGenericInput.focus();
        } else {
            currentGenericInput.setAttribute('readonly', 'true');
            currentGenericInput.value = val;
            currentGenericInput.classList.remove('custom-red-placeholder');
        }
        modalGeneric.classList.remove('active');
        if (currentGenericInput.id === 'jobStatusInput') syncIncompleteJobDetail();
    }

    // ==========================================
    // 2. ระบบจัดการ Popup แบบเลือกหลายข้อ (PPE & สารเคมี)
    // ==========================================
    function setupMultiSelect(inputId, modalId, btnId, isChemical) {
        const inputEl = document.getElementById(inputId);
        const modal = document.getElementById(modalId);
        const btn = document.getElementById(btnId);
        const closeBtn = document.getElementById('close_' + modalId);
        
        if (!inputEl || !modal || !btn) return;

        inputEl.addEventListener('click', () => {
            modal.classList.add('active');
            inputEl.blur();
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }

        btn.addEventListener('click', () => {
            const checkedBoxes = modal.querySelectorAll('input[type="checkbox"]:checked');
            let selectedVals = [];
            let hasCustom = false;

            checkedBoxes.forEach(cb => {
                if (cb.value === 'custom') {
                    hasCustom = true;
                } else {
                    selectedVals.push(cb.value);
                }
            });

            // จัดการกรณีเลือก "อื่นๆ" ในแบบ Multi-select
            if (hasCustom) {
                inputEl.removeAttribute('readonly');
                inputEl.classList.add('custom-red-placeholder');
                inputEl.value = selectedVals.length > 0 ? selectedVals.join(', ') + ', ' : '';
                inputEl.placeholder = 'อื่นๆ โปรดระบุ...';
                inputEl.focus();
            } else {
                inputEl.setAttribute('readonly', 'true');
                inputEl.classList.remove('custom-red-placeholder');
                inputEl.value = selectedVals.join(', ');
            }
            if (isChemical) updateHazardType(selectedVals, hasCustom);
            
            modal.classList.remove('active');
        });
    }

    setupMultiSelect('ppeInput', 'modal_ppe', 'btn_confirm_ppe', false);
    setupMultiSelect('sdsNameInput', 'modal_sds', 'btn_confirm_sds', true);

    // กดพื้นหลังดำเพื่อปิด
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay && overlay.id !== 'supervisorsModal') overlay.classList.remove('active');
        });
    });
    function selectHazard(value) {
  // นำค่าที่เลือกไปแสดงในช่อง input
  document.getElementById('hazardType').value = value;
  
  // ปิด Modal อัตโนมัติ
  var modalElement = document.getElementById('hazardModal');
  var modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }
}
// ==========================================
    // ส่วนจัดการ POPUP ประเภทความเป็นอันตรายที่มักจะพบ
    // ==========================================
    const hazardInput = document.getElementById('hazardTypeInput');
    const hazardModal = document.getElementById('hazardModal');
    const closeHazardModal = document.getElementById('closeHazardModal');
    const hazardList = document.getElementById('hazardList');

    if (hazardInput && hazardModal) {
        // เมื่อคลิกช่อง ให้เปิด Popup
        hazardInput.addEventListener('click', () => {
            hazardInput.blur(); // ป้องกันคีย์บอร์ดมือถือเด้ง
            hazardModal.classList.add('active');
        });

        // ปิด Popup เมื่อกดกากบาท หรือ คลิกพื้นที่รอบนอก
        if (closeHazardModal) {
            closeHazardModal.addEventListener('click', () => hazardModal.classList.remove('active'));
        }
        hazardModal.addEventListener('click', (e) => {
            if (e.target === hazardModal) hazardModal.classList.remove('active');
        });

        // เมื่อคลิกเลือกรายการในลิสต์
        if (hazardList) {
            const items = hazardList.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    const val = this.getAttribute('data-value');
                    
                    if (val === 'custom') {
                        hazardInput.removeAttribute('readonly');
                        hazardInput.value = '';
                        hazardInput.placeholder = 'กรุณาพิมพ์ระบุประเภทความเป็นอันตราย...';
                        hazardInput.classList.add('custom-red-placeholder');
                        hazardInput.focus();
                    } else {
                        hazardInput.setAttribute('readonly', 'true');
                        hazardInput.classList.remove('custom-red-placeholder');
                        hazardInput.value = val || this.textContent.trim();
                    }
                    
                    hazardModal.classList.remove('active');
                });
            });
        }
    }

    
    // ฟังก์ชันจัดการ Popup แบบใช้งานซ้ำได้ (ถอนโค้ดสั้นลง)
function setupSimpleModal(inputId, modalId, closeBtnId, listId) {
    const input = document.getElementById(inputId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);
    const list = document.getElementById(listId);

    if (input && modal) {
        // กดที่ช่อง input เพื่อเปิด Popup
        input.addEventListener('click', () => {
            input.blur(); // เอาเคอร์เซอร์ออก ป้องกันคีย์บอร์ดเด้ง
            modal.classList.add('active');
        });

        // กดปุ่ม X ปิด Popup
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        }

        // กดพื้นที่ว่างนอก Popup เพื่อปิด
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });

        // กดเลือกรายการใน list
        if (list) {
            const items = list.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    // เอา highlight ของตัวเก่าออก และใส่ให้ตัวใหม่
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // ดึงค่าไปใส่ใน input
                    input.value = this.getAttribute('data-value') || this.textContent.trim();
                    
                    // ปิด Popup
                    modal.classList.remove('active');
                });
            });
        }
    }
}

// เรียกใช้งานฟังก์ชันสำหรับ 4 ช่องใหม่
setupSimpleModal('impactLevelInput', 'impactLevelModal', 'closeImpactLevelModal', 'impactLevelList');
setupSimpleModal('reviewStatusInput', 'reviewStatusModal', 'closeReviewStatusModal', 'reviewStatusList');
setupSimpleModal('jobStatusInput', 'jobStatusModal', 'closeJobStatusModal', 'jobStatusList');
setupSimpleModal('meetingRequiredInput', 'meetingRequiredModal', 'closeMeetingRequiredModal', 'meetingRequiredList');
setupSimpleModal('budgetYear', 'budgetYearModal', 'closeBudgetYearModal', 'budgetYearList');

// ==========================================
// ฐานข้อมูล "เรื่องที่ดำเนินการ" ตามรหัส P/WI (พร้อมลำดับตัวเลข)
// ==========================================
const subjectDatabase = {
    "OPPE-02-P-01 การจัดการพื้นที่และสิ่งอำนวยความสะดวก": [
        "1. พื้นที่ส่วนกลาง",
        "2. พื้นที่อาคาร",
        "3. พื้นที่พาณิชย์",
        "4. ตลาดนัด"
    ],
    "OPPE-02-P-02 การจัดการภูมิทัศน์และพื้นที่สีเขียว": [
        "1. ค่าจ้างเหมาดูแลบำรุงรักษางานสวนพื้นที่ส่วนกลางปี 2569 จำนวน 21,000,000 บาท",
        "2. ค่าจ้างเหมาดูแล บำรุงรักษางานสวนพื้นที่มหิดลสิทธาคาร"
    ],
    "OPPE-02-P-03 การจัดการพิธีการและตกแต่งภูมิทัศน์ชั่วคราว": [
        "1. ค่าจ้างประดับตกแต่งผ้างานพระราชพิธีในกิจกรรมพิเศษและวันสำคัญต่างๆ",
        "2. ค่าจ้างทำพระบรมฉายาลักษณ์รัชกาลปัจจุบันและพระบรมวงศานุวงศ์",
        "3. การจัดการงานขยายพันธุ์ไม้"
    ],
    "OPPE-05-P-01 การรักษาความสะอาดและสุขอนามัย": [
        "1. ค่าบริการจ้างเหมาทำความสะอาดหน่วยงานกองกายภาพและสิ่งแวดล้อม",
        "2. ค่าจ้างเหมาแม่บ้านทำความสะอาด เพื่อรักษาความสะอาดภายในอาคารให้สะอาดเรียบร้อย (PMH)",
        "3. งานจ้างเหมาบริการทำความสะอาด ศูนย์อาหาร และอาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลทำความสะอาดบริเวณโดยรอบอาคาร เพื่อให้สะอาดถูกสุขลักษณะอนามัย",
        "4. ค่าจ้างเหมาบริการทำความสะอาด อาคารSVD พื้นที่ในส่วนของมหาวิทยาลัย จำนวน 12 ครั้ง"
    ],
    "OPPE-05-P-02 การควบคุมเชื้อราและฆ่าเชื้อโรค": [
        "1. งานจ้างเหมากำจัดเชื้อราสะสมบริเวณผนังและเพดาน พร้อมฆ่าเชื้อโรค ในอากาศ อาคารมหิดลสิทธาคาร",
        "2. งานจ้างเหมาทำความสะอาดเก้าอี้ผู้ชม โซฟา พรม กำจัดไรฝุ่น เชื้อรา ด้วยระบบซานิไทส์ซิ่ง (PMH)",
        "3. งานจ้างกำจัดเชื้อโรค เชื้อรา แบคทีเรีย ในห้องประชุม และสำนักงาน อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับกำจัดเชื้อโรค เชื้อรา แบคทีเรีย ในห้องประชุม และสำนักงาน เพื่อให้ผู้มาใช้บริการ มีความปลอดภัยและมีสุขภาพที่ดี"
    ],
    "OPPE-05-P-03 การควบคุมสุขลักษณะการล้างภาชนะ": [
        "1. งานจ้างเหมาบริการล้างภาชนะด้วยเครื่องล้างจาน อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลทำความสะอาดภาชนะ เพื่อให้มีความสะอาดถูกสุขอนามัย"
    ],
    "OPPE-05-P-04 การจัดการสัตว์พาหะและสิ่งรบกวน": [
        "1. ค่าบริการจ้างกำจัดปลวก หนู และแมลงสาบ อาคารศาลายา",
        "2. กำจัดปลวกแมลง สถานีไฟฟ้าย่อย เพื่อป้องกันสัตว์ และแมลงต่างๆ เข้าทำลายวัสดุอุปกรณ์ต่างๆ ภายในสถานีไฟฟ้าย่อยฯ",
        "3. งานจ้างบริการกำจัดปลวก หนู แมลงสาบ ระบบบำบัดน้ำเสียมหาวิทยาลัยมหิดล เพื่อป้องกันปลวก หนู แมลงสาปเข้าทำลาย และรักษาทรัพย์สินและสถานที่ ของมหาวิทยาลัยมหิดล",
        "4. ค่าจ้างเหมาบริการกำจัด ปลวก หนู ยุง แมลงต่างๆ (PMH)",
        "5. งานจ้างเหมากำจัด หนู แมลงสาบ ปลวก อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับกำจัดหนูและแมลง ดูแลรักษาความสะอาดภายในอาคารศูนย์การเรียนรู้มหิดลให้ถูกสุขลักษณะอนามัย",
        "6. ค่าจ้างเหมาบริการจำกัดนก หนู ปลวก และแมลงต่าง ๆ สำหรับอาคารSVD จำนวน 4 ครั้ง"
    ],
    "OPPE-06-P-01 การจัดการขยะ": [
        "1. ค่าจ้างเหมาจัดเก็บขยะและกำจัดขยะมูลฝอยในมหาวิทยาลัย",
        "2. ค่าจ้างเหมาจัดเก็บและกำจัดขยะติดเชื้อ",
        "3. ค่าจ้างเหมาจัดเก็บและกำจัดขยะอันตรายชุมชน",
        "4. ค่าจ้างเหมาจัดเก็บขยะกำพร้า",
        "5. ค่าตรวจสอบคุณภาพฮิวมัสและคุณภาพดินปลูก"
    ],
    "OPPE-07-P-01 การจัดการระบบจำหน่ายน้ำประปา": [
        "1. งานจ้างซ่อมแซมบำรุงรักษา พร้อมวัสดุอุปกรณ์ ระบบท่อจ่ายน้ำประปา (กรณีท่อแตกฉุกเฉิน) เมื่อเกิดกรณีท่อประปาแตกรั่ว อุปกรณ์ประกอบชำรุดเสียหาย ส่งผลให้มีน้ำประปารั่วไหล สูญเสียน้ำประปา จึงมีความจำเป็นต้องจ้างซ่อมแซมเพื่อป้องกันการสูญเสียน้ำประปา",
        "2. งานบำรุงรักษามาตรวัดน้ำดิจิตอล เพื่อบำรุงรักษามาตรน้ำดิจิตอลให้อยู่ในสถานะพร้อมใช้งานอยู่เสมอ"
    ],
    "OPPE-07-P-02 การจัดการระบบน้ำประปาภายในอาคาร": [
        "1. งานจ้างบำรุงรักษาเครื่องสูบน้ำในระบบประปา สุขาภิบาล (Firm Pump) (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาระบบสูบจ่ายน้ำประปา (Booster Pump) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบสูบจ่ายน้ำประปา ล้างทำความสะอาดบ่อพักน้ำ และตรวจสอบปั๊มน้ำให้คงประสิทธิภาพการใช้งานตลอดเวลา",
        "3. งานบำรุงรักษาและซ่อมแซมเครื่องกรองน้ำ กองกายภาพและสิ่งแวดล้อม",
        "4. งานจ้างบำรุงรักษาและซ่อมแซมตู้น้ำดื่มสาธารณะ พื้นที่ส่วนกลางมหาวิทยาลัยมหิดล เพื่อบำรุงรักษาให้ตู้น้ำดื่มสาธารณะ สามารถใช้งานได้อย่างมีประสิทธิภาพ",
        "5. งานจ้างเปลี่ยนไส้กรองพร้อมบำรุงรักษาตู้น้ำดื่มพื้นที่ส่วนกลางมหาวิทยาลัยมหิดล เพื่อให้น้ำดื่มสาธารณะมีค่าผ่านเกณฑ์มาตรฐานน้ำดื่ม"
    ],
    "OPPE-07-P-03 การจัดการระบบน้ำรีไซเคิล": [
        "1. งานจ้างบริการฆ่าเชื้อโรคด้วยคลอรีนไดออกไซด์ ระบบน้ำรีไซเคิล เพื่อควบคุมปริมาณเชื้อโรค ป้องกันอันตรายที่อาจเกิดกับผู้ใช้น้ำจากระบบน้ำรีไซเคิล",
        "2. งานบำรุงรักษาระบบน้ำรีไซเคิล เพื่อให้มีน้ำรีไซเคิลใช้งานตลอด สอดคล้องกับ SDGs"
    ],
    "OPPE-07-P-04 การจัดการระบบน้ำเสีย": [
        "1. งานจ้างซ่อมแซมบำรุงรักษาพร้อมระบบควบคุมและวัสดุอุปกรณ์ ระบบบำบัดน้ำเสียรวมและห้องปฏิบัติการ ม.มหิดล ศาลายา เพื่อบำรุงรักษา ซ่อมแซมเครื่องจักรและอุปกรณ์ต่างๆที่ใช้ในการจัดการระบบบำบัดน้ำเสียให้ทำงานได้ตามปกติตลอดเวลา ตามกำหนดมาตรฐานควบคุมการระบายน้ำทิ้งจากอาคารบางประเภทและบางขนาด กรมควบคุมมลพิษ ประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",
        "2. งานบำรุงรักษาเครื่องดักขยะอัตโนมัติ ระบบบำบัดน้ำเสีย มหาวิทยาลัยมหิดล ศาลายา เพื่อป้องกันขยะอุดตันเครื่องสูบน้ำเสีย และเครื่องเติมอากาศ และเพื่อให้ระบบบำบัดน้ำเสีย ทำงานได้อย่างมีประสิทธิภาพ",
        "3. งานจ้างบำรุงรักษาระบบบำบัดน้ำเสีย และระบายน้ำฝน อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบบำบัดน้ำเสียในอาคาร ให้สามารถสูบส่งไปยังระบบบำบัดน้ำเสียส่วนกลาง และบ่อระบายน้ำฝนภายในอาคารสู่คลองสาธารณะ",
        "4. งานจ้างล้างระบบส่งไขมัน และตักบ่อดักไขมันศูนย์อาหาร อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบส่งไขมัน และล้างทำความสะอาดท่อส่งไขมัน และบ่อดักไขมัน ให้สามารถรองรับ เศษอาหาร และไขมันจากศูนย์อาหารที่มีการใช้งานในปริมาณมาก (ย้ายไปน้ำเสีย)",
        "5. งานจ้างบำรุงรักษาระบบบำบัดน้ำเสีย ตรวจสอบระบบไฟฟ้า ปั้มบ่อบำบัดจำนวน 16 ตัว จำนวน 4 ครั้ง",
        "6. งานจ้างตรวจวิเคราะห์คุณภาพน้ำ ระบบบำบัดน้ำเสีย มหาวิทยาลัยมหิดล เพื่อควบคุมประสิทธิภาพการบำบัดน้ำเสียให้เป็นไปตามกำหนดของประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",
        "7. งานจ้างตรวจสอบ วิเคราะห์ค่าน้ำที่เกี่ยวข้องของถังน้ำบำบัดน้ำเสีย (ตามแผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-07-P-05 การจัดการน้ำผิวดินและป้องกันน้ำท่วม": [
        "1. งานจ้างซ่อมแซมบำรุงรักษา พร้อมระบบควบคุมและวัสดุอุปกณ์เครื่องสูบน้ำฝนและป้องกันน้ำท่วม เพื่อบำรุงรักษา และซ่อมแซมระบบควบคุมและวัสดุอุปกรณ์เครื่องสูบน้ำฝนและป้องกันน้ำท่วมให้พร้อมใช้งานได้ตามปกติ ตลอดเวลา สามารถระบายน้ำได้อย่างมีประสิทธิภาพ ลดการท่วมขังของน้ำบริเวณถนนทุกสายภายในมหาวิทยาลัย",
        "2. งานจ้างซ่อมแซมบำรุงรักษา กังหันโซลาร์เซลล์",
        "3. งานบำรุงรักษาซ่อมแซม เซนเซอร์วัดระดับน้ำฝน พร้อมอุปกรณ์ควบคุม สถานีสูบน้ำฝน เพื่อบำรุงรักษาระบบเซนเซอร์วัดระดับน้ำออนไลน์ ให้มีความพร้อมใช้งานตลอดเวลา"
    ],
    "OPPE-08-P-01 การบริการและบำรุงรักษาระบบจำหน่ายไฟฟ้า": [
        "1. งานบำรุงรักษาระบบจำหน่ายไฟฟ้า 22 kV. เพื่อบำรุงรักษาหม้อแปลงไฟฟ้า 22,000 โวลต์ จำนวนหม้อแปลงไฟฟ้า 13 ลูก (ภายในกำกับสำนักงานอธิการบดี) และระบบสายป้อนแรงดันไฟฟ้าอุปกรณ์ไฟฟ้าแรงสูงจำนวนมากให้กับทุกส่วนงาน",
        "2. งานบำรุงรักษาอุปกรณ์ตัดตอนไฟฟ้าแรงสูง load break switch gas SF6 11 ชุด เพื่อบำรุงรักษาอุปกรณ์ตัดตอนไฟฟ้าแรงสูง load break switch gas SF6 ให้ใช้งานได้อย่างปลอดภัยและเต็มประสิทธิภาพ พร้อมเปลี่ยนแบตเตอรี่ทุกๆ 2 ปี"
    ],
    "OPPE-08-P-02 การบำรุงรักษาสถานีไฟฟ้าย่อย": [
        "1. งานบำรุงรักษาสถานีไฟฟ้าย่อยมหิดล เพื่อบำรุงรักษาระบบจำหน่ายไฟฟ้า 115,000/22,000 โวลต์ เพื่อให้เกิดความมั่นคง และเสถียรภาพในระบบจำหน่าย เพื่อรองรับ การเรียนการสอน การวิจัย การประชุม การจัดกิจกรรมต่างๆ",
        "2. งานบำรุงรักษาระบบตู้ Charger พร้อม Battery สถานีไฟฟ้าย่อย เพื่อบำรุงรักษาระบบตู้ Charger พร้อม Battery สถานีไฟฟ้าย่อย ให้สามารถใช้งานได้อย่างต่อเนื่องมีประสิทธิภาพ",
        "3. งานบำรุงรักษาเครนและรอกไฟฟ้า ภายในห้อง GIS 115 เควี แบบไม่รวมอะไหล่ เนื่องจากเครนและรอกไฟฟ้า เป็นเครื่องจักรขนาดใหญ่ที่มีการเคลื่อนที่และยกสิ่งของที่มีน้ำหนักมาก จึงสมควรให้มีการบำรุงรักษาให้มีประสิทธิสภาพ พร้อมใช้งานตลอดเวลา และให้เกิดความปลอดภัยต่อผู้ปฏิบัติงาน"
    ],
    "OPPE-08-P-03 การดำเนินงานและบำรุงรักษาระบบไฟฟ้าประจำอาคาร": [
        "1. งานจ้างบำรุงรักษาระบบไฟฟ้า (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาหม้อแปลงไฟฟ้าแรงสูง (ตามแผนบำรุงรักษารายปี) (PMH)",
        "3. งานจ้างบำรุงรักษาระบบไฟฟ้าหลักของ อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบไฟฟ้าหลักของอาคารเพื่อรักษาประสิทธิภาพในการจ่ายกระแสไฟฟ้า และดูแลทำความสะอาดเพื่อไม่ให้เกิดเหตุไฟฟ้าขัดข้อง และให้มีความปลอดภัยต่อผู้ใช้งานภายในอาคาร",
        "4. งานจ้างบำรุงรักษาระบบหม้อแปลงไฟฟ้าแรงสูง ขนาด 1250 KVA. จำนวน 2 ชุด จำนวน 1 ครั้ง (SVD)",
        "5. งานจ้างบำรุงรักษาระบบจ่ายไฟฟ้า ตู้ MDB ภายในอาคารSVD จำนวน 1 ครั้ง"
    ],
    "OPPE-08-P-04 การดำเนินงานและบำรุงรักษาระบบเครื่องกำเนิดไฟฟ้า": [
        "1. งานจ้างบำรุงรักษาเครื่องกำเนิดไฟฟ้าฉุกเฉิน (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาระบบสำรองไฟภายใน (Generator) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาเครื่องกำเนิดไฟฟ้า เพื่อสำรองไฟภายในอาคารในกรณีไฟฟ้าขัดข้องทั้งภายในและภายนอกอาคาร",
        "3. งานจ้างบำรุงรักษาระบบเครื่อง Generator สำหรับอาคารSVD จำนวน 4 ครั้ง",
        "4. งานบำรุงรักษา moblie generator 250kva เนื่องจาก Mobile Generator ขนาด 250 kva. ประจำUBS ได้หมดระยะเวลารับประกัน จากทางบริษัท ในเดือน ตุลาคม 2559 นี้ อนึ่ง Mobile Generator มีความจำเป็นต้องบำรุงรักษาเชิงป้องกัน เป็นประจำ เพื่อให้พร้อมที่จะใช้งานตามกิจกรรมต่างๆ ที่ได้รับมอบหมาย และยังเป็นการยืดอายุการใช้งานของ Mobile Generator"
    ],
    "OPPE-08-P-05 การดำเนินงานและบำรุงรักษาระบบสำรองไฟอัตโนมัติ (UPS)": [
        "1. งานจ้างเหมาบำรุงรักษา UPS ขนาดใหญ่ (40 KVA) ของงานระบบภาพ แสง เสียง (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างเหมาบำรุงรักษา UPS ขนาดใหญ่ (20 KVA) (ตามแผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-09-P-01 การดำเนินงานและบำรุงรักษาระบบปรับอากาศ (Chiller)": [
        "1. งานจ้างบำรุงรักษาระบบเครื่องทำน้ำเย็นระบบปรับอากาศ Chiller (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาระบบหอทำน้ำเย็น Cooling Tower (ตามแผนบำรุงรักษารายปี) (PMH)",
        "3. งานจ้างบำรุงรักษาระบบปรับอากาศเครื่องส่งลมเย็น (AHU) (ตามแผนบำรุงรักษารายปี) (PMH)",
        "4. งานจ้างบำรุงรักษาเครื่องกำเนิดโอโซน (ตามแผนบำรุงรักษารายปี) (PMH)",
        "5. งานจ้างบำรุงรักษาเครื่องสูบน้ำระบบปรับอากาศ Chiller & Condenser water pump (ตามแผนบำรุงรักษารายปี) (PMH)",
        "6. งานจ้างบำรุงรักษาระบบควบคุมปรับอากาศและระบายอากาศ (CPMS, BAS) (ตามแผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-09-P-02 การดำเนินงานและบำรุงรักษาระบบปรับอากาศ (Split Type / VRV)": [
        "1. งานจ้างบริการดูแลตรวจสอบบำรุงรักษาซ่อมแซมและทำความสะอาดเครื่องปรับอากาศ(แบบไม่รวม อะไหล่) กองกายภาพและสิ่งแวดล้อม มหาวิทยาลัยมหิดล ประจำปี 2569",
        "2. งานจ้างบำรุงรักษาระบบปรับอากาศชนิดคอยล์น้ำเย็น VRV&ตู้แช่เครื่องดื่ม (ตามแผนบำรุงรักษารายปี) (PMH)",
        "3. งานจ้างบำรุงรักษาเครื่องปรับอากาศภายใน (Air Condition) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาเครื่องปรับอากาศให้สามารถทำงานได้เต็มประสิทธิภาพ และทำใหุปกรณ์ประหยัดพลังงาน โดยการล้างใหญ่ 3 ครั้งต่อปี",
        "4. งานจ้างบำรุงรักษาเครื่องปรับอากาศชนิดแยกส่วน (ล้างย่อย, ล้างใหญ่) จำนวน 2 ครั้ง"
    ],
    "OPPE-09-P-03 การดำเนินงานและบำรุงรักษาระบบควบคุมความชื้น": [
        "1. งานจ้างบำรุงรักษาระบบปรับอากาศควบคุมความชื้น (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาเครื่องควบคุมความชื้น (ตามแผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-10-P-01 การรักษาความปลอดภัยพื้นที่ส่วนกลางและอาคาร โดยเจ้าหน้าที่รักษาความปลอดภัย": [
        "1. จ้างเหมาบริการบริษัทรักษาความปลอดภัย (ราคาจ้างต่อเดือนรวม Vat 7%แล้ว)"
    ],
    "OPPE-10-P-02 การรักษาความปลอดภัยพื้นที่ส่วนกลางและอาคาร โดยระบบ CCTV": [
        "1. งานบำรุงรักษาระบบกล้องโทรทัศน์วงจรปิด CCTV ส่วนกลาง เพื่อบำรุงรักษาระบบกล้องโทรทัศน์วงจรปิด CCTV ส่วนกลาง ให้สามารถใช้งานได้อย่างต่อเนื่องมีประสิทธิภาพ"
    ],
    "OPPE-10-P-03 การดำเนินงานและบำรุงรักษาระบบแจ้งเหตุและสัญญาณเตือนภัย": [
        "1. ระบบเสียงตามสาย",
        "2. ระบบไฟฟ้าฉุกเฉินประจำอาคาร",
        "3. งานบำรุงรักษาระบบสัญญานเตือนแจ้งเหตุเพลิงไหม้ เพื่อบำรุงรักษาระบบสัญญาณเตือนแจ้งเหตุเพลิงไหม้ ภายในสถานีไฟฟ้าย่อย ให้สามารถใช้งานได้อย่างมีประสิทธิภาพ",
        "4. งานจ้างบำรุงรักษาระบบสัญญาณแจ้งเตือนภัย (Fire Alarm) (ตามแผนบำรุงรักษารายปี) (PMH)",
        "5. งานจ้างบำรุงรักษาระบบแจ้งเตือน Fire Alarm สำหรับอาคารSVD จำนวน 2 ครั้ง"
    ],
    "OPPE-10-P-04 การดำเนินงานและบำรุงรักษาระบบป้องกันและระงับอัคคีภัย": [
        "1. ถังดับเพลิงยกหิ้ว ส่วนกลาง และประจำอาคาร (1. ค่าเติมน้ำยากถังดับเพลิง เพื่อแสตนบายด้านความปลอดภัย Co2และถังเขียว ขนาด 10 ปอนด์ ปีละ 3 ครั้ง ถังละ800บ.*30ถัง)",
        "2. งานจ้างเหมาบำรุงรักษาระบบดับเพลิงอัตโนมัติ (ตามแผนบำรุงรักษารายปี) (PMH)",
        "3. งานจ้างบำรุงรักษาระบบดับเพลิง (FIRE PUMP) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบดับเพลิง ให้คงประสิทธิภาพการใช้งานและพร้อมใช้งานเมื่อเกิดอัคคีภัยภายในอาคาร",
        "4. งานจ้างบำรุงรักษาระบบดับเพลิง (FM-200) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบดับเพลิง FM200 ให้คงประสิทธิภาพการใช้งานและพร้อมใช้งานเมื่อเกิดอัคคีภัยภายในอาคาร",
        "5. งานจ้างบำรุงรักษาระบบเครื่องสูบน้ำดับเพลิง ระบบท่อดับเพลิง ระบบสปริงเกอร์ดับเพลิง ระบบตัวจับสัญญาณควัน จำนวน 2 ครั้ง (SVD)"
    ],
    "OPPE-11-P-01 การดำเนินงานและบำรุงรักษาระบบประกอบศูนย์อาหาร": [
        "1. งานตรวจสอบระบบของสถานีแก๊สให้เป็นไปตามกฏกระทรวง อาคารศูนย์การเรียนรู้มหิดล (MLC) เพื่อตรวจสอบ และปรับปรุงระบบของสถานีแก๊สให้เป็นไปตามกฏกระทรวง",
        "2. งานจ้างบำรุงรักษาและทำความสะอาดท่อระบายอากาศของศูนย์อาหาร อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบระบายอากาศ ตรวจเชคอุปกรณ์มอเตอร์ และทำความสะอาดท่อระบายอากาศของศูนย์อาหาร เพื่อยืดอายุการใช้งานของท่อระบายอากาศ"
    ],
    "OPPE-12-P-01 การดำเนินงานและบำรุงรักษาระบบลิฟต์โดยสาร": [
        "1. งานจ้างบำรุงรักษาลิฟต์โดยสาร (ตามแผนบำรุงรักษารายปี) (PMH)",
        "2. งานจ้างบำรุงรักษาระบบลิฟท์ (Elevator) อาคารศูนย์การเรียนรู้มหิดล (MLC) สำหรับดูแลบำรุงรักษาระบบลิฟท์ จำนวน 10 เครื่อง ให้พร้อมใช้งานและเกิดความปลอดภัยตลอดการใช้งาน",
        "3. งานจ้างบำรุงรักษาระบบลิฟต์ จำนวน 5 ตัว จำนวน 12 ครั้ง (งวดงานเดียว)"
    ],
    "OPPE-13-P-01 การดำเนินงานและบำรุงรักษาระบบขยายเสียงและกระจายเสียง": [
        "1. งานจ้างเหมาบำรุงรักษาระบบขยายและกระจายเสียง L'Acoustics (ตามแผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-13-P-02 การดำเนินงานและบำรุงรักษาระบบเสียงและภาพหลัก": [
        "1. งานจ้างเหมาบำรุงรักษาระบบเสียงหลัก ภาพ (Nexus System) (แผนบำรุงรักษารายปี) (PMH)"
    ],
    "OPPE-13-P-03 การดำเนินงานและบำรุงรักษารักษางานวิศวกรรมเวที": [
        "1. งานจ้างเหมาบำรุงรักษาระบบเวที Stage engineering (ตามแผนบำรุงรักษารายปี) (PMH)"
    ]
};

// ==========================================
// ส่วนจัดการ POPUP เรื่องที่ดำเนินการ
// ==========================================
const subjectInput = document.getElementById('subject');
const subjectModal = document.getElementById('subjectModal');
const closeSubjectModal = document.getElementById('closeSubjectModal');
const subjectList = document.getElementById('subjectList');

if (subjectInput && subjectModal) {
    subjectInput.addEventListener('click', () => {
        const currentPwi = document.getElementById('pwiInput') ? document.getElementById('pwiInput').value : '';
        
        // --- เพิ่มโค้ดเช็คปีงบประมาณตรงนี้ ---
        const budgetYearInput = document.getElementById('fiscalYear');
        if (budgetYearInput && !budgetYearInput.value) {
            alert('กรุณาระบุ "ปีงบประมาณ" ก่อนเลือกเรื่องที่ดำเนินการ');
            return;
        }
        // --------------------------------

        // แจ้งเตือนหากยังไม่ได้เลือก P/WI
        if (!currentPwi) {
            alert('กรุณาเลือก "ชื่อ-รหัส-ระเบียบปฏิบัติ (P/WI)" ก่อนเลือกเรื่องที่ดำเนินการ');
            return;
        }
// ... โค้ดเดิม ...

        // หากสถานะเป็น readonly ไม่ต้องเปิดคีย์บอร์ดมือถือ
        if (subjectInput.hasAttribute('readonly')) {
            subjectInput.blur();
        }

        // ดึงรายการเรื่องตาม P/WI ที่เลือกมาใส่ใน Popup
        if (subjectList) {
            subjectList.innerHTML = '';
            const subjects = subjectDatabase[currentPwi] || [];

            // สร้างรายการตัวเลือก
            subjects.forEach(subj => {
                const li = document.createElement('li');
                li.setAttribute('data-value', subj);
                li.textContent = subj;
                subjectList.appendChild(li);
            });

            // เพิ่มปุ่ม "ไม่อยู่ในรายการ (ระบุเรื่องเอง)" ไว้ล่างสุด
            const customLi = document.createElement('li');
            customLi.setAttribute('data-value', 'custom');
            customLi.style.fontWeight = '600';
            customLi.style.color = '#dc3545';
            customLi.textContent = 'ไม่อยู่ในรายการ (ระบุเรื่องเอง)';
            subjectList.appendChild(customLi);

            // ฝัง Event ให้แต่ละรายการใน Modal
            const items = subjectList.querySelectorAll('li');
            items.forEach(item => {
                item.addEventListener('click', function() {
                    items.forEach(i => i.classList.remove('selected'));
                    this.classList.add('selected');

                    const val = this.getAttribute('data-value');

                    if (val === 'custom') {
                        subjectInput.removeAttribute('readonly');
                        subjectInput.style.cursor = 'text';
                        subjectInput.value = '';
                        subjectInput.placeholder = 'กรุณาพิมพ์ระบุเรื่องที่ดำเนินการ...';
                        subjectInput.focus();
                    } else {
                        subjectInput.setAttribute('readonly', 'true');
subjectInput.style.cursor = 'pointer';
subjectInput.value = val || this.textContent.trim();

refreshContractLookup();
                    }

                    subjectModal.classList.remove('active');
                });
            });
        }

        subjectModal.classList.add('active');
    });

    // ปิด Modal
    if (closeSubjectModal) {
        closeSubjectModal.addEventListener('click', () => subjectModal.classList.remove('active'));
    }
    subjectModal.addEventListener('click', (e) => {
        if (e.target === subjectModal) subjectModal.classList.remove('active');
    });
}
// ในขั้นตอนการเลือก pwiItem ให้เพิ่มการเคลียร์ค่า subjectInput ดังนี้
if (subjectInput) {
    subjectInput.value = '';
    subjectInput.setAttribute('readonly', 'true');
    subjectInput.style.cursor = 'pointer';
    subjectInput.placeholder = 'คลิกเพื่อเลือกเรื่องที่ดำเนินการ';
}
// ฐานข้อมูลตัวเลือกสำหรับ 3 ฟิลด์
const mocOptionsData = {
    "impactNature": {
        title: "เลือกลักษณะของผลกระทบ",
        options: [
            // *รอข้อมูลจากคุณ เนื่องจากในข้อความก่อนหน้ายังไม่มีตัวเลือกของฟิลด์นี้*
            "ตัวเลือกที่ 1 (โปรดระบุ)",
            "ตัวเลือกที่ 2 (โปรดระบุ)"
        ]
    },
    "changeType": {
        title: "เลือกประเภทของการเปลี่ยนแปลง",
        options: [
            "ไม่เข้าข่ายเกณฑ์ MOC (MOC Not Required) ตรวจสอบแล้วเป็นเพียงการซ่อมบำรุงปกติ หรือใช้สเปกเดิม",
            "การเปลี่ยนแปลงแบบถาวร (Permanent) เปลี่ยนแปลงแล้วใช้งานตลอดไป ไม่กลับไปใช้แบบเดิม",
            "การเปลี่ยนแปลงแบบชั่วคราว (Temporary) เปลี่ยนแปลงเฉพาะช่วงเวลาที่กำหนด เมื่อครบกำหนดจะกลับไปใช้แบบเดิม",
            "การเปลี่ยนแปลงกรณีฉุกเฉิน (Emergency) การแก้ไขเร่งด่วนเพื่อป้องกันความสูญเสีย โดยไม่ได้วางแผนไว้ล่วงหน้า"
        ]
    },
    "resultManagement": {
        title: "เลือกผลลัพธ์และการจัดการ มาตรการรองรับ",
        options: [
            "ความเสี่ยงยอมรับได้ ระดับความเสี่ยงปลอดภัยเพียงพอ สามารถดำเนินการต่อได้เลย",
            "ต้องจัดทำมาตรการควบคุมเพิ่มเติม ความเสี่ยงสูงเกินไป ต้องมีมาตรการลดความเสี่ยงก่อนเริ่มงาน",
            "พบโอกาสในการปรับปรุง การเปลี่ยนแปลงนี้ส่งผลดี ช่วยลดความเสี่ยงหรือเพิ่มประสิทธิภาพรักษ์โลก"
        ]
    }
};

let currentMocTargetId = ""; // ตัวแปรเก็บ ID ของฟิลด์ที่กำลังคลิก

// ฟังก์ชันกรณีผู้ใช้ต้องการพิมพ์ข้อมูลเอง
function enableMocManualInput() {
    closeMocPopup();
    const inputField = document.getElementById(currentMocTargetId);
    inputField.readOnly = false; // ปลดล็อกให้พิมพ์ได้
    inputField.value = ""; // เคลียร์ข้อความเก่า
    inputField.focus(); // นำ Cursor ไปกระพริบที่ช่องพร้อมพิมพ์
}
// ฟังก์ชันตรวจจับการเปลี่ยนค่าของสถานะงาน
document.addEventListener('click', function(e) {
    // หน่วงเวลาเล็กน้อยเพื่อให้ระบบ Popup เดิมใส่ค่าในช่องให้เสร็จก่อน
    setTimeout(() => {
        const jobStatusField = document.getElementById('jobStatusInput');
        const jobDetailField = document.getElementById('jobDetailInput');

        if (jobStatusField && jobDetailField) {
            const status = jobStatusField.value;
            if (syncIncompleteJobDetail()) return;

            // 1. ถ้าเลือก: แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา
            if (status === "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา") {
                jobDetailField.value = "-"; // ขึ้นขีดอัตโนมัติ
                jobDetailField.readOnly = true; 
                jobDetailField.classList.remove('popup-input'); // ปิดการกดแล้วเด้ง Popup
            }
            
            // 2. ถ้าเลือก: ดำเนินการได้เอง
            else if (status === "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา แต่มีการดำเนินการซ่อมแซม ดำเนินการได้เอง") {
                if(jobDetailField.value === "-") jobDetailField.value = "";
                jobDetailField.readOnly = true;
                jobDetailField.classList.add('popup-input'); // เปิดใช้ Popup
                // กำหนดตัวเลือก Popup ของรายละเอียด
                hseData.jobDetailInput = [
                    "เปลี่ยนอะไหล่/ซ่อมแซมจากสต๊อกที่มีอยู่เรียบร้อยแล้ว",
                    "แก้ไขหน้างาน/ปรับปรุงสภาพแวดล้อมเบื้องต้นเสร็จสิ้น"
                ];
            }
            
            // 3. ถ้าเลือก: ส่งพัสดุมหาลัย
            else if (status === "แล้วเสร็จ เป็นไปตามเงื่อนไขของสัญญา แต่มีการดำเนินการซ่อมแซม ส่งพัสดุมหาลัย") {
                if(jobDetailField.value === "-") jobDetailField.value = "";
                jobDetailField.readOnly = true;
                jobDetailField.classList.add('popup-input'); // เปิดใช้ Popup
                // กำหนดตัวเลือก Popup ของรายละเอียด
                hseData.jobDetailInput = [
                    "อยู่ระหว่างทำเรื่องเบิกจ่ายพัสดุ/อะไหล่จากส่วนกลาง",
                    "รอส่วนกลางประเมินราคาหรือสั่งซื้อทดแทน",
                    "อยู่ระหว่างรอผู้รับเหมา (Vendor) เข้ามาดำเนินการแก้ไขตามการรับประกัน"
                ];
            }
            
            // 4. ถ้าเลือก: อื่นๆ (โปรดระบุ) ให้กรอกเอง
            else if (status !== "" && !hseData.jobStatusInput.includes(status)) {
                if(jobDetailField.value === "-") jobDetailField.value = "";
                jobDetailField.readOnly = false; // ปลดล็อกให้พิมพ์ข้อความได้
                jobDetailField.classList.remove('popup-input'); // ปิดการกดแล้วเด้ง Popup
                jobDetailField.placeholder = "ระบุเอง ในรายละเอียด...";
            }
        }
    }, 150); // ดีเลย์ 150ms 
});

const chemicalHazardMap = {
        "น้ำยาล้างห้องน้ำ / น้ำยาล้างสุขภัณฑ์": "สารกัดกร่อน",
        "น้ำยาถูพื้น / น้ำยาทำความสะอาดอเนกประสงค์": "สารกัดกร่อน / อันตรายต่อสิ่งแวดล้อมทางน้ำ",
        "น้ำยาเช็ดกระจก": "วัตถุไวไฟ (ถ้ามีส่วนผสมของแอลกอฮอล์) / สารกัดกร่อน",
        "น้ำยาฆ่าเชื้อ": "สารกัดกร่อน / อันตรายต่อสิ่งแวดล้อมทางน้ำ",
        "น้ำมันหล่อลื่น / จาระบี": "อันตรายต่อสิ่งแวดล้อมทางน้ำ / วัตถุไวไฟ",
        "น้ำยาล้างคอยล์แอร์ / สารทำความเย็น": "สารกัดกร่อน (ล้างคอยล์) / ก๊าซภายใต้ความดัน (สารทำความเย็น)",
        "สารเคมีเติมระบบ Cooling Tower": "สารกัดกร่อน / อันตรายต่อสิ่งแวดล้อมทางน้ำ",
        "น้ำยาล้างสนิม / ล้างตะกรัน": "สารกัดกร่อน",
        "ก๊าซออกซิเจน / ก๊าซอาร์กอน (สำหรับงานเชื่อม)": "ก๊าซภายใต้ความดัน",
        "สีน้ำ / สีน้ำมัน": "วัตถุไวไฟ (โดยเฉพาะสีน้ำมัน) / อันตรายต่อสิ่งแวดล้อมทางน้ำ",
        "ทินเนอร์": "วัตถุไวไฟ / อันตรายต่อสุขภาพ",
        "น้ำยาผสมคอนกรีต": "สารกัดกร่อน / อันตรายต่อสุขภาพ",
        "กาวอุตสาหกรรม / ซิลิโคน": "วัตถุไวไฟ / อันตรายต่อสุขภาพ",
        "สารกำจัดวัชพืช": "สารกัดกร่อน / อันตรายต่อสุขภาพ",
        "สารกำจัดแมลง / น้ำยาฉีดพ่นยุง": "วัตถุไวไฟ / อันตรายต่อสุขภาพ",
        "ปุ๋ยเคมี": "สารพิษเฉียบพลัน / อันตรายต่อสิ่งแวดล้อมทางน้ำ",
        "ถังดับเพลิง": "ก๊าซภายใต้ความดัน",
        "ไม่เกี่ยวข้องกับสารเคมี": "-"
    };

function updateHazardType(selectedChemicals, hasCustom = false) {
    const source = document.getElementById('sdsNameInput');
    const target = document.getElementById('hazardTypeInput');
    if (!source || !target) return;
    const values = Array.isArray(selectedChemicals) ? selectedChemicals :
        source.value.split(',').map(value => value.trim()).filter(Boolean);
    const hazards = [];
    values.forEach(value => {
        if (chemicalHazardMap[value]) hazards.push(chemicalHazardMap[value]);
    });
    target.value = [...new Set(hazards)].join(', ');
    // Unknown/custom chemicals require the actual SDS; never guess their hazards.
    target.placeholder = hasCustom || values.some(value => !chemicalHazardMap[value])
        ? 'สารเคมีอื่น: ตรวจ SDS และระบุประเภทอันตราย' : 'คลิกเพื่อเลือก หรือดึงจากสารเคมี';
    try {
        localStorage.setItem('form_global_cache_sdsNameInput', source.value);
        localStorage.setItem('form_global_cache_hazardTypeInput', target.value);
    } catch (error) {}
    target.dispatchEvent(new Event('change', { bubbles: true }));
}

document.addEventListener('DOMContentLoaded', () => {
    const source = document.getElementById('sdsNameInput');
    const target = document.getElementById('hazardTypeInput');
    if (source) {
        source.addEventListener('change', () => updateHazardType());
        source.addEventListener('input', () => updateHazardType());
        // The HTML cache restore runs in the same DOMContentLoaded event.
        setTimeout(() => { if (source.value && target && !target.value) updateHazardType(); }, 0);
    }
    const accumulated = document.getElementById('accumulatedMoney');
    if (accumulated) {
        accumulated.addEventListener('input', event => {
            if (!event.isComposing) formatContractMoneyInput(accumulated, false);
        });
        accumulated.addEventListener('blur', () => formatContractMoneyInput(accumulated, false));
    }
});

// ฟังก์ชันช่วยแปลงรูปแบบวันที่ทุกประเภทให้เป็นภาษาไทยรูปแบบเต็ม
function parseAndFormatThaiDate(dateStr) {
    if (!dateStr) return { thaiFull: '', isoDate: '' };
    
    const monthNamesThai = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    let day, monthIdx, yearCE;

    // กรณีเป็นภาษาไทยรูปแบบเต็มอยู่แล้ว เช่น "1 กันยายน 2569"
    const thaiMatch = String(dateStr).trim().match(/^(\d{1,2})\s+([^\d\s]+)\s+(\d{4})$/);
    if (thaiMatch) {
        day = parseInt(thaiMatch[1], 10);
        const monthName = thaiMatch[2];
        yearCE = parseInt(thaiMatch[3], 10) - 543;
        monthIdx = monthNamesThai.indexOf(monthName);
        if (monthIdx !== -1) {
            const formattedMonth = String(monthIdx + 1).padStart(2, '0');
            const formattedDay = String(day).padStart(2, '0');
            return {
                thaiFull: `${day} ${monthNamesThai[monthIdx]} ${yearCE + 543}`,
                isoDate: `${yearCE}-${formattedMonth}-${formattedDay}`
            };
        }
    }

    // กรณีเป็นตัวเลข DD/MM/YYYY เช่น 01/09/2569 หรือ 01/09/2026
    const dmyMatch = String(dateStr).trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (dmyMatch) {
        day = parseInt(dmyMatch[1], 10);
        monthIdx = parseInt(dmyMatch[2], 10) - 1;
        let yr = parseInt(dmyMatch[3], 10);
        yearCE = yr > 2400 ? yr - 543 : yr;
        const formattedMonth = String(monthIdx + 1).padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');
        return {
            thaiFull: `${day} ${monthNamesThai[monthIdx]} ${yearCE + 543}`,
            isoDate: `${yearCE}-${formattedMonth}-${formattedDay}`
        };
    }

    // กรณีเป็น YYYY-MM-DD
    const ymdMatch = String(dateStr).trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (ymdMatch) {
        yearCE = parseInt(ymdMatch[1], 10);
        monthIdx = parseInt(ymdMatch[2], 10) - 1;
        day = parseInt(ymdMatch[3], 10);
        const formattedMonth = String(monthIdx + 1).padStart(2, '0');
        const formattedDay = String(day).padStart(2, '0');
        return {
            thaiFull: `${day} ${monthNamesThai[monthIdx]} ${yearCE + 543}`,
            isoDate: `${yearCE}-${formattedMonth}-${formattedDay}`
        };
    }

    return { thaiFull: dateStr, isoDate: '' };
}

// ฟังก์ชันดึงรายละเอียดสัญญาเดิมจาก Google Sheets

// ฟังก์ชันดึงรายละเอียดสัญญาเดิมจาก Google Sheets
async function fetchContractDetails(subject) {
    const lookup = getContractLookup();
    const key = getContractLookupKey();
    const requestId = ++contractRequestId;
    clearContractAutofill();
    if (!key || !CONFIG || !CONFIG.GOOGLE_SCRIPT_URL) return;

    try {
        const response = await fetch(`${CONFIG.GOOGLE_SCRIPT_URL}?${new URLSearchParams({ action: 'getContractDetails', ...lookup })}`);
        const result = await response.json();
        if (requestId !== contractRequestId || key !== getContractLookupKey()) return;

        if (result.status === 'success' && result.data && lookupMatchesResponse(lookup, result.lookup)) {
            const signingDate = document.getElementById('contractSigningDate');
            if (signingDate) {
                const signingInfo = parseAndFormatThaiDate(result.data.contractSigningDate || '');
                signingDate.value = signingInfo.thaiFull;
                if (signingInfo.isoDate) signingDate.setAttribute('data-date', signingInfo.isoDate);
            }
            const signingStatus = document.getElementById('contractSigningDateStatus');
            if (signingStatus) {
                const reason = result.data.contractSigningDateStatus;
                signingStatus.textContent = signingDate?.value ? '' : reason === 'missing_column' ? 'ฐานข้อมูลยังไม่มีคอลัมน์วันที่ลงนาม' : reason === 'invalid_saved_date' ? 'มีข้อมูลวันเดิมแต่รูปแบบยังอ่านไม่ได้ กรุณาตรวจเซลล์จริง' : 'ไม่พบวันที่ลงนามที่บันทึกไว้ในปีและงานชุดนี้';
            }
            const workers = document.getElementsByName('expectedWorkers')[0];
            if (workers) workers.value = result.data.expectedWorkers ?? '';

            // 1. วันที่เริ่มสัญญา (แปลงเป็นภาษาไทยเต็ม)
            if (result.data.contractStart) {
                const startInfo = parseAndFormatThaiDate(result.data.contractStart);
                const cStartInput = document.getElementById('contractStart');
                if (cStartInput) {
                    cStartInput.value = startInfo.thaiFull;
                    if (startInfo.isoDate) cStartInput.setAttribute('data-date', startInfo.isoDate);
                }
            }

            // 2. วันที่สิ้นสุดสัญญา (แปลงเป็นภาษาไทยเต็ม)
            if (result.data.contractEnd) {
                const endInfo = parseAndFormatThaiDate(result.data.contractEnd);
                const cEndInput = document.getElementById('contractEnd');
                if (cEndInput) {
                    cEndInput.value = endInfo.thaiFull;
                    if (endInfo.isoDate) cEndInput.setAttribute('data-date', endInfo.isoDate);
                }
            }

            // 3. ชื่อบริษัทดำเนินการ
            if (document.getElementsByName('companyName')[0]) {
                document.getElementsByName('companyName')[0].value = result.data.companyName || '';
            }

            // 4. มูลค่าสัญญา (เงิน)
            if (document.getElementsByName('contractValue')[0]) {
                document.getElementsByName('contractValue')[0].value = formatContractMoney(result.data.contractValue) ?? String(result.data.contractValue || '');
            }

            // 5. เข้าทำงานตามสัญญา (ครั้งทั้งหมด)
            if (document.getElementById('contractVisits')) {
                document.getElementById('contractVisits').value = result.data.contractVisits || '';
            }

            // 6. จำนวนวันตามสัญญา (เติมอัตโนมัติจากชีท หรือคำนวณใหม่)
            const cDaysInput = document.getElementById('contractDays');
            if (cDaysInput) {
                if (result.data.contractDays) {
                    cDaysInput.value = result.data.contractDays;
                } else if (typeof calculateDays === 'function') {
                    calculateDays('contractStart', 'contractEnd', 'contractDays');
                }
            }


            // ==========================================
            // นำข้อมูลสัญญาและผู้ควบคุมงานไปแสดงใน Input (โค้ดที่เพิ่มใหม่)
            // ==========================================
            if (document.getElementById('contractNumber')) {
                document.getElementById('contractNumber').value = result.data.contractNumber || '';
            }
            if (document.getElementById('committeeChair')) {
                document.getElementById('committeeChair').value = result.data.committeeChair || '';
            }
            if (document.getElementById('chiefSupervisor')) {
                document.getElementById('chiefSupervisor').value = result.data.chiefSupervisor || '';
            }

            ['committeeChair', 'chiefSupervisor'].forEach(id => {
                const local = resolveEmbeddedPersonnel(result.data[id]);
                if (local.status === 'success') {
                    result.data[id + 'Position'] = local.data.position;
                    result.data.personnelSources = {...result.data.personnelSources, [id]: 'embedded'};
                }
            });
            ['committeeChairPosition', 'chiefSupervisorPosition'].forEach(id => {
                const field = document.getElementById(id);
                if (field) field.value = result.data[id] || '';
            });
            ['committeeChair', 'chiefSupervisor'].forEach(id => {
                renderRolePerson(id, result.data[id] || '', result.data[id + 'Position'] || '');
                const status = document.getElementById(id + 'Status');
                if (!status) return;
                const source = result.data.personnelSources?.[id];
                status.textContent = source === 'saved' ? 'แสดงตำแหน่งที่เคยบันทึกไว้กับชื่อนี้' :
                    result.data[id] && !result.data[id + 'Position'] ? 'ยังตรวจตำแหน่งจากฐานไม่ได้ กรุณาตรวจสอบชื่อกับฐานข้อมูล' : '';
            });
            const people = normalizePersonnel(result.data.supervisorsPeople, result.data.supervisorsData).map(person => {
                const local = resolveEmbeddedPersonnel(person.name);
                return local.status === 'success' ? {name: person.name, position: local.data.position} : person;
            });
            const peopleInput = document.getElementById('supervisorsPeople');
            if (peopleInput) peopleInput.value = JSON.stringify(people);
            try { localStorage.setItem('form_global_cache_supervisorsPeople', JSON.stringify(people)); } catch (error) {}

            // สำหรับช่องชื่อผู้ควบคุมงาน (แสดงในช่อง Popup Trigger และเก็บค่าใน Hidden Input)
            if (document.getElementById('supervisorPopupTrigger')) {
                document.getElementById('supervisorPopupTrigger').value = personnelDisplay(people);
            }
            if (document.getElementById('supervisorsData')) {
                const names = normalizeSupervisorNames(result.data.supervisorsData);
                document.getElementById('supervisorsData').value = JSON.stringify(names);
                try {
                    localStorage.setItem('form_global_cache_supervisor_subject', key);
                    localStorage.setItem('form_global_cache_supervisorsData', JSON.stringify(names));
                } catch (error) {}
            }
            // ==========================================

        }
        if (lookupMatchesResponse(lookup, result.lookup) && (result.status === 'success' || result.status === 'not_found')) {
            await updateVisitCount();
        }
    } catch (error) {
        console.error('Error fetching contract details:', error);
    }
}

// ==========================================
// ฟังก์ชันคำนวณเงินสะสมอัตโนมัติ (Frontend)
// ==========================================
function calculateAccumulatedMoney() {
    const contractValueInput = document.getElementById('contractValue') || document.getElementsByName('contractValue')[0];
    const contractVisitsInput = document.getElementById('contractVisits');
    const currentVisitInput = document.getElementById('currentVisit');
    const accumulatedMoneyInput = document.getElementById('accumulatedMoney') || document.getElementsByName('accumulatedMoney')[0];

    if (!contractValueInput || !contractVisitsInput || !currentVisitInput || !accumulatedMoneyInput) return;

    // ดึงค่าและแปลงเป็นตัวเลข (รองรับตัวเลขที่มีเครื่องหมาย Comma ,)
    const contractValue = parseFloat(contractValueInput.value.replace(/,/g, '')) || 0;
    const totalVisits = parseFloat(contractVisitsInput.value) || 0;
    
    // ดึงตัวเลขครั้งปัจจุบันจากรูปแบบ "X/Y" (ดึงค่าตัวเลขหน้าเครื่องหมาย /)
    const currentVisitStr = currentVisitInput.value.split('/')[0];
    const currentVisitNum = parseFloat(currentVisitStr) || 0;

    if (totalVisits > 0 && currentVisitNum > 0 && contractValue > 0) {
        // สูตร: (มูลค่าเงินทั้งสัญญา / จำนวนครั้งทั้งหมด) * ครั้งที่เข้าทำรวมรอบนี้
        const accumulated = (contractValue / totalVisits) * currentVisitNum;
        accumulatedMoneyInput.value = formatContractMoney(accumulated.toFixed(2));
    } else {
        accumulatedMoneyInput.value = '';
    }
}

// ผูก Event ให้คำนวณทันทีเมื่อแก้ไขมูลค่าสัญญา หรือ จำนวนครั้งตามสัญญา
document.getElementById('contractValue')?.addEventListener('input', calculateAccumulatedMoney);
document.getElementById('contractVisits')?.addEventListener('input', calculateAccumulatedMoney);
// ==========================================
// ระบบจัดการเพิ่ม/ลด ผู้ควบคุมงาน (Dynamic Fields)
// ==========================================
document.addEventListener('click', function(e) {
    // กดปุ่มเพิ่ม
    if (e.target && e.target.classList.contains('add-supervisor-btn')) {
        const container = document.getElementById('supervisorsContainer');
        const rowCount = container.querySelectorAll('.supervisor-row').length + 1;
        
        const newRow = document.createElement('div');
        newRow.className = 'supervisor-row';
        newRow.style.cssText = 'display: flex; gap: 10px; margin-top: 10px;';
        
        newRow.innerHTML = `
            <input type="text" name="supervisor[]" placeholder="ระบุชื่อ-นามสกุล ผู้ควบคุมงานคนที่ ${rowCount}" class="supervisor-input save-cache" style="flex: 1;">
            <button type="button" class="remove-supervisor-btn primary-btn" style="width: auto; background-color: #dc3545; padding: 10px 15px; font-size: 16px; min-width: 80px;">- ลบ</button>
        `;
        container.appendChild(newRow);
    }
    
    // กดปุ่มลบ
    if (e.target && e.target.classList.contains('remove-supervisor-btn')) {
        e.target.parentElement.remove();
        
        // อัปเดตตัวเลข placeholder ให้เรียงลำดับใหม่
        const rows = document.querySelectorAll('#supervisorsContainer .supervisor-row');
        rows.forEach((row, index) => {
            row.querySelector('input').placeholder = `ระบุชื่อ-นามสกุล ผู้ควบคุมงานคนที่ ${index + 1}`;
        });
    }
});

// Personnel positions are looked up by a full name, never by guessing.
const personnelRequests = new WeakMap();
function getPersonnelName(input) {
    return input.dataset?.personDisplay === input.value ? input.dataset.personName : input.value.trim();
}
function renderPersonnelInput(input, name, position) {
    name = String(name || '').trim(); position = String(position || '').trim();
    input.value = name && position ? `${name} (${position})` : name;
    if (!input.dataset) input.dataset = {};
    input.dataset.personName = name; input.dataset.personDisplay = input.value;
}
function personnelDisplay(people) {
    return people.map(person => person.position ? `${person.name} (${person.position})` : person.name).join(', ');
}
function renderRolePerson(id, name, position) {
    const input = document.getElementById(id);
    if (!input) return;
    name = String(name || '').trim(); position = String(position || '').trim();
    const display = name && position ? `${name} (${position})` : name;
    input.value = display;
    if (!input.dataset) input.dataset = {};
    input.dataset.personName = name; input.dataset.personDisplay = display;
    const hiddenName = document.getElementById(id + 'Name');
    const hiddenPosition = document.getElementById(id + 'Position');
    if (hiddenName) hiddenName.value = name;
    if (hiddenPosition) hiddenPosition.value = position;
}

function normalizePersonnel(raw, namesRaw) {
    let people = raw;
    if (typeof people === 'string') { try { people = JSON.parse(people); } catch (error) { people = []; } }
    const names = normalizeSupervisorNames(namesRaw);
    if (!Array.isArray(people)) people = [];
    return names.map(name => {
        const person = people.find(item => item && String(item.name || '').trim() === name.trim());
        return { name, position: person ? String(person.position || '') : '' };
    });
}
async function lookupPersonnel(nameInput, positionInput, status) {
    const name = getPersonnelName(nameInput);
    const result = resolveEmbeddedPersonnel(name);
    positionInput.value = '';
    if (status) status.textContent = '';
    if (!name) return;
    if (result.status === 'success') {
        positionInput.value = result.data.position;
        if (['committeeChair', 'chiefSupervisor'].includes(nameInput.id)) renderRolePerson(nameInput.id, name, positionInput.value);
        else renderPersonnelInput(nameInput, name, positionInput.value);
    } else if (status) {
        status.textContent = result.status === 'ambiguous' ? 'พบชื่อซ้ำ กรุณาเลือกรายการที่ถูกต้อง' : 'ไม่พบชื่อเต็มในรายการที่ฝังไว้ กรุณาตรวจชื่อ';
    }
}
let personnelListSequence = 0;
function bindPersonnelLookup(nameInput, positionInput, status) {
    if (!nameInput || !positionInput) return;
    let candidates = [];
    const list = document.createElement('div');
    list.id = 'personnel_suggestions_' + (++personnelListSequence);
    list.className = 'personnel-suggestions'; list.hidden = true; list.setAttribute('role', 'listbox');
    const wrapper = document.createElement('div'); wrapper.className = 'personnel-combobox';
    nameInput.parentElement?.insertBefore(wrapper, nameInput); wrapper.appendChild(nameInput); wrapper.appendChild(list);
    nameInput.setAttribute('autocomplete', 'off'); nameInput.setAttribute('role', 'combobox');
    nameInput.setAttribute('aria-autocomplete', 'list'); nameInput.setAttribute('aria-controls', list.id); nameInput.setAttribute('aria-expanded', 'false');
    let activeOption = -1;
    function closeSuggestions() { list.hidden = true; nameInput.setAttribute('aria-expanded', 'false'); activeOption = -1; }
    function choose(person) {
        nameInput.value = personnelDisplay([person]);
        nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        closeSuggestions(); nameInput.focus();
    }
    nameInput.addEventListener('blur', () => setTimeout(closeSuggestions, 150));
    nameInput.addEventListener('keydown', event => {
        if (event.key === 'Escape') { closeSuggestions(); return; }
        if (list.hidden || !candidates.length) return;
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault(); activeOption = (activeOption + (event.key === 'ArrowDown' ? 1 : -1) + candidates.length) % candidates.length;
            Array.from(list.children).forEach((button, index) => button.classList.toggle('active-option', index === activeOption));
            list.children[activeOption]?.scrollIntoView({block: 'nearest'});
        } else if (event.key === 'Enter' && activeOption >= 0) { event.preventDefault(); choose(candidates[activeOption]); }
    });
    nameInput.addEventListener('input', () => {
        const request = (personnelRequests.get(nameInput) || 0) + 1;
        personnelRequests.set(nameInput, request);
        const chosen = candidates.find(person => personnelDisplay([person]) === nameInput.value);
        if (chosen) {
            positionInput.value = chosen.position || '';
            if (['committeeChair', 'chiefSupervisor'].includes(nameInput.id)) renderRolePerson(nameInput.id, chosen.name, chosen.position);
            else renderPersonnelInput(nameInput, chosen.name, chosen.position);
            nameInput.dataset.directoryChoice = nameInput.value;
            closeSuggestions();
            if (status) status.textContent = '';
            return;
        }
        positionInput.value = '';
        const hiddenName = document.getElementById(nameInput.id + 'Name');
        if (hiddenName) hiddenName.value = nameInput.value.trim();
        if (nameInput.dataset) {
            delete nameInput.dataset.personName; delete nameInput.dataset.personDisplay; delete nameInput.dataset.directoryChoice;
        }
        if (status) status.textContent = '';
        const query = nameInput.value.trim(), key = getContractLookupKey();
        list.innerHTML = ''; candidates = []; closeSuggestions();
        if (!query) return;
        const result = searchEmbeddedPersonnel(query);
        candidates = result.data;
        candidates.forEach(person => {
            const option = document.createElement('button'); option.type = 'button';
            option.className = 'personnel-option'; option.setAttribute('role', 'option');
            option.textContent = personnelDisplay([person]);
            option.addEventListener('mousedown', event => event.preventDefault());
            option.addEventListener('click', () => choose(person)); list.appendChild(option);
        });
        list.hidden = candidates.length === 0; nameInput.setAttribute('aria-expanded', candidates.length ? 'true' : 'false');
        if (status) status.textContent = candidates.length ? (result.hasMore ? 'กรุณาพิมพ์เพิ่มเพื่อจำกัดรายชื่อ แล้วเลือกชื่อที่ต้องการ' : 'เลือกชื่อและตำแหน่งจากรายการ') : 'ไม่พบชื่อที่ขึ้นต้นตรงกัน';
    });
    nameInput.addEventListener('change', () => {
        if (nameInput.dataset?.directoryChoice === nameInput.value) return;
        lookupPersonnel(nameInput, positionInput, status);
    });
    positionInput.addEventListener('input', () => {
        personnelRequests.set(nameInput, (personnelRequests.get(nameInput) || 0) + 1);
        if (status) status.textContent = '';
    });
}
document.addEventListener('DOMContentLoaded', () => {
    ['committeeChair', 'chiefSupervisor'].forEach(id => bindPersonnelLookup(
        document.getElementById(id), document.getElementById(id + 'Position'), document.getElementById(id + 'Status')));
    const trigger = document.getElementById('supervisorPopupTrigger');
    const modal = document.getElementById('supervisorsModal');
    const list = document.getElementById('supervisorsInputsList');
    const namesInput = document.getElementById('supervisorsData');
    const peopleInput = document.getElementById('supervisorsPeople');
    const confirm = document.getElementById('btnConfirmSupervisors');
    if (!trigger || !modal || !list || !namesInput || !peopleInput || !confirm) return;
    const rows = [];
    function addRow(person = {}) {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;flex-direction:column;gap:6px;padding:8px 0;';
        const name = document.createElement('input');
        name.type = 'text'; name.placeholder = 'ชื่อ-นามสกุล'; name.value = person.name || '';
        const position = document.createElement('input');
        position.type = 'hidden'; position.value = person.position || '';
        renderPersonnelInput(name, person.name || '', position.value);
        const status = document.createElement('small'); status.setAttribute('aria-live', 'polite');
        if (person.name && !person.position) status.textContent = 'ยังไม่มีตำแหน่ง กรุณาตรวจชื่อกับฐานบุคลากร';
        row.appendChild(name); row.appendChild(position); row.appendChild(status); list.appendChild(row);
        bindPersonnelLookup(name, position, status);
        rows.push({name, position});
    }
    trigger.addEventListener('click', () => {
        rows.length = 0; list.innerHTML = '';
        const people = normalizePersonnel(peopleInput.value, namesInput.value);
        for (let i = 0; i < Math.max(8, people.length); i++) addRow(people[i]);
        const add = document.createElement('button'); add.type = 'button'; add.textContent = '+ เพิ่มผู้ควบคุมงาน';
        add.className = 'primary-btn'; add.style.marginTop = '12px';
        add.addEventListener('click', () => { addRow(); list.appendChild(add); }); list.appendChild(add);
        modal.classList.add('active'); trigger.blur();
    });
    document.getElementById('closeSupervisorsModal')?.addEventListener('click', () => modal.classList.remove('active'));
    // Keep unfinished names open on backdrop clicks and Escape.
    modal.addEventListener('keydown', event => {
        if (event.key === 'Escape') event.stopPropagation();
    });
    confirm.addEventListener('click', () => {
        const people = rows.map(row => ({name: getPersonnelName(row.name), position: row.position.value.trim()})).filter(person => person.name);
        const names = people.map(person => person.name);
        namesInput.value = JSON.stringify(names); peopleInput.value = JSON.stringify(people);
        trigger.value = personnelDisplay(people);
        try {
            localStorage.setItem('form_global_cache_supervisor_subject', getContractLookupKey());
            localStorage.setItem('form_global_cache_supervisorsData', JSON.stringify(names));
            localStorage.setItem('form_global_cache_supervisorsPeople', JSON.stringify(people));
        } catch (error) {}
        modal.classList.remove('active');
    });
});

// ตัวเลือกปีงบประมาณ: ใช้ ID และคลาสแสดงผลเดียวกับ HTML/CSS
function generateYearOptions() {
    const container = document.getElementById('yearListContainer');
    const input = document.getElementById('fiscalYear');
    if (!container || !input) return;
    container.innerHTML = '';
    container.className = 'category-list';
    container.setAttribute('role', 'list');

    for (let year = 2568; year <= 2580; year++) {
        const btn = document.createElement('li');
        btn.tabIndex = 0;
        btn.className = String(year) === input.value ? 'selected' : '';
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-pressed', String(String(year) === input.value));
        btn.onkeydown = function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                btn.click();
            }
        };
        btn.textContent = year;
        btn.onclick = function() {
            input.value = String(year);
            // ปิดหน้าต่างได้แม้เบราว์เซอร์ไม่อนุญาตให้บันทึกแคช
            try {
                localStorage.setItem('form_global_cache_fiscalYear', String(year));
            } catch (error) {
                console.warn('ไม่สามารถบันทึกปีงบประมาณในแคชได้', error);
            }
            input.dispatchEvent(new Event('change', { bubbles: true }));
            closeYearModal();
        };
        container.appendChild(btn);
    }
}

function openYearModal() {
    const modal = document.getElementById('yearModal');
    if (!modal) return;
    generateYearOptions();
    modal.style.removeProperty('display');
    modal.classList.add('active');
}

function closeYearModal() {
    const modal = document.getElementById('yearModal');
    if (modal) modal.classList.remove('active');
}

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('yearModal')) closeYearModal();
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeYearModal();
});

// Reuse jobDetail (AN) for the incomplete-work reason; no extra data column.
function syncIncompleteJobDetail() {
    const status = document.getElementById('jobStatusInput');
    const detail = document.getElementById('jobDetailInput');
    if (!status || !detail) return false;
    const incomplete = status.value === 'ไม่แล้วเสร็จ';
    const label = detail.previousElementSibling;
    if (label) label.textContent = incomplete ? 'เหตุผลที่งานไม่แล้วเสร็จ' : 'รายละเอียดหากมีการซ่อมแซม/ส่งพัสดุ';
    if (incomplete) {
        if (detail.value === '-') detail.value = '';
        detail.readOnly = false;
        detail.classList.remove('popup-input');
        detail.placeholder = 'กรุณาระบุเหตุผลที่งานไม่แล้วเสร็จ';
    } else if (detail.placeholder === 'กรุณาระบุเหตุผลที่งานไม่แล้วเสร็จ') {
        detail.placeholder = 'คลิกเพื่อเลือก หรือระบุรายละเอียด';
    }
    return incomplete;
}
document.addEventListener('DOMContentLoaded', syncIncompleteJobDetail);

// A soft completion border indicates a value, not validation or successful saving.
function updateFilledFieldBorders(root = document) {
    root.querySelectorAll('input, select, textarea').forEach(field => {
        const type = String(field.type || '').toLowerCase();
        const excluded = ['hidden', 'button', 'submit', 'reset', 'image', 'range', 'color'].includes(type);
        let filled = false;
        if (!excluded) {
            if (type === 'checkbox' || type === 'radio') filled = field.checked;
            else if (type === 'file') filled = !!(field.files && field.files.length);
            else if (field.multiple && field.options) filled = Array.from(field.options).some(option => option.selected && String(option.value).trim());
            else filled = String(field.value == null ? '' : field.value).trim() !== '';
        }
        field.classList.toggle('field-has-value', !!filled);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const refresh = () => updateFilledFieldBorders();
    refresh();
    document.addEventListener('input', refresh);
    document.addEventListener('change', refresh);
    document.addEventListener('reset', () => setTimeout(refresh, 0));
    document.addEventListener('visibilitychange', refresh);
    // Existing autofill/popup/cache code writes .value directly without events.
    // Reading periodically also covers dynamic supervisor rows without changing setters.
    setInterval(() => { if (!document.hidden) refresh(); }, 300);
});

