"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart3 } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Timeline", href: "/timeline", icon: <Clock size={18} /> },
    { name: "Stats", href: "/stats", icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-[#1a2e35]">Keen</span>
        <span className="text-xl font-bold text-[#2d5a4c]">Keeper</span>
      </div>
      <div className="flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-[#2d4a3e] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
