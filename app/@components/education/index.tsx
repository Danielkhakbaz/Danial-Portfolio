import { Fragment } from "react";
import Image from "next/image";
import HomePageSectionMaker from "components/homepage-section-maker";
import { educationalHistory } from "app/@components/education/educational-history";
import { Flex, Text, Heading, Divider } from "@chakra-ui/react";

const Education = async () => {
  return (
    <HomePageSectionMaker label="Education">
      <Flex flexDirection="column" gap={6}>
        {educationalHistory.map((history) => (
          <Fragment key={history.title}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 2, md: 6 }}
            >
              <Flex>
                <Image
                  width={70}
                  height={70}
                  src={history.logo}
                  alt="Islamic Azad University's image"
                  style={{
                    border: "2px solid white",
                    borderRadius: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Flex>
              <Flex width="100%" flexDirection="column" gap={2}>
                <Heading
                  size="md"
                  fontWeight="black"
                  display="inline-flex"
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                  gap={2}
                >
                  {history.title}
                  <Text fontWeight="bold" fontSize={12} color="#56585D">
                    {history.years}
                  </Text>
                </Heading>
                <Flex flexDirection="column">
                  <Text fontSize={14} textAlign="justify" color="#56585D">
                    {history.college}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            {history.divider && <Divider borderWidth={2} />}
          </Fragment>
        ))}
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Education;
