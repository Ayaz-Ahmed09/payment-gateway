interface CTAProps {
  isDark: boolean
}

export default function CTA({ isDark }: CTAProps) {
  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r transition-smooth ${
          isDark
            ? "from-orange-500/10 via-transparent to-orange-500/10"
            : "from-maroon-400/10 via-transparent to-maroon-400/10"
        }`}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2
          className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
            isDark ? "text-white" : "text-maroon-900"
          }`}
        >
          Get in touch
        </h2>
        <p
          className={`text-lg mb-12 max-w-2xl mx-auto transition-smooth ${
            isDark ? "text-white/60" : "text-maroon-700"
          }`}
        >
          Allow your transactions to become effortless and empower your business with streamlined payment solutions.
        </p>

        <button
          className={`px-8 py-4 font-semibold rounded-full transition-smooth border ${
            isDark
              ? "bg-black text-white border-white/10 hover:bg-black/80 hover:border-white/20"
              : "bg-maroon-600 text-white border-maroon-700 hover:bg-maroon-700 hover:border-maroon-800"
          }`}
        >
          Get a Demo
        </button>

        {/* Decorative coins/cards background */}
        <div
          className={`mt-20 flex justify-center items-center gap-8 transition-all ${
            isDark ? "opacity-30 group-hover:opacity-50" : "opacity-40 group-hover:opacity-60"
          }`}
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-smooth ${
              isDark
                ? "bg-gradient-to-br from-orange-400 to-orange-600"
                : "bg-gradient-to-br from-maroon-500 to-maroon-700"
            }`}
          >
            💳
          </div>
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-smooth ${
              isDark ? "bg-gradient-to-br from-blue-400 to-blue-600" : "bg-gradient-to-br from-maroon-400 to-maroon-600"
            }`}
          >
            💰
          </div>
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl transition-smooth ${
              isDark
                ? "bg-gradient-to-br from-purple-400 to-purple-600"
                : "bg-gradient-to-br from-maroon-500 to-maroon-700"
            }`}
          >
            🔐
          </div>
        </div>
      </div>
    </section>
  )
}
