import { MetaHTMLAttributes, ReactChild, ReactChildren } from "react";

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Array<MetaHTMLAttributes<HTMLMetaElement>>;
  title: string;
}

export type ContextProps = {
  modalVisible: { isVisible: boolean };
  darkMode: { isDark: boolean };
  switchMode: () => void;
  handleSelect: () => void;
  closeMenu: () => void;
  showMenu: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface MenuItem {
  name: string;
  link: string;
}
