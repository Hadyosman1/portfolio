"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";

import myImage from "@/../public/me.png";
import glow_circle from "@/../public/shapes/glow_circle.svg";

import {
  BootstrapIcon,
  CssIcon,
  GitIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  ShadcnIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VscodeIcon,
} from "@/assets";

const containerVariants: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const iconVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
    x: "9.5rem",
    y: "13rem",
  },
  animate: {
    opacity: 1,
    scale: [0.3, 1.1, 1],
    transition: { duration: 0.3 },
  },
};

const iconPositions = [
  { x: "-3.5rem", y: "18rem", Icon: CssIcon, color: "#1572B6" },
  { x: "-4rem", y: "14rem", Icon: HtmlIcon, color: "#F16C34" },
  { x: "-4rem", y: "9.8rem", Icon: JavaScriptIcon, color: "#f3dc1f" },
  { x: "-3rem", y: "5.8rem", Icon: TypeScriptIcon, color: "#4c9ed7" },
  { x: "-1.4rem", y: "1.8rem", Icon: NextJsIcon, color: "#9aaaca" },
  { x: "1.3rem", y: "-1rem", Icon: ReactIcon, color: "#7ccfff" },
  { x: "4.7rem", y: "-2.6rem", Icon: ReduxIcon, color: "#8a63d2" },
  { x: "8.5rem", y: "-3.7rem", Icon: TailwindCssIcon, color: "#4fd1c5" },
  { x: "12.5rem", y: "-3.2rem", Icon: BootstrapIcon, color: "#7952b3" },
  { x: "16.4rem", y: "-2rem", Icon: GitIcon, color: "#f05033" },
  { x: "19.5rem", y: "1rem", Icon: GithubIcon, color: "#76887899" },
  { x: "21rem", y: "4.5rem", Icon: VscodeIcon, color: "#4c9ed7" },
  { x: "22rem", y: "8rem", Icon: ShadcnIcon, color: "#9aaaca" },
];

const MyPicture = () => {
  return (
    <div className="my-picture-wrapper relative max-w-[360px] shrink scale-[0.75] selection:bg-transparent max-xs:scale-[0.70] lg:my-28 lg:scale-90">
      <Image
        priority
        unoptimized
        className="h-auto w-full brightness-90"
        width={360}
        height={0}
        src={myImage}
        alt="Hady Osman"
      />

      <Image
        fill
        priority
        sizes="(min-width: 0px) 360px"
        className="absolute inset-0 z-[-1] h-full w-full translate-y-8 scale-105 opacity-50"
        src={glow_circle}
        alt="shape"
      />

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 aspect-square rounded-full bg-opacity-30 max-sm:scale-95 [@media(max-width:375px)]:-left-3 [@media(max-width:375px)]:-top-4"
      >
        {iconPositions.map(({ x, y, Icon, color }, index) => (
          <motion.div
            key={index}
            className="absolute z-10"
            variants={{
              ...iconVariants,
              animate: { ...iconVariants.animate, x, y },
            }}
          >
            <Icon
              className={`icon-drop-shadow size-11`}
              style={{ ["--drop-shadow-color" as string]: color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyPicture;
