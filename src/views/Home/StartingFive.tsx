"use client";

import Image from "next/image";
import React from "react";
import Button from "@/Component/Button/Button";
import { startingFiveData } from "@/Component/Date/Services";

export default function StartingFive() {
  return (
    <section className="relative bg-[#eef6fb] mx-auto">
      <div className="maincontainer mx-auto px-6 lg:px-12 pt-20 lg:pb-0 sm:pb-16 pb-10 grid lg:grid-cols-12 gap-4 items-start">
        {/* Left Content */}
        <div className="lg:col-span-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 sm:leading-[58px] leading-[44px]">
            {startingFiveData.heading}
            <span className="block">
              {startingFiveData.subHeading.split("With")[0]}
              <span className="text-[#EE7A30]">With</span>{" "}
              <span className="text-[#EE7A30]">No Setup Fees</span>
            </span>
          </h1>

          <p className="sm:text-[18px] text-[16px] sm:mt-6 mt-2 text-slate-600 max-w-2xl">
            {`A limited-time offer for growing Aussie businesses.`}
          </p>

          <p className="sm:text-[18px] text-[16px] sm:mt-4 mt-2 text-slate-600 max-w-2xl">
            {startingFiveData.description}
          </p>

          <p className="sm:text-[24px] text-[16px] sm:mt-6 mt-4 font-medium text-balance text-[#051636]">
            <span className="text-[#EE7A30]">
              {startingFiveData.offer.split(",")[0]},
            </span>
            {startingFiveData.offer.replace("FOR A LIMITED TIME,", "")}
          </p>

          {/* Button */}
          <div className="mt-8">
            <Button>
              {startingFiveData.buttonText}
            </Button>
          </div>
        </div>

        {/* Right  */}
        <div className="lg:col-span-6 space-y-4">
          {startingFiveData.features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-2 border-orange-300 bg-white rounded-2xl sm:px-5 sm:py-4 px-3 py-2 shadow-sm"
            >
              <div className="flex-none w-12 h-12 flex items-center justify-center text-orange-500">
                <f.icon size={28} strokeWidth={2.2} />
              </div>
              <div className="sm:text-[20px] text-[16px] text-[#051636] font-bold leading-snug">
                {f.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[550px]">
        <Image
          src={startingFiveData.image}
          alt="team working"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
