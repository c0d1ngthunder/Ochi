import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-gray-100 items-center flex gap-4 px-15">
      <div className="w-1/2 relative h-[60vh] bg-[#004D43] rounded-xl flex items-center justify-center">
        <img className="w-1/4" src="/images/logo.svg" alt="" />
        <span className="text-sm backdrop-opacity-90 absolute font-[NeueMonstreal] bottom-5 left-5 text-[#CDEA68] px-2 py-1 border-1 border-[#CDEA68] rounded-full">
          &copy; 2019-2022
        </span>
      </div>
      <div className="w-1/2 flex gap-4">
        <div className="w-1/2 h-[60vh] flex items-center justify-center relative bg-[#212121] rounded-lg">
          <img className="w-1/2" src="/images/logo002.svg" alt="" />
          <a className="uppercase opacity-90 absolute font-[NeueMonstreal] text-sm bottom-5 left-5 text-gray-100 px-2 py-1 border-1 border-gray-100 rounded-full">Rating 5.0 on clutch</a>
        </div>
        <div className="w-1/2 h-[60vh] flex items-center justify-center relative bg-[#212121] rounded-lg">
          <img className="w-1/3" src="/images/logo003.png" alt="" />
          <a className="uppercase opacity-90 absolute font-[NeueMonstreal] text-sm bottom-5 left-5 text-gray-100 px-2 py-1 border-1 border-gray-100 rounded-full">Business bootcamp alumini</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
