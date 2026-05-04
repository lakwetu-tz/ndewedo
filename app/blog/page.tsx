"use client";

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import { ArrowRight, Clock, Calendar, Heart } from 'lucide-react'
import { posts } from './data'

export default function BlogPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://media-cdn.tripadvisor.com/media/photo-s/07/aa/39/59/camp-fire-stories-with.jpg"
            alt="Ndewedo Blog"
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
            <span className="text-[#c97500]">Journal</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-[42px] sm:text-[60px] md:text-[75px] leading-[1.05] mb-6"
          >
            The <span className="italic text-[#c97500]">Wild Journal</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-quattro text-[18px] sm:text-[20px] text-white/70 leading-relaxed max-w-[700px] mx-auto"
          >
            Stories, insights, and adventures from the heart of Tanzania. Discover expert tips, cultural encounters, and safari secrets.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[4px]">Scroll to Explore</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Intro Section */}
      {/* <section className="relative py-32 px-6 bg-[#0f440f] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c97500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#c97500] uppercase block mb-8">OUR STORIES</span>
            <h2 className="font-serif text-[32px] md:text-[48px] text-white leading-tight">
              Tales from the <span className="italic text-[#c97500]">wild heart</span> of Africa
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: posts.length.toString(), label: 'Stories' },
              { value: '2025', label: 'This Year' },
              { value: 'Tanzania', label: 'The Focus' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-[36px] text-[#c97500]">{stat.value}</div>
                <div className="text-[12px] tracking-[2px] text-white/50 uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <div className="h-[1px] w-20 bg-[#c97500]/50 mx-auto mt-12" />
        </div>
      </section> */}

      {/* Blog Posts Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={post.href} className="group block h-full">
                  <article className="bg-white rounded-[2px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-[280px] overflow-hidden">
                      <ImageWithFallback 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-[2px] text-[12px] font-['Poppins'] tracking-[2px] uppercase text-[#222] shadow-lg">
                        {post.date}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight size={18} className="text-[#c97500]" />
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h2 className="font-serif text-[24px] text-[#222] mb-4 leading-tight group-hover:text-[#1f751f] transition-colors">
                        {post.title}
                      </h2>
                      <p className="font-quattro text-[16px] text-[#666] leading-relaxed mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="font-['Poppins'] text-[12px] tracking-[2px] uppercase text-[#888] group-hover:text-[#1f751f] transition-colors">
                          Read Article
                        </span>
                        <ArrowRight size={16} className="text-[#ccc] group-hover:text-[#1f751f] transition-colors transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto text-center">
          <Heart size={40} strokeWidth={1} className="text-[#c97500] mx-auto mb-8" />
          <h2 className="font-serif text-[36px] md:text-[48px] text-[#222] mb-6">
            Stay in the <span className="italic text-[#1f751f]">loop</span>
          </h2>
          <p className="font-quattro text-[18px] text-[#666] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Subscribe to receive stories, safari tips, and adventure updates from Tanzania directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-[2px] font-quattro text-[16px] focus:outline-none focus:border-[#1f751f] transition-colors"
            />
            <button 
              type="submit"
              className="bg-[#1f751f] text-white px-8 py-4 rounded-[2px] font-['Poppins'] text-[14px] tracking-[3px] uppercase hover:bg-[#c97500] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}