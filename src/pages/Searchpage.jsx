import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Searchpage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="w-full h-[440px] bg-gray-100  flex justify-evenly mt-8">
        <div className="w-[860px] h-[48px] border border-gray-400 rounded flex items-center">
          <input
            type="text"
            placeholder="Search for resturants and food"
            className="bg-gray-100 w-full h-full rounded px-8 outline-none font-semibold tracking-wide placeholder:font-semibold placeholder:text-gray-600"
          />
          <span className="mr-4"><ion-icon name="search-outline"></ion-icon></span>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Searchpage;
