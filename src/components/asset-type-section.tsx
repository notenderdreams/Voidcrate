import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Triangle, Circle, Square, Diamond } from "lucide-react";
import type { AssetType, AssetTypeSectionProps } from "@/lib/types";

export function AssetTypeSection({
  activeType,
  onSelectType,
}: AssetTypeSectionProps) {
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
