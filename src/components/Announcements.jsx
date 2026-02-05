import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const tabs = ["Important Notices", "Junior School Byte", "Academic Calendar"];

const announcements = [
  {
    month: "Feb",
    day: "10",
    title: "CBSE: Annual Examination Syllabus (VII to XI)",
  },
  {
    month: "Feb",
    day: "07",
    title: "CI: Annual Examination Time Table 2024-25",
  },
  {
    month: "Feb",
    day: "07",
    title: "Annual Examination Time Table 2024-25 (VII to IX)",
  },
  {
    month: "Feb",
    day: "07",
    title: "Annual Examination Time Table 2024-25 (X and XII)",
  },
  {
    month: "Feb",
    day: "06",
    title: "Annual Examination Time Table 2024-25 (X and XII)",
  },
  {
    month: "Feb",
    day: "02",
    title: "Annual Examination Time Table 2024-25 (X and XII)",
  },
  {
    month: "Jan",
    day: "30",
    title: "Annual Examination Time Table 2024-25 (X and XII)",
  },
];

const Announcements = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto p-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-semibold mb-3">DC Announcements</h2>
            <p className="text-gray-600">
              Stay ahead with real-time updates and notices from Daly College administration.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button className="dc-prev w-12 h-12 rounded-full border flex items-center justify-center hover:bg-red-500 hover:text-white transition">
              <FaArrowLeft />
            </button>
            <button className="dc-next w-12 h-12 rounded-full border flex items-center justify-center hover:bg-red-500 hover:text-white transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".dc-next",
            prevEl: ".dc-prev",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {announcements.map((item, index) => (
           <SwiperSlide key={index}>
  <div className="h-full px-2">
    <div className="border rounded-xl p-6 h-full flex flex-col justify-between cursor-pointer transition group hover:shadow-lg">

      {/* Date Box */}
          <div className="
            mx-auto mb-6
            w-32 h-32
            flex flex-col items-center justify-center
            rounded-lg border
            transition-colors duration-300
            group-hover:bg-red-500
          ">
            <p className="text-sm text-gray-700 group-hover:text-white transition">
              {item.month}
            </p>
            <p className="text-4xl font-bold text-red-600 group-hover:text-white transition">
              {item.day}
            </p>
          </div>

          {/* Title */}
          <p className="text-gray-800 text-base leading-relaxed text-center">
            {item.title}
          </p>

        </div>
      </div>
    </SwiperSlide>

          ))}
        </Swiper>

        {/* View All */}
        <div className="flex justify-center mt-14">
          <button className="bg-red-600 text-white px-10 py-3 rounded-md hover:bg-black transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
