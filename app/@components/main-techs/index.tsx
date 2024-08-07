import HomePageSectionMaker from "components/ui/homepage-section-maker";
import Icon from "app/@components/main-techs/icon";
import { mainTechs } from "lib/constants";
import { Grid, GridItem } from "@chakra-ui/react";

const MainTechs = async () => {
  return (
    <HomePageSectionMaker label="Main Techs">
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={8}
      >
        {mainTechs.map((tech) => (
          <GridItem
            key={tech}
            width="100%"
            height="100%"
            backgroundColor="#3A3A3B"
            display="flex"
            justifyContent="center"
            padding={2}
            transitionProperty="all"
            transitionDuration=".2s"
            _hover={{
              opacity: 0.75,
            }}
            style={{
              background:
                tech === "nextjs"
                  ? "linear-gradient(90deg, #242424 0%, #2F2F2F 100%)"
                  : tech === "nestjs"
                    ? "linear-gradient(90deg, #2F2F2F 0%, #2F2F2F 100%)"
                    : tech === "typescript"
                      ? "linear-gradient(90deg, #2F2F2F 0%, #2F2F2F 100%)"
                      : (tech === "tailwind" &&
                          "linear-gradient(90deg, #2F2F2F 0%, #242424 100%)") ||
                        "",
              border: "2px solid #3D3D3D",
              borderTopLeftRadius: tech === "nextjs" ? 20 : 0,
              borderBottomLeftRadius: tech === "nextjs" ? 20 : 0,
              borderTopRightRadius: tech === "tailwind" ? 20 : 0,
              borderBottomRightRadius: tech === "tailwind" ? 20 : 0,
            }}
          >
            <Icon tech={tech} />
          </GridItem>
        ))}
      </Grid>
    </HomePageSectionMaker>
  );
};

export default MainTechs;
