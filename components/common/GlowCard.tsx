interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
  glowColor?: "primary" | "secondary" | "accent";
}

export default function GlowCard({ children, className = "", as: Tag = "div", id, glowColor = "primary" }: GlowCardProps) {
  const glowStyles = {
    primary: "hover:shadow-[0_0_30px_-5px_rgba(129,140,248,0.15)]",
    secondary: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.15)]",
    accent: "hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.15)]",
  };

  return (
    <Tag
      id={id}
      className={`rounded-2xl border border-border/50 bg-surface/60 backdrop-blur-sm transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      {children}
    </Tag>
  );
}
