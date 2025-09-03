"use client";

import Image from "next/image";
import Button from "@/Component/Button/Button";
import { images } from "@/Component/Date/Services";

export default function Officeroom() {
  return (
    <section className="maincontainer bg-white py-12 sm:py-16 font-beVietnam">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] font-semibold leading-snug">
          <span className="text-[#051636]">Where </span>
          <span className="text-[#EE7A30] font-normal">Great Teams</span>
          <br />
          <span className="text-[#051636]">Show Up To </span>
          <span className="text-[#EE7A30] font-normal">Work</span>
        </h2>
        <p className="text-[#757575] max-w-3xl lg:max-w-4xl mx-auto mt-4 font-normal text-[15px] sm:text-[16px] md:text-[18px]">
          {`High-performing people deserve better than bare-bones setups. Our premium Philippine offices give your team what they need to thrive—modern, secure, and purpose-built for productivity.`}
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] rounded-[30px] overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`office-${index}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center">
        <Button>Take A Virtual Office Tour</Button>
      </div>
    </section>
  );
}
