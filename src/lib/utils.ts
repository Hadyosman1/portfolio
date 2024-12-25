import { skills } from '@/data/data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function skillsMergedWithEmptyBlocks(isMobile: boolean = false) {
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

export function toggleFullScreen(target: HTMLElement) {
  const doc = document as Document & {
    webkitFullscreenElement?: Element;
    msFullscreenElement?: Element;
    webkitExitFullscreen?: () => void;
    msExitFullscreen?: () => void;
  };

  const isFullscreen =
    !!doc.fullscreenElement ||
    !!doc.webkitFullscreenElement ||
    !!doc.msFullscreenElement;

  if (isFullscreen) {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
  } else {
    if (target.requestFullscreen) {
      target.requestFullscreen();
    } else if (
      (target as HTMLElement & { webkitRequestFullscreen?: () => void })
        .webkitRequestFullscreen
    ) {
      (
        target as HTMLElement & { webkitRequestFullscreen: () => void }
      ).webkitRequestFullscreen();
    } else if (
      (target as HTMLElement & { msRequestFullscreen?: () => void })
        .msRequestFullscreen
    ) {
      (
        target as HTMLElement & { msRequestFullscreen: () => void }
      ).msRequestFullscreen();
    }
  }
}
