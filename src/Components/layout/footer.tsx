import React from "react";
import Paragraph from "../common/paragraph";
import {
  ContactsData,
  FooterData,
  PagesData,
  SocialData,
} from "@/constant/layout-constant/footer-data";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../common/footer-logo";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10 bg-[#1A1A1A] w-full h-fit px-7">
      <div className="flex flex-col md:flex-row w-full h-fit justify-start md:justify-around gap-y-10 max-w-7xl">
        <div className="flex">
          <FooterLogo />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-start md:justify-around w-full max-w-5xl">
          {FooterData.map((item, tittles) => (
            <div key={tittles} className="flex flex-col text-white p-">
              <p className="flex text-2xl font-bold text-white/80 pb-4">
                {item.tittle}
              </p>
              <div>
                {/* Pages Section */}
                <div className="flex">
                  {item.tittle === "Pages" && (
                    <div>
                      {PagesData.map((list, pages) => (
                        <Link key={pages} href={list.link}>
                          <p>{list.name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {/* Contacts Section */}
                <div className="">
                  {item.tittle === "Contacts" && (
                    <div className=" flex flex-col gap- items-start">
                      {ContactsData.map((list, contacts) => (
                        <div key={contacts} className="flex items-center gap-2">
                          <Image
                            src={list.icon || ""}
                            alt="Social"
                            width={20}
                            height={40}
                          />
                          <p>{list.text} </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Socials Section */}
                <div>
                  {item.tittle === "Socials reference" && (
                    <div className=" flex flex-col gap-2">
                      {SocialData.map((list, socials) => (
                        <div key={socials} className="flex items-center gap-2">
                          <Image
                            src={list.icon}
                            alt="Social"
                            width={20}
                            height={40}
                          />
                          <p>{list.text} </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* border */}
      <div className="flex h-[1px] w-full max-w-[1650px] border border-[#474747] mx-10" />
      <Paragraph
        text="Copyright © Truck Services 2025. All rights reserved."
        className="flex text-white/70"
      />
    </div>
  );
};

export default Footer;
