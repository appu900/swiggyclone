import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Caraos = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[300px] w-[1250px]  mt-6 ">
      <Slider {...settings} className="p-6 flex cursor-pointer ">
        <div>
          <img
            src="/images/slider1.png"
            alt=""
            className="h-[250px] hover:transform hover:scale-110 ease-in duration-300 z-10 "
          />
        </div>
        <div>
          <img
            src="/images/slider2.png"
            alt=""
            className="h-[250px] ml-2 hover:transform hover:scale-110 ease-in duration-300"
          />
        </div>
        <div>
          <img
            src="/images/slider3.png"
            alt=""
            className="h-[250px] ml-2 hover:transform hover:scale-110 ease-in duration-300"
          />
        </div>
        <div>
          <img
            src="/images/slider4.png"
            alt=""
            className="h-[250px] ml-2 hover:transform hover:scale-110 ease-in duration-300"
          />
        </div>
        <div>
          <img
            src="/images/slider2.png"
            alt=""
            className="h-[250px] ml-2 hover:transform hover:scale-110 ease-in duration-300"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Caraos;
