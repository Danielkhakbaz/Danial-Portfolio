import type { Metadata } from "next";
import PageTransition from "lib/utils/page-transition";
import ProjectCards from "app/projects/project-cards";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Projects",
  description: "here's where all my projects are.",
};

const ProjectsPage = async () => {
  return (
    <PageTransition>
      <ProjectCards />
    </PageTransition>
  );
};

export default ProjectsPage;
