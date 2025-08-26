import { HeadingI } from "@/interfaces/heading-interface";
import React from "react";

const Heading = ({ text, className }: HeadingI) => {
  return <div className={`flex font-bold text-3xl ${className}`}>{text}</div>;
};

export default Heading;
