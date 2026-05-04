import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mountain, CheckCircle2, Compass, Wind, Timer } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Kilimanjaro Trekking - Ndewedo Tours & Adventure | Climb Africa\'s Highest Peak',
  description: 'Climb Mount Kilimanjaro with experienced guides. Multiple routes available including Machame, Marangu, Lemosho, and Rongai routes.',
}

export default function TrekkingPage() {
  const trekkingRoutes = [
    {
      name: 'Machame Route',
      duration: '7 Days',
      tagline: 'The Scenic Path',
      description: 'The "Whiskey Route" is one of the most scenic and popular routes. It offers excellent acclimatization and stunning views throughout the journey.',
      image: 'https://images.unsplash.com/photo-1613061445510-e296bfedb73e?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Marangu Route',
      duration: '5-6 Days',
      tagline: 'Classic Huts',
      description: 'Known as the "Coca-Cola Route," this is the only route with hut accommodations. It\'s considered easier but has a lower success rate due to faster ascent.',
      image: 'https://images.unsplash.com/photo-1702041423376-a469cbebe66d?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Lemosho Route',
      duration: '7-8 Days',
      tagline: 'The Wilderness',
      description: 'One of the most beautiful and remote routes, offering excellent acclimatization and diverse scenery. Perfect for those seeking a wilderness experience.',
      image: 'https://images.unsplash.com/photo-1658823201587-9a3c95a878f4?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Rongai Route',
      duration: '6-7 Days',
      tagline: 'The Northern Approach',
      description: 'The only route approaching from the north, offering a different perspective and typically drier conditions. Less crowded than other routes.',
      image: 'https://images.unsplash.com/photo-1621414050468-bee4f935bb9d?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <div className="w-full bg-white">
      <HeroSection 
        title="Kilimanjaro Trekking"
        description="Conquer Africa's highest peak at 5,895 meters with our expert mountain guides and a legacy of safety."
        image="https://images.unsplash.com/photo-1613061445510-e296bfedb73e?auto=format&fit=crop&q=80&w=2069"
        ctaText="Plan Your Trek"
        ctaLink="/contact"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-350 mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">THE SUMMIT</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "It is not the mountain we conquer, but ourselves."
          </h2>
          <div className="h-px w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Routes - Editorial Vertical Layout */}
      <section className="py-24 px-6">
        <div className="max-w-350 mx-auto space-y-32">
          {trekkingRoutes.map((route, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">{route.tagline}</span>
                  <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                    {route.name.split(' ')[0]} <br/> <span className="text-[#1f751f]">{route.name.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="font-['Great_Vibes',_cursive] text-[40px] text-[#c97500] -mt-4 opacity-70">{route.duration}</p>
                </div>

                <div className="font-quattro text-[18px] text-[#444] leading-[1.8]">
                  <p>{route.description}</p>
                </div>

                <div className="pt-6">
                  <Link href="/contact?interest=Kilimanjaro Trekking" className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                    Plan This Route —
                  </Link>
                </div>
              </div>

              <div className={`group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                  <img
                    alt={route.name}
                    className="w-full h-[85vh] object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={route.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Included Section - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-350 mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            The Trek Legacy
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-350 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
                { icon: Compass, title: "Expert Guides", desc: "Wilderness First Responder certified guides lead every expedition." },
                { icon: Wind, title: "Safety First", desc: "Daily health checks and emergency oxygen on all summit attempts." },
                { icon: Timer, title: "High Success", desc: "Strategically planned itineraries for optimal altitude acclimatization." },
                { icon: CheckCircle2, title: "Full Porter Support", desc: "Our porters handle the heavy lifting so you can focus on the trail." },
                { icon: CheckCircle2, title: "Mountain Cuisine", desc: "Nutritious, fresh meals prepared daily by our specialized chefs." },
                { icon: CheckCircle2, title: "Quality Gear", desc: "Premium mountain tents and all essential camping equipment provided." }
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
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Conquer the <span className="italic text-[#1f751f]">Roof of Africa.</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            Your journey to Uhuru Peak starts here. Join Ndewedo Tours for a safe, professional, and life-changing climb.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500"
          >
            Inquire About Trekking
          </Link>
        </div>
      </section>
    </div>
  )
}
