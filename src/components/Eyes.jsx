import { useEffect, useState } from "react";

const Eyes = () => {
  let [rotate, setRotate] = useState(0);

  useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth / 2;
        let deltaY = mouseY - window.innerHeight / 2;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setRotate(angle - 180);
      });
  });

  return (
    <div data-scroll data-scroll-speed="-.7" className="w-full h-[50vh] sm:h-screen">
      <div className="w-full h-full relative bg-[url('/images/Eyes-bg.jpg')] bg-cover bg-center">
        <div className="absolute top-1/2 -translate-x-[50%] -translate-y-[50%] left-1/2 flex gap-10  ">
          <div className="bg-white flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
            <div className="bg-zinc-900 relative w-2/3 h-2/3 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 w-full h-10"
              >
                <div className="sm:w-[2vw] sm:h-[2vw] w-[5vw] h-[5vw] bg-white rounded-full"></div>
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
                <div className="sm:w-[2vw] sm:h-[2vw] w-[5vw] h-[5vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
