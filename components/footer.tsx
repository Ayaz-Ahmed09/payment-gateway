"use client"

import { Mail, Linkedin, Twitter} from "lucide-react"
import Image from "next/image"
interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`border-t py-20 px-4 sm:px-6 lg:px-8 transition-smooth ${
        isDark ? "border-white/10 bg-black/40" : "border-maroon-200 bg-maroon-50/40"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
             <Image src={isDark ? "/logo12.png" : "/logo1.png"} alt="Payland Logo" width={40} height={40} />
              <span className={`font-bold text-lg transition-smooth ${isDark ? "text-white" : "text-maroon-900"}`}>
                <span className="text-orange-500">Pay</span>Land
              </span>
            </div>
            <p className={`text-sm leading-relaxed justify-center transition-smooth ${isDark ? "text-white/60" : "text-maroon-700"}`}>
              Modern payment gateway for the future of commerce
            </p>
          </div>

          {/* Products */}
          <div>
            <h4
              className={`font-semibold mb-6 text-sm uppercase tracking-wider transition-smooth ${
                isDark ? "text-white" : "text-maroon-900"
              }`}
            >
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Payland Pro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Direct
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Hosted Fields
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Payland Safe
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className={`font-semibold mb-6 text-sm uppercase tracking-wider transition-smooth ${
                isDark ? "text-white" : "text-maroon-900"
              }`}
            >
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4
              className={`font-semibold mb-6 text-sm uppercase tracking-wider transition-smooth ${
                isDark ? "text-white" : "text-maroon-900"
              }`}
            >
              Developers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  SDKs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className={`font-semibold mb-6 text-sm uppercase tracking-wider transition-smooth ${
                isDark ? "text-white" : "text-maroon-900"
              }`}
            >
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-smooth ${
                    isDark ? "text-white/60 hover:text-orange-400" : "text-maroon-700 hover:text-maroon-900"
                  }`}
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t pt-12 flex flex-col sm:flex-row items-center justify-between gap-8 transition-smooth ${
            isDark ? "border-white/10" : "border-maroon-200"
          }`}
        >
          <p className={`text-sm transition-smooth ${isDark ? "text-white/50" : "text-maroon-600"}`}>
            © 2025 Payland. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`p-2 rounded-lg transition-smooth group ${
                isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
              }`}
            >
              <Mail
                className={`w-5 h-5 transition-smooth ${
                  isDark ? "text-white/60 group-hover:text-orange-400" : "text-maroon-700 group-hover:text-maroon-900"
                }`}
              />
            </a>
            <a
              href="#"
              className={`p-2 rounded-lg transition-smooth group ${
                isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
              }`}
            >
              <Twitter
                className={`w-5 h-5 transition-smooth ${
                  isDark ? "text-white/60 group-hover:text-orange-400" : "text-maroon-700 group-hover:text-maroon-900"
                }`}
              />
            </a>
            <a
              href="#"
              className={`p-2 rounded-lg transition-smooth group ${
                isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
              }`}
            >
              <Linkedin
                className={`w-5 h-5 transition-smooth ${
                  isDark ? "text-white/60 group-hover:text-orange-400" : "text-maroon-700 group-hover:text-maroon-900"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
