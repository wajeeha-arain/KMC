
// import Image from "next/image";
// import { MdPlayArrow } from "react-icons/md";

// export default function TeamWork() {
//   return (
//     <div className="maincontainer">
//       <div className="sm:my-10 my-4 mx-auto">
//         {/* Heading */}
//         <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
//           <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold">
//             <span className="text-[#051636]">Everything You Need.</span>{" "}
//             <span className="text-orange-500">Nothing You Don’t.</span>
//           </h2>
//           <p className="text-[#757575] text-balance md:text-[18px] text-[16px] mt-4">
//             {`With KMC, you’re not juggling vendors. We handle every part of the offshore employment experience under one roof—so you get more control, less risk, and better results.`}
//           </p>
//         </div>

//         {/* First Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/*  1 */}
//           <div className=" max-w-[650px] max-h-[400]">
//             <Image
//               src="/image/Rectangle 59.png"
//               alt="Talent That Fits"
//               width={650}
//               height={400}
//               className="rounded-lg w-full h-auto"
//             />
//             <h3 className="text-[22px] font-semibold text-orange-500 mt-4 border-b border-gray-300 pb-2">
//               Talent That Fits
//             </h3>
//             <ul className="text-[18px] mt-3 space-y-2 text-[#051636]">
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-black text-lg mt-0.5" />
//                 Rapid hiring with cultural and skills fit
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 Roles designed for your team—not off the shelf
//               </li>
//             </ul>
//           </div>

//           {/*  2 */}
//           <div>
//             <Image
//               src="/image/Rectangle 68.png"
//               alt="Payroll and HR"
//               width={650}
//               height={400}
//               className="rounded-lg w-full h-auto"
//             />
//             <h3 className="text-[22px] font-semibold text-orange-500 mt-4 border-b border-gray-300 pb-2">
//               Payroll And HR
//             </h3>
//             <ul className="text-[18px] mt-3 space-y-2 text-[#051636]">
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-black text-lg mt-0.5" />
//                 End-to-end employee management
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 Philippine HR compliance, holidays, and benefits
//               </li>
//             </ul>
//           </div>

//           {/*  3 */}
//           <div>
//             <Image
//               src="/image/Rectangle 74.png"
//               alt="Legal and Compliance"
//               width={650}
//               height={400}
//               className="rounded-lg w-full h-auto"
//             />
//             <h3 className="text-[22px] font-semibold text-orange-500 mt-4 border-b border-gray-300 pb-2">
//               Legal And Compliance
//             </h3>
//             <ul className="text-[18px] mt-3 space-y-2 text-[#051636]">
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-black text-lg mt-0.5" />
//                 Full legal coverage and tax compliance
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 Contracts that protect you
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           {/*  4 */}
//           <div>
//             <Image
//               src="/image/Rectangle 75.png"
//               alt="Workspaces That Work"
//               width={650}
//               height={400}
//               className="rounded-lg w-full h-auto"
//             />
//             <h3 className="text-[22px] font-semibold text-orange-500 mt-4 border-b border-gray-300 pb-2">
//               Workspaces That Work
//             </h3>
//             <ul className="text-[18px] mt-3 space-y-2 text-[#051636]">
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 30+ top-tier offices across the Philippines
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 Fast internet, secure systems, full IT support
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.5" />
//                 Flexible setups for hybrid, in-office, or dedicated team
//               </li>
//             </ul>
//           </div>

//           {/* 5 */}
//           <div>
//             <Image
//               src="/image/Rectangle 81.png"
//               alt="CASA by KMC"
//               width={650}
//               height={400}
//               className="rounded-lg w-full h-auto"
//             />
//             <h3 className="text-[22px] font-semibold text-orange-500 mt-4 border-b border-gray-300 pb-2">
//               CASA By KMC (Optional Housing)
//             </h3>
//             <ul className="text-[18px] mt-3 space-y-2 text-[#051636]">
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.6" />
//                 Fully furnished apartments close to work
//               </li>
//               <li className="flex items-start gap-2">
//                 <MdPlayArrow className="text-orange-500 text-lg mt-0.6" />
//                 Attracts top talent and boosts retention
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="text-center mt-12">
//           <button className="bg-orange-500 text-white px-8 py-4 text-lg font-medium rounded-md hover:bg-orange-600 transition">
//             Explore Our Full-Service Offering
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

export default function TeamWork() {
  const services = [
    {
      img: "/image/Rectangle 59.png",
      alt: "Talent That Fits",
      title: "Talent That Fits",
      points: [
        { text: "Rapid hiring with cultural and skills fit", color: "black" },
        { text: "Roles designed for your team—not off the shelf", color: "orange" },
      ],
    },
    {
      img: "/image/Rectangle 68.png",
      alt: "Payroll and HR",
      title: "Payroll And HR",
      points: [
        { text: "End-to-end employee management", color: "black" },
        { text: "Philippine HR compliance, holidays, and benefits", color: "orange" },
      ],
    },
    {
      img: "/image/Rectangle 74.png",
      alt: "Legal and Compliance",
      title: "Legal And Compliance",
      points: [
        { text: "Full legal coverage and tax compliance", color: "black" },
        { text: "Contracts that protect you", color: "orange" },
      ],
    },
  ];

  const services2 = [
    {
      img: "/image/Rectangle 75.png",
      alt: "Workspaces That Work",
      title: "Workspaces That Work",
      points: [
        { text: "30+ top-tier offices across the Philippines", color: "orange" },
        { text: "Fast internet, secure systems, full IT support", color: "black" },
        { text: "Flexible setups for hybrid, in-office, or dedicated team", color: "orange" },
      ],
    },
    {
      img: "/image/Rectangle 81.png",
      alt: "CASA by KMC",
      title: "CASA By KMC (Optional Housing)",
      points: [
        { text: "Fully furnished apartments close to work", color: "black" },
        { text: "Attracts top talent and boosts retention", color: "orange" },
      ],
    },
  ];

  const getColorClass = (color : string) =>
    color === "black" ? "text-black" : "text-orange-500";

  return (
    <div className="maincontainer">
      <div className="sm:my-10 my-4 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold">
            <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
            <span className="text-orange-500">{`Nothing You Don’t.`}</span>
          </h2>
          <p className="text-[#757575] md:text-[18px] text-balance text-[16px] mt-4">
            {`With KMC, you’re not juggling vendors. We handle every part of the offshore employment experience under one roof—so you get more control, less risk, and better results.`}
          </p>
        </div>

        {/*  1  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <Image
                src={service.img}
                alt={service.alt}
                width={700}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              <h3 className="sm:text-[22px] text:[20px] font-semibold text-orange-500 sm:mt-4 border-b border-gray-300 pb-2">
                {service.title}
              </h3>
              <ul className="sm:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdPlayArrow className={`${getColorClass(point.color)} text-lg mt-0.5`} />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/*  2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {services2.map((service, index) => (
            <div key={index}>
              <Image
                src={service.img}
                alt={service.alt}
                width={800}
                height={400}
                className="rounded-lg w-full h-auto"
              />
              <h3 className="sm:text-[22px] text:[20px] font-semibold text-orange-500 ms:mt-4 border-b border-gray-300 pb-2">
                {service.title}
              </h3>
              <ul className="sm:text-[18px] text-[16px] mt-3 space-y-2 text-[#051636]">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdPlayArrow className={`${getColorClass(point.color)} text-lg mt-0.5`} />
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 text-lg font-medium rounded-md hover:bg-orange-600 transition">
         {`   Explore Our Full-Service Offering`}
          </button>
        </div>
      </div>
    </div>
  );
}
