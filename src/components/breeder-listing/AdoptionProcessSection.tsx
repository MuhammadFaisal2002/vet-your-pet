const steps = [
  {
    number: 1,
    title: "Submit Application",
    description:
      "Fill out our puppy application form to tell us about your family and what you're looking for in a Goldendoodle.",
  },
  {
    number: 2,
    title: "Phone Interview",
    description:
      "We'll schedule a call to get to know you better, answer your questions, and discuss our upcoming litters.",
  },
  {
    number: 3,
    title: "Reservation Deposit",
    description:
      "Reserve your spot on our waiting list with a $500 refundable deposit. This secures your place for puppy selection.",
  },
  {
    number: 4,
    title: "Puppy Selection",
    description:
      "At 6-7 weeks, we'll help match you with the perfect puppy based on temperament, personality, and your preferences.",
  },
  {
    number: 5,
    title: "Go Home Day!",
    description:
      "Take your puppy home at 8 weeks with health records, vaccination records, microchip, starter food, and lifetime support.",
  },
];

const ArrowDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 self-center"
  >
    <path
      d="M10 4.16699L10 15.8337"
      stroke="#A5ABB5"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.832 10L9.9987 15.8333L4.16537 10"
      stroke="#A5ABB5"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DollarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M10 1.66699V18.3337"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 4.16699H7.91667C7.14312 4.16699 6.40125 4.47428 5.85427 5.02126C5.30729 5.56825 5 6.31011 5 7.08366C5 7.85721 5.30729 8.59907 5.85427 9.14605C6.40125 9.69303 7.14312 10.0003 7.91667 10.0003H12.0833C12.8569 10.0003 13.5987 10.3076 14.1457 10.8546C14.6927 11.4016 15 12.1434 15 12.917C15 13.6905 14.6927 14.4324 14.1457 14.9794C13.5987 15.5264 12.8569 15.8337 12.0833 15.8337H5"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M6.66797 1.66699V5.00033"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.332 1.66699V5.00033"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 8.33301H17.5"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M12.4987 1.66699H4.9987C4.55667 1.66699 4.13275 1.84259 3.82019 2.15515C3.50763 2.46771 3.33203 2.89163 3.33203 3.33366V16.667C3.33203 17.109 3.50763 17.5329 3.82019 17.8455C4.13275 18.1581 4.55667 18.3337 4.9987 18.3337H14.9987C15.4407 18.3337 15.8646 18.1581 16.1772 17.8455C16.4898 17.5329 16.6654 17.109 16.6654 16.667V5.83366L12.4987 1.66699Z"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.668 1.66699V5.00033C11.668 5.44235 11.8436 5.86628 12.1561 6.17884C12.4687 6.4914 12.8926 6.66699 13.3346 6.66699H16.668"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33464 7.5H6.66797"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3346 10.833H6.66797"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3346 14.167H6.66797"
      stroke="#4962AA"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
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

const includedItems = [
  { icon: <DollarIcon />, label: "Deposit: $500 (refundable)" },
  { icon: <CalendarIcon />, label: "Puppies go home at 8 weeks" },
  { icon: <FileIcon />, label: "Contract & health guarantee provided" },
  { icon: <CheckIcon />, label: "Transport options available" },
];

export function AdoptionProcessSection() {
  return (
    <div className="animate-on-scroll animate-fade-in-up flex flex-col gap-8">
      {/* Page Header */}
      <div className="border-b border-pet-stroke pb-5">
        <h1 className="font-poppins font-medium text-2xl text-pet-black leading-8">
          Adoption Process
        </h1>
        <p className="font-poppins text-sm text-[#9EA3AC] mt-[10px]" style={{ lineHeight: "160%" }}>
          How to bring home your new puppy
        </p>
      </div>

      {/* Adoption Steps */}
      <div className="stagger-children rounded-[14px] border border-pet-stroke bg-white shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)] p-6 sm:p-8">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div className="flex items-start gap-5">
              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4962AA] flex items-center justify-center">
                <span className="font-poppins font-medium text-xl text-white leading-7">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[7px] flex-1 min-w-0">
                <h3 className="font-poppins font-semibold text-lg text-[#4962AA] leading-7">
                  {step.title}
                </h3>
                <p className="font-poppins text-sm text-[#576271] leading-6">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Arrow separator */}
            {index < steps.length - 1 && (
              <div className="flex justify-start pl-[22px] mt-4">
                <ArrowDownIcon />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* What's Included */}
      <div className="flex flex-col gap-[30px]">
        <h2 className="font-poppins font-medium text-2xl text-pet-black leading-8">
          What's Included
        </h2>
        <div className="rounded-[14px] border border-pet-stroke bg-white shadow-[10px_10px_60px_0_rgba(0,0,0,0.04)] p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 py-[10px]">
                {item.icon}
                <span className="text-sm text-[#364153] leading-5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
