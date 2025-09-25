"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function LocationsSection() {
  // State to track which location is selected
  const [selected, setSelected] = useState(0);

  const locations = [
    { name: "Metro Manila", image: "/image/Image.png" },
    { name: "Clark", image: "/image/Image(1).png" },
    { name: "Cebu", image: "/image/Image(2).png" },
  ];

  return (
    <section
      className="relative w-full h-[800px] bg-cover bg-center"
      style={{ backgroundImage: "url('/image/Background Image(1).png')" }}
    >
      <div className="maincontainer mx-auto flex flex-col items-center h-full">
        {/* Buttons */}
        <div className="flex gap-3 bg-white rounded-2xl p-2 shadow-md -mt-8">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`font-semibold text-[16px] px-6 py-2 rounded-xl capitalize ${
                selected === index
                  ? "bg-[#001738] text-white"
                  : "text-[#001738] hover:bg-[#001738] hover:text-white"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="flex gap-3 mt-10">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`w-[100px] h-[100px] rounded-2xl overflow-hidden transition-all duration-300 ${
                selected === index ? "border-4 border-[#fff]" : ""
              }`}
            >
              <Image
                src={location.image}
                alt={location.name}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
