"use client";

import React from "react";
import Image from "next/image";

export default function CertifiedExcellence() {
  const cards = [
    {
      id: 1,
      img: "/image/Award Icon Container.png",
      title: "B-Corp Certified",
    },
    {
      id: 2,
      img: "/image/folder-star 1.png",
      title: "Great Place To Work",
    },
    {
      id: 3,
      img: "/image/medal-military 1.png",
      title: "Best Places To Work",
    },
    {
      id: 4,
      img: "/image/user-focus 1.png",
      title: "HR Asia Best Companies",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="maincontainer mx-auto ">
        {/* Heading */}
        <h2 className="text-[#001738] font-dmSans font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-snug">
          Certified Excellence
        </h2>

        <p className="text-[#6B717A] mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-[880px]">
          Recognized by leading organizations for our workplace culture and practices
        </p>

        <p className="text-[#FF7200] font-bold text-xl sm:text-2xl md:text-[30px] mt-6">
          It’s why we beat the BPO industry on retention by 2x.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border-2 border-[#FF720012] p-6 flex flex-col items-center justify-center gap-4 h-[215px] transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-[60px] h-[60px]">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[#001738] font-dmSans font-semibold text-lg sm:text-xl md:text-2xl text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
