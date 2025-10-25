"use client"

interface DetailedShowcaseProps {
  isDark: boolean
}

export default function DetailedShowcase({ isDark }: DetailedShowcaseProps) {
  const showcases = [
    {
      id: 1,
      label: "PayLand POWERED",
      title: "Hosted Payment Fields",
      description:
        "Our behind-the-scenes integration allowing your business to use our Credit Card Payment Fields, embedded in your existing forms. Your cashier, our payment fields.",
      buttonText: "Learn More",
      image: "📱",
      accentColor: isDark ? "from-blue-500/20 to-blue-600/20" : "from-maroon-300/20 to-maroon-400/20",
    },
    {
      id: 2,
      label: "YOUR CASHIER SUPERCHARGED",
      title: "PayLand Direct",
      description:
        "Built for businesses with their own cashier page, connect directly with our API and expand your payment solutions and global presence with ease.",
      buttonText: "Learn More",
      image: "💻",
      accentColor: isDark ? "from-purple-500/20 to-purple-600/20" : "from-maroon-300/20 to-maroon-400/20",
    },
  ]

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 transition-smooth ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcases.map((showcase) => (
            <div
              key={showcase.id}
              className={`group relative rounded-3xl backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-orange-500/50"
                  : "bg-maroon-50 border border-maroon-200 hover:border-maroon-600"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${showcase.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-300`}
              ></div>

              <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 transition-smooth ${
                      isDark ? "text-orange-400" : "text-maroon-600"
                    }`}
                  >
                    {showcase.label}
                  </div>
                  <h3
                    className={`text-3xl sm:text-4xl font-bold mb-4 transition-smooth ${
                      isDark ? "text-white" : "text-maroon-900"
                    }`}
                  >
                    {showcase.title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-8 transition-smooth ${isDark ? "text-white/70" : "text-maroon-800"}`}
                  >
                    {showcase.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition-smooth ${
                      isDark ? "bg-white text-black hover:bg-white/90" : "bg-maroon-600 text-white hover:bg-maroon-700"
                    }`}
                  >
                    {showcase.buttonText}
                  </button>
                  <div
                    className={`text-7xl transition-all duration-300 ${
                      isDark ? "opacity-20 group-hover:opacity-40" : "opacity-30 group-hover:opacity-50"
                    }`}
                  >
                    {showcase.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
