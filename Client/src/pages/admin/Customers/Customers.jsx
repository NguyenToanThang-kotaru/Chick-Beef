import React, { useState, useEffect } from "react";
import Table from "../../../Components/table_cpn";
import SearchBar from "../../../Components/searchBar";
import AddOrEditCustomer from "./AddOrEditCustomer";
import DetailCustomer from "./DetailCustomer";
import eye from "../../../assets/Icon/Eye.png";
import edit from "../../../assets/Icon/Edit.png";
import deleteIcon from "../../../assets/Icon/delete.png";
import ConfirmDialog from "../../../Components/dialog/confirmDialog";
import axiosClient from "../../../middleware/axiosClient";
import { toast } from "react-toastify";

export default function Customers() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [keyword, setKeyword] = useState("");

  // Lấy danh sách khách hàng (hoặc search)
  const fetchCustomers = async (searchKeyword = "") => {
    try {
      const res = searchKeyword
        ? await axiosClient.get(`/customer/search?keyword=${searchKeyword}`)
        : await axiosClient.get("/customer");
      setCustomers(res.data || []);
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu khách hàng:", err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Xử lý khi nhập vào SearchBar
  const handleSearch = (value) => {
    setKeyword(value);
    fetchCustomers(value);
  };

  // Gọi khi click icon delete
  const handleDeleteClick = (customer) => {
    setSelectedCustomer(customer);
    setOpenConfirm(true);
  };

  // Gọi khi bấm "Xác nhận" trong ConfirmDialog
  const handleConfirmDelete = async () => {
    if (!selectedCustomer) return; // tránh lỗi null
    try {
      const res = await axiosClient.put(`/customer/delete/${selectedCustomer.MaKhachHang}`);
      
      toast.success(res.data.message || "Xóa khách hàng thành công");
      // cập nhật lại danh sách
      setCustomers((prev) => prev.filter((c) => c.MaKhachHang !== selectedCustomer.MaKhachHang));

      // reset state
      setOpenConfirm(false);
      setSelectedCustomer(null);

    } catch (err) {
      console.error("Lỗi khi xóa khách hàng:", err);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* ConfirmDialog */}
      <ConfirmDialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa khách hàng "${selectedCustomer?.MaKhachHang}" không?`}
      />

      {/* Thanh trên */}
      <div className="bg-[#2A435D] p-4 flex items-center justify-between">
        <SearchBar placeholder="Tìm kiếm khách hàng..." onSearch={handleSearch}/>
        <button
          className="bg-white text-[#2A435D] font-bold px-6 h-12 rounded-full text-xl shadow-md hover:bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={() => { setShowAddForm(true); setSelectedCustomer(null); }}
        >
          <span>THÊM</span>
        </button>
      </div>

      {/* Bảng */}
      <div className="bg-[#FFF8F0] p-4 m-5 rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] flex-1 overflow-y-auto scrollbar-hide">
        <Table className="overflow-y-auto"
          data={customers.map((c) => ({
            "Mã khách hàng": c.MaKhachHang,
            "Tên khách hàng": c.TenKH,
            "Số điện thoại": c.SDT,
            "Địa chỉ": c.DiaChi,
            "Xem": (
              <img
                src={eye}
                alt="eye"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  setSelectedCustomer(c);
                  setShowDetail(true);
                }}
              />
            ),
            "Sửa": (
              <img
                src={edit}
                alt="edit"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  setSelectedCustomer(c);
                  setShowAddForm(true);
                }}
              />
            ),
            "Xóa": (
              <img
                src={deleteIcon}
                alt="delete"
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleDeleteClick(c)}
              />
            ),
          }))}
        />
      </div>

      {/* Overlay AddOrEditCustomer */}
      {showAddForm && (
        <AddOrEditCustomer
          onClose={() => { setShowAddForm(false); setSelectedCustomer(null); }}
          customer={selectedCustomer}
          onSuccess={(cus) => {
            setCustomers((prev) => {
              const index = prev.findIndex(c => c.MaKhachHang === cus.MaKhachHang);
              // nếu sửa, replace
              if (index !== -1) {
                const newArr = [...prev];
                newArr[index] = cus;
                return newArr;
              }
              // nếu thêm, push
              return [...prev, cus];
            });
          }}
        />
      )}

      {/* Overlay ShowDetailCustomer */}
      {showDetail && (
        <DetailCustomer
          onClose={() => { setShowDetail(false); setSelectedCustomer(null); }}
          customer={selectedCustomer}
        />
      )}
    </div>
  );
}
