// "use client"

// import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react"
// import { useState } from "react"

// interface HeaderProps {
//   isDark: boolean
//   toggleTheme: () => void
// }

// export default function Header({ isDark, toggleTheme  }: HeaderProps) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-smooth ${
//         isDark
//           ? "bg-black/40 border-white/10"
//           : "bg-white/40 border-maroon-200/30"
//       } backdrop-blur-xl border-b`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div
//               className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-smooth ${
//                 isDark
//                   ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
//                   : "bg-gradient-to-br from-maroon-600 to-maroon-800 text-white"
//               }`}
//             >
//               P
//             </div>
//             <span
//               className={`font-bold text-xl hidden sm:inline transition-smooth ${
//                 isDark ? "text-white" : "text-maroon-900"
//               }`}
//             >
//               Payland
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             <NavDropdownCards
//               label="Products"
//               isDark={isDark}
//               items={[
//                 {
//                   label: "OUR FLAGSHIP PRODUCT",
//                   title: "Payland Pro",
//                   description: "Complete payment solution for businesses",
//                   image: "/payment-gateway-dashboard.png",
//                 },
//                 {
//                   label: "SUPERCHARGED PAYMENTS",
//                   title: "Payland Direct",
//                   description: "API-first payment platform",
//                   image: "/payment-processing-technology.jpg",
//                 },
//                 {
//                   label: "PAYLAND POWERED",
//                   title: "Hosted Fields",
//                   description: "Secure payment forms",
//                   image: "/secure-payment-form.jpg",
//                 },
//                 {
//                   label: "ENTERPRISE SECURITY",
//                   title: "Payland Safe",
//                   description: "Enterprise-grade security",
//                   image: "/security-encryption.jpgHeader",
//                 },
//               ]}
//             />
//             <NavDropdownCards
//               label="Solutions"
//               isDark={isDark}
//               items={[
//                 {
//                   label: "FOR MERCHANTS",
//                   title: "Merchant Solutions",
//                   description: "Tailored for online stores",
//                   image: "/ecommerce-store.png",
//                 },
//                 {
//                   label: "FOR PLATFORMS",
//                   title: "Platform Integration",
//                   description: "Multi-vendor support",
//                   image: "/platform-integration.jpg",
//                 },
//                 {
//                   label: "FOR ENTERPRISES",
//                   title: "Enterprise Suite",
//                   description: "Large-scale operations",
//                   image: "/enterprise-business.jpg",
//                 },
//               ]}
//             />
//             <NavLink href="#company" isDark={isDark}>
//               Company
//             </NavLink>
//             <NavLink href="#developers" isDark={isDark}>
//               Developers
//             </NavLink>
//           </nav>

//           {/* Right side actions */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className={`p-2 rounded-lg transition-smooth ${
//                 isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
//               }`}
//               aria-label="Toggle theme"
//             >
//               {isDark ? (
//                 <Sun className="w-5 h-5 text-orange-400" />
//               ) : (
//                 <Moon className="w-5 h-5 text-maroon-700" />
//               )}
//             </button>
//             <button
//               className={`px-6 py-2.5 rounded-full font-medium transition-smooth hidden sm:block ${
//                 isDark
//                   ? "border border-white/30 hover:border-white/50 text-white hover:bg-white/5"
//                   : "border border-maroon-300 hover:border-maroon-500 text-maroon-900 hover:bg-maroon-50"
//               }`}
//             >
//               Contact Us
//             </button>

