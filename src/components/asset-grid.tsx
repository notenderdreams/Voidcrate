import { AssetCard } from "@/components/asset-card";
import type { Asset } from "@/lib/types";

type AssetGridProps = {
  assets: Asset[];
  selectedAsset: Asset | null;
  onSelectAsset: (asset: Asset) => void;
};

export function AssetGrid({
  assets,
  selectedAsset,
  onSelectAsset,
}: AssetGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {assets.map((asset) => (
        <AssetCard
          key={asset.id}
          asset={asset}
          selected={selectedAsset?.id === asset.id}
          onClick={onSelectAsset}
        />
      ))}
    </div>
  );
}
