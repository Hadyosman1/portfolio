"use client";

import { Logo } from "@/assets";
import Link from "next/link";
import { ThemeToggle } from "../Theme";
import NavLinks from "./NavLinks";
import HireMeButton from "../HireMeButton";
import MobileMenu from "./MobileMenu";
import { Suspense, useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHeaderShadow = () => {
      headerRef.current?.classList.toggle("shadow", window.scrollY > 120);
      headerRef.current?.classList.toggle(
        "shadow-border/30",
        window.scrollY > 120,
      );
    };

    window.addEventListener("scrollend", handleHeaderShadow);

    return () => {
      window.removeEventListener("scrollend", handleHeaderShadow);
    };
  }, []);

  return (
    <header ref={headerRef} className="blur-dots-bg sticky top-0 z-20 h-[64px]">
      <nav className="container flex items-center justify-between gap-3 py-3">
        <Suspense>
          <MobileMenu className="inline-flex md:hidden" />
        </Suspense>

        <div className="flex justify-start md:basis-1/6">
          <Link href="/#intro-section">
            <Logo className="size-10" />
            <span className="sr-only">Home page</span>
          </Link>
        </div>

        <NavLinks className="hidden md:flex" />

        <div className="flex items-center gap-2 md:basis-1/6 md:justify-end">
          <HireMeButton size="sm" className="hidden gap-1 md:inline-flex" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
