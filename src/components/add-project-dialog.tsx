import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

import type { Project } from "@/lib/types";

const engineVersions = ["UE 5.3", "UE 5.2", "UE 4.27"]; //! TODO: add them through settings 

export function AddProjectDialog({
  trigger,
  onAddProject,
}: {
  trigger: React.ReactNode;
  onAddProject: (project: Project) => void;
}) {
  const [open, setOpen] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [path, setPath] = useState("");
  const [engineVersion, setEngineVersion] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  /* Project picker 
     !TODO: fix this while integrating tauri
  */
  const openFilePicker = () => {
    const input = document.createElement("input");
    input.type = "file";
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setProjectName(file.name.replace(/\.[^/.]+$/, ""));
      setPath(file.path ?? file.name); // 
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

  /* Fake backend call */
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const fakeProject: Project = {
      id: crypto.randomUUID(), // fake backend id
      name: projectName,
      path,
      engineVersion: engineVersion ?? "",
      lastOpened: new Date().toISOString(),
      thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : undefined,
    };

    onAddProject(fakeProject);

    // reset
    setProjectName("");
    setPath("");
    setEngineVersion(null);
    setThumbnail(null);
    setOpen(false);
  };

  return (
    <>
      {/* Trigger */}
      <div onClick={openFilePicker}>{trigger}</div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg bg-neutral-800">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
          </DialogHeader>

          <form onSubmit={submit}>
            <FieldGroup>
              <Field>
                <FieldLabel>Project Name</FieldLabel>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
                <p className="text-sm text-muted-foreground break-all">
                  <span>Project Path: </span>
                  <span>{path}</span>
                </p>
              </Field>

              <Field>
                <FieldLabel>Engine Version (optional)</FieldLabel>
                <Combobox
                  items={engineVersions}
                  onValueChange={setEngineVersion}
                >
                  <ComboboxInput placeholder="Select engine version" />
                  <ComboboxContent>
                    <ComboboxEmpty>No engine versions found.</ComboboxEmpty>
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
                <FieldLabel>Thumbnail</FieldLabel>
                <div
                  onClick={openThumbnailPicker}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDropThumbnail}
                  className="flex h-32 cursor-pointer items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground hover:bg-neutral-700/30"
                >
                  {thumbnail
                    ? thumbnail.name
                    : "Click or drag & drop image here"}
                </div>
              </Field>

              <Field orientation="horizontal">
                <Button type="submit">Create Project</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
