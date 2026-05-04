"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({
  transparent = false,
}: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const shouldBeTransparent = transparent || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isTransparent = shouldBeTransparent && !scrolled;

  const textColor = isTransparent ? "text-white" : "text-[#0f440f]";
  const hoverColor = isTransparent ? "hover:text-white/80" : "hover:text-[#1f751f]";

  const headerClass = `fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
    isTransparent ? "bg-transparent" : "bg-white/95 backdrop-blur-sm shadow-sm"
  }`;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/safaris", label: "Safaris" },
    { href: "/trekking", label: "Trekking" },
    { href: "/cultural-tours", label: "Cultural Tours" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <motion.header
      className={headerClass}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] font-open mx-auto px-4 sm:px-[20px] py-[15px] sm:py-[20px]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-[50px] sm:h-[65.86px] w-[150px] sm:w-[200px] relative">
              <img
                src="https://ndewedotours.com/wp-content/uploads/2025/02/Ndewedo-Logo3-249x82-2.webp"
                alt="Ndewedo Tours"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-[20px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${textColor} ${hoverColor} transition-colors font-['Poppins'] text-[18.7px]`}
              >
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          <Link
            href="/inquire"
            className={`hidden lg:block px-[20.8px] py-[10.8px] rounded-[4px] font-quattro text-[18px] transition-colors ${
              isTransparent
                ? "bg-transparent border border-white text-white hover:bg-white hover:text-[#0f440f]"
                : "bg-transparent border border-[#102310] text-[#0f440f] hover:bg-[#0f440f] hover:text-white"
            }`}
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Inquire Now
            </motion.span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white rounded-b-[20px] shadow-xl absolute top-[80px] left-0 right-0 px-4 overflow-hidden"
            >
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#0f440f] hover:text-[#1f751f] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/inquire"
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