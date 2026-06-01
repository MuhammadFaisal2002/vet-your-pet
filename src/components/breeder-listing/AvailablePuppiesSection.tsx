import { DogCard } from "./DogCard";

const puppies = [
  {
    id: 1,
    name: "Luna",
    breed: "F1 Goldendoodle",
    price: "$3,200",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/94175a426b48c60a1f4d4a3579de4640f1a2c45a?width=754",
    gender: "Female",
    color: "Apricot",
    expectedSize: "45-55 lbs",
    birthDate: "2025-12-15",
  },
  {
    id: 2,
    name: "Cooper",
    breed: "F1 Goldendoodle",
    price: "$3,200",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4c45ae0de1de9f14585d71602b7f524ff8be34ac?width=754",
    gender: "Male",
    color: "Cream",
    expectedSize: "50-60 lbs",
    birthDate: "2025-12-15",
  },
  {
    id: 3,
    name: "Daisy",
    breed: "F1B Goldendoodle",
    price: "$3,500",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/86fa031f53e9c274e21f8665281e88fce63b4317?width=754",
    gender: "Female",
    color: "Red",
    expectedSize: "35-45 lbs",
    birthDate: "2026-01-08",
  },
];

export function AvailablePuppiesSection() {
  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col items-start gap-[10px]">
      {/* Section Header */}
      <h2 className="text-brand-black font-medium text-[24px] leading-8">
        Available Puppies
      </h2>
      <p className="text-brand-gray-medium font-normal text-[14px] leading-[26px]">
        Current litter · Ready to go home February 9, 2026
      </p>

      {/* Puppies Grid */}
      <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {puppies.map((puppy) => (
          <DogCard key={puppy.id} {...puppy} />
        ))}
      </div>
    </div>
  );
}
