import AzadUniversityLogo from "public/logos/college/azad-university-logo.webp";
import UIDLogo from "public/logos/companies/uid-logo.webp";
import ISCLogo from "public/logos/companies/isc-logo.webp";
import HadishLogo from "public/logos/companies/hadish-logo.webp";
import CrossLogo from "public/logos/companies/cross-logo.webp";
import SampleImage from "public/images/Sketch.webp";
import {
  MenuItemsType,
  BioSectionsType,
  EducationalHistoryType,
  QuotesType,
  SocialsType,
  ProjectsType,
  StacksType,
  PoweredByType,
  WorkExperiencesType,
} from "lib/types";
import { Link, Flex, Badge } from "@chakra-ui/react";
import {
  FaHome,
  FaLayerGroup,
  FaMoneyBillWave,
  FaCode,
  FaComments,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  FaRightFromBracket,
  FaEnvelope,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaSpotify,
  FaReact,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export const menuItems: MenuItemsType[] = [
  {
    href: "/",
    label: "Home",
    mobileIcon: <FaHome style={{ fontSize: "15px" }} />,
  },
  {
    href: "/projects",
    label: "Projects",
    mobileIcon: <FaLayerGroup style={{ fontSize: "15px" }} />,
  },
  {
    href: "/experiences",
    label: "Experiences",
    mobileIcon: <FaMoneyBillWave style={{ fontSize: "15px" }} />,
  },
  {
    href: "/blog",
    label: "Blog",
    mobileIcon: <FaCode style={{ fontSize: "15px" }} />,
  },
  {
    href: "/guestbook",
    label: "Guestbook",
    mobileIcon: <FaComments style={{ fontSize: "15px" }} />,
  },
];

export const bioSections: BioSectionsType[] = [
  {
    year: 2000,
    content: "Born in Tehran, Iran.",
  },
  {
    year: 2019,
    content: "Started my professional career as a Front-end Developer.",
  },
  {
    year: 2023,
    content:
      "Successfully completed the Bachelor's degree in Computer Engineering and Started the Master's program in the same field.",
  },
  {
    year: "2023 till now",
    content: "So much happend :)",
  },
];

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

export const quotes: QuotesType[] = [
  {
    text: "BE LEGENDARY",
    author: "Kobe Bryant",
  },
  {
    text: "DO WHAT YOU GOTTA DO",
    author: "Danial Khakbaz",
  },
  {
    text: "DO WHAT EXCITES",
    author: "Kelly Wakasa",
  },
  {
    text: "ICE IN MY VEINS",
    author: "D'Angelo Russell",
  },
];

export const socials: SocialsType[] = [
  {
    link: "mailto:danialkhakbaz.dk@gmail.com",
    name: "Email address",
    logo: (
      <FaEnvelope
        style={{
          fontSize: "30px",
          color: "#D3D3D3",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://t.me/danielkhakbaz",
    name: "Telegram account",
    logo: (
      <FaTelegramPlane
        style={{
          fontSize: "30px",
          color: "#0088CC",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://twitter.com/danielkhakbaz",
    name: "Twitter account",
    logo: (
      <FaXTwitter
        style={{
          fontSize: "30px",
          color: "#1DA1F2",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://www.instagram.com/danielkhakbaz/",
    name: "Instagram page",
    logo: (
      <FaInstagram
        style={{
          fontSize: "30px",
          color: "#DD2A7B",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://github.com/danielkhakbaz",
    name: "Github page",
    logo: (
      <FaGithub
        style={{
          fontSize: "30px",
          color: "#818288",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://www.linkedin.com/in/danielkhakbaz/",
    name: "Linkedin page",
    logo: (
      <FaLinkedinIn
        style={{
          fontSize: "30px",
          color: "#0077B5",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
  {
    link: "https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1",
    name: "Spotify page",
    logo: (
      <FaSpotify
        style={{
          fontSize: "30px",
          color: "#1ED760",
          transition: "opacity 0.2s",
        }}
      />
    ),
  },
];

export const stacks: StacksType = {
  react: {
    label: "React.js",
    icon: <FaReact />,
    backgroundColor: "cyan.500",
    color: "white",
  },
  next: {
    icon: <SiNextdotjs />,
    label: "Next.js",
    backgroundColor: "gray.700",
    color: "white",
  },
  chakra: {
    icon: <SiChakraui />,
    label: "ChakraUI",
    backgroundColor: "teal.500",
    color: "teal.50",
  },
  tailwind: {
    icon: <SiTailwindcss />,
    label: "TailwindCSS",
    backgroundColor: "blue.800",
    color: "blue.200",
  },
  typescript: {
    icon: <SiTypescript />,
    label: "Typescript",
    backgroundColor: "blue.600",
    color: "white",
  },
  javascript: {
    icon: <SiJavascript />,
    label: "Javascript",
    backgroundColor: "yellow.400",
    color: "yellow.900",
  },
};

export const poweredBy: PoweredByType = {
  vercel: {
    label: "Vercel",
    icon: <SiVercel />,
    backgroundColor: "transparent",
  },
  github: {
    icon: <SiGithub />,
    label: "Github",
    backgroundColor: "transparent",
  },
};

export const projects: ProjectsType[] = [
  {
    title: "Notes App 1",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    images: [
      { src: SampleImage, alt: "1" },
      { src: SampleImage, alt: "2" },
    ],
    poweredBy: poweredBy.github,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.react,
              stacks.next,
              stacks.chakra,
              stacks.javascript,
              stacks.typescript,
              stacks.tailwind,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
    delay: 0.5,
  },
  {
    title: "Notes App 2",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    images: [
      { src: SampleImage, alt: "1" },
      { src: SampleImage, alt: "2" },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.react,
              stacks.next,
              stacks.chakra,
              stacks.javascript,
              stacks.typescript,
              stacks.tailwind,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
    delay: 0.75,
  },
  {
    title: "Notes App 3",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    images: [
      { src: SampleImage, alt: "1" },
      { src: SampleImage, alt: "2" },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.react,
              stacks.next,
              stacks.chakra,
              stacks.javascript,
              stacks.typescript,
              stacks.tailwind,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
    delay: 1,
  },
  {
    title: "Notes App 4",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    images: [
      { src: SampleImage, alt: "1" },
      { src: SampleImage, alt: "2" },
    ],
    poweredBy: poweredBy.github,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.react,
              stacks.next,
              stacks.chakra,
              stacks.javascript,
              stacks.typescript,
              stacks.tailwind,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
    delay: 1.25,
  },
  {
    title: "Notes App 5",
    description:
      "a lot of description a lot of description a lot of description a lot of description a lot of description",
    images: [
      { src: SampleImage, alt: "1" },
      { src: SampleImage, alt: "2" },
    ],
    poweredBy: poweredBy.vercel,
    sections: [
      {
        label: "Website",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
          </Link>
        ),
        divider: true,
      },
      {
        label: "Github",
        component: (
          <Link
            isExternal
            href="https://href.com"
            target="_blank"
            style={{
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              opacity: 0.8,
            }}
          >
            https://lable.com
            <FaRightFromBracket />
          </Link>
        ),
        divider: true,
      },
      {
        label: "Stacks",
        component: (
          <Flex width="100%" flexWrap="wrap" gap={4}>
            {[
              stacks.react,
              stacks.next,
              stacks.chakra,
              stacks.javascript,
              stacks.typescript,
              stacks.tailwind,
            ].map(({ icon, label, backgroundColor, color }) => (
              <Badge
                key={label}
                display="inline-flex"
                alignItems="center"
                gap={2}
                variant="subtle"
                backgroundColor={backgroundColor}
                color={color}
                fontSize="12px"
                textTransform="none"
              >
                {icon}
                {label}
              </Badge>
            ))}
          </Flex>
        ),
      },
    ],
    delay: 1.5,
  },
];

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
    delay: 0.75,
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
    delay: 1,
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
    delay: 1.25,
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
    delay: 1.5,
  },
];

export const mainTechs: string[] = [
  "nextjs",
  "nestjs",
  "typescript",
  "tailwind",
];
