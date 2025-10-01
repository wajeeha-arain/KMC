"use client";

import React from "react";
import Image from "next/image";
import { partnerSolutionsData } from "@/Component/Date/Services";

export default function PartnerSolutions() {
  return (
    <section className="bg-white py-12">
      <div className="maincontainer mx-auto">
     
        <p className="text-[#FF7200] font-bold uppercase tracking-wide text-[16px] sm:text-[20px] lg:text-left text-center">
          {`  Everything Under One Roof. Literally.`}
        </p>
        <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[42px] lg:text-[55px] leading-snug mt-4 lg:text-left text-center">
          {`   One Partner. Endless Solutions.`}
        </h2>
        <p className="max-w-[1071px] text-[15px] sm:text-[18px] text-[#001738] mt-6 lg:text-left text-center">
          {`Most offshore setups look like a patchwork: one firm for hiring,
          another for payroll, a third for office space, and zero accountability
          when things break.`}
        </p>
        <p className="text-[15px] sm:text-[18px] text-[#001738] mt-3 lg:text-left text-center">
          {`KMC is different. We own every piece of the experience—and we never
          outsource your outsourcing.`}
        </p>

        <h3 className="text-[#FF7200] text-[20px] sm:text-[24px] lg:text-[30px] font-bold mt-12 mb-8 lg:text-left text-center">
          {` Here’s what you get with us:`}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {partnerSolutionsData.map((card) => (
            <div
              key={card.id}
              className={`group p-6 sm:p-8 rounded-2xl w-full max-w-[370px] 
              transition duration-300 hover:scale-[1.02] 
              bg-white text-[#001738] border border-[#FF720012] 
              hover:bg-[#001738] hover:text-white`}
            >
             
              <Image
                src={card.img}
                alt={card.title}
                width={40}
                height={40}
                className="mb-4 transition group-hover:brightness-0 group-hover:invert"
              />


              <h4 className="text-[18px] sm:text-[22px] lg:text-[24px] font-semibold">
                {card.title}
              </h4>
              <p
                className={`text-[14px] sm:text-[16px] mt-3 transition-colors text-[#6B717A] group-hover:text-white`}
              >
                {card.desc}
              </p>

              <hr
                className={`my-4 transition-colors border-[#e5e7eb] group-hover:border-white`}
              />

              <ul className="space-y-2 text-[14px] transition-colors text-[#6B717A] group-hover:text-white">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src="/image/Icon(1).png"
                      alt="check icon"
                      width={18}
                      height={18}
                      className="shrink-0 group-hover:brightness-0 group-hover:invert transition"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

       
          <div className="rounded-2xl overflow-hidden shadow-md transition duration-300 hover:scale-[1.02]  w-full max-w-[370px] aspect-[4/5]">
            <Image
              src="/image/Container.png"
              alt="KMC Office"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
