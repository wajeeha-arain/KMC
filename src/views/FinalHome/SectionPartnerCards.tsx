"use client";

import React from "react";
import Image from "next/image";
import { PartnerCards } from "@/Component/Date/Services"; 

export default function SectionPartnerCards() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="maincontainer mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-[#FF7200] font-bold uppercase text-[14px] sm:text-[16px] lg:text-[20px] tracking-widest">
              Industry Expertise
            </p>
            <h2 className="text-[#001738] font-semibold text-[24px] sm:text-[32px] lg:text-[48px] xl:text-[55px] leading-snug py-3">
              Industries We Power Up
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#001738] pb-4 lg:pb-10">
              You bring the mission. We build the team.
            </p>
          </div>

          {/* Button on the right */}
          <div className="w-full lg:w-auto">
            <button className="w-auto bg-[#FF7200] text-white font-dmSans font-semibold text-[14px] sm:text-[16px] capitalize rounded-full px-6 sm:px-8 py-3 sm:py-4 leading-none hover:bg-[#e56700] transition">
              See Case Studies
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PartnerCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl p-5 sm:p-6 border-t-8 border-[#e56700] transition hover:scale-[1.02] ${
                card.dark ? "bg-[#001738] text-white" : "bg-[#FBFBFB] text-black"
              }`}
            >
              {/* Card Icon */}
              <Image
                src={card.icons}
                alt={card.title}
                width={48}
                height={48}
                className="mb-4"
              />

              <h4 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
                {card.title}
              </h4>

              <p
                className={`text-[14px] sm:text-[15px] lg:text-[16px] mt-3 ${
                  card.dark ? "text-[#A7B3C2]" : "text-[#6B717A]"
                }`}
              >
                {card.desc}
              </p>

              <hr
                className={`my-4 ${card.dark ? "border-[#6B717A]" : "border-[#e5e7eb]"}`}
              />

              {/* Pain Points */}
              <h5 className="font-semibold text-[#FF7200] mb-2 text-[14px] sm:text-[16px]">Pain Points:</h5>
              <ul className="space-y-2 text-[13px] sm:text-[14px]">
                {card.painPoint.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                      src={card.dark ? "/image/Icon.png" : "/image/Icon(1).png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0 mt-1"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Solutions */}
              <h5 className="font-semibold text-[#FF7200] mt-4 mb-2 text-[14px] sm:text-[16px]">Solutions:</h5>
              <ul className="space-y-2 text-[13px] sm:text-[14px]">
                {card.solution.map((solution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                      src={card.dark ? "/image/Icon.png" : "/image/Icon(1).png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0 mt-1"
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
