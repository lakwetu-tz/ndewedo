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
  'https://www.safaribookings.com/serengeti/photos/large/serengeti-sunset-plains.jpg',
  'https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg',
  'https://www.safaribookings.com/ngorongoro/photos/large/view-over-the-crater-floor-from-the-rim.jpg',
  'https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg',
  'https://bougainvillealodge.com/wp-content/uploads/lodge-gardens.jpg',
  'https://intowildafrica.com/wp-content/uploads/gallery/serengeti-tent-sunset.jpg',
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Tanzania – Arusha Welcome',
    location: 'Shade Safari Lodge',
    activities: [
      'Arrival at Kilimanjaro International Airport (JRO)',
      'Warm welcome by professional representative',
      'Briefing on itinerary and safety',
      'Private transfer to lodge (~1 hour)',
      'Relax in gardens followed by a quiet dinner'
    ],
    meals: 'Dinner',
    accommodation: 'Shade Safari Lodge',
    images: ['https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg'],
  },
  {
    day: 2,
    title: 'Tarangire National Park Expedition',
    location: 'Bougainvillea Lodge',
    activities: [
      'Scenic drive to Tarangire National Park',
      'Half-day private game drive: elephants & baobabs',
      'Picnic lunch with high hygiene standards',
      'Relax in lodge gardens with sunset views'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Bougainvillea Lodge',
    images: ['https://skjtravel.com/wp-content/uploads/2015/07/Tarangire-Elephants-Baobabs.jpg'],
  },
  {
    day: 3,
    title: 'Into the Great Serengeti',
    location: 'Into the Wild Lodge',
    activities: [
      'Scenic drive through Ngorongoro Highlands',
      'Picnic lunch en route with panoramic views',
      'Afternoon game drive on arrival in Serengeti',
      'Immersive wilderness experience'
    ],
    meals: 'Breakfast, Lunch, Dinner',
    accommodation: 'Into the Wild Lodge',
    images: ['https://www.safaribookings.com/serengeti/photos/large/serengeti-sunset-plains.jpg'],
  },
  {
    day: 6,
    title: 'Departure from Kilimanjaro',
    location: 'Kilimanjaro International Airport',
    activities: [
      'Breakfast and final farewells',
      'Private transfer to JRO or Arusha Airport',
      'Assistance with luggage and check-in',
      'End of services with cherished memories'
    ],
    meals: 'Breakfast',
    accommodation: 'End of journey',
    images: ['https://undertheshadesafarilodge.co.tz/wp-content/uploads/shade-garden.jpg'],
  }
];

