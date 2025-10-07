"use client";

import Image from "next/image";
import React from "react";
import { pricingData, Circle, PricingData } from "@/Component/Date/Services";

export default function PricingSection() {
  const { heading, description, buttons, bgImage, circles }: PricingData =
    pricingData;

  return (
    <div className="maincontainer">
      <div className="relative bg-[#001738] rounded-[30px] shadow-lg overflow-hidden px-4 sm:px-6 lg:px-12 py-12 lg:py-8 hover:border-r-8 hover:border-b-10 hover:border-[#f1c097]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
          {/* Left Content */}
          <div className="max-w-[512px] space-y-6 mx-auto lg:text-left  text-center">
            {/* Heading */}
            <h2 className="text-white font-dm font-semibold 
            text-[32px] sm:text-[42px] lg:text-[55px] leading-snug">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-white/80 font-dm 
            text-[15px] sm:text-[18px] leading-[150%]">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center  lg:items-center gap-4 lg:py-4">
              {buttons.map((btn: PricingData["buttons"][number], i: number) => (
                <button
                  key={i}
                  className={`font-semibold text-[16px] capitalize px-12 py-3 rounded-full transition text-center 
        ${btn.variant === "primary"
                      ? "bg-[#FF7200] text-white hover:bg-[#e56700]"
                      : "text-white border-2 border-white hover:text-[#001738] hover:bg-[#f3f4f6]"
                    }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>

          </div>

       
          <div className="relative flex items-center justify-center mt-8 lg:mt-0 w-full">
            <div className="relative flex items-center justify-center w-full lg:w-[597px] aspect-[597/391]">
     
              <Image
                src={bgImage}
                alt="Background Illustration"
                fill
                className="object-cover"
              />

              {circles.map((circle: Circle, idx: number) => (
                <div
                  key={idx}
                  className="absolute w-[12%] aspect-square rounded-full border-2 border-white overflow-hidden flex items-center justify-center"
                  style={{ top: circle.top, left: circle.left }}
                >
                  <Image
                    src={circle.src}
                    alt={`Circle Icon ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
