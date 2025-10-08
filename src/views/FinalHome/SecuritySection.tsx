"use client";

import React from "react";
import Image from "next/image";
import { securityBoxes } from "@/Component/Date/Services";

export default function SecuritySection() {
  return (
    <section className="relative w-full bg-[#FFFAF5F2] py-12 md:py-20 lg:py-[100px] lg:mt-[80px]  pb-20">
      <div className="maincontainer px-4 sm:px-6 md:px-10 lg:px-[135px]">
        
        <div className="lg:text-left text-center">
          <p className="text-[#FF7200] font-bold text-base sm:text-lg md:text-[20px] uppercase tracking-wide">
            {`    Enterprise-Grade Security`}
          </p>

          <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[42px] md:text-[46px] lg:text-[55px] leading-snug lg:leading-[62px] py-4">
            {`   Enterprise-Grade Security, Tailored to You`}
          </h2>

          <p className="text-[#001738] text-[15px] md:text-[18] max-w-[1172px]">
            {` Global Brands Trust Us—Because We Build Security Around Them.`}
          </p>

          <p className="text-[#001738] text-[15px] md:text-[18px] max-w-[1172px] py-4">
            {`      At KMC, we don’t just offer secure infrastructure—we customize it to
          mirror your exact enterprise standards. Whether you’re a SaaS unicorn,
          a fintech heavyweight, or a cybersecurity powerhouse, we replicate
          your security posture offshore so you stay compliant, confident, and
          in control.`}
          </p>

          <h3 className="font-bold text-xl sm:text-2xl md:text-[30px] text-[#FF7200] mt-8">
            {`      Here’s what we secure your way:`}
          </h3>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 max-w-[1172px] w-full mt-8">
          {securityBoxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 sm:p-6 md:p-8 border border-[#D6DCE3] bg-white shadow-sm hover:shadow-md transition"
            >
              {box.image && (
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 relative">
                  <Image
                    src={box.image}
                    alt={box.title}
                    width={49}
                    height={49}
                    className="object-contain"
                  />
                </div>
              )}
              <h4 className="font-bold text-lg sm:text-[22px] text-[#001738]">
                {box.title}
              </h4>
              <p className="text-[13px] sm:text-[14] md:text-[16px] text-[#6B717A] leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
