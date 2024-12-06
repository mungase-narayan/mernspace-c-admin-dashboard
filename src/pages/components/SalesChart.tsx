"use client";
import React from "react";

import { ChartLine, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { Avatar } from "antd";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SalesChart = () => {
  return (
    <Card className="bg-muted/50 border-none">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <Avatar
            className="text-[#14AAFF] bg-[#06C3FF1F]"
            shape="square"
            size={"large"}
            icon={<ChartLine />}
          />
          <div>
            <CardTitle>Sales Chart</CardTitle>
            <CardDescription>January - 2025</CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar
            className="text-primary bg-primary-foreground"
            size="large"
            icon={"S"}
          />
          <Avatar className="text-white bg-primary" size="large" icon={"M"} />
          <Avatar
            className="text-primary bg-primary-foreground"
            size="large"
            icon={"T"}
          />
        </div>
      </div>
      <CardContent>
        <ChartContainer className="mt-3" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="#14AAFF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="mt-5">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total sales for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SalesChart;
