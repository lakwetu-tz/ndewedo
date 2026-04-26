"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";

const safariPackages = [
  {
    title: "Wildlife Safaris",
    description: "Experience Africa's incredible wildlife",
    image:
      "https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?w=400",
    href: "/safaris/wildlife",
  },
  {
    title: "Photography Safaris",
    description: "Capture stunning wildlife moments",
    image:
      "https://images.unsplash.com/photo-1689479665582-51d0c25215b7?w=400",
    href: "/safaris/photography",
  },
  {
    title: "Luxury Safaris",
    description: "Premium safari experiences",
    image:
      "https://images.unsplash.com/photo-1516494982030-fda424f96b59?w=400",
    href: "/safaris/luxury",
  },
];

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({
  transparent = false,
}: HeaderProps) {
  const pathname = usePathname();
  const [safariDropdownOpen, setSafariDropdownOpen] =
    useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-detect pages that should have transparent header
  // Only home page is transparent by default now
  const shouldBeTransparent = transparent || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled enough to change appearance
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past a threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Force transparent state on home page before scrolling, otherwise use solid state
  const isTransparent = shouldBeTransparent && !scrolled;

  const textColor = isTransparent
    ? "text-white"
    : "text-[#0f440f]";
  const hoverColor = isTransparent
    ? "hover:text-white/80"
    : "hover:text-[#1f751f]";

  const headerClass = `fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
    isTransparent ? "bg-transparent" : "bg-white/95 backdrop-blur-sm shadow-sm"
  }`;

  return (
    <motion.header
      className={headerClass}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] font-open mx-auto px-4 sm:px-[20px] py-[15px] sm:py-[20px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-[50px] sm:h-[65.86px] w-[150px] sm:w-[200px] relative">
              <img
                src="https://ndewedotours.com/wp-content/uploads/2025/02/Ndewedo-Logo3-249x82-2.webp"
                alt="Ndewedo Tours"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-[20px]">
            <Link
              href="/"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              About
            </Link>

            {/* Safaris Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSafariDropdownOpen(true)}
              onMouseLeave={() => setSafariDropdownOpen(false)}
            >
              <Link
                href="/safaris"
                className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[19px]`}
              >
                Safaris
                <ChevronDown className="w-[19px] h-[19px]" />
              </Link>
              <AnimatePresence>
                {safariDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-[15px] py-3 min-w-[320px] border border-gray-100"
                  >
                    {safariPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href={pkg.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-[4px] overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={pkg.image}
                            alt={pkg.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-[#0f440f] text-[15px]">
                            {pkg.title}
                          </div>
                          <div className="text-[#686868] text-[13px]">
                            {pkg.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/trekking"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              Trekking
            </Link>
            <Link
              href="/cultural-tours"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              Cultural Tours
            </Link>
            <Link
              href="/volunteer"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              Volunteer
            </Link>
            <Link
              href="/blog"
              className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/inquire"
            className={`hidden lg:block px-[20.8px] py-[10.8px] rounded-[4px] font-quattro text-[18px] transition-colors ${
              isTransparent
                ? "bg-transparent border border-white text-white hover:bg-white hover:text-[#0f440f]"
                : "bg-transparent border border-[#102310] text-[#0f440f] hover:bg-[#0f440f] hover:text-white"
            }`}
          >
            Inquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white rounded-b-[20px] shadow-xl absolute top-[80px] left-0 right-0 px-4 overflow-hidden"
            >
              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="py-2">
                  <div className="text-[#0f440f] mb-2">
                    Safaris
                  </div>
                  <div className="pl-4 flex flex-col gap-2">
                    {safariPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href={pkg.href}
                        className="text-[#686868] hover:text-[#1f751f] transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {pkg.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/trekking"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trekking
                </Link>
                <Link
                  href="/cultural-tours"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cultural Tours
                </Link>
                <Link
                  href="/volunteer"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  href="/blog"
                  className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#0f440f] text-white px-6 py-3 rounded-[4px] text-center mt-2 hover:bg-[#1f751f] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inquire Today
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
