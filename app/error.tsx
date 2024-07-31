"use client";

import Link from "next/link";
import PageTransition from "utils/page-transition";
import { Flex, Heading, Code, Text, Button } from "@chakra-ui/react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <PageTransition>
      <Flex height="80vh" justifyContent="center" alignItems="center">
        <Flex flexDirection="column" alignItems="center" gap={12}>
          <Heading size="2xl">THERE IS A PROBLEM!</Heading>
          <Code colorScheme="red" width="full" textAlign="center">
            {error.message}
          </Code>
          <Text fontWeight="semibold" fontSize="xl">
            Please try again. If the problem persists, fell free to contact me!
          </Text>
          <Flex justifyContent="center" alignItems="center" gap={4}>
            <Button
              colorScheme="purple"
              display="flex"
              alignItems="center"
              gap={2}
              onClick={reset}
            >
              Try Again
              <FaArrowRotateLeft />
            </Button>
            <Link href="/">
              <Button colorScheme="yellow" gap={2}>
                Back to the Home <FaHome fontSize={18} />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </PageTransition>
  );
};

export default Error;
