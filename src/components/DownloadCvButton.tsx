import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { Download } from "lucide-react";

type DownloadCvButtonProps = ButtonProps;

// TODO: Add download CV functionality and the CV file
const DownloadCvButton = ({ className, ...props }: DownloadCvButtonProps) => {
  return (
    <Button
      className={cn(
        "group transform rounded-md border-2 bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:bg-secondary/80 hover:shadow-md dark:border-white sm:px-6 sm:py-3 sm:text-base [&_svg]:size-5",
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
