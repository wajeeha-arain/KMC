import React from "react";
import Image from "next/image";
import cardData from "@/Component/Date/Services"; 
import Button from "@/Component/Button/Button"; 

const Cards = () => {
  return (
    <div className="bg-gradient-to-b from-white via-orange-100 to-white lg:py-10 py-6">
      <div className="maincontainer">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[28px] lg:gap-[30px] items-center">

 
          <div className="flex flex-col gap-4 justify-center items-center sm:items-start max-w-[400px] text-center sm:text-start mx-auto sm:mx-0">
            <h2 className="font-semibold text-[#051636] text-3xl md:text-[40px] lg:text-[45px] leading-[38px] sm:leading-[48px] lg:leading-[58px]">
              Trusted By Top Employers <br />
              <span className="text-[#EE7A30]"> Across Asia- Pacific </span>
            </h2>
            <p className="font-normal text-[#757575] text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px]">
            {`  Aussies care about workplace culture—and so do we. That’s why we’ve
              been recognised across APAC as a leader in ethical employment,
              talent retention, and employee wellbeing.`}
            </p>
          </div>

       
          {cardData.map((card, i) => (
            <div
              key={i}
              className="bg-[#FFFDFC] border border-[#FF720080] rounded-[30px] p-6 w-full max-w-[400px] min-h-[380px] sm:min-h-[420px] md:min-h-[450px] flex flex-col shadow-sm hover:shadow-lg mx-auto"
            >
              <div className="mb-4">
                <Image
                  src={card.Image}
                  alt={card.title}
                  width={120}
                  height={100}
                  className="object-contain w-[120px] h-[130px]"
                />
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <h3 className=" font-semibold text-[18px] sm:text-[20px] md:text-[28px] leading-[26px] sm:leading-[30px] md:leading-[34px] capitalize text-orange-500 break-words">
                  {card.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#051636]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

   
        <div className="flex justify-center mt-8">
          <Button>See What These Certifications Mean for You</Button>
        </div>

     
        <p className="mt-6 text-center  text-[16px] sm:text-[18px] md:text-[20px]
         lg:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[34px] lg:leading-[40px] text-gray-700 uppercase">
          <span className="text-[#EE7A30] font-semibold">These aren’t marketing badges</span>, they’re signals that{" "}
          <span className="text-[#EE7A30] font-semibold">your offshore</span> team will be{" "}
          <span className="text-[#EE7A30] font-semibold">supported</span>,{" "}
          <span className="text-[#EE7A30] font-semibold">stable</span>, and{" "}
          <span className="text-[#EE7A30] font-semibold">proud to work</span> for you.
        </p>
      </div>
    </div>
  );
};

export default Cards;