"use client";

import { useEffect, useState } from "react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  isDark: boolean;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow Inc",
    text: "PayLand transformed our payment infrastructure. The integration was seamless and our transaction success rate improved by 23%.",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Ventures",
    text: "The API documentation is exceptional. Our team was able to integrate PayLand in just 2 days. Highly recommended!",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Founder",
    company: "Global Commerce",
    text: "Outstanding customer support and reliability. PayLand handles our high-volume transactions with zero downtime.",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Park",
    role: "Product Manager",
    company: "NextGen Payments",
    text: "The security features are top-notch. Our customers feel confident knowing their data is protected with PayLand.",
    avatar: "DP",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Operations Lead",
    company: "Swift Transactions",
    text: "Best decision we made for our business. PayLand's analytics dashboard gives us real-time insights into our payments.",
    avatar: "LA",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Finance Director",
    company: "Enterprise Solutions",
    text: "PayLand's pricing is transparent and competitive. We've reduced our payment processing costs significantly.",
    avatar: "JW",
  },
];

export default function TestimonialsSection({
  isDark,
}: TestimonialsSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (testimonials.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Loved by
            <br />
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-orange-400 to-orange-600"
                  : "bg-gradient-to-r from-orange-400 to-orange-700"
              }`}
            >
              Industry Leaders
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-smooth ${
              isDark ? "text-white/60" : "text-maroon-700"
            }`}
          >
            See what our customers have to say about PayLand
          </p>
        </div>

        <div className="relative h-96 overflow-hidden">
          {/* Top blur gradient */}
          <div
            className={`absolute top-0 left-0 right-0 h-20 z-20 pointer-events-none transition-smooth ${
              isDark
                ? "bg-gradient-to-b from-black via-black/50 to-transparent"
                : "bg-gradient-to-b from-white via-white/50 to-transparent"
            }`}
          ></div>

          {/* Bottom blur gradient */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-20 z-20 pointer-events-none transition-smooth ${
              isDark
                ? "bg-gradient-to-t from-black via-black/50 to-transparent"
                : "bg-gradient-to-t from-white via-white/50 to-transparent"
            }`}
          ></div>

          {/* Scrolling container */}
          <div
            className="flex flex-col gap-4 transition-transform"
            style={{
              transform: `translateY(-${scrollPosition}px)`,
              transitionDuration: "0ms",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 rounded-2xl backdrop-blur-xl p-6 shadow-lg transition-smooth ${
                  isDark
                    ? "bg-white/5 border border-white/10"
                    : "bg-maroon-50/50 border border-maroon-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-smooth ${
                      isDark
                        ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                        : "bg-gradient-to-br from-maroon-600 to-maroon-800 text-white"
                    }`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm leading-relaxed mb-3 transition-smooth ${
                        isDark ? "text-white/80" : "text-maroon-800"
                      }`}
                    >
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p
                        className={`font-semibold transition-smooth ${
                          isDark ? "text-white" : "text-maroon-900"
                        }`}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className={`text-xs transition-smooth ${
                          isDark ? "text-white/50" : "text-maroon-600"
                        }`}
                      >
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