//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className={`lg:hidden p-2 rounded-lg transition-smooth ${
//                 isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
//               }`}
//               aria-label="Toggle mobile menu"
//             >
//               {mobileMenuOpen ? (
//                 <X
//                   className={`w-6 h-6 ${
//                     isDark ? "text-white" : "text-maroon-900"
//                   }`}
//                 />
//               ) : (
//                 <Menu
//                   className={`w-6 h-6 ${
//                     isDark ? "text-white" : "text-maroon-900"
//                   }`}
//                 />
//               )}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div
//             className={`lg:hidden pb-6 border-t transition-smooth ${
//               isDark
//                 ? "border-white/10 bg-black/20"
//                 : "border-maroon-200 bg-white/20"
//             }`}
//           >
//             <nav className="flex flex-col gap-2 pt-4">
//               <MobileNavLink href="#products" isDark={isDark}>
//                 Products
//               </MobileNavLink>
//               <MobileNavLink href="#solutions" isDark={isDark}>
//                 Solutions
//               </MobileNavLink>
//               <MobileNavLink href="#company" isDark={isDark}>
//                 Company
//               </MobileNavLink>
//               <MobileNavLink href="#developers" isDark={isDark}>
//                 Developers
//               </MobileNavLink>
//               <button
//                 className={`w-full px-6 py-2.5 rounded-full font-medium transition-smooth mt-4 ${
//                   isDark
//                     ? "border border-white/30 hover:border-white/50 text-white hover:bg-white/5"
//                     : "border border-maroon-300 hover:border-maroon-500 text-maroon-900 hover:bg-maroon-50"
//                 }`}
//               >
//                 Contact Us
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// function NavLink({ href, children, isDark }: { href: string; children: string; isDark: boolean }) {
//   return (
//     <a
//       href={href}
//       className={`px-4 py-2 text-sm font-medium transition-smooth rounded-lg ${
//         isDark
//           ? "text-white/80 hover:text-white hover:bg-white/5"
//           : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
//       }`}
//     >
//       {children}
//     </a>
//   )
// }

// function MobileNavLink({ href, children, isDark }: { href: string; children: string; isDark: boolean }) {
//   return (
//     <a
//       href={href}
//       className={`px-4 py-3 text-sm font-medium transition-smooth rounded-lg ${
//         isDark
//           ? "text-white/80 hover:text-white hover:bg-white/5"
//           : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
//       }`}
//     >
//       {children}
//     </a>
//   )
// }

// interface DropdownItem {
//   label: string
//   title: string
//   description: string
//   image: string
// }

// function NavDropdownCards({ label, items, isDark }: { label: string; items: DropdownItem[]; isDark: boolean }) {
//   return (
//     <div className="relative group">
//       <button
//         className={`px-4 py-2 text-sm font-medium transition-smooth rounded-lg flex items-center gap-1 ${
//           isDark
//             ? "text-white/80 hover:text-white hover:bg-white/5 group-hover:bg-white/5"
//             : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100 group-hover:bg-maroon-100"
//         }`}
//       >
//         {label}
//         <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//       </button>

//       <div
//         className={`absolute left-0 mt-0 w-max bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 group-hover:translate-y-2 ${
//           isDark
//             ? "bg-black/80 border border-white/10"
//             : "bg-white/80 border border-maroon-200"
//         }`}
//       >
//         <div
//           className={`grid gap-4 ${
//             items.length === 4 ? "grid-cols-4" : "grid-cols-3 "
//           }relative`}
//         >
//           {items.map((item, idx) => (
//             <a
//               key={idx}
//               href="#"
//               className={`group/card rounded-xl overflow-hidden transition-all duration-300 relative h-48 w-48 border ${
//                 isDark
//                   ? "border-white/10 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
//                   : "border-maroon-200 hover:border-maroon-600 hover:shadow-lg hover:shadow-maroon-400/20"
//               }`}
//             >
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-4xl opacity-30 hover:opacity-100"></div>
//               <img
//                 src={item.image || "/placeholder.svg"}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div
//                 className={`absolute inset-0 transition-all duration-300 ${
//                   isDark
//                     ? "bg-black/40 group-hover/card:bg-black/30"
//                     : "bg-white/40 group-hover/card:bg-white/30"
//                 }`}
//               ></div>

