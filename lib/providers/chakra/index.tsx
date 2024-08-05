"use client";

import {
  ChakraProvider as Provider,
  ChakraProviderProps,
} from "@chakra-ui/react";
import { theme } from "styles/theme";

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <Provider theme={theme}>{children}</Provider>;
};
