"use client";


import {Phone as mobile , Laptop2 as laptop} from 'lucide-react'



interface DetailedShowcaseProps {
  isDark: boolean;
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
      icon: mobile,
      accentColor: isDark
        ? "from-orange-600/60 to-orange-400/40"
        : "from-orange-300 to-orange-600",
    },
    {
      id: 2,
      label: "YOUR CASHIER SUPERCHARGED",
      title: "PayLand Direct",
      description:
        "Built for businesses with their own cashier page, connect directly with our API and expand your payment solutions and global presence with ease.",
      buttonText: "Learn More",
      icon: laptop,
      accentColor: isDark
        ? "from-orange-500/20 to-orange-600/20"
        : "from-orange-300/20 to-orange-400/20",
    },
  ];

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcases.map((showcase) => (
            <div
              key={showcase.id}
              className={`group relative rounded-3xl backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-orange-500/50"
                  : "bg-orange-100 border border-orange-400 hover:border-orange-600"
              }`}
            >
              <div
                className={`absolute inset-1 z-30 bg-gradient-to-br ${showcase.accentColor} rounded-md`}
              ></div>

              <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 transition-smooth ${
                      isDark
                        ? " text-white "
                        : "text-black"
                    }`}
                  >
                    {showcase.label}
                  </div>
                  <h3
                    className={`text-3xl sm:text-4xl font-bold mb-4 transition-smooth ${
                      isDark
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {showcase.title}
                  </h3>
                  <p
                    className={`leading-relaxed mb-8 transition-smooth ${
                      isDark ? "text-white/20" : "text-black"
                    }`}
                  >
                    {showcase.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <button
                    className={`px-6 py-3 rounded-full font-semibold transition-smooth ${
                      isDark
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                  >
                    {showcase.buttonText}
                  </button>
                  <div
                    className={`text-7xl transform-3d shadow-2xl shadow-white/orange-500`}
                  >
                    <showcase.icon/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
