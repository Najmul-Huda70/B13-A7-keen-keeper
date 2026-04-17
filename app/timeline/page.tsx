"use client";
import { useTimelineData } from "@/component/TimeLineData";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiChatCircleTextFill } from "react-icons/pi";
import { FcVideoCall } from "react-icons/fc";
import { useState } from "react";
const icon = (status: string) => {
  if (status === "Call") return <PiPhoneCallFill />;
  else if (status === "Text") return <PiChatCircleTextFill />;
  else if (status === "Video") return <FcVideoCall />;
};
const iconColor = (status: string) => {
  if (status === "Call") return "text-blue-400";
  else if (status === "Text") return "text-orange-400";
  else if (status === "Video") return "";
};
export default function Timeline() {
  const context = useTimelineData();
  if (!context) {
    return <div>Loading or Provider missing...</div>;
  }
  const { data } = context;
  const [filterTimline, setTimeline] = useState("all");
  const filterData = data.filter((item) => {
    if (filterTimline === "all") return true;
    return item.QuickCheckIn?.toLowerCase() === filterTimline;
  });
  return (
    <>
      <div className="my-8 w-10/12 mx-auto space-y-3">
        <h1 className="text-3xl font-semibold">Timeline </h1>
        <div className="flex flex-col gap-1 w-56">
          <label
            htmlFor="timelineFilter"
            className="text-md font-medium text-gray-700"
          >
            Filter timeline
          </label>

          <select
            id="timelineFilter"
            name="timelineFilter"
            defaultValue={filterTimline}
            onChange={(e) => setTimeline(e.currentTarget.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
           transition"
          >
            <option value="all">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>
        {data.length > 0 &&
          filterData.map((item, index: number) => (
            <div
              key={index}
              className="flex gap-2 hover:bg-gray-100 bg-white p-3 rounded-lg"
            >
              <div
                className={`flex justify-center items-center text-2xl ${iconColor(item.QuickCheckIn ?? "")}`}
              >
                {icon(item.QuickCheckIn ?? "")}
              </div>
              <div className="text-gray-700">
                <p>
                  <span className="font-bold">{item.QuickCheckIn}</span> with{" "}
                  {item.name}
                </p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
