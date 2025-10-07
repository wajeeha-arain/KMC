"use client";

import React from "react";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

export default function CustomerSuccess() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="maincontainer max-w-[1170px] mx-auto px-4 text-center">
        <p className="text-[#FF7200] uppercase tracking-[6%] font-bold text-[16px] sm:text-[20px]">
          Customer Success Stories
        </p>

        <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[42px] lg:text-[55px] leading-[120%] mt-4">
          What Our Clients Say
        </h2>

        <div className="relative mt-8 sm:mt-12 rounded-[12px] overflow-hidden border border-[#D9D9D9]">
          <Image
            src="/image/Background Image(2).png"
            alt="Client Office"
            width={1220}
            height={650}
            className="w-full object-cover"
          />

         
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              className="w-[40px] h-[40px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px] 
              flex items-center justify-center rounded-full bg-white/70 
              backdrop-blur-[7px] shadow-lg transition-all duration-300 hover:scale-105"
            >
              <MdPlayArrow className="text-[#FF7200] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>
          </div>

      
          <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 px-2 sm:px-6 w-full">
         
            <div
              className="sm:flex hidden items-center gap-2 max-w-[160px] sm:max-w-[200px] md:max-w-[220px] 
              h-auto sm:h-[65px] bg-white rounded-full 
              px-2 py-2 sm:py-[6px] text-left mb-4 sm:mb-6"
            >
              <div className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/image/Icon Container.png"
                  alt="Client"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <p className="font-[600] text-[15px] sm:text-[18px] md:text-[20px] leading-[120%] text-[#001738]">
                  Viking Cloud
                </p>
                <p className="font-[700] text-[12px] sm:text-[14px] md:text-[15px] leading-[120%] text-[#6B717A]">
                  CTO
                </p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-[15px] sm:text-[22px] md:text-[28px] lg:text-[34px] sm:text-left text-center font-semibold leading-[120%]  text-white drop-shadow-lg">
              “We scaled 100+ engineers in 90 days. No hiccups. No excuses.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
