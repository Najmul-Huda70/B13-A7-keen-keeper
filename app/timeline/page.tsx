"use client";
import { useTimelineData } from "@/component/TimeLineData";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiChatCircleTextFill } from "react-icons/pi";
import { FcVideoCall } from "react-icons/fc";
const icon = (status: string) => {
  if (status === "Call") return <PiPhoneCallFill />;
  else if (status === "Text") return <PiChatCircleTextFill />;
  else if (status === "Video") return <FcVideoCall />;
};
export default function Timeline() {
  const { data, setData } = useTimelineData();
  return (
    <>
      <div className="my-8 container mx-auto space-y-3">
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
          data.map((item, index: number) => (
            <div key={index} className="flex gap-2 bg-white p-3 rounded-lg">
              <div className="">{icon(item.QuickCheckIn)}</div>
              <div>
                <p>
                  {item.QuickCheckIn} with {item.name}
                </p>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
