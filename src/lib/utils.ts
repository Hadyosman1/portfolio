import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Config } from "tailwindcss";

// Access config through the Tailwind plugin system
export const twConfig = {} as Config;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
