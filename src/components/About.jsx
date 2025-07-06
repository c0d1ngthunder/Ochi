import { motion, useAnimation } from "motion/react";
import { PiArrowDownLeftThin } from "react-icons/pi";
import Button from "./Button";

const About = () => {
  let anime = [
    useAnimation(),
    useAnimation(),
  ];
  const MotionArrow = motion.create(PiArrowDownLeftThin);
  return (
    <div className="w-full pt-10 sm:pt-20 bg-[#CDEA68]">
      <p className="text-3xl sm:text-[4vw] leading-[7vw] sm:leading-[4vw] px-6 sm:px-15 font-[NeueMonstreal] opacity-[0.9]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </p>
      <div className="flex sm:flex-row gap-10 flex-col sm:text-lg border-t-1 w-full pr-[10vw] justify-between border-[#a5b95a] px-6 text-md sm:px-15 py-5 mt-10">
        <div>What you can expect:</div>
        <div className="sm:w-1/2 w-[80%] flex flex-col sm:flex-row gap-10 justify-between">
          <div className="sm:w-1/2 w-full font-[NeueMonstreal] flex flex-col gap-[2vw]">
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
      <div className="border-[#a5b95a] gap-6 flex flex-col sm:flex-row mt-20 w-full px-6 sm:px-15 border-t-1 p-10">
        <div className="w-1/2">
          <h1 className="text-[4vw] mb-4 opacity-[0.9]">Our Approach:</h1>
          <Button animator={anime} txt="Read More" />
        </div>
        <motion.div
          animate={anime[0]}
          transition={{ ease: "linear", duration: 0.6 }}
          className="overflow-hidden sm:w-1/2 rounded-2xl"
        >
          <motion.img
            className="block w-full h-full"
            animate={anime[1]}
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
