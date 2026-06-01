"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VetRecord } from "@/data/vet-types";

interface PhotoGallerySectionProps {
  vet: VetRecord;
}

function Lightbox({
  images,
  onClose,
}: {
  images: string[];
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Previous */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(currentIndex - 1);
          }}
          className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="relative h-[80vh] w-[90vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(currentIndex + 1);
          }}
          className="absolute right-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export function PhotoGallerySection({ vet }: PhotoGallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!vet.gallery.length) return null;

  return (
    <>
      <section className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-poppins text-xl font-semibold text-brand-dark">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {vet.gallery.slice(0, 8).map((image, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxOpen(true)}
              className="relative aspect-square overflow-hidden rounded-xl bg-pet-bg"
            >
              <Image
                src={image}
                alt={`${vet.name} photo ${idx + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </button>
          ))}
        </div>
        {vet.gallery.length > 8 && (
          <button
            onClick={() => setLightboxOpen(true)}
            className="text-sm font-medium text-pet-blue hover:underline"
          >
            View all {vet.gallery.length} photos →
          </button>
        )}
      </section>

      {lightboxOpen && (
        <Lightbox images={vet.gallery} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}