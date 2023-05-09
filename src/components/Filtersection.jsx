import React from "react";

const FilterData = [
  { title: "Relevance" },
  { title: "Delivery Time" },
  { title: "Rating" },
  { title: "Cost: Low To High" },
  { title: "Cost: High To Low" },
];

const Filtersection = () => {
  return (
    <div className="h-[70px] w-[1210px] flex justify-between items-center border-b-2 p-2 ">
      <div>
        <h1 className="text-[25px] font-bold text-[#282c3f]">
          507 restaurants
        </h1>
      </div>

      <div className="flex gap-10 items-center ">
        <div className="flex gap-10 items-center">
          <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
            Relevance
          </h1>
          <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
          Delivery Time
          </h1>
          <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
          Rating
          </h1>
          <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
          Cost: Low To High
          </h1>
          <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
          Cost: High To Low
          </h1>
        </div>

        <div className=" flex gap-3 items-center">
          <span className="text-[#282c3f] font-semibold">
            <p>Filters</p>
          </span>
          <span className="text-orange-500 text-3xl font-normal  cursor-pointer transform rotate-90">
            <ion-icon name="options-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filtersection;
