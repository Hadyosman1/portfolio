"use client";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { ArrowRight } from "lucide-react";

type HireMeButtonProps = ButtonProps & {
  closeMenu?: () => void;
};

const HireMeButton = ({
  className,
  closeMenu,
  ...props
}: HireMeButtonProps) => {
  return (
    <Button
      asChild
      onClick={() => closeMenu?.()}
      {...props}
      className={cn(
        "group transform rounded-md border-2 text-xs font-bold transition-all duration-300 ease-in-out hover:shadow-md dark:border-white",
        className,
      )}
    >
      <a href="mailto:hady.osman.dev@gmail.com">
        Hire Me <ArrowRight className="transition group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default HireMeButton;
