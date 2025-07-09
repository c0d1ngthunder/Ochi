import React from 'react'

const ResponsiveMenu = ({isOpen}) => {
  return (
    <div>
        <div className={`w-full uppercase h-screen fixed -top-full left-0 bg-[#212121] z-50 flex flex-col justify-center transition-all duration-600 ${isOpen ? 'top-0' : '-top-full'}`}>
            <ul className="flex border-t-1 border-gray-500 flex-col gap-4 text-6xl text-white font-[FoundersGrotesk]">
            {["Services", "Our work", "About us", "Insights", "Contact us"].map((link, index) => (
                <li key={index} className="px-6">
                {link}
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveMenu