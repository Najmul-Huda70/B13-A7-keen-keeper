"use client";
import { useTimelineData } from "@/component/TimeLineData";
import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipIndex,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

export default function Stats({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const { data, setData } = useTimelineData();
  let call = 0,
    text = 0,
    video = 0;
  for (const item of data) {
    if (item.QuickCheckIn === "Call") call++;
    if (item.QuickCheckIn === "Text") text++;
    if (item.QuickCheckIn === "Video") video++;
  }
  const chartData = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];
  const COLORS = ["#8b5cf6", "#1f2937", "#22c55e"];
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">Friendship Analytics</h1>
      <div className="w-full h-100.5 my-8 bg-white rounded-xl p-4 flex justify-center items-center">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "60vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={chartData}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          >
            {chartData.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <RechartsDevtools />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
