import React from "react";
import englishMan from "../assets/englishman.jpg";
import tajmahal from "../assets/tajmahal.jpg";

const About = () => {
  return (
    <section className="mt-16 w-full min-h-screen bg-[#FBF7E6]">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen">

        {/* LEFT PANEL */}
        <div className="flex justify-center items-center bg-[#FBF7E6]">
          <div className="max-w-sm w-full p-4 border rounded border-black-100 text-center px-10 py-12">
            <img
              src={tajmahal}
              alt="Daly College"
              className="w-36 h-36 mx-auto rounded-xl object-cover mb-8"
            />

            <h2 className="text-3xl font-semibold mb-6">
              About Daly College
            </h2>

            <p className="text-sm leading-relaxed text-gray-800 mb-6">
              The new building was inaugurated on November 14, 1885 by the
              Viceroy, Lord Dufferin. By 1891 the Holkars of Indore and the
              Scindias of Gwalior donated the two student houses.
            </p>

            <p className="text-sm leading-relaxed text-gray-800">
              In 1905 Sir Henry's son, Sir Hugh Daly, was appointed Agent
              at Indore. He took great interest in Daly College which
              flourished as a Chiefs College.
            </p>
          </div>
        </div>

        {/* CENTER PANEL */}
        <div className="flex justify-center items-center bg-[#E9DFC6]">
          <div className=" p-4  max-w-full border rounded  border-white text-center px-10 py-14">
            <p className="text-sm tracking-wide mb-3">Founded in</p>
            <h1 className="text-5xl font-bold mb-8">1870</h1>

            <div className="w-10 h-[2px] bg-white mx-auto mb-8" />

            <p className="text-lg mb-2">Campus Size</p>
            <h2 className="text-4xl font-bold mb-8">119 Acres</h2>

            <div className="w-10 h-[2px] bg-white mx-auto mb-8" />

            <p className="text-lg mb-2">Student Strength</p>
            <h2 className="text-4xl font-bold mb-8">2,000+</h2>

            <div className="w-10 h-[2px] bg-white mx-auto mb-8" />

            <p className="text-sm uppercase tracking-wide mb-2">
              student–teacher ratio
            </p>
            <h2 className="text-4xl font-bold">30 : 1</h2>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex justify-center items-center bg-[#FBF7E6]">
          <div className="max-w-sm w-full  p-4 border rounded border-black-100 text-center px-10 py-12">
            <img
              src={englishMan}
              alt="Founder"
              className="w-32 h-32 mx-auto rounded-xl object-cover mb-8"
            />

            <h2 className="text-3xl font-semibold mb-6">
              The Founder
            </h2>

            <p className="text-sm leading-relaxed text-gray-800 mb-6">
              Sir Henry Dermot Daly was born at Kirkee, near Poona, on
              25th October 1823. His father served in British Indian
              forces from 1821.
            </p>

            <p className="text-sm leading-relaxed text-gray-800">
              Sir Daly was a keen student of history and administration.
              In 1870, he took up the appointment of Agent to the Governor
              General which he held until leaving India.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
