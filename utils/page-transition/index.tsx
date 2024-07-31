"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@chakra-ui/react";

const MotionComponent = dynamic(() => import("utils/motion"), {
  ssr: false,
});

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  if (isLargerThan768) {
    return (
      <MotionComponent
        tag="div"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ width: "100%", display: "inline-block" }}
      >
        {children}
      </MotionComponent>
    );
  } else {
    return children;
  }
};

export default PageTransition;
