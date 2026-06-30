const colorMap: Record<string, string> = {
  react: "#61DAFB",
  nextdotjs: "#ffffff",
  typescript: "#3178C6",
  tailwindcss: "#06B6D4",
  javascript: "#F7DF1E",
  python: "#3776AB",
  dart: "#0175C2",
  flutter: "#02569B",
  supabase: "#3ECF8E",
  postgresql: "#4169E1",
  firebase: "#FFCA28",
  mongodb: "#47A248",
  node: "#339933",
  pytorch: "#EE4C2C",
  tensorflow: "#FF6F00",
  default: "#818CF8",
};

export default function TechTile({ label, color }: { label: string; color?: string }) {
  const tileColor = color || colorMap[label.toLowerCase().replace(/\s+/g, "")] || colorMap.default;

  return (
    <div className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-raised/50 border border-border/50 active:border-primary/50 active:bg-surface-raised hover:border-primary/30 hover:bg-surface-raised transition-all">
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: tileColor }}
      />
      <span className="text-xs sm:text-sm text-text-secondary active:text-text-primary group-hover:text-text-primary transition-colors font-medium">
        {label}
      </span>
    </div>
  );
}

export function MonogramTile({ label }: { label: string }) {
  const initial = label[0].toUpperCase();
  const tileColor = colorMap[label.toLowerCase().replace(/\s+/g, "")] || colorMap.default;

  return (
    <div className="group relative flex flex-col items-center gap-1.5">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 active:scale-110 active:-translate-y-1 hover:scale-110 hover:-translate-y-1 border border-border/30"
        style={{
          backgroundColor: `${tileColor}15`,
          color: tileColor,
          boxShadow: `0 0 0 0 ${tileColor}00`,
        }}
      >
        {initial}
      </div>
      <span className="text-[10px] sm:text-xs text-text-muted text-center leading-tight max-w-14 opacity-0 sm:group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );
}

export function TechDot({ label }: { label: string }) {
  const tileColor = colorMap[label.toLowerCase().replace(/\s+/g, "")] || colorMap.default;

  return (
    <div className="group relative inline-flex">
      <div
        className="w-2.5 h-2.5 rounded-full cursor-help transition-transform active:scale-150 hover:scale-150"
        style={{ backgroundColor: tileColor }}
      />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-text-muted whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </div>
  );
}
