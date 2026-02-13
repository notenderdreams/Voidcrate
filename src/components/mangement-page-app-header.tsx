import Logo from "./logo";
import { getVersion } from "@/lib/version";

export default function AppHeader() {
  return (
    <div className="flex ">
      <Logo />
      <span className="text-neutral-500 text-sm">v{getVersion()}</span>
    </div>
  );
}
