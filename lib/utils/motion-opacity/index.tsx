"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@chakra-ui/react";

const MotionComponent = dynamic(() => import("lib/utils/motion"), {
  ssr: false,
});

type MotionOpacityProps = {
  delay: number;
  children: ReactNode;
};

const MotionOpacity = ({ delay, children }: MotionOpacityProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  if (isLargerThan768) {
    return (
      <MotionComponent
        tag="div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {children}
      </MotionComponent>
    );
  } else {
    return children;
  }
};

export default MotionOpacity;
