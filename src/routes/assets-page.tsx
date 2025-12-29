import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { assets } from "@/lib/mock";
import type { Asset } from "@/lib/types";
import { useNavigate } from "react-router-dom";

export default function AssetsPage() {
  const navigate = useNavigate();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const totalAssets = assets.length;
  const totalSize = assets.reduce((sum, a) => sum + a.size, 0);

  return (
    <div className="w-full h-screen border bg-neutral-800">
      <div className="flex gap-6 h-full">
        {/* LEFT SIDEBAR */}
        <div className="w-48 shrink-0 text-sm text-neutral-300 p-4">
          <Button
            variant="secondary"
            className="hover:bg-neutral-900 w-full justify-start gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Button>

          <div className="mt-4 space-y-4">
            <div>
              <div className="text-xs text-neutral-500">Assets</div>
              <div className="text-lg font-semibold">{totalAssets}</div>
            </div>

            <div>
              <div className="text-xs text-neutral-500">Total Size</div>
              <div className="text-lg font-semibold">
                {totalSize.toFixed(2)} GB
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="flex-1 flex">
          <div className="flex-1">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-neutral-900">
                <TableRow className="border-neutral-700">
                  <TableHead />
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Category
                  </TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead className="hidden lg:table-cell">Tags</TableHead>
                  <TableHead className="hidden xl:table-cell">Path</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
            </Table>

            <div className="overflow-auto max-h-[calc(100vh-4rem)] border bg-neutral-800">
              <Table>
                <TableBody>
                  {assets.map((asset) => {
                    const active = selectedAsset?.id === asset.id;

                    return (
                      <TableRow
                        key={asset.id}
                        onClick={() => setSelectedAsset(asset)}
                        className={[
                          "cursor-pointer border-b border-dashed border-neutral-700",
                          "hover:bg-neutral-700",
                          active && "bg-neutral-600",
                        ].join(" ")}
                      >
                        <TableCell>
                          <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
                            {asset.thumbnail && (
                              <img
                                src={asset.thumbnail}
                                alt={asset.name}
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                        </TableCell>

                        <TableCell className="font-medium">
                          {asset.name}
                        </TableCell>

                        <TableCell className="hidden md:table-cell">
                          <Badge variant="secondary">{asset.category}</Badge>
                        </TableCell>

                        <TableCell>{asset.size.toFixed(2)} GB</TableCell>

                        <TableCell className="hidden lg:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {asset.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>

                        <TableCell className="hidden xl:table-cell text-muted-foreground">
                          {asset.path}
                        </TableCell>

                        <TableCell>
                          <div
                            className="flex justify-end gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* RIGHT DETAILS PANEL */}
          <div className="w-80 h-full border-l border-neutral-800 bg-neutral-900 p-4">
            {!selectedAsset ? (
              <div className="flex h-full items-center justify-center text-sm text-neutral-500 text-center">
                Select an asset to view details
              </div>
            ) : (
              <div className="space-y-4 text-sm">
                <div className="text-lg font-semibold">
                  {selectedAsset.name}
                </div>

                <div>
                  <div className="text-xs text-neutral-500">Category</div>
                  <Badge variant="secondary">{selectedAsset.category}</Badge>
                </div>

                <div>
                  <div className="text-xs text-neutral-500">Size</div>
                  {selectedAsset.size.toFixed(2)} GB
                </div>

                <div>
                  <div className="text-xs text-neutral-500">Path</div>
                  <div className="break-all text-neutral-300">
                    {selectedAsset.path}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-neutral-500">Tags</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedAsset.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
