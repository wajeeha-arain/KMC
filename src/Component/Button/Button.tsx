"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; 
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; 
}

export default function Button({
  children,
  onClick = () => {},
  className = "",
  type = "button",
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={`inline-block sm:text-[16px] text-[14px] px-6 py-4 rounded-xl font-semibold shadow transition
        ${disabled
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-[#EE7A30] hover:bg-[#EA580C] text-white"} 
        ${className}`}
    >
      {children}
    </button>
  );
}
