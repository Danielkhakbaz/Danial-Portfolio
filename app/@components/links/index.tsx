import NextLink from "next/link";
import HomePageSectionMaker from "components/ui/homepage-section-maker";
import { socials } from "lib/constants";
import { Flex, Link } from "@chakra-ui/react";

const Links = async () => {
  return (
    <HomePageSectionMaker label="Links">
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        gap={{ base: 12, md: 2 }}
      >
        {socials.map((social) => (
          <Link
            as={NextLink}
            key={social.link}
            href={social.link}
            aria-label={`Danial Khakbaz's ${social.name}`}
            isExternal
            _hover={{
              opacity: 0.85,
            }}
          >
            {social.logo}
          </Link>
        ))}
      </Flex>
    </HomePageSectionMaker>
  );
};

export default Links;
