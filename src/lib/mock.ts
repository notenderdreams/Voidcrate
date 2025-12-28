import type { Asset, Project } from "./types";

export const recentProjects: Project[] = [
  {
    id: "1",
    name: "prototype-voidcrate-ui",
    path: "/users/placeholder/documents/dev-projects/prototype-voidcrate-ui",
    engineVersion: "UE 5.3",
    lastOpened: "2025-12-14T18:20:00Z",
    thumbnail: "https://picsum.photos/600/300?random=11",
  },
  {
    id: "2",
    name: "forest-survival",
    path: "/users/placeholder/documents/dev-projects/forest-survival",
    engineVersion: "UE 5.2",
    lastOpened: "2025-12-13T21:45:00Z",
    thumbnail: "https://picsum.photos/600/300?random=12",
  },
  {
    id: "3",
    name: "city-builder-sim",
    path: "/users/placeholder/documents/dev-projects/city-builder-sim",
    engineVersion: "UE 5.1",
    lastOpened: "2025-12-11T16:05:00Z",
    thumbnail: "https://picsum.photos/600/300?random=13",
  },
  {
    id: "4",
    name: "shader-playground",
    path: "/users/placeholder/documents/dev-projects/shader-playground",
    engineVersion: "UE 5.3",
    lastOpened: "2025-12-09T23:10:00Z",
    thumbnail: "https://picsum.photos/600/300?random=14",
  },
  {
    id: "5",
    name: "topdown-combat-proto",
    path: "/users/placeholder/documents/dev-projects/topdown-combat-proto",
    engineVersion: "UE 5.2",
    lastOpened: "2025-12-08T14:50:00Z",
    thumbnail: "https://picsum.photos/600/300?random=15",
  },
  {
    id: "6",
    name: "cinematic-sequence-tests",
    path: "/users/placeholder/documents/dev-projects/cinematic-sequence-tests",
    engineVersion: "UE 5.3",
    lastOpened: "2025-12-07T20:30:00Z",
    thumbnail: "https://picsum.photos/600/300?random=16",
  },
  {
    id: "7",
    name: "voxel-terrain-lab",
    path: "/users/placeholder/documents/dev-projects/voxel-terrain-lab",
    engineVersion: "UE 5.1",
    lastOpened: "2025-12-06T12:15:00Z",
    thumbnail: "https://picsum.photos/600/300?random=17",
  },
  {
    id: "8",
    name: "networked-lobby-test",
    path: "/users/placeholder/documents/dev-projects/networked-lobby-test",
    engineVersion: "UE 5.3",
    lastOpened: "2025-12-05T22:05:00Z",
    thumbnail: "https://picsum.photos/600/300?random=18",
  },
];

const random = (min: number, max: number) =>
  +(Math.random() * (max - min) + min).toFixed(1);

const categories: Asset["category"][] = [
  "Models",
  "Materials",
  "Blueprints",
  "Packs",
];

const sampleTags = [
  "Nature",
  "Urban",
  "SciFi",
  "PBR",
  "Environment",
  "Prop",
  "Gameplay",
  "Utility",
  "Forest",
  "Cabin",
];

export const assets: Asset[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `asset-${i + 1}`,
  name: `Random Asset ${i + 1}`,
  path: `/assets/random-asset-${i + 1}`,
  category: categories[i % categories.length],
  tags: [
    sampleTags[i % sampleTags.length],
    sampleTags[(i + 3) % sampleTags.length],
  ],
  size: random(0.1, 20), // size in GB
  createdAt: `2024-0${(i % 9) + 1}-0${(i % 28) + 1}`,
  lastModified: `2024-1${i % 2}-1${i % 9}`,
  thumbnail: `https://picsum.photos/400/400?random=${i + 1}`,
  description: `Description for Random Asset ${i + 1}`,
}));
