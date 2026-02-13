import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ChevronLeft } from "lucide-react";
import AppHeader from "@/components/mangement-page-app-header";
import type { AssetType } from "@/lib/types";
import { AssetTypeSection } from "./asset-type-section";
import { CategorySection } from "./category-section";

type ManagementSidebarProps = {
  activeType: AssetType;
  onSelectType: (type: AssetType) => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onReturnToProjects: () => void;
};

export function ManagementSidebar({
  activeType,
  onSelectType,
  selectedCategory,
  onSelectCategory,
  onReturnToProjects,
}: ManagementSidebarProps) {
  return (
    <Sidebar className="border-r border-neutral-800 bg-neutral-50">
      <SidebarHeader className="p-4 pb-2 ">
        <AppHeader />
      </SidebarHeader>

      <SidebarContent className="px-4">
        <AssetTypeSection activeType={activeType} onSelectType={onSelectType} />
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button
          variant="ghost"
          className="justify-center h-12 bg-neutral-800 text-neutral-400 hover:bg-neutral-700 rounded-lg gap-2"
          onClick={onReturnToProjects}
        >
          <ChevronLeft />
          Return to Projects
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
