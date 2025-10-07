import React from "react";
import Image from "next/image";
import { businessData } from "@/Component/Date/Services"; 
import Button from "@/Component/Button/Button"; 

const Businesses = () => {
  return (
    <section className="w-full bg-white lg:py-20 py-6">
      <div className="maincontainer text-center">
        <div className="max-w-[970px] mx-auto">
          <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-semibold leading-[38px] sm:leading-[48px] lg:leading-[58px] capitalize text-[#0A1633]">
            Why <span className="text-[#FF6B00]">Aussie Businesses</span> Back KMC
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[30px] text-[#757575] mt-4">
            We’re not just another offshore provider—we’re a true partner who
            understands how Australians do business: straight-talking, reliable,
            and built for long-term success.
          </p>
        </div>
        <div className="max-w-[760px] mx-auto mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 text-center">
          {businessData.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className={`text-center px-6 ${
                idx === 0 ? "sm:border-r sm:border-[#E1E1E1]" : ""
              }`}
            >
              <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] mx-auto relative flex items-center justify-center rounded-full overflow-hidden">
                {item.bg && (
                  <Image
                    src={item.bg || "/image/fallback.png"}
                    alt="circle bg"
                    fill
                    className="object-cover"
                  />
                )}
             
                {item.img && (
                  <Image
                    src={item.img || "/image/fallback.png"}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="z-10 object-contain sm:w-[60px] sm:h-[60px]"
                  />
                )}
              </div>
              <h3 className="mt-4   text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
                <span className="text-[#FF6B00]">{item.title}</span>
                {item.title1 && (
                  <span className="text-[#051636]">{item.title1}</span>
                )}
              </h3>
              <p className="text-[#B8B8B8] text-[12px] sm:text-[14px] mt-3">
                {item.text}
              </p>
            </div>
          ))}
        </div>

       
        <div className="max-w-[1254px] mx-auto mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 text-center">
          {businessData.slice(2).map((item, idx) => (
            <div
              key={idx}
              className={`text-center px-6
                ${idx === 0 ? "sm:border-r sm:border-[#E1E1E1]" : ""}
                ${idx === 1 ? "lg:border-r lg:border-[#E1E1E1]" : ""}
              `}
            >
              <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] mx-auto relative flex items-center justify-center rounded-full overflow-hidden">
           
                {item.bg && (
                  <Image
                    src={item.bg || "/image/fallback.png"}
                    alt="circle bg"
                    fill
                    className="object-cover"
                  />
                )}
              
                {item.img && (
                  <Image
                    src={item.img || "/image/fallback.png"}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="z-10 object-contain sm:w-[60px] sm:h-[60px]"
                  />
                )}
              </div>
              <h3 className="mt-4 text-[20px] sm:text-[24px] font-semibold">
                <span className="text-[#FF6B00]">{item.title}</span>
                {item.title1 && (
                  <span className="text-[#051636]">{item.title1}</span>
                )}
              </h3>
              <p className="text-[#757575] text-[14px] sm:text-[18px] mt-3">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <Button>Speak with a Remote Team Specialist</Button>
        </div>
      </div>
    </section>
  );
};

export default Businesses