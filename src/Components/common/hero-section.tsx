import Button from "@/components/buttons/button";
import Image from "next/image";
import React from "react";
import trucks from "@/../public/images/trucks.png";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Paragra from "./paragraph";


const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-end items-center">
      <div className="flex flex-col gap-y-4 px-6 xl:pl-48 pt-6">
        <Heading className="flex lg:text-6xl" text="Affordable truck service" />
        <Paragraph
          className="flex md:text-xl"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
        <Button text="Чета сделать" className="" />
      </div>
      <Image src={trucks} alt="truck" width={600} height={400} />
    </div>
  );
};

export default HeroSection;
