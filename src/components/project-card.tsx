import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { selectedProjectAtom } from "@/lib/store";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const [, setSelectedProject] = useAtom(selectedProjectAtom);

  const handleClick = () => {
    setSelectedProject(project);
    navigate("/management/");
  };
  const thumbnailSrc = project.thumbnail ?? "/placeholders/project.png"; // TODO default thumbnail

  return (
    <div
      onClick={handleClick}
      className="
        cursor-pointer
        border border-transparent
        hover:border-[#800000]
        transition-colors
        bg-black
      "
    >
      {/* Thumbnail */}
      <div className="aspect-2/1 w-full overflow-hidden bg-black">
        <img
          src={thumbnailSrc}
          alt={project.name}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Meta */}
      <div className="mt-2 px-2 py-1">
        <div className="text-sm font-medium text-neutral-200 truncate">
          {project.name}
        </div>

        <div className="text-xs text-neutral-500 truncate">
          <span className="font-semibold text-neutral-400">
            {project.engineVersion}
          </span>{" "}
          · {project.path}
        </div>
      </div>
    </div>
  );
}
