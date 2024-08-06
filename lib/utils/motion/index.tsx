"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

type MotionProps = {
  tag: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

const MotionComponent = ({
  tag,
  className,
  children,
  ...motionProps
}: MotionProps) => {
  const Tag = m[tag as keyof typeof m];

  return (
    <LazyMotion features={domAnimation}>
      <Tag className={className} {...motionProps}>
        {children}
      </Tag>
    </LazyMotion>
  );
};

export default MotionComponent;
