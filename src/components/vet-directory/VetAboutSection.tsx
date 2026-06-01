const AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
    alt: "Vet professional",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
    alt: "Vet professional",
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face",
    alt: "Vet professional",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop&crop=face",
    alt: "Happy dog",
  },
  {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&h=80&fit=crop&crop=face",
    alt: "Vet professional",
  },
];

function PetProsLogo() {
  return (
    <div className="flex items-baseline gap-0">
      <span className="text-nav-text text-xl font-semibold tracking-[-0.03em]">the</span>
      <span className="text-brand-dark text-xl font-semibold tracking-[-0.03em]">petpros</span>
      <span className="text-brand-red text-xl font-bold">.</span>
    </div>
  );
}

export default function VetAboutSection() {
  return (
    <section className="animate-on-scroll animate-fade-in-up bg-[#F2F3F5] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">

          {/* Left column */}
          <div className="flex flex-col gap-6 lg:w-[300px] xl:w-[340px] flex-shrink-0">
            {/* Logo */}
            <PetProsLogo />

            {/* Horizontal rule */}
            <div className="w-[60px] h-px bg-[#C8CDD5]" />

            {/* Avatar stack */}
            <div className="flex items-center">
              {AVATARS.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#F2F3F5]"
                  style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: AVATARS.length - i }}
                />
              ))}
            </div>

            {/* Caption */}
            <p className="text-nav-text text-xs font-normal leading-[150%] max-w-[220px]">
              Local veterinarians who care for thousands of pets in your community every year.
            </p>
          </div>

          {/* Vertical divider – desktop only */}
          <div className="hidden lg:block w-px bg-[#D5D8DE] mx-12 xl:mx-16 self-stretch" />

          {/* Right column */}
          <div className="flex flex-col gap-5 flex-1 min-w-0 justify-center">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 font-poppins font-medium text-xs text-brand-red mb-4 tracking-wide uppercase">
              Compassionate Care
            </p>

            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark">
              Compassionate veterinary care, close to home.
            </h2>
            <p className="text-nav-text text-sm lg:text-[15px] font-normal leading-[165%] max-w-[620px]">
              Our directory features practices filled with passionate animal lovers, highly
              trained teams, knowledgeable staff, and veterinary professionals who provide
              compassionate service and the highest level of care. Whether you're a new client
              searching for a welcoming practice or a long-time resident looking for a new
              veterinarian, you can browse listings here and feel confident knowing your pet
              will be in good hands.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}