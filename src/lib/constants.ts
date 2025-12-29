import { PackageIcon, PlusIcon, SettingsIcon, UELogo } from "@/components/icons";

export const homePageActionsList = [
  { label: "Open Projects", icon: UELogo, url: "/projects" },
  { label: "Add Crate", icon: PlusIcon, url: null },
  { label: "Browse Crates", icon: PackageIcon, url: "/assets" },
  { label: "Settings", icon: SettingsIcon, url: "/settings" },
];
