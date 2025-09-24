"use client";

import Image from "next/image";
import React from "react";
import { pricingData, Circle, PricingData } from "@/Component/Date/Services";

export default function PricingSection() {
  const { heading, description, buttons, bgImage, circles }: PricingData =
    pricingData;

  return (
    <div className="maincontainer">
      <div className="relative bg-[#001738] rounded-[30px] shadow-lg overflow-hidden px-4 sm:px-6 lg:px-12 py-12 lg:py-2 border-r-8 border-b-10 border-[#f1c097]">
        <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-10">
          {/* Left Content */}
          <div className="max-w-[512px] space-y-6">
            <h2 className="text-white font-dm font-semibold text-[28px] sm:text-[36px] lg:text-[55px] leading-[36px] sm:leading-[44px] lg:leading-[62px]">
              {heading}
            </h2>

            <p className="text-white/80 font-dm text-[16px] sm:text-[18px] lg:text-[24px] leading-snug">
              {description}
            </p>

            {/* ✅ Buttons (fixed wrapper) */}
            <div className="flex flex-col sm:flex-row gap-4 lg:py-4">
              {buttons.map((btn: PricingData["buttons"][number], i: number) => (
                <button
                  key={i}
                  className={`font-semibold text-[14px] sm:text-[16px] capitalize px-12 py-3 rounded-full transition flex-1 text-center 
                    ${
                      btn.variant === "primary"
                        ? "bg-[#FF7200] text-white hover:bg-[#e56700]"
                        : "text-white border-2 border-white hover:text-[#001738] hover:bg-[#f3f4f6]"
                    }`}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Image with Circles */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0 w-full">
            <div className="relative flex items-center justify-center w-full lg:w-[597px] aspect-[597/391]">
              {/* Background Image */}
              <Image
                src={bgImage}
                alt="Background Illustration"
                fill
                className="object-cover"
              />

              {/* Circles */}
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
