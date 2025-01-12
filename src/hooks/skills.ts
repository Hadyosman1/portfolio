import { useEffect, useState } from "react";
import skills from "@/data/skills";

function skillsMergedWithEmptyBlocks(isMobile: boolean = false) {
  const ROW_ELEMENTS_COUNT = 14;
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
}

const useSkills = () => {
  const [skillsRows, setSkillsRows] = useState(skillsMergedWithEmptyBlocks);

  useEffect(() => {
    const handleResizeWindow = () => {
      setSkillsRows(skillsMergedWithEmptyBlocks(window.innerWidth <= 700));
    };
    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  function handlePointerEnter(e: React.PointerEvent, color: string) {
    const ele = e.currentTarget as HTMLElement;
    ele.style.transition = "all 0.2s";
    ele.style.filter = `drop-shadow(0 0 1rem ${color})`;
  }

  function handlePointerLeave(e: React.PointerEvent) {
    const ele = e.currentTarget as HTMLElement;
    ele.style.transition = "all 2.5s ease-out";
    ele.style.filter = `drop-shadow(0 0 0 transparent)`;
  }

  return {
    skillsRows,
    handlePointerEnter,
    handlePointerLeave,
  };
};

export default useSkills;
