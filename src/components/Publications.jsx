import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import newsletter from "../assets/newsletter.jpg";
import brochure from "../assets/brochure.jpg";
import magazine from "../assets/magazine.jpg";

const Card = ({ image, text }) => (
  <div className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer">

    {/* Image */}
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Base dark overlay (always visible) */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Red gradient overlay (hover only) */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-red-700 via-red-600/80 to-transparent
                 opacity-0 group-hover:opacity-100 transition duration-500"
    />

    {/* CENTER ARROW (hover only) */}
    <div
      className="absolute inset-0 flex items-center justify-center
                 opacity-0 scale-75
                 group-hover:opacity-100 group-hover:scale-100
                 transition duration-300"
    >
      <FaArrowUpRightFromSquare className="text-white text-4xl" />
    </div>

    {/* TEXT (ALWAYS VISIBLE) */}
    <div className="absolute bottom-8 left-0 right-0 text-center z-10">
      <h3 className="text-white text-2xl font-semibold tracking-wide">
        {text}
      </h3>
    </div>
  </div>
);

const Publications = () => {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#222_0%,_#000_70%)] opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Read. Discover. Connect.
          </h1>
          <p className="text-gray-300">
            Experience Daly College Through Our Publications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card image={newsletter} text="Read Our Newsletter" />
          <Card image={brochure} text="Download Brochure" />
          <Card image={magazine} text="Explore DC Magazine" />
        </div>

      </div>
    </section>
  );
};

export default Publications;
