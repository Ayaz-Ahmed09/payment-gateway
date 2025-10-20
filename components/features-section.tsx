"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

interface FeaturesSectionProps {
  isDark: boolean
}

export default function FeaturesSection({ isDark }: FeaturesSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 1,
      title: "Boost Approval Ratios",
      description: "Increase transaction success rates with intelligent routing",
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
  ]

  const sidebarItems = [
    "Smart Routing",
    "Background Dynamic Currency Conversion",
    "Retry with Open Banking",
    "Retry on Insufficient Funds",
    "3DS Cascading",
  ]

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b transition-smooth ${
          isDark ? "from-orange-500/5 to-transparent" : "from-maroon-400/5 to-transparent"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Powerful Features
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-smooth ${isDark ? "text-white/60" : "text-maroon-700"}`}>
            Everything you need to succeed in modern payment processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-2xl backdrop-blur-xl p-6 h-full transition-smooth ${
                isDark ? "bg-white/5 border border-white/10" : "bg-maroon-50 border border-maroon-200"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-6 transition-smooth ${
                  isDark ? "text-white/60" : "text-maroon-600"
                }`}
              >
                Features
              </h3>
              <div className="space-y-3">
                {sidebarItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                      activeFeature === idx
                        ? isDark
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          : "bg-maroon-200 text-maroon-900 border border-maroon-400"
                        : isDark
                          ? "text-white/60 hover:text-white hover:bg-white/5"
                          : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Cards Carousel */}
          <div className="lg:col-span-3">
            <div
              className={`rounded-2xl backdrop-blur-xl p-8 sm:p-12 transition-smooth ${
                isDark ? "bg-white/5 border border-white/10" : "bg-maroon-50 border border-maroon-200"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    className={`group relative rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                      activeFeature === idx
                        ? isDark
                          ? "bg-orange-500/20 border border-orange-500/50"
                          : "bg-maroon-200 border border-maroon-400"
                        : isDark
                          ? "bg-white/5 border border-white/10 hover:border-white/20"
                          : "bg-white border border-maroon-200 hover:border-maroon-400"
                    }`}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4
                      className={`text-lg font-bold mb-2 transition-smooth ${
                        isDark ? "text-white" : "text-maroon-900"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p className={`text-sm transition-smooth ${isDark ? "text-white/60" : "text-maroon-700"}`}>
                      {feature.description}
                    </p>
                    <button
                      className={`absolute bottom-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        isDark ? "bg-white/10 hover:bg-orange-500" : "bg-maroon-100 hover:bg-maroon-600"
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 transition-smooth ${
                          isDark ? "text-white" : "text-maroon-900 group-hover:text-white"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  className={`p-2 rounded-lg transition-smooth ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-maroon-100 hover:bg-maroon-200 text-maroon-900"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeature === idx
                          ? isDark
                            ? "bg-orange-500 w-8"
                            : "bg-maroon-600 w-8"
                          : isDark
                            ? "bg-white/30"
                            : "bg-maroon-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  className={`p-2 rounded-lg transition-smooth ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-maroon-100 hover:bg-maroon-200 text-maroon-900"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
