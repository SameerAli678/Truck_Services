import React from "react";
import contactBg from "@/../public/images/contactBg.jpg";
import Image from "next/image";
import ContactFrom from "./contact-from";

const ContactSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="flex justify-center items-center w-full">
        <Image
          src={contactBg}
          alt="contactBg"
          width={800}
          height={500}
          className=" flex w-[1800px] h-[300px] md:h-[400px] object-cover"
        />
      </div>
      <div className="absolute right-9 top-1/2 -1/2 -translate-x-1/2 -translate-y-1/2">
        <ContactFrom />
      </div>
    </div>
  );
};

export default ContactSection;
