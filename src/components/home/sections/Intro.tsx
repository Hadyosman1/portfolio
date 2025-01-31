import Image from "next/image";
import DownloadCvButton from "@/components/DownloadCvButton";
import HireMeButton from "@/components/HireMeButton";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className="container flex h-full flex-col items-center gap-5 max-lg:gap-20 lg:flex-row">
        <div id="intro-content" className="grow max-lg:pt-10">
          <h1 className="text-center text-xl font-extrabold text-foreground lg:text-start lg:text-3xl">
            {"Hello, I'm Hady Osman"}
            <br />a Frontend Developer.
          </h1>
          <p className="mt-6 max-w-[480px] text-balance text-center text-base font-medium text-muted-foreground lg:text-start lg:text-lg">
            I specialize in creating user-friendly digital experiences that work
            seamlessly across devices. I turn ideas into polished, interactive
            websites, focusing on both aesthetics and functionality to deliver
            value and meet the unique goals of each project.
          </p>
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

import myImage from "@/../public/me.png";
import glow_circle from "@/../public/shapes/glow_circle.svg";

// icons
import {
  CssIcon,
  HtmlIcon,
  NextJsIcon,
  JavaScriptIcon,
  ReactIcon,
  TypeScriptIcon,
  ReduxIcon,
  TailwindCssIcon,
  BootstrapIcon,
  GitIcon,
  GithubIcon,
} from "@/assets";

const MyPicture = () => {
  return (
    <div className="my-picture-wrapper relative max-w-[360px] shrink scale-[0.75] selection:bg-transparent max-xs:scale-[0.70] lg:my-28 xl:scale-90">
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
        className="absolute inset-0 z-[-1] h-full w-full translate-y-8 scale-105"
        src={glow_circle}
        alt="shape"
      />

      <CssIcon
        className="skill-intro-animation absolute -start-16 z-10 size-11 -translate-y-full"
        style={{ bottom: "80px", filter: `drop-shadow( 0px 0px 10px #1572B6)` }}
      />

      <HtmlIcon
        className="skill-intro-animation absolute -start-10 z-10 size-11 -translate-y-full"
        style={{
          bottom: "160px",
          animationDelay: "0.2s",
          filter: `drop-shadow( 0px 0px 10px #F16C34)`,
        }}
      />

      <JavaScriptIcon
        className="skill-intro-animation absolute -start-4 z-10 size-11 -translate-y-full"
        style={{
          bottom: "240px",
          animationDelay: "0.3s",
          filter: `drop-shadow( 0px 0px 10px #f3dc1f)`,
        }}
      />

      <TypeScriptIcon
        className="skill-intro-animation absolute start-6 z-10 size-10 -translate-y-full"
        style={{
          bottom: "320px",
          animationDelay: "0.4s",
          filter: `drop-shadow( 0px 0px 10px #4c9ed7)`,
        }}
      />

      <NextJsIcon
        className="skill-intro-animation absolute z-10 size-11 -translate-y-full"
        style={{
          insetInlineStart: "85px",
          animationDelay: "0.5s",
          bottom: "375px",
          filter: `drop-shadow( 0px 0px 10px #9aaaca)`,
        }}
      />

      <ReactIcon
        className="skill-intro-animation absolute z-10 size-11 -translate-y-full [@media(max-width:360px)]:hidden"
        style={{
          insetInlineStart: "158px",
          animationDelay: "0.6s",
          bottom: "395px",
          filter: `drop-shadow( 0px 0px 10px #7ccfff)`,
        }}
      />

      <ReduxIcon
        className="skill-intro-animation absolute z-10 size-10 -translate-y-full"
        style={{
          insetInlineEnd: "80px",
          animationDelay: "0.7s",
          bottom: "375px",
          filter: `drop-shadow( 0px 0px 10px #8a63d2)`,
        }}
      />

      <TailwindCssIcon
        className="skill-intro-animation absolute z-10 size-12 -translate-y-full"
        style={{
          insetInlineEnd: "20px",
          animationDelay: "0.8s",
          bottom: "300px",
          filter: `drop-shadow( 0px 0px 10px #4fd1c5)`,
        }}
      />

      <BootstrapIcon
        className="skill-intro-animation absolute z-10 size-11 -translate-y-full"
        style={{
          insetInlineEnd: "-15px",
          animationDelay: "0.9s",
          bottom: "235px",
          filter: `drop-shadow( 0px 0px 10px #7952b3)`,
        }}
      />

      <GitIcon
        className="skill-intro-animation absolute z-10 size-11 -translate-y-full"
        style={{
          insetInlineEnd: "-45px",
          animationDelay: "1s",
          bottom: "160px",
          filter: `drop-shadow( 0px 0px 10px #f05033)`,
        }}
      />

      <GithubIcon
        className="skill-intro-animation absolute z-10 size-11 -translate-y-full"
        style={{
          insetInlineEnd: "-70px",
          animationDelay: "1.1s",
          bottom: "80px",
          filter: `drop-shadow( 0px 0px 10px #76887899)`,
        }}
      />
    </div>
  );
};
