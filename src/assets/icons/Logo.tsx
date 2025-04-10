"use client";
import { motion, Variants } from "framer-motion";
import type { SVGProps } from "react";

const pathVariants: Variants = {
  initial: {
    pathLength: 0.3,
    strokeOpacity: 0.3,
    strokeDasharray: 0.2,
  },
  animate: {
    pathLength: 1,
    strokeOpacity: 1,
    strokeDasharray: 1,
    transition: {
      duration: 1.1,
      ease: "easeInOut",
    },
  },
};

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <motion.g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="currentColor"
      >
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
          d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987"
        ></motion.path>
        <motion.path
          variants={pathVariants}
          transition={{ delay: 1 }}
          initial="initial"
          animate="animate"
          d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5"
        ></motion.path>
      </motion.g>
    </svg>
  );
}
