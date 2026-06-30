export default function Logo({ size = "default" }: { size?: "sm" | "default" }) {
  const textSize = size === "sm" ? "text-3xl" : "text-5xl";

  return (
    <div className="flex items-center group">
      <span className={`${textSize} font-display font-bold tracking-tight text-primary transition-colors`}>
        Benny
      </span>
    </div>
  );
}
