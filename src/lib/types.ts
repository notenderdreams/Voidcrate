export interface Project {
  id: string;
  name: string;
  path: string;
  engineVersion: string;
  lastOpened: string;
  createdAt: string;
  thumbnail?: string;
}

export type AssetCategory = "Models" | "Materials" | "Blueprints" | "Packs";

export interface Asset {
  id: string;
  name: string;
  path: string;
  category: AssetCategory;
  tags: string[];
  size: number;
  createdAt: string;
  lastModified: string;
  thumbnail?: string;
  description?: string;
}
