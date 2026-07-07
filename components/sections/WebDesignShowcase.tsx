"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export interface WebDesignItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  siteUrl: string;
  accent: "indigo" | "amber" | "rose";
}

interface WebDesignShowcaseProps {
  items: WebDesignItem[];
}

interface ImageCard {
  src: string;
  project: WebDesignItem;
}

function ImageCard({ card }: { card: ImageCard }) {
  const accentBorders: Record<string, string> = {
    indigo: "border-primary/20 hover:border-primary/40",
    amber: "border-secondary/20 hover:border-secondary/40",
    rose: "border-accent/20 hover:border-accent/40",
  };

  return (
    <a
      href={card.project.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/card relative flex-shrink-0 w-72 sm:w-80 lg:w-96 h-44 sm:h-52 lg:h-60 rounded-xl overflow-hidden border ${accentBorders[card.project.accent]} transition-all duration-500 hover:scale-[1.08] hover:shadow-2xl hover:z-10`}
    >
      <Image
        src={card.src}
        alt={`${card.project.title} screenshot`}
        fill
        sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
        className="object-cover transition-all duration-700 group-hover/card:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-400">
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <p className="text-white font-display font-semibold text-sm sm:text-base leading-tight">
            {card.project.title}
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 line-clamp-1">
            {card.project.description}
          </p>
          <span className="inline-flex items-center gap-1 text-xs mt-2 text-primary opacity-0 -translate-x-3 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 delay-75">
            visit site <ExternalLink className="size-3" />
          </span>
        </div>
      </div>
    </a>
  );
}

function MarqueeRow({
  direction,
  duration,
  cards,
}: {
  direction: "left" | "right";
  duration: number;
  cards: ImageCard[];
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        maskImage:
          "linear-gradient(90deg,transparent 0%,#000 5%,#000 95%,transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg,transparent 0%,#000 5%,#000 95%,transparent 100%)",
      }}
    >
      <div
        className="flex gap-4 sm:gap-6 w-max py-2"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {cards.map((card, i) => (
          <ImageCard key={`a-${i}`} card={card} />
        ))}
        {cards.map((card, i) => (
          <ImageCard key={`b-${i}`} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function WebDesignShowcase({
  items,
}: WebDesignShowcaseProps) {
  const allCards: ImageCard[] = items.flatMap((project) =>
    project.images.map((src) => ({ src, project }))
  );

  const rows: ImageCard[][] = [[], [], []];
  allCards.forEach((card, i) => {
    rows[i % 3].push(card);
  });

  return (
    <section className="relative w-full py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-zinc-900/20 to-bg-base pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase text-center">
            web design
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center mt-2">
            live projects
          </h2>
          <p className="text-text-muted text-sm sm:text-base text-center mt-3 max-w-xl mx-auto">
            Websites designed and deployed for real clients and businesses
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {rows.map((rowCards, i) => (
            <MarqueeRow
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={36 + i * 4}
              cards={rowCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
