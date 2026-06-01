"use client";

import React from "react";

type CertStatus = "verified" | "not-applicable";

interface CertItem {
  label: string;
  status: CertStatus;
}

const certifications: CertItem[] = [
  { label: "AKC Registered Parents", status: "verified" },
  { label: "OFA Health Tested", status: "verified" },
  { label: "Puppy Culture Protocol", status: "verified" },
  { label: "USDA Licensed", status: "not-applicable" },
];

const includedItems = [
  "Veterinary health certificate",
  "Current vaccinations",
  "Deworming records",
  "Microchip registration",
  "Health guarantee certificate",
  "Puppy starter kit",
  "Lifetime breeder support",
  "Training resources",
];

function VerifiedPill() {
  return (
    <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-health-green-light overflow-hidden border border-transparent">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L4.5 8.5L2 6" stroke="#638775" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-poppins font-medium text-xs leading-[18px] text-health-green">
        Verified
      </span>
    </div>
  );
}

function NotApplicablePill() {
  return (
    <div className="flex items-center justify-center px-2 py-0.5 rounded-md bg-pet-stroke border border-pet-stroke overflow-hidden">
      <span className="font-poppins font-medium text-xs leading-[18px] text-brand-gray">
        Not Applicable
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M16.6654 5L7.4987 14.1667L3.33203 10"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="76"
      height="92"
      viewBox="0 0 76 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3447 -1.68945C37.3427 -2.07794 38.4433 -2.10163 39.4541 -1.76172L39.6553 -1.68945L39.6562 -1.68848L74.6318 11.9404H74.6309C75.4211 12.2481 76.1101 12.7703 76.6201 13.4482C77.1301 14.1262 77.4407 14.9332 77.5166 15.7783V15.7803L77.5176 15.7822C77.5177 15.7835 77.5174 15.7851 77.5176 15.7871C77.518 15.7917 77.5188 15.7983 77.5195 15.8066C77.521 15.8233 77.5227 15.8476 77.5254 15.8789C77.5307 15.942 77.5383 16.035 77.5479 16.1553C77.567 16.3958 77.594 16.7476 77.625 17.1992C77.6871 18.1028 77.7663 19.4069 77.8359 21.0176C77.9751 24.2368 78.0764 28.693 77.9238 33.6387C77.6221 43.4194 76.4478 55.5242 71.9053 64.2793C66.8887 73.9479 58.8563 81.2657 52.1748 86.1357C48.8212 88.5801 45.7762 90.4316 43.5645 91.6738C42.4578 92.2954 41.5577 92.7659 40.9297 93.083C40.6157 93.2415 40.3694 93.3615 40.1992 93.4434C40.1142 93.4842 40.0481 93.5154 40.002 93.5371C39.9789 93.548 39.9602 93.5565 39.9473 93.5625C39.9409 93.5655 39.9355 93.5685 39.9316 93.5703C39.9299 93.5711 39.9279 93.5717 39.9268 93.5723L39.9258 93.5732L39.9248 93.5723C39.2388 93.8919 38.4842 94.0369 37.7285 93.9922H37.7256C37.1537 93.9574 36.5934 93.8144 36.0742 93.5723H36.0732C36.0721 93.5717 36.0701 93.5711 36.0684 93.5703C36.0675 93.5699 36.0664 93.5688 36.0654 93.5684C36.063 93.5672 36.06 93.5666 36.0576 93.5654V93.5645C36.0561 93.5638 36.0544 93.5633 36.0527 93.5625C36.0398 93.5565 36.0211 93.548 35.998 93.5371C35.9519 93.5154 35.8858 93.4842 35.8008 93.4434C35.6306 93.3615 35.3843 93.2415 35.0703 93.083C34.4423 92.7659 33.5422 92.2954 32.4355 91.6738C30.2238 90.4316 27.1788 88.5801 23.8252 86.1357C17.1437 81.2657 9.11128 73.9479 4.09473 64.2793C-0.447768 55.5242 -1.62207 43.4194 -1.92383 33.6387C-2.07641 28.693 -1.9751 24.2368 -1.83594 21.0176C-1.76631 19.4069 -1.68706 18.1028 -1.625 17.1992C-1.59398 16.7476 -1.56697 16.3958 -1.54785 16.1553C-1.53829 16.035 -1.53073 15.942 -1.52539 15.8789C-1.52274 15.8476 -1.52098 15.8233 -1.51953 15.8066C-1.51881 15.7983 -1.51798 15.7917 -1.51758 15.7871C-1.5174 15.7851 -1.51769 15.7835 -1.51758 15.7822L-1.5166 15.7803V15.7783C-1.44069 14.9332 -1.13011 14.1262 -0.620117 13.4482C-0.110297 12.7705 0.578155 12.2482 1.36816 11.9404L36.3438 -1.68848L36.3447 -1.68945Z"
        fill="#4C725F"
        stroke="#4C725F"
        strokeWidth="4"
      />
      <path
        d="M36.3447 -1.68945C37.3427 -2.07794 38.4433 -2.10163 39.4541 -1.76172L39.6553 -1.68945L39.6562 -1.68848L74.6318 11.9404H74.6309C75.4211 12.2481 76.1101 12.7703 76.6201 13.4482C77.1301 14.1262 77.4407 14.9332 77.5166 15.7783V15.7803L77.5176 15.7822C77.5177 15.7835 77.5174 15.7851 77.5176 15.7871C77.518 15.7917 77.5188 15.7983 77.5195 15.8066C77.521 15.8233 77.5227 15.8476 77.5254 15.8789C77.5307 15.942 77.5383 16.035 77.5479 16.1553C77.567 16.3958 77.594 16.7476 77.625 17.1992C77.6871 18.1028 77.7663 19.4069 77.8359 21.0176C77.9751 24.2368 78.0764 28.693 77.9238 33.6387C77.6221 43.4194 76.4478 55.5242 71.9053 64.2793C66.8887 73.9479 58.8563 81.2657 52.1748 86.1357C48.8212 88.5801 45.7762 90.4316 43.5645 91.6738C42.4578 92.2954 41.5577 92.7659 40.9297 93.083C40.6157 93.2415 40.3694 93.3615 40.1992 93.4434C40.1142 93.4842 40.0481 93.5154 40.002 93.5371C39.9789 93.548 39.9602 93.5565 39.9473 93.5625C39.9409 93.5655 39.9355 93.5685 39.9316 93.5703C39.9299 93.5711 39.9279 93.5717 39.9268 93.5723L39.9258 93.5732L39.9248 93.5723C39.2388 93.8919 38.4842 94.0369 37.7285 93.9922H37.7256C37.1537 93.9574 36.5934 93.8144 36.0742 93.5723H36.0732C36.0721 93.5717 36.0701 93.5711 36.0684 93.5703C36.0675 93.5699 36.0664 93.5688 36.0654 93.5684C36.063 93.5672 36.06 93.5666 36.0576 93.5654V93.5645C36.0561 93.5638 36.0544 93.5633 36.0527 93.5625C36.0398 93.5565 36.0211 93.548 35.998 93.5371C35.9519 93.5154 35.8858 93.4842 35.8008 93.4434C35.6306 93.3615 35.3843 93.2415 35.0703 93.083C34.4423 92.7659 33.5422 92.2954 32.4355 91.6738C30.2238 90.4316 27.1788 88.5801 23.8252 86.1357C17.1437 81.2657 9.11128 73.9479 4.09473 64.2793C-0.447768 55.5242 -1.62207 43.4194 -1.92383 33.6387C-2.07641 28.693 -1.9751 24.2368 -1.83594 21.0176C-1.76631 19.4069 -1.68706 18.1028 -1.625 17.1992C-1.59398 16.7476 -1.56697 16.3958 -1.54785 16.1553C-1.53829 16.035 -1.53073 15.942 -1.52539 15.8789C-1.52274 15.8476 -1.52098 15.8233 -1.51953 15.8066C-1.51881 15.7983 -1.51798 15.7917 -1.51758 15.7871C-1.5174 15.7851 -1.51769 15.7835 -1.51758 15.7822L-1.5166 15.7803V15.7783C-1.44069 14.9332 -1.13011 14.1262 -0.620117 13.4482C-0.110297 12.7705 0.578155 12.2482 1.36816 11.9404L36.3438 -1.68848L36.3447 -1.68945ZM7.43652 19.3516C7.26507 21.6659 6.98086 26.5967 7.18945 33.3584C7.48015 42.7809 8.86562 53.6796 12.1904 60.0879C15.9137 67.264 21.8487 73.0726 27.29 77.2979C31.8499 80.8386 35.9846 83.2039 38 84.2822C40.0154 83.2039 44.1501 80.8386 48.71 77.2979C54.1513 73.0726 60.0863 67.264 63.8096 60.0879C67.1344 53.6796 68.5199 42.7809 68.8105 33.3584C69.0191 26.5966 68.7339 21.6659 68.5625 19.3516L38 7.44141L7.43652 19.3516Z"
        fill="white"
        stroke="#4C725F"
        strokeWidth="4"
      />
      <path
        d="M58.5116 34.3263L55.6727 33.7381C54.8659 33.5723 54.1453 33.1677 53.5887 32.5689L47.6875 26.2436C46.8271 25.3238 45.6652 24.747 44.4172 24.6194L38.9279 24.0482C37.4289 23.8963 35.9136 24.1051 34.5445 24.6527C32.2094 25.5863 29.9994 26.909 27.9746 28.5836C27.2962 29.1426 27.2076 30.1704 27.7772 30.874L34.9101 39.7205C35.5431 40.5046 36.4311 40.5485 37.0511 40.3307C37.6726 40.1105 38.3372 39.5174 38.3372 38.5083V28.3033C38.3372 27.8548 38.7013 27.4908 39.1497 27.4908C39.5982 27.4908 39.9622 27.8548 39.9622 28.3033V38.5083C39.9622 40.0382 39.0319 41.3545 37.5922 41.8631C36.1541 42.3717 34.6046 41.9305 33.6451 40.741L28.7928 34.7236C28.0185 36.1406 27.1426 38.4603 26.9769 40.5306C26.6584 42.4399 25.8353 44.052 24.5865 45.2634C24.1437 45.7005 23.5944 46.214 22.968 46.8006C21.109 48.541 19.5976 49.9824 17 53C19 62 29 71.5 38.3372 76C51 66.5 46.0373 57.0796 44.0767 52.3021C43.4243 50.7185 43.5998 48.9286 44.5464 47.5165C45.4872 46.1108 47.0009 45.3048 48.6974 45.3048H52.4975C54.2249 45.3048 55.8832 44.4858 56.9321 43.1135L60.1943 38.8308C60.7907 38.0516 60.9418 37.0385 60.5997 36.1203C60.2561 35.1981 59.4753 34.5278 58.5116 34.328V34.3263Z"
        fill="white"
      />
    </svg>
  );
}

