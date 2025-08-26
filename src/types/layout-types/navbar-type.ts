// src/types/layout-types/navbar-type.ts

import { Dispatch } from "react";

export type navbarT = {
  link: string;
  name: string;
};

export interface SidebarT {
  isOpen: boolean;
  onCloser: () => void;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
