'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const useHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = useCallback(() => setIsNavOpen(prev => !prev), []);
  const headerRef = useRef<null | HTMLElement>(null);

  const handleHeaderShadow = useCallback(() => {
    headerRef.current?.classList.toggle(
      'header_shadow',
      isNavOpen || window.scrollY > 60
    );
  }, [isNavOpen]);

  useEffect(() => {
    handleHeaderShadow();
    window.addEventListener('scroll', handleHeaderShadow);
    return () => window.removeEventListener('scroll', handleHeaderShadow);
  }, [handleHeaderShadow]);

  return {
    isNavOpen,
    toggleNav,
    headerRef
  };
};

export default useHeader;
