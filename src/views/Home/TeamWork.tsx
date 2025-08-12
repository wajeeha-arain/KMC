

import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

export default function TeamWork() {
    const services = [
        {
            img: "/image/kmc.png",
            alt: "Talent That Fits",
            title: "Talent That Fits",
            points: [
                { text: "Rapid hiring with cultural and skills fit", color: "black" },
                { text: "Roles designed for your team—not off the shelf", color: "orange" },
            ],
        },
        {
            img: "/image/lmc1.png",
            alt: "Payroll and HR",
            title: "Payroll And HR",
            points: [
                { text: "End-to-end employee management", color: "orange" },
                { text: "Philippine HR compliance, holidays, and benefits", color: "black" },
            ],
        },
        {
            img: "/image/lmc3.png",
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
            img: "/image/lmc4.png",
            alt: "Workspaces That Work",
            title: "Workspaces That Work",
            points: [
                { text: "30+ top-tier offices across the Philippines", color: "orange" },
                { text: "Fast internet, secure systems, full IT support", color: "black" },
                { text: "Flexible setups for hybrid, in-office, or dedicated team", color: "orange" },
            ],
        },
        {
            img: "/image/lmc5.png",
            alt: "CASA by KMC",
            title: "CASA By KMC (Optional Housing)",
            points: [
                { text: "Fully furnished apartments close to work", color: "black" },
                { text: "Attracts top talent and boosts retention", color: "orange" },
            ],
        },
    ];

    const getColorClass = (color: string) =>
        color === "black" ? "text-black" : "text-orange-500";

    return (
        <div className="maincontainer">
            <div className="sm:my-10 my-4 mx-auto">
                {/* Heading */}
                <div className="text-center max-w-5xl mx-auto sm:mb-12 mb-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl md:text-4xl font-semibold">
                        <span className="text-[#051636]">{`Everything You Need.`}</span>{" "}
                        <span className="text-orange-500">{`Nothing You Don’t.`}</span>
                    </h2>
                    <p className="max-w-4xl mx-auto text-[#757575] md:text-[18px]  text-[16px] mt-4">
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
                                className="rounded-3xl w-full h-auto"
                            />
                            <h3 className="sm:text-[22px] text-[20px]  font-semibold text-orange-500 sm:mt-4 mt-2 border-b border-gray-300 pb-2">
                                {service.title}
                            </h3>
                            <ul className=" md:text-[18px]  text-[16px] mt-3 space-y-2 text-[#051636]">
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
                                className="rounded-3xl w-full h-auto"
                            />
                            <h3 className="sm:text-[22px] text:[20px] font-semibold text-orange-500 ms:mt-4 mt-2 border-b border-gray-300 pb-2">
                                {service.title}
                            </h3>
                            <ul className=" md:text-[18px]  text-[16px] mt-3 space-y-2 text-[#051636]">
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
                <div className="text-center sm:mt-12 mt-6">
                    <button className="bg-orange-500 text-white sm:px-8 sm:py-4 px-6 py-3 sm:text-lg text-md font-medium rounded-md hover:bg-orange-600 transition">
                        {`   Explore Our Full-Service Offering`}
                    </button>
                </div>
            </div>
        </div>
    );
}
