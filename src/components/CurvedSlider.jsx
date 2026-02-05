import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
  "https://images.pexels.com/photos/6348018/pexels-photo-6348018.jpeg",
];

const CurvedSlider = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-6">
        
        {/* Header + Navigation */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-semibold">Gallery</h2>

          <div className="flex gap-3">
            <button className="curved-prev w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaArrowLeft />
            </button>
            <button className="curved-next w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".curved-prev",
            nextEl: ".curved-next",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg
                           transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default CurvedSlider;
