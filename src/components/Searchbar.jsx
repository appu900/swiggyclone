import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="flex h-[60px]  w-[500px] border border-gray-500 border-r-0 hover:border-orange-500">
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="h-full w-full placeholder:text-[17px]  placeholder:font-semibold 
        outline-none placeholder-gray-500  pl-8 text-xl 
        "
        />
        <div className="w-[200px]  h-[40px] mt-3 flex items-center gap-1   hover:bg-gray-100">
          <span className="ml-5">
            <ion-icon name="locate-outline"></ion-icon>
          </span>
          <span className="mb-1">
            <p className="text-gray-600">Locate Me</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
