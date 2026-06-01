"use client";

import React, { useState, useEffect } from "react";
import { Link2 } from "lucide-react";

interface ShareButtonsProps {
  url?: string;
  title?: string;
  label?: string;
  className?: string;
}

export default function ShareButtons({
  url,
  title = "",
  label = "Share this article",
  className = "",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(url || (typeof window !== "undefined" ? window.location.href : ""));
  }, [url]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className={`w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 mb-12 border-t border-b border-pet-stroke ${className}`}>
      <span className="font-poppins text-xs font-semibold text-brand-dark uppercase tracking-wider">
        {label}
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Twitter */}
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(shareUrl)}`,
              "_blank"
            )
          }
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
          aria-label="Share on Twitter"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* Facebook */}
        <button
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
              "_blank"
            )
          }
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
          aria-label="Share on Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
          </svg>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
              "_blank"
            )
          }
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </button>

        {/* Copy Link */}
        <div className="relative flex items-center">
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-pet-stroke text-nav-text hover:text-brand-red hover:border-brand-red transition-all cursor-pointer shadow-sm"
            aria-label="Copy link"
          >
            <Link2 className="w-4 h-4" />
          </button>
          {copied && (
            <span className="absolute left-10 bg-brand-dark text-white text-[10px] rounded-full px-3 py-1 font-semibold whitespace-nowrap shadow-md animate-fade-in-up">
              Link Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
