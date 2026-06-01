'use client';

import Link from 'next/link';
import { PawPrint } from 'lucide-react';

export function MinimalHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pet-stroke">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="w-7 h-7 text-brand-red" />
            <span className="font-poppins font-bold text-xl text-brand-dark">
              Vet Your Pet
            </span>
          </Link>
          
          {/* BREED FINDER eyebrow */}
          <div className="hidden sm:block">
            <span className="font-poppins text-xs font-medium text-brand-red tracking-wide uppercase">
              BREED FINDER
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}