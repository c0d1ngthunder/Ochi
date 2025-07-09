import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="-.4" className="w-full mt-40 min-h-screen bg-gray-100 md:items-center flex flex-col md:flex-row gap-4 px-6 sm:px-15">
      <div className="md:w-1/2 w-full md:h-[60vh] h-[46vh] flex items-center justify-center relative bg-[#004D43] rounded-lg">
          <img className="w-1/3" src="./images/logo.svg" alt="" />
          <a className="uppercase opacity-90 absolute font-[NeueMonstreal] text-sm bottom-5 left-5 text-gray-100 px-2 py-1 border-1 border-gray-100 rounded-full">Rating 5.0 on clutch</a>
        </div>
      <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 w-full md:h-[60vh] h-[46vh] flex items-center justify-center relative bg-[#212121] rounded-lg">
          <img className="w-1/2" src="./images/logo002.svg" alt="" />
          <a className="uppercase opacity-90 absolute font-[NeueMonstreal] text-sm bottom-5 left-5 text-gray-100 px-2 py-1 border-1 border-gray-100 rounded-full">Rating 5.0 on clutch</a>
        </div>
        <div className="md:w-1/2 h-[46vh] md:h-[60vh] flex items-center justify-center relative bg-[#212121] rounded-lg">
          <img className="w-1/3" src="./images/logo003.png" alt="" />
          <a className="uppercase opacity-90 absolute font-[NeueMonstreal] text-sm bottom-5 left-5 text-gray-100 px-2 py-1 border-1 border-gray-100 rounded-full">Business bootcamp alumini</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
