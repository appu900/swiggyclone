import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Cupone from "../components/Cupone";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import Fooddetails from "../components/Fooddetails";

const Resturant = () => {
  const SelectResturant = useSelector((state) => state.cart);
  console.log(SelectResturant.length)
  const item = SelectResturant[SelectResturant.length-1];
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="bg-gray-50 h-auto w-full">
      <Navbar />
      <div className="w-full h-auto px-96">
        <div className="h-full  mt-5">
          <div className="flex justify-between items-center ">
            <div className="flex text-[11px] gap-2 items-center text-gray-500">
              <p>Home /</p>
              <p>Cuttack /</p>
              <p>College squre /</p>
              <p className="text-black">{item.title}</p>
            </div>
            <div className="mr-16">
              <span className="text-xl">
                <ion-icon name="search-outline"></ion-icon>
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="text-left ">
              <p className="text-xl text-black font-bold">{item.title}</p>
              <p className="text-[13px] text-gray-500 mt-1">{item.desc}</p>
              <p className="text-[13px] text-gray-500">College squre 5km</p>
              <p className="text-[14px] text-gray-500 mt-2">
                Far (5 kms) | Additional delivery fee will apply
              </p>
            </div>
            <div className="flex flex-col border gap-2 p-1 mr-16 h-[80px] rounded-lg  text-gray-500">
              <div className="text-green-800 flex items-center justify-center gap-1">
                <p className="font-bold text-[17px]">{item.rating}</p>
                <span className="text-sm ">
                  <ion-icon name="star"></ion-icon>
                </span>
              </div>
              <div className="w-full h-[1px] opacity-25 bg-gray-600"></div>
              <p className="text-[12px] font-bold">10k+ ratings</p>
            </div>
          </div>

          {/* border 1 */}
          <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
          {/* offer details section */}

          <div className="flex gap-4 font-bold mt-2">
            <div className="flex items-center gap-1">
              <span className="text-[17px] mt-[3px] ">
                <ion-icon name="time"></ion-icon>
              </span>
              <span>{item.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="mt-[3px] text-[17px]">
                <ion-icon name="logo-euro"></ion-icon>
              </span>
              <span>${item.offer} for two</span>
            </div>
          </div>

          {/* cupone section */}

          <div className="w-full mt-5  flex items-center gap-3">
            <Cupone />
            <Cupone />
            <Cupone />
          </div>

          {/* toggle btn */}
          <div className=" w-[200px] text-left flex items-center gap-2 mt-8">
            <p className="font-semibold mb-1  ">Veg Only</p>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-green-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-md`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-md bg-white transition`}
                />
              </Switch>
            </div>
          </div>
          <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>

          {/* food card section */}
          <div className="mt-6 font-bold text-left text-xl">
            Char Coal Grilled (14)
          </div>
          <div className="w-full h-auto mt-5">

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>

            <div className="mt-4">
              <Fooddetails />
              <div className="w-[720px] mt-5 h-[1px] opacity-25 bg-gray-600"></div>
            </div>


          </div>



        </div>
      </div>
    </div>
  );
};

export default Resturant;

//#2B1700
