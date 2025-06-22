import React, { useEffect, useRef, useState } from "react";

const Eyes = () => {
  let [rotate, setRotate] = useState(0);
  let eyes = useRef(null);

  useEffect(() => {
    if (eyes) {
      eyes.current.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setRotate(angle - 180);
        console.log(rotate);
      });
    }
  });

  return (
    <div ref={eyes} className="w-full h-screen">
      <div className="w-full h-full relative bg-green-200">
        <div className="absolute top-1/2 -translate-x-[50%] -translate-y-[50%] left-1/2 flex gap-10  ">
          <div className="bg-white flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="bg-zinc-900 relative w-2/3 h-2/3 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="bg-zinc-900 relative w-2/3 h-2/3 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
