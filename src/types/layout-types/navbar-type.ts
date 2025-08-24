// src/types/layout-types/navbar-type.ts

export type navbarT = {
  link: string;
  name: string;
};

export type Type = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
