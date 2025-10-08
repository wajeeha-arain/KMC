"use client";

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import Button from "@/Component/Button/Button";
import { services, services2 } from "@/Component/Date/Services";


const getColorClass = (color: string) => {
  switch (color) {
    case "#051636":
      return "text-[#051636]";
    case "orange":
      return "text-[#f97316]";
    default:
      return "text-[#051636]";
  }
};

export default function TeamWork() {
  const allServices = [...services, ...services2]; 

  return (
    <div className="maincontainer">
      <div className="sm:my-14 my-6 mx-auto">
    
        <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] font-semibold font-beVietnam leading-snug">
            <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
            <span className="text-[#EE7A30]">{`Nothing You Don’t.`}</span>
          </h2>
          <p className="max-w-4xl mx-auto text-[#757575] text-[15px] sm:text-[16px] md:text-[18px] mt-4 font-beVietnam font-normal">
            {`With KMC, you’re not juggling vendors. We handle every part of the
            offshore employment experience under one roof—so you get more
            control, less risk, and better results.`}
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {allServices.map((srv, i) => (
            <Card key={`m-${i}`} srv={srv} big={i >= 3} />
          ))}
        </div>

        
        <div className="hidden lg:grid grid-cols-3 gap-8">
         
          {allServices.slice(0, 3).map((srv, i) => (
            <Card key={`lg-${i}`} srv={srv} />
          ))}

          <div className="col-span-3 grid grid-cols-2 gap-8">
            {allServices.slice(3, 5).map((srv, j) => (
              <Card key={`lg-row2-${j}`} srv={srv} big />
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
function Card({
  srv,
  big = false,
}: {
  srv: {
    img: string;
    alt: string;
    title: string;
    points: { text: string; color: string }[];
  };
  big?: boolean;
}) {
  return (
    <div>
      <div
        className={`relative w-full rounded-[30px] overflow-hidden
        aspect-[4/3]   // ✅ Mobile & Tablet sab same size
        ${big ? "lg:aspect-[16/9]" : "lg:aspect-[4/3]"} // ✅ Desktop condition
        `}
      >
        <Image src={srv.img} alt={srv.alt} fill className="object-cover" />
      </div>

      <h3
        className={`font-semibold text-[#EE7A30] mt-3 border-b border-[#b7b8ba] pb-2 ${
          big
            ? "text-[18px] sm:text-[20px] xl:text-[22px]"
            : "text-[20px] xl:text-[24px]"
        }`}
      >
        {srv.title}
      </h3>

<ul className="text-[16px] xl:text-[18px] mt-3 space-y-2">
  {srv.points.map((point, j) => (
    <li key={j} className="flex items-start gap-2">
      <MdPlayArrow
        className={`${getColorClass(point.color)} text-lg mt-0.5`}
      />
      <span className="text-[#051636]">{point.text}</span>
    </li>
  ))}
</ul>

    </div>
  );
}
