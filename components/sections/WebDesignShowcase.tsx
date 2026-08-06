"use client";

import { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";

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
      className="group/card relative flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[400px] h-[160px] sm:h-[200px] lg:h-[250px] p-2"
    >
      <div className="relative w-full h-full glass-panel border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:z-10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]">
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20" />

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
          className={`w-full h-full transition-all duration-700 group-hover/card:scale-110 group-hover/card:grayscale-0 group-hover/card:brightness-100 ${
            isPortrait ? "object-contain" : "object-cover"
          } grayscale-[0.6] brightness-[0.7]`}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-50 group-hover/card:opacity-0 transition-opacity duration-500 bg-surface/40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-mono uppercase tracking-widest text-xs sm:text-sm font-bold leading-tight mb-1 truncate">
              {card.project.title}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-primary opacity-0 -translate-x-3 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 delay-75">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              launch protocol <ExternalLink className="size-3 ml-1" />
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
    <div className="group/row relative overflow-hidden my-4">
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
      <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-bg-base to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-bg-base to-transparent pointer-events-none z-10" />
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
    <section id={id} className="relative w-full py-20 sm:py-24 z-10">
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            featured work
            <span className="w-4 h-[1px] bg-primary" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center mt-2 uppercase tracking-tight">
            featured works <span className="text-gradient-gold">like this</span>
          </h2>

          <div className="flex flex-col items-center justify-center mt-6">
            <div className="border border-white/10 glass-panel py-2 px-4 rounded-lg flex items-center gap-3">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-text-secondary uppercase">
                built under:
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-widest">
                <Globe className="size-3 text-primary" />
                Regen Digital Solutions
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-4 py-8 relative">
          {/* subtle background grid for the marquee area */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          
          {optimizedRows.map((rowCards, i) => (
            <MarqueeRow
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={50 + i * 5}
              cards={rowCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
