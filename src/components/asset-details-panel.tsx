import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Asset } from "@/lib/types";

interface AssetDetailsPanelProps {
  asset: Asset | null;
  onClose: () => void;
}

export function AssetDetailsPanel({ asset, onClose }: AssetDetailsPanelProps) {
  if (!asset) {
    return (
      <div className="text-neutral-500 text-center mt-10">
        Select an asset to view details
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 gap-4 h-full">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onClose}>
          ← Close
        </Button>
        <Button variant="secondary">Edit</Button>
      </div>

      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={asset.thumbnail ?? "/placeholders/asset.png"}
          alt={asset.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div>
        <div className="font-semibold">{asset.name}</div>
        <div className="text-xs text-neutral-500">
          {asset.size} GB · {asset.category}
        </div>
        {asset.description && (
          <div className="text-xs text-neutral-400 mt-1">
            {asset.description}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {asset.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-auto">
        <Button className="w-full">Import</Button>
      </div>
    </div>
  );
}
