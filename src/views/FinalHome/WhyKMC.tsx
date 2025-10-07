import Image from "next/image";
import { whyKMCData } from "@/Component/Date/Services"; 

interface KMCDataItem {
  img: string;
  title: string;
  text: string;
  dark?: boolean;
}

const WhyKMC = () => {
  const allCards: KMCDataItem[] = whyKMCData;

  const renderCard = (card: KMCDataItem, i: number) => (
    <div
      key={i}
      className={`relative rounded-[20px] border hover:bg-[#0A1A2F] hover:text-white border-[#D6DCE3] p-2 ${
        card.dark ? "hover:bg-[#0A1A2F] hover:text-[#fff]" : "bg-white"
      }`}
      style={{ width: "100%", maxWidth: "370px" }}
    >
      <div className="w-full h-[450px] relative overflow-hidden rounded-[16px]">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover rounded-[16px]"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[24px] mb-2 leading-[30px]">
          {card.title}
        </h3>
        <p className="text-[14px] sm:text-[16px] text-[#0A1A2F] leading-[20px]">
          {card.text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="maincontainer lg:py-20 py-6 ">
      <div className="w-full  mx-auto">
    
        <div className="max-w-[1092px] mb-12 gap-[18px]">
          <p className=" text-[#FF7200] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold uppercase">
            Because offshore doesn’t have to feel… offshore
          </p>
          <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#001738] my-6 leading-tight">
            Why KMC?
          </h2>
          <p className="text-[#0A1A2F] text-[14px] sm:text-[16px] lg:text-[18px] mt-4">
         {`   Here’s the thing: most EORs are payroll platforms in disguise. Some slick
            UI, a support chatbot, and a call center in a faraway timezone. That’s not us.
            We’re real people, building real teams—for companies who care how their brand
            shows up overseas.`}
          </p>
        </div>

  
       
        <div className="flex flex-wrap justify-center max-w-[1172px] w-full  justify-items-center">
       
          <div className="flex flex-wrap justify-center w-full lg:hidden">
            {allCards.map(renderCard)}
          </div>

         
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-10">
         
            <div className="flex justify-center gap-10">
              {allCards.slice(0, 3).map(renderCard)}
            </div>
            
            <div className="flex justify-center gap-10">
              {allCards.slice(3, 5).map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKMC;