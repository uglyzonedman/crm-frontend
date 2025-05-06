import { SearchInput } from "@/src/shared";
import { Bell, ChevronDown } from "lucide-react";
import React from "react";

export const MainHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchInput />
      <div className="flex items-center">
        <button className="bg-white p-3 rounded-xl cursor-pointer">
          <Bell size={24} />
        </button>

        <div className="flex items-center bg-white py-2 px-3 rounded-xl ml-6">
          <div className="h-[30px] w-[30px] bg-gray-300 rounded-2xl"></div>
          <p className="font-bold text-[#0A1629] text-base ml-3 mr-3">
            Evan Yates
          </p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};
