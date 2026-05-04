"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Package, ArrowRight, Check, Star, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import TailorMadeSafariWizard from '@/components/TailorMadeSafariWizard';
import { HeroSection } from '@/components/HeroSection';

export default function InquirePage() {
  const [showWizard, setShowWizard] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
              alt="Plan Your Safari"
              className="object-cover w-full h-[110%] -mt-[5%]"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="relative z-10 text-center text-white px-4 max-w-[900px]"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6 text-[12px] tracking-[4px] uppercase"
            >
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-[#c97500]">Inquire</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-[42px] sm:text-[60px] md:text-[75px] leading-[1.05] mb-6"
            >
              Plan Your <span className="italic text-[#c97500]">Perfect Safari</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-quattro text-[18px] sm:text-[20px] text-white/70 leading-relaxed max-w-[700px] mx-auto"
            >
              Choose from our curated packages or build a completely customized safari experience
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[4px]">Get Started</span>
            <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
          </motion.div>
        </section>

        {/* Selection Cards - Editorial Layout */}
        <section className="relative py-32 px-6 bg-[#0f440f] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c97500]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#c97500] uppercase block mb-8">CHOOSE YOUR PATH</span>
              <h2 className="font-serif text-[32px] md:text-[48px] text-white">
                Begin Your <span className="italic text-[#c97500]">Journey</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* View Current Packages */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2px] p-10 md:p-12 border border-white/10 hover:shadow-2xl transition-all"
              >
                <div className="flex justify-center mb-8">
                  <div className="bg-[#f5f5f5] w-20 h-20 rounded-full flex items-center justify-center">
                    <Package className="text-[#1f751f]" size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-serif text-[32px] text-[#222] mb-4 text-center">
                  View Current Packages
                </h3>
                <p className="font-quattro text-[16px] text-[#666] mb-8 text-center leading-relaxed">
                  Explore our carefully curated safari packages, designed by experts with years of experience. Perfect for first-time visitors.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Pre-planned itineraries', 'Fixed pricing & availability', 'Proven routes & experiences', 'Quick booking process'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-[#444]">
                      <Check size={16} className="text-[#1f751f] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/safaris"
                  className="w-full bg-[#1f751f] text-white px-6 py-4 rounded-[2px] text-[14px] tracking-[3px] uppercase hover:bg-[#0f440f] transition-colors flex items-center justify-center gap-2"
                >
                  View Packages
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Build Tailor-Made Safari */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-[2px] p-10 md:p-12 border border-[#c97500]/30 hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 bg-[#c97500] text-white px-4 py-1 rounded-full text-[11px] tracking-[2px] uppercase">
                  Recommended
                </div>
                <div className="flex justify-center mb-8">
                  <div className="bg-[#c97500] w-20 h-20 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white" size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-serif text-[32px] text-white mb-4 text-center">
                  Build a Tailor-Made Safari
                </h3>
                <p className="font-quattro text-[16px] text-white/70 mb-8 text-center leading-relaxed">
                  Create your dream safari from scratch. Choose your destinations, activities, accommodations, and dates.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Fully customizable experience', 'Flexible dates & duration', 'Personalized to your interests', 'Expert guidance throughout'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[15px] text-white/80">
                      <Check size={16} className="text-[#c97500] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowWizard(true)}
                  className="w-full bg-[#c97500] text-white px-6 py-4 rounded-[2px] text-[14px] tracking-[3px] uppercase hover:bg-[#e08500] transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  Start Building
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Tailor-Made - Sage Grid Style */}
        <section className="py-24 px-6 bg-[#d1dcd0]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#2c3e2c]/60 uppercase block mb-4">THE DIFFERENCE</span>
              <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80">
                Why Choose <span className="text-[#1f751f]">Tailor-Made</span>?
              </h2>
              <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎯', title: 'Your Way, Your Pace', desc: 'Every traveler is unique. Design a safari that matches your interests, budget, and travel style perfectly.' },
                { icon: '🗓️', title: 'Complete Flexibility', desc: 'Choose your travel dates, duration, and activities. No need to compromise on timing or preferences.' },
                { icon: '👥', title: 'Expert Consultation', desc: 'Our safari experts will work with you to create the perfect itinerary based on your selections.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-[2px] text-center group hover:bg-white transition-colors"
                >
                  <div className="text-[48px] mb-6">{item.icon}</div>
                  <h3 className="font-serif text-[24px] text-[#222] mb-4">{item.title}</h3>
                  <p className="font-quattro text-[16px] text-[#666] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[900px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f7] rounded-[2px] p-12 md:p-16 text-center"
            >
              <MessageCircle size={40} strokeWidth={1} className="text-[#c97500] mx-auto mb-8" />
              <p className="font-serif text-[22px] sm:text-[28px] text-[#333] mb-8 leading-relaxed italic">
                "The tailor-made safari experience was absolutely incredible. The team listened to our preferences and created the perfect itinerary. We saw everything we hoped for and more!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#c97500] flex items-center justify-center text-white text-[18px] font-serif">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-['Poppins'] text-[14px] tracking-[1px] uppercase text-[#222]">Jessica Martinez</div>
                  <div className="text-[12px] text-[#888]">USA • December 2024</div>
                </div>
              </div>
              <div className="flex justify-center gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-[#0f440f] text-white">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="font-serif text-[40px] md:text-[55px] mb-8">
              Ready to Start <span className="italic text-[#c97500]">Planning</span>?
            </h2>
            <p className="font-quattro text-white/60 text-[18px] mb-12 max-w-[600px] mx-auto">
              Whether you choose a package or build your own, we're here to make your safari dreams come true
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-[#0f440f] px-10 py-4 rounded-[2px] text-[14px] tracking-[3px] uppercase hover:bg-[#f5f5f5] transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => setShowWizard(true)}
                className="bg-[#c97500] text-white px-10 py-4 rounded-[2px] text-[14px] tracking-[3px] uppercase hover:bg-[#e08500] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                Build Your Safari
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Tailor-Made Safari Wizard Modal */}
      <TailorMadeSafariWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
    </>
  );
}