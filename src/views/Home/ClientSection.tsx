"use client";

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

export default function ClientSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f8fbff] py-16 font-beVietnam">
      <div className="maincontainer mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-12 text-left">
          <h2 className="text-[45px] leading-[100%] font-normal">
            <span className="text-[#051636]">What Our </span>
            <span className="text-[#EE7A30]">Clients Say</span>
          </h2>
          <p className="text-[#757575] text-[18px] leading-[26px] max-w-2xl mt-4">
            Don’t take our word for it—see it for yourself. We’ve helped hundreds of
            Aussie businesses scale with offshore teams that actually work.
          </p>
        </div>

        {/* Video/Image Container */}
        <div className="relative mx-auto max-w-[1260px] h-[650px] rounded-[30px] overflow-hidden shadow-lg">
          <Image
            src="/image/Rectangle 63(1).png"
            alt="Client"
            fill
            className="object-cover"
            priority
          />

          {/* Play Button with blur + transparent bg */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span
              className="w-[80px] h-[80px] flex items-center justify-center rounded-full 
              bg-white/20 backdrop-blur-md 
              border border-[#D9D9D9] shadow-md 
              hover:scale-105 transition"
            >
              <MdPlayArrow className="w-[22px] h-[26px] text-[#EE7A30]" />
            </span>
          </button>
        </div>

        {/* Client Name */}
        <div className="mt-8 text-left">
          <h3 className="text-[32px] font-semibold leading-[100%] text-[#051636]">
            James W.
          </h3>
          <p className="text-[20px] font-normal text-[#757575]">
            CEO, Aussie Business
          </p>
        </div>
      </div>
    </section>
  );
}
