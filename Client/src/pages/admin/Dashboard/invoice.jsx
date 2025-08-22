import { useState } from "react";
import Table from "../../../Components/table_cpn";
import eye from "../../../assets/Icon/Eye.png";
import SearchBar from "@/Components/searchBar";

export default function Invoices() {
  const [active, setActive] = useState("taiquan"); // mặc định chọn "Tại quán"

  return (
    <div>
      <div className="flex justify-between mb-2">
        {/* Buttons */}
        <div className="flex gap-5">
          <button
            onClick={() => setActive("taiquan")}
            className={`cursor-pointer w-30 border p-2 font-bold rounded-4xl transition ${
              active === "taiquan"
                ? "bg-[#CC3333] text-white border-[#CC3333]"
                : "text-[#2A435D] hover:bg-gray-100"
            }`}
          >
            Tại quán
          </button>
          <button
            onClick={() => setActive("mangve")}
            className={`cursor-pointer w-30 border p-2 font-bold rounded-4xl transition ${
              active === "mangve"
                ? "bg-[#CC3333] text-white border-[#CC3333]"
                : "text-[#2A435D] hover:bg-gray-100"
            }`}
          >
            Mang về
          </button>
        </div>

        {/* Search */}
        <SearchBar placeholder="Value..." />
      </div>

      {/* Table */}
      <Table
        data={[
          {
            ID: "00000",
            name: "Nguyen van A",
            total: 9999,
            Status: "Pending",
            watch: (
              <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            ),
          },
          {
            ID: "00001",
            name: "Nguyen van B",
            total: 8888,
            Status: "Done",
            watch: (
              <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            ),
          },
          {
            ID: "00002",
            name: "Nguyen van C",
            total: 7777,
            Status: "Pending",
            watch: (
              <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" />
            ),
          },
        ]}
      />
    </div>
  );
}
