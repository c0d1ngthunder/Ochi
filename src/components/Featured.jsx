import { gsap } from "gsap";
import { motion, useAnimation } from "motion/react";
import { div, option } from "motion/react-client";
import { PiArrowDownLeftThin } from "react-icons/pi";
import { TbPointFilled } from "react-icons/tb";
import Button from "./Button";
const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const scale = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const imgscale = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({
      y: "0",
    });
    scale[index].start({
      scale: 0.96,
    });
    imgscale[index].start({
      scale: 1.1,
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
    scale[index].start({
      scale: 1,
    });
    imgscale[index].start({
      scale: 1,
    });
  };

  const cardTexts = [
    "Salience Labs",
    "Cardboard Spaceship",
    "AH2 & Matt Horn",
    "Fyde",
  ];

  // Utility: Chunk array into pairs
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedCards = chunkArray(cardTexts, 2); // [[...2 cards], [...2 cards]]

  const images = [
    "./images/Salience.png",
    "./images/CS_Website.png",
    "./images/Frame.png",
    "./images/Fyde.png",
  ];

  const btnAnimation = (e, yoff, txtcolor) => {
    const btn = e.currentTarget;

    let options = {
      y: yoff,
      duration: 0.2,
      ease: "none",
    };
    if (txtcolor == "black") {
      options.onComplete = () => {
        gsap.set(btn.querySelector(".coloranime"), {
          y: "0%",
        });
      };
    }

    gsap.to(btn.querySelector(".coloranime"), { ...options });
    gsap.to(btn.querySelector(".txt"), {
      color: txtcolor,
      duration: 0.3,
    });
  };

  return (
    <div className="w-full py-20 bg-gray-100 z-[9] relative">
      <div className="w-full relative">
        <h1 className="sm:text-6xl text-3xl border-b-1 pb-12 px-6 sm:px-15 border-zinc-400 font-[NeueMonstreal] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="cards px-6 md:px-15 mt-10  flex flex-wrap gap-4">
        {chunkedCards.map((pair, pairIndex) => (
          <div
            className="card-row relative flex flex-wrap gap-4 w-full"
            key={pairIndex}
          >
            {pair.map((text, index) => {
              const idx = pairIndex * 2 + index;
              return (
                <div className="card-container relative md:static w-full md:w-[48%] my-6">
                  <div className="top flex items-center justify-start gap-3 mb-4">
                    <TbPointFilled className="text-xl" />
                    <span className="uppercase inline-block font-[NeueMonstreal] text-sm">
                      {text}
                    </span>
                  </div>
                  <h1
                    className={`absolute pointer-events-none right-1/2 translate-x-1/2 sm:translate-x-1/2 z-[9] flex -translate-y-1/2 overflow-hidden top-1/2`}
                  >
                    {text.split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={cards[idx]}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        className="inline-block whitespace-pre font-[FoundersGrotesk] text-6xl sm:text-8xl text-[#CDEA68] uppercase"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                  <motion.div
                    onHoverStart={() => handleHover(idx)}
                    onHoverEnd={() => handleHoverEnd(idx)}
                    className="w-full h-[90%]"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={scale[idx]}
                      transition={{ ease: "linear", duration: 0.3 }}
                      className="card overflow-hidden w-full rounded-2xl h-full bg-cover"
                    >
                      <motion.img
                        initial={{ scale: 1 }}
                        animate={imgscale[idx]}
                        transition={{ ease: "linear" }}
                        className="w-full h-full"
                        src={images[idx]}
                        alt=""
                      />
                    </motion.div>
                  </motion.div>
                  <div className="bottom mt-4 flex gap-4">
                    <button
                      onMouseEnter={(e) => btnAnimation(e, "-80%", "white")}
                      onMouseLeave={(e) => btnAnimation(e, "-150%", "black")}
                      className="uppercase overflow-hidden relative px-2 text-sm py-1 border-1 rounded-full"
                    >
                      <div className="txt opacity-90 relative z-[99]">
                        Brand identity
                      </div>
                      <div className="coloranime absolute rounded-[50%] -left-3 top-8 h-15 w-35 bg-black z-9"></div>
                    </button>
                    <button
                      onMouseEnter={(e) => btnAnimation(e, "-80%", "white")}
                      onMouseLeave={(e) => btnAnimation(e, "-150%", "black")}
                      className="uppercase overflow-hidden relative px-2 text-sm py-1 border-1 rounded-full"
                    >
                      <div className="txt opacity-90 relative z-[99]">
                        Pitch deck
                      </div>
                      <div className="coloranime absolute rounded-[50%] -left-3 top-8 h-15 w-35 bg-black z-9"></div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center pt-20">
        <Button txt="View more" />
      </div>
    </div>
  );
};

export default Featured;
