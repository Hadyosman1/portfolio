import DownloadCvButton from "@/components/DownloadCvButton";
import HireMeButton from "@/components/HireMeButton";
import MyPicture from "@/components/MyPicture";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className="container relative z-2 flex h-full flex-col items-center gap-5 pt-8 max-lg:gap-20 lg:flex-row">
        <p className="absolute left-4 top-1 z-[-1] w-[calc(100%-2rem)] select-none text-center font-sans text-3xl font-black uppercase -tracking-wide [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_hsl(var(--muted-foreground)/0.5)] sm:text-4xl md:left-8 md:text-6xl lg:top-8 lg:text-start lg:text-8xl">
          Web Developer
        </p>
        <div id="intro-content" className="grow max-lg:pt-10">
          <h1 className="text-center text-xl font-extrabold text-foreground lg:text-start lg:text-3xl">
            {"Hello👋, I'm Hady Osman"}
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
