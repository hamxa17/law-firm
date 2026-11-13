const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowUpRight = ({ size = 12 }: { size?: number }) => (
  <svg {...base} width={size} height={size} strokeWidth={2}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = () => (
  <svg {...base} width={14} height={14}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg {...base} width={20} height={20}>
    <path d="M3.5 20.5 5 16.3A8.5 8.5 0 1 1 8 19.2z" />
  </svg>
);

const paths: Record<string, React.ReactNode> = {
  chat: (
    <>
      <path d="M4 5h11v8H8l-4 3z" />
      <path d="M15 9h5v8l-3-2h-6v-2" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7 2.5 13a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
  gavel: (
    <>
      <path d="m14 4 6 6M11 7l6 6M12.5 5.5l-4 4M18.5 11.5l-4 4" />
      <path d="m10.5 11.5-7 7 2 2 7-7" />
    </>
  ),
};

export const StepIcon = ({ name }: { name: string }) => <svg {...base}>{paths[name]}</svg>;
