// src/views/Services/index.tsx
"use client";
import React from "react";
import ServiceCard from "@/components/common/service-card";
import { ServicesCardData } from "@/constant/common/service-card-data";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import Brands from "@/components/common/brands";
import TruckServices from "@/components/common/truck-services";
import DriverServices from "@/components/common/driver-services";
import Button from "@/components/buttons/button";
import urls from "@/router/routes";
import { useRouter } from "next/navigation";

const ServicesIndex = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col gap-y-13 justify-center items-center w-full">
      {/* Text Section */}
      <div className="flex flex-col gap-y-4 px-3 text-center justify-center items-center w-full max-w-5xl mt-10">
        <Heading
          className="flex lg:text-6xl"
          text="Любые услуги за ваши денишки"
        />
        <Paragraph
          className="flex md:text-lg px-9"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
          integer."
        />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 px-4">
        {ServicesCardData.map((item, index) => (
          <ServiceCard {...item} key={index} />
        ))}
      </div>

      {/* Brands Section */}
      <Brands />

      {/* Truck Services */}
      <TruckServices />

      {/* DriverServices */}
      <DriverServices />

      {/* Button Do to Services */}
      <Button
        text="Go to А-вот-поэтому"
        className="py-3 px-5 mb-10"
        onClick={() => push(urls.services)}
      />
    </div>
  );
};

export default ServicesIndex;
