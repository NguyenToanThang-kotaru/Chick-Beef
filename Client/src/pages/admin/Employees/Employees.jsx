import React, { useState } from "react";
import Table from "../../../Components/table_cpn";
import SearchBar from "../../../Components/searchBar";
import AddOrEditEmployee from "./AddOrEditEmployee";
import eye from "../../../assets/Icon/Eye.png";
import ConfirmDialog from "../../../Components/dialog/confirmDialog";

export default function Employees() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Fake data test
  const employees = [
    { id: 1, name: "Nguyễn Văn A", address: "abc", phone: "0987654321", role: "Quản lý" },
    { id: 2, name: "Nguyễn Văn B", address: "def", phone: "0912345678", role: "Nhân viên" },
    { id: 3, name: "Nguyễn Văn C", address: "xyz", phone: "0933333333", role: "Nhân viên" },
  ];

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setOpenConfirm(true);
  };

  const handleConfirmDelete = () => {
    alert(`Đã xóa nhân viên: ${selectedEmployee?.name}`);
    setOpenConfirm(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="h-full">
      {/* ConfirmDialog */}
      <ConfirmDialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa nhân viên "${selectedEmployee?.name}" không?`}
      />

      {/* Thanh trên */}
      <div className="bg-[#2A435D] p-4 flex items-center justify-between">
        <SearchBar />
        <button
          className="bg-white text-[#2A435D] font-bold px-6 h-12 rounded-full text-xl shadow-md hover:bg-gray-100 flex items-center justify-center"
          onClick={() => setShowAddForm(true)}
        >
          <span>THÊM</span>
        </button>
      </div>

      {/* Bảng */}
      <div className="bg-[#FFF8F0] p-4 m-5 rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)]">
        <Table
          data={employees.map((e) => ({
            ID: e.id,
            "Tên nhân viên": e.name,
            "Địa chỉ": e.address,
            "Số điện thoại": e.phone,
            "Vai trò": e.role,
            "Xem": <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />,
            "Sửa": <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />,
            "Xóa": (
              <img
                src={eye}
                alt="delete"
                className="w-6 h-6 cursor-pointer"
                onClick={() => handleDeleteClick(e)} // 👈 mở confirm dialog
              />
            ),
          }))}
        />
      </div>

      {/* Overlay AddOrEditEmployee */}
      {showAddForm && <AddOrEditEmployee onClose={() => setShowAddForm(false)} />}
    </div>
  );
}
