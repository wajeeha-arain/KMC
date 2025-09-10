"use client";

import Image from "next/image";
import React from "react";
import Button from "@/Component/Button/Button";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="maincontainer grid lg:grid-cols-12 gap-10 items-center mt-4 lg:mt-0">
        {/* Left */}
        <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[120%] text-[#051636] capitalize">
            {`Build`}{" "}
            <span className="text-[#EE7A30]">{`Your Offshore Team.`}</span>{" "}
            {`The Easy Way.`}
          </h1>

          {/* Paragraphs */}
          <p className="text-[#757575] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[615px] mx-auto lg:mx-0">
            {`Growing a business in Australia isn’t easy. Talent shortages, rising
            overheads, and the pressure to scale fast can pull you in every
            direction. That’s where we come in.`}
          </p>
          <p className="text-[#757575] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[615px] mx-auto lg:mx-0">
            {`KMC helps Aussie businesses build high-performing offshore teams in
            the Philippines—without the hassle. You stay focused on running the
            business. We take care of the rest: recruitment, HR, compliance,
            payroll, offices, and more.`}
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="mt-4">{`Book A Call`}</Button>
          </div>
        </div>

        {/* Right Content */}
        <div className=" lg:col-span-6 relative flex justify-center my-4 lg:my-0">
          {/* Main Rectangle */}
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[450px] aspect-[9/11] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden relative">
            <Image
              src="/image/Rectangle 88(1).png"
              alt="Main team"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle Top Left */}
          <div className="absolute -top-[-40px] -left-4  w-[25%] sm:w-[28%] md:w-[30%] lg:w-[195px] aspect-square rounded-full overflow-hidden shadow-md">
            <Image
              src="/image/Ellipse 2(1).png"
              alt="Small circle 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Circle Bottom Right */}
          <div className="absolute -bottom-[-50px] -right-4  w-[26%] sm:w-[30%] md:w-[32%] lg:w-[204px] aspect-square rounded-full  overflow-hidden shadow-md">
            <Image
              src="/image/Ellipse 3(1).png"
              alt="Small circle 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
