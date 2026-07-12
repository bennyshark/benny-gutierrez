"use client";

import { createContext, useContext, useCallback, useEffect, useRef, useState, ReactNode } from "react";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

type LightboxItem = {
  src: string;
  alt: string;
};

type LightboxState = {
  items: LightboxItem[];
  index: number;
} | null;

type LightboxContextValue = {
  open: (items: LightboxItem[], index?: number) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const open = useCallback((items: LightboxItem[], index = 0) => {
    setState({ items, index });
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setState(null);
  }, []);

  const next = useCallback(() => {
    setState((s) => (s ? { ...s, index: (s.index + 1) % s.items.length } : s));
  }, []);

  const prev = useCallback(() => {
    setState((s) =>
      s ? { ...s, index: (s.index - 1 + s.items.length) % s.items.length } : s,
    );
  }, []);

  useEffect(() => {
    if (!state) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [state]);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [state]);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, close, next, prev]);

  const current = state ? state.items[state.index] : null;
  const hasMultiple = state && state.items.length > 1;

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      {state && current && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-white/80 hover:text-white border border-white/30 hover:border-white/70 transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLoading(true); prev(); }}
                aria-label="Previous"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-white/80 hover:text-white border border-white/30 hover:border-white/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setLoading(true); next(); }}
                aria-label="Next"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-white/80 hover:text-white border border-white/30 hover:border-white/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </button>
              <span className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10 text-[11px] font-mono tracking-[0.22em] text-white/80">
                {String(state.index + 1).padStart(2, "0")} / {String(state.items.length).padStart(2, "0")}
              </span>
            </>
          )}

          {loading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <Loader2 className="size-8 text-white/60 animate-spin" />
            </div>
          )}

          <img
            key={state.index}
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            onLoad={() => setLoading(false)}
            className="max-w-full max-h-full object-contain select-none"
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
