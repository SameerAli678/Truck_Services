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

const DriverServices = () => {
  return (
    <Carousel className="relative flex w-full">
      <CarouselContent>
        {DriverServicesData.map((icon, index) => (
          <CarouselItem key={index}>
            <Image
              src={icon.image}
              alt=" "
              width={1000}
              height={1000}
              className="flex w-full h-[500px] "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-5 md:left-13 -translate-y-1/2 bg-amber-50" />
      <CarouselNext className="absolute top-1/2 right-5 md:right-13 -translate-y-1/2 bg-amber-50" />
    </Carousel>
  );
};

export default DriverServices;
