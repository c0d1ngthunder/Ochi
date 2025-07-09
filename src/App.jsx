import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import LocomotiveScroll from "locomotive-scroll";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import LoadingAnime from "./components/LoadingAnime";
import { useState } from "react";
import ResponsiveMenu from "./components/ResponsiveMenu";

const App = () => {
  const isMobile = window.innerWidth < 768;
  const [isOpen, setIsOpen] = useState(false);
  if (!isMobile) {
    const locomotiveScroll = new LocomotiveScroll();
  }
  return (
    <motion.div data-scroll data-scroll-container animate={{backgroundColor:"var(--color-gray-100)"}} transition={{delay:2,duration:.3}} className="w-full overflow-x-hidden min-h-screen bg-[#000000de]">
      <LoadingAnime />
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <ResponsiveMenu isOpen={isOpen} />
      <LandingPage />
      <motion.div initial={{display:"none"}} animate={{display:"block"}} transition={{duration:.3,delay:2}}>
        <div
          className="parallax  z-50 relative"
          data-scroll
          data-scroll-section
          data-scroll-speed=".3"
        >
          <Marquee />
          <About />
        </div>
        <Eyes />
        <Featured />
        <Cards />
        <Footer />        
      </motion.div>
    </motion.div>
  );
};

export default App;
