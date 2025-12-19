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
import { assets as mockAssets } from "@/lib/mock";
import type { Asset } from "@/lib/types";

const typeIconMap = {
  Models: Triangle,
  Materials: Circle,
  Blueprints: Square,
  Packs: Diamond,
};

export default function AssetManagementPage() {
  const renderTypeIcon = (category: Asset["category"]) => {
    const Icon = typeIconMap[category] ?? Square;
    return <Icon className="h-5 w-5 text-neutral-600" strokeWidth={2} />;
  };

  return (
    <SidebarProvider>
      <div className="h-screen w-screen bg-[#1A1A1A] text-neutral-200 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar className="border-r border-neutral-800 bg-neutral-50">
          <SidebarHeader className="p-4 pb-2">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-light text-neutral-400">void</span>
              <span className="text-2xl font-semibold text-neutral-300">
                Crate
              </span>
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
              {mockAssets.map((asset: Asset) => (
                <div
                  key={asset.id}
                  className="border border-neutral-800 hover:border-[#800000] transition-colors bg-neutral-900 relative"
                >
                  <div className="aspect-square w-full overflow-hidden bg-black">
                    {asset.thumbnail && (
                      <img
                        src={asset.thumbnail}
                        alt={asset.name}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="px-2 py-2">
                    <div className="text-sm leading-tight truncate">
                      {asset.name}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {asset.size} GB
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    {renderTypeIcon(asset.category)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Details Panel */}
        <aside className="border-l border-neutral-800 p-4 flex flex-col gap-4 w-90">
          {mockAssets[0] && (
            <>
              <div className="flex items-center justify-between">
                <Button variant="ghost">← Minimize</Button>
                <Button variant="secondary">Edit</Button>
              </div>

              <div className="aspect-square overflow-hidden rounded-md">
                <img
                  src={mockAssets[0].thumbnail}
                  alt={mockAssets[0].name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div>
                <div className="font-semibold">{mockAssets[0].name}</div>
                <div className="text-xs text-neutral-500">
                  {mockAssets[0].size} GB
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {mockAssets[0].tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
                <Button className="w-full">Import</Button>
              </div>
            </>
          )}
        </aside>
      </div>
    </SidebarProvider>
  );
}
