// import { paragraphI } from "@/interfaces/heading-interface";
import { ParagraphI } from "@/interfaces/paragraph-interface";

import React from "react";

const Paragraph = ({ text, className }: ParagraphI) => {
  return <div className={`flex text-sm ${className}`}>{text}</div>;
};

export default Paragraph;
