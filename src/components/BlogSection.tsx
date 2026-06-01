import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    image: "/images/blog-dog-show.png",
    date: "Nov 20, 2025",
    author: "Jessica Parker",
    title: "Preparing for Your First Dog Show",
    description:
      "Everything you need to know about entering your first AKC dog show, from grooming essentials to ring etiquette and competition basics.",
    href: "/blog",
  },
  {
    image: "https://images.pexels.com/photos/30502950/pexels-photo-30502950.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Nov 20, 2025",
    author: "Jessica Parker",
    title: "Active Adventures with Your Dog",
    description:
      "Discover the best outdoor activities, hiking trails, and adventure sports you can enjoy with your canine companion throughout the year.",
    href: "/blog",
  },
  {
    image: "https://images.pexels.com/photos/33385817/pexels-photo-33385817.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Nov 20, 2025",
    author: "Jessica Parker",
    title: "Choosing the Right Breed for You",
    description:
      "Finding the perfect dog breed that matches your lifestyle, living situation, and activity level is crucial for a harmonious relationship.",
    href: "/blog",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-brand-dark leading-tight mb-2">
              Learn and Explore
            </h2>
            <p className="font-poppins text-nav-text text-sm md:text-base">
              Expert advice, breed guides, and valuable insights for dog owners
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 font-poppins font-medium text-sm text-white bg-[#1E3A5F] rounded-full px-6 py-3 hover:opacity-90 transition-opacity self-start sm:self-center whitespace-nowrap"
          >
            View All Articles
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.title} className="flex flex-col">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-poppins text-xs text-nav-text">{article.date}</span>
                <span className="font-poppins text-xs text-nav-text">{article.author}</span>
              </div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-xl text-brand-dark leading-snug mb-3">
                {article.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-sm text-nav-text leading-relaxed mb-4 flex-1">
                {article.description}
              </p>

              {/* Read More */}
              <Link
                href={article.href}
                className="inline-flex items-center gap-1 font-poppins font-medium text-sm text-brand-red hover:opacity-80 transition-opacity"
              >
                Read More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