//               <div className="absolute inset-0 p-4 flex flex-col justify-between">
//                 <div>
//                   <div
//                     className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
//                       isDark ? "text-white" : "text-destructive"
//                     }`}
//                   >
//                     {item.label}
//                   </div>
//                   <h4
//                     className={`text-sm font-bold mb-1 group-hover/card:text-orange-400 transition-colors ${
//                       isDark ? "text-white" : "text-maroon-900"
//                     }`}
//                   >
//                     {item.title}
//                   </h4>
//                 </div>
//                 <p
//                   className={`text-xs line-clamp-2 ${
//                     isDark ? "text-white/80" : "text-maroon-800"
//                   }`}
//                 >
//                   {item.description}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { Moon, Sun, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isDark
          ? "bg-black/40 border-white/10"
          : "bg-white/40 border-maroon-200/30"
      } backdrop-blur-xl border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-smooth ${
                isDark
                  ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                  : "bg-gradient-to-br from-maroon-600 to-maroon-800 text-white"
              }`}
            >
              P
            </div>
            <span
              className={`font-bold text-xl hidden sm:inline transition-smooth ${
                isDark ? "text-white" : "text-maroon-900"
              }`}
            >
              Payland
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdownCards
              label="Products"
              isDark={isDark}
              items={[
                {
                  label: "OUR FLAGSHIP PRODUCT",
                  title: "Payland Pro",
                  description: "Complete payment solution for businesses",
                  image: "/payment-gateway-dashboard.png",
                },
                {
                  label: "SUPERCHARGED PAYMENTS",
                  title: "Payland Direct",
                  description: "API-first payment platform",
                  image: "/payment-processing-technology.jpg",
                },
                {
                  label: "PAYLAND POWERED",
                  title: "Hosted Fields",
                  description: "Secure payment forms",
                  image: "/secure-payment-form.jpg",
                },
                {
                  label: "ENTERPRISE SECURITY",
                  title: "Payland Safe",
                  description: "Enterprise-grade security",
                  image: "/security-encryption.jpgHeader",
                },
              ]}
            />
            <NavDropdownCards
              label="Solutions"
              isDark={isDark}
              items={[
                {
                  label: "FOR MERCHANTS",
                  title: "Merchant Solutions",
                  description: "Tailored for online stores",
                  image: "/ecommerce-store.png",
                },
                {
                  label: "FOR PLATFORMS",
                  title: "Platform Integration",
                  description: "Multi-vendor support",
                  image: "/platform-integration.jpg",
                },
                {
                  label: "FOR ENTERPRISES",
                  title: "Enterprise Suite",
                  description: "Large-scale operations",
                  image: "/enterprise-business.jpg",
                },
              ]}
            />
            <NavLink href="#company" isDark={isDark}>
              Company
            </NavLink>
            <NavLink href="#developers" isDark={isDark}>
              Developers
            </NavLink>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-smooth ${
                isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon className="w-5 h-5 text-maroon-700" />
              )}
            </button>
            <button
              className={`px-6 py-2.5 rounded-full font-medium transition-smooth hidden sm:block ${
                isDark
                  ? "border border-white/30 hover:border-white/50 text-white hover:bg-white/5"
                  : "border border-maroon-300 hover:border-maroon-500 text-maroon-900 hover:bg-maroon-50"
              }`}
            >
              Contact Us
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-smooth ${
                isDark ? "hover:bg-white/10" : "hover:bg-maroon-100"
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isDark ? "text-white" : "text-maroon-900"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isDark ? "text-white" : "text-maroon-900"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`lg:hidden pb-6 border-t transition-smooth ${
              isDark
                ? "border-white/10 bg-black/20"
                : "border-maroon-200 bg-white/20"
            }`}
          >
            <nav className="flex flex-col gap-2 pt-4">
              <MobileNavDropdown
                label="Products"
                isDark={isDark}
                items={[
                  {
                    label: "OUR FLAGSHIP PRODUCT",
                    title: "Payland Pro",
                    description: "Complete payment solution for businesses",
                    image: "/payment-gateway-dashboard.png",
                  },
                  {
                    label: "SUPERCHARGED PAYMENTS",
                    title: "Payland Direct",
                    description: "API-first payment platform",
                    image: "/payment-processing-technology.jpg",
                  },
                  {
                    label: "PAYLAND POWERED",
                    title: "Hosted Fields",
                    description: "Secure payment forms",
                    image: "/secure-payment-form.jpg",
                  },
                  {
                    label: "ENTERPRISE SECURITY",
                    title: "Payland Safe",
                    description: "Enterprise-grade security",
                    image: "/security-encryption.jpgHeader",
                  },
                ]}
              />
              <MobileNavDropdown
                label="Solutions"
                isDark={isDark}
                items={[
                  {
                    label: "FOR MERCHANTS",
                    title: "Merchant Solutions",
                    description: "Tailored for online stores",
                    image: "/ecommerce-store.png",
                  },
                  {
                    label: "FOR PLATFORMS",
                    title: "Platform Integration",
                    description: "Multi-vendor support",
                    image: "/platform-integration.jpg",
                  },
                  {
                    label: "FOR ENTERPRISES",
                    title: "Enterprise Suite",
                    description: "Large-scale operations",
                    image: "/enterprise-business.jpg",
                  },
                ]}
              />
              <MobileNavLink href="#company" isDark={isDark}>
                Company
              </MobileNavLink>
              <MobileNavLink href="#developers" isDark={isDark}>
                Developers
              </MobileNavLink>
              <button
                className={`w-full px-6 py-2.5 rounded-full font-medium transition-smooth mt-4 ${
                  isDark
                    ? "border border-white/30 hover:border-white/50 text-white hover:bg-white/5"
                    : "border border-maroon-300 hover:border-maroon-500 text-maroon-900 hover:bg-maroon-50"
                }`}
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  isDark,
}: {
  href: string;
  children: string;
  isDark: boolean;
}) {
  return (
    <a
      href={href}
      className={`px-4 py-2 text-sm font-medium transition-smooth rounded-lg ${
        isDark
          ? "text-white/80 hover:text-white hover:bg-white/5"
          : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  isDark,
}: {
  href: string;
  children: string;
  isDark: boolean;
}) {
  return (
    <a
      href={href}
      className={`px-4 py-3 text-sm font-medium transition-smooth rounded-lg ${
        isDark
          ? "text-white/80 hover:text-white hover:bg-white/5"
          : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
      }`}
    >
      {children}
    </a>
  );
}

