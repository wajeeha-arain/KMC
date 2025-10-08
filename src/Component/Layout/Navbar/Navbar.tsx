"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Why KMC", href: "#" },
    { name: "Offices", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="w-full bg-white top-0 left-0 z-50 font-['DM_Sans']">
      <div className="maincontainer mx-auto flex items-center justify-between py-6 px-6 lg:px-12">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/Logo.png"
            alt="KMC Logo"
            width={175}
            height={40}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* ✅ Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-[30px]">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-[#6B717A] text-[18px] font-normal hover:text-[#001738] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ✅ Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-[12px]">
          <button className="border-2 border-[#001738] text-[#001738] px-[25px] py-[12px] rounded-full font-semibold text-[16px] capitalize hover:bg-[#001738] hover:text-white transition">
            Contact
          </button>
          <button className="bg-[#FF7200] text-white px-[25px] py-[12px] rounded-full font-semibold text-[16px] capitalize hover:bg-[#e36600] transition">
            Get Started
          </button>
        </div>

        {/* ✅ Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-7 py-4 space-y-4 shadow-md">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="block text-[#6B717A] text-[18px] font-normal hover:text-[#001738] transition"
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-3">
            <button className="border-2 border-[#001738] text-[#001738] px-[25px] py-[12px] rounded-full font-semibold text-[16px] capitalize hover:bg-[#001738] hover:text-white transition">
              Contact
            </button>
            <button className="bg-[#FF7200] text-white px-[25px] py-[12px] rounded-full font-semibold text-[16px] capitalize hover:bg-[#e36600] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
