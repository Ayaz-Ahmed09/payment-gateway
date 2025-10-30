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
       ${isDark ? 'bg-black/50' : 'bg-white/50'}`}
    >
    
     
      
      {/* Very subtle edge gradient overlay */}
     

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
              className={`rounded-3xl backdrop-blur-lg p-6 h-full 
         hover:transform-border-2 border-1  border-orange-300 border-opacity-40 hover:border-opacity-90  overflow-hidden`}
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
                    className={`w-full text-left px-4 py-4 rounded-2xl relative overflow-hidden
                    ring-1 ring-orange-400 hover:ring-orange-500 transform-3d shadow-xl translate-x-0.5  ${
                      activeFeature === idx
                        ? isDark
                          ? " text-black 400 hover:shadow-lg, hover:shadow-orange-500 transform-3d"
                          : "text-orange-500   hover:shadow-sm hover:shadow-orange-500 transform-3d"
                        : "text-[#5e5e5d]   shadow-sm  hover:shadow-xl, hover:shadow-orange-500 transform-3d"
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
                    
                  </button>
                ))}
              </div>
            </div>
          </div>


          {/* Feature Cards Carousel */}
         <div className="lg:col-span-3">
            <div
              className={`rounded-3xl backdrop-blur-xl p-8 
                shadow-xl relative overflow-hidden `}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={` relative rounded-2xl p-8 
                           shadow-xs hover:-translate-y-0.5  shadow-orange-300 hover:shadow-orange-500  overflow-hidden
                      ${
                        activeFeature === idx
                          ? "group-hover:[bg-orange-500] transform-3d "
                          : "group-hover:[bg-orange-500] transform-3d group-hover:[shadow-2xl , shadow-orange-500]:"
                      }`}
                  >
                    {/* Premium inner glow effect */}
                    
                    {/* Content */}
                    <div className="relative e">
                      <div className={`text-4xl mb-4 abs `}>
                        {feature.icon}
                      </div>
                      <h4
                        className={`text-xl font-bold mb-3  ${
                          isDark ? "text-white" : "text-[#000000]"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`text-base ${
                          isDark ? "text-white/60" : "text-[#5e5e5d]"
                        } ${hoveredCard === idx ? (isDark ? "text-white/80" : "text-[#5e5e5d]/90") : ""}`}
                      >
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Sliding Feature Details Panel */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 transition-smooth transform ${
                      hoveredButton === idx 
                        ? "translate-x-0 opacity-100" 
                        : "translate-x-full opacity-0 p-8"
                    } ${
                      isDark 
                        ? "bg-black"
                        : "bg-black"
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
                        opacity-70   shadow-lg backdrop-blur-sm z-50 ${
                          isDark
                            ? "bg-orange-500 text-black ring-2 ring-white"
                            : "bg-black text-white ring-2 ring-orange-500"
                        }`}
                    >
                      <Plus className="w-5 h-5 " />
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
                          : "bg-transparent hover:bg-orange-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextFeature}
                  className={`p-3 rounded-full  ${
                    isDark
                      ? "bg-orange-500 hover:bg-black hover:ring-1 hover:ring-white text-white/50"
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
