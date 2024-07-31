import { StaticImageData } from "next/image";
import AzadUniversityLogo from "public/logos/college/azad-university-logo.webp";

type EducationalHistoryType = {
  logo: StaticImageData;
  title: string;
  college: string;
  years: string;
  divider?: boolean;
};

export const educationalHistory: EducationalHistoryType[] = [
  {
    logo: AzadUniversityLogo,
    title: "M.S in Computer Engineering",
    college: "IAU (South-Tehran Branch)",
    years: "(2023-Current)",
    divider: true,
  },
  {
    logo: AzadUniversityLogo,
    title: "B.S in Computer Engineering",
    college: "IAU (West-Tehran Branch)",
    years: "(2018-2023)",
  },
];
