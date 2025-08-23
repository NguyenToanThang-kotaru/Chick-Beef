import React from "react";
import { useState } from "react";
import SearchBar from "@/Components/searchBar";
import Table from "../../../Components/table_cpn";
import eye from "../../../assets/Icon/Eye.png";
import pd from "../../../assets/Icon/product.png";
import AddAccount from "./AddAcount";
export default function Accounts() {
  const [showAddAccount, setShowAddAccount] = useState(false);
  
  return (
    <div style={{zIndex:"0"}}>
      <span style={{backgroundColor:"#2A435D",display:"flex", justifyContent:"space-between",width:"100%", height:"80px",padding:"1rem"}}>
        <SearchBar/>
        <button style={{backgroundColor:"white",borderRadius:"20px",width:"90px",cursor:"pointer",color:"#2A435D",fontWeight:"bold",marginRight:"20px",fontSize:"20px"}}
        onClick={()=>setShowAddAccount(true)}>
          THÊM
        </button>
      </span>

      {showAddAccount && (
        <AddAccount onBack={() => setShowAddAccount(false)} />
      )}  
      
      <div className="bg-[#FFF8F0] p-4 rounded-2xl shadow-md">
          <Table
            data={[
              { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 123456789, city: "Newwwwwwwwwwww", hello: "Gôddddddddd", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
              { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 123456789, city: "Newwwwwwwwwwww", hello: "Gôddddddddd", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
              { name: <img src={pd} alt="eye" className="w-25 h-25 cursor-pointer" />, age: 123456789, city: "Newwwwwwwwwwww", hello: "Gôddddddddd", nickname: "JohnDoe", phone: "123-456-7890", watch: <img src={eye} alt="eye" className="w-6 h-6 cursor-pointer" /> },
          ]}
          />
      </div>
      
    </div>
  );
}
