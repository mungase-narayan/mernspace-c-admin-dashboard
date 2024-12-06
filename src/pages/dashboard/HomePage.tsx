import React from "react";
import { useAuthStore } from "../../store";
import { CalendarCheck2, CalendarX2, ChartLine, Gift } from "lucide-react";
import CountUp from "react-countup";
import { Statistic } from "antd";
import type { StatisticProps } from "antd";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { TbCoinRupee } from "react-icons/tb";
import SalesChart from "../components/SalesChart";
import RecentOrders from "../components/RecentOrders";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp end={value as number} separator="," />
);
const HomePage = () => {
  const { user } = useAuthStore();
  return (
    <div className="flex flex-col gap-6">
      <code className="flex items-center justify-center ">
        <div className="flex bg-muted gap-2 px-4 rounded-lg relative py-[0.2rem] font-mono text-xl font-semibold">
          <h1 className="">Welcome</h1>
          <h1 className="">{user?.firstName} 😊</h1>
        </div>
      </code>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="flex items-center justify-center gap-4 bg-muted/50 py-4 rounded-xl">
            <div className="p-2 text-[#13C925] bg-[#13C9251F] rounded-2xl">
              <Gift className="size-10" />
            </div>
            <div className="flex flex-col">
              <Statistic
                className="size-8 font-semibold"
                value={100}
                formatter={formatter}
              />
              <h1 className="">Total orders</h1>
              <div className="text-sm flex gap-1">
                <UpCircleOutlined className="text-green-400" />
                <h1 className="text-gray-500/80">4% - 30days</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-muted/50 py-4 rounded-xl">
            <div className="p-2 text-[#14AAFF] bg-[#06C3FF1F] rounded-2xl">
              <ChartLine className="size-10" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-3xl">
                <TbCoinRupee className="pt-1" />
                <Statistic
                  className="size-8 font-semibold"
                  value={100}
                  formatter={formatter}
                />
              </div>
              <h1 className="">Total sale</h1>
              <div className="text-sm flex gap-1">
                <UpCircleOutlined className="text-green-400" />
                <h1 className="text-gray-500/80">4% - 30days</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-muted/50 py-4 rounded-xl">
            <div className="p-2 text-yellow-400 bg-yellow-400/20 rounded-2xl">
              <CalendarCheck2 className="size-10" />
            </div>
            <div className="flex flex-col">
              <Statistic
                className="size-8 font-semibold"
                value={100}
                formatter={formatter}
              />
              <h1 className="">Total Delivered</h1>
              <div className="text-sm flex gap-1">
                <UpCircleOutlined className="text-green-400" />
                <h1 className="text-gray-500/80">4% - 30days</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 bg-muted/50 py-4 rounded-xl">
            <div className="p-2 text-[#F65F42] bg-[#F65F421F] rounded-2xl">
              <CalendarX2 className="size-10" />
            </div>
            <div className="flex flex-col">
              <Statistic
                className="size-8 font-semibold"
                value={100}
                formatter={formatter}
              />
              <h1 className="">Total Canceled</h1>
              <div className="text-sm flex gap-1">
                <DownCircleOutlined className="text-red-300" />
                <h1 className="text-gray-500/80">4% - 30days</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min mt-2">
          <div className="grid auto-rows-min gap-6 md:grid-cols-2">
            <div>
              <SalesChart />
            </div>
            <div className="">
              <RecentOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
