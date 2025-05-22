"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LucideMenu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";
import HireMeButton from "../HireMeButton";
import { usePathname, useSearchParams } from "next/navigation";

interface MobileMenuProps {
  className?: string;
}

const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname, searchParams]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= parseInt(twConfig?.theme?.screens?.md||"")) {
  //       setIsSheetOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <Button
        onClick={() => setIsSheetOpen(true)}
        variant="ghost"
        size="icon"
        className={cn("[&_svg]:size-5", className)}
      >
        <LucideMenu />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <div className="py-10">
            <NavLinks className="mb-4 flex-col" closeMenu={() => setIsSheetOpen(false)} />
            <HireMeButton
              className="mx-auto flex w-fit"
              closeMenu={() => setIsSheetOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
