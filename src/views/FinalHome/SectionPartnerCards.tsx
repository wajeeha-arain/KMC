"use client";

import React from "react";
import Image from "next/image";
import { PartnerCards } from "@/Component/Date/Services";

export default function SectionPartnerCards() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="maincontainer mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      
          <div className="max-w-xl">
            <p className="text-[#FF7200] font-bold uppercase text-[14px] sm:text-[16px] lg:text-[20px] tracking-widest lg:text-left text-center">
              Industry Expertise
            </p>
            <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[42px] lg:text-[55px] py-3 whitespace-nowrap lg:text-left text-center">
              Industries We Power Up
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#001738] pb-2 lg:pb-10 lg:text-left text-center">
              You bring the mission. We build the team.
            </p>
          </div>

          <div className="w-full lg:w-auto text-center lg:mt-14 lg:mb-0 mb-4">
            <button className="w-auto bg-[#FF7200] text-white font-dmSans font-semibold text-[14px] sm:text-[16px] capitalize rounded-full px-6 sm:px-8 py-3 sm:py-4 leading-none hover:bg-[#e56700] transition">
              See Case Studies
            </button>
          </div>
        </div>

      
        <div
          className={`mt-8 flex flex-wrap justify-center gap-6 lg:gap-8`}
        >
          {PartnerCards.map((card) => (
            <div
              key={card.id}
              className="group w-full sm:w-[48%] lg:w-[30%] rounded-2xl p-5 sm:p-6 border-t-8 border-[#e56700] transition hover:scale-[1.02] 
              flex flex-col h-full bg-[#FBFBFB] hover:bg-[#001738] text-[#001738] hover:text-[#fff]"
            >
              {/* Card Icon */}
              <Image
                src={card.icons}
                alt={card.title}
                width={48}
                height={48}
                className="mb-4 transition"
              />

              <h4 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
                {card.title}
              </h4>

              <p className="text-[14px] sm:text-[15px] lg:text-[16px] mt-3 text-[#6B717A] group-hover:text-gray-300 transition">
                {card.desc}
              </p>

              <hr className="my-4 border-[#e5e7eb] group-hover:border-gray-600 transition" />

              <h5 className="font-semibold text-[#FF7200] mb-2 text-[14px] sm:text-[16px]">
                Pain Points:
              </h5>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#6B717A] group-hover:text-gray-300">
                {card.painPoint.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                      src={"/image/Icon.png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0 mt-1 filter brightness-0 invert-[10%] sepia saturate-500 hue-rotate-[200deg] 
                        group-hover:invert group-hover:white transition"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex-grow"></div>

              <h5 className="font-semibold text-[#FF7200] mt-4 mb-2 text-[14px] sm:text-[16px]">
                Solutions:
              </h5>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#6B717A] group-hover:text-gray-300">
                {card.solution.map((solution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                      src={"/image/Icon.png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0 mt-1 filter brightness-0 invert-[10%] sepia saturate-500 hue-rotate-[200deg] 
                        group-hover:invert group-hover:white transition"
                    />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
