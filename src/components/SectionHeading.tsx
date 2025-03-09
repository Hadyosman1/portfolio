import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";

interface SectionHeadingProps {
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  title: string;
  children?: ReactNode | ReactNode[];
}

const SectionHeading = ({
  className,
  el: El = "h2",
  title,
  children,
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
      {children}
    </El>
  );
};

export default SectionHeading;
