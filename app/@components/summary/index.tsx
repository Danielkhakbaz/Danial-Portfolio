import Image from "next/image";
import DanialKhakbazProfile from "public/images/danial-khakbaz.webp";
import { Flex, Heading, Text, Center } from "@chakra-ui/react";

const Summary = async () => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      alignItems={{ base: "normal", md: "flex-start" }}
      gap={{ base: 4, sm: 0 }}
    >
      <Flex flex="82%" flexDirection="column" gap={2}>
        <Heading size="2xl">Danial Khakbaz</Heading>
        <Text>- Front-end Developer(Next.js, Typescript)</Text>
      </Flex>
      <Center display="flex" alignItems="flex-start">
        <Image
          width={90}
          height={90}
          src={DanialKhakbazProfile}
          alt="Danial Khakbaz's image"
          rel="preload"
          priority
          fetchPriority="high"
          style={{
            border: "2px solid white",
            borderRadius: "100%",
          }}
        />
      </Center>
    </Flex>
  );
};

export default Summary;
