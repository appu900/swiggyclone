import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import { useNavigate } from "react-router-dom";

const TEXTS = [
  "hungry ?",
  "Game night ?",
  "Unexpected guests ?",
  "Late night at Office ?",
  "Cooking gone wrong ?",
  "Movie Marathon ?",
];

const Content = [
  {
    Image: "/images/c2.png",
    title: "No Minimum Order",
    desc1: "Order in for yourself or for the group,",
    desc2: "with no restrictions on order value",
  },
  {
    Image: "/images/c1.png",
    title: "Live Order Tracking",
    desc1: "Know where your order is at all times,,",
    desc2: "from the restaurant to your doorstep",
  },
  {
    Image: "/images/c3.png",
    title: "Lightning-Fast Delivery",
    desc1: "Experience Swiggys superfast delivery",
    desc2: "for food delivered fresh & on time",
  },
];

const StartingPage = () => {

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <div className=" h-[550px] flex w-full">
        <div className="w-[55%] ">
          <div className="w-full p-2 mt-[60px] flex items-center  justify-between ">
            <img
              src="/images/logo/swiggy.png"
              alt=""
              className="h-[50px] ml-36"
            />
            <div className="flex mr-16 gap-9 items-center font-bold tracking-wider cursor-pointer">
              <button>Log in</button>
              <button className="px-2 bg-black text-white py-2 w-[120px] tracking-wider font-sm">
                Signup
              </button>
            </div>
          </div>

          <div className=" ml-36 mt-16 flex flex-col gap-1 text-left">
            <div>
              <TextTransition
                springConfig={presets.wobbly}
                className="text-4xl font-bold "
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
            <div>
              <p className="text-gray-600 text-[21px]">
                Order food from favourite restaurants near you.
              </p>
            </div>
          </div>
          <div className="mt-8 ml-36 flex">
            <Searchbar />
            <div className="w-[130px] h-[60px] bg-orange-500" onClick={e=>navigate('/home')}>
              <p className="text-white font-semibold mt-4 cursor-pointer tracking-wide">
                FIND FOOD
              </p>
            </div>
          </div>

          <div className="ml-36 mt-8">
            <p className="text-left font-semibold text-gray-400 ">
              POPULAR CITIES IN INDIA
            </p>
            <p className="text-left mt-2 font-bold text-gray-200 even:text-gray-600">
              Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
              <br />
              Pune & More{" "}
            </p>
          </div>
        </div>

        {/* for right side image */}
        <div className=" bg-slate-600 w-[45%]  overflow-hidden">
          <img src="/images/right.jpg" alt="" className="h-[650px] w-full " />
        </div>
      </div>

      {/* secondd layout */}
      <div className="w-full h-[370px] bg-[#2B1700] flex justify-evenly">
        {Content.map((card) => (
          <div className="h-[350px] w-[300px] ">
            <div className="flex justify-evenly">
              <img src={card.Image} alt="" className="h-[200px] " />
            </div>
            <div className="mt-6 text-white font-bold tracking-wide text-xl">
              <p>{card.title}</p>
              <div className="flex flex-col gap-0 mt-3">
                <p className="text-sm font-normal">{card.desc1}</p>
                <p className="text-sm font-normal">{card.desc2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* third layout  */}
      <div className="h-[600px] w-full bg-white flex overflow-hidden">
        {/* first section for text */}
        <div className="h-[400px] w-[40%] ">
          <div className="ml-40  mt-32">
            <div className="tracking-wider text-gray-900 text-left ">
              <p className="font-bold text-4xl">Restaurants in </p>
              <p className="font-bold text-4xl  ">your pocket</p>
            </div>
            <div className="text-left mt-5 text-[19px] text-gray-500">
              <p className="">Order from your favorite restaurants & track</p>
              <p>on the go, with the all-new Swiggy app.</p>
            </div>
            {/* for image btn */}
            <div className="flex gap-6 mt-16">
              <img src="/images/android.jpg" alt="" className="h-[50px]"/>
              <img src="/images/ios.jpg" alt="" className="h-[50px]"/>
            </div>
          </div>
        </div>

        <div className="h-full w-[60%]">
             <div className="flex ">
              <img src="/images/pixel.png" alt="" className="h-[500px]" />
              <img src="/images/iphone.png" alt="" className="h-[500px] mt-28 " />
             </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default StartingPage;
