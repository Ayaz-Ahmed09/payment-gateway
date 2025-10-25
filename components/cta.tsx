interface CTAProps {
  isDark: boolean;
}

export default function CTA({ isDark }: CTAProps) {
  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth bg-center bg-no-repeat backdrop-blur-2xl ${
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
            isDark ? "text-white" : "text-[#800000]"
          }`}
        >
          Get in touch
        </h2>
        <p
          className={`text-lg mb-12 max-w-2xl mx-auto transition-smooth ${
            isDark ? "text-white/60" : "text-white/50"
          }`}
        >
          Allow your transactions to become effortless and empower your business
          with streamlined payment solutions.
        </p>

        <button
          className={`px-8 py-4 font-semibold rounded-full transition-smooth border ${
            isDark
              ? "bg-black text-white border-white/10 hover:bg-black/80 hover:border-white/20"
              : "bg-[#800000] text-white border-maroon-700 hover:bg-maroon-700 hover:border-maroon-800"
          }`}
        >
          Get a Demo
        </button>

        {/* Decorative coins/cards background */}
      </div>
    </section>
  );
}
