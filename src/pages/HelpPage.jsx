import React from "react";
import Navbar from "../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { BsChevronCompactDown } from "react-icons/bs";
import Accordian from "../components/Accordian";
import Footer from "../components/Footer";


const HelpPage = () => {
  return (
    <div className="bg-[#37718e] h-auto">
      <Navbar />
      <div className="h-[100px] w-[350px] b ml-44 text-left mt-16">
        <h1 className="text-white font-bold text-3xl">Help & Support</h1>
        <p className="text-white font-normal mt-1">
          Let's take a step ahead and help you better.
        </p>
      </div>
      <div className="h-[500px] w-[1300px] bg-white ml-32 flex justify-evenly overflow-hidden ">
        <div className="w-[250px] h-full bg-[#EDF1F7] mt-10 ml-10">
          <div className="mt-4 ml-16 w-[200px]  p-6 bg-white">
            <p className="font-semibold text-gray-700">Partner Onboarding</p>
          </div>
          <div className=" ml-16 w-[200px]  p-6 hover:bg-white">
            <p className="font-semibold text-gray-700">Legal</p>
          </div>
          <div className=" ml-16 w-[200px]  p-6 hover:bg-white">
            <p className="font-semibold text-gray-700">FAQs</p>
          </div>
        </div>

        <div className="mt-10 h-[500px] w-[900px] ">
          <div className="mt-10 font-semibold text-2xl text-left">
            <h1>Partner Onboarding</h1>
          </div>
          <div className="mt-5 w-full h-[400px] ">
            

            <Accordian />

         
          </div>
        </div>
      </div>
        <div className="mt-10">
            <Footer/>
        </div>
    </div>
  );
};

export default HelpPage;
