"use client";

import React from "react";
import Image from "next/image";
import { certifiedExcellenceCards } from "@/Component/Date/Services";

export default function CertifiedExcellence() {
  return (
    <section className="maincontainer  lg:py-20 py-6">
 
    
     
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:text-left text-center">
      
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-[#001738] font-dmSans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-snug">
              Certified Excellence
            </h2>

            <p className="text-[#6B717A] mt-4 text-base sm:text-lg md:text-xl  max-w-[880px]">
              Recognized by leading organizations for our workplace culture and practices
            </p>

            <p className="text-[#FF7200] font-bold text-xl sm:text-2xl md:text-[30px] mt-6 lg:whitespace-nowrap">
              It’s why we beat the BPO industry on retention by 2x.
            </p>
          </div>

        
          <div className="w-full lg:w-auto text-center lg:mt-10 lg:mb-0 mb-4">
            <button className="bg-[#FF7200] text-white font-dmSans font-semibold text-[14px] sm:text-[16px] capitalize rounded-full px-8 sm:px-10 py-4 sm:py-5 leading-none hover:bg-[#e56700] transition">
              Our Talent Strategy
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {certifiedExcellenceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border-2 border-[#FF720012] p-6 flex flex-col items-center justify-center gap-4 h-[215px] transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-[60px] h-[60px]">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#001738] font-dmSans font-semibold text-lg sm:text-xl md:text-2xl text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
    
    </section>
  );
}
