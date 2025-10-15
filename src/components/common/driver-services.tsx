import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { DriverServicesData } from "@/constant/common/driver-services-data";
import Heading from "./heading";
import Paragraph from "./paragraph";

const DriverServices = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7">
      <div className="flex flex-col px-2 justify-center items-center gap-y-4 w-full max-w-7xl text-center">
        <Heading text="Driving Services" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
        />
      </div>
      <Carousel className="relative w-full h-full">
        <CarouselContent>
          {DriverServicesData.map((icon, index) => (
            <CarouselItem key={index}>
              <Image
                src={icon.image}
                alt=" "
                width={1000}
                height={800}
                className="w-full h-[500px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-5 md:left-13 -translate-y-1/2 bg-amber-50 cursor-pointer" />
        <CarouselNext className="absolute top-1/2 right-5 md:right-13 -translate-y-1/2 bg-amber-50 cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default DriverServices;
