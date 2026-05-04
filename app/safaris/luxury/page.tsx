"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import {
  Star, Clock, MapPin, Calendar, Check, ChevronRight,
  Wine, Sparkles, Palmtree, Mountain, Utensils, Shield, Heart, Trophy, Compass, Bath, Sunrise
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import BookingModal from '@/components/BookingModal';

const luxuryExperiences = [
  {
    id: 'serengeti-sunset',
    title: 'Serengeti Sunset',
    subtitle: 'Where Time Stands Still',
    description: 'Drift across the savannah in absolute comfort, watching the sun paint the horizon in shades of gold and amber. Your private guide ensures you are positioned at the perfect vantage point as the African sky transforms into nature\'s greatest light show.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fb/a5/c8/luxury-ensuite-room-view.jpg?w=900&h=1200&s=1',
    stats: { nights: 4, dining: 'Full Board' }
  },
  {
    id: 'ngorongoro-elite',
    title: 'Ngorongoro Elite',
    subtitle: 'The Crater Experience',
    description: 'Descend into the ancient caldera for an intimate encounter with Big Five. Your luxury camp on the rim offers unparalleled views as the morning mist lifts to reveal one of nature\'s most biodiverse ecosystems.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f2/99/b7/into-wild-africa-luxury.jpg?w=900&h=1200&s=1',
    stats: { nights: 3, dining: 'Full Board' }
  },
  {
    id: 'zanzibar-retreat',
    title: 'Zanzibar Retreat',
    subtitle: 'Ocean Elegance',
    description: 'After the thrill of the safari, retreat to your oceanfront villa where the Indian Ocean whispers at your doorstep. Private butler service, spa treatments, and dining under the stars compose the final movement of your journey.',
    image: 'https://images.unsplash.com/photo-1603632076161-5836b146638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    stats: { nights: 5, dining: 'Full Board' }
  },
  {
    id: 'kilimanjaro-chic',
    title: 'Kilimanjaro Chic',
    subtitle: 'The Mountain View',
    description: 'Wake to.views of Africa\'s highest peak from your luxurious suite. Daytime adventures on the mountain give way to elegant evenings of fine dining and premium safari cocktails.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg?w=900&h=1200&s=1',
    stats: { nights: 3, dining: 'Full Board' }
  },
];

const luxuryAmenities = [
  { icon: Bath, title: "Suite Luxury", desc: "Private en-suite with indoor/outdoor showers, premium toiletries, and crisp linens." },
  { icon: Utensils, title: "Gourmet Dining", desc: "Bush breakfasts, champagne sundowners, and five-course dinners under African stars." },
  { icon: Wine, title: "Premium Bar", desc: "Curated wine cellar, craft cocktails, and full open bar with premium spirits." },
  { icon: Sparkles, title: "Butler Service", desc: "Dedicated private butler anticipating your every need, from packing to dining preferences." },
  { icon: Sunrise, title: "Private Game Drives", desc: "Custom 4x4 with professional photographer guide—your schedule, your pace." },
  { icon: Compass, title: "Seamless Logistics", desc: "Private airport transfers, internal flights, and all park fees included." },
];

