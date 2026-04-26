import type { Metadata } from 'next'
import { Users, Award, Globe, Heart, Quote } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'About Us - Ndewedo Tours & Adventures | Your Trusted Tanzania Safari Partner',
  description: 'Learn about Ndewedo Tours & Adventures, your premier Tanzania safari and adventure travel company with over 15 years of experience in creating unforgettable African journeys.',
}

export default function AboutPage() {
  return (
    <div className="w-full">
      <HeroSection
        title="About Ndewedo Tours & Adventures"
        description="Your trusted partner for authentic Tanzanian adventures and cultural experiences"
        image="https://ndewedotours.com/wp-content/uploads/2025/02/pexels-balazsimon-15994191-scaled.jpg"
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* Our Story - Redesigned to match provided image layout */}
      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">

            {/* Left Column: Headings */}
            <div className="space-y-2">

              <h2 className="font-serif text-[48px] md:text-[64px] text-primary leading-[1.1] mb-2">
                The heart of Ndewedo's
              </h2>
              <p className="font-serif text-[50px] md:text-[75px]  -mt-6 ml-2 md:ml-4 leading-tight opacity-80">
                Magic.
              </p>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-8 pt-4 lg:pt-12">
              <div className="font-open text-[18px] md:text-[20px] text-[#444] leading-[1.5] space-y-6">
                <p>
                  Ndewedo Tours & Adventures was founded with a simple mission: to share the incredible beauty and rich culture of Tanzania with the world. With over 15 years of experience, we have become one of the most trusted names in Tanzanian tourism.
                </p>
                <p>
                  Our journey began with a passion for wildlife conservation and cultural preservation. Today, we're proud to offer authentic experiences that benefit local communities while providing our guests with memories that last a lifetime.
                </p>
                <p>
                  We specialize in delivering exceptional travel experiences tailored to your needs, whether you're seeking thrilling wildlife encounters, challenging mountain treks, or immersive cultural exchanges.
                </p>
                <p>
                  Our guides love to share their knowledge and stories of the wildlife, landscapes, history and the people of Tanzania. Behind the scenes, our team takes remarkable pride in showcasing our indigenous heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Redesigned to match "Why we love it" aesthetic */}
      <section className="min-h-[60vh] flex flex-col justify-center py-20 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto w-full text-center">
          <h2 className="font-serif text-[42px] md:text-[52px] text-[#2c3e2c] mb-16 opacity-80">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-6 opacity-70">
                <Users size={32} strokeWidth={1.5} className="text-[#2c3e2c]" />
              </div>
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-4">Community First</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[240px]">
                We work closely with local communities, ensuring our tours benefit the people of Tanzania.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 opacity-70">
                <Award size={32} strokeWidth={1.5} className="text-[#2c3e2c]" />
              </div>
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-4">Excellence</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[240px]">
                We maintain the highest standards in service, safety, and customer satisfaction.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 opacity-70">
                <Globe size={32} strokeWidth={1.5} className="text-[#2c3e2c]" />
              </div>
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-4">Sustainability</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[240px]">
                We're committed to responsible tourism and environmental conservation.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 opacity-70">
                <Heart size={32} strokeWidth={1.5} className="text-[#2c3e2c]" />
              </div>
              <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-4">Authenticity</h3>
              <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[240px]">
                We provide genuine cultural experiences that honor Tanzanian traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Minimalist & Consistent */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              {/* <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-4">THE GUIDES</span> */}
              <h2 className="font-serif text-[32px] md:text-[48px] text-primary leading-tight">Meet The Team <br/>
              {/* <span className="italic opacity-60">Magic.</span> */}
              </h2>
            </div>
            <p className="font-quattro text-[16px] text-[#666] max-w-[500px] leading-relaxed">
              Our experienced team are passionate about sharing Tanzania's wonders with you, ensuring every journey is safe and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Michael Mushi',
                role: 'Founder & CEO',
                img: 'https://ndewedotours.com/wp-content/uploads/2025/02/Excursions-48-768x768-1.webp',
                desc: 'Michael is a veteran Tour Operator with over a decade of experience leading expeditions across Tanzania.',
              },
              {
                name: 'Natalie Kloc',
                role: 'Co-Founder',
                img: 'https://ndewedotours.com/wp-content/uploads/2025/02/Excursions-52-768x768-1.webp',
                desc: 'Natalie specializes in cultural immersion, bridging the gap between global travelers and Tanzanian heritage.',
              },
              {
                name: 'Ismail Carlos',
                role: 'Tour Guide',
                img: 'https://ndewedotours.com/wp-content/uploads/2025/02/3FC4C35A-3794-4359-AD52-FFF1DA2E6397-713x950-1.webp',
                desc: 'Ismail is a highly skilled Safari Guide known for his keen eye for wildlife and passion for storytelling.',
              },
            ].map((member) => (
              <div key={member.name} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 rounded-[2px]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-[24px] text-[#222] mb-1">{member.name}</h3>
                <p className="font-['Poppins'] text-[12px] tracking-[2px] text-[#c97500] uppercase mb-4">{member.role}</p>
                <p className="font-quattro text-[16px] text-[#666] leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Animated & Elegant */}
<section className="py-24 px-6 bg-[#fdfcfb] overflow-hidden">
  <div className="max-w-[1200px] mx-auto">
    <div className="text-center mb-20">
      <Quote className="mx-auto mb-6 text-[#1f751f]/20" size={60} />
      <h2 className="font-serif text-[36px] md:text-[45px] text-[#222]">
        Guest Memories
      </h2>
      <p className="text-[#666] mt-3 max-w-md mx-auto">
        Real stories from travelers who experienced the magic of Tanzania with us
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
      {[
        {
          name: 'Sarah L.',
          review: 'Ndewedo Tours provided an unforgettable safari experience. The guides were knowledgeable and friendly, making every moment safe and magical.',
          location: 'USA',
          image: 'https://ndewedotours.com/wp-content/uploads/2025/02/pexels-balazsimon-15994191-scaled.jpg' // you can change to actual client photos if available
        },
        {
          name: 'James K.',
          review: 'Our family trip exceeded all expectations. From incredible wildlife encounters to authentic cultural experiences, everything was perfectly organized.',
          location: 'UK',
          image: 'https://ndewedotours.com/wp-content/uploads/2025/02/pexels-balazsimon-15994191-scaled.jpg'
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="group relative p-10  transition-all duration-500 border border-[#f5f5f5] flex flex-col h-full animate-fade-in-up"
          style={{ animationDelay: `${idx * 150}ms` }}
        >
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 right-8 text-[#1f751f]/10 group-hover:text-[#1f751f]/20 transition-colors duration-700">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="flex-1">
            <p className="font-quattro text-[21px] md:text-[23px] leading-relaxed text-[#333] italic mb-10 relative z-10">
              “{item.review}”
            </p>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {/* Optional: Client Avatar */}
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#c97500]/20 group-hover:border-[#c97500]/40 transition-colors">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>

            <div>
              <h4 className="font-serif text-[19px] text-[#222] tracking-wide">
                {item.name}
              </h4>
              <span className="text-[13px] text-[#c97500] tracking-[2px] uppercase font-medium">
                {item.location}
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-0.5 w-12 bg-gradient-to-r from-[#c97500] to-transparent mt-8 group-hover:w-20 transition-all duration-500" />
        </div>
      ))}
    </div>

    {/* Subtle call to action */}
    <div className="text-center mt-16">
      <a 
        href="/contact" 
        className="inline-flex items-center gap-3 text-[#1f751f] hover:text-[#c97500] transition-colors group font-medium"
      >
        Share your own Ndewedo story
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
</section>

      {/* Office Locations - Minimal Dark Footer */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white/90">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-[32px] mb-8">Get in touch</h2>
              <p className="font-quattro text-white/50 leading-relaxed mb-8">
                Ready to plan your next adventure? Our team in Tanzania and the UK are here to help you create the perfect itinerary.
              </p>
              <div className="h-[2px] w-16 bg-[#1f751f]" />
            </div>

            <div className="space-y-4">
              <span className="text-[12px] tracking-[3px] text-[#c97500] uppercase block mb-6">Tanzania Office</span>
              <p className="font-quattro text-[18px]">P.O.BOX 11677 - Sakina Arusha</p>
              <p className="font-quattro text-[18px]">info@ndewedotours.com</p>
              <p className="font-quattro text-[18px]">+255 753 243 280</p>
            </div>

            <div className="space-y-4">
              <span className="text-[12px] tracking-[3px] text-[#c97500] uppercase block mb-6">UK Office</span>
              <p className="font-quattro text-[18px]">Kirkcaldy, Scotland, UK</p>
              <p className="font-quattro text-[18px]">natalie@ndewedotours.com</p>
              <p className="font-quattro text-[18px]">+44 743 203 8845</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
