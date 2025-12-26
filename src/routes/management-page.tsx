import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import type { Asset } from "@/lib/types";
import Logo from "@/components/logo";
import { getVersion } from "@/lib/version";
import { AssetCard } from "@/components/asset-card";

const typeIconMap = {
  Models: Triangle,
  Materials: Circle,
  Blueprints: Square,
  Packs: Diamond,
};

export default function AssetManagementPage() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  return (
    <SidebarProvider>
      <div className="h-screen w-screen bg-[#1A1A1A] text-neutral-200 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar className="border-r border-neutral-800 bg-neutral-50">
          <SidebarHeader className="p-4 pb-2">
            <div className="flex text-xs items-baseline justify-start mb-4">
              <Logo />
              <span className="text-neutral-500">v{getVersion()}</span>
            </div>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500"
                strokeWidth={2}
              />
              <Input
                placeholder="Search"
                className="pl-9 bg-neutral-800 border-neutral-800 text-neutral-400 placeholder:text-neutral-500 h-10 rounded-lg"
              />
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-neutral-400 text-base font-normal mb-2 px-0">
                All
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">
                  {Object.keys(typeIconMap).map((cat) => {
                    const Icon = typeIconMap[cat as keyof typeof typeIconMap];
                    return (
                      <SidebarMenuItem key={cat}>
                        <SidebarMenuButton className="h-10 text-neutral-400 hover:bg-neutral-700 rounded-lg justify-start gap-3 px-3">
                          <Icon className="h-4 w-4" />
                          {cat}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-neutral-400 text-base font-normal mb-2 px-0">
                Category
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    ["Favorites", "bg-red-800"],
                    ["Nature", "bg-green-600"],
                    ["Landscape", "bg-orange-600"],
                    ["Urban", "bg-blue-600"],
                  ].map(([label, color]) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton className="h-9 text-neutral-600 hover:bg-neutral-800/50 rounded-lg justify-start gap-3 px-3">
                        <div className={`h-3 w-3 ${color}`} />
                        {label}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
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

        {/* Center Grid */}
        <main className="flex flex-col overflow-hidden flex-1">
          <header className="shrink-0 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg">Assets</h2>
            <Button className="hover:bg-neutral-200 hover:border-[#800000] border-2">
              <Plus className="h-4 w-4" />
              Add Asset
            </Button>
          </header>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {assets.map((asset) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  onClick={setSelectedAsset} // update selected asset
                />
              ))}
            </div>
          </div>
        </main>

        {/* Right Details Panel */}
        <aside className="border-l border-neutral-800 p-4 flex flex-col gap-4 w-90">
          {selectedAsset ? (
            <>
              <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => setSelectedAsset(null)}>
                  ← Close
                </Button>
                <Button variant="secondary">Edit</Button>
              </div>

              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={selectedAsset.thumbnail ?? "/placeholders/asset.png"}
                  alt={selectedAsset.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div>
                <div className="font-semibold">{selectedAsset.name}</div>
                <div className="text-xs text-neutral-500">
                  {selectedAsset.size} GB · {selectedAsset.category}
                </div>
                {selectedAsset.description && (
                  <div className="text-xs text-neutral-400 mt-1">
                    {selectedAsset.description}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedAsset.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
                <Button className="w-full">Import</Button>
              </div>
            </>
          ) : (
            <div className="text-neutral-500 text-center mt-10">
              Select an asset to view details
            </div>
          )}
        </aside>
      </div>
    </SidebarProvider>
  );
}
