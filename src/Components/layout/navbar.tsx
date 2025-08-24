// src/Component/layout/navbar.tsx
"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import location from "../../../public/icons/location.svg";
import phone from "../../../public/icons/phone.svg";
import timeDuration from "../../../public/icons/time-duration.svg";
import { useRouter } from "next/navigation";
import urls from "@/router/routes";
import Button from "../buttons/button";
import { NavbarData } from "@/constant/layout-constant/navbar-data";
import Link from "next/link";

const Navbar = () => {
  const { push } = useRouter();
  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="flex flex-col w-full max-w-6xl">
        {/* 1st Section of Navbar */}
        <div className="flex justify-between items-center px-10 py-5 gap-x-5">
          {/* location & Border & Time Duration */}
          <div className="flex items-center gap-x-5">
            {/* Location */}
            <div className="flex items-start gap-x-2">
              <Image src={location} alt="location" width={20} height={20} />
              <div className="flex flex-col text-xs">
                <p>Наш адрес:</p>
                <p>г. Бишкек, ул. Ляляля 69</p>
              </div>
            </div>
            <div className="flex flex-col border border-border h-10" />
            {/* Time Duration */}
            <div className="flex items-start gap-x-2">
              <Image
                src={timeDuration}
                alt="timeDuration"
                width={20}
                height={20}
              />
              <div className="flex flex-col text-xs">
                <p>График работы:</p>
                <p>С 8:00 до 22:00 без выходных</p>
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start gap-x-2">
            <Image src={phone} alt="phone" width={20} height={20} />
            <div className="flex flex-col text-xs">
              <p>+7 (708) 51 51 518</p>
              <p>+7 (700) 51 51 518</p>
            </div>
          </div>
        </div>
        {/* 2nd Section And Border Section */}
        <div className="flex border border-border" />
        {/* 3rd Section of Navbar */}
        <div className="flex justify-between items-center px-3 py-5 ">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={50}
            onClick={() => push(urls.home)}
            className="cursor-pointer"
          />
          {/* Pages */}
          <div className="flex gap-x-4 text-black font-medium">
            {NavbarData.map((item, index) => (
              <Link key={index} href={item.link} className="cursor-pointer">
                <div className="flex gap-x-4 text-sm font-medium ">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <Button text="Заказать звонок" className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
