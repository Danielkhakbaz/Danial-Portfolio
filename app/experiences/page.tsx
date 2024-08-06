import type { Metadata } from "next";
import PageTransition from "lib/utils/page-transition";
import MotionOpacity from "lib/utils/motion-opacity";
import Skills from "app/experiences/skills";
import Experiences from "app/experiences/experiences";
import { Flex, Heading, Divider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Experiences",
  description:
    "Here's the part that I show the stuff I learnt and the places I'd worked throughout these years.",
};

const ExperiencesPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={8}>
        <MotionOpacity delay={0.25}>
          <Heading>Skills & Experinces</Heading>
        </MotionOpacity>
        <Flex flexDirection="column" gap={8}>
          <MotionOpacity delay={0.5}>
            <Skills />
          </MotionOpacity>
          <MotionOpacity delay={0.5}>
            <Divider borderWidth={2} borderColor="#393939" />
          </MotionOpacity>
          <Experiences />
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default ExperiencesPage;
