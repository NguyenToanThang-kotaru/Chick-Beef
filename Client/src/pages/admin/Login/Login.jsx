function handleLogin() {
  // alert("Đang xử lý đăng nhập...");
  sessionStorage.setItem("isAdmin", "true");
  window.location.href = "/admin";
}

export default function AdminLogin() {
  return (
    <div className="bg-mainRed w-screen h-screen flex justify-center items-center">
      <div
        style={{ padding: "10%", paddingTop: "2%" }}
        className="bg-[#FFF8EE] rounded-xl w-1/2 h-3/5"
      >
        <div className="w-full text-5xl text-mainRedfont-bold text-center mb-15">
          Đăng nhập
        </div>

        <div className="w-full">
          <h2 className="mb-4">Tài khoản:</h2>
          <input
            id="usr"
            type="text"
            className="mb-4 bg-[#FFFFFF] w-full rounded-xl p-3 inset-shadow-xs/10"
            style={{
              boxShadow:
                "inset 1px 0 6px rgba(0,0,0,0.1), inset -1px 0 1px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <div className="w-full">
          <h2 className="mb-4">Mật khẩu:</h2>
          <input
            id="pwd"
            type="text"
            className="bg-[#FFFFFF] w-full rounded-xl p-3"
            style={{
              boxShadow:
                "inset 1px 0 6px rgba(0,0,0,0.1), inset -1px 0 1px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div className="w-full text-center mt-5">
          <button
            onClick={handleLogin}
            className="
            bg-mainRed
            rounded-xl 
            w-3/5 
            text-4xl 
            text-white 
            p-5
            shadow-md
            transition 
            duration-300 
            ease-in-out 
            hover:bg-[#b12a2a] 
            hover:shadow-xl
            hover:scale-105
            active:scale-95
            active:bg-[#a02222]
            active:shadow-inner
            "
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
