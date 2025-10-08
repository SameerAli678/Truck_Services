// src
import React from "react";
import HeroSection from "@/components/common/hero-section";
import ServiceCard from "@/components/common/service-card";
import { ServicesCardData } from "@/constant/common/service-card-data";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import Brands from "@/components/common/brands";
import Location from "@/components/common/location";
import ContactSection from "@/components/common/contact-section";
import ContactFrom from "@/components/common/contact-from";
import TruckServices from "@/components/common/truck-services";
import DriverServices from "@/components/common/driver-services";

const ЭтомыHomeIndex = () => {
  return (
    <div className="flex flex-col gap-y-13 justify-center items-center w-full">
      {/* HeroSection */}
      <HeroSection />

      {/* Text Section */}
      <div className="flex flex-col gap-y-4 px-3 text-center justify-center items-center w-full max-w-5xl">
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

      {/* Location Section */}
      <Location />

      {/* Truck Services */}
      <TruckServices />

      {/* DriverServices */}
      <DriverServices />

      {/* Contact Section */}
      <div className="hidden md:flex">
        <ContactSection />
      </div>
      <div className="flex md:hidden p-4">
        <ContactFrom />
      </div>
    </div>
  );
};

export default ЭтомыHomeIndex;
