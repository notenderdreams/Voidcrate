import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

import type { Asset, AssetCategory } from "@/lib/types";

const assetCategories: AssetCategory[] = [
  "Models",
  "Materials",
  "Blueprints",
  "Packs",
];

export function AddAssetDialog({
  trigger,
  onAddAsset,
}: {
  trigger: React.ReactNode;
  onAddAsset: (asset: Asset) => void;
}) {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [category, setCategory] = useState<AssetCategory | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const size = 6.9;

  /* Asset picker */
  const openAssetPicker = () => {
    const input = document.createElement("input");
    input.type = "file";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setName(file.name.replace(/\.[^/.]+$/, ""));
      setPath(file.path ?? file.name);
      setOpen(true);
    };

    input.click();
  };

  /* Thumbnail picker */
  const openThumbnailPicker = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) setThumbnail(file);
    };

    input.click();
  };

  const onDropThumbnail = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) setThumbnail(file);
  };

  /* Tag handling */
  const addTag = (value: string) => {
    const v = value.trim();
    if (!v || tags.includes(v)) return;
    setTags((t) => [...t, v]);
  };

  const onTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => setTags((t) => t.filter((x) => x !== tag));

  /* Submit */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;

    const asset: Asset = {
      id: crypto.randomUUID(),
      name,
      path,
      category,
      tags,
      size,
      description,
      thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : undefined,
    };

    onAddAsset(asset);

    // reset
    setName("");
    setPath("");
    setCategory(null);
    setTags([]);
    setTagInput("");
    setThumbnail(null);
    setDescription("");
    setOpen(false);
  };

  return (
    <>
      {/* Trigger */}
      <div onClick={openAssetPicker}>{trigger}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-800 sm:max-w-lg max-h-[80vh] p-0 overflow-hidden">
          {/* Sticky Header */}
          <DialogHeader className="sticky top-0 z-10 bg-neutral-800 border-b border-neutral-700 px-6 py-4">
            <DialogTitle>Add Asset</DialogTitle>
          </DialogHeader>

          {/* Scrollable Body */}
          <div className="overflow-y-auto max-h-[calc(80vh-140px)] px-6 py-4 scrollbar-thin scrollbar-thumb-neutral-700">
            <form onSubmit={submit}>
              <FieldGroup>
                <Field>
                  <FieldLabel>Asset Name</FieldLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground break-all mt-1">
                    Path: {path}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Size: ~{size} GB
                  </p>
                </Field>

                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <Combobox
                    items={assetCategories}
                    onValueChange={(v) => setCategory(v as AssetCategory)}
                  >
                    <ComboboxInput placeholder="Select category" />
                    <ComboboxContent>
                      <ComboboxEmpty>No categories found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>

                <Field>
                  <FieldLabel>Tags</FieldLabel>
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={onTagKeyDown}
                    placeholder="Press Enter or comma to add"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-700 px-2 py-1 rounded cursor-pointer hover:bg-neutral-600"
                        onClick={() => removeTag(tag)}
                      >
                        {tag} ✕
                      </span>
                    ))}
                  </div>
                </Field>

                <Field>
                  <FieldLabel>Description</FieldLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Optional description"
                  />
                </Field>

                <Field>
                  <FieldLabel>Thumbnail</FieldLabel>
                  <div
                    onClick={openThumbnailPicker}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDropThumbnail}
                    className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground hover:bg-neutral-700/30 transition-colors"
                  >
                    {thumbnail
                      ? thumbnail.name
                      : "Click or drag & drop image here"}
                  </div>
                </Field>
              </FieldGroup>
            </form>
          </div>

          {/* Sticky Footer */}
          <div className="sticky bottom-0 z-10 bg-neutral-800 border-t border-neutral-700 px-6 py-4 flex justify-end gap-2">
            <Button type="submit" onClick={submit} disabled={!category}>
              Add Asset
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
