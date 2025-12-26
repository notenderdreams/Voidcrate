import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  Search,
  Plus,
  Settings,
  Triangle,
  Circle,
  Square,
  Diamond,
} from "lucide-react";

import { assets } from "@/lib/mock";
import type {
  Asset,
  AssetType,
  AssetTypeSectionProps,
  CategorySectionProps,
} from "@/lib/types";
import Logo from "@/components/logo";
import { getVersion } from "@/lib/version";
import { AssetCard } from "@/components/asset-card";
import { AssetDetailsPanel } from "@/components/asset-details-panel";

function AppHeader() {
  return (
    <div className="flex text-xs items-baseline justify-start gap-1">
      <Logo />
      <span className="text-neutral-500">v{getVersion()}</span>
    </div>
  );
}

function AssetTypeSection({ activeType, onSelectType }: AssetTypeSectionProps) {
  const typeIconMap = {
    Models: Triangle,
    Materials: Circle,
    Blueprints: Square,
    Packs: Diamond,
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-neutral-400 text-base font-normal mb-2 px-0">
        Assets
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {/* Main "All" item */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onSelectType("All")}
              className={`
                h-8 rounded-lg gap-3 px-3
                ${activeType === "All" ? "bg-neutral-800 text-neutral-200" : "text-neutral-500 hover:bg-neutral-800/50"}
              `}
            >
              All
            </SidebarMenuButton>

            {/* Sub-items */}
            <SidebarMenu className="ml-4 mt-1 gap-1">
              {Object.keys(typeIconMap).map((label) => {
                const Icon = typeIconMap[label as keyof typeof typeIconMap];
                return (
                  <SidebarMenuItem key={label}>
                    <SidebarMenuButton
                      onClick={() =>
                        onSelectType(
                          activeType === label ? "All" : (label as AssetType),
                        )
                      }
                      className={`
                        h-8 rounded-lg gap-3 px-3
                        ${activeType === label ? "bg-neutral-800 text-neutral-200" : "text-neutral-500 hover:bg-neutral-800/50"}
                      `}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {label}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  const categories = [
    ["Favorites", "bg-red-800"],
    ["Nature", "bg-green-600"],
    ["Landscape", "bg-orange-600"],
    ["Urban", "bg-blue-600"],
  ] as const;

  return (
    <SidebarGroup className="mt-6">
      <SidebarGroupLabel className="text-neutral-400 text-base font-normal mb-2 px-0">
        Category
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {categories.map(([label, color]) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton
                onClick={() =>
                  onSelectCategory(selectedCategory === label ? null : label)
                }
                className={`
                  h-8 text-neutral-500 hover:bg-neutral-800/50 rounded-lg justify-start gap-3 px-3
                  ${selectedCategory === label ? "bg-neutral-800 text-neutral-200" : ""}
                `}
              >
                <div className={`h-3 w-3 rounded ${color}`} />
                {label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default function AssetManagementPage() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [activeType, setActiveType] = useState<AssetType>("All");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssets = assets.filter((a) => {
    const typeMatch = activeType === "All" || a.category === activeType;
    const categoryMatch = !activeCategory || a.tags?.includes(activeCategory);
    const searchMatch =
      !searchQuery ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return typeMatch && categoryMatch && searchMatch;
  });

  return (
    <SidebarProvider>
      <div className="h-screen w-screen bg-[#1A1A1A] text-neutral-200 flex overflow-hidden">
        {/* Left Sidebar ─────────────── */}
        <Sidebar className="border-r border-neutral-800 bg-neutral-50">
          <SidebarHeader className="p-4 pb-2 ">
            <AppHeader />
          </SidebarHeader>

          <SidebarContent className="px-4">
            {/* ------------------------------------ */}
            <AssetTypeSection
              activeType={activeType}
              onSelectType={setActiveType}
            />
            {/* ------------------------------------ */}
            <CategorySection
              selectedCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            {/* ------------------------------------ */}
          </SidebarContent>

          <SidebarFooter className="p-4">
            <Button
              variant="ghost"
              className="w-full justify-start h-12 bg-neutral-800 text-neutral-400 hover:bg-neutral-700 rounded-lg gap-3"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </SidebarFooter>
        </Sidebar>
        {/* ─────────────── Left Sidebar  */}

        {/* Center Grid ──────────────── */}
        <main className="flex flex-col overflow-hidden flex-1">
          <header className="shrink-0 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9  w-96 bg-neutral-800 border-neutral-800 text-neutral-400 placeholder:text-neutral-500 h-8 rounded-lg"
              />
            </div>
            <Button className="border-2 hover:border-[#800000]">
              <Plus className="h-4 w-4" />
              Add Asset
            </Button>
          </header>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredAssets.map((asset) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  selected={selectedAsset?.id === asset.id}
                  onClick={setSelectedAsset}
                />
              ))}
            </div>
          </div>

          {/* Status Bar ──────────────── */}
          <div className="px-6  bg-neutral-800 border-neutral-800 border-t-2  sticky bottom-0 ">
            <span className="text-xs text-neutral-400 font-medium">
              Project Untitled
            </span>
          </div>
          {/* ──────────────── Status Bar */}
        </main>
        {/* ──────────────── Center Grid   */}

        {/* Right Details Panel ───────── */}
        <aside className="border-l border-neutral-800 p-4 w-90 flex flex-col">
          <AssetDetailsPanel
            asset={selectedAsset}
            onClose={() => setSelectedAsset(null)}
          />
        </aside>
        {/* ───────── Right Details Panel  */}
      </div>
    </SidebarProvider>
  );
}
