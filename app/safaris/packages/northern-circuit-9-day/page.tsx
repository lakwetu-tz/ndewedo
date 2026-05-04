"use client";

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import {
  Clock, Users, MapPin, Calendar, Check, Star, X,
  ChevronRight, Mail, Phone, Download, Share2,
  Camera, Shield, Utensils, Heart, Info, ArrowRight,
  Compass, Sun, Mountain, Palette
} from 'lucide-react'
import PackageSubNav from '@/components/PackageSubNav'
import ItineraryAccordion from '@/components/ItineraryAccordion'
import BookingModal from '@/components/BookingModal';

const packageGallery = [
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fb/a5/c8/luxury-ensuite-room-view.jpg?w=900&h=500&s=1',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516422317184-c68d8c5a10a8?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80',
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Arusha – Warm Tanzanian Welcome',
    location: 'Arusha',
    activities: [
      'Arrival at Kilimanjaro International Airport (JRO)',
      'Warm welcome and transfer to Arusha',
      'Relax after your journey',
      'Optional guided coffee plantation walk'
    ],
    meals: 'Dinner',
    accommodation: 'Luxury: Arusha Coffee Lodge | Mid-Range: Under the shade safari lodge',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80'],
  },
  {
    day: 2,
    title: 'Arusha to Ngorongoro – The Garden of Eden',
    location: 'Ngorongoro Crater Rim',
    activities: [
      'Scenic drive through highlands and villages',
      'Arrive at Ngorongoro Conservation Area',
      'Afternoon at leisure with crater views',
      'Relax at lodge or camp'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Luxury: Meliá Collection Ngorongoro Lodge | Mid-Range: Ngorongoro Ang’ata Camp',
    images: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1080&q=80'],
  },
  {
    day: 3,
    title: 'Ngorongoro to Central Serengeti – Into the Wilderness',
    location: 'Central Serengeti',
    activities: [
      'Morning departure from Ngorongoro',
      'Scenic drive to Serengeti',
      'Afternoon game drive in Seronera region',
      'Excellent predator & plains game sightings'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Luxury: Siringit Serengeti Camp | Mid-Range: Ang’ata Camp Central Serengeti',
    images: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1080&q=80'],
  },
  {
    day: 9,
    title: 'Departure from Tanzania',
    location: 'Kilimanjaro International Airport',
    activities: [
      'Breakfast at lodge/camp',
      'Transfer to JRO Airport',
      'Farewell & departure'
    ],
    meals: 'Breakfast',
    accommodation: 'End of safari',
    images: ['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1080&q=80'],
  }
];

export default function PackageDetailPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const packageName = "9-Day Exclusive Northern Tanzania Safari";
  const packagePrice = "$9,840";
  const duration = "9 Days / 8 Nights";
  const rating = 4.9;
  const reviewCount = 127;

  const highlights = [
    { icon: Compass, label: '4 Parks', value: 'Northern Circuit' },
    { icon: Mountain, label: 'Altitude', value: '2,400m' },
    { icon: Palette, label: 'Experience', value: 'Premium' },
    { icon: Sun, label: 'Best Time', value: 'Jun-Oct' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={packageGallery[0]}
            alt={packageName}
            className="object-cover w-full h-[110%] -mt-[5%]"
          />
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Animated Particles / Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-500" />
        </div>

        {/* Main Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-4 max-w-[1000px]"
        >
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6 text-[12px] tracking-[4px] uppercase"
          >
            <Link href="/safaris" className="text-white/60 hover:text-white transition-colors">Safaris</Link>
            <span className="text-white/30">/</span>
            <Link href="/safaris/wildlife" className="text-white/60 hover:text-white transition-colors">Wildlife</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#c97500]">Northern Circuit</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-[42px] sm:text-[60px] md:text-[75px] lg:text-[85px] leading-[1.05] mb-8"
          >
            <span className="block">{packageName.split(' ').slice(0, 3).join(' ')}</span>
            <span className="italic text-[#c97500] block">{packageName.split(' ').slice(3).join(' ')}</span>
          </motion.h1>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-left">
                <item.icon size={18} className="text-[#c97500]" />
                <div>
                  <div className="text-[11px] tracking-[2px] text-white/50 uppercase">{item.label}</div>
                  <div className="text-[14px] font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Rating & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <button 
              onClick={() => setBookingOpen(true)}
              className="bg-[#c97500] hover:bg-[#e08500] text-white px-10 py-4 rounded-[2px] font-['Poppins'] text-[13px] tracking-[3px] uppercase transition-colors shadow-xl"
            >
              Begin Your Journey
            </button>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(rating) ? "text-amber-400 fill-current" : "text-white/30"} />
                ))}
              </div>
              <span className="text-[14px]">{rating}</span>
              <span className="text-white/50 text-[12px]">({reviewCount} reviews)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[4px]">Scroll to Explore</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* Intro Editorial Section */}
      <section className="relative py-32 px-6 bg-[#0f440f] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c97500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE EXPERIENCE</span>
            <h2 className="font-serif text-[32px] md:text-[48px] text-white leading-tight mb-8">
              A meticulously crafted journey through <span className="italic text-[#c97500]">Tanzania's</span> most celebrated landscapes.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left font-quattro text-[17px] text-white/70 leading-[1.8]">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Embark on an unforgettable safari journey through Northern Tanzania, a land of extraordinary contrasts where ancient volcanic craters cradle dense wildlife populations and endless savannahs stretch to the horizon.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              This itinerary blends Arusha, Ngorongoro, Serengeti, and Tarangire into one seamless experience. Choose between Luxury and Mid-Range options, ensuring flexibility without compromising the quality of your adventure.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: '4', label: 'National Parks' },
              { value: '8', label: 'Nights Accommodation' },
              { value: '100+', label: 'Wildlife Species' },
              { value: '3', label: 'Meals Daily' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-[36px] text-[#c97500]">{stat.value}</div>
                <div className="text-[12px] tracking-[2px] text-white/50 uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <div className="h-[1px] w-20 bg-[#c97500]/50 mx-auto mt-16" />
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40">
        <PackageSubNav />
      </div>

      {/* Itinerary & Sidebar Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-24">

              {/* Gallery Grid */}
              <div id="overview" className="space-y-12">
                <div>
                  <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#888] uppercase">VISUAL JOURNAL</span>
                  <h3 className="font-serif text-[36px] text-[#222] mt-2">Experience Gallery</h3>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-8 relative aspect-[16/9] overflow-hidden rounded-[2px] group cursor-pointer">
                    <ImageWithFallback src={packageGallery[1]} alt="Safari" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] group cursor-pointer">
                      <ImageWithFallback src={packageGallery[2]} alt="Safari" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] group cursor-pointer">
                      <ImageWithFallback src={packageGallery[3]} alt="Safari" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="col-span-6 relative aspect-[4/3] overflow-hidden rounded-[2px] group cursor-pointer">
                    <ImageWithFallback src={packageGallery[4]} alt="Safari" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="col-span-6 relative aspect-[4/3] overflow-hidden rounded-[2px] group cursor-pointer">
                    <ImageWithFallback src={packageGallery[5]} alt="Safari" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div id="itinerary" className="space-y-12">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#888] uppercase">THE JOURNEY</span>
                    <h3 className="font-serif text-[36px] text-[#222] mt-2">Day-by-Day <span className="text-[#1f751f]">Itinerary</span></h3>
                  </div>
                  <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-2 text-[12px] text-[#888]">
                      <span className="w-2 h-2 bg-[#1f751f] rounded-full" />
                      <span>Active Day</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-[#888]">
                      <span className="w-2 h-2 bg-[#ccc] rounded-full" />
                      <span>View More</span>
                    </div>
                  </div>
                </div>
                <div className="editorial-accordion">
                   <ItineraryAccordion itinerary={itinerary} />
                </div>
              </div>

              {/* Rates Table */}
              <div id="rates" className="bg-[#f9f9f7] p-12 rounded-[2px]">
                <h3 className="font-serif text-[32px] text-[#222] mb-8">Expedition Rates</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div>
                      <h4 className="font-['Poppins'] text-[14px] tracking-[2px] uppercase text-[#222]">Luxury Collection</h4>
                      <p className="text-[14px] text-[#666]">Premium Lodges & Camps</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-[28px] text-[#1f751f]">{packagePrice}</p>
                      <p className="text-[12px] text-[#888] uppercase tracking-[1px]">Per Person</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div>
                      <h4 className="font-['Poppins'] text-[14px] tracking-[2px] uppercase text-[#222]">Mid-Range Selection</h4>
                      <p className="text-[14px] text-[#666]">Comfortable Adventure Camps</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-[28px] text-[#1f751f]">$5,200</p>
                      <p className="text-[12px] text-[#888] uppercase tracking-[1px]">Per Person</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-3 text-[#888] text-[14px]">
                   <Info size={16} className="mt-1 flex-shrink-0" />
                   <p>Rates are inclusive of all taxes and park fees. Seasonal surcharges may apply during peak periods (July-Oct).</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">

                {/* Booking Card */}
                <div className=" text-white p-10 rounded-[2px] shadow-2xl">
                  <div className="mb-8">
                    <span className="font-['Poppins'] text-[12px] tracking-[3px] text-white/50 uppercase">Starting from</span>
                    <div className="font-serif text-[48px] text-[#c97500] leading-none mt-2">{packagePrice}</div>
                    <p className="text-[14px] text-[#888] mt-2 italic">per traveler sharing</p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="w-full bg-[#1f751f] py-5 rounded-[2px] font-open text-[13px] tracking-[3px] uppercase hover:bg-[#c97500] transition-colors flex items-center justify-center gap-3"
                    >
                      Inquire About This Trip <ArrowRight size={16} />
                    </button>
                    <a href="tel:+255753243280" className="w-full border border-black/20 text-[#888] py-5 rounded-[2px] font-open text-[13px] tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                      Call an Expert
                    </a>
                  </div>

                  <div className="mt-10 pt-10 border-t border-black/10 grid grid-cols-2 gap-6">
                    <button className="flex flex-col items-center gap-2 group">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <Download size={16} className='text-[#888]' />
                      </div>
                      <span className="text-[10px] tracking-[2px] uppercase text-[#888]">Itinerary</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 group">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <Share2 size={16} className='text-[#888]' />
                      </div>
                      <span className="text-[10px] tracking-[2px] uppercase text-[#888]">Share</span>
                    </button>
                  </div>
                </div>

                {/* Quick Inclusions */}
                <div id="inclusions" className="bg-[#fdfcfb] border border-gray-100 p-10 rounded-[2px]">
                  <h4 className="font-serif text-[24px] text-[#222] mb-8">What's <span className="text-[#1f751f]">Included</span></h4>
                  <ul className="space-y-4">
                    {[
                      'Private 4x4 Safari Vehicle',
                      'Professional Local Guide',
                      'All National Park Entry Fees',
                      'Handpicked Accommodations',
                      'Gourmet Full Board Meals',
                      'Airport Meet & Greet'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[15px] text-[#666]">
                        <Check size={16} className="text-[#1f751f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">TESTIMONIALS</span>
            <h2 className="font-serif text-[40px] text-[#222]">The <span className="italic text-[#1f751f]">Ndewedo</span> Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Michael R.", location: "USA", text: "This safari exceeded all our expectations. The Serengeti was breathtaking and our guide was incredibly knowledgeable." },
              { name: "Laura K.", location: "UK", text: "From the moment we were picked up to the final drop-off, everything was seamless. The accommodations were comfortable." },
              { name: "Thomas S.", location: "Germany", text: "An amazing experience! The Ngorongoro Crater descent was spectacular and we saw so many animals." }
            ].map((review, i) => (
              <div key={i} className="text-center group">
                <div className="flex justify-center gap-1 text-[#fbbf24] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-quattro text-[18px] text-[#444] italic leading-relaxed mb-8">"{review.text}"</p>
                <div className="font-['Poppins'] text-[12px] tracking-[2px] uppercase text-[#222]">{review.name}</div>
                <div className="text-[11px] tracking-[1px] text-[#888] mt-1">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setBookingOpen(false)}
        safariPackage={{ name: packageName, amount: packagePrice }}
      />
    </div>
  )
}
