"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Sparkles } from "lucide-react";

interface FeaturesSectionProps {
  isDark: boolean;
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);
const [hoveredCard, setHoveredCard] = useState<number | null>(null);
const [hoveredButton, setHoveredButton] = useState<number | null>(null);
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
      details: [
        "Smart Routing",
        "Dynamic Currency",
        "Retry Logic",
        "Bank Optimization",
        "Success Tracking"
      ]
    },
    {
      id: 2,
      title: "Improve Analytics",
      description: "Real-time insights into payment performance",
      icon: "📊",
      details: [
        "Real-time Data",
        "Performance Metrics",
        "Custom Reports",
        "Trend Analysis",
        "Export Options"
      ]
    },
    {
      id: 3,
      title: "Protect Funds",
      description: "Advanced fraud detection and prevention",
      icon: "🔐",
      details: [
        "AI Detection",
        "Risk Scoring",
        "3D Secure",
        "PCI Compliance",
        "Fraud Alerts"
      ]
    },
    {
      id: 4,
      title: "Streamline Payments",
      description: "Simplified payment processing workflow",
      icon: "⚙️",
      details: [
        "One-click Setup",
        "API Integration",
        "Webhook Support",
        "Auto Reconciliation",
        "Batch Processing"
      ]
    },
    {
      id: 5,
      title: "Optimize UX",
      description: "Beautiful, conversion-focused payment experience",
      icon: "✨",
      details: [
        "Mobile Optimized",
        "Fast Loading",
        "Custom Themes",
        "A/B Testing",
        "Conversion Tracking"
      ]
    },
  ];

  const sidebarItems = [
    { name: "Smart Routing", icon: "🎯", description: "Intelligent payment routing" },
    { name: "Dynamic Currency", icon: "💱", description: "Auto currency conversion" },
    { name: "Open Banking", icon: "🏦", description: "Retry with open banking" },
    { name: "Funds Recovery", icon: "💰", description: "Insufficient funds retry" },
    { name: "3DS Security", icon: "🔒", description: "Advanced 3DS cascading" },
  ];
  return (
   <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth
        ${isDark ? "bg-black" : "bg-[#f8f8f8]"}`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <div className={`absolute -top-40 -left-40 w-80 h-80 bg-[#fe7751] rounded-full mix-blend-multiply filter blur-[100px] animate-blob`} />
        <div className={`absolute -bottom-40 -right-40 w-80 h-80 bg-[#fd3b02] rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000`} />
        <div className={`absolute top-40 right-40 w-80 h-80 ${isDark ? 'bg-[#5e5e5d]' : 'bg-[#000000]'} rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000`} />
      </div>
      {/* Background gradient */}
      <div
        className={`absolute inset-0 transition-smooth ${
          isDark
            ? "bg-gradient-to-br from-[#fd3b02]/10 via-black/50 to-[#fe7751]/10"
            : "bg-gradient-to-br from-[#fe7751]/8 via-[#f8f8f8]/50 to-[#fd3b02]/5"
        }`}
      />
      
      {/* Very subtle edge gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-${isDark ? 'white/2' : 'black/2'} to-transparent`} />
        <div className={`absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-${isDark ? 'white/2' : 'black/2'} to-transparent`} />
        <div className={`absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-${isDark ? 'white/2' : 'black/2'} to-transparent`} />
        <div className={`absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-${isDark ? 'white/2' : 'black/2'} to-transparent`} />
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-[#000000]"
            }`}
          >
            Powerful Features
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-smooth ${
              isDark ? "text-white/60" : "text-[#5e5e5d]"
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
                shadow-lg hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-white/10 to-white/5"
                  : "bg-gradient-to-br from-white/90 to-white/70"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-8 flex items-center gap-2 ${
                  isDark ? "text-white/80" : "text-[#000000]"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Features Explorer
              </h3>
              <div className="space-y-3">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left px-4 py-4 rounded-2xl transition-all duration-500 
                      relative overflow-hidden group border-2 ${
                      activeFeature === idx
                        ? isDark
                          ? "bg-gradient-to-r from-[#fd3b02]/30 to-[#fe7751]/30 text-white border-[#fd3b02]/50"
                          : "bg-gradient-to-r from-[#fd3b02]/20 to-[#fe7751]/15 text-[#000000] border-[#fd3b02]"
                        : isDark
                        ? "text-white/60 hover:text-white hover:bg-white/5 border-white/20 hover:border-white/40"
                        : "text-[#5e5e5d] hover:text-[#000000] hover:bg-[#fe7751]/10 border-black/20 hover:border-black/40"
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="text-lg">{item.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className={`text-xs ${
                          isDark ? "text-white/50" : "text-[#5e5e5d]/70"
                        }`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`absolute inset-0 transition-transform duration-500 
                        ${activeFeature === idx ? "scale-100" : "scale-0"} 
                        ${isDark ? "bg-[#fd3b02]/10" : "bg-[#fe7751]/8"}`}
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
                  ? "bg-gradient-to-br from-white/10 to-transparent"
                  : "bg-gradient-to-br from-white/95 to-white/80"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative rounded-2xl p-8 transition-all duration-500 
                      transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden
                      ${
                        activeFeature === idx
                          ? isDark
                            ? "bg-gradient-to-br from-[#fd3b02]/20 to-[#fe7751]/20 border-2 border-white/50"
                            : "bg-gradient-to-br from-[#fd3b02]/15 to-[#fe7751]/10 border-2 border-black/50"
                          : isDark
                          ? "bg-gradient-to-br from-white/8 to-white/3 border-2 border-white/30 hover:border-white/60 hover:bg-gradient-to-br hover:from-[#fd3b02]/15 hover:to-[#fe7751]/10"
                          : "bg-gradient-to-br from-white/90 to-white/70 border-2 border-black/30 hover:border-black/60 hover:bg-gradient-to-br hover:from-[#fe7751]/20 hover:to-[#fd3b02]/15"
                      }`}
                  >
                    {/* Premium inner glow effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredCard === idx 
                        ? isDark 
                          ? "bg-black text-white" 
                          : "bg-white text-black"
                        : "opacity-0"
                    }`} />
                    
                    {/* Content */}
                    <div className="relative ">
                      <div className={`text-4xl mb-4 transition-transform duration-500 ${hoveredCard === idx ? 'scale-110' : 'scale-100'}`}>
                        {feature.icon}
                      </div>
                      <h4
                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          isDark ? "text-white" : "text-[#000000]"
                        } ${hoveredCard === idx ? (isDark ? "text-[#fe7751]" : "text-[#fd3b02]") : ""}`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`text-base transition-colors duration-300 ${
                          isDark ? "text-white/60" : "text-[#5e5e5d]"
                        } ${hoveredCard === idx ? (isDark ? "text-white/80" : "text-[#5e5e5d]/90") : ""}`}
                      >
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Sliding Feature Details Panel */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 transform ${
                      hoveredButton === idx 
                        ? "translate-x-0 opacity-100" 
                        : "translate-x-full opacity-0"
                    } ${
                      isDark 
                        ? "bg-[#fd3b02]"
                        : "bg-[#fd3b02]"
                    }`}>
                      <div className="p-6 h-full flex flex-col justify-center">
                        <div className="text-3xl mb-4 text-center">✨</div>
                        <h5 className={`text-lg font-bold mb-4 text-center ${
                          isDark ? "text-white" : "text-white"
                        }`}>
                          {feature.title}
                        </h5>
                        <div className="space-y-2">
                          {feature.details.map((detail, detailIdx) => (
                            <div key={detailIdx} className={`text-sm font-medium px-3 py-1 rounded-full text-center ${
                              isDark 
                                ? "bg-white/20 text-white/90" 
                                : "bg-white/30 text-white/90"
                            }`}>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Premium hover button with blurry background */}
                    <button
                      onMouseEnter={() => setHoveredButton(idx)}
                      onMouseLeave={() => setHoveredButton(null)}
                      className={`absolute bottom-4 right-4 p-3 rounded-full 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 
                        transform hover:scale-110 shadow-lg backdrop-blur-sm z-20 ${
                          isDark
                            ? "bg-gradient-to-r from-[#fd3b02]/80 via-white to-[#fe7751]/80 text-white border border-white/30"
                            : "bg-gradient-to-r from-[#fd3b02]/80 via-black to-[#fe7751]/80 text-white border border-white/30"
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
                      ? "bg-white/10 hover:bg-[#fd3b02]/50 text-white"
                      : "bg-[#fe7751]/20 hover:bg-[#fd3b02] hover:text-white text-[#000000]"
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
                            ? "bg-[#fd3b02] w-8"
                            : "bg-[#fd3b02] w-8"
                          : isDark
                          ? "bg-white/30 hover:bg-white/50"
                          : "bg-[#5e5e5d]/40 hover:bg-[#fe7751]/60"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextFeature}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDark
                      ? "bg-white/10 hover:bg-[#fd3b02]/50 text-white"
                      : "bg-[#fe7751]/20 hover:bg-[#fd3b02] hover:text-white text-[#000000]"
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
