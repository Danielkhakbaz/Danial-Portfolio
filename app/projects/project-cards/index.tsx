"use client";

import { useState } from "react";
import PageTransition from "lib/utils/page-transition";
import MotionOpacity from "lib/utils/motion-opacity";
import ProjectCard from "app/projects/project-cards/project-card";
import ProjectModal from "app/projects/project-cards/project-modal";
import { projects } from "lib/constants";
import { ProjectsType } from "lib/types";
import { motion } from "framer-motion";
import { Flex, Heading, Grid } from "@chakra-ui/react";

const ProjectCards = () => {
  const [selectedID, setSelectedID] = useState<string | null>();
  const [project, setProject] = useState<ProjectsType>();

  return (
    <PageTransition>
      <Flex
        flexDirection="column"
        filter="auto"
        blur={selectedID ? "5px" : ""}
        transitionProperty="all"
        transitionDuration=".2s"
        gap={6}
      >
        <MotionOpacity delay={0.25}>
          <Heading>Projects</Heading>
        </MotionOpacity>
        <Grid
          minHeight={{ base: "1800px", md: "900px" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 6 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              layoutId={project.title}
              onClick={() => {
                setSelectedID(project.title);

                setProject(project);
              }}
            >
              <MotionOpacity delay={project.delay}>
                <ProjectCard
                  imageSrc={project.images[0].src}
                  alt={project.images[0].alt}
                  title={project.title}
                  description={project.description}
                />
              </MotionOpacity>
            </motion.div>
          ))}
        </Grid>
      </Flex>
      {selectedID && (
        <ProjectModal
          project={project!}
          selectedID={selectedID}
          setSelectedID={() => setSelectedID(null)}
        />
      )}
    </PageTransition>
  );
};

export default ProjectCards;
