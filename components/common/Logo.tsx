export default function Logo({ size = "default" }: { size?: "sm" | "default" }) {
  const textSize = size === "sm" ? "text-base" : "text-xl";

  return (
    <div className="flex items-center gap-2.5 group">
      <div className="relative flex items-center justify-center">
        <svg
          width={size === "sm" ? 24 : 32}
          height={size === "sm" ? 24 : 32}
          viewBox="0 0 32 32"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <circle cx="16" cy="16" r="14" stroke="currentColor" className="text-primary" strokeWidth="2" />
          <circle cx="16" cy="16" r="8" fill="currentColor" className="text-primary/30" />
          <circle cx="16" cy="16" r="3" fill="currentColor" className="text-primary" />
        </svg>
      </div>
      <span className={`${textSize} font-display font-medium tracking-tight text-text-primary`}>
        benedict
      </span>
    </div>
  );
}
