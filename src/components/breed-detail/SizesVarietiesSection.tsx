"use client";

const varieties = [
  { img: "/images/size-mini.png", alt: "Mini Goldendoodle" },
  { img: "/images/size-medium.png", alt: "Medium Goldendoodle" },
  { img: "/images/size-standard.png", alt: "Standard Goldendoodle" },
  { img: "/images/size-english.png", alt: "English Goldendoodle" },
];

export default function SizesVarietiesSection() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">

        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[#25272C] font-semibold text-[28px] sm:text-[34px] leading-[120%] tracking-[-0.4px]">
            Goldendoodle Sizes and Varieties
          </h2>
          <p className="text-[#53565A] text-[14px] leading-[160%]">
            Options for nearly every type of family
          </p>
        </div>

        {/* Image cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {varieties.map((v, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={v.img}
                alt={v.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Bottom paragraph */}
        <p className="text-center text-[#53565A] text-[13px] leading-[170%] max-w-[700px] mx-auto">
          Each type of Goldendoodle has its own charm, but all share the same loving disposition and loyal nature. Whether you&apos;re seeking a tiny lap companion or a playful jogging partner, there&apos;s a Goldendoodle that will fit perfectly into your family&apos;s life.
        </p>

      </div>
    </section>
  );
}
