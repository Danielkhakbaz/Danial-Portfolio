"use client";

import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [
    displayAndCursorOfScrollToTopButton,
    setDisplayAndCursorOfScrollToTopButton,
  ] = useState(["none", "none"]);

  useEffect(() => {
    window.addEventListener("scroll", handleOpacityOfTheScrollToTopButton);
  });

  const handleOpacityOfTheScrollToTopButton = () => {
    const { scrollY, innerHeight } = window;

    if (scrollY > innerHeight / 8) {
      setDisplayAndCursorOfScrollToTopButton(["flex", "pointer"]);
    } else {
      setDisplayAndCursorOfScrollToTopButton(["none", "initial"]);
    }
  };

  const handleScrollToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      aria-label="Scroll-to-top button"
      icon={<FaArrowAltCircleUp fontSize={30} />}
      color="white"
      colorScheme="gray"
      onClick={handleScrollToTopButton}
      display={displayAndCursorOfScrollToTopButton[0]}
      position="fixed"
      bottom={{ md: "25px", lg: "75px" }}
      right={{ md: "25px", lg: "40px" }}
      textAlign="center"
      transition="0.3s"
      cursor={displayAndCursorOfScrollToTopButton[1]}
      padding={{ md: "0.5rem 0.5rem", lg: "1.5rem 1.5rem" }}
      zIndex={999}
    />
  );
};

export default ScrollToTop;
