const invoiceDetailModel = require('../models/invoiceDetail.model');
const { validateNumber, validatePrice } = require("./validation");

exports.getAllInvoiceDetails = (callback) => {
  invoiceDetailModel.getAllInvoiceDetails(callback)
};

exports.getInvoiceDetailByInvoiceId = (id, callback) => {
  invoiceDetailModel.getInvoiceDetailByInvoiceId(id, callback);
};

exports.addInvoiceDetail = (data, callback) => {
  const { MaHD, MaSP, SoLuongSP, DonGia, ThanhTien } = data;

  // Kiểm tra dữ liệu trống
  if (!MaSP || !SoLuongSP || !DonGia) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });

  const error = validateNumber("Số lượng sản phẩm", SoLuongSP) || validatePrice(DonGia);
  if (error)
    return callback({ status: 400, message: error });

  // Thêm công thức vào DB
  const invoiceDetailData = { MaHD, MaSP, SoLuongSP, DonGia, ThanhTien };
  invoiceDetailModel.addInvoiceDetail(invoiceDetailData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    callback(null, invoiceDetailData); // trả dữ liệu công thức mới
  });
};
