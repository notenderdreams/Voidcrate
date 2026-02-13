import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";

import { assets as initialAssets } from "@/lib/mock";
import { AssetDetailsPanel } from "@/components/asset-details-panel";
import { AddAssetDialog } from "@/components/add-asset-dialog";
import { useAtom } from "jotai";
import { selectedProjectAtom } from "@/lib/store";
import { useNavigate } from "react-router-dom";
import type { Asset, AssetType } from "@/lib/types";
import { ManagementSidebar } from "@/components/management-sidebar";
import { AssetGrid } from "@/components/asset-grid";

export default function AssetManagementPage() {
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [activeType, setActiveType] = useState<AssetType>("All");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [project, setSelectedProject] = useAtom(selectedProjectAtom);
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

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
        {/* Left Sidebar */}
        <ManagementSidebar
          activeType={activeType}
          onSelectType={setActiveType}
          selectedCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onReturnToProjects={() => {
            setSelectedProject(null);
            navigate("/projects");
          }}
        />

        {/* Center Grid */}
        <main className="flex flex-col overflow-hidden flex-1">
          <header className="shrink-0 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-96 bg-neutral-800 border-neutral-800 text-neutral-400 placeholder:text-neutral-500 h-8 rounded-lg"
              />
            </div>
            <AddAssetDialog
              onAddAsset={(asset) => setAssets((prev) => [asset, ...prev])}
              trigger={
                <Button className="border-2 hover:border-[#800000] active:bg-neutral-400">
                  <Plus className="h-4 w-4" />
                  Add Asset
                </Button>
              }
            />
          </header>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <AssetGrid
              assets={filteredAssets}
              selectedAsset={selectedAsset}
              onSelectAsset={setSelectedAsset}
            />
          </div>

          <div className="px-6 bg-neutral-800 border-neutral-800 border-t-2 sticky bottom-0">
            <span className="text-xs text-neutral-400 font-medium">
              {project?.name ?? "No project selected"}
            </span>
          </div>
        </main>

        {/* Right Details Panel */}
        <aside className="border-l border-neutral-800 p-4 w-90 flex flex-col">
          <AssetDetailsPanel
            asset={selectedAsset}
            onClose={() => setSelectedAsset(null)}
          />
        </aside>
      </div>
    </SidebarProvider>
  );
}
