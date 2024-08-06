"use client";

import { useState, useEffect } from "react";
import { quotes } from "lib/constants";
import { Flex, Text } from "@chakra-ui/react";

const FavQuote = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4));
  }, []);

  return (
    <Flex
      width="100%"
      fontWeight="bold"
      backgroundColor="blackAlpha.900"
      color="white"
      display="inline-flex"
      justifyContent="space-between"
      textAlign="center"
      borderRadius={20}
      padding={5}
    >
      <Flex width="100%" justifyContent="center">
        <Text display="inline-flex" alignItems="center" gap={2}>
          {quotes[randomNumber].text}
          <Text as="span" fontSize={10} color="#969696">
            - {quotes[randomNumber].author}
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default FavQuote;
