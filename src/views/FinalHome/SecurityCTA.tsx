"use client";

import React from "react";

export default function SecurityCTA() {
  return (
    <section className="maincontainer w-full flex justify-center relative z-10 -mt-10">
      <div className="max-w-[1170px] w-full bg-[#001738] rounded-[30px] hover:border-[7px] hover:border-white px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 hover:shadow-[0px_4px_30px_rgba(0,0,0,0.2)]">
        
      
        <h2 className="text-white font-semibold text-[22px] sm:text-[28px] lg:text-[32px] leading-tight max-w-[492px] text-center lg:text-left">
         {` It’s your stack. Your standards. `}<br className="hidden sm:block" /> {`Just with KMC execution.`}
        </h2>

   
        <div className="flex flex-col sm:flex-row items-center gap-4">
        
          <button className="bg-[#FF7200] text-white text-[16px] font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 ">
            Meet Our Security Engineers
          </button>

          <button className="bg-transparent border-2 border-white text-white text-[16px] font-semibold rounded-full px-8 py-3 sm:py-4">
            See How We Integrate
          </button>
        </div>
      </div>
    </section>
  );
}
