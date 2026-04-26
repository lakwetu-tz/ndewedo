"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import {
  Clock, Users, MapPin, Calendar, Check, Star,
  ChevronRight, Camera, Tent, Utensils, Shield, Heart, Trophy, Info
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import BookingModal from '@/components/BookingModal';

const safariPackages = [
  {
    id: 'northern-circuit-9-day',
    title: '9-DAY EXCLUSIVE NORTHERN TANZANIA SAFARI',
    duration: '9 Days / 8 Nights',
    price: '$9,840',
    rating: 4.9,
    reviews: 127,
    href: "/safaris/packages/northern-circuit-9-day",
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/fb/a5/c8/luxury-ensuite-room-view.jpg?w=900&h=1200&s=1',
    description: 'From the Garden of Eden (Ngorongoro Crater) to the endless plains of the Serengeti and Tarangire’s elephant herds — an exclusive journey with luxury tented camps and expert guiding.',
    highlights: [
      'Track the Great Migration in mobile luxury camps',
      'Panoramic Ngorongoro Crater rim views',
      'Year-round Big Five & predator sightings in Serengeti',
      'Massive elephant herds & baobabs in Tarangire',
      'Choice of luxury or mid-range accommodations'
    ]
  },
  {
    id: 'tanzania-zanzibar-10-day',
    title: '10-DAY TANZANIA SAFARI & ZANZIBAR BEACH EXPERIENCE',
    duration: '10 Days / 9 Nights',
    price: '$6,356',
    rating: 5.0,
    reviews: 89,
    href: "/safaris/packages/zanzibar-10-day",
    image: 'https://images.unsplash.com/photo-1603632076161-5836b146638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'Thrilling wildlife safari through Lake Manyara, Serengeti, and Ngorongoro Crater, followed by pure relaxation on the pristine beaches of Zanzibar.',
    highlights: [
      'Tree-climbing lions and diverse wildlife in Lake Manyara',
      'Full-day game drives in the iconic Serengeti plains',
      'Descent into Ngorongoro Crater – Big Five including black rhino',
      'Seamless transition to luxury beach time in Zanzibar',
      'Optional excursions: Stone Town, spice tours, snorkeling'
    ]
  },
  {
    id: 'luxury-cross-border-13-day',
    title: '13-DAY LUXURY CROSS-BORDER SAFARI & BEACH ESCAPE',
    duration: '4 Days / 3 Nights',
    price: '$1,650',
    href: "/safaris/packages/luxury-13-day",
    rating: 4.7,
    reviews: 203,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/f2/99/b7/into-wild-africa-luxury.jpg?w=900&h=1200&s=1',
    description: 'Affordable safari covering Tarangire, Ngorongoro, and Lake Manyara for budget-conscious travelers.',
    highlights: [
      'Cross-border Big Five viewing in Masai Mara & Serengeti',
      'Witness the Great Migration (seasonal) from mobile luxury camps',
      'Tree-climbing lions & diverse ecosystems in Lake Manyara',
      'Cultural Maasai village visits & private game drives',
      '3 nights of oceanfront luxury & spa at Sea Cliff Resort Zanzibar'
    ]
  },
  {
    id: 'cultural-safari-japanese-7-day',
    title: '7-DAY SPECIAL CULTURAL & SAFARI ITINERARY',
    duration: '7 Days / 6 Nights',
    price: '$3,950',
    rating: 5.0,
    reviews: 68,
    href: "/safaris/packages/cultural-7-day",
    image: 'https://images.unsplash.com/photo-1698618612776-0e6f13560a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    description: 'A gentle, respectful journey blending Northern Tanzania’s iconic wildlife with authentic Maasai cultural encounters, emphasizing harmony between nature and people, calm pacing, and meaningful connections.',
    highlights: [
      'Large elephant herds and iconic baobabs in Tarangire',
      'Full-day immersion in the endless plains of Serengeti',
      'Panoramic views of Ngorongoro Crater rim',
      'Respectful Maasai village visit with traditional songs',
      'Gentle pacing focused on nature harmony'
    ]
  },
  {
    id: 'luxury-private-8-day',
    title: '8-DAY LUXURY PRIVATE SAFARI – TANZANIA',
    duration: '8 Days / 7 Nights',
    price: '$9,735',
    rating: 5.0,
    reviews: 92,
    href: "/safaris/packages/private-8-day",
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0f/05/78/lemala-mpingo-ridge.jpg?w=900&h=1200&s=1',
    description: 'Exclusive private safari with dedicated guide & vehicle: Tarangire elephants, Lake Manyara lions, Serengeti migration tracking, staying at premium lodges.',
    highlights: [
      'Private game drives & dedicated guide/vehicle',
      'Vast elephant herds & baobabs in Tarangire',
      'Tree-climbing lions in Lake Manyara',
      'Great Migration access in Northern Serengeti',
      'Refined luxury tents & rim views at Meliá Ngorongoro'
    ]
  },
  {
    id: 'private-east-africa-16-day',
    title: '16-DAY PRIVATE SAFARI EAST AFRICA: WILDLIFE & COASTAL',
    duration: '16 Days / 15 Nights',
    price: '$8,450',
    rating: 5.0,
    reviews: 78,
    href: "/safaris/packages/private-16-day",
    image: 'https://images.unsplash.com/photo-1761976671588-c47d04ff9dc3?q=80&w=1200&auto=format&fit=crop',
    description: 'Fully private 4x4 safaris across Kenya and Tanzania, with hot air balloon, Maasai cultural visits, and a relaxing Zanzibar beach retreat.',
    highlights: [
      'Hot air balloon safari over Serengeti plains',
      'Maasai village cultural experiences & dances',
      'Private game drives in Masai Mara & Serengeti',
      'Hell\'s Gate walking safari & Lake Naivasha boat ride',
      'Relaxing Zanzibar beach & marine adventures finale'
    ]
  },
  {
    id: 'premium-tanzania-japanese-6-day',
    title: '6-DAY PREMIUM TANZANIA SAFARI EXPERIENCE',
    duration: '6 Days / 5 Nights',
    price: '$4,250',
    rating: 5.0,
    reviews: 85,
    href: "/safaris/packages/japanese-6-day",
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/d1/b6/94/a-retreat-at-namiri-plains.jpg?w=900&h=1200&s=1',
    description: 'A refined, gentle Northern Tanzania safari: Tarangire elephants, Serengeti immersion, Ngorongoro views, comfortable lodges, and respectful pacing.',
    highlights: [
      'Large elephant herds & iconic baobabs in Tarangire',
      'Full-day wildlife immersion in Serengeti',
      'Panoramic Ngorongoro Conservation Area views',
      'Comfortable, hygienic lodges with peaceful gardens',
      'Gentle schedule with private vehicle & expert guiding'
    ]
  },
];

