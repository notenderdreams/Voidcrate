import type { IconProps } from "@/lib/types";

// ManagePage Icons
export const TriangleIcon = ({
  width = 13,
  height = 12,
  color = "#7B7B7B",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.49512 0L12.9903 11.25H-7.34329e-05L6.49512 0Z" fill={color} />
  </svg>
);

export const CircleIcon = ({
  width = 15,
  height = 15,
  color = "#7B7B7B",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="7.5" fill={color} />
  </svg>
);

export const SquareIcon = ({
  width = 15,
  height = 15,
  color = "#7B7B7B",
}: IconProps) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
    }}
  />
);

export const DiamondIcon = ({
  width = 15,
  height = 15,
  color = "#7B7B7B",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7.5"
      width="10.6066"
      height="10.6066"
      transform="rotate(45 7.5 0)"
      fill={color}
    />
  </svg>
);

export const SquarePenIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
  </svg>
);

export const UELogo = ({
  width = 30,
  height = 26,
  color = "#B5B5B5",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7234 0.0040462C11.1987 0.938638 7.93595 2.7296 3.587 7.66015C-0.761946 12.5907 0.0622667 16.6649 0.0622667 16.6649C0.0622667 16.6649 1.26311 13.8624 4.14921 10.9117C5.52063 9.5145 6.53724 9.04383 7.24137 9.04383C7.86635 9.00877 8.39309 9.50776 8.39309 10.1254V20.1349C8.39309 21.1247 7.74627 21.3432 7.14994 21.3284C6.64505 21.3216 6.17563 21.1463 6.17563 21.1463C9.13952 25.4026 16.2327 26 16.2327 26L19.3453 22.7121L19.4162 22.7755L22.2669 25.1773C27.4837 22.1146 30 16.4397 30 16.4397C27.6693 18.8699 26.1901 19.439 25.3085 19.439C24.5266 19.4322 24.221 18.9818 24.221 18.9818C24.1787 18.7714 24.1077 15.7222 24.079 12.6743C24.0504 9.51989 24.079 6.36008 24.236 6.35199C25.138 4.6797 28.0104 1.30816 28.0104 1.30816C22.6449 2.35469 19.7233 5.83142 19.7233 5.83142C18.8568 5.15711 17.0937 5.26905 17.0937 5.26905C17.9179 5.71814 18.7421 7.02495 18.7421 8.10654V18.7552C18.7421 18.7552 16.9436 20.321 15.5585 20.321C14.7343 20.321 14.2294 19.8786 13.9524 19.5132C13.846 19.3729 13.7532 19.2178 13.6822 19.0492V5.9002C13.4898 6.04046 13.2551 6.11733 13.0218 6.12542C12.7229 6.12542 12.4173 5.97842 12.2112 5.54956C12.0543 5.22589 11.9547 4.74174 11.9547 4.03237C11.9547 1.6089 14.7261 0 14.7261 0L14.7234 0.0040462Z"
      fill={color}
    />
  </svg>
);

export const PackageIcon = ({
  width = 30,
  height = 26,
  color = "#B5B5B5",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 10L21 6L12 2L3 6L12 10Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 4L7.5 8"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M6 12L8 13"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M3.00391 6V17.981L12.0087 22L21.0039 17.9771V6.01357M12.0191 10.0336V21.961"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export const PlusIcon = ({
  width = 30,
  height = 26,
  color = "#B5B5B5",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect
      width="18"
      height="18"
      x="3"
      y="3"
      rx="2"
      stroke={color}
      strokeWidth={2}
    />
    <path d="M8 12h8" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <path d="M12 8v8" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </svg>
);

export const SettingsIcon = ({
  width = 30,
  height = 26,
  color = "#B5B5B5",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="4" stroke={color} strokeWidth={2} />
  </svg>
);
