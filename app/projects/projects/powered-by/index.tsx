import { ReactElement } from "react";
import { SiVercel, SiGithub } from "react-icons/si";

type PoweredByType = {
  [key: string]: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
  };
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
