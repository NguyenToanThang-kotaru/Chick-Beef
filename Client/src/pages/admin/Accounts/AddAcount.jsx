import React from "react";
// import { useState } from "react";


export default function AddAccount() {
    // const [showAddAccount, setShowAddAccount] = useState(false);
    return(
        <div className="add-overlay" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
            <div className="addForm" style={{margin:"40px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.2)",padding:"20px 30px",width:"400px"}}>
                <h2 style={{fontSize:"28px",color:"#2A435D",fontWeight:"bold",borderBottom:"4px solid #2A435D"}}>Thêm Tài Khoản</h2>
                <form style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <label htmlFor="ID">ID</label>
                    <input type="text" placeholder="Nhập ID" style={styleInputSelect}></input>
                    <label htmlFor="Username">Tên đăng nhập</label>
                    <input type="text" placeholder="Nhập tên đăng nhập" style={styleInputSelect}></input>
                    <label htmlFor="Password">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu" style={styleInputSelect}></input>
                    <label htmlFor="Position">Chức vụ</label>
                    <select style={styleInputSelect}>
                        <option>Quản lý</option>
                        <option>Nhân viên</option>
                    </select>
                    <label htmlFor="Role">Vai trò</label>
                    <select style={styleInputSelect}>
                        <option>Admin</option>
                        <option>User</option>

                    </select>
                    <div className="Action" style={{display:"flex",flexDirection:"column"}}>
                        <button type="submit">
                            Xác nhận thêm
                        </button>
                        <button type="button">
                            Thoát
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
const styleInputSelect={
    padding:"8px",
    borderRadius:"6px",
    border:"1px solid black",
    backgroundColor:"white"

}