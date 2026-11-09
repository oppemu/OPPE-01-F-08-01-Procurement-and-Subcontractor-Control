// ==========================================
// ⚙️ ไฟล์ Code.gs (ฉบับแก้ไขระบบอัปเดตข้อมูลทับแถวเดิม, ลบการตั้งค่า Format และบังคับดึงวันที่ตามหน้าชีท)[cite: 18]
// ==========================================

// Match only the explicitly selected contract group. Never infer legacy blank years.
function normalizeLookupValue(value) {
  return String(value == null ? '' : value).trim();
}

function normalizeBudgetYear(value) {
  return normalizeLookupValue(value).replace(/[๐-๙]/g, function(digit) {
    return String(digit.charCodeAt(0) - '๐'.charCodeAt(0));
  });
}

function getContractLookup(parameters) {
  parameters = parameters || {};
  return {
    budgetYear: normalizeBudgetYear(parameters.budgetYear) || normalizeBudgetYear(parameters.fiscalYear),
    location: normalizeLookupValue(parameters.location),
    category: normalizeLookupValue(parameters.category),
    pwiCode: normalizeLookupValue(parameters.pwiCode),
    subject: normalizeLookupValue(parameters.subject)
  };
}

function isCompleteContractLookup(lookup) {
  return !!(lookup.budgetYear && lookup.location && lookup.category && lookup.pwiCode && lookup.subject);
}

function matchesContractLookup(row, lookup) {
  return isCompleteContractLookup(lookup) &&
    normalizeBudgetYear(row[44]) === lookup.budgetYear &&
    normalizeLookupValue(row[5]) === lookup.location &&
    normalizeLookupValue(row[6]) === lookup.category &&
    normalizeLookupValue(row[7]) === lookup.pwiCode &&
    normalizeLookupValue(row[8]) === lookup.subject;
}

// A:AW keeps its existing layout. Extra fields are located by exact header.
function findContractSigningDateColumn(headers) {
  for (var c = 49; c < headers.length; c++) {
    if (headers[c] === 'contractSigningDate' || headers[c] === 'วันที่ลงนามในสัญญา') return c + 1;
  }
  return 0;
}

function normalizeContractSigningDate(value, timeZone) {
  if (value == null || value === '') return '';
  if (Object.prototype.toString.call(value) === '[object Date]') {
    if (isNaN(value.getTime())) return '';
    return Utilities.formatDate(value, timeZone || 'Asia/Bangkok', 'yyyy-MM-dd');
  }
  var text = normalizeBudgetYear(value), match, year, month, day;
  if ((match = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))) {
    year = Number(match[1]); month = Number(match[2]); day = Number(match[3]);
  } else if ((match = text.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/))) {
    day = Number(match[1]); month = Number(match[2]); year = Number(match[3]);
  } else {
    var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    match = text.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
    if (!match) return '';
    day = Number(match[1]); month = months.indexOf(match[2]) + 1; year = Number(match[3]);
  }
  if (year >= 2400) year -= 543;
  if (year < 1000 || month < 1 || month > 12 || day < 1 || day > new Date(Date.UTC(year, month, 0)).getUTCDate()) return '';
  return String(year) + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);
}

// Optional installment stays editable; nonblank values must be positive safe integers.
function normalizeSubmissionInstallment(value) {
  var text = normalizeBudgetYear(value);
  if (!text) return '';
  if (!/^\d+$/.test(text) || Number(text) < 1 || Number(text) > 9007199254740991) {
    throw new Error('บริษัทส่งงานงวดที่ต้องเป็นจำนวนเต็มบวก');
  }
  return String(Number(text));
}

function readSubmissionFields(record, sheet, headers, rowNumber) {
  var installmentColumn = findPersonnelColumn(headers, 'submissionInstallment');
  record.submissionInstallment = installmentColumn ? normalizeLookupValue(sheet.getRange(rowNumber, installmentColumn).getValue()) : '';
  var dateColumn = findPersonnelColumn(headers, 'submissionDate');
  record.submissionDate = dateColumn ? normalizeContractSigningDate(sheet.getRange(rowNumber, dateColumn).getValue(), sheet.getParent().getSpreadsheetTimeZone()) : '';
}

