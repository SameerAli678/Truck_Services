// src/views/About/index.tsx
"use client";
import React from "react";
import Brands from "@/components/common/brands";
import Location from "@/components/common/location";
import ContactSection from "@/components/common/contact-section";
import ContactFrom from "@/components/common/contact-from";

const AboutIndex = () => {
  return (
    <div className="flex flex-col gap-y-13 justify-center items-center w-full mt-10">
      {/* Brands Section */}
      <Brands />

      {/* Location Section */}
      <Location />

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

export default AboutIndex;
