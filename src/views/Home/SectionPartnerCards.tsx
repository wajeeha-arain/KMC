"use client";

import React from "react";
import Image from "next/image";
import { PartnerCards } from "@/Component/Date/Services"; 

export default function SectionPartnerCards() {
  return (
    <section className="bg-white py-12">
      <div className="maincontainer mx-auto">
        {/* Header */}
<p className="text-[#FF7200] font-bold uppercase text-[16px] sm:text-[20px] tracking-[6%]">
  {`Industry Expertise`}
</p>

        <h2 className="text-[#001738] font-semibold text-[28px] sm:text-[38px] lg:text-[55px] leading-snug py-4">
          Industries We Power Up
        </h2>
 
        <p className="text-[15px] sm:text-[18px] text-[#001738] lg:pb-10 pb-4 ">
       {`  You bring the mission. We build the team.`}
        </p>

        {/* Sub Heading */}


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8  ">
          {PartnerCards.map((card) => (
            <div
              key={card.id}
             className={`rounded-2xl p-6 border-t-8 border-[#e56700] transition hover:scale-[1.02] ${
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

              <h4 className="text-[18px] sm:text-[22px] lg:text-[24px] font-semibold">
                {card.title}
              </h4>

              <p
                className={`text-[14px] sm:text-[16px] mt-3 ${
                  card.dark ? "text-[#A7B3C2]" : "text-[#6B717A]"
                }`}
              >
                {card.desc}
              </p>

              <hr
                className={`my-4 ${card.dark ? "border-[#6B717A]" : "border-[#e5e7eb]"}`}
              />

              {/* Pain Points */}
              <h5 className="font-semibold text-[#FF7200] mb-2">{`Pain Points:`}</h5>
              <ul className="space-y-2 text-[14px]">
                {card.painPoint.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src={card.dark ? "/image/Icon.png" : "/image/Icon(1).png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Solutions */}
              <h5 className="font-semibold text-[#FF7200] mt-4 mb-2">{`Solutions:`}</h5>
              <ul className="space-y-2 text-[14px]">
                {card.solution.map((solution, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src={card.dark ? "/image/Icon.png" : "/image/Icon(1).png"}
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0"
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
