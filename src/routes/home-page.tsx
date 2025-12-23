import { recentProjects } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { FolderOpen, Plus, Package, Settings } from "lucide-react";
import { getMostRecentProjects } from "@/lib/utils";

const actions = [
  { label: "Open Projects", icon: FolderOpen },
  { label: "Add Crate", icon: Plus },
  { label: "Browse Crates", icon: Package },
  { label: "Settings", icon: Settings },
];

export default function HomePage() {
  const mostRecentProjects = getMostRecentProjects(recentProjects);

  return (
    <div className="h-screen flex items-center justify-center text-neutral-200 bg-neutral-900">
      {/* CONTAINER */}
      <div className="flex w-full max-w-6xl gap-6">
        {/* LEFT — RECENTS */}
        <div className="w-1/3 flex flex-col gap-2">
          {mostRecentProjects.map((project) => (
            <Button
              key={project.id}
              variant="ghost"
              className="
                w-full h-14
                justify-start
                bg-transparent text-neutral-300
                hover:text-neutral-200
                hover:bg-neutral-600
                rounded-lg
                px-4
              "
            >
              <div className="flex flex-col overflow-hidden text-left">
                <span className="text-sm truncate">{project.name}</span>
                <span className="text-xs text-neutral-400 truncate">
                  {project.path}
                </span>
              </div>
            </Button>
          ))}
        </div>

        {/* MIDDLE — SPACER */}
        <div className="w-1/3" />

        {/* RIGHT — ACTIONS */}
        <div className="w-1/3 flex flex-col gap-2">
          {actions.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              variant="ghost"
              className="
                w-full h-14
                justify-start
                bg-neutral-800 text-neutral-400
                hover:bg-neutral-200
                rounded-lg
                gap-3 px-1
              "
            >
              <div className="p-4 bg-neutral-900 rounded-md">
                <Icon className=" text-neutral-100" strokeWidth={2} />
              </div>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
