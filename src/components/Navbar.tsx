"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Veterinarians", href: "/veterinarians" },
  { label: "Breeders", href: "/breeders" },
  { label: "Dog Shows", href: "/dog-shows" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="animate-fade-in-down animated max-w-7xl mx-auto px-6 h-[69px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/thepetpros-logo.png"
            alt="ThePetPros"
            className="h-[28px] w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins font-medium text-sm text-nav-text hover:text-brand-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Claim Listing Button */}
        <div className="hidden md:flex">
          <Link
            href="/claim-listing"
            className="font-poppins font-medium text-sm text-nav-border border border-nav-border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
          >
            Claim Listing
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-nav-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-poppins font-medium text-sm text-nav-text hover:text-brand-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/claim-listing"
            className="font-poppins font-medium text-sm text-nav-border border border-nav-border rounded-full px-4 py-2 text-center hover:bg-gray-50 transition-colors mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Claim Listing
          </Link>
        </div>
      )}
    </header>
  );
}
