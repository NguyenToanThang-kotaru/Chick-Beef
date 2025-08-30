import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useDropzone } from 'react-dropzone';
import BackButton from "../../../Components/backButton";
import SelectIngredient from "./SelectIngredient";
import axiosClient from "../../../middleware/axiosClient";

// SELECT 
//     sp.MaSP,
//     sp.TenSP,
//     GROUP_CONCAT(CONCAT(nl.TenNL, ' (', ct.DinhLuongNL, ')') SEPARATOR ', ') AS CongThuc
// FROM congthuc ct
// INNER JOIN sanpham sp ON ct.MaSP = sp.MaSP 
// INNER JOIN nguyenlieu nl ON ct.MaNL = nl.MaNL
// WHERE ct.IsDeleted = 0
// GROUP BY sp.MaSP, sp.TenSP;


export default function AddOrEditProduct({ data = null, onClose, onAdd }) {
  const [showSelectIngredient, setShowSelectIngredient] = useState(false);
  const [formData, setFormData] = useState();
  useEffect(() => {
    if (data) {
      setFormData({
        AnhSP: data.AnhSP || "",
        MaSP: data.MaSP || "",
        TenSP: data.TenSP || "",
        GiaSP: data.GiaSP || "",
        MoTa: data.MoTa || "",
        CongThuc: data.CongThuc || [],
        PhanLoai: data.PhanLoai || []
      });
    }
  }, [data]);

  const handleAddProduct = (MaSP, TenSP, GiaSP, MoTaSP, AnhSP) => {
    axiosClient.post('/product', { MaSP, TenSP, GiaSP, MoTaSP, AnhSP })
      .then(response => {
        console.log('Thêm sản phẩm thành công:', response.data);
        // Thực hiện các hành động sau khi thêm sản phẩm thành công (nếu cần)
      })
      .catch(error => {
        console.error('Lỗi khi thêm sản phẩm:', error);
        // Xử lý lỗi (nếu cần)
      });
    // Logic to add product
  }


  const handleSubmit = (data) => {
    if (onAdd) {
      handleAddProduct(data.MaSP, data.TenSP, data.GiaSP, data.MoTaSP, data.AnhSP);
    } // gửi data ra ngoài
    if (onClose) onClose();     // đóng form
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#2A435D] p-4 flex justify-end w-full h-[75px]">
        <BackButton url="./products" />
      </div>

      <div className="bg-[#FFF8F0] m-2 flex flex-1 overflow-y-auto">
        {/* Ảnh món ăn */}
        <div className="flex flex-col justify-start rounded-4xl m-5 px-10 py-5 gap-4 shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] flex-1 overflow-y-auto scrollbar-hide">
          <label className="block text-3xl text-[#2A435D] font-bold ">Ảnh món ăn</label>
          <div className="w-full aspect-square bg-white shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] rounded-4xl flex items-center justify-center cursor-pointer hover:bg-gray-50 ">
            <input
              type="file"
              name="AnhSP"
              // value={formData.AnhSP}
              // onChange={handleChange}
              className="bg-white w-full px-4 py-2"
              placeholder="Link ảnh món ăn"
            />
          </div>
          <button onClick={handleSubmit} className="w-full bg-green-500 text-white text-bold py-3 my-3 rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] hover:bg-green-600">
            Xác Nhận Thêm / Lưu Thay Đổi
          </button>
        </div>

        {/* Form nhập thông tin */}
        <div className="space-y-4 m-5 px-10 py-5 rounded-4xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] flex-2 overflow-y-auto scrollbar-hide">
          {/* Tên món ăn */}
          <div>
            <label className="block text-3xl text-[#2A435D] font-bold mb-1">Tên món ăn</label>
            <input type="text" className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2" />
          </div>
          {/* Giá */}
          <div>
            <label className="block text-3xl text-[#2A435D] font-bold mb-1">Giá</label>
            <input type="number" className="bg-white w-full rounded-full shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2" />
          </div>
          {/* Mô tả */}
          <div>
            <label className="block text-3xl text-[#2A435D] font-bold mb-1">Mô tả</label>
            <textarea className="bg-white w-full rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-4 py-2 h-25 "></textarea>
          </div>

          {/* Công thức */}
          <div>
            <label className="block text-3xl text-[#2A435D] font-bold mb-1">Công thức</label>
            <div className="w-full rounded-2xl">
              <div className="overflow-auto scrollbar-hide bg-white w-full rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] h-40 px-4 py-2 ">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="">Nguyên liệu 1</td>
                      <td className="">2</td>
                      <td className="">kg</td>
                    </tr>
                    <tr>
                      <td className="">Nguyên liệu 1</td>
                      <td className="">2</td>
                      <td className="">kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button
              onClick={() => setShowSelectIngredient(true)}
              className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)]"
            >
              Chọn nguyên liệu thêm vào công thức
            </button>
          </div>

          {/* Phân loại */}
          <div>
            <label className="block text-3xl text-[#2A435D] font-bold mb-1">Phân loại</label>
            <div className="bg-white w-full rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] px-5 py-2 space-y-3">
              <div>
                <p className="font-bold border-b-3 border-[#2A435D] text-[#2A435D] text-xl">Foods</p>
                <div className="space-y-1 overflow-y-auto max-h-50 px-5 py-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Fastfood</span>
                    <hr></hr>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Blabla</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Blabla</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="font-bold border-b-3 border-[#2A435D] text-[#2A435D] text-xl">Drinks</p>
                <div className="space-y-1 overflow-y-auto max-h-50 px-5 py-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Blabla</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Blabla</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>Blabla</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị thêm nguyên liệu*/}
      {showSelectIngredient && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-20 ">
          <SelectIngredient
            onClose={() => setShowSelectIngredient(false)}
            onAdd={() => setShowSelectIngredient(false)}
          />
        </div>
      )}
    </div>
  );
}

