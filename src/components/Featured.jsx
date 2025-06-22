import { TbPointFilled } from "react-icons/tb";
const Featured = () => {
  return (
    <div className="w-full py-20 bg-gray-100 z-[9] relative">
      <div className="w-full">
        <h1 className="text-6xl border-b-1 pb-12 px-15 border-zinc-400 font-[NeueMonstreal] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="cards mt-10 px-15 flex gap-10">
        <div className="card-container w-1/2 h-[70vh]">
          <div className="top flex items-center justify-start gap-3">
            <TbPointFilled className="text-xl" />
            <span className="uppercase inline-block font-[NeueMonstreal] text-sm">
              Salience Labs
            </span>
          </div>
          <div className="card w-full rounded-2xl h-full bg-blue-400"></div>
        </div>
        <div className="card-container w-1/2 h-[70vh]">
        <div className="top flex items-center justify-start gap-3">
          <TbPointFilled className="text-xl"/>
          <span className="uppercase inline-block font-[NeueMonstreal] text-sm">Cardboard Spaceship</span>
        </div>
          <div className="card w-full rounded-2xl h-full bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
