"use client";

import Image from "next/image";
import React from "react";
import Button from "@/Component/Button/Button";
import { startingFiveData } from "@/Component/Date/Services";


export default function StartingFive() {

    
    return (
        <section className={`relative bg-[#E9F1FF] mx-auto font-beVietnam `}>
            <div className="maincontainer mx-auto px-4 sm:px-6 lg:px-12 pt-14 lg:pt-20 pb-10 sm:pb-16 lg:pb-0 grid lg:grid-cols-12 gap-10 items-start">
                {/* Left */}
                <div className="lg:col-span-6">
                    <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[45px]  font-semibold text-slate-900 leading-[38px] sm:leading-[48px] lg:leading-[58px]">
                        {startingFiveData.heading}
                        <span className="block">
                            Launch Your Team{" "}
                            <span className="text-[#EE7A30] font-normal">With</span>
                        </span>
                        <span className="block text-[#EE7A30] font-normal">
                            No Setup Fees
                        </span>
                    </h1>
 
                    <p className="text-[15px] sm:text-[16px] lg:text-[18px] mt-3 text-[#757575] max-w-2xl font-normal font-beVietnam">
                        {`A limited-time offer for growing Aussie businesses.`}
                    </p>

                    <p className="text-[15px] sm:text-[16px] lg:text-[18px] mt-2 text-[#757575] max-w-2xl font-normal">
                        {startingFiveData.description}
                    </p>

                    <p className="text-[16px] sm:text-[20px] lg:text-[24px] mt-4 tracking-[0.02em] font-medium text-[#051636]">
                        FOR A{" "}
                        <span className="text-[#EE7A30] font-semibold">LIMITED TIME</span>
                        {`, WE’RE WAIVING ALL SETUP`} FEES ON{" "}
                        <span className="text-[#EE7A30] font-semibold">
                            {`YOUR FIRST FIVE HIRES`}
                        </span>.
                    </p>

                    {/* Button */}

                    <div className="sm:text-left text-center sm:mt-10 mt-6">
                        <Button>{`Claim Your Starting Five Offer`}</Button>
                    </div>
                </div>

                {/* Right*/}
                <div className="lg:col-span-6 space-y-4">
                    {startingFiveData.features.map((f, i) => (
                        <div
                            key={i}
                            className="flex items-center w-full max-w-[615px] min-h-[80px] sm:min-h-[94px] gap-3 border-[1.5px] border-[#EE7A30] bg-white rounded-[20px] p-4 sm:p-5"
                        >
                            {/* Icon */}
                            <div className="flex-none w-9 h-9 sm:w-[45px] sm:h-[45px] flex items-center justify-center text-[#EE7A30]">
                                <f.icon
                                    className="w-5 h-5 sm:w-[28px] sm:h-[28px]"
                                    strokeWidth={2.1}
                                />
                            </div>

                            {/* Title */}
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#051636] font-semibold leading-snug capitalize">
                                {f.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[567px] max-w-[1440px] mx-auto">
                <Image
                    src={startingFiveData.image}
                    alt="team working"
                    fill
                    className="object-cover object-center rounded-t-lg lg:rounded-none"
                    priority
                />
            </div>
        </section>
    );
}
