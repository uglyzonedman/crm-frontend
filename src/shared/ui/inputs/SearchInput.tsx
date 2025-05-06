import { SearchIcon } from "lucide-react";
import React from "react";

export const SearchInput = () => {
  return (
    <div className="flex bg-[#FFFFFF] px-5 py-3 rounded-2xl max-w-[412px] w-full">
      <SearchIcon size={24} />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 outline-0 w-full"
      />
    </div>
  );
};
