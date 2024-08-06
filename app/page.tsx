import PageTransition from "lib/utils/page-transition";
import MotionOpacity from "lib/utils/motion-opacity";
import ImagesGrid from "app/@components/images-grid";
import FavQuote from "app/@components/fav-quote";
import Summary from "app/@components/summary";
import About from "app/@components/about";
import Bio from "app/@components/bio";
import MainTechs from "app/@components/main-techs";
import Interests from "app/@components/interests";
import Links from "app/@components/links";
import Education from "app/@components/education";
import { Flex } from "@chakra-ui/react";

const HomePage = async () => {
  return (
    <PageTransition>
      <Flex flexDirection="column" gap={6}>
        <ImagesGrid />
        <MotionOpacity delay={1.25}>
          <FavQuote />
        </MotionOpacity>
        <MotionOpacity delay={1.5}>
          <Summary />
        </MotionOpacity>
        <MotionOpacity delay={1.75}>
          <About />
        </MotionOpacity>
        <MotionOpacity delay={2}>
          <Bio />
        </MotionOpacity>
        <MotionOpacity delay={2.25}>
          <MainTechs />
        </MotionOpacity>
        <MotionOpacity delay={2.5}>
          <Interests />
        </MotionOpacity>
        <MotionOpacity delay={2.75}>
          <Links />
        </MotionOpacity>
        <MotionOpacity delay={3}>
          <Education />
        </MotionOpacity>
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
