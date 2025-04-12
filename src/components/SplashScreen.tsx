"use client";

import { PcIcon } from "@/assets";
import { useEffect, useRef, useState } from "react";

function SplashScreen() {
  const [show, setShow] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 grid place-content-center bg-background"
    >
      <div className="animate-pulse">
        <PcIcon className="mx-auto size-20 md:size-28" />
      </div>
      <h2
        className={`mt-6 text-center font-["Comic_Sans_MS","Comic_Sans",cursive] text-2xl font-bold italic [word-spacing:-5px] md:text-3xl`}
      >
        Hady Osman
      </h2>
    </div>
  );
}

export default SplashScreen;
