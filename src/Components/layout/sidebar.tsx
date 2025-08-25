import { NavbarData } from "@/constant/layout-constant/navbar-data";
import { SidebarT } from "@/types/layout-types/navbar-type";
import Link from "next/link";
import React from "react";
import Button from "../buttons/button";
import Image from "next/image";
import location from "../../../public/icons/location.svg";
import phone from "../../../public/icons/phone.svg";
import timeDuration from "../../../public/icons/time-duration.svg";

const SideBar: React.FC<SidebarT> = ({ isOpen, onCloser }) => {
  if (!isOpen) return null;
  return (
    <div className="md:hidden flex flex-col w-2xs h-full px-6 py-4 gap-y-6 bg-white shadow-xl fixed top-[80px] left-0 right-3 z-50">
      {/* Pages */}
      <div className="flex flex-col gap-y-4 text-black font-medium">
        {NavbarData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="cursor-pointer"
            onClick={onCloser}
          >
            <div className="flex gap-x-4 text-sm font-medium ">{item.name}</div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <Button text="Заказать звонок" className="" />

      {/* #rd Section */}
      <div className="flex flex-col gap-y-5">
        {/* Location */}
        <div className="flex items-start gap-x-4">
          <Image src={location} alt="location" width={20} height={20} />
          <div className="flex flex-col text-xs">
            <p>Наш адрес:</p>
            <p>г. Бишкек, ул. Ляляля 69</p>
          </div>
        </div>
        {/* Time Duration */}
        <div className="flex items-start gap-x-4">
          <Image src={timeDuration} alt="timeDuration" width={20} height={20} />
          <div className="flex flex-col text-xs">
            <p>График работы:</p>
            <p>С 8:00 до 22:00 без выходных</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start gap-x-4">
          <Image src={phone} alt="phone" width={20} height={20} />
          <div className="flex flex-col text-xs">
            <p>+7 (708) 51 51 518</p>
            <p>+7 (700) 51 51 518</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
