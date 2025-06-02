"use client";

import DownloadCvButton from "@/components/DownloadCvButton";
import HireMeButton from "@/components/HireMeButton";
import MyPicture from "@/components/MyPicture";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className="relative z-2 container flex h-full flex-col items-center gap-5 pt-8 max-lg:gap-20 lg:flex-row">
        <p className="absolute top-1 left-4 z-[-1] w-[calc(100%-2rem)] text-center font-sans text-3xl font-black -tracking-wide uppercase select-none [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_hsl(var(--muted-foreground)/0.5)] sm:text-4xl md:left-8 md:text-6xl lg:top-8 lg:text-start lg:text-8xl">
          Web Developer
        </p>
        <div id="intro-content" className="grow overflow-clip max-lg:pt-10">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="text-foreground text-center text-xl font-extrabold lg:text-start lg:text-3xl"
          >
            {"Hello👋, I'm Hady Osman"}
            <br />a Frontend Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="text-muted-foreground mt-6 max-w-[480px] text-center text-base font-medium text-balance lg:text-start lg:text-lg"
          >
            I specialize in creating user-friendly digital experiences that work
            seamlessly across devices. I turn ideas into polished, interactive
            websites, focusing on both aesthetics and functionality to deliver
            value and meet the unique goals of each project.
          </motion.p>
          <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
            <HireMeButton className="px-4 py-2 hover:scale-105 hover:shadow-lg sm:px-6 sm:py-3 sm:text-base [&_svg]:size-5" />
            <DownloadCvButton />
          </div>
        </div>
        <MyPicture />
      </div>
    </section>
  );
};

export default Intro;
