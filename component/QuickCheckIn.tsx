"use client";
// import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { useTimelineData } from "./TimeLineData";
import toast from "react-hot-toast";
const contactData = [
  {
    icon: <MdAddCall />,
    iconColor: "text-blue-400",
    contact: "Call",
  },
  {
    icon: <MdOutlineTextsms />,
    iconColor: "text-orange-400",
    contact: "Text",
  },
  {
    icon: <FiVideo />,
    iconColor: "text-green-400",
    contact: "Video",
  },
];

export default function QuickCheckIn({ friend }) {
  const { data, setData } = useTimelineData();
  const addTimeline = (contact: string) => {
    const currentDate = new Date();
    const newTimeline = {
      QuickCheckIn: contact,
      name: friend.name,
      date: currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    toast.success(`${newTimeline.QuickCheckIn} with ${newTimeline.name}`);
    setData([...data, newTimeline]);
  };
  return (
    <div className="flex justify-between items-center gap-5">
      {contactData.map((data, index) => (
        <button
          key={index}
          onClick={() => addTimeline(data.contact)}
          className="flex-1 border py-4 cursor-pointer rounded-lg border-gray-300 flex flex-col justify-center items-center bg-gray-100"
        >
          <div className={`${data.iconColor}`}>{data.icon}</div>
          <p>{data.contact}</p>
        </button>
      ))}
    </div>
  );
}
