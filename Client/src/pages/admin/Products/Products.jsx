import React, { useState } from "react";
import Table from "../../../Components/table_cpn";
import SearchBar from "../../../Components/searchBar";
import AddOrEditProduct from "./AddOrEditProduct";
import eye from "../../../assets/Icon/Eye.png";
import pd from "../../../assets/Icon/product.png";
export default function Products() {
  const [showAddForm, setShowAddForm] = useState(false);
  if (showAddForm) {
    return <AddOrEditProduct onBack={() => setShowAddForm(false)} />;
  }

  return (
    <div className="h-full">
      <div className="bg-[#2A435D] p-4 flex items-center justify-between">
        <SearchBar></SearchBar>
        <button 
          className="bg-white text-[#2A435D] font-bold px-6 h-12 rounded-full text-xl shadow-md hover:bg-gray-100 flex items-center justify-center"
          onClick={() => setShowAddForm(true)}
        >
          <span>THÊM</span>
        </button>

      </div>
      <div className="bg-[#FFF8F0] p-4 m-5 rounded-2xl shadow-[0_1px_4px_3px_rgba(0,0,0,0.25)]">
        <Table
          data={[
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
            { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 30, city: "New York", hello: "world", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
          ]}
        />
      </div>
    </div>
  );
}