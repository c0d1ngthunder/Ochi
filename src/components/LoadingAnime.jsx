import { motion } from "motion/react";
const LoadingAnime = () => {
  return (
    <motion.div animate={{display:"none"}} transition={{delay:3.5}} className="fixed inset-0 z-[1] overflow-hidden">
      <motion.div animate={{left:"0"}} transition={{duration:1,ease:[0.25, 1, 0.5, 1]}} className="rounded-3xl absolute top-0 h-screen scale-[.75] w-[100vw] bg-[#ffffff80] z-[1] left-[-100%]"></motion.div>
      <motion.div animate={{right:"0"}} transition={{duration:1,delay:.3,ease:[0.25, 1, 0.5, 1]}} className="rounded-3xl absolute top-0 h-screen scale-[.75] w-[100vw] bg-[#ffffff80] z-[1] right-[-100%]"></motion.div>
    </motion.div>
  );
};

export default LoadingAnime;