function readContractSigningDate(sheet, headers, rowNumber) {
  var column = findContractSigningDateColumn(headers);
  if (!column) return '';
  return normalizeContractSigningDate(sheet.getRange(rowNumber, column).getValue(), sheet.getParent().getSpreadsheetTimeZone());
}

// Normalize full names and user-entered prefixes without guessing or substring matching.
function normalizePersonName(value) {
  return normalizeLookupValue(value).replace(/\s+/g, ' ');
}

function readPersonnelDirectory() {
  try {
    if (!CONFIG.USER_DB_ID) return null;
    return SpreadsheetApp.openById(CONFIG.USER_DB_ID).getSheets()[0].getDataRange().getDisplayValues();
  } catch (error) {
    return null;
  }
}

// Role directory: column C holds the full name; column M holds the position on that row.
function resolvePersonByName(name, directory) {
  name = normalizePersonName(name);
  if (!name) return { status: 'not_found' };
  if (!directory) return { status: 'unavailable' };
  var matches = [];
  for (var i = 1; i < directory.length; i++) {
    var row = directory[i];
    var fullName = normalizePersonName(row[2]);
    if (fullName === name) matches.push({ name: fullName, position: normalizeLookupValue(row[12]) });
  }
  if (matches.length > 1) return { status: 'ambiguous' };
  return matches.length ? { status: 'success', data: matches[0] } : { status: 'not_found' };
}

// Prefix search exposes only the fields needed for an explicit personnel selection.
function searchPersonnel(query, directory) {
  query = normalizePersonName(query);
  var result = { status: 'success', data: [], hasMore: false };
  if (!query) return result;
  if (!directory) return { status: 'unavailable', data: [], hasMore: false };
  var seen = {};
  for (var i = 1; i < directory.length; i++) {
    var row = directory[i];
    var name = normalizePersonName(row[2]);
    if (!name || name.indexOf(query) !== 0) continue;
    var position = normalizeLookupValue(row[12]);
    var identity = JSON.stringify([name, position]);
    if (Object.prototype.hasOwnProperty.call(seen, identity)) continue;
    seen[identity] = true;
    if (result.data.length === 20) { result.hasMore = true; break; }
    result.data.push({ name: name, position: position });
  }
  return result;
}

function getContractSigningDateStatus(sheet, headers, rows, lookup, date) {
  if (date) return 'found';
  var column = findContractSigningDateColumn(headers);
  if (!column) return 'missing_column';
  for (var i = rows.length - 1; i >= 1; i--) {
    if (!matchesContractLookup(rows[i], lookup)) continue;
    if (normalizeLookupValue(sheet.getRange(i + 1, column).getValue())) return 'invalid_saved_date';
  }
  return 'no_saved_date';
}

function findPersonnelColumn(headers, field) {
  for (var i = 49; i < headers.length; i++) if (headers[i] === field) return i + 1;
  return 0;
}

function parseSupervisorsPeople(value) {
  if (typeof value === 'string') {
    try { value = JSON.parse(value); } catch (error) { value = value.split(/[,\n]+/); }
  }
  if (!Array.isArray(value)) return [];
  return value.map(function(person) {
    return { name: normalizePersonName(typeof person === 'string' ? person : person && person.name),
      position: normalizeLookupValue(typeof person === 'object' && person ? person.position : '') };
  }).filter(function(person) { return !!person.name; });
}

function readPersonnelFields(record, headers, row) {
  ['committeeChairPosition', 'chiefSupervisorPosition'].forEach(function(field) {
    var column = findPersonnelColumn(headers, field);
    record[field] = column ? row[column - 1] || '' : '';
  });
  var column = findPersonnelColumn(headers, 'supervisorsPeople');
  var savedPeople = parseSupervisorsPeople(column && row[column - 1] ? row[column - 1] : '');
  record.supervisorsPeople = parseSupervisorsPeople(record.supervisorsData).map(function(person) {
    var matches = savedPeople.filter(function(saved) { return saved.name === person.name; });
    return { name: person.name, position: matches.length === 1 ? matches[0].position : '' };
  });
}

