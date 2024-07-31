import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import { stacks } from "app/projects/projects/stacks";
import { poweredBy } from "app/projects/projects/powered-by";
import SampleImage from "public/images/Sketch.webp";
import { Link, Flex, Badge } from "@chakra-ui/react";
import { FaRightFromBracket } from "react-icons/fa6";

type ProjectsType = {
  link: string;
  title: string;
  description: string;
  images: {
    src: StaticImageData;
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
};

export const projects: ProjectsType[] = [
  {
    link: "notes-app1",
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
  },
  {
    link: "notes-app2",
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
  },
  {
    link: "notes-app3",
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
  },
  {
    link: "notes-app4",
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
  },
  {
    link: "notes-app5",
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
  },
];
