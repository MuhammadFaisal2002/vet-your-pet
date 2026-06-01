"use client";

import React, { useMemo } from "react";
import { VetRecord } from "@/data/vet-types";

interface VetHoursCardProps {
  vet: VetRecord;
}

type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

const DAY_LABELS: Record<DayKey, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export function VetHoursCard({ vet }: VetHoursCardProps) {
  const today = useMemo(() => {
    const days: DayKey[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return days[new Date().getDay()] as DayKey;
  }, []);

  const days: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div className="animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-4 rounded-[14px] border border-pet-stroke bg-white px-[30px] py-6">
      <h3 className="text-[18px] font-medium leading-8 text-[#0A0A0A]">
        Hours of Operation
      </h3>

      <div className="flex flex-col gap-2">
        {days.map((day) => {
          const hours = vet.hours[day];
          const isToday = day === today;
          const isClosed = hours.toLowerCase() === "closed";

          return (
            <div
              key={day}
              className={`flex items-center justify-between py-1 ${
                isToday ? "bg-brand-red/5" : ""
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  isToday ? "text-brand-red" : "text-nav-text"
                }`}
              >
                {DAY_LABELS[day]}
              </span>
              <span
                className={`text-sm ${
                  isClosed
                    ? "text-brand-red italic"
                    : isToday
                    ? "font-semibold text-brand-dark"
                    : "text-brand-dark"
                }`}
              >
                {hours}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}