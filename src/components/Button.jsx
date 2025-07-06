import { motion, useAnimation } from "motion/react";
import React from "react";
import { PiArrowDownLeftThin } from "react-icons/pi";

const Button = ({txt,animator}) => {
  let anime = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const MotionArrow = motion.create(PiArrowDownLeftThin);

  return (
    <motion.button
      className="px-8 flex items-center justify-between gap-5 uppercase py-3 bg-[#212121] text-white rounded-full relative overflow-hidden "
      onHoverStart={() => {
        anime[0].start({ y: "0" }, { duration: 0.2, ease: "linear" });
        anime[1].start({ scale: 4 });
        anime[2].start({ opacity: 1 });
        anime[3].start({ scale: 0.98 });
        anime[4].start({ scale: 1.1 });
        if (animator){
          animator[0].start({ scale: 0.98})
          animator[1].start({scale:1.1})
        }
      }}
      onHoverEnd={async () => {
        anime[1].start({ scale: 1 });
        anime[2].start({ opacity: 0 });
        anime[3].start({ scale: 1 });
        anime[4].start({ scale: 1 });
        if(animator){
          animator[0].start({scale:1})
          animator[1].start({scale:1})
        }
        await anime[0].start({ y: "-100%" }, { duration: 0.2, ease: "linear" });
        await anime[0].start({ opacity: 0 });

        await anime[0].start({ y: "100%" });
        await anime[0].start({ opacity: 1 });
      }}
    >
      <div className="z-[99] relative">{txt}</div>
      <motion.div
        className="absolute rounded-[50%] left-0 h-20 w-50 bg-black z-9"
        initial={{ y: "100%" }}
        animate={anime[0]}
        transition={{ duration: 0.1 }}
      ></motion.div>
      <motion.div
        className="w-2 h-2 flex items-center justify-center z-99 relative bg-white rounded-full"
        animate={anime[1]}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <MotionArrow
          className="rotate-180 text-xl font-extrabold text-black opacity-0"
          animate={anime[2]}
        />
      </motion.div>
    </motion.button>
  );
};

export default Button;