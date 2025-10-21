"use client";

import { ArrowRight } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section
      className={`pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth  ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className="absolute inset-0 z-0 bg-[url('/background/4.png')] bg-cover bg-no-repeat bg-right-center sm:bg-center"
        style={{
          transform: "scale(1.1)",
        }}
      />
      <div
        className={`absolute inset-0 ${isDark ? "bg-black/60" : "bg-white/40"}`}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div
            className={`inline-block mb-6 px-4 py-2 rounded-full backdrop-blur-sm border transition-smooth ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-maroon-50 border-maroon-200"
            }`}
          >
            <span
              className={`text-sm font-medium ${
                isDark ? "text-orange-400" : "text-maroon-600"
              }`}
            >
              ✨ Next Generation Payment Processing
            </span>
          </div>
          <h1
            className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Payment Solutions
            <br />
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
                  : "bg-gradient-to-r from-maroon-600 via-maroon-700 to-maroon-800"
              }`}
            >
              Made Simple
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed transition-smooth ${
              isDark ? "text-white/60" : "text-maroon-700"
            }`}
          >
            Payland delivers secure, fast, and elegant payment processing for
            modern businesses. Process transactions globally with confidence and
            ease.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`px-8 py-4 font-semibold rounded-full transition-smooth flex items-center justify-center gap-2 group shadow-lg ${
                isDark
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-orange-500/50"
                  : "bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white hover:shadow-maroon-500/50"
              }`}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </button>
            <button
              className={`px-8 py-4 rounded-full font-semibold transition-smooth ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white"
                  : "bg-maroon-50 border border-maroon-300 hover:bg-maroon-100 hover:border-maroon-400 text-maroon-900"
              }`}
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className={`mt-24 max-w-5xl mx-auto rounded-3xl backdrop-blur-xl p-12 sm:p-16 shadow-2xl transition-smooth ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-maroon-50/50 border border-maroon-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth ${
                  isDark ? "text-orange-400" : "text-maroon-600"
                }`}
              >
                $5B+
              </div>
              <p
                className={`text-sm font-medium transition-smooth ${
                  isDark ? "text-white/60" : "text-maroon-700"
                }`}
              >
                Transactions Processed
              </p>
            </div>
            <div
              className={`text-center border-l border-r transition-smooth ${
                isDark ? "border-white/10" : "border-maroon-200"
              }`}
            >
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth ${
                  isDark ? "text-orange-400" : "text-maroon-600"
                }`}
              >
                180+
              </div>
              <p
                className={`text-sm font-medium transition-smooth ${
                  isDark ? "text-white/60" : "text-maroon-700"
                }`}
              >
                Countries Supported
              </p>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth ${
                  isDark ? "text-orange-400" : "text-maroon-600"
                }`}
              >
                99.99%
              </div>
              <p
                className={`text-sm font-medium transition-smooth ${
                  isDark ? "text-white/60" : "text-maroon-700"
                }`}
              >
                Uptime Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
