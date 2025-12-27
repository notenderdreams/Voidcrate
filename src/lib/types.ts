export interface Project {
  id: string;
  name: string;
  path: string;
  engineVersion: string;
  lastOpened: string;
  thumbnail?: string;
}

export type AssetCategory = "Models" | "Materials" | "Blueprints" | "Packs";

export type AssetType = "All" | "Models" | "Materials" | "Blueprints" | "Packs"; // For Sidebar

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

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface AssetTypeSectionProps {
  activeType: AssetType;
  onSelectType: (type: AssetType) => void;
}

export interface CategorySectionProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}
