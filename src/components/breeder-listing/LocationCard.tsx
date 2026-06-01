import React from "react";
import { BreederRecord } from "@/data/breeders";

export function LocationCard({ breeder }: { breeder?: BreederRecord }) {
  const address = breeder ? `${breeder.city}, ${breeder.state}` : "1234 Valley Road, Austin, TX 78701";

  return (
    <div className="animate-on-scroll animate-fade-in-right delay-400 flex flex-col gap-6 rounded-[14px] border border-pet-stroke bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-medium leading-8 text-[#0A0A0A]">
          Location
        </h3>
        <div className="flex items-center gap-[10px]">
          <span className="cursor-pointer text-[14px] font-medium text-pet-blue hover:underline">
            Open map
          </span>
          <svg
            width="4"
            height="8"
            viewBox="0 0 4 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.49692e-07 8L4 4L0 1.74845e-07" stroke="#4962AA" />
          </svg>
        </div>
      </div>

      {/* Map image */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-[10px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cf9d127c069d649d710c6fbbf3761b450fa067ae?width=658"
          alt="Map showing breeder location"
          className="h-full w-full object-cover"
        />
        {/* Map pin overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 2.4375C15.9457 2.44153 12.5381 3.85527 10.0248 6.36855C7.51152 8.88184 6.09778 12.2894 6.09375 15.8438C6.09375 27.3152 18.2813 35.979 18.8007 36.3416C19.0057 36.4852 19.2498 36.5622 19.5 36.5622C19.7502 36.5622 19.9943 36.4852 20.1993 36.3416C20.7187 35.979 32.9062 27.3152 32.9062 15.8438C32.9022 12.2894 31.4885 8.88184 28.9752 6.36855C26.4619 3.85527 23.0543 2.44153 19.5 2.4375ZM19.5 10.9688C20.4642 10.9688 21.4067 11.2547 22.2084 11.7903C23.0101 12.326 23.6349 13.0874 24.0039 13.9782C24.3729 14.869 24.4694 15.8492 24.2813 16.7948C24.0932 17.7405 23.6289 18.6091 22.9471 19.2909C22.2654 19.9727 21.3967 20.437 20.4511 20.6251C19.5054 20.8132 18.5252 20.7166 17.6344 20.3477C16.7436 19.9787 15.9823 19.3538 15.4466 18.5522C14.9109 17.7505 14.625 16.8079 14.625 15.8438C14.625 14.5508 15.1386 13.3108 16.0529 12.3966C16.9671 11.4824 18.2071 10.9688 19.5 10.9688Z"
              fill="#D93F53"
            />
          </svg>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-[10px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[3px] flex-shrink-0"
        >
          <path
            d="M9 4.21875C8.38811 4.21875 7.78997 4.4002 7.2812 4.74014C6.77244 5.08009 6.37591 5.56326 6.14175 6.12857C5.90759 6.69388 5.84632 7.31593 5.9657 7.91606C6.08507 8.51619 6.37972 9.06744 6.81239 9.50011C7.24506 9.93278 7.79631 10.2274 8.39644 10.3468C8.99657 10.4662 9.61862 10.4049 10.1839 10.1708C10.7492 9.93659 11.2324 9.54006 11.5724 9.03129C11.9123 8.52253 12.0938 7.92439 12.0938 7.3125C12.0928 6.49227 11.7666 5.7059 11.1866 5.12592C10.6066 4.54593 9.82023 4.21968 9 4.21875ZM9 8.71875C8.72187 8.71875 8.44999 8.63627 8.21873 8.48175C7.98747 8.32723 7.80723 8.10761 7.70079 7.85065C7.59436 7.59369 7.56651 7.31094 7.62077 7.03815C7.67503 6.76537 7.80896 6.5148 8.00563 6.31813C8.2023 6.12146 8.45287 5.98753 8.72565 5.93327C8.99844 5.87901 9.28119 5.90686 9.53815 6.01329C9.79511 6.11973 10.0147 6.29997 10.1693 6.53123C10.3238 6.76249 10.4062 7.03437 10.4062 7.3125C10.4062 7.68546 10.2581 8.04315 9.99437 8.30687C9.73065 8.57059 9.37296 8.71875 9 8.71875ZM9 0.84375C7.28495 0.845611 5.64068 1.52774 4.42796 2.74046C3.21524 3.95318 2.53311 5.59745 2.53125 7.3125C2.53125 12.7519 8.27156 16.8328 8.51625 17.0037C8.65805 17.1029 8.82693 17.1561 9 17.1561C9.17307 17.1561 9.34195 17.1029 9.48375 17.0037C10.571 16.2024 11.5657 15.2827 12.4495 14.2615C14.4246 11.9932 15.4688 9.58852 15.4688 7.3125C15.4669 5.59745 14.7848 3.95318 13.572 2.74046C12.3593 1.52774 10.715 0.845611 9 0.84375ZM11.2008 13.128C10.5304 13.8981 9.79398 14.6082 9 15.2501C8.20602 14.6082 7.46962 13.8981 6.79922 13.128C5.625 11.7682 4.21875 9.65461 4.21875 7.3125C4.21875 6.04443 4.72249 4.8283 5.61915 3.93165C6.5158 3.03499 7.73193 2.53125 9 2.53125C10.2681 2.53125 11.4842 3.03499 12.3809 3.93165C13.2775 4.8283 13.7812 6.04443 13.7812 7.3125C13.7812 9.65461 12.375 11.7682 11.2008 13.128Z"
            fill="#474B52"
          />
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-normal leading-6 text-pet-gray-darker">
            {address}
          </span>
          <span className="text-[12px] font-normal leading-5 text-pet-placeholder">
            Visitors welcome by appointment
          </span>
        </div>
      </div>
    </div>
  );
}
