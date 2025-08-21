import React from "react";
import Table from "../../../Components/table_cpn";
import eye from "../../../assets/Icon/Eye.png";
import pd from "../../../assets/Icon/product.png";
export default function Accounts() {
  return (
    <div>
      <span style={{backgroundColor:"#2A435D",display:"flex", justifyContent:"space-between",width:"100%", height:"35px",padding:"5px"}}>
        <input type="search" placeholder="Tìm kiếm tài khoản" style={{backgroundColor:"white",borderRadius:"20px",marginLeft:"20px",width:"30%",padding:"10px"}}></input>
        <button style={{backgroundColor:"white",borderRadius:"20px",width:"50px",cursor:"pointer",color:"2A435D",fontWeight:"bold",fontFamily:"Roboto",marginRight:"20px"}}>Thêm</button>
      </span>
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
