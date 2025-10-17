"use client";

import Image from "next/image";
import React from "react";

export default function Logos() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="maincontainer mx-auto">
        {/* Logo Slider Container */}
        <div className="relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
          <div className="flex animate-slide gap-10 w-max">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <Image src="/image/Logo(2).png" alt="logo1" width={163} height={40} />
                <Image src="/image/Logo(3).png" alt="logo2" width={163} height={40} />
                <Image src="/image/Logo(4).png" alt="logo3" width={163} height={40} />
                <Image src="/image/Logo(5).png" alt="logo4" width={163} height={40} />
                <Image src="/image/Logo(6).png" alt="logo5" width={163} height={40} />
             
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
