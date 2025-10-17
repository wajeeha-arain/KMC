"use client";

import Image from "next/image";
import React from "react";

export default function TrustedCompanies() {
  return (
    <section className="maincontainer relative bg-[#FFFFFF] rounded-t-[100px] py-14 flex flex-col items-center ">
      {/* Container */}
      <div className="max-w-[1170px] w-full flex flex-col items-center lg:items-start">
        {/* Heading */}
        <h2 className="text-[#6B717A] text-[24px] font-semibold uppercase text-center lg:text-left tracking-wide leading-none mb-8 font-['DM_Sans']">
          Trusted by 500+ Companies Worldwide
        </h2>

        {/* Logo Row */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center w-full gap-5">
          <Image
            src="/image/Logo(2).png"
            alt="Logo 1"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
          <Image
            src="/image/Logo(3).png"
            alt="Logo 2"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
          <Image
            src="/image/Logo(4).png"
            alt="Logo 3"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
          <Image
            src="/image/Logo(5).png"
            alt="Logo 4"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
          <Image
            src="/image/Logo(6).png"
            alt="Logo 5"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
          <Image
            src="/image/Logo(7).png"
            alt="Logo 6"
            width={163}
            height={40}
            className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
