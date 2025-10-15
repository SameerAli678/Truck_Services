// src/views/Contacts/index.tsx

"use client";
import React from "react";
import Location from "@/components/common/location";
import ContactSection from "@/components/common/contact-section";
import ContactFrom from "@/components/common/contact-from";

const contactIndex = () => {
  return (
    <div className="flex flex-col gap-y-13 justify-center items-center w-full mt-10">
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

export default contactIndex;
