"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFoundPage = () => {
  return (
    <div className="container flex min-h-[70svh] items-center justify-center py-16">
      <div className="flex w-full flex-col items-center gap-4">
        <DotLottieReact
          src={"/lottie-files/not-found.lottie"}
          loop
          autoplay
          className="w-full max-w-3xl"
        />

        <p className="text-center text-base font-semibold text-muted-foreground md:text-2xl">
          Sorry, The page you are looking for not found.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
