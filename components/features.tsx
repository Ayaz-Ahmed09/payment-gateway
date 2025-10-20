"use client"

import { Shield, Zap, Globe, Lock, BarChart3, Smartphone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with PCI DSS standards",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process payments in milliseconds with our optimized infrastructure",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accept payments from customers worldwide in 150+ countries",
  },
  {
    icon: Lock,
    title: "Fraud Protection",
    description: "Advanced AI-powered fraud detection and prevention",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards and detailed transaction reports",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Seamless payment experience on all devices",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build a world-class payment experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:bg-white/15 transition-smooth group cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-smooth">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
