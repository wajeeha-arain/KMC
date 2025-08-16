"use client";

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import Button from "@/Component/Button/Button";
import { services, services2 } from "@/Component/Date/Services"; 

//color 
const getColorClass = (color: string) => {
  switch (color) {
    case "black":
      return "text-black";
    case "orange":
      return "text-orange-500";
    default:
      return "text-black"; 
  }
};

export default function TeamWork() {
  return (
    <div className="maincontainer">
      <div className="sm:my-10 my-4 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-semibold">
            <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
            <span className="text-orange-500">{`Nothing You Don’t`}.</span>
          </h2>
          <p className="max-w-4xl mx-auto text-[#757575] md:text-[18px] text-[16px] mt-4">
{`            With KMC, you’re not juggling vendors. We handle every part of the
            offshore employment experience under one roof—so you get more
            control, less risk, and better results.`}
          </p>
        </div>

        {/* Services 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <Image
                src={service.img}
                alt={service.alt}
                width={700}
                height={400}
                className="rounded-3xl w-full h-auto"
              />
              <h3 className="sm:text-[22px] text-[18px] font-semibold text-orange-500 sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                {service.title}
              </h3>
              <ul className="md:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdPlayArrow
                      className={`${getColorClass(point.color)} text-lg mt-0.5`}
                    />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {services2.map((service, index) => (
            <div key={index}>
              <Image
                src={service.img}
                alt={service.alt}
                width={800}
                height={400}
                className="rounded-3xl w-full h-auto"
              />
              <h3 className="sm:text-[22px] text-[21px] font-semibold text-orange-500 sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                {service.title}
              </h3>
              <ul className="md:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdPlayArrow
                      className={`${getColorClass(point.color)} text-lg mt-0.5`}
                    />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Button onClick={() => alert("Offer Claimed!")}>
            {`Explore Our Full-Service Offering`}
          </Button>
        </div>
      </div>
    </div>
  );
}
