import React from "react";
import Foodcard from "../components/Foodcard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import data from "../Restutants/Data";
import { useEffect, useState } from "react";
import Offercard from "../components/Offercard";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();
  const [offeritem, setOfferitem] = useState([]);
  useEffect(() => {
    setOfferitem(data);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-[280px] bg-[#005062] flex justify-around items-center">
        <div className="flex flex-col gap-2 text-white text-left mr-28">
          <h1 className="text-5xl font-bold cursor-pointer">Offers for you</h1>
          <p className="text-[20px] text-gray-300 ml-1 cursor-pointer">
            Explore top deals and offers exclusively for you!
          </p>
        </div>
        <div>
          <img src="/images/icon.png" alt="" className="h-[180px]" />
        </div>
      </div>

      {/* filter section */}

      <div className="w-full h-[60px] border-x-1  border ">
        <div className="flex items-center gap-4 mt-5 ml-44 text-[19px] text-gray-400">
          <p className="text-black font-semibold cursor-pointer">
            Restaurant offers
          </p>
          <p className="cursor-pointer" onClick={(e) => navigate("/payment")}>
            Payment offers/Coupons
          </p>
        </div>
      </div>

      {/* food header section */}
      <div className="w-full h-[60px] flex mt-12 ">
        <div className="text-left ml-44">
          <p className="text-2xl font-bold">All offers (524)</p>
          <p className="text-gray-400 text-[16px]">
            All offers and deals, from restaurants near you
          </p>
        </div>
      </div>

      {/* food card section */}
      <div className="w-full h-auto px-32  mt-3  ">
        <div className="h-full  grid grid-cols-4 ">
          {offeritem.map((item) => (
            <Foodcard
              image={item.image}
              title={item.title}
              rating={item.rating}
              desc={item.desc}
              time={item.time}
              offer={item.offer}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Offer;
