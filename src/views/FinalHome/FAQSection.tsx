"use client";

import { useState } from 'react';
import { faqs } from '@/Component/Date/Services'; 


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 
  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#FFFAF5]">
      <div className="maincontainer ">
        <div className='w-full mx-auto'>
<div className="flex lg:flex-row flex-col gap-10 items-start">
          {/* Left Column */}
          <div className="lg:w-1/2 mt-8">
            <h5 className="text-[#FF7200] text-[14px] md:text-[20px] font-bold uppercase mb-4">
              Frequently Asked Questions
            </h5>
            <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[45px] font-semibold text-[#001738] leading-tight">
{`              FAQs: Everything You Need to Know About KMC's EOR Services`}
            </h2>
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col  w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#D6DCE3] p-7 cursor-pointer transition-all duration-300"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className=" text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#001738]">
                    {faq.question}
                  </h3>
                  <span className="text-[24px] font-bold text-[#FF7200]">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-[#6B717A] text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}