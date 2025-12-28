import Logo from "./logo";
import { getVersion } from "@/lib/version";
import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function AppHeader() {
  return (
    <div className="flex items-center gap-2 text-xs justify-between">
      <div className="flex flex-col items-end">
        <Logo />
        <span className="text-neutral-500">v{getVersion()}</span>
      </div>
      {/* 3-dot menu */}
      <DropdownMenu >
        <DropdownMenuTrigger>
          <button className="py-2 px-1 bg-neutral-800 rounded">
            <MoreVertical className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="bg-neutral-800">
          <DropdownMenuItem>Homepage</DropdownMenuItem>
          <DropdownMenuItem>Scan and Relink</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Unpack All</DropdownMenuItem>
          <DropdownMenuItem>Pack All</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">Exit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
