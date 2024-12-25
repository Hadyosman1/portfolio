'use client';
import { useEffect, useRef } from 'react';
import { ButtonWithRef } from './ui/button';
import { ArrowBigUp } from 'lucide-react';

const ScrollToTopBtn = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleShowBtn = () => {
    if (window.scrollY > 200) {
      btnRef.current?.classList.remove(
        'opacity-0',
        'translate-x-[1000px]',
        'pointer-events-none'
      );
    } else {
      btnRef.current?.classList.add(
        'opacity-0',
        'translate-x-[1000px]',
        'pointer-events-none'
      );
    }
  };

  useEffect(() => {
    handleShowBtn();
    window.addEventListener('scrollend', handleShowBtn);
    return () => {
      window.removeEventListener('scrollend', handleShowBtn);
    };
  }, []);

  return (
    <ButtonWithRef
      data-click-sound={true}
      ref={btnRef}
      size={'icon'}
      variant={'outline'}
      className='fixed bottom-4 right-4 z-20 shadow-md transition-all duration-500'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}
    >
      <span className='sr-only'>Scroll To Top Btn</span>
      <ArrowBigUp />
    </ButtonWithRef>
  );
};

export default ScrollToTopBtn;
