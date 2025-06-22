const About = () => {
  return (
    <div className="w-full pt-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <p className="text-[4vw] leading-[4vw] px-10 pr-30 font-[NeueMonstreal] opacity-[0.9]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </p>
      <div className="flex text-lg border-t-1 w-full pr-[10vw] justify-between border-[#a5b95a] px-10 py-5 mt-10">
        <div>What you can expect:</div>
        <div className="w-1/2 flex justify-between">
          <div className="w-1/2 flex flex-col gap-[2vw]">
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
            <a href="">Instagram</a><a href="">Behance</a><a href="">Facebook</a><a href="">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="border-[#a5b95a] flex mt-20 w-full px-10 border-t-1 p-10">
        <div className="w-1/2">
            <h1 className="text-[4vw] mb-4 opacity-[0.9]">Our Approach:</h1>
            <button className="px-4 opacity-[0.9] flex items-center gap-5 uppercase py-3 bg-black text-white rounded-full">Read More <div className="w-2 h-2 bg-white rounded-full"></div></button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-2xl bg-[url('/images/HomepagePhoto.jpg')] "></div>
      </div>
    </div>
  );
};

export default About;
