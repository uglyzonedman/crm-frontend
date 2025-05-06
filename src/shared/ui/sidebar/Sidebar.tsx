import React from "react";
import logo from "@/src/assets/images/Logo.png";
import support from "@/src/assets/images/Support.png";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navigations } from "./data";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white   py-8 m-5 flex flex-col justify-between rounded-3xl">
      <div>
        <div className="px-6">
          <Image src={logo} alt="logo" />
        </div>
        <nav className="flex flex-col gap-2 mt-10 px-3">
          {navigations.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="flex items-center gap-2 py-2 px-4  hover:bg-[#EBF3FF] rounded-2xl text-gray-800 mb-4"
            >
              {item.icon}
              <span className="text-[#7D8592] font-semibold text-base">
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="relative flex justify-center">
        <Image src={support} alt="support" />
        <button className="absolute bottom-4 cursor-pointer left-1/2 transform -translate-x-1/2 flex items-center bg-[#3F8CFF] p-3 rounded-3xl">
          <MessageCircle className="text-white" />
          <p className="text-white font-bold ml-2">Support</p>
        </button>
      </div>
    </aside>
  );
};
