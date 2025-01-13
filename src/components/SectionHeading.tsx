import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";

interface SectionHeadingProps {
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const SectionHeading = ({
  className,
  el: El = "div",
  children,
}: SectionHeadingProps) => {
  return (
    <El
      className={cn(
        "pb-3 text-center text-3xl font-extrabold md:pb-6 md:text-4xl",
        className,
      )}
    >
      {children}
    </El>
  );
};

export default SectionHeading;
