import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSpyScroll = (containerSelector: string = 'body') => {
  const [pathWithHash, setPathWithHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      entries => {
        clearTimeout(timeOut);

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timeOut = setTimeout(() => {
              setPathWithHash(`${pathname}#${entry.target.id}`);
            }, 300);
          }
        });
      },
      {
        rootMargin: '-68px 0px 0px 0px',
        threshold: 0.7
      }
    );

    const entries = document.querySelectorAll(`${containerSelector} > *`);
    entries.forEach(entry => observer.observe(entry));
  }, [pathname, containerSelector]);

  return { pathWithHash, setPathWithHash };
};

export default useSpyScroll;
