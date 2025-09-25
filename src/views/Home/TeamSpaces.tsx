"use client";

import React from "react";
import Image from "next/image";

export default function TeamSpaces() {
  const features = [
    {
      id: 1,
      img: "/image/globe-hemisphere-east 1.png",
      title: "30+ Flexible Office Locations",
      desc: "Philippines, Vietnam, and more",
    },
    {
      id: 2,
      img: "/image/Frame(15).png",
      title: "8 Gbps Internet & Enterprise IT",
      desc: "Because lag kills morale",
    },
    {
      id: 3,
      img: "/image/leaf 1.png",
      title: "Biophilic Design",
      desc: "Real plants, natural light, and fresh air",
    },
    {
      id: 4,
      img: "/image/Frame(17).png",
      title: "Wellness Amenities",
      desc: "Massage chairs, quiet rooms, fitness studios",
    },
    {
      id: 5,
      img: "/image/Frame(18).png",
      title: "CASA by KMC",
      desc: "Fully furnished employee housing, minutes from the office",
    },
  ];

  return (
    <section className="relative bg-white py-20  ">
      <div className="maincontainer mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-[#001738] font-semibold text-[32px] sm:text-[45px] lg:text-[55px] md:leading-[62px]">
            {`Happy teams don't just 
            work better—they stick 
            around longer.`}
          </h2>

          <p className="text-[#6B717A] text-[16px] sm:text-[18px] mt-6">
            {`Experience the difference that thoughtfully designed workspaces make
            for your team's productivity and retention.`}
          </p>

          <button className="mt-8 bg-[#FF7200] text-white font-semibold text-[16px] px-8 py-3 rounded-full capitalize">
            Tour The Spaces
          </button>
        </div>

        {/* Right Content - Features */}
        <div className="space-y-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-start gap-4 bg-[#FFFAF5] rounded-2xl p-6 shadow-sm relative z-10"
            >
              {/* Icon */}
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-xl border border-[#D5D7DA] bg-white shadow">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={32}
                  height={32}
                />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-[#001738] font-semibold text-[20px] sm:text-[24px] leading-snug">
                  {feature.title}
                </h4>
                <p className="text-[#6B717A] text-[16px] mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      

      {/* Background Image bottom aligned */}

<div className="absolute -bottom-40 left-1/3 -translate-x-1/2 max-w-[900px] pointer-events-none z-0 lg:flex hidden">
  <Image
    src="/image/NLK05459 2.png"
    alt="Happy Team"
    width={890}
    height={960}
    className="object-contain"
  />
</div>


</div>
    </section>
  );
}
