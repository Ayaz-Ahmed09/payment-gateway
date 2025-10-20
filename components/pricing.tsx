"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Up to 10,000 transactions/month",
      "Basic analytics",
      "Email support",
      "Standard security",
      "Single currency",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing companies",
    featured: true,
    features: [
      "Unlimited transactions",
      "Advanced analytics",
      "Priority support",
      "Enterprise security",
      "Multi-currency support",
      "Custom branding",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label solution",
      "SLA guarantee",
      "Advanced fraud tools",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-smooth ${
                plan.featured ? "glass border-2 border-orange-400/50 p-8 scale-105" : "glass p-8 hover:bg-white/15"
              }`}
            >
              {plan.featured && (
                <div className="inline-block mb-4 px-3 py-1 bg-orange-500/20 rounded-full">
                  <span className="text-xs font-semibold text-orange-400">MOST POPULAR</span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-smooth mb-8 ${
                  plan.featured ? "bg-orange-500 hover:bg-orange-600 text-white" : "glass hover:bg-white/20"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
