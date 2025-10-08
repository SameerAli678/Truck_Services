import React from "react";
import Logo from "../common/logo";
import Paragraph from "../common/paragraph";
import {
  ContactsData,
  FooterData,
  PagesData,
  SocialData,
} from "@/constant/layout-constant/footer-data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-[#1A1A1A] w-full h-fit">
        <div>
          <Logo />
        </div>
        <div>
          {FooterData.map((item, tittles) => (
            <div key={tittles} className="flex">
              <p className="flex ">{item.tittle}</p>
              <div className="flex ">
                {/* Pages Section */}
                <div>
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
                <div>
                  {item.tittle === "Contacts" && (
                    <div>
                      {ContactsData.map((list, contacts) => (
                        <div key={contacts}>
                          <Image
                            src={list.icon || ""}
                            alt="Social"
                            width={40}
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
                    <div>
                      {SocialData.map((list, socials) => (
                        <div key={socials}>
                          <Image
                            src={list.icon}
                            alt="Social"
                            width={40}
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
      <div className="flex h-1 w-full max-w-[500px] border border-[#474747]" />
      <Paragraph text="Copyright © Truck Services 2025. All rights reserved." />
    </div>
  );
};

export default Footer;
