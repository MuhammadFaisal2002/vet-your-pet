"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface PhotoGalleryProps {
  photos: { src: string; alt: string }[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const isOpen = openIndex !== null;
  const total = photos.length;

  const close = useCallback(() => {
    setOpenIndex(null);
  }, []);

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % total));
  }, [total]);

  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + total) % total));
  }, [total]);

  // Keyboard: ESC closes, arrows navigate, Tab traps focus inside lightbox.
  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Tab") {
        const focusables = [closeRef.current, prevRef.current, nextRef.current].filter(
          Boolean,
        ) as HTMLElement[];
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Restore focus to the thumbnail that opened the lightbox.
      lastFocused.current?.focus?.();
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo ${i + 1} of ${total}: ${photo.alt}`}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-pet-stroke bg-pet-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
              i === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-[4/3]" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIndex + 1} of ${total}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={(e) => {
            // Click backdrop (not the image) to close.
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Close */}
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Prev */}
          <button
            ref={prevRef}
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Image */}
          <figure className="relative max-h-[85vh] max-w-[90vw]">
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              width={1600}
              height={1200}
              className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-2xl object-contain"
              priority
            />
          </figure>

          {/* Next */}
          <button
            ref={nextRef}
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Counter */}
          <span
            aria-live="polite"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 font-poppins text-xs text-white"
          >
            {openIndex + 1} / {total}
          </span>
        </div>
      )}
    </>
  );
}
