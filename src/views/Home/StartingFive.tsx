"use client";

import Image from "next/image";
import React from "react";
import Button from "@/Component/Button/Button";
import { startingFiveData } from "@/Component/Date/Services";

export default function StartingFive() {
    return (
        <section className="relative bg-[#eef6fb] mx-auto font-beVietnam">
            <div className="maincontainer mx-auto px-6 lg:px-12 pt-20 lg:pb-0 sm:pb-16 pb-10 grid lg:grid-cols-12 gap-4 items-start">
                {/* Left */}
                <div className="lg:col-span-6">
                    <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 sm:leading-[58px] leading-[44px]">
                        {startingFiveData.heading}
                        <span className="block">
                            Launch Your Team <span className="text-[#EE7A30] font-normal">With</span>
                        </span>
                        <span className="block text-[#EE7A30] font-normal">
                            No Setup Fees
                        </span>
                    </h1>





                    <p className="sm:text-[18px] text-[16px] sm:mt-3 mt-2 text-[#757575] max-w-2xl">
                        {`A limited-time offer for growing Aussie businesses.`}
                    </p>

                    <p className="sm:text-[18px] text-[16px] sm:mt-3 mt-2 text-[#757575] max-w-2xl">
                        {startingFiveData.description}
                    </p>

                    <p className="sm:text-[24px] text-[16px] sm:mt-3 mt-4 tracking-[0.04em] font-medium text-balance text-[#051636]">
                        FOR A{" "}
                        <span className="text-[#EE7A30] font-semibold">LIMITED TIME</span>{`, WE’RE WAIVING ALL SETUP`}
                        FEES ON{" "}
                        <span className="text-[#EE7A30] font-semibold">{`YOUR FIRST FIVE HIRES`}</span>.
                    </p>


                    {/* Button */}
                    <div className="md:mt-6 mt-4 lg:mb-0 md:mb-6 mb-5">
                        <Button>
                            {startingFiveData.buttonText}
                        </Button>
                    </div>
                </div>

                {/* Right  */}
                <div className="lg:col-span-6 space-y-4">
                    {startingFiveData.features.map((f, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 border-2 border-orange-300 bg-white rounded-2xl sm:px-5 sm:py-4 px-3 py-2 shadow-sm"
                        >
                            <div className="flex-none w-12 h-12 flex items-center justify-center text-[#EE7A30]">
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
                    src={startingFiveData.image}
                    alt="team working"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>
        </section>
    );
}
