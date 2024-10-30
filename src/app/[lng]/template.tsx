'use client';

import { ReactNode, useEffect } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const audio = new Audio();
    audio.src = '/audio/click_sound.mp3';
    const handlePlayClickSound = (e: Event) => {
      const targetElement = e.target as HTMLElement | null;
      if (targetElement?.dataset?.clickSound) audio?.play();
    };

    document.body.addEventListener('click', handlePlayClickSound);
    return () => {
      document.body.removeEventListener('click', handlePlayClickSound);
    };
  }, []);

  return <>{children}</>;
};

export default RootTemplate;
