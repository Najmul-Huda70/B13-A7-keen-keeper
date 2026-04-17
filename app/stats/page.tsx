"use client";
import { useTimelineData } from "@/component/TimeLineData";
import React from "react";
import { Cell, LabelList, Legend, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
export default function Stats({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const context = useTimelineData();
  if (!context) {
    return <div>Loading or Provider missing...</div>;
  }
  const { data } = context;
  let call: number = 0,
    text: number = 0,
    video: number = 0;
  for (const item of data) {
    if (item.QuickCheckIn === "Call") call++;
    if (item.QuickCheckIn === "Text") text++;
    if (item.QuickCheckIn === "Video") video++;
  }
  type chartType = {
    name: string;
    value: number;
  };
  const chartData: chartType[] = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];
  const COLORS = ["#8b5cf6", "#1f2937", "#22c55e"];
  return (
    <>
      <div className="w-8/12 my-2 sm:my-5 mx-auto">
        <h1 className="text-3xl font-semibold">Friendship Analytics</h1>
        {data.length > 0 && (
          <div className="w-full max-h-100.5 my-8 bg-white rounded-xl p-4">
            <p className="text-xl font-semibold text-gray-600">
              By Interaction Type
            </p>
            <div className="flex justify-center items-center">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "50vh",
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
                  <LabelList
                    dataKey="value"
                    position="inside"
                    fill="#fff"
                    fontSize={12}
                    formatter={(value) => `${value}`}
                  />
                </Pie>
                <RechartsDevtools />
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        )}
        {data.length === 0 && (
          <div className="w-full mt-5 flex flex-col items-center justify-center p-10 bg-white border-2 border-dashed border-gray-200 rounded-2xl transition-all hover:border-gray-300">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 relative">
              <span className="text-4xl animate-pulse">📅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No Friendship Yet
            </h3>
          </div>
        )}
      </div>
    </>
  );
}
