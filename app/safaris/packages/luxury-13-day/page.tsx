"use client";

import { useState } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import {
  Clock, Users, MapPin, Calendar, Check, Star, X,
  ChevronRight, Mail, Phone, Download, Share2,
  Camera, Shield, Utensils, Heart, Info, ArrowRight
} from 'lucide-react'
import PackageSubNav from '@/components/PackageSubNav'
import ItineraryAccordion from '@/components/ItineraryAccordion'
import BookingModal from '@/components/BookingModal';

const packageGallery = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1586861661029-7945c270bc71?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1080&q=80',
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Nairobi, Kenya',
    location: 'Hemingways Nairobi',
    activities: [
      'Arrival at Jomo Kenyatta International Airport',
      'Warm welcome and private transfer to Karen suburb',
      'Relax at hotel, spa, or optional excursions'
    ],
    meals: 'Bed & Breakfast',
    accommodation: 'Hemingways Nairobi',
    images: ['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80'],
  },
  {
    day: 2,
    title: 'Nairobi to Masai Mara National Reserve',
    location: 'andBeyond Bateleur Camp',
    activities: [
      'Scenic light aircraft flight to Masai Mara',
      'Game drive en route to camp',
      'Afternoon game drive for Big Five viewing',
      'Sundowners and gourmet dinner under the stars'
    ],
    meals: 'Fully Inclusive',
    accommodation: 'andBeyond Bateleur Camp',
    images: ['https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'],
  },
  {
    day: 4,
    title: 'Masai Mara to Serengeti National Park',
    location: 'andBeyond Serengeti Under Canvas',
    activities: [
      'Morning game drive then cross-border flight',
      'Afternoon game drive in Serengeti',
      'Refined bush dinner and stargazing'
    ],
    meals: 'Fully Inclusive',
    accommodation: 'andBeyond Serengeti Under Canvas',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'],
  },
  {
    day: 13,
    title: 'Departure from Zanzibar',
    location: 'Zanzibar International Airport',
    activities: [
      'Leisurely breakfast and final relaxation',
      'Private transfer to airport',
      'Onward journey home'
    ],
    meals: 'Breakfast',
    accommodation: 'End of journey',
    images: ['https://images.unsplash.com/photo-1586861661029-7945c270bc71?auto=format&fit=crop&w=800&q=80'],
  }
];

export default function LuxuryCrossBorderPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const packageName = "13-Day Luxury Cross-Border Safari & Beach Escape";
  const packagePrice = "$13,753";
  const duration = "13 Days / 12 Nights";

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={packageGallery[0]}
          alt={packageName}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-[1000px]">
          <span className="font-['Poppins'] text-[13px] tracking-[6px] text-white/80 uppercase block mb-6 animate-fadeIn">Ultra-Luxury Collection</span>
          <h1 className="font-serif text-[40px] sm:text-[60px] md:text-[80px] leading-tight mb-8 drop-shadow-lg">
            {packageName.split(' ')[0]} <br/>
            <span className="italic text-[#c97500]">{packageName.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8 text-[14px] tracking-[2px] uppercase font-['Poppins']">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#c97500]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#c97500]" />
              <span>Kenya & Tanzania</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-[#fbbf24] fill-current" />
              <span>5.0 Excellence</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-[10px] uppercase tracking-[4px]">Experience</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* Intro Editorial Section */}
      <section className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE ODYSSEY</span>
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#222] leading-tight mb-12">
            Crossing borders to witness <span className="italic">Africa's greatest wildlife theater.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left font-quattro text-[18px] text-[#444] leading-[1.8]">
            <p>
              This exceptional cross-border luxury safari combines East Africa’s iconic wildlife destinations with a serene Indian Ocean escape in Zanzibar. Experience the Masai Mara and Serengeti, Lake Manyara’s tree-climbing lions, and exclusive andBeyond camps.
            </p>
            <p>
              Ideal for honeymooners, photographers, and discerning travelers seeking impeccable service, private guiding, and a perfect balance of adventure and indulgence across two incredible nations.
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
                  <h3 className="font-serif text-[32px] text-[#222]">Curation of Moments</h3>
                  <span className="font-['Poppins'] text-[12px] tracking-[2px] text-[#888] uppercase">Signature Series</span>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 relative aspect-[21/9] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[1]} alt="Luxury Safari" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[2]} alt="Wildlife" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[3]} alt="Zanzibar" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div id="itinerary" className="space-y-12">
                <div className="border-b border-gray-100 pb-8">
                  <h3 className="font-serif text-[40px] text-[#222]">The <span className="text-[#1f751f]">Grand Itinerary</span></h3>
                </div>
                <div className="editorial-accordion">
                   <ItineraryAccordion itinerary={itinerary} />
                </div>
              </div>

              {/* Rates Table */}
              <div id="rates" className="bg-[#f9f9f7] p-12 rounded-[2px]">
                <h3 className="font-serif text-[32px] text-[#222] mb-8">Investment in Discovery</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div>
                      <h4 className="font-['Poppins'] text-[14px] tracking-[2px] uppercase text-[#222]">Double Occupancy</h4>
                      <p className="text-[14px] text-[#666]">Per Person Sharing</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-[28px] text-[#1f751f]">{packagePrice}</p>
                      <p className="text-[12px] text-[#888] uppercase tracking-[1px]">Fully Inclusive</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-3 text-[#888] text-[14px]">
                   <Info size={16} className="mt-1 flex-shrink-0" />
                   <p>Fully inclusive of inter-camp flights, luxury accommodations, gourmet dining, and private guiding. International airfare excluded.</p>
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
                      Book This Experience <ArrowRight size={16} />
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
                  <h4 className="font-serif text-[24px] text-[#222] mb-8">Included <span className="text-[#1f751f]">Excellence</span></h4>
                  <ul className="space-y-4">
                    {[
                      'andBeyond Luxury Camps',
                      'Internal Charter Flights',
                      'Private Meet & Greet',
                      'Private Safari Guiding',
                      'All-Inclusive Dining',
                      'Premium Beverages'
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

      {/* Review Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">REVIEWS</span>
            <h2 className="font-serif text-[40px] text-[#222]">Stories from <span className="italic text-[#1f751f]">The Wild</span></h2>
          </div>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="flex justify-center gap-1 text-[#fbbf24] mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="font-quattro text-[24px] text-[#222] italic leading-relaxed mb-10">
              "The andBeyond camps were phenomenal — from Bateleur's elegance to Serengeti Under Canvas magic. Tree-climbing lions and Zanzibar beaches were perfect!"
            </p>
            <div className="font-['Poppins'] text-[14px] tracking-[3px] uppercase text-[#222]">Alex S.</div>
            <div className="text-[12px] tracking-[1px] text-[#888] mt-2">USA • Jan 2026</div>
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
