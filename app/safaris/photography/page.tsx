"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import {
  Camera, Aperture, Sun, Clock, MapPin, Binoculars, Star, Check,
  ChevronRight, Filter, Mountain, Eye, Sunrise, Sunset
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import BookingModal from '@/components/BookingModal';

const photographyExperiences = [
  {
    id: 'golden-hour',
    title: 'Golden Hour Magic',
    subtitle: 'Light & Shadow',
    description: 'Schedule your game drives during the magical hours of dawn and dusk when the African light transforms the savannah into a canvas of gold and amber. Our expert guides know exactly where to position for the perfect shot as the sun rises and sets over the endless plains.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    stats: { duration: '6 Days', locations: '3 Parks' }
  },
  {
    id: 'migration-moments',
    title: 'The Great Migration',
    subtitle: 'Nature\'s Greatest Spectacle',
    description: 'Witness and capture over two million wildebeest, zebra, and gazelle crossing the Serengeti in a circular journey spanning 800 kilometers. Position yourself at key crossing points for dramatic river crossing images that have graced Nat Geo covers.',
    image: 'https://images.unsplash.com/photo-1483137152359-d0d1c74f3e9e?q=80&w=2068&auto=format&fit=crop',
    stats: { duration: '8 Days', locations: '2 Parks' }
  },
  {
    id: 'predator-stalk',
    title: 'Predator Precision',
    subtitle: 'The Hunt',
    description: 'Patience meets precision in capturing Africa\'s most fearsome predators in action. From lion prides on the prowl to cheetahs on the chase, our tracking expertise ensures you are positioned for the decisive moment.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop',
    stats: { duration: '7 Days', locations: '4 Parks' }
  },
  {
    id: 'avian-portraits',
    title: 'Winged Wonders',
    subtitle: 'Avian Mastery',
    description: 'Tanzania hosts over 1,000 bird species. From the majestic African fish eagle to the lilac-breasted roller, we take you to the best birding locations at optimal times for striking portraits.',
    image: 'https://images.unsplash.com/photo-1590606549564-aa4198e9b47c?q=80&w=1000&auto=format&fit=crop',
    stats: { duration: '5 Days', locations: '3 Parks' }
  },
];

const gearExpertise = [
  { icon: Aperture, title: "Lens Mastery", desc: "Extended time at wildlife sightings with guidance on optimal lens choices for every scenario." },
  { icon: Filter, title: "Filter Mastery", desc: "Expert advice on polarizing and ND filters for managing the intense African sun." },
  { icon: Sun, title: "Light Management", desc: "Golden hour positioning is our specialty—we arrive hours before dawn for the perfect angle." },
  { icon: Mountain, title: "Panorama Technique", desc: "Learn to capture the vast landscapes that define the African wilderness." },
  { icon: Eye, title: "Wildlife Behavior", desc: "Our guides read animal behavior so you are ready for the decisive moment." },
  { icon: Clock, title: "Patience Practice", desc: "Extended game drives with strategic stops at waterholes for natural behavior shots." },
];

