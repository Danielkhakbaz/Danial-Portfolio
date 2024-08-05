import PageTransition from "lib/utils/page-transition";
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
        <FavQuote />
        <Summary />
        <About />
        <Bio />
        <MainTechs />
        <Interests />
        <Links />
        <Education />
      </Flex>
    </PageTransition>
  );
};

export default HomePage;
