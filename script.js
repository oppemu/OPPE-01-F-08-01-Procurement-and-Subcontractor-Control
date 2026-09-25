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

    // 1. รูปแบบภาษาไทยเต็ม สำหรับแสดงบนหน้าเว็บ
    const displayThaiDate = `${day} ${monthNamesThai[month]} ${yearBE}`;
    if (document.getElementById('displayThaiDateInput')) {
        document.getElementById('displayThaiDateInput').value = displayThaiDate;
    }

    // 2. รูปแบบ DD/MM/YYYY สำหรับส่งเข้า Google Sheet (ซ่อนไว้)
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month + 1).padStart(2, '0');
    const sheetDate = `${formattedDay}/${formattedMonth}/${yearCE}`;
    
    if (document.getElementById('entryDate')) {
        document.getElementById('entryDate').value = sheetDate;
    }
});

// ... โค้ดส่วนอื่นๆ (เช่น checkEmailAndProceed) คงไว้เหมือนเดิม ...

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
    // ดึงชื่อมาและลบคำว่า นาย, นาง, นางสาว ออก
    let rawName = result.data.name || '';
    let cleanName = rawName.replace(/นาย|นางสาว|นาง/g, '').trim();
    cleanName = cleanName.replace(/\s+/g, ' '); // จัดการช่องว่างที่อาจเกิดจากการลบคำ

    if (document.getElementById('recorderName')) document.getElementById('recorderName').value = cleanName;
    if (document.getElementById('position')) document.getElementById('position').value = result.data.position || '';
    
    // แสดงชื่อหน่วยงานเต็มในหน้าฟอร์ม
    if (document.getElementById('departmentName')) document.getElementById('departmentName').value = result.data.department || '';
    // ... โค้ดส่วนอื่นคงเดิม ...
                if (document.getElementById('position')) document.getElementById('position').value = result.data.position || '';
                
                // แสดงชื่อหน่วยงานเต็มในหน้าฟอร์ม
                if (document.getElementById('departmentName')) document.getElementById('departmentName').value = result.data.department || '';
                
                // ใส่รหัสหน่วยงานเพื่อเตรียมส่งเข้าคอลัมน์ D ของ Google Sheets
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
        
        // เช็คก่อนว่ามีช่องเหล่านี้อยู่จริงไหม ค่อยใส่ค่า เพื่อป้องกัน Error (Null)
        if (document.getElementById('hiddenEmail')) {
            document.getElementById('hiddenEmail').value = email;
        }
        if (document.getElementById('displayEmailInput')) {
            document.getElementById('displayEmailInput').value = email;
        }
        if (document.getElementById('displayEmail')) {
            document.getElementById('displayEmail').innerText = email;
        }
        
        // สำหรับหน้า HTML ชุดใหม่ที่เราเพิ่งเปลี่ยน
        if (document.getElementById('email')) {
            document.getElementById('email').value = email;
        }

        expandForm();
    }
}

function clearUserInfo() {
    if (document.getElementById('recorderName')) document.getElementById('recorderName').value = '';
    if (document.getElementById('position')) document.getElementById('position').value = '';
    if (document.getElementById('departmentName')) document.getElementById('departmentName').value = '';
    if (document.getElementById('department')) document.getElementById('department').value = '';
}

// ฟังก์ชันขยายกล่องและแสดงฟอร์ม
function expandForm() {
    const container = document.getElementById('appContainer');
    
    // ซ่อนช่องกรอกอีเมลด้านบน แสดงแถบชื่อผู้ใช้งาน
    document.getElementById('emailInputGroup').style.display = 'none';
    document.getElementById('authSubtitle').style.display = 'none';
    document.getElementById('verifiedUserGroup').style.display = 'block';

    // กางฟอร์มออก
    container.classList.remove('compact');
    container.classList.add('expanded');
    
    setTimeout(() => {
        document.getElementById('mainFormContent').style.display = 'block';
    }, 150);
}

// ฟังก์ชันเมื่อกดปุ่ม [เปลี่ยนอีเมล]
function resetEmail() {
    const container = document.getElementById('appContainer');
    
    // ซ่อนฟอร์มและลดขนาดกล่อง
    document.getElementById('mainFormContent').style.display = 'none';
    container.classList.remove('expanded');
    container.classList.add('compact');
    
    // คืนค่าช่องกรอกอีเมล
    document.getElementById('verifiedUserGroup').style.display = 'none';
    document.getElementById('emailInputGroup').style.display = 'flex';
    document.getElementById('authSubtitle').style.display = 'block';
}

