import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const slides = [
  {
    title: "Hospital",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    desc: "The menu is planned with care to ensure nutritious and balanced food.",
  },
  {
    title: "Mess for Students",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    desc: "The menu is planned with care to ensure nutritious and balanced food.",
  },
  {
    title: "Sports Facilities",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    desc: "The menu is planned with care to ensure nutritious and balanced food.",
  },
  {
    title: "Laboratories",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    desc: "The menu is planned with care to ensure nutritious and balanced food.",
  },
  {
    title: "Craft Technology Design Center",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    desc: "The menu is planned with care to ensure nutritious and balanced food.",
  },
];

const CampusInfrastructure = () => {
  const [activeIndex, setActiveIndex] = useState(
  Math.floor(slides.length / 2)
);


  const prev = () =>
    setActiveIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              Our Campus & Infrastructure
            </h2>
            <p className="text-gray-600">
              Explore our state-of-the-art academic, residential, and sports facilities.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Fixed Frame */}
        <div className="flex gap-6 items-center">

          {slides.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  relative cursor-pointer overflow-hidden
                  transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  transform-gpu
                  ${isActive
                    ? "w-[720px] h-[420px] rounded-2xl scale-100"
                    : "w-20 h-[420px] rounded-xl scale-95 opacity-80"}
                `}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                />

                {/* Active Overlay */}
                {isActive ? (
                  <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white p-6 rounded-xl max-w-md">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-sm">{item.desc}</p>
                    )}
                    <GoArrowUpRight className="mt-4" />
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rotate-[-90deg] text-white font-medium text-center px-2">
                        {item.title}
                      </span>
                    </div>
                    <GoArrowUpRight className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white" />
                  </>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CampusInfrastructure;
