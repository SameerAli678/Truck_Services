import { ButtonInterface } from "@/interfaces/button-interface";
import React from "react";

const Button = ({ text, className, onClick }: ButtonInterface) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center p-5 [100px] bg-primary border m-5 ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
