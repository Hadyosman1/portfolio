import { Logo } from "@/assets/icons/Logo";
import Link from "next/link";
import { ThemeToggle } from "../Theme";
import { Button } from "../ui/button";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="shadow-border bg-background/60 sticky top-0 z-10 h-[64px] shadow backdrop-blur-sm">
      <nav className="container flex items-center justify-between gap-3 py-3">
        <Link href="/">
          <Logo className="size-10" />
          <span className="sr-only">Home page</span>
        </Link>

        <div className="flex items-center gap-1.5">
          {links.map(({ href, label }) => (
            <Button
              size="sm"
              variant="ghost"
              className="text-[14px]"
              key={label}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
