import type { Metadata } from "next";
import PageTransition from "lib/utils/page-transition";
import MotionOpacity from "lib/utils/motion-opacity";
import ProjectCard from "app/projects/project-card";
import { projects } from "lib/constants";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Projects",
  description: "here's where all my projects are.",
};

const ProjectsPage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <MotionOpacity delay={0.25}>
          <Heading>Projects</Heading>
        </MotionOpacity>
        <Grid
          minHeight={{ base: "1800px", md: "900px" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 6 }}
        >
          {projects.map((project) => (
            <GridItem
              as={MotionOpacity}
              key={project.link}
              delay={project.delay}
            >
              <ProjectCard
                link={project.link}
                imageSrc={project.images[0].src}
                alt={project.images[0].alt}
                title={project.title}
                description={project.description}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </PageTransition>
  );
};

export default ProjectsPage;
