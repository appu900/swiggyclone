import React from "react";
import { useState } from "react";

const Popup = () => {
  const [modal, setModal] = useState(false);
  const toggleMode = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button className="border p-8" onClick={toggleMode}>
        open
      </button>
      <div className="w-full h-full 
      top-0 bottom-0 left-0 right-0 bg-black
      ">
        <div className="w-[800px] h-[200px] bg-green-500">
          <h2>hello modal</h2>
          <p>Lorem ipsum dolor sit amet consectetu</p>
          <button onClick={toggleMode}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