function enrichContractPersonnel(record) {
  var directory = readPersonnelDirectory();
  record.personnelLookup = {};
  record.personnelSources = {};
  ['committeeChair', 'chiefSupervisor'].forEach(function(field) {
    var result = resolvePersonByName(record[field], directory);
    var savedPosition = record[field + 'Position'] || '';
    record[field + 'Position'] = result.status === 'success' ? result.data.position : savedPosition;
    record.personnelSources[field] = result.status === 'success' ? 'directory' : savedPosition ? 'saved' : 'unresolved';
    record.personnelLookup[field] = result.status;
  });
  record.personnelLookup.supervisors = [];
  record.personnelSources.supervisors = [];
  record.supervisorsPeople = record.supervisorsPeople.map(function(person) {
    var result = resolvePersonByName(person.name, directory);
    record.personnelLookup.supervisors.push({ name: person.name, status: result.status });
    record.personnelSources.supervisors.push(result.status === 'success' ? 'directory' : person.position ? 'saved' : 'unresolved');
    return { name: person.name, position: result.status === 'success' ? result.data.position : person.position };
  });
}

function writeExtraContractField(sheet, rowNumber, field, value) {
  var lastColumn = Math.max(49, sheet.getLastColumn());
  var headers = sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0];
  var column = findPersonnelColumn(headers, field);
  if (!column) {
    column = lastColumn + 1;
    if (column > sheet.getMaxColumns()) sheet.insertColumnsAfter(sheet.getMaxColumns(), column - sheet.getMaxColumns());
    sheet.getRange(1, column).setValue(field);
  }
  sheet.getRange(rowNumber, column).setValue(value);
}

