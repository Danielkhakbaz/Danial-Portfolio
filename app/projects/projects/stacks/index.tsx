import { ReactElement } from "react";
import { FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

type StacksType = {
  [key: string]: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
    color: string;
  };
};

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
