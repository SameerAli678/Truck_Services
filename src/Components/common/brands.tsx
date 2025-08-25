import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Image from "next/image";
import daf from "@/../public/brands/daf.png";
import man from "@/../public/brands/man.png";
import renault from "@/../public/brands/renault.png";
import scania from "@/../public/brands/scania.png";
import volvo from "@/../public/brands/volvo.png";

const Brands = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-9 md:gap-y-0 px-3 sm:px-6 xl:px-48 py-12">
      {/* Text Section */}
      <div className="flex flex-col gap-y-4 w-full h-full">
        <Heading
          className="md:text-5xl"
          text="У вас вопрос кто мы а кто мы блин"
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer sdvdsvds  consectetur adipiscing elit."
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer  consectetur adipiscing elit."
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer  consectetur adipiscing elit."
        />
      </div>
      {/* Image Section */}
      <div className=" relative flex justify-center items-center gap-6 w-full h-full min-h-[300px] md:min-h-[400px]">
        <Image
          src={scania}
          alt="scania"
          width={150}
          height={150}
          className="absolute top-2 left-2 w-20 sm:w-32 md:w-40"
        />

        <Image
          src={volvo}
          alt="volvo"
          width={150}
          height={150}
          className="absolute top-2 right-2 w-20 sm:w-32 md:w-40"
        />

        <Image
          src={man}
          alt="man"
          width={150}
          height={150}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 md:w-40 z-40"
        />

        <Image
          src={daf}
          alt="daf"
          width={150}
          height={150}
          className="absolute bottom-20 left-2 w-20 sm:w-32 md:w-40"
        />

        <Image
          src={renault}
          alt="renault"
          width={150}
          height={150}
          className="absolute bottom-0 right-2 w-20 sm:w-32 md:w-40"
        />
      </div>
    </div>
  );
};

export default Brands;