export function HealthCertificationsSection() {
  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col gap-8 sm:gap-[30px]">
      {/* PageHeader part */}
      <div className="border-b border-pet-stroke pb-5">
        <h1 className="font-poppins font-medium text-2xl leading-8 text-pet-black">
          Health Testing & Certifications
        </h1>
        <p className="font-poppins text-sm leading-[18px] text-[#9EA3AC] mt-1">
          Our commitment to breeding healthy puppies
        </p>
      </div>

      {/* GuaranteeBanner part */}
      <div
        className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 px-8 sm:px-12 py-8 sm:py-10 rounded-2xl"
        style={{ background: "linear-gradient(120deg, #638775 1.6%, #4B7761 100%)" }}
      >
        <div className="flex-shrink-0">
          <ShieldIcon />
        </div>
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <h2 className="font-poppins font-medium text-lg leading-6 text-white">
            All puppies come with a comprehensive 2-year{" "}
            <br className="hidden sm:block" />
            genetic health guarantee
          </h2>
          <p className="font-poppins font-normal text-xs text-[#C6E9D8]">
            We guarantee our puppies against genetic defects affecting the health of your pet.
            <br className="hidden sm:block" />
            All puppies are veterinarian examined, up-to-date on vaccinations, and microchipped before going home.
          </p>
        </div>
      </div>

      {/* CertificationsSection part */}
      <div className="flex flex-col gap-7">
        <h2 className="font-poppins font-medium text-2xl leading-8 text-pet-black">
          Certifications & Standards
        </h2>

        <div className="hover-lift flex flex-col gap-4 p-7 sm:p-[30px] rounded-2xl border border-pet-stroke bg-white shadow-card">
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="flex items-center justify-between px-5 py-3.5 rounded-md border border-[#E5E7EB]"
            >
              <span
                className={`font-poppins font-medium text-base leading-6 ${
                  cert.status === "verified" ? "text-pet-black" : "text-brand-gray"
                }`}
              >
                {cert.label}
              </span>
              {cert.status === "verified" ? <VerifiedPill /> : <NotApplicablePill />}
            </div>
          ))}
        </div>
      </div>

      {/* WhatsIncludedSection part */}
      <div className="flex flex-col gap-7">
        <h2 className="font-poppins font-medium text-2xl leading-8 text-pet-black">
          What&apos;s Included
        </h2>

        <div className="p-7 sm:p-[30px] rounded-2xl border border-pet-stroke bg-white shadow-card">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includedItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckIcon />
                <span className="font-[Arial,_-apple-system,_Roboto,_Helvetica,_sans-serif] font-normal text-base leading-6 text-[#364153]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}