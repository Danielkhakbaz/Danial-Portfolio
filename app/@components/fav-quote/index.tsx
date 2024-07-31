"use client";

import { useState, useEffect } from "react";
import { quotes } from "app/@components/fav-quote/quotes";
import { Center, Flex, Text } from "@chakra-ui/react";

const FavQuote = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 4));
  }, []);

  return (
    <Center
      fontWeight="bold"
      backgroundColor="blackAlpha.900"
      color="white"
      display="inline-flex"
      justifyContent="space-between"
      borderRadius={10}
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
    </Center>
  );
};

export default FavQuote;
