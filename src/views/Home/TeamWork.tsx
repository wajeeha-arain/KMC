"use client";

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import Button from "@/Component/Button/Button";
import { services, services2 } from "@/Component/Date/Services";

// color
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
  const allServices = [...services, ...services2];

  return (
    <div className="maincontainer">
      <div className="sm:my-10 my-4 mx-auto ">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-semibold font-beVietnam">
            <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
            <span className="text-[#EE7A30]">{`Nothing You Don’t`}.</span>
          </h2>
          <p className="max-w-4xl mx-auto text-[#757575] md:text-[18px] text-[16px] mt-4 font-beVietnam">
            {`With KMC, you’re not juggling vendors. We handle every part of the
            offshore employment experience under one roof—so you get more
            control, less risk, and better results.`}
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {allServices.map((srv, i) => (
            <div key={i}>
              <Image
                src={srv.img}
                alt={srv.alt}
                width={800}
                height={400}
                className="rounded-3xl w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover"
              />
              <h3 className="sm:text-[24px] text-[20px] font-semibold text-[#EE7A30] sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                {srv.title}
              </h3>
              <ul className="md:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
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

        <div className="hidden lg:grid grid-cols-3 gap-6">
          {allServices.slice(0, 3).map((srv, i) => (
            <div key={i}>
              <Image
                src={srv.img}
                alt={srv.alt}
                width={800}
                height={400}
                className="rounded-3xl w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-auto object-cover"
              />
              <h3 className="sm:text-[22px] text-[18px] font-semibold text-[#EE7A30] sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                {srv.title}
              </h3>
              <ul className="md:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
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

          {/* last  */}
          <div className="col-span-3 grid grid-cols-2 gap-6">
            {allServices.slice(3).map((srv, i) => (
              <div key={i}>
                <Image
                  src={srv.img}
                  alt={srv.alt}
                  width={1200}
                  height={400}
                  className="rounded-3xl w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[280px] object-cover"
                />
                <h3 className="sm:text-[22px] text-[18px] font-semibold text-[#EE7A30] sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                  {srv.title}
                </h3>
                <ul className="md:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
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
