import React from "react";

const Cupone = () => {
  return (
    <div className="border border-[#4F200D] cursor-pointer w-[210px] text-left rounded px-2 py-2 h-[75px] text-[15px]">
      <div className="flex items-center gap-1">
        <span className="mt-1 text-[#2B1700]">
          <ion-icon name="snow"></ion-icon>
        </span>
        <p className="font-bold text-gray-700">FLAT $125 OFF</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-600 font-semibold">
          USE MATCHDEAL125 | ABOVE 249
        </p>
      </div>
    </div>
  );
};

export default Cupone;
