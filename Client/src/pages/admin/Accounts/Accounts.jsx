import React from "react";

export default function Accounts() {
  return (
    <div>
        <span style={{backgroundColor:"#2A435D",display:"flex", justifyContent:"space-between",width:"100%", height:"35px",padding:"5px"}}>
          <input type="search" placeholder="Tìm kiếm tài khoản" style={{backgroundColor:"white",borderRadius:"20px",marginLeft:"20px",width:"30%",padding:"10px"}}></input>
          <button style={{backgroundColor:"white",borderRadius:"20px",width:"50px",cursor:"pointer",color:"2A435D",fontWeight:"bold",fontFamily:"Roboto",marginRight:"20px"}}>Thêm</button>
        </span>
        <h1 className="text-2xl">This is Accounts Page</h1>
        <h2>hello</h2>
        <h1>Hello i am Mai trung </h1>
        <h1>This is my page</h1>
    </div>
  );
}
