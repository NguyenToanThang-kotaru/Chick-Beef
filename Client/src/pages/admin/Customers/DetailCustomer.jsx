import React from "react";

export default function DetailCustomer({ customer, onClose }) {
  if (!customer) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="bg-[#FFF8F0] rounded-2xl shadow-xl w-[450px] p-6 cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-center text-[#2A435D] mb-4 border-b pb-2">
          Thông tin khách hàng
        </h2>

        <div className="space-y-3 text-[#2A435D]">
          <div>
            <span className="font-bold">Mã khách hàng: </span>
            <span>{customer.MaKhachHang}</span>
          </div>
          <div>
            <span className="font-bold">Tên khách hàng: </span>
            <span>{customer.TenKH}</span>
          </div>
          <div>
            <span className="font-bold">Số điện thoại: </span>
            <span>{customer.SDT}</span>
          </div>
          <div>
            <span className="font-bold">Địa chỉ: </span>
            <span>{customer.DiaChi}</span>
          </div>
          <div>
            <span className="font-bold">Trạng thái: </span>
            <span>{customer.IsDeleted === 1 ? "Ngưng hoạt động" : "Hoạt động"}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#2A435D] text-white font-bold hover:bg-[#16293f]"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
