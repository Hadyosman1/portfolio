import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useActiveHref = () => {
  const [activeHref, setActiveHref] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    setActiveHref(`${pathname}#${window.location.hash}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref((prev) => {
              const withoutHash = prev.slice(
                0,
                prev.indexOf("#") >= 0 ? prev.indexOf("#") : undefined,
              );

              return `${withoutHash}#${entry.target.id}`;
            });
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [pathname]);

  return { setActiveHref, activeHref };
};

export default useActiveHref;
