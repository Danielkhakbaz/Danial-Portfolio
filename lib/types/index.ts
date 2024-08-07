import { ReactElement } from "react";
import { StaticImageData } from "next/image";

export type MenuItemsType = {
  href: string;
  label: string;
  mobileIcon: ReactElement;
};

export type BioSectionsType = {
  year: number | string;
  content: string;
};

export type EducationalHistoryType = {
  logo: StaticImageData;
  title: string;
  college: string;
  years: string;
  divider?: boolean;
};

export type QuotesType = {
  text: string;
  author: string;
};

export type SocialsType = {
  link: string;
  name: string;
  logo: ReactElement;
};

export type ProjectsType = {
  title: string;
  description: string;
  icon: number;
  images: {
    src: string;
    alt: string;
  }[];
  poweredBy: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
  };
  sections: {
    label: string;
    component: ReactElement;
    divider?: boolean;
  }[];
  delay: number;
};

export type StacksType = {
  [key: string]: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
    color: string;
  };
};

export type PoweredByType = {
  [key: string]: {
    label: "Github" | "Vercel";
    icon: ReactElement;
    backgroundColor: string;
  };
};

export type WorkExperiencesType = {
  logo: {
    src: StaticImageData;
    alt: string;
  };
  position: string;
  company_name: string;
  location: string;
  timeline: string;
  workplace_type: string;
  info: string;
  descriptions: {
    paragraph: string;
  }[];
  divider?: boolean;
  delay: number;
};
