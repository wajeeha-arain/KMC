"use client";

import Image from "next/image";
import React from "react";
import Button from "@/Component/Button/Button";
import { FileText, Handshake, GraduationCap, Building2 } from "lucide-react";

export default function StartingFive() {
    const features = [
        { title: "5 Custom Hires, Recruited Just For You", icon: FileText },
        { title: "Day-To-Day Support From A Fractional KMC Team Manager", icon: Handshake },
        { title: "Cultural Training And Onboarding Done Right", icon: GraduationCap },
        { title: "All-Inclusive Setup: Office, HR, IT, Payroll, And Admin", icon: Building2 },
    ];

    return (
        <section className="relative bg-[#eef6fb] mx-auto">
            <div className="maincontainer mx-auto px-6 lg:px-12 pt-20 lg:pb-0 sm:pb-16 pb-10 grid lg:grid-cols-12 gap-4 items-start">

                {/* Left Content */}
                <div className="lg:col-span-6">
                    <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 sm:leading-[58px] leading-[44px]">
                        {`The Starting Five:`}
                        <span className="block">
                            {`Launch Your Team`} <span className="text-[#EE7A30]">{`With`}</span>
                        </span>
                        <span className="block text-[#EE7A30]">{`No Setup Fees`}</span>
                    </h1>

                    <p className="sm:text-[18px] text-[16px] sm:mt-6 mt-2 text-slate-600 max-w-2xl">
                        {`A limited-time offer for growing Aussie businesses.`}
                    </p>

                    <p className="sm:text-[18px] text-[16px] sm:mt-4 mt-2 text-slate-600 max-w-2xl">
                        {`Ready to scale without the stress? Our Starting Five gives you a fully managed offshore team of five—recruited, onboarded, and supported by KMC.`}
                    </p>

                    <p className="sm:text-[24px] text-[16px] sm:mt-6 mt-4 font-medium text-balance text-[#051636]">
                        <span className="text-[#EE7A30]">{`FOR A LIMITED TIME`}</span>
                        {`, WE’RE WAIVING ALL SETUP FEES ON YOUR`}
                        <span className="text-[#EE7A30]">{` FIRST FIVE HIRES.`}</span>
                    </p>

                    {/* Reusable Button */}
                    <div className=" mt-8">
                        <Button onClick={() => alert("Offer Claimed!")}>
                            {`Claim Your Starting Five Offer`}
                        </Button>
                    </div>
                </div>

                {/* Side  Boxes */}
                <div className="lg:col-span-6 space-y-4">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 border-2 border-orange-300 bg-white rounded-2xl sm:px-5 sm:py-4 px-3 py-2 shadow-sm"
                        >
                            <div className="flex-none w-12 h-12 flex items-center justify-center text-orange-500">
                                <f.icon size={28} strokeWidth={2.2} />
                            </div>
                            <div className="sm:text-[20px] text-[16px] text-[#051636] font-bold leading-snug">
                                {f.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[550px]">
                <Image
                    src="/image/startingfive.png"
                    alt="team working"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
        </section>
    );
}
