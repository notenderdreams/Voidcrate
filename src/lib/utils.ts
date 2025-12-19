import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMostRecentProjects(
  projects: Project[],
  limit = 4,
): Project[] {
  return [...projects]
    .sort(
      (a, b) =>
        new Date(b.lastOpened).getTime() -
        new Date(a.lastOpened).getTime(),
    )
    .slice(0, limit);
}
