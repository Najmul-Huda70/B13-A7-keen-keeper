import { Plus } from "lucide-react";
import friends from "@/data/friends.json";
import Image from "next/image";
import Link from "next/link";

const status_color = (Status: string) => {
  if (Status === "overdue") return "bg-[#EFAD44]";
  else if (Status === "almost due") return "bg-[#EF4444]";
  else return "bg-[#244D3F]";
};
export default function Main() {
  const statsData = [
    { value: friends.length, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-[#1e293b] mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-slate-500 text-s text-center m md:text-base max-w-lg mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Add Friend Button */}
        <button className="flex items-center gap-2 bg-[#1e4636] hover:bg-[#153327] text-white px-6 py-3 rounded-md transition-all font-medium text-sm">
          <Plus size={18} />
          Add a Friend
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-center transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <span className="text-5xl md:text-6xl font-extrabold text-[#113e2b] mb-3">
              {stat.value}
            </span>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="text-[#1F2937]">
        {/* your friends */}
        <h3 className="text-2xl font-semibold">Your Friends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center m-4 gap-6">
          {friends.map((friend) => (
            <Link
              key={friend.id}
              href={`/${friend.id}`}
              className="bg-white flex justify-center items-center rounded-lg shadow-sm hover:shadow-md shadow-gray-300 py-8  transition-all hover:-translate-y-1 duration-800 ease-in-out cursor-pointer"
            >
              <div className="text-center space-y-2 flex flex-col justify-center items-center">
                <div className="relative w-24 h-24 overflow-hidden border-2 border-slate-100 shadow-inner rounded-full mb-6">
                  <Image
                    src={friend.picture}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={friend.name}
                  />
                </div>
                <h3 className="text-xl font-bold">{friend.name} </h3>
                <p className="text-[#64748B]">
                  {friend.days_since_contact}d ago
                </p>
                <div className="flex flex-wrap gap-3">
                  {friend.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="rounded-full px-3 text-sm py-1 bg-[#CBFADB]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div
                  className={`font-semibold rounded-full px-4 text-sm py-1 max-w-26 text-bold text-white ${status_color(friend.status as string)}`}
                >
                  {friend.status}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
