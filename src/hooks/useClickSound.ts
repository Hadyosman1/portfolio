import { useEffect } from 'react';

const useClickSound = () => {
  useEffect(() => {
    const audio = new Audio();
    audio.src = '/audio/click_sound.mp3';
    audio.volume = 0.1;
    const handlePlayClickSound = (e: Event) => {
      const targetElement = e.target as HTMLElement | null;
      if (targetElement?.dataset?.clickSound) {
        if (!audio.paused) audio.pause();
        audio.currentTime = 0;
        audio.play();
      }
    };

    document.body.addEventListener('click', handlePlayClickSound);
    return () => {
      document.body.removeEventListener('click', handlePlayClickSound);
    };
  }, []);
};

export default useClickSound;
