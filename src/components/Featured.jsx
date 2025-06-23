import { motion, useAnimation, stagger } from "motion/react";
import { TbPointFilled } from "react-icons/tb";

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

  const images = [
    "/images/Salience.png",
    "/images/CS_Website.png",
    "/images/Frame.png",
    "/images/Fyde.png",
  ];

  return (
    <div className="w-full py-20 pb-40 bg-gray-100 z-[9] relative">
      <div className="w-full relative">
        <h1 className="text-6xl border-b-1 pb-12 px-15 border-zinc-400 font-[NeueMonstreal] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="cards px-15 mt-10  flex flex-wrap gap-4">
        {[
          "Salience Labs",
          "Cardboard Spaceship",
          "AH2 & Matt Horn",
          "Fyde",
        ].map((text, idx) => (
          <div className="card-container relative w-[48%] my-6 h-[80vh]">
            <div className="top flex items-center justify-start gap-3 mb-4">
              <TbPointFilled className="text-xl" />
              <span className="uppercase inline-block font-[NeueMonstreal] text-sm">
                {text}
              </span>
            </div>
            <h1
              className={`absolute pointer-events-none ${
                idx % 2 === 0
                  ? "right-1  translate-x-1/2"
                  : "left-1 -translate-x-1/2"
              } z-[9] flex -translate-y-1/2 overflow-hidden top-1/2`}
            >
              {text.split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[idx]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className="inline-block whitespace-pre font-[FoundersGrotesk] text-9xl text-[#CDEA68] uppercase"
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
                <motion.img initial={{scale:1}} animate={imgscale[idx]} transition={{ease:"linear"}} className="w-full h-full" src={images[idx]} alt="" />
              </motion.div>
            </motion.div>
            <div className="bottom mt-4 flex gap-4">
              <button className="uppercase opacity-90 px-2 text-sm py-1 border-1 rounded-full">
                Brand identity
              </button>
              <button className="uppercase opacity-90 px-2 text-sm py-1 border-1 rounded-full">
                Pitch deck
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute uppercase flex gap-5 items-center px-8 py-4 bg-black opacity-90 left-1/2 -translate-x-1/2 text-white rounded-full text-sm bottom-5">
        View all case studies
        <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
      </button>
    </div>
  );
};

export default Featured;
