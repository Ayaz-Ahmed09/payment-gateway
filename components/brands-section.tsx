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
    { name: "Bloomberg", logo: "BB" },
    { name: "Reuters", logo: "RT" },
    { name: "Forbes", logo: "FB" },
    { name: "Business Insider", logo: "BI" },
    { name: "CoinDesk", logo: "CD" },
    { name: "The Verge", logo: "TV" },
    { name: "Mashable", logo: "MS" },
    { name: "Wired", logo: "WD" },
    { name: "Investopedia", logo: "IV" },
    { name: "MarketWatch", logo: "MW" },
    { name: "CNBC", logo: "CB" },
    { name: "Financial Times", logo: "FT" },
    { name: "The Wall Street Journal", logo: "WSJ" },
    { name: "Moneycontrol", logo: "MC" },
    { name: "CryptoSlate", logo: "CS" },
  ]

  
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden transition-smooth ${
        isDark ? "border-white/10" : "border-maroon-200"
      }`}
    >
      {/* Glassy effect background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Top left foggy corner */}
        <div className={`absolute top-0 left-0 w-48 h-48 bg-gray-400/10 ${ isDark ? "bg-gray-200/10" : "bg-white/50"} rounded-full blur-2xl opacity-60`} />
        {/* Bottom right foggy corner */}
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-maroon-200/30 dark:bg-white/10 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className={`text-center text-sm font-semibold mb-12 uppercase tracking-wider transition-smooth ${
            isDark ? "text-white/60" : "text-maroon-600"
          }`}
        >
          Trusted by leading companies
        </h2>
        <div className="w-full overflow-x-hidden">
          <div
            className="flex items-center gap-12 transform-3d md:gap-16 animate-slider"
            style={{
              width: "max-content",
              animation: "slider-scroll 40s linear infinite"
            }}
          >
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={brand.name + idx}
                className="flex items-center gap-3 opacity-70 font-family-poppins transform-3d hover:opacity-100 transition-all duration-400 backdrop-blur-md bg-white/0 shadow-xs dark:bg-white/10 rounded-lg shadow-orange-500 hover:scale-105 min-w-[160px]"
                style={{ boxShadow: isDark ? "0 4px 24px 0 rgba(255,255,255,0.08)" : "0 4px 24px 0 rgba(128,0,32,0.08)" }}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-smooth backdrop-blur-lg ${
                    isDark ? "bg-white/10 text-white/80" : "bg-maroon-100 text-maroon-700"
                  }`}
                  aria-label={brand.name + " logo"}
                >
                  {brand.logo}
                </div>
                <span
                  className={`font-medium hidden font-poppins shadow-2xs shadow-orange-500 tracking-wide transform-3d translate-x-0 sm:inline transition-smooth ${
                    isDark ? "text-white/60" : "text-maroon-600"
                  }`}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={`mt-12 border-t transition-smooth ${isDark ? "border-white/10" : "border-maroon-200"}`}></div>
      </div>
      {/* Slider keyframes */}
      <style jsx>{`
        @keyframes slider-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
