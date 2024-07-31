import Link from "next/link";
import dynamic from "next/dynamic";
import HomePageSectionMaker from "components/homepage-section-maker";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";

const DownloadCV = dynamic(() => import("app/@components/about/download-cv"));

const About = async () => {
  return (
    <HomePageSectionMaker label="About">
      <Flex flexDirection="column" gap={4}>
        <Text textAlign="justify" textIndent="1em">
          Danial is a Front-end developer, highly ambitious individual with a
          passion for continuous learning and a keen interest in embracing new
          challenges. His expertise lies in crafting seamless web applications
          using technologies such as{" "}
          <Text as="b" textDecoration="underline">
            Next.js
          </Text>
          ,{" "}
          <Text as="b" textDecoration="underline">
            React.js
          </Text>
          ,{" "}
          <Text as="b" textDecoration="underline">
            JavaScript
          </Text>{" "}
          and{" "}
          <Text as="b" textDecoration="underline">
            TypeScript
          </Text>
          .
          <br />
          In addition to his professional endeavors, Danial is committed to
          maintaining a balanced lifestyle.
        </Text>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="center"
          gap={2}
        >
          <Link href="/projects">
            <Button colorScheme="yellow" display="flex" gap={2}>
              <Text>My Portfolio</Text>
              <FaAngleRight />
            </Button>
          </Link>
          <DownloadCV />
        </Flex>
      </Flex>
    </HomePageSectionMaker>
  );
};

export default About;
