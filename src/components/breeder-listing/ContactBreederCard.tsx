"use client";

import React, { useEffect, useState } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  type?: string;
  isTextarea?: boolean;
  placeholder?: string;
}

function FormField({
  label,
  required,
  type = "text",
  isTextarea,
  placeholder = "Enter",
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-[5px]" suppressHydrationWarning>
      <div className="flex items-start gap-[2px]">
        <label className="text-[12px] font-normal text-pet-gray">{label}</label>
        {required && (
          <span className="font-manrope text-[12px] font-normal text-pet-red">
            *
          </span>
        )}
      </div>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className="transition-all duration-200 focus:shadow-md w-full flex-1 resize-none rounded-lg border border-pet-input-border bg-pet-input-bg px-[15px] py-[10px] text-[14px] leading-[140%] text-pet-placeholder outline-none focus:border-pet-blue focus:ring-0"
          defaultValue=""
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="transition-all duration-200 focus:shadow-md w-full rounded-lg border border-pet-input-border bg-pet-input-bg px-[15px] py-[10px] text-[14px] leading-[140%] text-pet-placeholder outline-none focus:border-pet-blue focus:ring-0"
        />
      )}
    </div>
  );
}

export function ContactBreederCard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="animate-on-scroll animate-fade-in-right flex flex-col rounded-[14px] border border-pet-stroke bg-pet-blue-light pb-[30px]" suppressHydrationWarning>
      {/* Header */}
      <div className="flex flex-col gap-[10px] px-[30px] py-6">
        <h3 className="text-[18px] font-medium text-pet-black">
          Contact Breeder
        </h3>
        <div className="flex items-center gap-[5px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.25 8.46563L9.67477 7.31118L9.66493 7.3068C9.49753 7.23464 9.31472 7.20558 9.1332 7.2223C8.95169 7.23902 8.77726 7.30098 8.62586 7.4025C8.60464 7.41671 8.5842 7.43205 8.56461 7.44844L7.34454 8.4875C6.6336 8.10196 5.89914 7.37352 5.51305 6.67133L6.55539 5.43211C6.57215 5.41211 6.58767 5.39111 6.60188 5.36922C6.70074 5.21837 6.76077 5.04541 6.77661 4.86574C6.79245 4.68608 6.76361 4.50528 6.69266 4.33946C6.69098 4.33628 6.68951 4.33299 6.68829 4.32961L5.53438 1.75C5.43966 1.53427 5.27801 1.35477 5.07334 1.23806C4.86867 1.12134 4.63187 1.07362 4.39797 1.10196C3.60411 1.20624 2.87536 1.59593 2.34781 2.19825C1.82027 2.80057 1.53001 3.57432 1.53125 4.375C1.53125 8.83805 5.16196 12.4688 9.625 12.4688C10.4257 12.47 11.1994 12.1797 11.8018 11.6522C12.4041 11.1247 12.7938 10.3959 12.8981 9.60204C12.9264 9.36814 12.8787 9.13133 12.762 8.92667C12.6452 8.722 12.4657 8.56035 12.25 8.46563ZM9.625 11.1563C7.82717 11.1541 6.10359 10.4389 4.83233 9.16767C3.56107 7.89641 2.84592 6.17284 2.84375 4.375C2.8425 3.92192 2.99632 3.48204 3.27966 3.12847C3.56299 2.7749 3.95878 2.52892 4.40125 2.43141L5.43047 4.72829L4.38266 5.97625C4.36572 5.99644 4.35002 6.01762 4.33563 6.03969C4.23235 6.19749 4.17163 6.37932 4.15937 6.56752C4.1471 6.75571 4.18371 6.94388 4.26563 7.11375C4.78079 8.16813 5.84227 9.2225 6.90758 9.73875C7.07859 9.81983 7.26771 9.85514 7.45645 9.84124C7.64519 9.82734 7.82709 9.7647 7.98438 9.65946C8.00553 9.64519 8.0258 9.62967 8.04508 9.61297L9.27172 8.57008L11.5686 9.59875C11.4711 10.0412 11.2251 10.437 10.8715 10.7204C10.518 11.0037 10.0781 11.1575 9.625 11.1563Z"
              fill="#509874"
            />
          </svg>
          <span className="text-[12px] font-medium leading-5 text-pet-green">
            Typically responds within 24 hours
          </span>
        </div>
      </div>

      {/* Form — client-only render to prevent hydration mismatch from browser extensions */}
      {mounted && (
      <div className="flex flex-col gap-6 px-[30px]">
        <div className="flex flex-col gap-4">
          <FormField label="First Name" required />
          <FormField label="Email" required type="email" />
          <FormField label="Phone Number" required type="tel" />
          <FormField label="Message" required isTextarea />
        </div>

        {/* Send Message Button */}
        <button className="btn-animate flex w-full items-center justify-center gap-[5px] rounded-full bg-pet-blue px-[34px] py-3 transition-opacity hover:opacity-90">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2074 1.79242C14.0817 1.66675 13.9247 1.57688 13.7527 1.53206C13.5807 1.48724 13.3998 1.48909 13.2287 1.53742H13.2193L1.22307 5.17742C1.02832 5.23355 0.85522 5.34753 0.726711 5.50426C0.598201 5.66099 0.52035 5.85307 0.503473 6.05505C0.486597 6.25702 0.531492 6.45936 0.632209 6.63524C0.732927 6.81113 0.884711 6.95225 1.06745 7.03992L6.37495 9.62492L8.9562 14.9293C9.03648 15.1006 9.16413 15.2454 9.32405 15.3465C9.48397 15.4476 9.66949 15.5009 9.8587 15.4999C9.88745 15.4999 9.9162 15.4987 9.94495 15.4962C10.1468 15.4798 10.3388 15.4022 10.4952 15.2736C10.6516 15.145 10.7649 14.9716 10.8199 14.7768L14.4574 2.78055C14.4574 2.77742 14.4574 2.7743 14.4574 2.77117C14.5064 2.60052 14.5091 2.41992 14.4651 2.24791C14.4212 2.0759 14.3322 1.91869 14.2074 1.79242ZM9.86432 14.4905L9.8612 14.4993V14.4949L7.35745 9.35117L10.3574 6.35117C10.4473 6.25664 10.4966 6.13077 10.4949 6.00038C10.4932 5.87 10.4407 5.74543 10.3485 5.65323C10.2563 5.56103 10.1317 5.5085 10.0014 5.50683C9.87098 5.50516 9.7451 5.55449 9.65057 5.6443L6.65057 8.6443L1.50495 6.14055H1.50057H1.50932L13.4999 2.49992L9.86432 14.4905Z"
              fill="white"
            />
          </svg>
          <span className="text-[14px] font-medium leading-5 text-white">
            Send Message
          </span>
        </button>
      </div>
      )}
    </div>
  );
}
