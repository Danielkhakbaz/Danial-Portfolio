import NextLink from "next/link";
import Logo from "layout/navbar/logo";
import { WebMenu, MobileMenu } from "layout/navbar/menu";
import { Container, Flex, Link } from "@chakra-ui/react";

const Navbar = async () => {
  return (
    <Container
      maxWidth="container.md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <Flex width="25%" justifyContent="flex-start" alignItems="center">
        <Link
          as={NextLink}
          href="/"
          aria-label="Danial Khakbaz's logo"
          width="fit-content"
          transition=".4s"
          borderRadius={4}
          paddingX={2}
          paddingY={0.5}
          _hover={{ transform: "scale(1.1)" }}
        >
          <Logo />
        </Link>
      </Flex>
      <Flex
        width="50%"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        gap={6}
      >
        <WebMenu />
      </Flex>
      <Flex width="25%" justifyContent="flex-end" gap={2}>
        <Flex display={{ base: "flex", md: "none" }}>
          <MobileMenu />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
