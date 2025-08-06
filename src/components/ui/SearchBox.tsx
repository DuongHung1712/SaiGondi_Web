"use client";

import React from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const SearchBox = () => {
  return (
    <div className="relative py-20 px-4 overflow-hidden bg-transparent flex justify-center">
      <div className="bg-white rounded-2xl shadow-md flex items-center w-full max-w-7xl px-4 py-3 gap-3 z-10">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-5 h-5 z-10" />

          <FiSliders className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-5 h-5 z-10" />
          <Input
            id="search-input"
            label="Tìm kiếm địa điểm, quán ăn, khu vui chơi xung quanh bạn…"
            labelClassName="left-8"
            placeholder="Tìm kiếm địa điểm, quán ăn, khu vui chơi xung quanh bạn…."
            status="search"
            className="pl-10 pr-10 pt-5 pb-2"
          />
        </div>

        <Button
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all"
          variant="primary"
        >
          <HiPaperAirplane className="w-5 h-5 rotate-45" />
          TÌM KIẾM
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
