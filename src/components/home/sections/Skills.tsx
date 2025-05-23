"use client";

import SectionHeading from "@/components/SectionHeading";
import useSkills from "@/hooks/skills";

const Skills = () => {
  const { handlePointerEnter, handlePointerLeave, skillsRows } = useSkills();

  return (
    <section
      id="skills"
      className="mx-auto mb-4 flex w-full max-w-[1440px] flex-col gap-4 overflow-x-hidden"
    >
      <SectionHeading title="Skills" />

      <div className="skills-container-overlay skills-container-bg flex grow flex-col justify-center gap-2 max-sm:pl-5 sm:gap-4">
        {skillsRows.map((row, idx) => (
          <div
            style={{ transform: `translateX(-${idx * 0.8}vw)` }}
            className="flex justify-center gap-2 sm:gap-4"
            key={`row-${idx}`}
          >
            {row.map((skill, idx) => {
              if (!skill) {
                return <div className="skill-box empty" key={`empty-${idx}`} />;
              }

              const { name, icon: Icon, color } = skill;

              return (
                <div
                  key={name}
                  className="skill-box"
                  onPointerEnter={(e) => handlePointerEnter(e, color)}
                  onPointerLeave={handlePointerLeave}
                >
                  <Icon
                    className="h-9 w-9 sm:h-12 sm:w-12"
                    style={{ filter: `drop-shadow(0 0 0.6rem ${color})` }}
                  />
                  <div style={{ color }} className="skill-name">
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
