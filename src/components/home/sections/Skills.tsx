"use client";

import useSkills from "@/hooks/skills";

const Skills = () => {
  const { handlePointerEnter, handlePointerLeave, skillsRows } = useSkills();

  return (
    <section
      id="skills"
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 overflow-x-hidden"
    >
      <h2 className="pb-6 text-center text-3xl font-extrabold md:text-4xl">
        Skills
      </h2>

      <div className="skills-container-overlay skills-container-bg flex grow flex-col justify-center gap-2 max-sm:pl-5 sm:gap-4">
        {skillsRows.map((row, idx) => (
          <div
            style={{ transform: `translateX(${idx * 1.1}vw)` }}
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
