"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useState } from "react"

interface StatsSectionProps {
  isDark: boolean
}

const countryData = [
  { country: "USA", users: 45000, transactions: 125000 },
  { country: "UK", users: 32000, transactions: 89000 },
  { country: "Germany", users: 28000, transactions: 76000 },
  { country: "France", users: 24000, transactions: 68000 },
  { country: "Canada", users: 19000, transactions: 52000 },
  { country: "Australia", users: 16000, transactions: 44000 },
  { country: "Japan", users: 22000, transactions: 61000 },
  { country: "Singapore", users: 18000, transactions: 50000 },
]

export default function StatsSection({ isDark }: StatsSectionProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null)

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-smooth ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl sm:text-6xl font-bold mb-6 transition-smooth ${
              isDark ? "text-white" : "text-maroon-900"
            }`}
          >
            Global Platform
            <br />
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-orange-400 to-orange-600"
                  : "bg-gradient-to-r from-maroon-600 to-maroon-800"
              }`}
            >
              Performance
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-smooth ${isDark ? "text-white/60" : "text-maroon-700"}`}>
            Payland serves millions of users across the globe with consistent performance and reliability
          </p>
        </div>

        <div
          className={`rounded-3xl backdrop-blur-xl p-8 sm:p-12 shadow-2xl transition-smooth ${
            isDark
              ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800"
              : "bg-gradient-to-br from-maroon-50 to-white border border-maroon-200"
          }`}
        >
          <h3 className={`text-2xl font-bold mb-8 transition-smooth ${isDark ? "text-white" : "text-maroon-900"}`}>
            Users by Country
          </h3>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={countryData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(139,58,58,0.1)"}
                vertical={false}
              />
              <XAxis
                dataKey="country"
                stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(139,58,58,0.6)"}
                style={{ fontSize: "14px", fontWeight: "500" }}
              />
              <YAxis stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(139,58,58,0.6)"} style={{ fontSize: "14px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)",
                  border: isDark ? "2px solid rgba(255,107,53,0.5)" : "2px solid rgba(139,58,58,0.5)",
                  borderRadius: "12px",
                  color: isDark ? "white" : "rgb(139,58,58)",
                  boxShadow: isDark ? "0 8px 32px rgba(255,107,53,0.2)" : "0 8px 32px rgba(139,58,58,0.1)",
                  padding: "12px 16px",
                }}
                cursor={{ fill: isDark ? "rgba(255,107,53,0.1)" : "rgba(139,58,58,0.1)" }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                  color: isDark ? "rgba(255,255,255,0.7)" : "rgba(139,58,58,0.7)",
                }}
              />
              <Bar
                dataKey="users"
                fill={isDark ? "#ff6b35" : "#8B3A3A"}
                radius={[12, 12, 0, 0]}
                onMouseEnter={() => setHoveredBar("users")}
                onMouseLeave={() => setHoveredBar(null)}
                opacity={hoveredBar === null || hoveredBar === "users" ? 1 : 0.4}
              />
              <Bar
                dataKey="transactions"
                fill={isDark ? "#ff8c42" : "#A84C4C"}
                radius={[12, 12, 0, 0]}
                onMouseEnter={() => setHoveredBar("transactions")}
                onMouseLeave={() => setHoveredBar(null)}
                opacity={hoveredBar === null || hoveredBar === "transactions" ? 1 : 0.4}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
