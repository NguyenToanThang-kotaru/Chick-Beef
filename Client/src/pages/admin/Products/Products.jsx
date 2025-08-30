import React, { useEffect, useState } from "react";
import Table from "../../../Components/table_cpn";
import SearchBar from "../../../Components/searchBar";
import AddOrEditProduct from "./AddOrEditProduct";
import eye from "../../../assets/Icon/Eye.png";
import edit from "../../../assets/Icon/Edit.png";
import deleteIcon from "../../../assets/Icon/delete.png";
import axiosClient from "../../../middleware/axiosClient";
import { toast } from "react-toastify";
import ConfirmDialog from "../../../Components/dialog/confirmDialog";

export default function Products() {


  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleDeleteClick = (product) => {
    const deleteProduct = async () => {
      try {
        const res = await axiosClient.put(`/product/delete/${product.MaSP}`);
        toast.success(res.data.message || "Xóa sản phẩm thành công");
        // cập nhật lại danh sách
        setProducts((prev) => prev.filter((p) => p.MaSP !== product.MaSP));
        setOpenConfirm(false);
      } catch (err) {
        console.error("Lỗi khi xóa sản phẩm:", err);
        toast.error("Xóa sản phẩm thất bại");
      }
      // console.log("Xóa sản phẩm:", product);
    }; deleteProduct();
  };


  const handleSearch = (value) => {
    const fetchSearchedProducts = async () => {
      try {
        const res = await axiosClient.get(`/product/search?keyword=${value}`);
        setProducts(res.data); // lưu vào state
        console.log("Sản phẩm tìm kiếm:", res.data);
      } catch (err) {
        console.error("Lỗi khi tìm kiếm sản phẩm:", err);
      }
    }
    fetchSearchedProducts();
  }

  // Lấy danh sách sản phẩm

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosClient.get("/product");
        setProducts(res.data); // lưu vào state
        console.log("Sản phẩm:", res.data);
      } catch (err) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", err);
      }
    };
    fetchProducts();
    // Gọi API lấy danh sách sản phẩm và cập nhật state
    // Ví dụ:
    // fetchProducts().then(data => setProducts(data));
  }, []);

  if (showAddForm) {
    return <AddOrEditProduct onBack={() => setShowAddForm(false)} />;
  }
  const data = { products };
  console.log(data);

  return (

    <div className="h-full flex flex-col">
      <ConfirmDialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleDeleteClick}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa sản phẩm "${selectedProduct?.TenSP}" không?`}
      />
      <div className="bg-[#2A435D] p-4 flex items-center justify-between h-[75px]">
        <SearchBar placeholder="Tìm kiếm sản phẩm..." onSearch={handleSearch} />
        <button
          className="bg-white text-[#2A435D] font-bold px-6 h-12 rounded-full text-xl shadow-md hover:bg-gray-100 flex items-center justify-center"
          onClick={() => setShowAddForm(true)}
        >
          <span>THÊM</span>
        </button>
      </div>

      <div className="bg-[#FFF8F0] m-5 rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)] flex-1 overflow-y-auto scrollbar-hide">
        <Table className=""
          data={products.map((item, index) => (
            {
              Id: index + 1,
              Image: <img src={'../src/assets/' + item.AnhSP} alt="eye" className="w-20 h-20 cursor-pointer" />,
              Name: item.TenSP,
              Price: Number(item.GiaSP).toLocaleString('vi-VN') + " VND",
              watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />,
              edit: <img src={edit} alt="eye" className="w-6 h-6 cursor-pointer" onClick={()=>{setSelectedProduct(item);}}/>,
              delete: <img src={deleteIcon} alt="eye" className="w-6 h-6 cursor-pointer" onClick={() => { setOpenConfirm(true); setSelectedProduct(item) }} />
            }
          ))}
        />
      </div>
    </div>
  );
}