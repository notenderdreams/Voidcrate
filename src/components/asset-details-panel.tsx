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
      <div className="flex flex-1 items-center justify-center text-neutral-500">
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

      <div className="aspect-square overflow-hidden rounded-md border-3 border-neutral-600">
        <img
          src={asset.thumbnail ?? "/placeholders/asset.png"}
          alt={asset.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="font-semibold">{asset.name}</div>
          <div className="text-xs text-neutral-500">
            {asset.category} · {asset.size} GB
          </div>
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

      {/*!TODO: Proper status and button handling */}
      <div className="mt-auto">
        <div className="flex flex-col gap-2 ">
          <div className="text-xs">
            <span>Status: </span>
            <span className="text-neutral-400">Not Imported</span>
          </div>
          <Button
            className="w-full bg-neutral-100 text-neutral-800 hover:text-neutral-300"
            variant="secondary"
          >
            Import
          </Button>
        </div>
      </div>
    </div>
  );
}
