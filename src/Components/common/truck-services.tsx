import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { TruckServicesData } from "@/constant/common/truck-services-data";
import Heading from "./heading";
import Paragraph from "./paragraph";
import Button from "../buttons/button";

const TruckServices = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7">
      <div className="flex flex-col px-2 justify-center items-center gap-y-4 w-full max-w-7xl text-center">
        <Heading text="Truck Services" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
        />
      </div>
      <Carousel className="relative flex w-full">
        <CarouselContent>
          {TruckServicesData.map((icon, index) => (
            <CarouselItem key={index}>
              <Image
                src={icon.image}
                alt=""
                width={800}
                height={500}
                className="flex w-full h-[500px] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-5 md:left-13 -translate-y-1/2 bg-amber-50" />
        <CarouselNext className="absolute top-1/2 right-5 md:right-13 -translate-y-1/2 bg-amber-50" />
      </Carousel>
      <Button text="Go to А-вот-поэтому" className="py-3 px-5" />
    </div>
  );
};

export default TruckServices;
