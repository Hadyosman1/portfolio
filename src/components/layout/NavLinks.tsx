"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useActiveHref from "@/hooks/activeHref";
import { MotionButton } from "../ui/button";
import { motion, Variants } from "framer-motion";

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

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const NavLinks = ({ className, closeMenu }: NavLinksProps) => {
  const { activeHref, setActiveHref } = useActiveHref();

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={cn("flex items-center gap-1.5", className)}
    >
      {links.map(({ href, label }) => (
        <MotionButton
          motionProps={{
            variants: itemVariants,
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
          }}
          key={label}
          asChild
          size="sm"
          variant="ghost"
          className={cn(
            "nav-link text-[14px] font-semibold hover:bg-accent/50",
            activeHref === href &&
              "active text-active-link ring-[1px] ring-active-link hover:text-active-link",
          )}
        >
          <Link
            onClick={() => {
              setActiveHref(href);
              closeMenu?.();
            }}
            href={href}
          >
            <span className="nav-link-effect">{label}</span>
          </Link>
        </MotionButton>
      ))}
    </motion.div>
  );
};

export default NavLinks;
