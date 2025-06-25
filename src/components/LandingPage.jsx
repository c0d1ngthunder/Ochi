import { animate } from "motion";
import { motion } from "motion/react";
import { useEffect } from "react";
import { PiArrowDownLeftThin } from "react-icons/pi";
const LandingPage = () => {
  useEffect(() => {
    animate(0, 100, {
      duration: 3,
      onUpdate: (latest) => document.querySelector(".load").innerHTML = Math.round(latest)+"%",
    });
  });

  return (
    <motion.div
      initial={{ scale: 0.75, borderRadius: "20px" }}
      animate={{ scale: 1, borderRadius: "0%" }}
      transition={{ duration: 0.5, delay: 3 }}
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="w-full page relative z-[2] h-screen rounded-2xl bg-gray-100 pt-1"
    >
      <div className="textstructure mt-32">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker px-15 overflow-hidden">
            <div className="w-fit flex gap-[1vw]">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.65, 0, 0.35, 1], delay: 4 }}
                  className="opacity-[1] w-[9vw] bg-center bg-cover bg-[url('/images/content-image01.jpg')] relative top-[1vw] h-[6vw] rounded-sm"
                ></motion.div>
              )}
              <h1 className="uppercase opacity-[0.86] text-[9vw] leading-[7vw] font-[foundersGrotesk]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <motion.div animate={{opacity:"0"}} transition={{duration:.3,delay:3}} className="absolute bottom-20 left-10 font-semibold">
        Loading:
      </motion.div>
      <motion.div
        animate={{ opacity: "0" }}
        transition={{ delay: 3 }}
        onAnimationEnd={(e)=>{e.currentTarget}}
        className="absolute opacity-[.85] load text-[8vw] font-[FoundersGrotesk] bottom-10 right-10"
      >
      </motion.div>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{delay: 3.5}}
        className="border-t-1 mt-30 opacity-0 border-zinc-400 flex justify-between items-center px-10 py-4"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="">
            {item}
          </p>
        ))}
        <a href="" className="start flex gap-2 items-start">
          <span className="uppercase px-4 py-1 text-sm border-1 border-black rounded-full">
            Start the project
          </span>
          <span className="text-2xl border-1 rounded-full m-auto p-[2px]">
            <PiArrowDownLeftThin className="rotate-180 font-extralight" />
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
