"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const tabs = [
  {
    id: "breeder",
    label: "Dog Breeder",
    href: "/breeders",
    icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? "text-brand-red" : "text-gray-400"}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-5.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm11 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM12 21c-3.5 0-7-1.5-7-4.5 0-2 2-3.5 5-3.5h4c3 0 5 1.5 5 3.5 0 3-3.5 4.5-7 4.5z"/>
      </svg>
    ),
  },
  {
    id: "vet",
    label: "Veterinarian",
    href: "/veterinarians",
    icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? "text-brand-red" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3a2 2 0 002 2h2a2 2 0 002-2M9 3a2 2 0 012-2h2a2 2 0 012 2m-6 9h6m-3-3v6" />
      </svg>
    ),
  },
  {
    id: "show",
    label: "Dog Show",
    href: "/dog-shows",
    icon: (active: boolean) => (
      <svg className={`w-6 h-6 ${active ? "text-brand-red" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState("breeder");
  const [zip, setZip] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const active = tabs.find((t) => t.id === activeTab);
    if (active) router.push(active.href);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-1 w-full max-w-lg">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-1.5 pt-4 pb-3 px-2 relative transition-colors
                ${isActive ? "text-brand-red" : "text-gray-400 hover:text-gray-600"}`}
            >
              {tab.icon(isActive)}
              <span className={`font-poppins text-xs font-medium ${isActive ? "text-brand-red" : "text-gray-400"}`}>
                {tab.label}
              </span>
              {/* Active underline */}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-brand-red rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 p-3">
        <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter your ZIP code"
            className="flex-1 bg-transparent font-poppins text-sm text-brand-dark placeholder-gray-400 outline-none"
          />
        </div>
        <button
          onClick={handleSearch}
          className="font-poppins font-semibold text-sm bg-brand-red text-white rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  );
}
