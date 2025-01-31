"use client";

import SectionHeading from "@/components/SectionHeading";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  return (
    <section id="about" className="container">
      <SectionHeading title="About Me" />

      <div className="mt-2 flex flex-wrap-reverse items-center">
        <div className="aspect-square max-w-96 basis-full max-lg:mx-auto lg:me-auto lg:basis-1/2">
          <DotLottieReact
            src="/lottie-files/coding.lottie"
            loop
            autoplay
            className="size-full object-cover"
          />
        </div>
        <div className="basis-full lg:basis-1/2">
          <article className="prose mx-auto py-8 dark:prose-invert">
            <h2>
              👋 Hi! {"I'm"} <span>Hady Osman</span>
            </h2>

            <p className="intro-text">
              A front-end developer obsessed with crafting pixel-perfect,
              user-centric web experiences. I turn complex problems into{" "}
              <strong>intuitive interfaces</strong> using modern tools like{" "}
              <strong>React</strong> and <strong>Next.js</strong>.
            </p>

            <h3>🚀 What drives me?</h3>
            <p>
              Thriving on {'"aha!"'} moments — whether fixing stubborn bugs or
              seeing users navigate apps effortlessly. Currently leveling up my{" "}
              <strong>TypeScript</strong> skills and experimenting with
              interactive animations.
            </p>

            <h3>🛠️ Beyond the code:</h3>
            <ul>
              <li>Binge-watching tech talks for inspiration</li>
              <li>UI/UX enthusiast geeking over minimalist designs</li>
              <li>☕ Built a Todo app during coffee brewing time</li>
            </ul>

            <h3>🌟 My mission:</h3>
            <p>
              Create apps so seamless that users forget {"they're"} interacting
              with code — while developers whisper,{" "}
              <q>Wait, how did he even do that? 🤯</q>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
