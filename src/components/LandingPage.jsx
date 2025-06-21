import { PiArrowDownLeftThin } from "react-icons/pi";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-gray-100 pt-1">
      <div className="textstructure mt-32 opacity-[0.86]">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker px-15 overflow-hidden">
            <div className="w-fit flex gap-[1vw]">
                {index === 1 && <div className="w-[9vw] bg-center bg-cover bg-[url('/images/content-image01.jpg')] relative top-[1vw] h-[6vw] rounded-sm bg-red-500"></div>}
              <h1 className="uppercase text-[9vw] leading-[7vw] font-[foundersGrotesk]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-1 mt-30 opacity-[0.9] border-zinc-400 flex justify-between items-center px-10 py-4">
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
      </div>
    </div>
  );
};

export default LandingPage;
