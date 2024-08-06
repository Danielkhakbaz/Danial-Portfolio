import MotionOpacity from "lib/utils/motion-opacity";
import ExperienceCard from "app/experiences/experiences/experinces-card";
import { workExperiences } from "lib/constants";
import { Flex } from "@chakra-ui/react";

const Experiences = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      {workExperiences.map((experience) => (
        <MotionOpacity key={experience.company_name} delay={experience.delay}>
          <ExperienceCard
            key={experience.company_name}
            experience={experience}
          />
        </MotionOpacity>
      ))}
    </Flex>
  );
};

export default Experiences;
