import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import type { CategorySectionProps } from "@/lib/types";

export function CategorySection({
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
