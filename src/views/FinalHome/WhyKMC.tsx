import Image from "next/image";
import { whyKMCData } from "@/Component/Date/Services";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
      className={`group relative rounded-[20px] border border-[#D6DCE3] p-2 transition-all duration-300 
        ${card.dark ? "bg-white" : "bg-white"} hover:bg-[#001738] hover:text-white`}
      style={{ width: "100%", maxWidth: "370px" }}    
    >
      {/* IMAGE */}
      <div className="w-full h-[450px] relative overflow-hidden rounded-[16px]">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover rounded-[16px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-4 transition-all duration-300">
        <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[24px] mb-2 leading-[30px] text-[#001738] group-hover:text-white">
          {card.title}
        </h3>
        <p className="text-[14px] sm:text-[16px] leading-[20px] text-[#001738] group-hover:text-white">
          {card.text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="maincontainer lg:py-20 py-6">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:text-left text-center mb-12">
          {/* Heading Text */}
          <div className="max-w-[1019px]">
            <p className="text-[#FF7200] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold uppercase">
              Because offshore doesn’t have to feel… offshore
            </p>
            <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#001738] my-6 leading-tight">
              Why KMC?
            </h2>
            <p className="text-[#0A1A2F] text-[14px] sm:text-[16px] lg:text-[18px] mt-4">
              {`Here’s the thing: most EORs are payroll platforms in disguise. Some slick
              UI, a support chatbot, and a call center in a faraway timezone. That’s not us.
              We’re real people, building real teams—for companies who care how their brand
              shows up overseas.`}
            </p>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center space-x-4 mt-6 lg:mt-40 justify-center lg:justify-end w-full lg:w-auto mr-10">
            <button className="w-[50px] h-[50px] rounded-full bg-white border border-[#F5F5F5] flex items-center justify-center hover:bg-[#EE7A30] transition">
              <MdKeyboardArrowLeft className="text-[#051636] text-2xl" />
            </button>
            <button className="w-[50px] h-[50px] rounded-full bg-white border border-[#F5F5F5] flex items-center justify-center hover:bg-[#EE7A30] transition">
              <MdKeyboardArrowRight className="text-[#051636] text-2xl" />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center max-w-[1172px] w-full">
          {/* Mobile View */}
          <div className="flex flex-wrap justify-center w-full gap-6 sm:gap-8 md:gap-10 lg:hidden">
            {allCards.map(renderCard)}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:space-y-14">
            {/* Row 1 */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-10">
              {allCards.slice(0, 3).map(renderCard)}
            </div>

            {/* Row 2 */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-10">
              {allCards.slice(3, 5).map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKMC;
