"use client";

import React from "react";
import Image from "next/image";


export default function PartnerSolutions() {
    // Card data array
    const cards = [
        {
            id: 1,
            img: "/image/Frame(12).png", // 👈 yahan apna image ka path lagao
            title: "Talent Acquisition",
            desc: "Top 1% talent, rigorously screened and hired for you, not placed.",
            points: [
                "30–45 day hiring timeline",
                "Technical assessments + cultural fit evaluation",
                "Proven success across IT, CX, Finance, and more",
            ],
            dark: true,
        },
        {
            id: 2,
            img: "/image/user-search.png",
            title: "HR & Payroll",
            desc: "We handle the contracts, compliance, and monthly payroll—accurate, on time, and by the book.",
            points: [
                "Fully managed payroll and benefits",
                "HRBP support and Sprout HRS integration",
            ],
        },
        {
            id: 3,
            img: "/image/scales-01.png",
            title: "Legal & Compliance",
            desc: "You stay clean. We carry the legal burden and navigate labor laws for you in the Philippines, Vietnam, Mexico, and Colombia.",
            points: [
                "ISO 27001, ISO 9001, and B Corp certified",
                "Full Philippine Labor Code compliance",
                "Data privacy (DPA, GDPR) and tax management",
            ],
        },
        {
            id: 4,
            img: "/image/scales-01.png",
            title: "Office Space & IT Infrastructure",
            desc: "We run the largest flexible office network in the Philippines—enterprise internet, ISO 27001 security, and actual places your team wants to work.",
            points: [
                "30+ premium facilities across PH, VN, MX, CO",
                "24/7 IT support, VPN access, asset management",
                "Wellness amenities: massage chairs, fitness rooms",
            ],
        },
        {
            id: 5,
            img: "/image/Frame(14).png",
            title: "CASA by KMC (Employee Housing)",
            desc: "Yes, we even house your team. Fully furnished, safe, stylish. Because people do better work when they're not stuck in traffic or four roommates deep.",
            points: [
                "Strategically located near offices",
                "Professionally managed and move-in ready",
                "Enhances talent mobility and retention",
            ],
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="maincontainer mx-auto">
                {/* Header */}
                <p className="text-[#FF7200] font-bold uppercase tracking-wide text-[16px] sm:text-[20px]">
                    Everything Under One Roof. Literally.
                </p>
                <h2 className="text-[#001738] font-semibold text-[28px] sm:text-[38px] lg:text-[55px] leading-snug mt-4">
                    One Partner. Endless Solutions.
                </h2>
                <p className="max-w-[1071px] text-[15px] sm:text-[17px] text-[#001738] mt-6">
                    Most offshore setups look like a patchwork: one firm for hiring,
                    another for payroll, a third for office space, and zero accountability
                    when things break.
                </p>
                <p className="text-[15px] sm:text-[18px] text-[#001738] mt-3">
                    KMC is different. We own every piece of the experience—and we never
                    outsource your outsourcing.
                </p>

                {/* Sub Heading */}
                <h3 className="text-[#FF7200] text-[20px] sm:text-[24px] lg:text-[30px] font-bold mt-12 mb-8">
                    Here’s what you get with us:
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`p-6 sm:p-8 rounded-2xl w-full max-w-[370px] 
                              ${card.dark
                                    ? "bg-[#001738] text-white"
                                    : "bg-white text-[#001738] border border-[#FF720012]"
                                }
                                  `}
                                   >
                            {/* 👇 Yahan Image Add Kiya */}
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={40}
                                height={40}
                                className="mb-4"
                            />

                            <h4 className="text-[18px] sm:text-[22px] lg:text-[24px] font-semibold">
                                {card.title}
                            </h4>
                            <p className="text-[14px] sm:text-[16px] mt-3 text-[#A7B3C2]">
                                {card.desc}
                            </p>
                            <hr
                                className={`my-4 ${card.dark ? "text-[#6B717A]" : "border-[#e5e7eb]"}`}
                            />
                            <ul className="space-y-2 text-[14px] text-[#A7B3C2]">
                                {card.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Image
                                            src={card.dark ? "/image/Icon.png" : "/image/Icon(1).png"}
                                            alt="check icon"
                                            width={18}
                                            height={18}
                                            className="shrink-0"
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}

                    {/* Last Card (Image) */}
                    <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-[370px] aspect-[4/5]">
                        <Image
                            src="/image/Container.png"
                            alt="KMC Office"
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