export default function WildlifeSafariPage() {
  const [isBookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string, amount: string } | null>(null);

  const handleBookingOpen = (safariPackage: { name: string, amount: string }) => {
    setSelectedPackage(safariPackage);
    setBookingOpen(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Wildlife Safari Packages"
        description="Embark on unforgettable wildlife adventures across Tanzania's iconic national parks"
        image="https://ucd2366a4756928b81106589beef.previews.dropboxusercontent.com/p/thumb/AC9A1loL8OiuKAyItZdMJZqZSbMPxx2xzHZrVk9fh9fxzFEIbucdprHZu2KupnsMVYcVDu7TBv2hTp2FcTH0xE9VIh6Jgd9o6kG1_XdeZ-moxtLeNFJB9YUJQuS6e-osJrvo1gtXh8mNgdmZW-69YmV41orVLKDliyuxES3yV3VfPdgCngyB8WpE4xY5qR5v6JzLyJj5Ou7KAu7B7iL5dgARTpf6-w6GtramlF4NO4UKiHfOWRMWNjPGTwjQz9X5nJDd6w6RDcyoIy55KyFgRYute1cQIMP-qSWVVnMi95W45GeiVe_B45-FjKQc0YiKlikmyDgeGKX8fQlIz_1F25jr6vUwdtjZUW2j-wJtcxnWiA/p.jpeg"
        ctaText="Plan Your Safari"
        ctaLink="/inquire"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE WILDERNESS</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "Everything in Africa bites, but the safari bug is the worst of all."
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Safari Packages - Editorial Vertical Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {safariPackages.map((pkg, index) => (
            <div key={pkg.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase">{pkg.duration}</span>
                    <div className="flex items-center gap-1 text-[#fbbf24]">
                      <Star size={14} fill="currentColor" />
                      <span className="text-[12px] font-bold text-[#222]">{pkg.rating}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-[40px] md:text-[50px] text-[#222] leading-tight mb-4 uppercase tracking-tight">
                    {pkg.title.split(' ')[0]} <br/>
                    <span className="text-[#1f751f]">{pkg.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="font-['Great_Vibes',_cursive] text-[36px] text-[#c97500] -mt-2 opacity-70">
                    Starting from {pkg.price}
                  </p>
                </div>

                <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                  <p>{pkg.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-serif text-[20px] text-[#222]">Experience Highlights:</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#1f751f] mt-1 flex-shrink-0" />
                          <span className="text-[16px] text-[#666]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 items-center">
                  <Link href={pkg.href} className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                    View Full Itinerary —
                  </Link>
                  <button
                    onClick={() => handleBookingOpen({ name: pkg.title, amount: pkg.price })}
                    className="bg-[#1f751f] text-white px-8 py-3 rounded-[50px] font-['Poppins'] uppercase tracking-[2px] text-[12px] hover:bg-[#c97500] transition-all duration-300"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>

              <div className={`group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] shadow-2xl">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.title}
              
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Section - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#2c3e2c]/60 uppercase block mb-4">THE DETAILS</span>
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            The Safari Signature
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
                { icon: Camera, title: "Private Game Drives", desc: "Expertly guided drives in customized 4x4 vehicles with pop-up roofs." },
                { icon: Tent, title: "Handpicked Stays", desc: "A selection of the finest luxury lodges and intimate tented camps." },
                { icon: Utensils, title: "Full Board Dining", desc: "All meals included, featuring gourmet bush breakfasts and elegant dinners." },
                { icon: Shield, title: "Park & Conservation", desc: "All national park entry fees and conservation levies are fully covered." },
                { icon: Heart, title: "Expert Guiding", desc: "Dedicated professional guides with deep knowledge of flora and fauna." },
                { icon: Trophy, title: "Seamless Transfers", desc: "Personalized airport meet-and-greet and all internal logistics." }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group text-center">
                    <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
                    <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[280px]">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Ready for your <span className="italic text-[#1f751f]">Wild Adventure?</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            Your journey into the heart of Tanzania starts here. Let Ndewedo Tours craft your perfect safari experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/inquire"
              className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500"
            >
              Build Your Custom Safari
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-white hover:text-black transition-colors duration-500"
            >
              Speak to an Expert
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
