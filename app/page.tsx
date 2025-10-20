"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import BrandsSection from "@/components/brands-section"
import ProductsSection from "@/components/products-section"
import FeaturesSection from "@/components/features-section"
import DetailedShowcase from "@/components/detailed-showcase"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setIsDark(savedTheme === "dark")
    applyTheme(savedTheme === "dark")
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    applyTheme(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <BrandsSection isDark={isDark} />
      <ProductsSection isDark={isDark} />
      <FeaturesSection isDark={isDark} />
      <DetailedShowcase isDark={isDark} />
      <StatsSection isDark={isDark} />
      <TestimonialsSection isDark={isDark} />
      <CTA isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  )
}
