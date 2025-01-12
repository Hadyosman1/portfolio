import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { Download } from "lucide-react";

type DownloadCvButtonProps = ButtonProps;

const DownloadCvButton = ({ className, ...props }: DownloadCvButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 group transform rounded-md border-2 px-4 py-2 text-xs font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md sm:px-6 sm:py-3 sm:text-base dark:border-white [&_svg]:size-5",
        className,
      )}
      {...props}
    >
      Download CV
      <Download />
    </Button>
  );
};

export default DownloadCvButton;
