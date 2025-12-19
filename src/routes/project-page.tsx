import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

import { recentProjects } from "@/lib/mock";

export default function ProjectGridPage() {
  return (
    <div className="h-screen w-screen bg-neutral-800 text-neutral-200 flex flex-col overflow-hidden">
      {/* ───────────────── Top Bar ───────────────── */}
      <header className="shrink-0 border-b border-neutral-900 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full max-w-xl">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500"
              strokeWidth={2}
            />
            <Input
              placeholder="Search projects"
              className="pl-9 bg-neutral-950 border-neutral-900 focus-visible:ring-neutral-700"
            />
          </div>

          {/* Add Project Button */}
          <Button className="gap-2 hover:bg-neutral-200 hover:border-[#800000] border-2">
            <Plus className="h-4 w-4" strokeWidth={2} />
            Add Project
          </Button>
        </div>
      </header>

      {/* ───────────────── Grid ───────────────── */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="
                border border-transparent
                hover:border-[#800000]
                transition-colors
                bg-black
              "
            >
              {/* Thumbnail */}
              <div className="aspect-2/1 w-full overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Meta */}
              <div className="mt-2 px-2 py-1">
                <div className="text-sm font-medium text-neutral-200 truncate">
                  {project.name}
                </div>

                <div className="text-xs text-neutral-500 truncate">
                  {project.engineVersion} · {project.path}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
