"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://gilleadsafaris.com/backend/newsletter.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || "Subscriber", email }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Thank you for subscribing!");
        setEmail("");
        setName("");
      } else {
        toast.error(data.message || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/gallery", label: "Gallery" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact us" },
      { href: "/reviews", label: "Client Reviews" },
    ],
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/cultural-tours", label: "Cultural Tours" },
      { href: "/trekking", label: "Trekkings" },
      { href: "/safaris", label: "Safaris" },
      { href: "/blog", label: "Blog" },
    ],
  };

  return (
    <footer className="bg-[#0f440f] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-[20px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/20 mb-12 gap-6"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[32px] leading-[1.3] font-bold">
              Get Updated with Latest
            </h3>
            <p className="font-serif text-[22px] sm:text-[26px] md:text-[32px] leading-[1.3] text-[#c97500]">
              News Letters
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="bg-white/10 border border-white/30 rounded-[4px] px-4 py-3 font-quattro text-[14px] text-white placeholder-white/60 w-full sm:w-[200px] outline-none focus:border-[#c97500] h-[56px] disabled:opacity-70"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="bg-white/10 border border-white/30 rounded-[4px] px-4 py-3 font-quattro text-[14px] text-white placeholder-white/60 w-full sm:w-[350px] outline-none focus:border-[#c97500] h-[56px] disabled:opacity-70"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#c97500] text-white px-6 py-3 rounded-[4px] font-quattro text-[14px] font-bold whitespace-nowrap hover:bg-[#b36800] transition-colors w-full sm:w-auto h-[56px] flex items-center justify-center min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : "Subscribe Now"}
            </motion.button>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="h-[56px] sm:h-[76px] w-[174px] sm:w-[235px] mb-4">
              <img
                src="https://ndewedotours.com/wp-content/uploads/2025/02/Ndewedo-Logo3-249x82-2.webp"
                alt="Ndewedo Tours"
                className="h-full w-full object-contain brightness-0 invert"
              />
            </div>
            <p className="font-quattro text-[14px] text-white/80 leading-[22.6px]">
              Specialize in delivering exceptional travel experiences tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 font-bold">
              Tanzania Offices
            </h4>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">P.O.BOX 11677 - Sakina Arusha</p>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">info@ndewedotours.com</p>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">+255 753 243 280</p>

            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 mt-6 font-bold">
              UK Offices
            </h4>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">KY1 1PA, Kirkcaldy, Scotland, UK</p>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">natalie@ndewedotours.com</p>
            <p className="font-quattro text-[12px] text-white/70 leading-[25.6px]">+44 743 203 8845</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 font-bold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-quattro text-[12px] text-white/70 hover:text-[#c97500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-quattro text-[12px] text-white/70 hover:text-[#c97500] transition-colors"
                  >
                    {link.label}
                  </Link>
                  </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 font-bold">
              Privacy Policy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="font-quattro text-[14px] text-white/70 hover:text-[#c97500] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <h4 className="font-open text-[18px] sm:text-[20px] md:text-[22px] text-white mb-4 mt-6 font-bold">
              Conditions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="font-quattro text-[12px] text-white/70 hover:text-[#c97500] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="font-quattro text-[12px] text-white/70 hover:text-[#c97500] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-white/20 mb-6 gap-6"
        >
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#c97500] transition-colors"
              >
                <social.icon className="text-white" size={18} />
              </motion.a>
            ))}
          </div>
          <Link
            href="/inquire"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-[4px] font-quattro text-[16px] hover:bg-white hover:text-[#0f440f] transition-colors"
          >
            Inquire Today
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="font-quattro text-[12px] text-white/70">Copyright © 2025 All Rights Reserved</p>
          <p className="font-quattro text-[12px] text-white/70">
            Web by <span className="text-[#c97500] font-bold">Debmbito</span>
          </p>
          <div className="flex gap-2">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 30'%3E%3Crect fill='%23eee' width='40' height='30' rx='3'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-size='8' fill='%23666'%3EVisa%3C/text%3E%3C/svg%3E" alt="Visa" className="h-6" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 30'%3E%3Crect fill='%23eee' width='40' height='30' rx='3'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-size='8' fill='%23666'%3EMC%3C/text%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 30'%3E%3Crect fill='%23eee' width='40' height='30' rx='3'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-size='8' fill='%23666'%3EAmex%3C/text%3E%3C/svg%3E" alt="Amex" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}