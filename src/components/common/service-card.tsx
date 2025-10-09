import Image from "next/image";
import React from "react";
import { serviceCardI } from "@/interfaces/service-card-interface";
import Heading from "./heading";
import Paragraph from "./paragraph";

const ServiceCard = ({ heading, text, image, className }: serviceCardI) => {
  return (
    <div
      className={`flex w-full max-w-sm h-full bg-[#F4F6FA] rounded-lg py-4 ${className}`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-y-3 pl-5">
        <Heading className="flex text-xl" text={heading} />
        <Paragraph text={text} />
      </div>

      {/* Image Section */}
      <div className="flex justify-end items-end">
        <Image src={image || ""} alt="carChors" width={500} height={200} />
      </div>
    </div>
  );
};

export default ServiceCard;
