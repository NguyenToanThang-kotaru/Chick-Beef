const invoiceModel = require('../models/invoice.model');

exports.getAllInvoices = (callback) => {
  invoiceModel.getAllInvoices(callback)
};

exports.getInvoiceById = (id, callback) => {
  invoiceModel.getInvoiceById(id, callback);
};

exports.getInvoiceStay = (callback) => {
  invoiceModel.getInvoiceStay(callback);
}


exports.getNextInvoiceId = (callback) => {
  invoiceModel.getLastInvoiceId((err, lastId) => {
    if (err) return callback(err);

    let newId = "HD00001";
    if (lastId) {
      const num = parseInt(lastId.replace("HD", "")) + 1;
      newId = "HD" + num.toString().padStart(5, "0");
    }
    callback(null, newId);
  });
};

exports.getInvoicesByMonth = (month, year, callback) => {
  invoiceModel.getInvoicesByMonth(month,year,callback)
}

exports.getInvoiceTakeAway = (callback) => {
  invoiceModel.getInvoiceTakeAway(callback)
}

exports.addInvoice = (data, callback) => {
  invoiceModel.addInvoice(data, (err, result) => {
    if (err) return callback(err);
    callback(null, { ...data});
  });
};

exports.updateStatusInvoice = (id, data, callback) => {
  const { TrangThai } = data;

  // Kiểm tra dữ liệu trống
  if (!TrangThai) 
    return callback({ status: 400, message: "Vui lòng nhập đầy đủ thông tin" });
  //  Dữ liệu update
  const statusData = { TrangThai };
  invoiceModel.updateStatusInvoice(id, statusData, (err, result) => {
    if (err) return callback({ status: 500, message: err.message });
    if (result.affectedRows === 0) {
      return callback({ status: 404, message: "Không tìm thấy hóa đơn" });
    }
    callback(null, {
      status: 200,
      message: "Cập nhật hóa đơn thành công",
      data: { MaHD: id, ...statusData }
    });
  });
};
