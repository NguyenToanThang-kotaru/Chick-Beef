function validateName(name) {
  const nameRegex = /^[\p{L}\s]+$/u;   // Chỉ cho phép chữ + khoảng trắng (có dấu tiếng Việt)
  if (!nameRegex.test(name)) 
    return "Tên chỉ được chứa chữ cái và khoảng trắng";
  return null;
}

// Validate số điện thoại
function validatePhone(phone) {
  const phoneRegex = /^0\d{9}$/;       // 10 số, bắt đầu bằng 0
  if (!phoneRegex.test(phone)) 
    return "Số điện thoại không hợp lệ";
  return null;
}

// Validate giá tiền
function validatePrice(price) {
  const num = Number(price);
  if (isNaN(num) || num <= 0) 
    return "Số tiền phải là số dương";
  return null;
}

// Validate số >= 0
function validateNumber(key, number) {
  const num = Number(number);
  if (isNaN(num) || num < 0) 
    return key + " chỉ được chứa số không âm";
  return null;
}

// Validate số > 0
function validatePositiveNumber(key, number) {
  const num = Number(number);
  if (isNaN(num) || num < 0)
    return key + " chỉ được chứa số dương";
  return null;
}

// Validate số nguyên dương
function validatePositiveInteger(key, number) {
  const num = Number(number);
  if (!Number.isInteger(num) || num <= 0) 
    return key + " phải là số nguyên dương";
  return null;
}

// Validate date (YYYY-MM-DD)
function validateDate(date) {
  const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
  const match = date.match(dateRegex);
  if (!match) return "Ngày không hợp lệ";

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  // Check month hợp lệ
  if (month < 1 || month > 12) return "Tháng không hợp lệ";

  // Ngày tối đa theo tháng
  const daysInMonth = new Date(year, month, 0).getDate(); // 0 nghĩa là ngày cuối của tháng trước
  if (day < 1 || day > daysInMonth) return "Ngày không hợp lệ";

  return null;
}

// Validate time (YYYY-MM-DD HH:MM:SS)
function validateTime(time) {
  const timeRegex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
  const match = time.match(timeRegex);
  if (!match) return "Thời gian không hợp lệ";

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);
  const hour = parseInt(match[4], 10);
  const minute = parseInt(match[5], 10);
  const second = parseInt(match[6], 10);

  // Check ngày hợp lệ (dùng lại validateDate)
  const dateError = validateDate(`${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`);
  if (dateError) return dateError;

  // Check giờ phút giây
  if (hour < 0 || hour > 23) return "Giờ không hợp lệ";
  if (minute < 0 || minute > 59) return "Phút không hợp lệ";
  if (second < 0 || second > 59) return "Giây không hợp lệ";

  return null;
}

function validateEntityName(name, field) {
  const nameRegex = /^[\p{L}\s]+$/u;   
  if (!nameRegex.test(name)) {
    return `Tên ${field} chỉ được chứa chữ cái và khoảng trắng`;
  }
  if (name.length > 100) {
    return `Tên ${field} không được vượt quá 100 ký tự`;
  }
  return null;
}

module.exports = {
  validateName,
  validatePhone,
<<<<<<< HEAD
  validateAddress,
  validateEntityName
=======
  validatePrice,
  validateNumber,
  validateTime,
  validateDate,
  validatePositiveInteger,
  validatePositiveNumber
>>>>>>> tin
};