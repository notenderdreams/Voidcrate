import type { Asset } from "@/lib/types";
import {
  Triangle,
  Circle,
  Square,
  Diamond,
  Import,
  Package,
  Trash2,
  XCircle,
  Pencil,
  Heart,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";

interface AssetCardProps {
  asset: Asset;
  selected?: boolean;
  onClick?: (asset: Asset) => void;
}

const typeIconMap = {
  Models: Triangle,
  Materials: Circle,
  Blueprints: Square,
  Packs: Diamond,
};

export function AssetCard({
  asset,
  selected = false,
  onClick,
}: AssetCardProps) {
  const Icon = typeIconMap[asset.category] ?? Square;
  const thumbnailSrc = asset.thumbnail ?? "/placeholders/asset.png";

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          onClick={() => onClick?.(asset)}
          className={`
            cursor-pointer
            border-2
            ${selected ? "border-gray-400" : "border-transparent"}
            hover:border-[#800000]
            transition-colors
            bg-black
            rounded-md
          `}
        >
          {/* Thumbnail */}
          <div className="aspect-square w-full overflow-hidden bg-black rounded-t-md">
            <img
              src={thumbnailSrc}
              alt={asset.name}
              className="h-full w-full object-cover object-top"
              draggable={false}
            />
          </div>

          {/* Meta */}
          <div className="mt-2 px-2 py-1">
            <div className="text-sm font-medium text-neutral-200 truncate">
              {asset.name}
            </div>

            <div className="text-xs text-neutral-500 truncate flex justify-between items-center">
              <span>{asset.size} GB</span>
              <span className="flex items-center gap-1">
                <Icon className="h-3 w-3" />
                {asset.category}
              </span>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>

      {/* Right-click Context Menu */}
      <ContextMenuContent className="w-48 bg-neutral-800">
        <ContextMenuItem>
          <Import className="mr-2 h-4 w-4" />
          Import
        </ContextMenuItem>

        <ContextMenuItem>
          <Package className="mr-2 h-4 w-4" />
          Pack
        </ContextMenuItem>

        <ContextMenuItem>
          <XCircle className="mr-2 h-4 w-4" />
          Remove
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </ContextMenuItem>

        <ContextMenuItem>
          <Heart className="mr-2 h-4 w-4" />
          Mark as favourite
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem className="text-red-500 focus:text-red-500">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
