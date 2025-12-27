import { atom } from "jotai";
import type { Project } from "@/lib/types";

export const selectedProjectAtom = atom<Project | null>(null);
