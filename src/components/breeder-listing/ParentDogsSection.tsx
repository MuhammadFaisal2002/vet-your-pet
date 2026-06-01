import React from "react";

const DOG_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/bed66fcb3b028d01aebe442f929967246aae472d?width=754";

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8984 3.77299L4.89844 9.77299C4.84618 9.82543 4.78408 9.86704 4.71571 9.89543C4.64734 9.92382 4.57403 9.93843 4.5 9.93843C4.42597 9.93843 4.35266 9.92382 4.28429 9.89543C4.21592 9.86704 4.15382 9.82543 4.10156 9.77299L1.47656 7.14799C1.42424 7.09566 1.38273 7.03355 1.35442 6.96518C1.3261 6.89682 1.31152 6.82355 1.31152 6.74955C1.31152 6.67555 1.3261 6.60228 1.35442 6.53392C1.38273 6.46555 1.42424 6.40344 1.47656 6.35111C1.52889 6.29879 1.591 6.25728 1.65937 6.22897C1.72773 6.20065 1.801 6.18607 1.875 6.18607C1.949 6.18607 2.02227 6.20065 2.09063 6.22897C2.159 6.25728 2.22111 6.29879 2.27344 6.35111L4.50047 8.57814L10.1025 2.97705C10.2082 2.87138 10.3515 2.81201 10.5009 2.81201C10.6504 2.81201 10.7937 2.87138 10.8994 2.97705C11.005 3.08272 11.0644 3.22604 11.0644 3.37549C11.0644 3.52493 11.005 3.66825 10.8994 3.77393L10.8984 3.77299Z"
        fill="#2CAC61"
      />
    </svg>
  );
}

interface HealthTag {
  label: string;
  isCount?: boolean;
}

function HealthTagBadge({ label, isCount }: HealthTag) {
  return (
    <div className="flex items-center gap-[5px] rounded-[58px] bg-pet-tag-bg px-[10px] py-[2px] backdrop-blur-sm">
      {!isCount && <CheckIcon />}
      <span
        className={`text-[12px] leading-5 text-pet-tag-text ${isCount ? "font-medium" : "font-normal"}`}
      >
        {label}
      </span>
    </div>
  );
}

interface DogCardDetailedProps {
  name: string;
  breed: string;
  image: string;
  healthTags: HealthTag[];
}

function DogCardDetailed({
  name,
  breed,
  image,
  healthTags,
}: DogCardDetailedProps) {
  return (
    <div className="hover-lift flex flex-col items-center gap-5">
      <img
        src={image}
        alt={`${name} - ${breed}`}
        className="h-[340px] w-full rounded-xl object-cover"
      />
      <div className="flex w-full flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <span className="text-[24px] font-medium leading-7 text-pet-black">
            {name}
          </span>
          <span className="text-[14px] font-medium text-pet-blue">{breed}</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <span className="text-[12px] font-normal text-[#C0C2C7]">
            Health Clearances:
          </span>
          <div className="flex flex-wrap items-center gap-[6px]">
            {healthTags.map((tag, i) => (
              <HealthTagBadge
                key={i}
                label={tag.label}
                isCount={tag.isCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface DogCardSeeMoreProps {
  name: string;
  breed: string;
  image: string;
}

function DogCardSeeMore({ name, breed, image }: DogCardSeeMoreProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={image}
        alt={`${name} - ${breed}`}
        className="h-[340px] w-full rounded-xl object-cover"
      />
      <div className="flex w-full items-center justify-between px-[10px]">
        <div className="flex flex-col gap-[10px]">
          <span className="text-[24px] font-medium leading-7 text-pet-black">
            {name}
          </span>
          <span className="text-[14px] font-medium text-pet-blue">{breed}</span>
        </div>
        <button className="rounded-full border border-pet-blue px-6 py-3 text-[14px] font-medium leading-5 text-pet-blue transition-colors hover:bg-pet-blue hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
}

const PARENT_DOGS = [
  {
    name: "Sunny",
    breed: "Golden Retriever",
    image: DOG_IMAGE,
    healthTags: [
      { label: "OFA Hips Excellent" },
      { label: "OFA Elbows Normal" },
      { label: "4+", isCount: true },
    ],
    variant: "detailed" as const,
  },
  {
    name: "Bella",
    breed: "Standard Poodle",
    image: DOG_IMAGE,
    variant: "seemore" as const,
  },
  {
    name: "Cooper",
    breed: "Golden Retriever",
    image: DOG_IMAGE,
    healthTags: [
      { label: "OFA Hips Excellent" },
      { label: "OFA Elbows Normal" },
      { label: "4+", isCount: true },
    ],
    variant: "detailed" as const,
  },
  {
    name: "Luna",
    breed: "Standard Poodle",
    image: DOG_IMAGE,
    variant: "seemore" as const,
  },
];

export function ParentDogsSection() {
  const rows = [PARENT_DOGS.slice(0, 2), PARENT_DOGS.slice(2, 4)];

  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col gap-[30px]">
      {/* Section header */}
      <div className="flex w-full max-w-[224px] flex-col gap-[10px]">
        <h2 className="text-[24px] font-medium leading-8 text-pet-black">
          Our Parent Dogs
        </h2>
        <p className="text-[14px] font-normal leading-[26px] text-pet-gray-dark">
          Meet the parents of our puppies
        </p>
      </div>

      {/* Dog cards grid */}
      <div className="stagger-children flex flex-col gap-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {row.map((dog, dogIndex) =>
              dog.variant === "detailed" ? (
                <DogCardDetailed
                  key={dogIndex}
                  name={dog.name}
                  breed={dog.breed}
                  image={dog.image}
                  healthTags={dog.healthTags || []}
                />
              ) : (
                <DogCardSeeMore
                  key={dogIndex}
                  name={dog.name}
                  breed={dog.breed}
                  image={dog.image}
                />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
