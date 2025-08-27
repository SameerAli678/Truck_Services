// src/
import urls from "@/router/routes";
import {
  ContactsT,
  FooterT,
  PagesT,
  SocialT,
} from "@/types/layout-types/footer-type";
import facebook from "@/../public/icons/facebook.svg";
import instagram from "@/../public/icons/instagram.svg";
import address from "@/../public/icons/address.svg";
import whatsapp from "@/../public/icons/whatsapp.svg";
import phone from "@/../public/icons/phone.svg";

export const FooterData: FooterT[] = [
  { tittle: "Pages" },
  { tittle: "Contacts" },
  { tittle: "Socials reference" },
];

export const PagesData: PagesT[] = [
  { link: urls.home, name: "Это мы" },
  { link: urls.contacts, name: "Контакты" },
  { link: urls.about, name: "Почему мы" },
  { link: urls.services, name: "А вот поэтому" },
];

export const ContactsData: ContactsT[] = [
  { icon: phone.src, text: "+7 (708) 802 88 88" },
  { icon: phone.src, text: "+7 (708) 803 88 88" },
  { icon: phone.src, text: "+7 (708) 51 51 518" },
  { icon: phone.src, text: "+7 (700) 51 51 518" },
  { icon: whatsapp.src, text: "+7 (708) 802 88 88" },
  { icon: address.src, text: "г. Бишкек, ул. Ляляля 69" },
];

export const SocialData: SocialT[] = [
  { icon: facebook.src, text: "truck_service_ofFicIaL" },
  { icon: instagram.src, text: "truck_service_ofFicIaL" },
];
