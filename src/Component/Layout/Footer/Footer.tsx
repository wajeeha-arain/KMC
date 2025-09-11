"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#eef6fb] text-[#051636] pt-18 pb-6 mt-20">
      <div className="maincontainer">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[81px]">
          {/* Logo + Text */}
          <div className="flex-1">
            <div className="flex items-center">
              <Image
                src="/image/Logo.png"
                alt="KMC Logo"
                width={172}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] lg:text-[18px] leading-[26px] 
               text-[#051636] font-[400] lg:max-w-[720px]">
              Lorem ipsum dolor sit amet consectetur. Id leo amet cursus non ut.
              Pretium nisl mauris nunc etiam sit quam nibh duis sollicitudin. Pretium nisl mauris
              Lacus suspendisse venenatis sed aliquam magnis at. Aenean vel ut nunc aenean tincidunt imperdiet.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-1 justify-around text-[#051636] text-[15px] sm:text-[16px] font-[400] mt-6 lg:mt-0">
            <div className="flex flex-col space-y-3 sm:space-y-[35px]">
              <a href="#" className="hover:text-orange-500 transition">Home</a>
              <a href="#" className="hover:text-orange-500 transition">Services</a>
              <a href="#" className="hover:text-orange-500 transition">Industries</a>
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-[35px]">
              <a href="#" className="hover:text-orange-500 transition">Why KMC</a>
              <a href="#" className="hover:text-orange-500 transition">Offices</a>
              <a href="#" className="hover:text-orange-500 transition">About</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#757575] my-6 sm:my-8 w-full"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[26px]">
          <p className="text-[#051636] text-center md:text-left">
            © 2025 KMC. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-[18px] mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition">
              <FaFacebookF size={18} className="sm:size-5" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram size={18} className="sm:size-5" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaLinkedinIn size={18} className="sm:size-5" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaXTwitter size={18} className="sm:size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
