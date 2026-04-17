"use client";
import React from "react";
import { MdAddCall, MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { useTimelineData } from "./TimeLineData";
import toast from "react-hot-toast";
import NotFound from "@/app/not-found";

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

type friendType = {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: string;
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
};

type Timeline = {
  QuickCheckIn?: string;
  name?: string;
  date?: string;
};

export default function QuickCheckIn({ friend }: { friend: friendType }) {
  const context = useTimelineData();

  if (!context) {
    return <NotFound />;
  }
  const { setData } = context;

  const addTimeline = (contact: string) => {
    const currentDate = new Date();

    const newTimeline: Timeline = {
      QuickCheckIn: contact,
      name: friend.name,
      date: currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    toast.success(`${contact} with ${friend.name}`);

    setData((prevData) => [...prevData, newTimeline as any]);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
      {contactData.map((item, index) => (
        <button
          key={index}
          onClick={() => addTimeline(item.contact)}
          className="flex-1 w-full border py-4 cursor-pointer rounded-lg border-gray-300 flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-50 transition-colors"
        >
          <div className={`${item.iconColor} text-xl`}>{item.icon}</div>
          <p>{item.contact}</p>
        </button>
      ))}
    </div>
  );
}
