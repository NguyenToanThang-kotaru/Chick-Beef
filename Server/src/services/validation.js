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
  if (isNaN(num) || num <= 0) 
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

// Validate time (YYYY-MM-DD HH:MM:SS)
function validateTime(time) {
  const timeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  if (!timeRegex.test(time)) 
    return "Thời gian không hợp lệ";
  return null;
}

// Validate date (YYYY-MM-DD)
function validateDate(date) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date))
    return "Ngày không hợp lệ";
  return null;
}

module.exports = {
  validateName,
  validatePhone,
  validatePrice,
  validateNumber,
  validateTime,
  validateDate,
  validatePositiveInteger,
  validatePositiveNumber
};