"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Sparkles } from "lucide-react";

interface FeaturesSectionProps {
  isDark: boolean;
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // Navigation functions
  const nextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const features = [
    {
      id: 1,
      title: "Boost Approval Ratios",
      description:
        "Increase transaction success rates with intelligent routing",
      icon: "📈",
    },
    {
      id: 2,
      title: "Improve Analytics",
      description: "Real-time insights into payment performance",
      icon: "📊",
    },
    {
      id: 3,
      title: "Protect Funds",
      description: "Advanced fraud detection and prevention",
      icon: "🔐",
    },
    {
      id: 4,
      title: "Streamline Payments",
      description: "Simplified payment processing workflow",
      icon: "⚙️",
    },
    {
      id: 5,
      title: "Optimize UX",
      description: "Beautiful, conversion-focused payment experience",
      icon: "✨",
    },
  ];

  const sidebarItems = [
    "Smart Routing",
    "Background Dynamic Currency Conversion",
    "Retry with Open Banking",
    "Retry on Insufficient Funds",
    "3DS Cascading",
  ];
  return (
   <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth
        ${isDark ? "bg-black" : "bg-white"}`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <div className={`absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob`} />
        <div className={`absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000`} />
        <div className={`absolute top-40 right-40 w-80 h-80 ${isDark ? 'bg-blue-500' : 'bg-[#800000]'} rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000`} />
      </div>
      {/* Background gradient */}
      <div
        className={`absolute inset-0 transition-smooth ${
          isDark
            ? "bg-gradient-to-br from-orange-500/10 via-black/50 to-blue-500/10"
            : "bg-gradient-to-br from-[#800000]/10 via-white/50 to-[#800000]/5"
        }`}
      />

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Powerful Features
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-smooth ${
              isDark ? "text-white/60" : "text-maroon-700"
            }`}
          >
            Everything you need to succeed in modern payment processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-3xl backdrop-blur-xl p-8 h-full transition-all duration-500
                shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${
                isDark
                  ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                  : "bg-gradient-to-br from-white/80 to-white/40 border border-[#800000]/20"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-8 flex items-center gap-2 ${
                  isDark ? "text-white/80" : "text-[#800000]"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Features Explorer
              </h3>
              <div className="space-y-4">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-500 
                      text-sm font-medium relative overflow-hidden group ${
                      activeFeature === idx
                        ? isDark
                          ? "bg-gradient-to-r from-orange-500/30 to-purple-500/30 text-white border border-orange-500/50"
                          : "bg-gradient-to-r from-[#800000]/20 to-[#800000]/10 text-[#800000] border border-[#800000]"
                        : isDark
                        ? "text-white/60 hover:text-white hover:bg-white/5"
                        : "text-[#800000]/70 hover:text-[#800000] hover:bg-[#800000]/5"
                    }`}
                  >
                    <div className="relative z-10">{item}</div>
                    <div
                      className={`absolute inset-0 transition-transform duration-500 
                        ${activeFeature === idx ? "scale-100" : "scale-0"} 
                        ${isDark ? "bg-orange-500/10" : "bg-[#800000]/5"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>


          {/* Feature Cards Carousel */}
         <div className="lg:col-span-3">
            <div
              className={`rounded-3xl backdrop-blur-xl p-8 transition-all duration-500
                shadow-2xl relative overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-white/10 to-transparent border border-white/10"
                  : "bg-gradient-to-br from-white/90 to-white/60 border border-[#800000]/20"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative rounded-2xl p-8 transition-all duration-500 
                      transform hover:-translate-y-2 hover:shadow-2xl
                      ${
                        activeFeature === idx
                          ? isDark
                            ? "bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/50"
                            : "bg-gradient-to-br from-[#800000]/15 to-[#800000]/5 border border-[#800000]"
                          : isDark
                          ? "bg-white/5 border border-white/10 hover:border-white/20"
                          : "bg-white/60 border border-[#800000]/20 hover:border-[#800000]"
                      }`}
                  >
                    <div className={`text-4xl mb-4 transition-transform duration-500 ${hoveredCard === idx ? 'scale-110' : 'scale-100'}`}>
                      {feature.icon}
                    </div>
                    <h4
                      className={`text-xl font-bold mb-3 ${
                        isDark ? "text-white" : "text-[#800000]"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`text-base ${
                        isDark ? "text-white/60" : "text-[#800000]/70"
                      }`}
                    >
                      {feature.description}
                    </p>
                    <button
                      className={`absolute bottom-4 right-4 p-3 rounded-full 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        transform hover:scale-110 ${
                          isDark
                            ? "bg-gradient-to-r from-orange-500 to-purple-500 text-white"
                            : "bg-gradient-to-r from-[#800000] to-[#600000] text-white"
                        }`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevFeature}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDark
                      ? "bg-white/10 hover:bg-orange-500/50 text-white"
                      : "bg-[#800000]/10 hover:bg-[#800000] hover:text-white text-[#800000]"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        activeFeature === idx
                          ? isDark
                            ? "bg-orange-500 w-8"
                            : "bg-[#800000] w-8"
                          : isDark
                          ? "bg-white/30 hover:bg-white/50"
                          : "bg-[#800000]/30 hover:bg-[#800000]/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextFeature}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDark
                      ? "bg-white/10 hover:bg-orange-500/50 text-white"
                      : "bg-[#800000]/10 hover:bg-[#800000] hover:text-white text-[#800000]"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
