export default function BgOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* ambient top right glow */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10 animate-float-slow"
        style={{
          background: "radial-gradient(circle at center, rgba(251, 191, 36, 1), transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      {/* ambient left side glow */}
      <div
        className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07] animate-float-medium"
        style={{
          background: "radial-gradient(circle at center, rgba(180, 83, 9, 1), transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      {/* ambient bottom glow */}
      <div
        className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-10 animate-float-fast"
        style={{
          background: "radial-gradient(circle at center, rgba(217, 119, 6, 1), transparent 60%)",
          filter: "blur(150px)",
        }}
      />
    </div>
  );
}
