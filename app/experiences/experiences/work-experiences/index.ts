import { StaticImageData } from "next/image";
import UIDLogo from "public/logos/companies/uid-logo.webp";
import ISCLogo from "public/logos/companies/isc-logo.webp";
import HadishLogo from "public/logos/companies/hadish-logo.webp";
import CrossLogo from "public/logos/companies/cross-logo.webp";

type WorkExperiencesType = {
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
};

export const workExperiences: WorkExperiencesType[] = [
  {
    logo: { src: UIDLogo, alt: "UID's logo" },
    position: "Front-end Developer",
    company_name: "U-ID",
    info: "UID is a cutting-edge technology company specializing in AI-driven solutions, such as authenticating user liveness through video verification",
    descriptions: [
      {
        paragraph:
          "As a Front-end developer in our team, I contribute to creating intuitive and user-friendly interfaces that make our technology accessible and easy to use. Working at UID has allowed me to collaborate with a talented team of professionals and stay at the forefront of Front-end development advancements",
      },
      {
        paragraph:
          "Collaborated on developing a gRPC based panel, consolidating four separate panels into a single, highly reusable interface",
      },
      {
        paragraph:
          "Successfully refactored a Progressive Web App (PWA), enhancing performance and maintainability",
      },
      {
        paragraph:
          "Contributed to streamlining processes and improving development team efficiency",
      },
    ],
    timeline: "May 2024 - Present",
    workplace_type: "Remote",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: ISCLogo, alt: "Informatics Services Corporation(ISC)'s logo" },
    position: "Front-end Developer",
    company_name: "Informatics Services Corporation",
    info: "Worked in the Bank-ID team as the first e-KYC service provider in Iran which uses powerful AI algorithms including live face detection and verification to authenticate the users’ ID, with more than 50,000 daily users and 6,000,000 successful authentications",
    descriptions: [
      {
        paragraph:
          "Tackled highly complex concepts and projects, including creating reusable components for our customers to integrate into their code",
      },
      {
        paragraph:
          "Designed, developed, and maintained 3 panels with different roles",
      },
      {
        paragraph:
          "Thrived in a fast-paced and demanding environment, tackling complex concepts and projects that required a high degree of precision and ability to adapt to changing circumstances",
      },
    ],
    timeline: "Sep 2022 - Present",
    workplace_type: "Hybrid",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: HadishLogo, alt: "Hadish Sabz Parseh's logo" },
    position: "Front-end Developer",
    company_name: "Hadish Sabz Parseh",
    info: "Hadish Sabz Parseh is one of the largest Smart-TV manufacturers in Iran",
    descriptions: [
      {
        paragraph:
          " Developed a two-language shopping website with a focus on improving client experience",
      },
      {
        paragraph:
          "Built a vertical B2B website including three panels based on the roles in the company with certain accessibilities and also Operated in an agile-driven environment to effectively maintain project timelines",
      },
    ],
    timeline: "Jul 2020 - Aug 2021",
    workplace_type: "Hybrid",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: CrossLogo, alt: "Cross sport's logo" },
    position: "Front-end Developer",
    company_name: "Cross Sport",
    info: "CrossSport is one of the largest online stores and manufacturers of sport equipment in the country",
    descriptions: [
      {
        paragraph:
          "Started off my professional career with a solid team as a Front-end developer",
      },
    ],
    timeline: "Jun 2019 - Mar 2020",
    workplace_type: "On-site",
    location: "Tehran, Iran",
    divider: false,
  },
];
