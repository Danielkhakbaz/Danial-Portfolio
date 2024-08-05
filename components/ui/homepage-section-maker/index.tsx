import { ReactNode } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

type HomePageSectionMakerProps = {
  label: string;
  children: ReactNode;
};

const HomePageSectionMaker = async ({
  label,
  children,
}: HomePageSectionMakerProps) => {
  return (
    <Flex flexDirection="column" gap={2}>
      <Text
        width="fit-content"
        fontWeight="bolder"
        fontSize="lg"
        borderBottom="4px solid gray"
      >
        {label}
      </Text>
      <Box marginY={2}>{children}</Box>
    </Flex>
  );
};

export default HomePageSectionMaker;
