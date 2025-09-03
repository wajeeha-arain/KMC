"use client";

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import Button from "@/Component/Button/Button";
import { services, services2 } from "@/Component/Date/Services";

// color
const getColorClass = (color: string) => {
  switch (color) {
    case "#051636":
      return "text-[#051636]";  // blue
    case "orange":
      return "text-[#f97316]";  //  orange-500 as hex
    default:
      return "text-[#051636]";
  }
};


export default function TeamWork() {
  const allServices = [...services, ...services2];

  return (
    <div className="maincontainer">
      <div className="sm:my-14 my-6 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold font-beVietnam leading-snug">
            <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
            <span className="text-[#EE7A30]">{`Nothing You Don’t`}.</span>
          </h2>
          <p className="max-w-4xl mx-auto text-[#757575] text-[15px] sm:text-[16px] md:text-[18px] mt-4 font-beVietnam font-normal">
            {`With KMC, you’re not juggling vendors. We handle every part of the offshore employment experience under one roof—so you get more control, less risk, and better results.`}
          </p>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {allServices.map((srv, i) => (
            <div key={i}>
              <Image
                src={srv.img}
                alt={srv.alt}
                width={400}
                height={300}
                className="rounded-[30px] w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#EE7A30] sm:mt-4 mt-2 border-b border-[#d1d5dc] pb-2">
                {srv.title}
              </h3>
              <ul className="text-[15px] sm:text-[16px] md:text-[18px] mt-3 space-y-2 text-[#051636]">
                {srv.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <MdPlayArrow
                      className={`${getColorClass(
                        point.color
                      )} text-lg mt-0.5`}
                    />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop  */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {allServices.slice(0, 3).map((srv, i) => (
            <div key={i}>
              <Image
                src={srv.img}
                alt={srv.alt}
                width={400}
                height={300}
                className="rounded-[30px] w-full h-[260px] xl:h-[280px] object-cover"
              />
              <h3 className="text-[20px] xl:text-[24px] font-semibold text-[#EE7A30] mt-3 border-b border-[#b7b8ba] pb-2">
                {srv.title}
              </h3>
              <ul className="text-[16px] xl:text-[18px] mt-3 space-y-2 text-[#051636]">
                {srv.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <MdPlayArrow
                      className={`${getColorClass(
                        point.color
                      )} text-lg mt-0.5`}
                    />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Last Row 2 */}
          <div className="col-span-3 grid grid-cols-2 gap-8">
            {allServices.slice(3).map((srv, i) => (
              <div key={i}>
                <Image
                  src={srv.img}
                  alt={srv.alt}
                  width={615}
                  height={400}
                  className="rounded-[30px] w-full h-[240px] xl:h-[280px] object-cover"
                />
                <h3 className="text-[18px] sm:text-[20px] xl:text-[22px] font-semibold text-[#EE7A30] mt-3 border-b border-[#b7b8ba] pb-2">
                  {srv.title}
                </h3>
                <ul className="text-[16px] xl:text-[18px] mt-3 space-y-2 text-[#051636]">
                  {srv.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <MdPlayArrow
                        className={`${getColorClass(
                          point.color
                        )} text-lg mt-0.5`}
                      />
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Button>{`Explore Our Full-Service Offering`}</Button>
        </div>
      </div>
    </div>
  );
}
