"use client";

import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTopRef = useRef<HTMLButtonElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socialsContactsContainer = document.getElementById(
      "socials-contacts-container",
    ) as HTMLUListElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          socialsContactsContainer.classList.toggle(
            "socials-contacts-vertical",
            entry.isIntersecting,
          );
          scrollToTopRef.current?.classList.toggle(
            "right-4!",
            entry.isIntersecting,
          );
        });
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(footerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={footerRef} className="overflow-hidden pt-10">
      <footer className="relative border-t-2 py-6">
        <Button
          ref={scrollToTopRef}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="icon"
          className="absolute -right-14 top-0 -translate-y-1/2 rounded-full border shadow-sm transition-all duration-500"
        >
          <ArrowUp size={26} />
          <span className="sr-only">Scroll to top</span>
        </Button>
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted-foreground">
            © All rights reserved {new Date().getFullYear()} Hady Osman | Built with ❤️ using
            Next.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
