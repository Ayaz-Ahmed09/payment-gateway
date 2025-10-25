"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProductsSectionProps {
  isDark: boolean;
}

export default function ProductsSection({ isDark }: ProductsSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      label: "OUR FLAGSHIP PRODUCT",
      title: "PayLand Pro",
      description: "Complete payment solution",
      image: "💳",
    },
    {
      id: 2,
      label: "SUPERCHARGED PAYMENTS",
      title: "PayLand Direct",
      description: "API-first payment platform",
      image: "⚡",
    },
    {
      id: 3,
      label: "PayLand POWERED",
      title: "Hosted Fields",
      description: "Secure payment forms",
      image: "🔒",
    },
    {
      id: 4,
      label: "ENTERPRISE SECURITY",
      title: "PayLand Safe",
      description: "Enterprise security",
      image: "🛡️",
    },
  ];

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Our Products
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-smooth ${
              isDark ? "text-white/60" : "text-maroon-700"
            }`}
          >
            Comprehensive payment solutions designed for every business need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-3xl backdrop-blur-xl p-8 sm:p-12 overflow-hidden 
    transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
      isDark
        ? "bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        : "bg-maroon-50 border border-maroon-200 hover:border-maroon-600 hover:bg-maroon-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    }`}
            >
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/20"
                    : "bg-gradient-to-br from-maroon-500/0 to-maroon-500/0 group-hover:from-maroon-500/5 group-hover:to-maroon-500/10"
                }`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-3 transition-smooth ${
                    isDark ? "text-orange-400" : "text-maroon-600"
                  }`}
                >
                  {product.label}
                </div>
                <h3
                  className={`text-3xl sm:text-4xl font-bold mb-4 transition-smooth ${
                    isDark ? "text-white" : "text-maroon-900"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`mb-8 transition-smooth ${
                    isDark ? "text-white/60" : "text-maroon-700"
                  }`}
                >
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-6xl">{product.image}</div>
                  <button
                    className={`p-3 rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                      isDark
                        ? "bg-white/10 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500"
                        : "bg-maroon-100 border border-maroon-300 text-maroon-900 hover:bg-maroon-600 hover:border-maroon-600 hover:text-white"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
