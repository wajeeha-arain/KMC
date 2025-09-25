"use client";

import React from "react";

export default function PremiumWorkspaces() {
  return (
    <section className="bg-white md:py-20 py-6">
      <div className="maincontainer mx-auto text-center max-w-[970px]">
        {/* Top Label */}
        <p className="inline-block text-[#FF7200] font-bold uppercase text-[20px] tracking-[0.06em] px-6 py-2 rounded-full">
          Premium Workspaces
        </p>

        {/* Heading */}
        <h2 className="font-semibold text-[32px] sm:text-[45px] lg:text-[55px] lg:leading-[62px] text-[#001738] mt-6 max-w-[900px] mx-auto">
          World-Class Talent. <br /> In World-Class Offices.
        </h2>

        {/* Description */}
        <p className="font-normal text-[16px] sm:text-[18px] text-[#6B717A] leading-[150%] mt-6 max-w-[940px] mx-auto lg:pb-0 pb-10">
          High performance teams don’t thrive in low-cost setups. Our premium
          offices protect your brand, attract better talent, and keep them
          longer.
        </p>
      </div>
    </section>
  );
}
