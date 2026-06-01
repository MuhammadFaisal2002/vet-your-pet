function StatBadge({ count, label }: { count: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="12" fill="white" />
          <path
            d="M28.9991 20V21.9998M22.9997 20V21.9998M22.9997 21.0019H21.9998C21.4694 21.0019 20.9608 21.2125 20.5857 21.5876C20.2107 21.9626 20 22.4713 20 23.0016V27.0012C20 28.5924 20.6321 30.1183 21.7572 31.2434C22.8823 32.3685 24.4083 33.0006 25.9994 33.0006M25.9994 33.0006C27.5906 33.0006 29.1165 32.3685 30.2416 31.2434C31.3667 30.1183 31.9988 28.5924 31.9988 27.0012V23.0016C31.9988 22.4713 31.7881 21.9626 31.4131 21.5876C31.0381 21.2125 30.5294 21.0019 29.999 21.0019H28.9991M25.9994 33.0006C25.9994 34.5918 26.6315 36.1177 27.7566 37.2428C28.8817 38.3679 30.4077 39 31.9988 39C33.59 39 35.1159 38.3679 36.2411 37.2428C37.3662 36.1177 37.9982 34.5918 37.9982 33.0006V30.0009M40 27.9992C40 29.1036 39.1047 29.999 38.0002 29.999C36.8957 29.999 36.0004 29.1036 36.0004 27.9992C36.0004 26.8947 36.8957 25.9994 38.0002 25.9994C39.1047 25.9994 40 26.8947 40 27.9992Z"
            stroke="#1F986E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-[#25272C] text-2xl font-semibold leading-[140%]">{count}</span>
        <span className="text-[#363941] text-sm font-normal leading-[140%]">{label}</span>
      </div>
    </div>
  );
}

export default function VetHeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[520px] flex flex-col">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #FFF 0%, #EDF0F0 100%)" }}
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/bca6420d4d43c06e74289207bcfef5d9fbb73989?width=3840"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
      />

      {/* Content row */}
      <div className="relative z-10 flex-1 flex max-w-[1170px] mx-auto w-full px-6 lg:px-8 xl:px-0">

        {/* Left: text content */}
        <div className="animate-on-scroll animate-fade-in-left flex flex-col flex-1 min-w-0 py-5">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#9C9EA3] tracking-[-0.05em]">Veterinarians</span>
            <svg width="3" height="6" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L3 3L0 6" stroke="#9C9EA3" strokeWidth="1" />
            </svg>
            <span className="text-xs font-medium text-[#D93F53] tracking-[-0.05em]">St. Augustine, FL</span>
          </nav>

          {/* Title + description */}
          <div className="flex flex-col gap-[30px] mt-6 max-w-[475px]">
            {/* Heading */}
            <div className="flex flex-col">
              <h1 className="text-[#363941] text-4xl lg:text-[44px] font-medium leading-[126%] tracking-[-0.025em]">
                Veterinarians in
              </h1>
              <div className="flex items-center gap-[15px] flex-wrap">
                <svg
                  width="25"
                  height="31"
                  viewBox="0 0 25 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4391 30.6888C16.3453 28.1995 25 20.1394 25 12.4002C25 9.11143 23.683 5.9574 21.3388 3.63192C18.9946 1.30644 15.8152 0 12.5 0C9.18479 0 6.00537 1.30644 3.66117 3.63192C1.31696 5.9574 0 9.11143 0 12.4002C0 20.1394 8.65469 28.1995 11.5609 30.6888C11.8317 30.8908 12.1613 31 12.5 31C12.8387 31 13.1683 30.8908 13.4391 30.6888ZM12.5061 17.0381C15.0949 17.0381 17.1936 14.9562 17.1936 12.388C17.1936 9.81989 15.0949 7.73799 12.5061 7.73799C9.91727 7.73799 7.8186 9.81989 7.8186 12.388C7.8186 14.9562 9.91727 17.0381 12.5061 17.0381Z"
                    fill="#D93F53"
                  />
                </svg>
                <span className="text-[#D93F53] text-4xl lg:text-[44px] font-medium leading-[126%] tracking-[-0.025em]">
                  St. Augustine, FL
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-5">
              <p className="text-[#2C2F36] text-base font-medium leading-[160%]">
                Find Trusted Local Veterinarians and Animal Clinics in the Augustine Community
              </p>
              <p className="text-[#727781] text-sm font-normal leading-[140%]">
                Looking for veterinarians in St. Augustine to take care of your dog, cat, puppy, or family pet?
                This page helps pet parents quickly find and compare local veterinary clinics, animal hospitals,
                and independent vets across St. Augustine, FL.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-5 mt-auto pt-10 pb-8">
            <StatBadge count="4" label="Trusted Clinics" />
          </div>
        </div>

        {/* Right: vet image */}
        <div className="hidden lg:flex items-end justify-center flex-shrink-0 self-stretch pl-10">
          <div className="animate-on-scroll animate-fade-in-right">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/20d229edf9347e273ad0f752bdf303067397a13e?width=976"
              alt="Veterinarian holding a dog"
              className="w-[400px] xl:w-[488px] h-auto object-contain object-bottom max-h-[488px] self-end"
            />
          </div>
        </div>

      </div>
    </section>
  );
}