import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "lib/utils/page-transition";
import { projects } from "lib/constants";
import {
  Flex,
  Button,
  Heading,
  Text,
  Divider,
  Center,
  Badge,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";

type ProjectsIDProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.link,
  }));
}

const ProjectsID = async ({ params }: ProjectsIDProps) => {
  const project = projects.find((project) => project.link === params.id);

  if (!project) {
    throw new Error("The Project is not found!");
  }

  return (
    <PageTransition>
      <Flex flexDirection="column" gap={4}>
        <Flex gap={4}>
          <Link href="/projects">
            <Button
              variant="outline"
              borderColor="white"
              aria-label="back-button"
            >
              <FaArrowLeft />
            </Button>
          </Link>
        </Flex>
        <Flex flexDirection="column" gap={4}>
          <Heading>{project.title}</Heading>
          <Text>{project.description}</Text>
        </Flex>
        <Flex flexDirection="column" gap={2.5}>
          {project.sections.map((section) => (
            <Fragment key={section.label}>
              <Flex alignItems="baseline" gap={4}>
                <Badge
                  variant="outline"
                  colorScheme="orange"
                  style={{
                    fontSize: "14px",
                    textTransform: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {section.label}
                </Badge>
                {section.component}
              </Flex>
              {section.divider && <Divider borderColor="#393939" />}
            </Fragment>
          ))}
        </Flex>
        <Flex flexDirection="column" gap={6}>
          {project.images.map((image) => (
            <Image
              key={image.alt}
              width={1200}
              height={400}
              src={image.src}
              alt={image.alt}
              rel="preload"
              priority
              fetchPriority="high"
              style={{
                borderRadius: "0.4rem",
              }}
            />
          ))}
        </Flex>
        <Center fontSize={14}>
          Powered by{" "}
          <Badge
            fontSize={13}
            backgroundColor={project.poweredBy.backgroundColor}
            display="flex"
            alignItems="center"
            gap={2}
            textTransform="none"
            marginLeft={2}
          >
            {project.poweredBy.icon}
            {project.poweredBy.label}
          </Badge>
        </Center>
      </Flex>
    </PageTransition>
  );
};

export default ProjectsID;
