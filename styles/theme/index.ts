import { LatoFont } from "styles/font";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: mode("#F0E7DB", "#202023"),
      },
    },
  },
  fonts: {
    heading: LatoFont.style.fontFamily,
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});
