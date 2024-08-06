"use client";

import Image, { StaticImageData } from "next/image";
import { Flex, Heading, Text } from "@chakra-ui/react";

type CardProps = {
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

const ProjectCard = ({ imageSrc, alt, title, description }: CardProps) => {
  return (
    <Flex
      backgroundColor="transparent"
      flexDirection="column"
      gap={2}
      borderRadius="0.4rem"
      transition="background-color 0.25s ease-out"
      padding={4}
      _hover={{ backgroundColor: "#202020" }}
    >
      <Image
        width="1000"
        height="150"
        src={imageSrc}
        alt={alt}
        rel="preload"
        priority
        fetchPriority="high"
        style={{
          borderRadius: "0.4rem",
        }}
      />
      <Heading
        fontSize="1.4rem"
        display="inline-flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        {title}
      </Heading>
      <Text fontSize={15} textAlign="justify">
        {description.length < 100
          ? description
          : `${description.slice(0, 100)}...`}
      </Text>
    </Flex>
  );
};

export default ProjectCard;
