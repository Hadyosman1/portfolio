"use client";

import SectionHeading from "@/components/SectionHeading";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  return (
    <section id="about" className="container">
      <SectionHeading>About Me</SectionHeading>
      <div className="mt-6 flex flex-wrap-reverse items-center">
        <div className="aspect-square max-w-96 basis-full max-lg:mx-auto lg:me-auto lg:basis-1/2">
          <DotLottieReact
            src="/lottie-files/coding.lottie"
            loop
            autoplay
            className="size-full object-cover"
          />
        </div>
        <div className="basis-full lg:basis-1/2">
          <article className="prose dark:prose-invert py-8">
            <p>Hello World</p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione excepturi possimus odit mollitia modi repellat
                voluptatum officia voluptate. Unde labore in necessitatibus quae
                neque non sunt, animi deleniti modi expedita.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione excepturi possimus odit mollitia modi repellat
                voluptatum officia voluptate. Unde labore in necessitatibus quae
                neque non sunt, animi deleniti modi expedita.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione excepturi possimus odit mollitia modi repellat
                voluptatum officia voluptate. Unde labore in necessitatibus quae
                neque non sunt, animi deleniti modi expedita.
              </li>
            </ul>
            <h2>
              <blockquote>If it works don&apos;t touch it</blockquote>
            </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
