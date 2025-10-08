"use client";

import React from "react";
import Button from "@/Component/Button/Button";
import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="maincontainer relative w-full">
     
      <div
        className="relative z-10 max-w-[1263px] mx-auto flex flex-col items-center justify-center text-center 
        rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] 
        border border-[#FF720080] bg-[#fff2ee] 
        px-4 sm:px-6 md:px-10 lg:px-16 
        py-8 sm:py-12 lg:py-14 
        overflow-hidden" 
      >
      
        <div
          className="absolute left-0 lg:left-[-20px] top-[60px]  lg:top-[120px] 
          w-[100px] sm:w-[180px] md:w-[250px] lg:w-[380px] z-0 hidden lg:block"
        >
          <Image
            src="/image/Union(3).png"
            alt="Decoration Left"
            width={414}
            height={275}
            className="w-full h-auto"
            priority
          />
        </div>

        
        <div
          className="absolute right-0 lg:right-[-20px] top-[10px] sm:top-[30px] lg:top-[0px] 
          w-[100px] sm:w-[180px] md:w-[220px] lg:w-[330px] z-0 hidden lg:block"
        >
          <Image
            src="/image/Union(4).png"
            alt="Decoration Right"
            width={275}
            height={275}
            className="w-full h-auto "
            priority
          />
        </div>

        <h2
          className="text-[#051636] font-semibold 
           text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] 
          leading-snug md:leading-[38px] lg:leading-[50px] capitalize relative z-10"
        >
          {`One Partner.`}
          <br />
          <span className="font-normal text-[#EE7A30]">
           {` One Simple Setup.`}
          </span>
        </h2>

       
        <p
          className="mt-4 sm:mt-6 max-w-[590px] text-[#757575] font-normal 
          text-sm sm:text-base md:text-lg 
          leading-[20px] sm:leading-[24px] md:leading-[26px] relative z-10"
        >
          {`You don’t need to figure this out on your own. Let’s build your
          offshore team together—with a partner who’s done it for hundreds of
          Aussie businesses just like yours.`}
        </p>

        <div className="mt-6 sm:mt-8 relative z-10">
          <Button>{`Book Your Discovery Call Today`}</Button>
        </div>
      </div>
    </section>
  );
}
