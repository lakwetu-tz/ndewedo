import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Binoculars, Star, ArrowRight, MapPin, Compass } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Safari Tours - Ndewedo Tours | Tanzania Wildlife Safaris',
  description: 'Experience unforgettable wildlife safaris in Tanzania. Visit Serengeti, Ngorongoro Crater, Tarangire, and more with expert guides.',
}

export default function SafarisPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection 
        title="Safari Tour & Adventures"
        description="Witness Africa's incredible wildlife in their natural habitat across Tanzania's world-famous national parks."
        image="https://ucc5ff552e3d45cbda421095a864.previews.dropboxusercontent.com/p/thumb/AC9jxSIWW7qaBoJY9jR9o5-aVYAwKNqTMu40X2IOrbHksTeo2Bp8Cb4AaGU06HAFnd7E0hAxWbz4sfV1Uv16LPqDPsp9dgyGp0DIn6-vy0h77fGkF1OymvYKM1r5OwVWQCtjNDQDY1dLw-gc-lz4skeSqC_BoYXT84RfAfTejYzwycWe86Ydg1pYfPX-NS6MZPEBPGnvl_r7qtiUQUHXSMbAK_PQK2AsVDRJBZx7VUEocN0vNJL3cUr_tBVJYL_uwac2K4f9r1K1F-VKG6uc_N0nU0exIloFnkgo0hryoNWvzNu8B1E1TUPdk24TmWXexANnfcyLjLHbQnXDJkFsWjU9FWeYVvhEV9IJ-1K03stWHQ/p.jpeg"
        ctaText="Plan Your Safari"
        ctaLink="/inquire"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">EXPERIENCE</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "There is something about safari life that makes you forget all your sorrows and feel as if you had drunk half a bottle of champagne — bubbling over with heartfelt gratitude for being alive."
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Safari Types - Vertical Editorial Layout */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto space-y-32">

          {/* Wildlife Safaris */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div>
                <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">THE CLASSIC</span>
                <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                  Wildlife <br/> <span className="text-primary">Safaris</span>
                </h2>
                {/* <p className="font-['Great_Vibes',_cursive] text-[40px] text-[#c97500] -mt-4 opacity-70">The Big Five & Beyond.</p> */}
              </div>

              <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                <p>
                  Explore the Serengeti, Ngorongoro Crater, and Tarangire National Park to witness the Big Five and the Great Migration. Our classic wildlife safaris are designed to bring you face-to-face with nature's most magnificent creatures.
                </p>
                {/* <div className="pt-4 border-l-2 border-[#1f751f] pl-6 italic text-[#666]">
                   "Witness millions of wildebeest, zebras, and gazelles on their annual journey across the vast plains."
                </div> */}
              </div>

              <div className="pt-6">
                <Link href="/safaris/wildlife" className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                  Explore Wildlife —
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  alt="Wildlife Safari"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1556960146-ba4d5f5fa2f9?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>

          {/* Photography Safaris - Inverted */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  alt="Photography Safari"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=1200&auto=format&fit=crop"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">THE LENS</span>
                <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                  Photography <br/> <span className="text-primary">Safaris</span>
                </h2>
              </div>

              <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                <p>
                  Specialized safaris designed for photographers with perfect timing and locations for capturing stunning wildlife moments. We understand that the perfect shot requires patience, positioning, and the right light.
                </p>
                <p>
                  Our guides are trained to position vehicles for the best angles and anticipate animal behavior, ensuring you bring home a portfolio of breathtaking images.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/safaris/photography" className="inline-block border-b-2 border-secondary pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#c97500] transition-colors">
                  View Gallery —
                </Link>
              </div>
            </div>
          </div>

          {/* Luxury Safaris */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div>
                <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">THE ELEGANCE</span>
                <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                  Luxury <br/> <span className="text-primary">Safaris</span>
                </h2>
              </div>

              <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                <p>
                  Experience the wild in ultimate comfort with premium lodges, private guides, and exclusive access to prime locations. Our luxury safaris combine the thrill of the bush with the sophistication of world-class hospitality.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/safaris/luxury" className="inline-block border-b-2 border-primary pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                  Discover Luxury —
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  alt="Luxury Safari"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://uc4b8c4c4967484423e691eef891.previews.dropboxusercontent.com/p/thumb/AC_XwJhs-HiRqH_8CX2VamBlk6EMDcW3kpUMzgiIegfL0YcAbNTSpZ8WVzKzGTaBkJA7cnlrCqqrWpLjYCmF2Jmcl6Tq0m6rZo8jaFIVR58UdUMp41nc_fJ7sxM0C8J3-wU0VWt9J46DyNVhhTDfMpfscphfRxkjTdujnxWFgVsYAD1IJSk0KHHBC8CYDZPIaqrsHoYshkxKrmYesNVST67rDS2ehDEWqyLLSqHhoUUOsJOr53YQE7QH8zWbQ6Dm5mwOfkirezfVII9rE0jd4ok120yUhorWOV6YN3llupNQbNpzJKNexg2DQr2HaZEb-bQU7Teo5ukDjmoeL07ceE8WUHUV1wQQTeTLdlrdBiCKHw/p.jpeg"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Destinations - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            Wild Sanctuaries
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { icon: MapPin, title: "Serengeti", desc: "The legendary stage of the Great Migration." },
                { icon: Binoculars, title: "Ngorongoro", desc: "A prehistoric caldera teeming with life." },
                { icon: Compass, title: "Tarangire", desc: "Land of elephants and ancient baobabs." },
                { icon: Camera, title: "Manyara", desc: "A birdwatcher's paradise with tree-climbing lions." }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                    <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
                    <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* What to Expect - Content with Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="group relative">
               <div className="aspect-[3/2] overflow-hidden rounded-[2px]">
                  <img
                    alt="Safari Experience"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop"
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-[#1f751f] p-8 hidden lg:block text-white">
                  <span className="font-serif text-[40px] block mb-1">100%</span>
                  <span className="text-[11px] uppercase tracking-[2px] opacity-70">Authentic Wild</span>
               </div>
            </div>

            <div className="space-y-8">
              <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block">THE EXPERIENCE</span>
              <h2 className="font-serif text-[42px] text-[#222]">What to expect</h2>
              <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-6">
                <p>
                  Our safari experiences are designed to provide you with the best possible wildlife viewing opportunities while ensuring your comfort and safety. All our safaris include experienced guides who are passionate about wildlife and conservation.
                </p>
                <p>
                  We use well-maintained 4x4 vehicles equipped with pop-up roofs for optimal game viewing and photography. Accommodations range from comfortable tented camps to luxury lodges, all strategically located for easy access to prime wildlife areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Begin your <span className="italic text-[#1f751f]">adventure.</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            Ready for your safari adventure? Contact us today to plan your perfect Tanzania safari experience.
          </p>
          <Link 
            href="/inquire"
            className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500"
          >
            Plan Your Safari
          </Link>
        </div>
      </section>

    </div>
  )
}
