import { motion, useAnimation } from "motion/react";
import { use, useState } from "react";
import { PiArrowDownLeftThin } from "react-icons/pi";

const About = () => {
  let anime = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const MotionArrow = motion.create(PiArrowDownLeftThin);
  return (
    <div className="w-full pt-20 bg-[#CDEA68]">
      <p className="text-[4vw] leading-[4vw] px-15 pr-30 font-[NeueMonstreal] opacity-[0.9]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </p>
      <div className="flex text-lg border-t-1 w-full pr-[10vw] justify-between border-[#a5b95a] px-15 py-5 mt-10">
        <div>What you can expect:</div>
        <div className="w-1/2 flex justify-between">
          <div className="w-1/2 font-[NeueMonstreal] flex flex-col gap-[2vw]">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold mb-[1vw]">S:</p>
            <a href="">Instagram</a>
            <a href="">Behance</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="border-[#a5b95a] flex mt-20 w-full px-15 border-t-1 p-10">
        <div className="w-1/2">
          <h1 className="text-[4vw] mb-4 opacity-[0.9]">Our Approach:</h1>
          <motion.button
            className="px-8 flex items-center justify-between gap-5 uppercase py-3 bg-[#212121] text-white rounded-full relative overflow-hidden "
            onHoverStart={() => {
              anime[0].start({ y: "0" }, { duration: 0.2, ease: "linear" });
              anime[1].start({ scale: 4 });
              anime[2].start({ opacity: 1 });
              anime[3].start({ scale: 0.98 });
              anime[4].start({ scale: 1.1 });
            }}
            onHoverEnd={async () => {
              anime[1].start({ scale: 1 });
              anime[2].start({ opacity: 0 });
              anime[3].start({ scale: 1 });
              anime[4].start({ scale: 1 });
              await anime[0].start(
                { y: "-100%" },
                { duration: 0.2, ease: "linear" }
              );
              await anime[0].start({ opacity: "0" });

              await anime[0].start({ y: "100%" });
              await anime[0].start({ opacity: "1" });
            }}
          >
            <div className="z-[99] relative">Read More</div>
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
                className="rotate-180 text-[.4vw] font-extrabold text-black opacity-0"
                animate={anime[2]}
              />
            </motion.div>
          </motion.button>
        </div>
        <motion.div
          animate={anime[3]}
          transition={{ ease: "linear", duration: 0.6 }}
          className="overflow-hidden w-1/2 h-[70vh] rounded-2xl"
        >
          <motion.img
            className="block w-full h-full"
            animate={anime[4]}
            transition={{ ease: "linear", duration: 0.6 }}
            src="./images/HomepagePhoto.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
