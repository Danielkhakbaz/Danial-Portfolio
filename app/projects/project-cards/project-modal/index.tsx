"use client";

import { Fragment } from "react";
import Image from "next/image";
import MotionComponent from "lib/utils/motion";
import { ProjectsType } from "lib/types";
import { AnimatePresence } from "framer-motion";
import {
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  Divider,
  Center,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

type ProjectModalProps = {
  project: ProjectsType;
  selectedID: string;
  setSelectedID: () => void;
};

const ProjectModal = ({
  project,
  selectedID,
  setSelectedID,
}: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <MotionComponent
        className="motion__project--modal"
        tag="div"
        layoutId={selectedID}
        style={{
          maxWidth: "768px",
          width: "100%",
          backgroundColor: "#181818",
          position: "absolute",
          top: "70%",
          left: "50%",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <Flex flexDirection="column" gap={4}>
          <Flex gap={4}>
            <Button
              variant="outline"
              borderColor="white"
              aria-label="back-button"
              onClick={setSelectedID}
            >
              <FaArrowLeft />
            </Button>
          </Flex>
          <Flex flexDirection="column" gap={4}>
            <Heading>{project?.title}</Heading>
            <Text>{project?.description}</Text>
          </Flex>
          <Flex flexDirection="column" gap={2.5}>
            {project?.sections.map((section) => (
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
            {project?.images.map((image) => (
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
              backgroundColor={project?.poweredBy.backgroundColor}
              display="flex"
              alignItems="center"
              gap={2}
              textTransform="none"
              marginLeft={2}
            >
              {project?.poweredBy.icon}
              {project?.poweredBy.label}
            </Badge>
          </Center>
        </Flex>
      </MotionComponent>
    </AnimatePresence>
  );
};

export default ProjectModal;
