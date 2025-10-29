// interface CTAProps {
//   isDark: boolean;
// }

// export default function CTA({ isDark }: CTAProps) {
//   return (
//     <section
//       className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth bg-center bg-no-repeat backdrop-blur-2xl ${
//         isDark ? "bg-black" : "bg-white"
//       }`}
//     >
//       <div
//         className={`absolute inset-0 bg-gradient-to-r transition-smooth ${
//           isDark
//             ? "from-orange-500/10 via-transparent to-orange-500/10"
//             : "from-maroon-400/10 via-transparent to-maroon-400/10"
//         }`}
//       ></div>

//       <div className="max-w-4xl mx-auto relative z-10 text-center">
//         <h2
//           className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
//             isDark ? "text-white" : "text-[#800000]"
//           }`}
//         >
//           Get in touch
//         </h2>
//         <p
//           className={`text-lg mb-12 max-w-2xl mx-auto transition-smooth ${
//             isDark ? "text-white/60" : "text-white/50"
//           }`}
//         >
//           Allow your transactions to become effortless and empower your business
//           with streamlined payment solutions.
//         </p>

//         <button
//           className={`px-8 py-4 font-semibold rounded-full transition-smooth border ${
//             isDark
//               ? "bg-black text-white border-white/10 hover:bg-black/80 hover:border-white/20"
//               : "bg-[#800000] text-white border-maroon-700 hover:bg-maroon-700 hover:border-maroon-800"
//           }`}
//         >
//           <a href="mailto:info@payland.info">Get a Demo</a>
//         </button>
//       </div>
//       <div className="absolute bottom-0 animate-blob-slow flex font-poppins font-italic gap-6">
//         <div>info@payland.info</div>
//         <div className='absolute left-50 bottom-0'>
//         <div >payment@payland.info</div>
//         </div>
//       </div>
//     </section>
//   );
// }
interface CTAProps {
  isDark: boolean;
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
            : "from-[#800000]/10 via-transparent to-[#800000]/10"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-[#800000]"
            }`}
          >
            Get in touch
          </h2>
          <p
            className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto transition-smooth ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            Allow your transactions to become effortless and empower your business
            with streamlined payment solutions.
          </p>

          <button
            className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 border ${
              isDark
                ? "bg-black text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-orange-500/20"
                : "bg-[#800000] text-white border-[#800000] hover:bg-[#600000] hover:border-[#600000] hover:shadow-lg hover:shadow-[#800000]/30"
            }`}
          >
            <a href="mailto:info@payland.info">Get a Demo</a>
          </button>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Email Contact Card */}
          <div
            className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/30"
                : "bg-[#800000]/5 border-[#800000]/20 hover:bg-[#800000]/10 hover:border-[#800000]/40"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-smooth ${
                  isDark ? "bg-orange-500/20" : "bg-[#800000]/20"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${isDark ? "text-orange-500" : "text-[#800000]"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className={`text-sm font-semibold mb-2 uppercase tracking-wider transition-smooth ${
                  isDark ? "text-white/60" : "text-gray-600"
                }`}
              >
                Email Us
              </h3>
              <a
                href="mailto:info@payland.info"
                className={`text-base font-medium mb-1 hover:underline transition-smooth ${
                  isDark ? "text-white" : "text-[#800000]"
                }`}
              >
                info@payland.info
              </a>
              <a
                href="mailto:payment@payland.info"
                className={`text-base font-medium hover:underline transition-smooth ${
                  isDark ? "text-white" : "text-[#800000]"
                }`}
              >
                payment@payland.info
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div
            className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/30"
                : "bg-[#800000]/5 border-[#800000]/20 hover:bg-[#800000]/10 hover:border-[#800000]/40"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-smooth ${
                  isDark ? "bg-orange-500/20" : "bg-[#800000]/20"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${isDark ? "text-orange-500" : "text-[#800000]"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3
                className={`text-sm font-semibold mb-2 uppercase tracking-wider transition-smooth ${
                  isDark ? "text-white/60" : "text-gray-600"
                }`}
              >
                Visit Us
              </h3>
              <p
                className={`text-base font-medium leading-relaxed transition-smooth ${
                  isDark ? "text-white" : "text-[#800000]"
                }`}
              >
                PayLand Gateway Ltd
                <br />
                71-75 Shelton Street
                <br />
                Covent Garden
                <br />
                London WC2H 9JQ
              </p>
            </div>
          </div>

          {/* Location Coordinates Card */}
          <div
            className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/30"
                : "bg-[#800000]/5 border-[#800000]/20 hover:bg-[#800000]/10 hover:border-[#800000]/40"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-smooth ${
                  isDark ? "bg-orange-500/20" : "bg-[#800000]/20"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${isDark ? "text-orange-500" : "text-[#800000]"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className={`text-sm font-semibold mb-2 uppercase tracking-wider transition-smooth ${
                  isDark ? "text-white/60" : "text-gray-600"
                }`}
              >
                Coordinates
              </h3>
              <div
                className={`text-base font-medium mb-1 font-mono transition-smooth ${
                  isDark ? "text-white" : "text-[#800000]"
                }`}
              >
                51.5142° N
              </div>
              <div
                className={`text-base font-medium font-mono transition-smooth ${
                  isDark ? "text-white" : "text-[#800000]"
                }`}
              >
                0.1224° W
              </div>
              <a
                href="https://www.google.com/maps?q=51.5142,-0.1224"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 text-sm underline hover:no-underline transition-smooth ${
                  isDark ? "text-orange-500" : "text-[#800000]"
                }`}
              >
                View on Map →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}