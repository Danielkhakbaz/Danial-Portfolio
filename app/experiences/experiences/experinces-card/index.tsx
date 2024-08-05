import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

type ExperiencesProps = {
  experience: {
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
};

const ExperinceCard = async ({ experience }: ExperiencesProps) => {
  return (
    <Fragment key={experience.company_name}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 2, md: 6 }}
      >
        <Image
          width={70}
          height={70}
          src={experience.logo.src}
          alt={experience.logo.alt}
          rel="preload"
          priority
          fetchPriority="high"
          style={{
            border: "2px solid white",
            borderRadius: "100%",
          }}
        />
        <Flex
          width="100%"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Flex width="100%" flexDirection="column" gap={2.5}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading
                size="md"
                fontWeight="black"
                display="inline-flex"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
                gap={2}
              >
                {experience.company_name}
              </Heading>
              <Text
                fontWeight="bold"
                fontSize={12}
                textAlign="right"
                opacity={0.8}
              >
                {experience.location} ({experience.workplace_type})
              </Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" fontSize={13} opacity={0.8}>
                {experience.position}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={12}
                textAlign="right"
                opacity={0.8}
              >
                {experience.timeline}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap={1}>
        <Text fontWeight="bold" textAlign="justify" rel="preload">
          {experience.info}
        </Text>
        {experience.descriptions.map((description) => (
          <Text
            key={description.paragraph}
            textAlign="justify"
            rel="preload"
            marginY={1.2}
          >
            ‣ {description.paragraph}
          </Text>
        ))}
      </Flex>
      {experience.divider && <Divider borderWidth={2} borderColor="#393939" />}
    </Fragment>
  );
};

export default ExperinceCard;
