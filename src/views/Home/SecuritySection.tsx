"use client";

import React from "react";
import Image from "next/image";

export default function SecuritySection() {
  const securityBoxes = [
    {
      title: "System Integration & Access Control",
      description:
        "Say 5 or any number, same data goes here or text you want in the box.",
      image: "/image/gear-six 1.png",
    },
    {
      title: "Mirrored Policies, Custom Environments",
      description:
        "Need your own VPN? Endpoint protection software? SOC2-style access controls? Consider it done. We replicate your environment right down to device-level controls.",
      image: "/image/flower-lotus 1.png",
    },
    {
      title: "ISO 27001 Certified Infrastructure",
      description:
        "You get a secure foundation—certified, audited, and designed to scale—plus the flexibility to layer your own controls on top.",
      image: "/image/bridge 1.png",
    },
    {
      title: "8 Gbps Internet with Dual ISPs & Backup Power",
      description:
        "Zero downtime, even during typhoons or outages. Your team stays online, protected, and productive.",
      image: "/image/globe-hemisphere-west 1.png",
    },
    {
      title: "Role-Based Access & Full Device Encryption",
      description:
        "No one touches your systems unless you say so. Every workstation we provide comes fully encrypted, locked down, and monitored.",
      image: "/image/lock-key 1.png",
    },
    {
      title: "Global Compliance, Local Execution",
      description:
        "From GDPR to the Philippine Data Privacy Act—we keep you compliant in every market we operate.",
      image: "/image/scales 1.png",
    },
  ];

  return (
    <section className="relative  w-full bg-[#FFFAF5F2] py-12 md:py-20 lg:py-[100px] lg:mt-[80px]">
      <div className="maincontainer px-4 sm:px-6 md:px-10 lg:px-[135px]">
        {/* Header */}
        <p className="text-[#FF7200] font-bold text-base sm:text-lg md:text-xl uppercase tracking-wide">
          Enterprise-Grade Security
        </p>

        <h2 className="text-[#001738] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[55px] leading-snug lg:leading-[62px] py-4">
          Enterprise-Grade Security, Tailored to You
        </h2>

        <p className="text-[#001738] text-base sm:text-lg md:text-xl max-w-[1172px]">
          Global Brands Trust Us—Because We Build Security Around Them.
        </p>

        <p className="text-[#001738] text-base sm:text-lg md:text-xl max-w-[1172px] py-4">
          At KMC, we don’t just offer secure infrastructure—we customize it to
          mirror your exact enterprise standards. Whether you’re a SaaS unicorn,
          a fintech heavyweight, or a cybersecurity powerhouse, we replicate
          your security posture offshore so you stay compliant, confident, and
          in control.
        </p>

        <h3 className="font-bold text-xl sm:text-2xl md:text-[30px] text-[#FF7200] mt-8">
          Here’s what we secure your way:
        </h3>

        {/* Security Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0  max-w-[1172px] w-full mt-8">
          {securityBoxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 p-5 sm:p-6 md:p-8 border border-[#D6DCE3] bg-white shadow-sm hover:shadow-md transition"
            >
              {box.image && (
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 relative">
                  <Image
                    src={box.image}
                    alt={box.title}
                    width={49}
                    height={49}
                    className="object-contain"
                  />
                </div>
              )}
              <h4 className="font-bold text-lg sm:text-xl text-[#001738]">
                {box.title}
              </h4>
              <p className="text-sm sm:text-base md:text-[16px] text-[#6B717A] leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
