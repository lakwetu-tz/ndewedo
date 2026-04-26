"use client";

import { useState } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'
import {
  Clock, Users, MapPin, Calendar, Check, Star, X,
  ChevronRight, Mail, Phone, Download, Share2,
  Camera, Shield, Utensils, Heart, Info, ArrowRight, Bed
} from 'lucide-react'
import PackageSubNav from '@/components/PackageSubNav'
import ItineraryAccordion from '@/components/ItineraryAccordion'
import BookingModal from '@/components/BookingModal';

const packageGallery = [
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1586861661029-7945c270bc71?auto=format&fit=crop&w=1080&q=80',
];

const itinerary = [
  {
    day: 1,
    title: 'Arrival in Tanzania – Welcome to Arusha',
    location: 'Mount Meru Hotel',
    activities: [
      'Arrival at Kilimanjaro International Airport',
      'Warm welcome and private transfer to Arusha',
      'Scenic drive with views of Mount Meru',
      'Relax at hotel grounds, pool, or gardens'
    ],
    meals: 'Breakfast only',
    accommodation: 'Mount Meru Hotel',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'],
  },
  {
    day: 2,
    title: 'Lake Manyara – First Safari Experience',
    location: 'Eileen’s Trees Inn',
    activities: [
      'Full game drive in Lake Manyara National Park',
      'Search for tree-climbing lions and elephants',
      'Picnic lunch in the heart of the park',
      'Exceptional birdwatching opportunities'
    ],
    meals: 'All meals included',
    accommodation: 'Eileen’s Trees Inn',
    images: ['https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1080&q=80'],
  },
  {
    day: 3,
    title: 'Serengeti Immersion',
    location: 'Serengeti Kati Kati Tented Camp',
    activities: [
      'Drive through Ngorongoro Conservation Area',
      'Enter Serengeti for afternoon wildlife viewing',
      'Track the Great Migration (seasonal)',
      'Authentic bush camp experience'
    ],
    meals: 'All meals included',
    accommodation: 'Serengeti Kati Kati Tented Camp',
    images: ['https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1080&q=80'],
  },
  {
    day: 7,
    title: 'Transition to Zanzibar Paradise',
    location: 'Meliá Zanzibar Hotel',
    activities: [
      'Domestic flight from Arusha to Zanzibar',
      'Private transfer to the northeast coast',
      'Check-in at luxury beach resort',
      'Leisure time on white-sand shores'
    ],
    meals: 'All meals included',
    accommodation: 'Meliá Zanzibar Hotel',
    images: ['https://images.unsplash.com/photo-1586861661029-7945c270bc71?auto=format&fit=crop&w=1080&q=80'],
  }
];

export default function ZanzibarPackagePage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const packageName = "10-Day Tanzania Safari & Zanzibar Beach Experience";
  const packagePrice = "$6,356";
  const duration = "10 Days / 9 Nights";

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={packageGallery[0]}
          alt={packageName}
          className="object-cover"
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 text-center px-4 max-w-[1000px]">
          <span className="font-['Poppins'] text-[13px] tracking-[6px] text-white/80 uppercase block mb-6 animate-fadeIn">Bush & Beach Series</span>
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
              <span>Safari & Zanzibar</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={18} className="text-[#fbbf24] fill-current" />
              <span>4.9 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Editorial Section */}
      <section className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-[1000px] mx-auto text-center">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE DUALITY</span>
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#222] leading-tight mb-12">
            From the pulse of the savannah to the <span className="italic">rhythm of the Indian Ocean.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left font-quattro text-[18px] text-[#444] leading-[1.8]">
            <p>
              Embark on a remarkable 10-day journey blending thrilling wildlife safaris in Northern Tanzania with relaxing beach luxury in Zanzibar. Experience iconic parks like Lake Manyara, Serengeti, and Ngorongoro Crater.
            </p>
            <p>
              This itinerary offers adventure, culture, and coastal indulgence with comfortable accommodations, expert guiding, and seamless transitions between the wild bush and tropical paradise.
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
                  <h3 className="font-serif text-[32px] text-[#222]">Curation of Contrast</h3>
                  <span className="font-['Poppins'] text-[12px] tracking-[2px] text-[#888] uppercase">Wild & Azure</span>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 relative aspect-[21/9] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[1]} alt="Tanzania" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[2]} alt="Wildlife" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="col-span-6 relative aspect-[1/1] overflow-hidden rounded-[2px]">
                    <ImageWithFallback src={packageGallery[5]} alt="Beach" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div id="itinerary" className="space-y-12">
                <div className="border-b border-gray-100 pb-8">
                  <h3 className="font-serif text-[40px] text-[#222]">The <span className="text-[#1f751f]">Expedition Path</span></h3>
                </div>
                <div className="editorial-accordion">
                   <ItineraryAccordion itinerary={itinerary} />
                </div>
              </div>

              {/* Rates Table */}
              <div id="rates" className="bg-[#f9f9f7] p-12 rounded-[2px]">
                <h3 className="font-serif text-[32px] text-[#222] mb-8">Investment in Wonder</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-6 border-b border-black/5">
                    <div>
                      <h4 className="font-['Poppins'] text-[14px] tracking-[2px] uppercase text-[#222]">Complete Experience</h4>
                      <p className="text-[14px] text-[#666]">Safari + Zanzibar Collection</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-[28px] text-[#1f751f]">{packagePrice}</p>
                      <p className="text-[12px] text-[#888] uppercase tracking-[1px]">Per Traveler</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-start gap-3 text-[#888] text-[14px]">
                   <Info size={16} className="mt-1 flex-shrink-0" />
                   <p>Includes domestic flight to Zanzibar, all park fees, and full-board accommodation as per the itinerary.</p>
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
                      Secure Your Journey <ArrowRight size={16} />
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
                      'Domestic Zanzibar Flight',
                      'Private Safari Vehicle',
                      'Handpicked Beach Resort',
                      'Professional Safari Guide',
                      'All National Park Fees',
                      'Seamless Logistics'
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
              { name: "Jessica M.", location: "USA", text: "The perfect balance of adventure and relaxation. The Serengeti was incredible and Zanzibar was pure magic." },
              { name: "David L.", location: "UK", text: "Expertly organized. Every detail from the safari camps to the beach resort was top-notch." },
              { name: "Elena S.", location: "Italy", text: "A dream come true. Seeing the Big Five and then relaxing on the white sands of Zanzibar was unforgettable." }
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
