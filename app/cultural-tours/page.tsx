import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection'
import { Coffee, Wine, Mountain, Users, MapPin, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cultural Tours - Ndewedo Tours | Experience Authentic Tanzania Culture',
  description: 'Discover authentic Tanzanian culture with visits to Maasai tribes, traditional coffee farms, banana wine tastings, and ancient cave explorations.',
}

export default function CulturalToursPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection 
        title="Cultural Tours"
        description="Beyond sightseeing—immerse yourself in a world of culture, connection, and discovery as we introduce you to the heart of Tanzania through its people."
        image="/assets/8c94629a5a5ad4d6d93a9cbc25691273b88a5856.png"
        ctaText="Book Your Experience"
        ctaLink="/contact"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-serif text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">CONNECTION</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "The heart of every destination lies in its people, stories, and heritage."
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Maasai Tribe - Editorial Layout */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">THE TRADITION</span>
                <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                  Meet the <br/> <span className="text-[#1f751f]">Maasai Tribe</span>
                </h2>
                <p className="font-['Great_Vibes',_cursive] text-[40px] text-[#c97500] -mt-4 opacity-70">Authentic & Unfiltered.</p>
              </div>

              <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                <p>
                  Travel outside of Arusha to a Masaai tribe and spend the entire day learning and experiencing what it means to be a Masaai! This is a top-rated tour, allowing you to see first-hand how the tribe lives, eats, loves, and appreciates one another.
                </p>
                <p>
                  One of the most profound experiences is witnessing the sacred sacrifice of a goat, a ritual deeply embedded in their culture. Assist the warriors in preparing the meal and, if you choose, participate in the tradition of catching the blood for good luck.
                </p>
                <div className="pt-4 border-l-2 border-[#1f751f] pl-6 italic text-[#666]">
                   "Allow the tribe to dress you in traditional clothing and beads. Learn their moves together and build lasting friendships."
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="bg-[#f5f5f5] px-6 py-4 rounded-[2px] border-b-2 border-[#c97500]">
                    <span className="block text-[12px] tracking-[2px] uppercase text-[#888] mb-1">Price</span>
                    <span className="font-serif text-[20px] text-[#222] font-bold">$50 / person</span>
                </div>
                <div className="bg-[#f5f5f5] px-6 py-4 rounded-[2px] border-b-2 border-[#1f751f]">
                    <span className="block text-[12px] tracking-[2px] uppercase text-[#888] mb-1">Inclusions</span>
                    <span className="font-serif text-[20px] text-[#222] font-bold">Full Day + Transport</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  alt="Maasai tribe member"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/assets/84aae7ff223a40785576ac228aed3a3c2d2b2a01.png"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="mt-6 flex justify-between items-center opacity-60">
                 <span className="font-quattro text-[14px] uppercase tracking-widest italic">Captured near Arusha</span>
                 <Camera size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Coffee Farm - Editorial Style (Inverted) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="group">
               <div className="relative aspect-[3/2] overflow-hidden rounded-[2px]">
                  <img
                    alt="Coffee farm"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/b5/f4/4e.jpg"
                  />
               </div>
               <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-[2px] overflow-hidden">
                    <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/b5/f4/4c.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
                  <div className="aspect-square rounded-[2px] overflow-hidden">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/94/42/23/caption.jpg?w=1000&h=-1&s=1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                  </div>
               </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="font-serif text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">THE HARVEST</span>
                <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                  Babu's <br/> <span className="text-[#c97500]">Coffee Farm</span>
                </h2>
              </div>

              <div className="font-['Poppins'] text-[18px] text-[#444] leading-[1.8] space-y-6">
                <p>
                  Visit the slopes of Mount Meru and walk through lush organic coffee plantations. Learn the entire process from planting to the final cup, guided by local farmers who have passed these traditions down for generations.
                </p>
                <p>
                  Pick your own coffee cherries, roast them over an open fire, and grind them with a traditional mortar and pestle before enjoying the freshest cup of coffee you've ever tasted.
                </p>
              </div>

              <div className="pt-6">
                <Link href="/contact" className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                  Inquire for Details —
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banana Beer & Wine - Split Layout */}
      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
           <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-4">LOCAL TASTES</span>
           <h2 className="font-serif text-[42px] text-[#222]">The Banana Craft</h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white p-12 rounded-[2px] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="font-serif text-[28px] text-[#1f751f] mb-6">Traditional Beer</h3>
              <p className="font-quattro text-[17px] text-[#666] leading-relaxed mb-8">
                Discover the complex process of fermenting bananas into a local staple. Visit a community brewery and sample the unique flavors of Tanzanian craftsmanship.
              </p>
              <div className="h-[2px] w-12 bg-[#c97500] opacity-30" />
           </div>
           <div className="bg-white p-12 rounded-[2px] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="font-serif text-[28px] text-[#1f751f] mb-6">Handcrafted Wine</h3>
              <p className="font-quattro text-[17px] text-[#666] leading-relaxed mb-8">
                Tanzania's banana wines are famous for their sweet, bold profile. Join a tasting session with the "mamas" who lead the production.
              </p>
              <div className="h-[2px] w-12 bg-[#c97500] opacity-30" />
           </div>
        </div>
      </section>

      {/* Ancient Caves - Final Bookend */}
      <section className="py-24 px-6 bg-[#222] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
               <h2 className="font-serif text-[48px] md:text-[65px] leading-tight">Chagga Caves & <br/> <span className="text-[#1f751f]">Ancient Secrets</span></h2>
               <p className="font-quattro text-[19px] text-white/60 leading-relaxed">
                  Deep in the foothills of Kilimanjaro lie the historic Chagga caves. These subterranean labyrinths were used for protection during tribal wars and are now a window into the resilience of the local people.
               </p>
               <div className="flex gap-8 items-center pt-8">
                  <div className="text-center">
                     <span className="block text-[32px] font-serif text-[#c97500]">200+</span>
                     <span className="text-[11px] uppercase tracking-[2px] text-white/40">Years of History</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="text-center">
                     <span className="block text-[32px] font-serif text-[#c97500]">15m</span>
                     <span className="text-[11px] uppercase tracking-[2px] text-white/40">Cave Depth</span>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="aspect-video rounded-[2px] overflow-hidden">
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/0c/0e/64/caption.jpg?w=700&h=400&s=1" className="w-full h-full object-cover opacity-80" alt="Ancient caves" />
               </div>
               {/* Decorative floating element */}
               <div className="absolute -bottom-10 -left-10 bg-[#1f751f] p-8 hidden lg:block">
                  <Quote className="text-white/50 mb-4" />
                  <p className="font-serif text-[18px] max-w-[200px]">A journey into the silent echoes of the past.</p>
               </div>
            </div>
        </div>
      </section>

            {/* Why We Love the Culture - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            Cultural Essence
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
                { icon: Users, title: "Tribal Bonds", desc: "Experience the deep connection and community of the Maasai." },
                { icon: Coffee, title: "Farm to Cup", desc: "Learn the ancient secrets of Meru coffee farming." },
                { icon: Wine, title: "Local Spirits", desc: "Taste traditional banana beer and handcrafted wines." },
                { icon: MapPin, title: "Ancient Paths", desc: "Explore the historic Chagga caves and hidden waterfalls." }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                    <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
                    <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[1400px] mx-auto border-t border-gray-100 pt-24">
          <h2 className="font-serif text-[40px] md:text-[55px] text-[#222] mb-12">Ready to meet the <span className="italic">locals?</span></h2>
          <Link href="/contact" className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500">
            Enquire Now
          </Link>
        </div>
      </section>

    </div>
  )
}

function Quote(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6s-.5 1 0 1 1 0 1 0zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6s-.5 1 0 1 1 0 1 0z" />
    </svg>
  )
}