const signatureExperiences = [
  { title: "Hot Air Balloon", desc: "Sunrise champagne flight over the Serengeti", image: "https://safaris-r-us.com/wp-content/uploads/2022/01/ballon2.jpg" },
  { title: "Bush Dinner", desc: "Private dinner beneath the African stars", image: "https://uc29fb3f8d7b16e6661bf9649f44.previews.dropboxusercontent.com/p/thumb/AC9-s4-2svI5CmKRMBsStHeP20glp_aJJPtWmoIRNHtKLsqzssllF4V9h0xqCtDEUUuwwFvLtI2gIzvdUk3iAwO0JUKCzsIeZK5onOgdAJ7qUoP1hsUOScVVu50FAoDAJv08lQW9fo61JNE_b4kmcWENThbzFYyAfauue7ehZbVXngXw7dd3nGzbOeKVjDxU0UlmL6FkmcJj3qeE6m5Ed2wdA_9tl_pd6i4g6_HDSrYKfcQgTrO-sNx_ODgQOlAF9dOzJZZQ8bCjEjL1UcL4LVnkUvylrmnpJfDGi5WdXsmE9opqOlMZxHfz3EXoGryLp8SX5uMgFG1kvA0GGFF1ERc7uSBsdwU9HZ4YsYI6gATbDQ/p.jpeg" },
  { title: "Spa Retreat", desc: "Full body treatments with natural ingredients", image: "https://uc85478240c7c0270030c19890fc.previews.dropboxusercontent.com/p/thumb/AC9e_7GckkIfUJdKf36PfB8Hy-dRSWaOyZkoUUo6a9EPGLJZIAaX5rUB-SiYQSWbbKsgBu4QQJuLJPy2g2-Qk2O_kbbIuv0GWmARKLpvEjs4bkn1Yd5UpIEBbCvfs_zG0WnEP3xq8eHi0ULZoPAaptzmd3MYyQsYmdQEKG0OojAEy6n_qUC5ZvqlRNww2SH28T7fxT2JSwEkgL_pHHG1VkvtpvASBJCZv0ifNCtlzPRc63XTEjhegcPc60dg4cu4wztbYDyJu0yKj5yoNyW_45RUsNxnR-uMyetuLsgIFnT4fNHWb3gbw5pd2czZ8NbyIqY26DF8Lo8dlFyPwFKPI5zbVbe1Qot3zo6IbSGoI5FTTg/p.jpeg" },
];