function doGet(e) {
  try {
    if (e.parameter && e.parameter.action === 'searchPersonnel') {
      var prefix = normalizePersonName(e.parameter.query);
      var searchResult = searchPersonnel(prefix, prefix ? readPersonnelDirectory() : null);
      return ContentService.createTextOutput(JSON.stringify(searchResult)).setMimeType(ContentService.MimeType.JSON);
    }
    if (e.parameter && e.parameter.action === 'getPersonByName') {
      var personResult = resolvePersonByName(e.parameter.name, readPersonnelDirectory());
      return ContentService.createTextOutput(JSON.stringify(personResult)).setMimeType(ContentService.MimeType.JSON);
    }
    if (e.parameter && e.parameter.action === "getVisitCount") {
      var visitLookup = getContractLookup(e.parameter);
      if (!isCompleteContractLookup(visitLookup)) {
        return ContentService.createTextOutput(JSON.stringify({ status: "error", code: "MISSING_LOOKUP_CRITERIA", message: "กรุณาเลือกปีงบประมาณ สถานที่ ประเภทงาน รหัส P/WI และเรื่องที่ดำเนินการให้ครบ", lookup: visitLookup })).setMimeType(ContentService.MimeType.JSON);
      }
      var sheet = SpreadsheetApp.openById(CONFIG.REPORT_DB_ID).getSheetByName(CONFIG.MAIN_SHEET_NAME);
      var data = sheet.getDataRange().getDisplayValues(); // แก้ไขเป็น getDisplayValues[cite: 18]
      var count = 0;
      
      for (var i = 1; i < data.length; i++) {
        if (matchesContractLookup(data[i], visitLookup)) {
          count++;
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", count: count, lookup: visitLookup })).setMimeType(ContentService.MimeType.JSON);
    }

    if (e.parameter && e.parameter.action === "getContractDetails") {
      var contractLookup = getContractLookup(e.parameter);
      if (!isCompleteContractLookup(contractLookup)) {
        return ContentService.createTextOutput(JSON.stringify({ status: "error", code: "MISSING_LOOKUP_CRITERIA", message: "กรุณาเลือกปีงบประมาณ สถานที่ ประเภทงาน รหัส P/WI และเรื่องที่ดำเนินการให้ครบ", lookup: contractLookup })).setMimeType(ContentService.MimeType.JSON);
      }

      var ssReport = SpreadsheetApp.openById(CONFIG.REPORT_DB_ID);
      var sheetReport = ssReport.getSheetByName(CONFIG.MAIN_SHEET_NAME);
      var reportData = sheetReport.getDataRange().getDisplayValues(); // แก้ไขเป็น getDisplayValues[cite: 18]

      for (var r = reportData.length - 1; r >= 1; r--) {
        if (matchesContractLookup(reportData[r], contractLookup)) {
          var contractData = {
            companyName: reportData[r][9] || '',     
            contractStart: formatDateString(reportData[r][10]),   
            contractEnd: formatDateString(reportData[r][11]),     
            contractDays: reportData[r][12] || '',    
            contractValue: reportData[r][13] || '',   
            contractVisits: reportData[r][14] || '',
            // เพิ่มการส่งค่าข้อมูลสัญญาและผู้ควบคุมงาน[cite: 18]
            contractSigningDate: readContractSigningDate(sheetReport, reportData[0], r + 1),
            expectedWorkers: reportData[r][20] || '',
            contractNumber: reportData[r][45] || '',     // AT: เลขที่สัญญา
            committeeChair: reportData[r][46] || '',     // AU: ชื่อประธานตรวจรับ
            chiefSupervisor: reportData[r][47] || '',    // AV: ชื่อหัวหน้าผู้ควบคุมงาน
            supervisorsData: reportData[r][48] || ''     // AW: ชื่อผู้ควบคุมงาน
          };

          // Only the signing date can fall back to an earlier row of this exact group.
          if (!contractData.contractSigningDate) {
            for (var previous = r - 1; previous >= 1; previous--) {
              if (!matchesContractLookup(reportData[previous], contractLookup)) continue;
              var priorDate = readContractSigningDate(sheetReport, reportData[0], previous + 1);
              if (priorDate) { contractData.contractSigningDate = priorDate; break; }
            }
          }
          contractData.contractSigningDateStatus = getContractSigningDateStatus(sheetReport, reportData[0], reportData, contractLookup, contractData.contractSigningDate);
          readPersonnelFields(contractData, reportData[0], reportData[r]);
          enrichContractPersonnel(contractData);
          return ContentService.createTextOutput(JSON.stringify({ status: "success", data: contractData, lookup: contractLookup })).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "not_found", message: "ไม่พบข้อมูลสัญญาเดิมในปีงบประมาณและเงื่อนไขที่เลือก", lookup: contractLookup })).setMimeType(ContentService.MimeType.JSON);
    }

    if (e.parameter && e.parameter.action === "getHistoryByEmail") {
      var emailToFind = String(e.parameter.email || '').trim().toLowerCase();

      if (!emailToFind) {
        return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "ไม่ได้ระบุอีเมล" })).setMimeType(ContentService.MimeType.JSON);
      }

      var sheetReport = SpreadsheetApp.openById(CONFIG.REPORT_DB_ID).getSheetByName(CONFIG.MAIN_SHEET_NAME);
      var data = sheetReport.getDataRange().getDisplayValues(); // แก้ไขเป็น getDisplayValues[cite: 18]
      var records = [];

      for (var j = data.length - 1; j >= 1; j--) {
        var rowEmail = String(data[j][4] || '').trim().toLowerCase();
        if (rowEmail === emailToFind) {
          var entryDateVal = formatDateString(data[j][43] || data[j][1]);
          records.push({
            reqId: String(data[j][0]),      
            date: entryDateVal, 
            subject: String(data[j][8] || '-'),
            location: String(data[j][5] || '-')
          });
        }
      }

      return ContentService.createTextOutput(JSON.stringify({ status: "success", data: records })).setMimeType(ContentService.MimeType.JSON);
    }

    if (e.parameter && e.parameter.action === "getRecordById") {
      var reqIdToFind = String(e.parameter.reqId || '').trim();
      if (!reqIdToFind) {
        return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "ไม่ได้ระบุ ID เอกสาร" })).setMimeType(ContentService.MimeType.JSON);
      }

      var sheet = SpreadsheetApp.openById(CONFIG.REPORT_DB_ID).getSheetByName(CONFIG.MAIN_SHEET_NAME);
      var data = sheet.getDataRange().getDisplayValues(); // แก้ไขเป็น getDisplayValues[cite: 18]

      for (var i = 1; i < data.length; i++) {
        if (String(data[i][0]).trim() === reqIdToFind) {
          var recordData = {
            reqId: data[i][0] || '',
            entryDate: formatDateString(data[i][1]),
            recorderName: data[i][2] || '',
            department: data[i][3] || '',
            email: data[i][4] || '',
            location: data[i][5] || '',
            category: data[i][6] || '',
            pwiCode: data[i][7] || '',
            subject: data[i][8] || '',
            companyName: data[i][9] || '',
            contractStart: formatDateString(data[i][10]),
            contractEnd: formatDateString(data[i][11]),
            contractDays: data[i][12] || '',
            contractValue: data[i][13] || '',
            contractVisits: data[i][14] || '',
            currentVisit: data[i][15] || '',
            accumulatedMoney: data[i][16] || '',
            workStart: formatDateString(data[i][17]),
            workEnd: formatDateString(data[i][18]),
            workDays: data[i][19] || '',
            expectedWorkers: data[i][20] || '',
            actualWorkers: data[i][21] || '',
            healthCheckType: data[i][22] || '',
            healthCheckResult: data[i][23] || '',
            coshem: data[i][24] || '',
            criminalCheck: data[i][25] || '',
            drugTest: data[i][26] || '',
            workPermit: data[i][27] || '',
            permitStatus: data[i][28] || '',
            ppe: data[i][29] || '',
            sdsStatus: data[i][30] || '',
            sdsName: data[i][31] || '',
            hazardType: data[i][32] || '',
            changeTypeDetail: data[i][33] || '', 
            impactLevel: data[i][34] || '',        
            impactCharacter: data[i][35] || '',    
            reviewStatus: data[i][36] || '',       
            mitigationResult: data[i][37] || '',   
            jobStatus: data[i][38] || '',          
            jobDetail: data[i][39] || '',          
            jobDetails: data[i][40] || '',         
            meetingRequirement: data[i][41] || '', 
            remark: data[i][42] || '',
            budgetYear: data[i][44] || '',         // AS
            contractSigningDate: readContractSigningDate(sheet, data[0], i + 1),
            contractNumber: data[i][45] || '',     // AT[cite: 18]
            committeeChair: data[i][46] || '',     // AU[cite: 18]
            chiefSupervisor: data[i][47] || '',    // AV[cite: 18]
            supervisorsData: data[i][48] || ''     // AW[cite: 18]
          };

          readSubmissionFields(recordData, sheet, data[0], i + 1);
          readPersonnelFields(recordData, data[0], data[i]);
          return ContentService.createTextOutput(JSON.stringify({ status: "success", data: recordData })).setMimeType(ContentService.MimeType.JSON);
        }
      }

      return ContentService.createTextOutput(JSON.stringify({ status: "not_found", message: "ไม่พบข้อมูลเอกสารในระบบ" })).setMimeType(ContentService.MimeType.JSON);
    }

    var email = e.parameter ? e.parameter.email : null;
    if (email) {
      var ss = SpreadsheetApp.openById(CONFIG.USER_DB_ID);
      var sheetUser = ss.getSheets()[0]; 
      var userData = sheetUser.getDataRange().getDisplayValues(); // แก้ไขเป็น getDisplayValues[cite: 18]

      for (var k = 1; k < userData.length; k++) {
        var rowUser = userData[k];
        if (String(rowUser[10]).toLowerCase().trim() === email.toLowerCase().trim()) {
          return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            data: {
              name: (rowUser[2] + " " + rowUser[3]).trim() || rowUser[2] || "",  
              position: rowUser[11] || "",   
              department: rowUser[12] || "", 
              shortCode: rowUser[16] || ""   
            }
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "not_found", message: "ไม่พบข้อมูลอีเมลนี้ในฐานข้อมูล" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Invalid action" })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function formatDateString(val) {
  if (!val) return '';
  if (val instanceof Date) {
    var monthNamesThai = [
      "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
      "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];
    var day = val.getDate();
    var month = val.getMonth();
    var yearBE = val.getFullYear() + 543;
    return day + " " + monthNamesThai[month] + " " + yearBE;
  }
  return String(val); // หากข้อมูลถูกดึงมาเป็น String อยู่แล้วจาก getDisplayValues ให้คืนค่าเดิมกลับไปได้เลย[cite: 18]
}

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    var ss = SpreadsheetApp.openById(CONFIG.REPORT_DB_ID);
    var sheet = ss.getSheetByName(CONFIG.MAIN_SHEET_NAME);

    if (!sheet) {
      throw new Error("ไม่พบชีต: " + CONFIG.MAIN_SHEET_NAME);
    }

    // อ่านข้อมูลที่ส่งมาจากหน้าเว็บ[cite: 18]
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter || {};
      }
    } else {
      data = (e && e.parameter) || {};
    }

    var shortCode = "OPPE01F0801";
    var targetReqId = String(data.reqId || data.docId || "").trim();
    var generatedId = targetReqId;
    var targetRowIndex = -1;
    var isEditMode = targetReqId !== "";

    // ค้นหาเอกสารเดิมตาม ID ในคอลัมน์ A[cite: 18]
    if (isEditMode) {
      var lastRow = sheet.getLastRow();

      if (lastRow >= 2) {
        var ids = sheet.getRange(2, 1, lastRow - 1, 1)
          .getDisplayValues();

        for (var r = 0; r < ids.length; r++) {
          if (String(ids[r][0]).trim() === targetReqId) {
            targetRowIndex = r + 2;
            break;
          }
        }
      }

      if (targetRowIndex === -1) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          code: "RECORD_NOT_FOUND",
          message: "ไม่พบเอกสารเดิม รหัส " + targetReqId +
                   " จึงยกเลิกการบันทึกเพื่อป้องกันเอกสารซ้ำ"
        })).setMimeType(ContentService.MimeType.JSON);
      }
    } else {
      var lastRow = sheet.getLastRow();
      var maxNum = 0;

      if (lastRow >= 2) {
        var ids = sheet.getRange(2, 1, lastRow - 1, 1)
          .getDisplayValues();

        var prefix = shortCode + "-";

        for (var i = 0; i < ids.length; i++) {
          var currentId = String(ids[i][0]).trim();

          if (currentId.indexOf(prefix) === 0) {
            var suffix = currentId.substring(prefix.length);

            if (/^\d+$/.test(suffix)) {
              maxNum = Math.max(maxNum, Number(suffix));
            }
          }
        }
      }

      generatedId = shortCode + "-" + (maxNum + 1);
    }

    // An omitted field from an older client must not erase an existing signing date.
    var hasSigningDate = Object.prototype.hasOwnProperty.call(data, 'contractSigningDate');
    var signingDate = hasSigningDate ? normalizeContractSigningDate(data.contractSigningDate, ss.getSpreadsheetTimeZone()) : '';
    if (hasSigningDate && normalizeLookupValue(data.contractSigningDate) && !signingDate) {
      throw new Error('วันที่ลงนามในสัญญาไม่ถูกต้อง');
    }

    // Validate submission extras before any row or header is written. Omission preserves old values.
    var hasSubmissionInstallment = Object.prototype.hasOwnProperty.call(data, 'submissionInstallment');
    var submissionInstallment = hasSubmissionInstallment ? normalizeSubmissionInstallment(data.submissionInstallment) : '';
    var hasSubmissionDate = Object.prototype.hasOwnProperty.call(data, 'submissionDate');
    var submissionDate = hasSubmissionDate ? normalizeContractSigningDate(data.submissionDate, ss.getSpreadsheetTimeZone()) : '';
    if (hasSubmissionDate && normalizeLookupValue(data.submissionDate) && !submissionDate) {
      throw new Error('วันที่บริษัทส่งงานไม่ถูกต้อง');
    }

    var hasPeople = Object.prototype.hasOwnProperty.call(data, 'supervisorsPeople');
    var people = hasPeople ? parseSupervisorsPeople(data.supervisorsPeople) : [];
    if (hasPeople && !Object.prototype.hasOwnProperty.call(data, 'supervisorsData')) {
      data.supervisorsData = people.map(function(person) { return person.name; }).join(', ');
    }

    // เตรียมข้อมูลตามลำดับคอลัมน์ A:AW[cite: 18]
    var rowData = [
      generatedId,                   // A
      data.entryDate || "",          // B
      data.recorderName || "",       // C
      data.department || "",         // D
      data.email || "",              // E
      data.location || "",           // F
      data.category || "",           // G
      data.pwiCode || "",            // H
      data.subject || "",            // I
      data.companyName || "",        // J
      data.contractStart || "",      // K
      data.contractEnd || "",        // L
      data.contractDays || "",       // M
      data.contractValue || "",      // N
      data.contractVisits || "",     // O
      data.currentVisit || "",       // P
      data.accumulatedMoney || "",   // Q
      data.workStart || "",          // R
      data.workEnd || "",            // S
      data.workDays || "",           // T
      data.expectedWorkers || "",    // U
      data.actualWorkers || "",      // V
      data.healthCheckType || "",    // W
      data.healthCheckResult || "",  // X
      data.coshem || "",             // Y
      data.criminalCheck || "",      // Z
      data.drugTest || "",           // AA
      data.workPermit || "",         // AB
      data.permitStatus || "",       // AC
      data.ppe || "",                // AD
      data.sdsStatus || "",          // AE
      data.sdsName || "",            // AF
      data.hazardType || "",         // AG
      data.changeTypeDetail || "",   // AH
      data.impactLevel || "",        // AI
      data.impactCharacter || "",    // AJ
      data.reviewStatus || "",       // AK
      data.mitigationResult || "",   // AL
      data.jobStatus || "",          // AM
      data.jobDetail || "",          // AN
      data.jobDetails || "",         // AO
      data.meetingRequirement || "", // AP
      data.remark || "",             // AQ
      new Date(),                    // AR: วันที่บันทึกข้อมูล (Timestamp เดิมของคุณ)
      (normalizeBudgetYear(data.budgetYear) || normalizeBudgetYear(data.fiscalYear)), // AS: ปีงบประมาณของสัญญา
      data.contractNumber || "",     // AT: เลขที่สัญญา
      data.committeeChair || "",     // AU: ชื่อประธานตรวจรับ
      data.chiefSupervisor || "",    // AV: ชื่อหัวหน้าผู้ควบคุมงาน
      data.supervisorsData || ""     // AW: ชื่อผู้ควบคุมงาน
    ];

    // Old clients can change a name without sending its new position. Never retain
    // the previous person's position under the replacement name.
    if (isEditMode) {
      var previousNames = sheet.getRange(targetRowIndex, 47, 1, 2).getDisplayValues()[0];
      ['committeeChair', 'chiefSupervisor'].forEach(function(field, index) {
        if (!Object.prototype.hasOwnProperty.call(data, field + 'Position') &&
            normalizePersonName(previousNames[index]) !== normalizePersonName(data[field])) {
          data[field + 'Position'] = '';
        }
      });
    }

    // ✅ ปรับแก้การบันทึก: ลบ setNumberFormat ออกเพื่อแก้ Error และระบุแถวใหม่ให้ถูกต้อง[cite: 18]
    if (isEditMode) {
      sheet.getRange(targetRowIndex, 1, 1, rowData.length).setValues([rowData]);
    } else {
      var nextRow = sheet.getLastRow() + 1; // หาแถวว่างถัดไป[cite: 18]
      sheet.getRange(nextRow, 1, 1, rowData.length).setValues([rowData]); // บันทึกข้อมูลลงแถวใหม่[cite: 18]
    }

    if (hasSigningDate) {
      var lastColumn = Math.max(49, sheet.getLastColumn());
      var headers = sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0];
      var signingColumn = findContractSigningDateColumn(headers);
      if (!signingColumn) {
        signingColumn = lastColumn + 1;
        if (signingColumn > sheet.getMaxColumns()) {
          sheet.insertColumnsAfter(sheet.getMaxColumns(), signingColumn - sheet.getMaxColumns());
        }
        sheet.getRange(1, signingColumn).setValue('contractSigningDate');
      }
      sheet.getRange(isEditMode ? targetRowIndex : nextRow, signingColumn).setValue(signingDate);
    }

    ['committeeChairPosition', 'chiefSupervisorPosition'].forEach(function(field) {
      if (Object.prototype.hasOwnProperty.call(data, field)) {
        writeExtraContractField(sheet, isEditMode ? targetRowIndex : nextRow, field, normalizeLookupValue(data[field]));
      }
    });
    if (hasPeople) writeExtraContractField(sheet, isEditMode ? targetRowIndex : nextRow, 'supervisorsPeople', JSON.stringify(people));

    if (hasSubmissionInstallment) writeExtraContractField(sheet, isEditMode ? targetRowIndex : nextRow, 'submissionInstallment', submissionInstallment);
    if (hasSubmissionDate) writeExtraContractField(sheet, isEditMode ? targetRowIndex : nextRow, 'submissionDate', submissionDate);

    SpreadsheetApp.flush();

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      action: isEditMode ? "updated" : "created",
      message: isEditMode
        ? "อัปเดตเอกสารเดิมสำเร็จ"
        : "สร้างเอกสารใหม่สำเร็จ",
      reqId: generatedId
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: String(error.message || error)
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}