interface DropdownItem {
  label: string;
  title: string;
  description: string;
  image: string;
}

function NavDropdownCards({
  label,
  items,
  isDark,
}: {
  label: string;
  items: DropdownItem[];
  isDark: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={`px-4 py-2 text-sm font-medium transition-smooth rounded-lg flex items-center gap-1 ${
          isDark
            ? "text-white/80 hover:text-white hover:bg-white/5 group-hover:bg-white/5"
            : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100 group-hover:bg-maroon-100"
        }`}
      >
        {label}
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>

      <div
        className={`absolute left-0 mt-0 w-max bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 group-hover:translate-y-2 ${
          isDark
            ? "bg-black/80 border border-white/10"
            : "bg-white/80 border border-maroon-200"
        }`}
      >
        <div
          className={`grid gap-4 ${
            items.length === 4 ? "grid-cols-4" : "grid-cols-3"
          } relative`}
        >
          {items.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`group/card rounded-xl overflow-hidden transition-all duration-300 relative h-48 w-48 border ${
                isDark
                  ? "border-white/10 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
                  : "border-maroon-200 hover:border-maroon-600 hover:shadow-lg hover:shadow-maroon-400/20"
              }`}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover blur-[2px]"
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isDark
                    ? "bg-black/40 group-hover/card:bg-black/30"
                    : "bg-white/40 group-hover/card:bg-white/30"
                }`}
              ></div>

              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      isDark ? "text-white" : "text-destructive"
                    }`}
                  >
                    {item.label}
                  </div>
                  <h4
                    className={`text-sm font-bold mb-1 group-hover/card:text-orange-400 transition-colors ${
                      isDark ? "text-white" : "text-maroon-900"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>

                <div
                  className={`translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 rounded-lg p-2 backdrop-blur-md ${
                    isDark ? "bg-black/70" : "bg-white/70"
                  }`}
                >
                  <p
                    className={`text-xs ${
                      isDark ? "text-white/90" : "text-maroon-900"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavDropdown({
  label,
  items,
  isDark,
}: {
  label: string;
  items: DropdownItem[];
  isDark: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 text-sm font-medium transition-smooth rounded-lg flex items-center justify-between ${
          isDark
            ? "text-white/80 hover:text-white hover:bg-white/5"
            : "text-maroon-700 hover:text-maroon-900 hover:bg-maroon-100"
        }`}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 px-2">
          <div className="grid grid-cols-2 gap-3">
            {items.map((item, idx) => (
              <a
                key={idx}
                href="#"
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                className={`rounded-xl overflow-hidden transition-all duration-300 relative h-40 border ${
                  isDark
                    ? "border-white/10 active:border-orange-500/50"
                    : "border-maroon-200 active:border-maroon-600"
                }`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover blur-[2px]"
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isDark ? "bg-black/40" : "bg-white/40"
                  }`}
                ></div>

                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <div>
                    <div
                      className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${
                        isDark ? "text-white" : "text-destructive"
                      }`}
                    >
                      {item.label}
                    </div>
                    <h4
                      className={`text-xs font-bold ${
                        isDark ? "text-white" : "text-maroon-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>

                  <div
                    className={`transition-all duration-300 rounded-lg p-2 backdrop-blur-md ${
                      activeCard === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    } ${isDark ? "bg-black/70" : "bg-white/70"}`}
                  >
                    <p
                      className={`text-[10px] ${
                        isDark ? "text-white/90" : "text-maroon-900"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}