"use client"

import { useState } from "react"
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell 
} from "recharts"
import { TrendingUp, Users, CreditCard, Globe, Wallet } from "lucide-react"

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

const statsCards = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "2.5M+",
    label: "Active Users",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: "120+",
    label: "Countries",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    value: "$25M+",
    label: "Transactions",
  },
]

export default function StatsSection({ isDark }: StatsSectionProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const gradientColors = isDark 
    ? ["#fb923c", "#f97316", "#ea580c"] 
    : ["#f97316", "#fdba74", "#fb923c"]

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDark ? "bg-black" : "bg-white"
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full 
          ${isDark ? 'bg-orange-500/20' : 'bg-orange-400/10'} 
          filter blur-[80px] animate-pulse-slow`} 
        />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full 
          ${isDark ? 'bg-orange-400/20' : 'bg-orange-300/10'} 
          filter blur-[80px] animate-pulse-slow animation-delay-2000`} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <TrendingUp className={`w-12 h-12 mx-auto mb-4 ${
            isDark ? "text-orange-400" : "text-orange-600"
          }`} />
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Global Platform
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              Performance
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Powering millions of transactions across the globe with cutting-edge technology
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`rounded-3xl p-8 sm:p-12 transition-all duration-500
          backdrop-blur-xl shadow-2xl ${
          isDark
            ? "bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-black/80 border border-white/10"
            : "bg-white/80 border border-gray-200/50"
        }`}>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {statsCards.map((stat, idx) => (
              <div key={idx} className={`rounded-2xl p-6 transition-all duration-300
                group hover:-translate-y-1 ${
                isDark 
                  ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-orange-900/20 hover:to-orange-800/20 border border-white/10" 
                  : "bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 border border-gray-200"
              }`}>
                <div className={`${
                  isDark ? "text-orange-400 group-hover:text-orange-300" : "text-orange-600 group-hover:text-orange-500"
                }`}>
                  {stat.icon}
                </div>
                <h4 className={`text-2xl font-bold mt-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>{stat.value}</h4>
                <p className={
                  isDark ? "text-gray-400" : "text-gray-600"
                }>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className={`rounded-2xl p-8 ${
            isDark 
              ? "bg-gray-900/50 border border-white/5" 
              : "bg-white border border-gray-200"
          }`}>
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <CreditCard className={isDark ? "text-orange-400" : "text-orange-600"} />
              Global Transaction Analytics
            </h3>
            
            <ResponsiveContainer width="100%" height={450}>
              <BarChart 
                data={countryData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                onMouseMove={(e: any) => {
                  if (e.activeTooltip) {
                    setHoveredCountry(e.activePayload?.[0]?.payload?.country)
                  }
                }}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <defs>
                  {gradientColors.map((color, index) => (
                    <linearGradient
                      key={`gradient-${index}`}
                      id={`gradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.3} />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3"
                  stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.1)"}
                  vertical={false}
                />
                <XAxis
                  dataKey="country"
                  stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.6)"}
                  style={{ fontSize: "14px", fontWeight: "500" }}
                  tickLine={false}
                />
                <YAxis 
                  stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.6)"}
                  style={{ fontSize: "14px" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)",
                    border: isDark ? "1px solid rgba(249,115,22,0.5)" : "1px solid rgba(234,88,12,0.5)",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    padding: "16px",
                  }}
                  cursor={{ fill: "transparent" }}
                />
                <Legend 
                  wrapperStyle={{
                    paddingTop: "20px",
                  }}
                />
                <Bar
                  dataKey="users"
                  name="Active Users"
                  radius={[8, 8, 0, 0]}
                  onMouseEnter={() => setHoveredBar("users")}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {countryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#gradient-${index % 3})`}
                      opacity={
                        hoveredBar === null || hoveredBar === "users" ? 1 : 0.3
                      }
                    />
                  ))}
                </Bar>
                <Bar
                  dataKey="transactions"
                  name="Transactions"
                  radius={[8, 8, 0, 0]}
                  onMouseEnter={() => setHoveredBar("transactions")}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {countryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#gradient-${(index + 1) % 3})`}
                      opacity={
                        hoveredBar === null || hoveredBar === "transactions" ? 1 : 0.3
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}