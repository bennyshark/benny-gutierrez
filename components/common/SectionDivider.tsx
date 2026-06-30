export default function SectionDivider() {
  return (
    <div className="relative h-24 sm:h-32 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60L1440 120L0 120Z"
          fill="currentColor"
          className="text-surface"
        />
      </svg>
    </div>
  );
}

export function SectionDividerFlip() {
  return (
    <div className="relative h-24 sm:h-32 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60C240 0 480 120 720 60C960 0 1200 120 1440 60L1440 0L0 0Z"
          fill="currentColor"
          className="text-surface"
        />
      </svg>
    </div>
  );
}
