import { useEffect, useState } from 'react';
import { useTranslation } from '@/app/i18n/client';
import { skillsMergedWithEmptyBlocks } from '@/lib/utils';

const useSkills = (lng: string) => {
  const { t } = useTranslation(lng, 'translation');
  const [skillsRows, setSkillsRows] = useState(skillsMergedWithEmptyBlocks);

  useEffect(() => {
    const handleResizeWindow = () => {
      setSkillsRows(skillsMergedWithEmptyBlocks(window.innerWidth <= 700));
    };
    handleResizeWindow();

    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  function handlePointerEnter(e: React.PointerEvent, color: string) {
    const ele = e.currentTarget as HTMLElement;
    ele.style.transition = 'all 0.2s';
    ele.style.filter = `drop-shadow(0 0 1rem ${color})`;
  }

  function handlePointerLeave(e: React.PointerEvent) {
    const ele = e.currentTarget as HTMLElement;
    ele.style.transition = 'all 2.5s ease-out';
    ele.style.filter = `drop-shadow(0 0 0 transparent)`;
  }

  return {
    t,
    skillsRows,
    handlePointerEnter,
    handlePointerLeave
  };
};

export default useSkills;
