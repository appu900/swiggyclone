import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Caraos";
import Caraos from "../components/Caraos";
import Filtersection from "../components/Filtersection";
import Lines from "../components/Lines";
import Foodcard from "../components/Foodcard";
import { useState } from "react";
import res_Relevance from "../Restutants/Relevance";
import Footer from "../components/Footer";
import data from "../Restutants/Data";
import Foods from "../components/Foods";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);
  const dispatch = useDispatch();

  const tempdata = data;

  const relevance = () => {
    setFood(tempdata);
  };

  const sortByrating = () => {
    setFood(data.filter((ele) => ele.rating > 4.0));
    console.log(food);
  };

  const sortBylowtoHigh = () => {};

  useEffect(() => {
    setFood(data);
  }, []);

  const addhandle = (res) => {
    dispatch(add(res));
    navigate("/resturants");
  };

  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <div className="w-full h-[350px] bg-gray-900 flex justify-evenly">
        <Caraos />
      </div>

      <div className="w-full h-[70px]  flex justify-evenly mt-3 ">
        <div className="h-[70px] w-[1210px] flex justify-between items-center border-b-2 p-2 ">
          <div>
            <h1 className="text-[25px] font-bold text-[#282c3f]">
              507 restaurants
            </h1>
          </div>

          <div className="flex gap-10 items-center ">
            <div className="flex gap-10 items-center">
              <h1
                className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer"
                id="first"
                onClick={relevance}
              >
                Relevance
              </h1>
              <h1 className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer">
                Delivery Time
              </h1>
              <h1
                className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer"
                onClick={sortByrating}
              >
                Rating
              </h1>
              <h1
                className="text-gray-500 hover:text-gray-700 text-[17px] cursor-pointer"
                onClick={sortBylowtoHigh}
              >
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
      </div>

      <div className="w-full h-auto  mt-10 px-32 ">
        <div className="  h-full grid grid-cols-4">
          {food.map((item) => (
            <div className="" onClick={() => addhandle(item)}>
              <Foodcard
                image={item.image}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                time={item.time}
                offer={item.offer}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
