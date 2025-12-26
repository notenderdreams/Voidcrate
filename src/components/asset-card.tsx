import type { Asset } from "@/lib/types";
import { Triangle, Circle, Square, Diamond } from "lucide-react";

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
    <div
      onClick={() => onClick?.(asset)}
      className={`
        cursor-pointer
        border
        ${selected ? "border-gray-400 border-2" : "border-transparent"}
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
            <Icon className="h-3 w-3" /> {asset.category}
          </span>
        </div>
      </div>
    </div>
  );
}
