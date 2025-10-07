"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-6 lg:pb-16 pb-8">
      <div className="maincontainer mx-auto flex flex-col lg:flex-row items-center lg:text-left text-center px-6 lg:px-16">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#FF7200] font-bold uppercase tracking-wide text-[16px] sm:text-[20px] mb-4">
            {`One partner. Endless solutions.`}
          </p>

          <h1 className="max-w-[1160px] text-[#001738] font-semibold text-[32px] sm:text-[42px] lg:text-[68px] leading-[50px] lg:leading-[74px]  pb-4  md:pb-6">
            {`You don’t need a`} <br />
            {`Platform, You need`} <br />
            {`a Real Partner.`}
          </h1>

          <p className="lg:max-w-[560px] text-[#6B717A] text-[15px] sm:text-[18px] lg:text-[20px] leading-[28px] mb-6 md:mb-10">
            {`Offshore teams, built to feel in-house. We’re not a platform. We’re your full-stack EOR—hiring, HR, compliance, payroll, workspace, and even housing.`}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <button className="bg-[#FF7200] text-white font-semibold text-[14px] sm:text-[16px] rounded-full px-8 py-4 transition hover:bg-[#e36600]">
              {`Let’s Talk Talent`}
            </button>
            <button className="border border-[#001738] text-[#001738] font-semibold text-[14px] sm:text-[16px] rounded-full px-8 py-4 hover:bg-[#001738] hover:text-white transition">
              {`See How It Works`}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full lg:w-[50%] flex justify-center mt-4 md:mt-40">
          <div className="relative w-full">
            <Image
              src="/image/businesspeople-meeting-office-working-together 1(1).png"
              alt="Hero Image"
              width={950}
              height={950}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* FLOATING BOX - 16 years */}
          <div className="absolute hidden md:flex -top-[60px] left-[5%] flex-col items-center text-center animate-[float_4s_ease-in-out_infinite]">
            <h3 className="flex flex-row gap-2 items-center text-[#001738] font-semibold text-[26px] sm:text-[34px] leading-none">
              <span className="text-[#FFCE35] text-[36px] sm:text-[40px]">16</span>
              <span className="flex flex-col leading-tight">
                <p className="text-[12px] sm:text-[14px] text-[#6B717A]">in business</p>
                <p className="text-[#001738] font-semibold text-[22px] sm:text-[30px]">years</p>
              </span>
            </h3>

            <div className="mt-3 bg-[#FF7200]/20 backdrop-blur-md text-[#001738] font-medium text-[14px] sm:text-[16px] rounded-full px-4 sm:px-6 py-2 shadow-md">
              You run the team.
            </div>
          </div>

          {/* FLOATING BOX - 6000+ managed staff */}
          <div className="absolute hidden md:flex -top-[80px] right-[5%] flex-col items-center text-center animate-[float_4s_ease-in-out_infinite] delay-200">
            <h3 className="flex flex-col items-center text-[#001738] font-semibold text-[26px] sm:text-[34px] leading-none">
              <p className="text-[12px] sm:text-[14px] text-[#6B717A] mb-1">managed staff</p>
              <span className="flex flex-row items-center justify-center">
                <span className="text-[#FF7200] text-[36px] sm:text-[40px]">6,000</span>
                <span className="text-[#001738]">+</span>
              </span>
            </h3>

            <div className="mt-3 bg-[#FF7200]/20 backdrop-blur-md text-[#001738] font-medium text-[14px] sm:text-[16px] rounded-full px-4 sm:px-6 py-2 shadow-md whitespace-nowrap">
              We run everything else.
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
