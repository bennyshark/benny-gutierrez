"use client";

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
  const [isPortrait, setIsPortrait] = useState(false);
  const imgSrc = card.src.replace('f_auto,q_auto', 'w_600,f_auto,q_auto');
  return (
    <a
      href={card.project.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card relative flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[312px]"
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700/30 hover:border-zinc-500/60 transition-transform duration-500 hover:scale-[1.06] hover:z-10">
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={(e) => {
            const img = e.currentTarget;
            setIsPortrait(img.naturalHeight > img.naturalWidth);
          }}
          className={`w-full h-full transition-transform duration-700 group-hover/card:scale-110 ${
            isPortrait ? "object-contain" : "object-cover"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <p className="text-white font-display font-semibold text-sm sm:text-base leading-tight">
              {card.project.title}
            </p>
            <span className="inline-flex items-center gap-1 text-xs mt-2 text-primary opacity-0 -translate-x-3 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 delay-75">
              visit site <ExternalLink className="size-3" />
            </span>
          </div>
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
  return (
    <div className="group/row relative overflow-hidden">
      <div
        className="flex gap-4 sm:gap-6 w-max py-2 will-change-transform"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {cards.map((card, i) => (
          <ImageCard key={`a-${i}`} card={card} />
        ))}
        {cards.map((card, i) => (
          <ImageCard key={`b-${i}`} card={card} />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-bg-base to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-bg-base to-transparent pointer-events-none z-10" />
      <style>{`.group\\/row:hover>div:first-child{animation-play-state:paused!important}`}</style>
    </div>
  );
}

export default function WebDesignShowcase({
  items,
  id,
}: WebDesignShowcaseProps & { id?: string }) {
  const rows: ImageCard[][] = [[], [], []];
  items.forEach((project, i) => {
    const rowIndex = i % 3;
    project.images.forEach((src) => {
      rows[rowIndex].push({ src, project });
    });
  });

  const optimizedRows = rows.map((r, i) =>
    i === 1 ? [...r].reverse() : r
  );

  return (
    <section id={id} className="relative w-full py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-zinc-900/20 to-bg-base pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase text-center">
            featured work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center mt-2">
            live sites
          </h2>
          <p className="text-text-muted text-sm sm:text-base text-center mt-3 max-w-xl mx-auto">
            Live websites designed and deployed with modern tools
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {optimizedRows.map((rowCards, i) => (
            <MarqueeRow
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={28 + i * 3}
              cards={rowCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
