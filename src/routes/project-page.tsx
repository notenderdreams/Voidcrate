import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Search, Plus } from "lucide-react";

import { AddProjectDialog } from "@/components/add-project-dialog";
import { recentProjects as initialProjects } from "@/lib/mock";
import type { Project } from "@/lib/types";

export default function ProjectGridPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };
  
  const filteredProjects = projects.filter((p)=>
    !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="h-screen w-screen bg-neutral-800 text-neutral-200 flex flex-col overflow-hidden">
      {/* HEADER */}
      <header className="shrink-0 border-b border-neutral-900 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <Input
              placeholder="Search projects"
              className="pl-9 bg-neutral-950 border-neutral-900 focus-visible:ring-neutral-700"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <AddProjectDialog
            onAddProject={handleAddProject}
            trigger={
              <Button className="gap-2 border-2 hover:bg-neutral-200 hover:border-[#800000]">
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            }
          />
        </div>
      </header>

      {/* GRID */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
