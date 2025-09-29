"use client";

import React from "react";
import Image from "next/image";
import { leftImages, rightImages } from "@/Component/Date/Services"; 

export default function TransformBusiness() {
  const CircleImage = ({ src, alt }: { src: string; alt: string }) => (
    <div className="w-20 h-20">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="object-contain w-full h-full"
      />
    </div>
  );

  return (
    <section className="py-16 px-6">
      <div className="maincontainer mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* ✅ Left Side */}
        <div>
          {/* Large Screen → Vertical (2 then 3) */}
          <div className="hidden lg:flex flex-row gap-8">
            <div className="flex flex-col gap-6 mt-12 items-center">
              {leftImages.slice(0, 2).map((img, i) => (
                <CircleImage key={i} src={img} alt={`Left User ${i + 1}`} />
              ))}
            </div>
            <div className="flex flex-col gap-6 items-center">
              {leftImages.slice(2, 5).map((img, i) => (
                <CircleImage key={i} src={img} alt={`Left User ${i + 3}`} />
              ))}
            </div>
          </div>

          {/* Small Screen → Horizontal */}
          <div className="flex lg:hidden flex-row gap-4 flex-wrap justify-center">
            {leftImages.map((img, i) => (
              <CircleImage key={i} src={img} alt={`Left User ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* ✅ Center Content */}
        <div className="text-center max-w-2xl">
          <p className="text-[#FF7200] font-dmSans font-bold text-[20px] uppercase mb-4">
            Ready to Transform Your Business?
          </p>

          <h2 className="text-[#001738] font-dmSans font-semibold text-[32px] sm:text-[40px] lg:text-[55px] leading-snug mb-4">
            Lets Build Your Offshore Dream Team
          </h2>

          <p className="text-[#6B717A] font-dmSans text-[18px] mb-8 max-w-[554px] mx-auto">
            No fluff. No runarounds. Just an unfair hiring advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF7200] text-white font-dmSans font-semibold text-[16px] px-10 py-4 rounded-full">
              Book A Discovery Call
            </button>
            <button className="border-2 border-[#001738] bg-white text-[#001738] font-dmSans font-semibold text-[16px] px-8 py-4 rounded-full">
              Try Our AI Talent Calculator
            </button>
          </div>
        </div>

        {/* ✅ Right Side */}
        <div>
          {/* Large Screen → Vertical (3 then 2) */}
          <div className="hidden lg:flex flex-row gap-8">
            <div className="flex flex-col gap-6 items-center">
              {rightImages.slice(0, 3).map((img, i) => (
                <CircleImage key={i} src={img} alt={`Right User ${i + 1}`} />
              ))}
            </div>
            <div className="flex flex-col gap-6 mt-12 items-center">
              {rightImages.slice(3, 5).map((img, i) => (
                <CircleImage key={i} src={img} alt={`Right User ${i + 4}`} />
              ))}
            </div>
          </div>

          {/* Small Screen → Horizontal */}
          <div className="flex lg:hidden flex-row gap-4 flex-wrap justify-center">
            {rightImages.map((img, i) => (
              <CircleImage key={i} src={img} alt={`Right User ${i + 1}`} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
