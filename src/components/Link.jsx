import gsap from "gsap";
import { useRef } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Link = ({ index, title }) => {
  const linkref = useRef(null);

  const btnAnimation = (yOffset, xoffset) => {
    gsap.to(linkref.current.querySelectorAll(".frame-content"), {
      yPercent: yOffset,
      duration: 0.5,
      ease: "power2.inOut",
    });
    let options = {
      xPercent: xoffset,
      duration: 0.5,
      ease: "power2.inOut",
    };
    if (xoffset == 200) {
      options.onComplete = () => {
        gsap.set(linkref.current.querySelectorAll(".line"), { xPercent: 0 });
      };
    }
    gsap.to(linkref.current.querySelectorAll(".line"), { ...options });
  };

  return (
    <div
      className={`w-16 ${index === 4 && "ml-[7vw] w-20"}`}
      ref={linkref}
      onMouseEnter={() => btnAnimation(-100, 100)}
      onMouseLeave={() => btnAnimation(0, 200)}
    >
      <div className="frame relative h-[85%] w-full overflow-hidden">
        <div className="frame-content h-full flex items-center justify-center gap-3">
          <span>{title}</span>
        </div>

        <div className="frame-content h-full flex items-center justify-center gap-3">
          <span>{title}</span>
        </div>
        <div className="line h-[1px] w-full opacity-90 bg-black absolute bottom-0 -left-full"></div>
      </div>
    </div>
  );
};

export default Link;
