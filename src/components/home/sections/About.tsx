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
            src="/lottie-files/about-me.lottie"
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

            <p>
              {`I’m a front-end developer who enjoys building clean, fast, and
              modern web apps. I care about great design, smooth user
              experience, and writing code that actually makes sense.`}
            </p>

            <h3>{`🚀 What I’m into`}</h3>
            <p>
              {`I love turning ideas into real, interactive websites. Whether I’m
              fixing a bug or designing a new UI, I’m always looking for ways to
              make things better. Right now, I'm focused on growing my `}
              <strong>TypeScript</strong> skills and learning how to bring
              interfaces to life with animation.
            </p>

            <h3>{`🛠️ When I’m not coding`}</h3>
            <ul>
              <li>Learning by watching dev talks and reading docs</li>
              <li>Obsessed with minimalist and clean UI/UX</li>
              <li>
                Often exploring new tools just to see what I can build in an
                hour
              </li>
            </ul>

            <h3>🌟 My goal</h3>
            <p>
              {`To build apps that feel simple for users and smart for developers
              — the kind of apps that just work and leave people saying “That’s
              cool.”`}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
