"use client";

import React, { useState } from "react";
import { VetRecord } from "@/data/vet-types";

interface ContactVetCardProps {
  vet: VetRecord;
}

export function ContactVetCard({ vet }: ContactVetCardProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-4 rounded-[14px] border border-pet-stroke bg-white p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pet-check-green/10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-pet-check-dark"
            >
              <path
                d="M5 12l5 5L20 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-poppins text-lg font-semibold text-brand-dark">
            Request Sent!
          </h3>
          <p className="mt-2 font-poppins text-sm text-nav-text">
            {vet.name} will contact you shortly to confirm your appointment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-4 rounded-[14px] border border-pet-stroke bg-white p-6">
      <h3 className="text-[18px] font-medium leading-8 text-[#0A0A0A]">
        Request Appointment
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium text-nav-text">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full rounded-lg border border-pet-stroke px-3 py-2 font-poppins text-sm outline-none transition-shadow focus:border-pet-blue focus:shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-medium text-nav-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-pet-stroke px-3 py-2 font-poppins text-sm outline-none transition-shadow focus:border-pet-blue focus:shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-medium text-nav-text">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full rounded-lg border border-pet-stroke px-3 py-2 font-poppins text-sm outline-none transition-shadow focus:border-pet-blue focus:shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="petType" className="mb-1 block text-xs font-medium text-nav-text">
            Pet Type
          </label>
          <select
            id="petType"
            name="petType"
            required
            value={formData.petType}
            onChange={handleChange}
            className="w-full rounded-lg border border-pet-stroke px-3 py-2 font-poppins text-sm outline-none transition-shadow focus:border-pet-blue focus:shadow-sm"
          >
            <option value="">Select pet type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
            <option value="small-animal">Small Animal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-medium text-nav-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your pet and why you're visiting..."
            className="w-full resize-none rounded-lg border border-pet-stroke px-3 py-2 font-poppins text-sm outline-none transition-shadow focus:border-pet-blue focus:shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-brand-red py-3 font-poppins text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Request Appointment
        </button>

        <p className="text-center font-poppins text-xs text-nav-text">
          or call{" "}
          <a href={`tel:${vet.phone}`} className="text-pet-blue hover:underline">
            {vet.phone}
          </a>
        </p>
      </form>
    </div>
  );
}