"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MdPlayArrow,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { customerSuccessData } from "@/Component/Date/Services";

export default function CustomerSuccess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = customerSuccessData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % customerSuccessData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + customerSuccessData.length) % customerSuccessData.length
    );
  };

  return (
    <section className="w-full bg-white py-14 sm:py-20 font-beVietnam transition-all duration-500">
      <div className="maincontainer max-w-[1170px] mx-auto px-4 text-center">
        {/* Section Label */}
        <p className="text-[#FF7200] uppercase tracking-[6%] font-bold text-[16px] sm:text-[20px]">
          Customer Success Stories
        </p>

        {/* Dynamic Heading */}
        <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[42px] lg:text-[55px] leading-[120%] mt-4 transition-all duration-500">
          {current.title}
        </h2>

        {/* Image Slider Container */}
        <div className="relative mt-8 sm:mt-12 rounded-[12px] overflow-hidden border border-[#D9D9D9] transition-all duration-700">
          <Image
            key={current.bg}
            src={current.bg}
            alt={current.name}
            width={1220}
            height={650}
            className="w-full object-cover transition-all duration-700"
          />

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] 
              flex items-center justify-center rounded-full bg-white/70 
              backdrop-blur-[7px] shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MdPlayArrow className="text-[#FF7200] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>
          </div>

          {/* Left & Right Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#FF7200] border border-[#F5F5F5] 
            flex items-center justify-center rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] transition"
          >
            <MdKeyboardArrowLeft className="text-[#001738] text-2xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-[#FF7200] border border-[#F5F5F5] 
            flex items-center justify-center rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] transition"
          >
            <MdKeyboardArrowRight className="text-[#001738] text-2xl" />
          </button>

          {/* Bottom Content */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 px-2 sm:px-6 w-full">
            {/* Client Info */}
            <div
              className="sm:flex hidden items-center gap-2 max-w-[160px] sm:max-w-[200px] md:max-w-[220px] 
              h-auto sm:h-[65px] bg-white rounded-full 
              px-2 py-2 sm:py-[6px] text-left mb-4 sm:mb-6"
            >
              <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <p className="font-[600] text-[15px] sm:text-[18px] md:text-[20px] leading-[120%] text-[#001738]">
                  {current.name}
                </p>
                <p className="font-[700] text-[12px] sm:text-[14px] md:text-[15px] leading-[120%] text-[#6B717A]">
                  {current.position}
                </p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-[15px] sm:text-[22px] md:text-[28px] lg:text-[34px] sm:text-left text-center font-semibold leading-[120%] text-white drop-shadow-lg transition-all duration-500">
              {current.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
