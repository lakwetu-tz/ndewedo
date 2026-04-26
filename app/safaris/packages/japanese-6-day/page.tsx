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
  const packageName = "6-Day Premium Tanzania Safari Experience";
  const packagePrice = "$4,250";
  const duration = "6 Days / 5 Nights";

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
          <span className="font-['Poppins'] text-[13px] tracking-[6px] text-white/80 uppercase block mb-6 animate-fadeIn">Premium Collection</span>
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
              <span>Northern Circuit</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-[#fbbf24] fill-current" />
              <span>5.0 Rating</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-[10px] uppercase tracking-[4px]">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
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
