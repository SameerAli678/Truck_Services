"use client";
import Image from "next/image";
import React from "react";
import logo from "@/../public/images/logo.png";
import { useRouter } from "next/navigation";
import urls from "@/router/routes";

const FooterLogo = () => {
  const { push } = useRouter();
  return (
    <div className="flex text-white w-full flex-col">
      <Image
        src={logo}
        alt="logo"
        width={250}
        height={50}
        onClick={() => push(urls.home)}
        className="cursor-pointer text-white"
      />
    </div>
  );
};

export default FooterLogo;
