"use client";
import React, { useState } from "react";
import { sectionsData } from "@/Component/Date/Services"; 
import Button from "@/Component/Button/Button";

type SectionID = string | number;

interface IndustrySectionsProps {
  openSections: SectionID[];
  toggleSection: (id: SectionID) => void;
}

const IndustrySections: React.FC<IndustrySectionsProps> = ({ openSections, toggleSection }) => {
  if (!Array.isArray(openSections) || typeof toggleSection !== "function") {
    return null;
  }

  return (
    <div className="w-full max-w-[710px] h-auto flex flex-col gap-6 lg:gap-10">
      {sectionsData.map((section) => {
        const isOpen = openSections.includes(section.id);

        return (
          <div
            key={section.id}
            className={`p-4 border-b border-[#E1E1E1] ${section.bg || ""} ${
              section.rounded || ""
            }`}
          >
         
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-[44px] h-[44px] rounded-full">
                  {React.cloneElement(section.icon, {
                    className: "text-[#EE7A30]",
                    size: 30,
                    strokeWidth: 1.1,
                  })}
                </span>
                <h2
                  className="font-medium text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 text-[#051636] max-w-[calc(100vw-120px)] lg:max-w-[580px]"
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    verticalAlign: "middle",
                    letterSpacing: "0",
                  }}
                >
                  {section.title}
                </h2>
              </div>
              <span className="text-2xl font-bold text-[#0A1A2F] select-none">
                {isOpen ? "–" : "+"}
              </span>
            </div>

            {/* Items */}
            {isOpen && (
              <div className="flex flex-wrap gap-3 mt-4 justify-start">
                {section.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="flex items-center text-white bg-[#EE7A30] hover:bg-[#d96c2b] w-full sm:w-[215px] md:w-[200px] lg:w-[215.33px] h-[50px] gap-3 pr-5 pl-1 rounded-[30px] transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center bg-white w-[44px] h-[44px] rounded-full">
                      {React.cloneElement(item.icon, {
                        className: "text-black",
                        size: 36,
                      
                      })}
                    </span>

                    <span
                      className="truncate capitalize text-white font-normal font-be-vietnam-pro"
                      style={{ fontSize: "16px", lineHeight: "20px" }}
                    >
                      {item.label}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const SectionsCard: React.FC = () => {
  const [openSections, setOpenSections] = useState<SectionID[]>([sectionsData[0]?.id || 0]);

  const toggleSection = (id: SectionID) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="maincontainer lg:py-20 py-6">
      <section>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8  mx-auto">
     
          <div className="w-full lg:w-[520px] flex flex-col gap-6 ">
            <h2
              className="font-semibold text-[32px] sm:text-3xl md:text-4xl lg:text-[45px] 
                leading-[30px] sm:leading-[38px] md:leading-[46px] lg:leading-[56px] text-[#051636]"
            >
              Built For{" "}
              <span className="text-[#EE7A30]"> Aussie Industries </span> That Are{" "}
              <span className="text-[#EE7A30]"> Scaling Fast</span>
            </h2>
 
            <p
              className="font-normal text-[#757575]   text-[14px] sm:text-[16px] md:text-[18px]
              leading-[22px] sm:leading-[26px] md:leading-[28px]"
            >
              {`Whether you’re running a digital agency, growing a retail brand, or streamlining back-office support—we’ll help you build the offshore team to get it done.`}
            </p>

            <Button
              className="mt-3 text-sm md:text-base bg-[#EE7A30] hover:bg-[#d96c2b] text-white  sm:w-[248px] h-[50px] md:h-[60px]  rounded-[12px] font-medium flex items-center justify-center transition-all duration-300"
            >
              Explore More Industries
            </Button>
          </div>

       
          <IndustrySections openSections={openSections} toggleSection={toggleSection} />
        </div>
      </section>
    </div>
  );
};

export default SectionsCard