// ฟังก์ชันคำนวณวัน
function calculateDays(startId, endId, resultId) {
    const startDate = document.getElementById(startId).value;
    const endDate = document.getElementById(endId).value;
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

// บันทึกข้อมูล
async function submitForm() {
    const form = document.getElementById('mahidolForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (!CONFIG || !CONFIG.GOOGLE_SCRIPT_URL) {
        alert("กรุณาตั้งค่า GOOGLE_SCRIPT_URL ในไฟล์ config.js ให้ถูกต้อง");
        return;
    }
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    submitBtn.disabled = true;
    submitBtn.innerText = 'กำลังบันทึกข้อมูล...';

    try {
        const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert('✅ บันทึกข้อมูลเรียบร้อยแล้ว! ' + (result.message.includes('ID:') ? 'รหัสของคุณคือ: ' + result.message.split('ID: ')[1] : ''));
            form.reset();
            resetEmail(); // คืนค่ากลับไปหน้าอีเมล
            document.getElementById('startEmail').value = '';
            
            // อัปเดตวันที่ให้เป็นปัจจุบันเสมอหลังจากรีเซ็ตฟอร์ม
            const now = new Date();
            if (document.getElementById('entryDate')) {
                const day = String(now.getDate()).padStart(2, '0');
                const month = String(now.getMonth() + 1).padStart(2, '0');
                document.getElementById('entryDate').value = `${day}/${month}/${now.getFullYear()}`;
            }
        } else {
            alert('❌ เกิดข้อผิดพลาด: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ ไม่สามารถเชื่อมต่อกับระบบได้');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = 'บันทึกข้อมูล';
    }
}

// ฟังก์ชันนับจำนวนครั้งที่เข้าดำเนินการอัตโนมัติ
async function updateVisitCount() {
    const subjectInput = document.getElementById('subject');
    const contractVisitsInput = document.getElementById('contractVisits');
    const currentVisitInput = document.getElementById('currentVisit');

    const subject = subjectInput.value.trim();
    const totalVisits = contractVisitsInput.value.trim() || '?'; // ถ้ายังไม่ใส่จำนวนครั้งรวมให้เป็น ?

    if (!subject) {
        currentVisitInput.value = '';
        return;
    }

    currentVisitInput.value = 'กำลังนับ...';

    try {
        const response = await fetch(`${CONFIG.GOOGLE_SCRIPT_URL}?action=getVisitCount&subject=${encodeURIComponent(subject)}`);
        const result = await response.json();
        
        if (result.status === 'success') {
            const nextVisitNumber = result.count + 1; // นับข้อมูลเดิมที่มีอยู่ แล้วบวก 1 สำหรับครั้งนี้
            currentVisitInput.value = `${nextVisitNumber}/${totalVisits}`;
        } else {
            currentVisitInput.value = `1/${totalVisits}`;
        }
    } catch (error) {
        console.error('Error fetching visit count:', error);
        currentVisitInput.value = `1/${totalVisits}`; // กรณีเชื่อมต่อไม่ได้ ให้เริ่มที่ 1
    }
}

// ตรวจจับเมื่อพิมพ์ข้อมูลเสร็จแล้วคลิกออก (Blur)
document.getElementById('subject').addEventListener('blur', updateVisitCount);
document.getElementById('contractVisits').addEventListener('blur', updateVisitCount);

// อัปเดตตัวเลขรวมแบบ Real-time โดยไม่ยิง API พร่ำเพรื่อ
document.getElementById('contractVisits').addEventListener('input', () => {
    const currentVisitInput = document.getElementById('currentVisit');
    const totalVisits = document.getElementById('contractVisits').value.trim() || '?';
    
    // ถ้าเคยนับครั้งที่ (ตัวหน้า) มาแล้ว ให้เปลี่ยนแค่ตัวเลขข้างหลัง (ตัวหลัง) ทันที
    if (currentVisitInput.value && currentVisitInput.value !== 'กำลังนับ...') {
        const currentCount = currentVisitInput.value.split('/')[0];
        currentVisitInput.value = `${currentCount}/${totalVisits}`;
    }
});