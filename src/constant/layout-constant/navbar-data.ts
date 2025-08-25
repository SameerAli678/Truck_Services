import urls from "@/router/routes";
import { navbarT } from "@/types/layout-types/navbar-type";

export const NavbarData: navbarT[] = [
  { link: urls.home, name: "Это мы" },
  { link: urls.contacts, name: "Контакты" },
  { link: urls.about, name: "Почему мы" },
  { link: urls.services, name: "А вот поэтому" },
];