export default function JapanesePackagePage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const packageName = "6-Day Premium Tanzania Safari Experience";
  const packagePrice = "$4,250";
  const duration = "6 Days / 5 Nights";
  const rating = 5.0;
  const reviewCount = 85;

  const highlights = [
    { icon: Compass, label: 'Parks', value: '3' },
    { icon: Mountain, label: 'Circuit', value: 'Northern' },
    { icon: Palette, label: 'Experience', value: 'Premium' },
    { icon: Sun, label: 'Best Time', value: 'Year-round' },
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center text-white px-4 max-w-[1000px]"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6 text-[12px] tracking-[4px] uppercase"
          >
            <Link href="/safaris" className="text-white/60 hover:text-white transition-colors">Safaris</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#c97500]">Premium</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-[42px] sm:text-[60px] md:text-[75px] lg:text-[85px] leading-[1.05] mb-8"
          >
            <span className="block">{packageName.split(' ').slice(0, 3).join(' ')}</span>
            <span className="italic text-[#c97500] block">{packageName.split(' ').slice(3).join(' ')}</span>
          </motion.h1>

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c97500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-[1000px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#c97500] uppercase block mb-8">REFINED DISCOVERY</span>
            <h2 className="font-serif text-[32px] md:text-[48px] text-white leading-tight mb-8">
              A gentle, educational journey focused on <span className="italic text-[#c97500]">harmony and comfort.</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left font-quattro text-[17px] text-white/70 leading-[1.8]">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              This exclusive 6-day Northern Tanzania safari is crafted for those who value refined pacing, professional guiding, and a deep respect for the natural world. Experience the iconic wildlife of Tarangire, Serengeti, and Ngorongoro.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ideal for first-time visitors, seniors, and couples, this itinerary emphasizes smooth logistics, educational commentary, and comfortable lodges with a strong focus on hygiene and attentive service.
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
              { value: '5', label: 'Nights' },
              { value: '3', label: 'Parks' },
              { value: '80+', label: 'Wildlife' },
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

      {/* Intro Editorial Section */}
      <section className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">REFINED DISCOVERY</span>
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#222] leading-tight mb-12">
            A gentle, educational journey focused on <span className="italic">harmony and comfort.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left font-quattro text-[18px] text-[#444] leading-[1.8]">
            <p>
              This exclusive 6-day Northern Tanzania safari is crafted for those who value refined pacing, professional guiding, and a deep respect for the natural world. Experience the iconic wildlife of Tarangire, Serengeti, and Ngorongoro.
            </p>
            <p>
              Ideal for first-time visitors, seniors, and couples, this itinerary emphasizes smooth logistics, educational commentary, and comfortable lodges with a strong focus on hygiene and attentive service.
            </p>
          </div>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-16" />
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40">
        <PackageSubNav />
      </div>

      {/* Main Content Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-24">

              {/* Gallery Grid */}
              <div id="overview" className="space-y-12">
                <div className="flex justify-between items-end">
                  <h3 className="font-serif text-[32px] text-[#222]">The Visual Narrative</h3>
                  <span className="font-['Poppins'] text-[12px] tracking-[2px] text-[#888] uppercase">Signature Frames</span>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 relative aspect-[21/9] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[1]} alt="Safari" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[2]} alt="Wildlife" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[4]} alt="Lodge" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div id="itinerary" className="space-y-12">
                <div className="border-b border-gray-100 pb-8">
                  <h3 className="font-serif text-[40px] text-[#222]">The <span className="text-[#1f751f]">Expedition Itinerary</span></h3>
                </div>
                <div className="editorial-accordion">
                   <ItineraryAccordion itinerary={itinerary} />
                </div>
              </div>

              {/* Rates Table */}
              <div id="rates" className="bg-[#f9f9f7] p-12 rounded-[2px]">
                <h3 className="font-serif text-[32px] text-[#222] mb-8">Premium Rates</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div>
                      <h4 className="font-['Poppins'] text-[14px] tracking-[2px] uppercase text-[#222]">Standard Selection</h4>
                      <p className="text-[14px] text-[#666]">Premium Private Sharing</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-[28px] text-[#1f751f]">{packagePrice}</p>
                      <p className="text-[12px] text-[#888] uppercase tracking-[1px]">Per Traveler</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-3 text-[#888] text-[14px]">
                   <Info size={16} className="mt-1 flex-shrink-0" />
                   <p>Prices based on double occupancy. Includes private vehicle, window seats, and expert local guiding.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">

                {/* Booking Card */}
                <div className="bg-[#1a1a1a] text-white p-10 rounded-[2px] shadow-2xl">
                  <div className="mb-8 text-center">
                    <span className="font-['Poppins'] text-[12px] tracking-[3px] text-white/50 uppercase">Starting From</span>
                    <div className="font-serif text-[48px] text-[#c97500] leading-none mt-2">{packagePrice}</div>
                    <p className="text-[14px] text-white/40 mt-2 italic">per traveler</p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="w-full bg-[#1f751f] text-white py-5 rounded-[2px] font-['Poppins'] text-[13px] tracking-[3px] uppercase hover:bg-[#c97500] transition-colors flex items-center justify-center gap-3"
                    >
                      Inquire for Custom Quote <ArrowRight size={16} />
                    </button>
                    <a href="tel:+255753243280" className="w-full border border-white/20 text-white py-5 rounded-[2px] font-['Poppins'] text-[13px] tracking-[3px] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                      Speak to a Specialist
                    </a>
                  </div>

                  <div className="mt-10 pt-10 border-t border-white/10 flex justify-center gap-8">
                    <button className="flex items-center gap-2 group text-white/40 hover:text-white transition-colors">
                      <Download size={16} />
                      <span className="text-[10px] tracking-[2px] uppercase">PDF</span>
                    </button>
                    <button className="flex items-center gap-2 group text-white/40 hover:text-white transition-colors">
                      <Share2 size={16} />
                      <span className="text-[10px] tracking-[2px] uppercase">Share</span>
                    </button>
                  </div>
                </div>

                {/* Inclusions */}
                <div id="inclusions" className="bg-[#fdfcfb] border border-gray-100 p-10 rounded-[2px]">
                  <h4 className="font-serif text-[24px] text-[#222] mb-8">What's <span className="text-[#1f751f]">Included</span></h4>
                  <ul className="space-y-4">
                    {[
                      'Private 4x4 with Window Seats',
                      'Attentive Local Guide',
                      'Hygiene-Focused Lodges',
                      'Gentle Educational Pacing',
                      'All Park Entrance Fees',
                      'Private Airport Transfers'
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

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">REVIEWS</span>
            <h2 className="font-serif text-[40px] text-[#222]">Reflections on <span className="italic text-[#1f751f]">Harmony</span></h2>
          </div>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="flex justify-center gap-1 text-[#fbbf24] mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="font-quattro text-[24px] text-[#222] italic leading-relaxed mb-10">
              "The calm pace, clean lodges, and guide's clear explanations made this safari relaxing and truly memorable. The Serengeti was breathtaking!"
            </p>
            <div className="font-['Poppins'] text-[14px] tracking-[3px] uppercase text-[#222]">Hiroshi M.</div>
            <div className="text-[12px] tracking-[1px] text-[#888] mt-2">Japan • Jan 2026</div>
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
