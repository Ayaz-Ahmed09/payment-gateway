interface BrandsSectionProps {
  isDark: boolean
}

export default function BrandsSection({ isDark }: BrandsSectionProps) {
  const brands = [
    { name: "Yahoo Finance", logo: "YF" },
    { name: "Fintech News", logo: "FN" },
    { name: "AP", logo: "AP" },
    { name: "Gambling Insider", logo: "GI" },
    { name: "TechBullion", logo: "TB" },
  ]

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-smooth ${
        isDark ? "border-white/10" : "border-maroon-200"
      } border-t`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-center text-sm font-semibold mb-12 uppercase tracking-wider transition-smooth ${
            isDark ? "text-white/60" : "text-maroon-600"
          }`}
        >
          As seen on
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-smooth">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-smooth ${
                  isDark ? "bg-white/10 text-white/80" : "bg-maroon-100 text-maroon-700"
                }`}
              >
                {brand.logo}
              </div>
              <span
                className={`font-medium hidden sm:inline transition-smooth ${
                  isDark ? "text-white/60" : "text-maroon-600"
                }`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
        <div className={`mt-12 border-t transition-smooth ${isDark ? "border-white/10" : "border-maroon-200"}`}></div>
      </div>
    </section>
  )
}