export default function PhotographySafarisPage() {
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
        title="Photography Safaris"
        description="Capture the untamed soul of Africa through your lens. Expertly guided safari experiences designed for photographers who seek the extraordinary."
        image="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1200&auto=format&fit=crop"
        ctaText="Start Capturing"
        ctaLink="/inquire"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE LENS</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "The wildlife camera captures not just an image, but a moment in the endless story of the wild."
          </h2>
          <div className="h-[1px] w-20 bg-[#c97500] mx-auto mt-12" />
        </div>
      </section>

      {/* Photography Experiences - Editorial Vertical Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {photographyExperiences.map((exp, index) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#888] uppercase">{exp.stats.duration}</span>
                    <span className="w-1 h-1 bg-[#c97500] rounded-full" />
                    <span className="font-['Poppins'] text-[12px] tracking-[4px] text-[#888] uppercase">{exp.stats.locations}</span>
                  </div>

                  <h2 className="font-serif text-[42px] md:text-[52px] text-[#222] leading-tight mb-2">
                    {exp.title}
                  </h2>
                  <p className="font-serif text-[24px] text-[#c97500] italic mb-4">
                    {exp.subtitle}
                  </p>
                </div>

                <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                  <p>{exp.description}</p>
                </div>

                <div className="flex flex-wrap gap-6 pt-6 items-center">
                  <Link href="/inquire" className="inline-block border-b-2 border-[#c97500] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#c97500] transition-colors">
                    Book This Experience —
                  </Link>
                  <button
                    onClick={() => handleBookingOpen({ name: exp.title, amount: 'From $3,500' })}
                    className="bg-[#c97500] text-white px-8 py-3 rounded-[50px] font-['Poppins'] uppercase tracking-[2px] text-[12px] hover:bg-[#0f440f] transition-all duration-300"
                  >
                    Inquire Now
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
                  
                  {/* Camera focus overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optimal Times Section - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-4">TIMING EXCELLENCE</span>
          <h2 className="font-serif text-[38px] md:text-[48px] text-white opacity-80 mb-6">
            Optimal Light Conditions
          </h2>
          <div className="h-[1px] w-24 bg-[#c97500]/50 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Sunrise, title: "Dawn Patrol", desc: "05:30 - 07:30. Cool temperatures bring wildlife to waterholes.", time: "Golden Hour" },
            { icon: Sun, title: "Morning Light", desc: "07:30 - 10:00. Soft light with active wildlife activity.", time: "Soft Light" },
            { icon: Sun, title: "Midday Rest", desc: "10:00 - 15:00. Shade camping with optional cultural visits.", time: "Down Time" },
            { icon: Sunset, title: "Evening Gold", desc: "15:00 - 19:00. The final golden hour over the savannah.", time: "Golden Hour" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <item.icon size={32} strokeWidth={1.5} className="text-[#c97500] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-[20px] text-white mb-3">{item.title}</h3>
              <p className="font-quattro text-[15px] text-white/60 leading-relaxed">{item.desc}</p>
              <span className="font-['Poppins'] text-[11px] tracking-[2px] text-[#c97500] mt-4 uppercase">{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gear & Expertise Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="group relative">
              <div className="aspect-[3/2] overflow-hidden rounded-[2px]">
                <ImageWithFallback
                  alt="Photography Gear"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c97500] p-8 hidden lg:block text-white">
                <Camera size={40} strokeWidth={1.5} />
                <span className="font-serif text-[18px] block mt-2">Professional</span>
                <span className="text-[11px] uppercase tracking-[2px] opacity-70">Grade Equipment</span>
              </div>
            </div>

            <div className="space-y-8">
              <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block">THE CRAFT</span>
              <h2 className="font-serif text-[42px] text-[#222]">Photography Expertise</h2>
              <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-6">
                <p>
                  Our photography safaris are led by guides who understand both wildlife behavior and camera techniques. We do not simply take you tosee animals—we position you for the shot.
                </p>
                <p>
                  We use custom-built 4x4 vehicles with pop-up roofs for unobstructed angles, and we will always wait for the perfect moment rather than rushing on.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {gearExpertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <item.icon size={20} strokeWidth={1.5} className="text-[#c97500] mt-1 flex-shrink-0" />
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

      {/* Destinations Grid */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            Prime Photography Locations
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: MapPin, title: "Serengeti", desc: "Endless plains, migration crossings, predator action." },
            { icon: Binoculars, title: "Ngorongoro", desc: "Prehistoric caldera with guaranteed Big Five sightings." },
            { icon: Camera, title: "Tarangire", desc: "Massive elephants and ancient baobabs at sunset." },
            { icon: Eye, title: "Manyara", desc: "Tree-climbing lions and 400+ bird species." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Ready to capture your <span className="italic text-[#c97500]">masterpiece?</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            Your award-winning wildlife photographs await. Let Ndewedo Tours craft your perfect photography safari.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/inquire"
              className="inline-block bg-[#c97500] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-white hover:text-[#0f440f] transition-colors duration-500"
            >
              Plan Your Shoot
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-white hover:text-black transition-colors duration-500"
            >
              Speak to a Photography Expert
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