import React from "react";
import fcontent from "../FooterContent";

const Footer = () => {
  return (
    
      <div className="h-[260px] w-full bg-black text-white p-8 flex justify-evenly ">
        <div className="w-[80%] h-[230px]  flex justify-evenly ">
          {fcontent.map((con) => (
            <div className="w-[200px] h-[230px] ">
              <h1 className="text-left text-gray-400 font-bold text-xl">
                {con.title}
              </h1>
              <div className="text-left mt-5">
                <ul className="cursor-pointer">
                  <li className="mt-2">{con.sub}</li>
                  <li className="mt-2">{con.s2}</li>
                  <li className="mt-2">{con.s3}</li>
                  <li className="mt-2">{con.s4}</li>
                  <li className="mt-2">{con.s5}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[20%] h-[200px] cursor-pointer ">
          <img
            src="/images/android.jpg"
            alt=""
            className="h-[60px] border border-white rounded hover:h-[65px]  transition-all"
          />
          <img
            src="/images/ios.jpg"
            alt=""
            className="h-[60px] mt-8 border border-white rounded hover:h-[65px]  transition-all"
          />
        </div>
      </div>
       
    
  );
};

export default Footer;
