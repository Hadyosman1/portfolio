import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";
import { ThemeToggle } from "../Theme";
import NavLinks from "./NavLinks";
import HireMeButton from "../HireMeButton";
import MobileMenu from "./MobileMenu";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-[64px] bg-background/60 shadow shadow-border backdrop-blur-sm">
      <nav className="container flex items-center justify-between gap-3 py-3">
        <Suspense>
          <MobileMenu className="inline-flex md:hidden" />
        </Suspense>

        <Link href="/">
          <Logo className="size-10" />
          <span className="sr-only">Home page</span>
        </Link>

        <NavLinks className="hidden md:flex" />

        <div className="flex items-center gap-1">
          <HireMeButton size="sm" className="hidden gap-1 md:inline-flex" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
