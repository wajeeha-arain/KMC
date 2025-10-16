"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MdPlayArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { clients } from "@/Component/Date/Services"; // 👈 import data from separate file

export default function ClientSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % clients.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);

  const currentClient = clients[currentIndex];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f8fbff] py-16 font-beVietnam">
      <div className="maincontainer mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12">
          <div className="max-w-2xl text-center lg:text-left transition-all duration-500">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] leading-[110%] font-semibold">
              <span className="text-[#051636]">
                {currentClient.heading.split(" ")[0]}{" "}
              </span>
              <span className="text-[#EE7A30] font-normal">
                {currentClient.heading.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-[#757575] text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] mt-4 transition-all duration-500">
              {currentClient.description}
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center space-x-4 mt-6 lg:mt-16 justify-center lg:justify-end w-full lg:w-auto">
            <button
              onClick={handlePrev}
              className="w-[50px] h-[50px] rounded-full bg-white border border-[#F5F5F5] flex items-center justify-center hover:bg-[#EE7A30] transition"
            >
              <MdKeyboardArrowLeft className="text-[#051636] text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] rounded-full bg-white border border-[#F5F5F5] flex items-center justify-center hover:bg-[#EE7A30] transition"
            >
              <MdKeyboardArrowRight className="text-[#051636] text-2xl" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mx-auto max-w-[1260px] h-[350px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[30px] overflow-hidden transition-all duration-500">
          <Image
            key={currentClient.image}
            src={currentClient.image}
            alt={currentClient.name}
            fill
            className="object-cover transition-all duration-700"
            priority
          />

          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span
              className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full 
              bg-white/20 backdrop-blur-md 
              border border-[#D9D9D9] shadow-md 
              hover:scale-105 transition"
            >
              <MdPlayArrow className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] text-[#EE7A30]" />
            </span>
          </button>

          {/* Text Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-between text-white transition-all duration-500">
            <div className="text-center sm:text-left">
              <h3 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold leading-[100%]">
                {currentClient.name}
              </h3>
              <div className="w-[200px] sm:w-[340px] h-0 opacity-20 border border-white my-4 mx-auto sm:mx-0"></div>
              <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal opacity-90">
                {currentClient.position}
              </p>
            </div>

            {/* Dots */}
            <div className="flex space-x-2 mt-6 sm:mt-0">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === currentIndex
                      ? "bg-[#EE7A30] scale-110"
                      : "bg-[#FFFFFF66] hover:bg-[#EE7A30]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
