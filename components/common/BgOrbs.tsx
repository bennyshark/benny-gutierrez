export default function BgOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* large indigo orb */}
      <div
        className="absolute -top-48 -right-48 w-96 h-96 rounded-full opacity-20 animate-float-slow"
        style={{
          background: "radial-gradient(circle at center, rgba(129, 140, 248, 0.4), transparent 70%)",
        }}
      />

      {/* medium amber orb */}
      <div
        className="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-15 animate-float-medium"
        style={{
          background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.3), transparent 70%)",
        }}
      />

      {/* small rose orb */}
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 animate-float-fast"
        style={{
          background: "radial-gradient(circle at center, rgba(251, 113, 133, 0.25), transparent 70%)",
        }}
      />

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
