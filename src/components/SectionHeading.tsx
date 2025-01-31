import { cn } from "@/lib/utils";
import { JSX } from "react";

interface SectionHeadingProps {
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  title: string;
}

const SectionHeading = ({
  className,
  el: El = "div",
  title,
}: SectionHeadingProps) => {
  return (
    <El
      className={cn(
        "pb-3 text-center text-3xl font-extrabold md:pb-6 md:text-4xl",
        className,
      )}
    >
      <span className="text-4xl text-active-link md:text-5xl">{title[0]}</span>
      {title.slice(1)}
    </El>
  );
};

export default SectionHeading;
