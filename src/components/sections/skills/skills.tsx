'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

const animationVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0 },
  transition: {
    staggerChildren: 0.5,
    duration: 1,
    staggerDirection: -1
  }
};

import { skills } from '@/data/data';
import { useTranslation } from '@/app/i18n/client';
const ROW_ELEMENTS_COUNT = 14;

const skillsMergedWithEmptyBlocks = (isMobile: boolean = false) => {
  const copyOfSkills = [...skills];
  const rows = [];
  let rowSkillsNumber = isMobile ? 4 : 6;

  while (copyOfSkills.length > 0) {
    const row = Array(ROW_ELEMENTS_COUNT).fill(null);
    const rowSkills = copyOfSkills.splice(0, rowSkillsNumber);
    const positionToInsert = Math.floor((row.length - rowSkills.length) / 2);
    row.splice(positionToInsert, rowSkills.length, ...rowSkills);
    rows.push(row);

    if (rowSkillsNumber % 2 === 0) rowSkillsNumber--;
    else rowSkillsNumber++;
  }

  const emptyRow = Array(ROW_ELEMENTS_COUNT).fill(null);
  rows.unshift(emptyRow);
  rows.push(emptyRow);

  return rows;
};

const Skills = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation');
  const [skillsRows, setSkillsRows] = useState(skillsMergedWithEmptyBlocks());

  const controls = useAnimationControls();
  const skillsContainerRef = useRef(null);
  const isInView = useInView(skillsContainerRef, { amount: 0.3 });

  useEffect(() => {
    if (isInView) controls.start('visible');
    else controls.start('hidden');
  }, [isInView, controls]);

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

  return (
    <section
      id='skills-section'
      className='home_section mx-auto flex w-full max-w-[1440px] flex-col gap-4 overflow-x-hidden'
    >
      <h2  className='section_heading mx-auto'>
        {'<'}
        <span className='component_name'>{t('skills')}</span>
        {' />'}
      </h2>

      <motion.div
        dir='rtl'
        ref={skillsContainerRef}
        variants={animationVariants}
        className='skills_container_overlay skills_container_bg flex grow flex-col justify-center gap-2 max-sm:pl-5 sm:gap-4'
      >
        {skillsRows.map((row, idx) => (
          <motion.div
            style={{ transform: `translateX(-${idx * 1.5}vw)` }}
            className={'flex justify-center gap-2 sm:gap-4'}
            key={`row-${idx}`}
          >
            {row.map((skill, idx) => {
              if (!skill) {
                return (
                  <motion.div
                    className='skill_box empty'
                    key={`empty-${idx}`}
                  />
                );
              }

              const { name, icon: Icon, color } = skill;

              return (
                <motion.div
                  key={name}
                  className={'skill_box'}
                  onPointerEnter={e => handlePointerEnter(e, color)}
                  onPointerLeave={handlePointerLeave}
                  initial='hidden'
                  animate={controls}
                  exit='hidden'
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Icon
                    className='h-9 w-9 sm:h-12 sm:w-12'
                    style={{ filter: `drop-shadow(0 0 0.6rem ${color})` }}
                  />
                  <div style={{ color }} className='skill_name'>
                    {name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
