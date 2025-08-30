import React, { useState, useEffect } from "react";
import axiosClient from "../../../middleware/axiosClient";
import { toast } from "react-toastify";

export default function AddOrEditCustomer({ onClose, customer, onSuccess }) {
  const [formData, setFormData] = useState({
    MaKhachHang: "",
    TenKH: "",
    Email: "",
    SDT: "",
    DiaChi: "",
  });

  // Lấy mã khách hàng tiếp theo khi mở form thêm mới
  useEffect(() => {
    if (!customer) {
      const fetchNextId = async () => {
        try {
          const res = await axiosClient.get("/customer/nextid");
          setFormData((prev) => ({
            ...prev,
            MaKhachHang: res.data.nextId || "",
          }));
        } catch (err) {
          console.error("Lỗi khi lấy mã khách hàng mới:", err);
        }
      };
      fetchNextId();
    }
  }, [customer]);

  // Nếu đang sửa thì load dữ liệu customer
  useEffect(() => {
    if (customer) {
      setFormData({
        MaKhachHang: customer.MaKhachHang || "",
        TenKH: customer.TenKH || "",
        Email: customer.Email || "",
        SDT: customer.SDT || "",
        DiaChi: customer.DiaChi || "",
      });
    } else {
      setFormData({
        MaKhachHang: "",
        TenKH: "",
        Email: "",
        SDT: "",
        DiaChi: "",
      });
    }
  }, [customer]);

  // Cập nhật state khi nhập input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (customer) {
        // UPDATE
        const res = await axiosClient.put(`/customer/update/${formData.MaKhachHang}`, formData);
        if (!res.data.success) {
          toast.error(res.data.message || "Dữ liệu không hợp lệ");
          return;
        }
        toast.success(res.data.message || "Cập nhật khách hàng thành công");
        onSuccess(res.data.customer);
      } else {
        // ADD
        const res = await axiosClient.post(`/customer`, formData);
        if (!res.data.success) {
          toast.error(res.data.message || "Dữ liệu không hợp lệ");
          return;
        }
        toast.success(res.data.message || "Thêm khách hàng thành công");
        onSuccess(res.data.customer);
      }
      onClose();
    } catch (err) {
      const msg = err.response?.data?.error?.message || "Lỗi server";
      toast.error(msg);
    }
  };

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
          {customer ? "Sửa Khách Hàng" : "Thêm Khách Hàng"}
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block text-3x text-[#2A435D] font-bold mb-1">Mã khách hàng</label>
            <input
              type="text"
              name="MaKhachHang"
              value={formData.MaKhachHang || ""}
              onChange={handleChange}
              className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2 opacity-50"
              disabled
            />
          </div>

          <div>
            <label className="block text-3x text-[#2A435D] font-bold mb-1">Tên khách hàng</label>
            <input
              type="text"
              name="TenKH"
              value={formData.TenKH || ""}
              onChange={handleChange}
              className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-3x text-[#2A435D] font-bold mb-1">Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email || ""}
              onChange={handleChange}
              className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-3x text-[#2A435D] font-bold mb-1">Số điện thoại</label>
            <input
              type="text"
              name="SDT"
              value={formData.SDT || ""}
              onChange={handleChange}
              className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-3x text-[#2A435D] font-bold mb-1">Địa chỉ</label>
            <input
              type="text"
              name="DiaChi"
              value={formData.DiaChi || ""}
              onChange={handleChange}
              className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2"
            />
          </div>

          {/* Nút hành động */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-bold cursor-pointer"
              onClick={handleSubmit}
            >
              {customer ? "Lưu thay đổi" : "Xác nhận thêm"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold cursor-pointer"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
