import ImagesGrid from "app/@components/images-grid";
import FavQuote from "app/@components/fav-quote";
import Summary from "app/@components/summary";
import About from "app/@components/about";
import Bio from "app/@components/bio";
import Interests from "app/@components/interests";
import Links from "app/@components/links";
import Education from "app/@components/education";
import { Flex } from "@chakra-ui/react";

const HomePage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <ImagesGrid />
      <FavQuote />
      <Summary />
      <About />
      <Bio />
      <Interests />
      <Links />
      <Education />
    </Flex>
  );
};

export default HomePage;
