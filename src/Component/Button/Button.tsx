"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // fix: children ko ReactNode type do
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // fix: exact type do
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
      className={`inline-block px-6 py-4 rounded-xl font-semibold shadow transition
        ${disabled
          ? "bg-gray-400 cursor-not-allowed text-white"
          : "bg-[#EE7A30] hover:bg-orange-600 text-white"} 
        ${className}`}
    >
      {children}
    </button>
  );
}
