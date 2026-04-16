"use client";
// import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { useTimelineData } from "./TimeLineData";
const contactData = [
  {
    icon: <MdAddCall />,
    contact: "Call",
  },
  {
    icon: <MdOutlineTextsms />,
    contact: "Text",
  },
  {
    icon: <FiVideo />,
    contact: "Video",
  },
];
export default function QuickCheckIn({ friend }) {
  const { data, setData } = useTimelineData();
  const addTimeline = (contact: string) => {
    const newTimeline = {
      QuickCheckIn: contact,
      name: friend.name,
      date: friend.next_due_date,
    };
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
          <i>{data.icon}</i>
          <p>{data.contact}</p>
        </button>
      ))}
    </div>
  );
}
