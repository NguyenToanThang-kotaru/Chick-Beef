import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Statictis from "./Statictics";
import Invoices from "./Invoice";
export default function Dashboard() {
  return (
    <div className="p-6 h-full">
      <Tabs defaultValue="thongke" className="w-full h-full">
        {/* Thanh Tab */}
        <TabsList className="bg-gray-200 rounded-lg p-1">
          <TabsTrigger value="thongke" className="font-bold text-mainBlue px-4 py-2">
            THỐNG KÊ
          </TabsTrigger>
          <TabsTrigger value="hoadon" className="px-4 py-2 font-bold text-mainBlue">
            HÓA ĐƠN
          </TabsTrigger>
        </TabsList>

        {/* Tab Thống Kê */}
        <TabsContent
          value="thongke"
          className="w-full border-2 p-10 rounded-4xl max-h-full"
        >
          <Statictis />
        </TabsContent>

        {/* Tab Hóa Đơn */}
        <TabsContent
          value="hoadon"
          className="w-full border-2 p-10 rounded-4xl max-h-full"
        >
          <Invoices />
        </TabsContent>
      </Tabs>
    </div>
  );
}
