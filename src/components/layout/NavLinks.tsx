"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useActiveHref from "@/hooks/activeHref";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

interface NavLinksProps {
  className?: string;
  closeMenu?: () => void;
}

const NavLinks = ({ className, closeMenu }: NavLinksProps) => {
  const { activeHref, setActiveHref } = useActiveHref();

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {links.map(({ href, label }) => (
        <Button
          key={label}
          asChild
          size="sm"
          variant="ghost"
          className={cn(
            "text-[14px] font-medium transition-[box-shadow_300ms,color_300ms]",
            activeHref === href &&
              "text-active-link ring-[1px] ring-active-link hover:text-active-link",
          )}
        >
          <Link
            onClick={() => {
              setActiveHref(href);
              closeMenu?.();
            }}
            href={href}
          >
            {label}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default NavLinks;