export default function LuxurySafarisPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string, amount: string } | null>(null);

  const handleBookingOpen = (pkg: { name: string, amount: string }) => {
    setSelectedPackage(pkg);
    setBookingOpen(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Luxury Safaris"
        description="Where the wild meets the refined. Exclusive experiencescombining the thrill of Africa with the comfort of world-class hospitality."
        image="https://images.unsplash.com/photo-1515914560649-8fe5d631aa62?q=80&w=1200&auto=format&fit=crop"
        ctaText="Experience Luxury"
        ctaLink="/inquire"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#1f751f] uppercase block mb-8">THE ELEGANCE</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "Luxury in the wild is not about excess—it is about the freedom to experience nature without compromise."
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Luxury Experiences - Editorial Vertical Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {luxuryExperiences.map((exp, index) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#1f751f] uppercase">{exp.stats.nights} Nights</span>
                    <span className="w-1 h-1 bg-[#1f751f] rounded-full" />
                    <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#1f751f] uppercase">{exp.stats.dining}</span>
                  </div>

                  <h2 className="font-serif text-[42px] md:text-[52px] text-[#222] leading-tight mb-2">
                    {exp.title}
                  </h2>
                  <p className="font-serif text-[24px] text-[#1f751f] italic mb-4">
                    {exp.subtitle}
                  </p>
                </div>

                <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                  <p>{exp.description}</p>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 items-center">
                  <Link href="/inquire" className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                    Reserve This Experience —
                  </Link>
                  <button
                    onClick={() => handleBookingOpen({ name: exp.title, amount: 'From $12,000' })}
                    className="bg-[#1f751f] text-white px-8 py-3 rounded-[50px] font-['Poppins'] uppercase tracking-[2px] text-[12px] hover:bg-[#c97500] transition-all duration-300"
                  >
                    Request Pricing
                  </button>
                </div>
              </div>

              <div className={`group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl">
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.title}
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Experiences - Horizontal Scroll */}
      <section className="py-24 px-6 bg-[#0f440f]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-4">ON REQUEST</span>
          <h2 className="font-serif text-[38px] md:text-[48px] text-white opacity-80 mb-6">
            Signature Experiences
          </h2>
          <div className="h-[1px] w-24 bg-[#c97500]/50 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row gap-8 overflow-x-auto pb-4">
          {signatureExperiences.map((exp, idx) => (
            <div key={idx} className="flex-shrink-0 w-full sm:w-[380px] group cursor-pointer">
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2px]">
                <ImageWithFallback
                  src={exp.image}
                  alt={exp.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-[24px] text-white mb-2">{exp.title}</h3>
              <p className="font-quattro text-[16px] text-white/60">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Amenities Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="group relative order-2 lg:order-1">
              <div className="aspect-[3/2] overflow-hidden rounded-[2px]">
                <ImageWithFallback
                  alt="Luxury Safari Camp"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://uc1a22227558c3f1e10bb9272742.previews.dropboxusercontent.com/p/thumb/AC9W3G3gyDZHe_Mb5gxaKTaicCBh3Dfk_oLn4__82cRbZAQlwgru4_jY09iXXpeI3MOb_aaR50rFYPgqjdpvxWu2nv7clyBrTZz3KqsrZuU3iGiNEnng4YR0enuaCoohc8MMEogJDMEoezK1bcqctm_jd7ycV5DW-blXO3ot170AHnHTrVkNuQjjrBcG99tHtqmZTwNM0j6jcRrcOvgTTPODMVgkX1Vc587i66twSdx73xirw6E3TSXf8Q-0jFj231YfPNX38uQaOawoOXtKCdAkUc9bSLPfU6geTpIc145VYKtZFGCNANvx8MaLJa_f0KlQG0-JgKeob1rhdGc1Z92neiiW6xHdzpBB39eup8f3jQ/p.jpeg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1f751f] p-8 hidden lg:block text-white">
                <Sparkles size={40} strokeWidth={1.5} />
                <span className="font-serif text-[18px] block mt-2">Ultra</span>
                <span className="text-[11px] uppercase tracking-[2px] opacity-70">Luxury</span>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#1f751f] uppercase block">THE REFINEMENT</span>
              <h2 className="font-serif text-[42px] text-[#222]">Uncompromising Luxury</h2>
              <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-6">
                <p>
                  Our luxury safaris are curated for those who seek the extraordinary without sacrificing comfort. We partner with Tanzania's most exclusive lodges and camps, each hand-selected forExceptional service, prime locations, and impeccable attention to detail.
                </p>
                <p>
                  From private butler service to champagne sundowns in the bush, every moment is choreographed to elevate your safari into an unforgettable journey.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {luxuryAmenities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <item.icon size={20} strokeWidth={1.5} className="text-[#1f751f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-[16px] text-[#222]">{item.title}</h4>
                      <p className="font-quattro text-[14px] text-[#666]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid - Sage Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            Curated Destinations
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: MapPin, title: "Serengeti", desc: "Private camps in prime migration territory." },
            { icon: Palmtree, title: "Zanzibar", desc: "5-star oceanfront resorts." },
            { icon: Mountain, title: "Ngorongoro", desc: "Rim lodges with crater views." },
            { icon: Star, title: "Tarangire", desc: "Exclusive use areas." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Collection - Featured Packages */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#1f751f] uppercase block mb-4">THE COLLECTION</span>
            <h2 className="font-serif text-[38px] md:text-[48px] text-[#222] mb-6">
              Signature Itineraries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fb/a5/c8/luxury-ensuite-room-view.jpg?w=900&h=1200&s=1"
                alt="Serengeti Solitude"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-[28px] text-white mb-2">Serengeti Solitude</h3>
                <p className="font-quattro text-[14px] text-white/70 mb-4">7 Days — From $18,500 pp</p>
                <Link href="/safaris/packages/private-8-day" className="font-['Poppins'] text-[12px] tracking-[2px] uppercase text-[#c97500] border-b border-[#c97500] pb-1">
                  Explore →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603632076161-5836b146638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                alt="Coast to Crater"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-[28px] text-white mb-2">Coast to Crater</h3>
                <p className="font-quattro text-[14px] text-white/70 mb-4">10 Days — From $24,000 pp</p>
                <Link href="/safaris/packages/zanzibar-10-day" className="font-['Poppins'] text-[12px] tracking-[2px] uppercase text-[#c97500] border-b border-[#c97500] pb-1">
                  Explore →
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg?w=900&h=1200&s=1"
                alt="East Africa Elite"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-[28px] text-white mb-2">East Africa Elite</h3>
                <p className="font-quattro text-[14px] text-white/70 mb-4">13 Days — From $32,000 pp</p>
                <Link href="/safaris/packages/luxury-13-day" className="font-['Poppins'] text-[12px] tracking-[2px] uppercase text-[#c97500] border-b border-[#c97500] pb-1">
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Elevate your <span className="italic text-[#1f751f]">safari experience.</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            The wild awaits in unparalleled comfort. Let Ndewedo Tours craft your luxury African journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/inquire"
              className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500"
            >
              Start Your Journey
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-white hover:text-black transition-colors duration-500"
            >
              Request Brochure
            </Link>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setBookingOpen(false)}
        safariPackage={selectedPackage}
      />
    </div>
  );
}