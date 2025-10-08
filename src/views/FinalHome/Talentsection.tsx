import Image from "next/image";
import { cards } from "@/Component/Date/Services"; 
export default function Talentsection() {
 
  return (
    <div className="maincontainer ">
      <div className="w-full mx-auto">
        <div className=" sm:text-start text-center">
      
          <h4 className="text-[#FF7200]  text-[18px] md:text-[20px] font-bold uppercase tracking-widest">
           {` Talent Strategy`}
          </h4>
          <h2 className="  text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold mt-2 mb-4 text-[#001738]">
          {`  How We Attract (and Keep) the Top 1%`}
          </h2>
          <p className="text-[#6B717A] text-[14px] sm:text-[16px] md:text-[18px] mb-10">
          {`  We’re not just fighting for talent—we’re winning.`}
          </p>

       
          <div className="flex flex-wrap justify-center lg:gap-[1px] gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-[20px] p-6  flex flex-col items-center sm:justify-none justify-evenly sm:items-start  `}
                style={{ width: "232.99px", height: "289.85px" }}
              >
       
                <div className="mb-2">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={77}
                    height={77}
                  />
                </div>

          
                <div>
                  <h3 className="lg:text-[24px]  text-[18px] sm:text-[20px] text-white pb-4 ">{card.title}</h3>
                  {card.subtitle && (
                    <p className=" text-[14px] md:text-[16px] text-white">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}