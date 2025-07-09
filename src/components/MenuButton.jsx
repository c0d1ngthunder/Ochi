import { useRef, useState } from 'react';
import { gsap } from 'gsap';

const MenuButton = ({isOpen,setIsOpen}) => {
  const topLine = useRef(null);
  const bottomLine = useRef(null);

  const toggleMenu = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.inOut' } });

    if (!isOpen) {

      // Move both lines to center and rotate
      tl.to(topLine.current, { y: 4, rotate: 45 }, 0)
        .to(bottomLine.current, { y: -4, rotate: -45 }, 0);
    } else {
      // Reset to original position
      tl.to(topLine.current, { y: 0, rotate: 0 }, 0)
        .to(bottomLine.current, { y: 0, rotate: 0 }, 0);
    }

    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleMenu} className="w-10 md:hidden h-10 relative">
      <div
        ref={topLine}
        className="w-6 h-[2px] bg-gray-500 rounded absolute left-1/2 transform -translate-x-1/2 origin-center"
        style={{ top: 'calc(50% - 4px)' }}
      />
      <div
        ref={bottomLine}
        className="w-6 h-[2px] bg-gray-500 rounded absolute left-1/2 transform -translate-x-1/2 origin-center"
        style={{ top: 'calc(50% + 4px)' }}
      />
    </button>
  );
};

export default MenuButton;
