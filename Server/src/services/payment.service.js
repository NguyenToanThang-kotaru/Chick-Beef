const invoiceModel = require('../models/invoice.model');
const paymentModel = require('../models/payment.model');
const { validateTime, validatePrice } = require("./validation");

exports.getAllPayments = (callback) => {
  paymentModel.getAllPayments(callback)
};

exports.getPaymentById = (id, callback) => {
  paymentModel.getPaymentById(id, callback);
};

exports.searchPayment = (keyword, callback) => {
  paymentModel.searchPayment(keyword, callback);
};


exports.getNextPaymentId = (callback) => {
  paymentModel.getLastPaymentId((err, lastId) => {
    if (err) return callback(err);

    let newId = "TT00001";
    if (lastId) {
      const num = parseInt(lastId.replace("TT", "")) + 1;
      newId = "TT" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.addPayment = (data, callback) => {
  const { MaTT, PhuongThucTT, MaHD, ThoiGianTT, SoTienTra, SoTienThoi } = data;

  if (!SoTienTra || !MaHD) {
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });
  }

  const error = validateTime(ThoiGianTT) || validatePrice(SoTienTra);
  if (error) return callback({ status: 400, message: error });

  // Lấy tổng tiền hóa đơn từ invoiceModel
  invoiceModel.getInvoiceById(MaHD, (err, invoice) => {
    if (err) return callback({ status: 500, message: "Lỗi khi lấy hóa đơn" });
    if (!invoice) return callback({ status: 404, message: "Không tìm thấy hóa đơn" });

    const { TongTien } = invoice;
    if (Number(SoTienTra) < Number(TongTien)) {
      return callback({ status: 400, message: "Số tiền trả không được nhỏ hơn tổng tiền hóa đơn" });
    }

    // Nếu hợp lệ thì thêm payment vào DB
    const paymentData = { MaTT, PhuongThucTT, MaHD, ThoiGianTT, SoTienTra, SoTienThoi };
    paymentModel.addPayment(paymentData, (err, result) => {
      if (err) return callback({ status: 500, message: err.message });
      callback(null, paymentData);
    });
  });
};

