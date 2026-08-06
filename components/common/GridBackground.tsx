"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-grid-pattern opacity-40">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-transparent to-bg-base" />
    </div>
  );
}
