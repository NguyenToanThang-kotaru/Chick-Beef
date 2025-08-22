import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../../../../src/index.css";

export default function statictics() {
  const data = [
    { name: "Mang về", value: 60 },
    { name: "Tại quán", value: 40 },
  ];
  const COLORS = ["#FACC15", "#22C55E"]; // vàng và xanh lá

  return (
    <div className="w-full flex max-h-full gap-5 ">
      {/* Trạng thái tồn kho */}
      {/* <div className="bg-white p-4 h-10/11 w-2/7 rounded-2xl shadow-md">
        <h2 className="font-bold mb-5 text-mainBlue">Trạng Thái Tồn Kho</h2>

        <div className="space-y-2 h-full overflow-y-auto">
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 1</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 2</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 3</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 4</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 5</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 6</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 7</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
          <div className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold">
            <div>
              <div>Nguyên liệu 8</div>
              <div>Còn 2 (Đơn vị tính)</div>
            </div>
            <div className="text-center ">Sắp hết</div>
          </div>
        </div>
      </div> */}
      <div className="bg-white p-4 h-full w-2/7 rounded-2xl shadow-md flex flex-col">
        <h2 className="font-bold mb-5 text-mainBlue">Trạng Thái Tồn Kho</h2>

        <div className="space-y-2 flex-1 overflow-y-auto pr-2 max-h-[467px]">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="bg-mainRed border-4 border-[#8C0004] justify-between items-center flex text-white p-2 rounded-3xl font-bold"
            >
              <div>
                <div>Nguyên liệu {i + 1}</div>
                <div>Còn 2 (Đơn vị tính)</div>
              </div>
              <div className="text-center">Sắp hết</div>
            </div>
          ))}
        </div>
      </div>



      <div className="h-full w-full flex gap-5 flex-col max-h-467" >
        <div className="flex h-2/3 gap-5 w-full">
          {/* Doanh thu theo tháng */}
          <div className="bg-white p-4 rounded-2xl shadow-md w-3/4">
            <h2 className="font-bold mb-2 border-b-mainBlue border-b-4 text-mainBlue text-2xl">
              Doanh Thu Theo Tháng
            </h2>
            <div className="flex flex-col justify-between h-10/12">
              {/* Danh sách ngày + giá */}
              <ul className="space-y-1 overflow-y-auto">
                <li className="flex font-bold text-2xl text-mainBlue justify-between">
                  <span>17/8</span>
                  <span>18.000.000 VND</span>
                </li>
                <li className="flex font-bold text-2xl text-mainBlue justify-between">
                  <span>16/8</span>
                  <span>18.000.000 VND</span>
                </li>
                <li className="flex font-bold text-2xl text-mainBlue justify-between">
                  <span>15/8</span>
                  <span>18.000.000 VND</span>
                </li>
                <li className="flex font-bold text-2xl text-mainBlue justify-between">
                  <span>15/8</span>
                  <span>18.000.000 VND</span>
                </li>                <li className="flex font-bold text-2xl text-mainBlue justify-between">
                  <span>15/8</span>
                  <span>18.000.000 VND</span>
                </li>
              </ul>

              {/* Tổng */}
              <p className="mt-2 text-left font-bold text-2xl text-mainBlue">
                Tổng: 18.000.000 VND
              </p>
            </div>
          </div>

          {/* Biểu đồ tỉ lệ */}
          <div className="bg-white p-4 rounded-2xl w-1/4 shadow-md">
            <h2 className="font-bold mb-2">Tỉ Lệ</h2>
            <div className="flex justify-center">
              {/* Bạn có thể thay bằng chart từ recharts */}
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            <div className="mt-2 flex-col text-center text-sm">
              <div className="flex items-center justify-center gap-1">
                <div className="w-3 h-3 bg-yellow-300 inline-block"></div> Mang
                về
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="w-3 h-3 bg-green-500 inline-block"></div> Tại
                quán
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 món bán chạy */}
        <div className="bg-white h-1/3 p-4 rounded-2xl shadow-md ">
          <h2 className="font-bold mb-2 text-2xl text-mainBlue w-full border-b-4 border-b-mainBlue">
            Top 5 Món Bán Chạy
          </h2>
          <ul className="space-y-1">
            <li>Món 1: 55</li>
            <li>Món 2: 40</li>
            <li>Món 3: 32</li>
            <li>Món 4: 19</li>
            <li>Món 5: 9</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
