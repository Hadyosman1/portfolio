import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSpyScroll = (containerSelector: string = 'body') => {
  const [pathWithHash, setPathWithHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const windowHash = window.location.hash;
    setPathWithHash(`${pathname}${windowHash}`);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setPathWithHash(`${pathname}#${entry.target.id}`);
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
