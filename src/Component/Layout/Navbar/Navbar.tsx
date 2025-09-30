"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: "Services", href:"#" },
    { name: "Industries", href: "#" },
    { name: "Why KMC", href: "#" },
    { name: "Offices", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="w-full bg-white top-0 left-0 z-50">
      <div className="maincontainer mx-auto flex items-center justify-between py-4 px-6 lg:px-[90px]">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/Logo.png"
            alt="KMC Logo"
            width={140}
            height={40}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>

        {/* ✅ Desktop Nav (centered links) */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-10 whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-600 hover:text-[#001738] transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ✅ Desktop Buttons (right side) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-[#001738] text-[#001738] bg-white px-6 py-2 rounded-full font-medium hover:bg-[#001738] hover:text-white transition">
            Contact
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* ✅ Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 shadow-md">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="block text-gray-600 hover:text-[#001738] transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* ✅ Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-3">
            <button className="border border-[#001738] text-[#001738] px-6 py-2 rounded-full font-medium hover:bg-[#001738] hover:text-white transition">
              Contact
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
