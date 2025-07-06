import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div className='bg-[#004D43] rounded-tl-3xl rounded-tr-3xl py-14 sm:py-20 w-full'>
        <div className="text overflow-hidden uppercase p-0 flex whitespace-nowrap text-white border-y-2 border-[#ffffff60]">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear",duration:5}} className='text-[40vw] sm:text-[25vw] pr-10 -my-[2vw] -mt-[5vw] leading-none font-[FoundersGrotesk]'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear",duration:5}} className='text-[40vw] sm:text-[25vw] pr-10 -my-[2vw] -mt-[5vw] leading-none font-[FoundersGrotesk]'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee