"use client";
import { createContext, useContext, useState } from "react";
type QuickCheckIn = "Call" | "Text" | "Video";
type Timeline = {
  QuickCheckIn?: QuickCheckIn;
  name?: string;
  date?: string;
};
type TimelineContextType = {
  data: Timeline[];
  setData: React.Dispatch<React.SetStateAction<Timeline[]>>;
};
const TimelineContext = createContext<TimelineContextType | null>(null);
export default function TimelineData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<Timeline[]>([]);
  return (
    <TimelineContext.Provider value={{ data, setData }}>
      {children}
    </TimelineContext.Provider>
  );
}
export const useTimelineData = () => useContext(TimelineContext);
