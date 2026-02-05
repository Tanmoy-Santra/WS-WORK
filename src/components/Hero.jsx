import React from "react"
import heroVideo from "../assets/hero_video.mp4"
import { MdEditNote } from "react-icons/md"
import { LuMessageSquareText, LuUserCheck } from "react-icons/lu"
import { LiaIndustrySolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { FaTasks } from "react-icons/fa"

const Hero = () => {
  return (
    <section className="h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay (does NOT block hover) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Live. Learn. Lead.
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-lg">
          Shaping Leaders Since 1882
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base bg-red-500 hover:bg-white hover:text-black transition">
            <MdEditNote size={20} />
            Explore Admission
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base border border-white bg-black/20 hover:bg-white hover:text-black transition">
            <LuMessageSquareText size={20} />
            Enquire Now
          </button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
        <div className="flex  ">
          
          <button className="flex items-center gap-2 px-4 py-3 text-white hover:bg-red-500 transition">
            <LiaIndustrySolid size={22} />
            <span className="hidden sm:inline text-sm">Our Business</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-3 text-white 
            border-l border-r border-white hover:bg-red-500 transition">
            <LuUserCheck size={22} />
            <span className="hidden sm:inline text-sm">Parents Login</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-3 text-white 
            border-r border-white hover:bg-red-500 transition">
            <TbListDetails size={22} />
            <span className="hidden sm:inline text-sm">Office Details</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-3 text-white hover:bg-red-500 transition">
            <FaTasks size={22} />
            <span className="hidden sm:inline text-sm">Daily Tracks</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
