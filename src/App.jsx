import About from "./components/About"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Eyes from "./components/Eyes"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}

export default App