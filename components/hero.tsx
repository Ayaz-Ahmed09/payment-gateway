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
        className={`absolute inset-0 z-0 hidden sm:block ${
          isDark
            ? "bg-[url('/background/5.jpg')] bg-cover bg-no-repeat bg-right-center sm:bg-center"
            : "bg-[url('/background/3.jpg')] bg-cover bg-no-repeat bg-right-center sm:bg-center"
        }`}
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
              className={`text-sm font-medium font-orbitron ${
                isDark ? "text-orange-400" : "text-maroon-600"
              }`}
            >
              ✨ Next Generation Payment Processing
            </span>
          </div>
          <h1
            className={`text-6xl sm:text-7xl lg:text-6xl font-bold mb-8 leading-relaxed font-orbitron transition-smooth ${
              isDark ? "text-white" : "text-[#000000]"
            }`}
          >
            Payment Solutions
            <br />
            <span
              className={`bg-clip-text text-transparent font-orbitron leading-tight ${
                isDark
                  ? "bg-gradient-to-r from-[#fd3b02] via-[#fe7751] to-[#fd3b02]"
                  : "bg-gradient-to-r from-[#fd3b02] via-[#fe7751] to-[#fd3b02]"
              }`}
            >
              Made Simple
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-poppins transition-smooth ${
              isDark ? "text-white/60" : "text-[#5e5e5d]"
            }`}
          >
            Payland delivers secure, fast, and reliable payment processing
            solutions for modern businesses.
          </p>

          <div className="flex flex-col rounded-full sm:flex-row gap-4 justify-center">
            <button
              className={`px-8 py-4 font-semibold  transition-smooth flex items-center justify-center gap-2 group shadow-lg font-opensans ${
                isDark
                  ? "bg-gradient-to-r from-[#fd3b02] to-[#fe7751]  hover:from-[#fe7751] hover:to-[#fd3b02] text-white hover:shadow-[#fd3b02]/50"
                  : "bg-gradient-to-r from-[#fd3b02] via-gray-200 to-[#fe7751] ring-1 border-radius-[50px 0px 50px 0px] hover:from-[#fe7751] hover:to-[#fd3b02] text-black hover:shadow-[#fd3b02]/50"
              }`}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </button>
            <button
              className={`px-8 py-4 rounded-full font-semibold transition-smooth font-poppins ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white"
                  : "bg-white/80 border border-[#5e5e5d]/20 hover:bg-white/90 hover:border-[#5e5e5d]/40 text-[#000000]"
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
              : "bg-gray-200/5 border border-[#5e5e5d]/20"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-orbitron">
            <div className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth font-openSans ${
                  isDark ? "text-[#fd3b02]" : "text-[#fd3b02]"
                }`}
              >
                $50M+
              </div>
              <p
                className={`text-sm font-medium transition-smooth font-openSans ${
                  isDark ? "text-white/60" : "text-[#5e5e5d]"
                }`}
              >
                Transactions Processed
              </p>
            </div>
            <div
              className={`text-center border-l border-r transition-smooth ${
                isDark ? "border-white/10" : "border-[#5e5e5d]/20"
              }`}
            >
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth ${
                  isDark ? "text-[#fe7751]" : "text-[#fe7751]"
                }`}
              >
                180+
              </div>
              <p
                className={`text-sm font-medium transition-smooth font-poppins ${
                  isDark ? "text-white/60" : "text-[#5e5e5d]"
                }`}
              >
                Countries Supported
              </p>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-3 transition-smooth font-poppins ${
                  isDark ? "text-[#fd3b02]" : "text-[#fd3b02]"
                }`}
              >
                99.99%
              </div>
              <p
                className={`text-sm font-medium transition-smooth font-poppins ${
                  isDark ? "text-white/60" : "text-[#5e5e5d]"
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
