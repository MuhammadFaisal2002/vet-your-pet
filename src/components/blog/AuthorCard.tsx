import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleAuthor } from "@/data/articles";

interface AuthorCardProps {
  author: ArticleAuthor;
  className?: string;
}

export default function AuthorCard({ author, className = "" }: AuthorCardProps) {
  const isVet = author.type === "vet";
  const profilePath = `/${isVet ? "veterinarian" : "breeder"}/${author.slug}`;

  return (
    <div className={`w-full bg-white rounded-2xl p-6 md:p-8 border border-pet-stroke shadow-card flex flex-col sm:flex-row gap-6 items-center sm:items-start my-12 ${className}`}>
      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-pet-stroke flex-shrink-0 shadow-sm">
        <Image
          src={author.photo}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
        <span className="font-poppins font-semibold text-[10px] text-brand-red uppercase tracking-wider">
          Authored By
        </span>
        <h3 className="font-poppins font-bold text-xl text-brand-dark font-poppins">
          {author.name}
        </h3>
        <p className="text-xs font-semibold text-pet-green uppercase tracking-wide font-poppins">
          Verified {isVet ? "Veterinarian" : "Ethical Breeder"}
        </p>
        <p className="font-poppins text-sm text-nav-text leading-relaxed">
          Expert contributor on Vet Your Pet. Committed to providing verified information, 
          responsible breeding standards, and evidence-based animal care guidelines.
        </p>
        <Link
          href={profilePath}
          className="btn-animate inline-flex items-center justify-center font-poppins font-medium text-xs border border-brand-dark text-brand-dark rounded-full px-5 py-2.5 mt-2 hover:bg-brand-dark hover:text-white transition-colors"
        >
          View Professional Profile
        </Link>
      </div>
    </div>
  );
}
