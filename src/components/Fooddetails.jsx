import React from "react";

const Fooddetails = () => {
  return (
    <div className="flex justify-between">
      <div>
      <div className="flex gap-2">
           <div className="text-red-600 border-2 border-red-600 w-[18px] h-[19px] text-[15px] mt-[1px] flex justify-evenly"><span className=""><ion-icon name="caret-up" className=''></ion-icon></span></div>
           <div className="flex items-center gap-1 text-[13px]  ">
           <span className="text-[#EE9C00]"><ion-icon name="star"></ion-icon></span>
           <p className=" mb-1 font-bold text-[#EE9C00]">Bestseller</p>
           </div>
      </div>
      <div className="text-left mt-1">
        <p className="font-semibold">Chicken Cheese Shawarma</p>
        <p>$108</p>
        <p className="text-gray-400 mt-4">Serves 1 | Iconic Arabic street food dish with loads of chicken and cheese.</p>
      </div>
      </div>
{/* section -2 */}
      <div className="w-[130px] h-[130px]   mr-8 cursor-pointer">
      <div className="absolute border w-[110px] h-10 mt-20 ml-3 rounded bg-white text-sm font-bold flex justify-evenly hover:shadow-md">
        <p className="mt-2 font-semibold text-green-500">ADD</p>
      </div>
          <div className="w-full h-full ">
             <img src="/images/swarma.png" alt="" className="rounded-md" />
          </div>

      </div>
    </div>
  );
};

export default Fooddetails;
