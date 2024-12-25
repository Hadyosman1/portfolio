'use client';

import SectionHeading from '@/components/ui/section-heading';
import useSkills from '@/hooks/useSkills';

const Skills = ({ lng }: { lng: string }) => {
  const { t, skillsRows, handlePointerEnter, handlePointerLeave } =
    useSkills(lng);

  return (
    <section
      id='skills-section'
      className='home_section mx-auto flex w-full max-w-[1440px] flex-col gap-4 overflow-x-hidden'
    >
      <SectionHeading>{t('skills')}</SectionHeading>

      <div
        dir='rtl'
        className='skills_container_overlay skills_container_bg flex grow flex-col justify-center gap-2 max-sm:pl-5 sm:gap-4'
      >
        {skillsRows.map((row, idx) => (
          <div
            style={{ transform: `translateX(-${idx * 1.5}vw)` }}
            className={'flex justify-center gap-2 sm:gap-4'}
            key={`row-${idx}`}
          >
            {row.map((skill, idx) => {
              if (!skill) {
                return <div className='skill_box empty' key={`empty-${idx}`} />;
              }

              const { name, icon: Icon, color } = skill;

              return (
                <div
                  key={name}
                  className={'skill_box'}
                  onPointerEnter={e => handlePointerEnter(e, color)}
                  onPointerLeave={handlePointerLeave}
                >
                  <Icon
                    className='h-9 w-9 sm:h-12 sm:w-12'
                    style={{ filter: `drop-shadow(0 0 0.6rem ${color})` }}
                  />
                  <div style={{ color }} className='skill_name'>
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
