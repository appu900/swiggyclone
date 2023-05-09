import React from "react";
import { useNavigate } from "react-router-dom";
import {add} from '../Store/cartSlice'
import { useDispatch } from "react-redux";


// #DB7C38

const Foodcard = ({ image, title, desc, rating, time, price, offer }) => {

  return (
    <div className="w-[300px] p-4 mt-2  h-[400px] cursor-pointer hover:border-gray-200 hover:border hover:shadow-lg ">
      <div>
        <img src={image} alt="" className="h-[180px]" />
      </div>

      <div className="w-full h-[60px] text-left">
        <h1 className="text-[17px] font-semibold text-gray-800 mt-3">
          {title}
        </h1>
        <p className="text-[13px] text-gray-500">{desc}</p>
      </div>

      <div className="w-full flex justify-start h-[20px]">
        <div className="w-full h-[30px]  flex gap-5  ">
          <div className="border h-[20px] p-1 mt-1  w-[50px] bg-green-400 text-white text-[14px] font-semibold flex items-center justify-evenly">
            <span>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>{rating}</p>
          </div>
          <p>.</p>
          <p className="text-[12px] mt-1  text-gray-500">{time}</p>
          <p>.</p>
          <p className=" text-[12px] mt-1 uppercase text-gray-500">{offer} for two</p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-300 mt-5"></div>
       <div className="flex gap-4 items-center text-[#8A584B] mt-3">
        <span className="mt-1"><ion-icon name="snow"></ion-icon></span>
        <span className="font-semibold text-[14px]">FLAT100 off Use FLATDEAL</span>
       </div>

       <div className="w-full h-[30px] mt-3 hidden ">
       <div className="h-[1px] w-full bg-gray-100 "></div>
       <div className="w-full mt-2">
         <p className="uppercase text-[13px] tracking-wide font-bold text-blue-400">quick view</p>
       </div>
       </div>
    </div>
  );
};

export default Foodcard;
