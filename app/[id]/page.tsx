"use client";
import { usePathname } from "next/navigation";
import React from "react";
import friends from "@/data/friends.json";
import Image from "next/image";
import QuickCheckIn from "@/component/QuickCheckIn";
import { FaRegBell } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
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
const status_color = (Status: string) => {
  if (Status === "overdue") return "bg-[#EFAD44]";
  else if (Status === "almost due") return "bg-[#EF4444]";
  else return "bg-[#244D3F]";
};
export default function FriendDetails() {
  const pathname: string = usePathname();
  const ID = pathname.split("/").pop();
  const friend = friends.find((fr) => fr.id === Number(ID));
  const statsData = [
    { value: friend?.days_since_contact, label: "Days Since Contact" },
    { value: friend?.goal, label: "Goal (Days)" },
    { value: friend?.next_due_date, label: "Next Due" },
  ];

  return (
    <div className="w-11/12 my-10 mx-auto flex justify-center items-center gap-5">
      <div className="w-2/7">
        {/* profile */}
        <div className="text-center space-y-2 flex flex-col justify-center items-center h-80 bg-white py-4 min-w-70 rounded-lg shadow-sm transition-all duration-1000 hover:shadow-md">
          <div className="relative w-24 h-24 overflow-hidden border-2 border-slate-100 shadow-inner rounded-full mb-1">
            <Image
              src={friend?.picture || ""}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt={friend?.name || ""}
            />
          </div>
          <h3 className="text-xl font-bold">{friend?.name} </h3>
          <div
            className={`font-semibold rounded-full px-4 text-sm py-1 max-w-26 text-bold text-white ${status_color(friend?.status as string)}`}
          >
            {friend?.status}
          </div>
          <div className="flex flex-wrap gap-3">
            {friend?.tags.map((tag, index) => (
              <div
                key={index}
                className="rounded-full px-3 text-sm py-1 bg-[#CBFADB]"
              >
                {tag}
              </div>
            ))}
          </div>
          <i className="w-10/12 text-sm text-gray-800 font-semibold">{`"${friend?.bio}"`}</i>
          <div className="w-10/12 text-sm text-gray-600">
            Preferred: {friend?.email}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          <div className="bg-white w-full p-2 rounded-md shadow flex justify-center items-center gap-2">
            <FaRegBell /> Snooze 2 weeks
          </div>
          <div className="bg-white w-full p-2 rounded-md shadow flex justify-center items-center gap-2">
            <GoArchive /> Archive
          </div>
          <div className="bg-white w-full p-2 text-red-600 rounded-md shadow flex justify-center items-center gap-2">
            <RiDeleteBin6Line /> Delete
          </div>
        </div>
      </div>
      <div className="w-5/7">
        <div className="flex flex-col relative h-80">
          <div className="abosulte top-0  left-0 right-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-center transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="text-xl md:text-3xl font-bold text-[#113e2b] mb-3">
                  {stat.value}
                </span>
                <br />
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <span>Relationship Goal</span>
              <span className="text-sm border border-gray-200 py-1 px-3">
                Edit
              </span>
            </div>
            <p>
              Connect every{" "}
              <span className="font-bold">{friend?.goal} days</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-white mt-5 p-6 rounded-lg">
          <h3 className="mb-3">Quick Check-In</h3>
          <QuickCheckIn friend={friend as friendType}></QuickCheckIn>
        </div>
      </div>
    </div>
  );
}
