import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import offerdata from "../Restutants/OfferData";
import Offercard from "../components/Offercard";
import Footer from "../components/Footer";

const Payment = () => {
  const navigate = useNavigate();  
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
          <p className=" cursor-pointer" onClick={e=>navigate('/offer')}>
            Restaurant offers
          </p>
          <p className="cursor-pointer text-black font-semibold">
            Payment offers/Coupons
          </p>
        </div>
      </div>
       
       {/* offer header section */}
       <div className="w-full h-[60px] flex mt-12">
        <div className="text-left ml-44">
          <p className="text-2xl font-bold">Available Coupons</p>
        </div>
      </div>

      {/* cupone card */}
      <div className="w-full h-auto px-40  ">
          <div className="h-full grid grid-cols-3 ml-3  ">
            {
                offerdata.map((ele)=>
                 <Offercard/>
                )
            }
          </div>
      </div>

      <div className="mt-5">
        <Footer/>
      </div>
    </div>
  );
};

export default Payment;
