import { ButtonI } from "@/interfaces/button-interface";
import React from "react";

const Button = ({ text, className, onClick }: ButtonI) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center px-3 py-1 bg-[#4762FF] hover:bg-[#2f4eff] text-white border w-fit 
        rounded-md cursor-pointer ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
  