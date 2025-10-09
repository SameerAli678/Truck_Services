"use client";
import Image from "next/image";
import React from "react";
import logo from "@/../public/images/footer-logo.png";
import { useRouter } from "next/navigation";
import urls from "@/router/routes";

const Logo = () => {
  const { push } = useRouter();
  return (
    <div>
      <Image
        src={logo}
        alt="Truck Services"
        width={150}
        height={50}
        onClick={() => push(urls.home)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Logo;
