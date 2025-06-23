import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import LocomotiveScroll from "locomotive-scroll";
import Cards from "./components/Cards";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <div className="parallax  z-50 relative" data-scroll data-scroll-section data-scroll-speed=".3">
        <Marquee />
        <About />
      </div>
      <Eyes />
      <Featured />
      <Cards />
    </div>
  );
};

export default App;
