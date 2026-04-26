import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, GraduationCap, TreePine, ArrowRight, CheckCircle2, HelpingHand, Globe } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Volunteer Programs - Ndewedo Tours | Make a Difference in Tanzania',
  description: 'Join our volunteer programs in Tanzania. Work in education, healthcare, conservation, and community development projects.',
}

export default function VolunteerPage() {
  const programs = [
    {
      title: 'Education',
      subtitle: 'Knowledge is Power',
      description: 'Teach English, mathematics, or other subjects in local schools. Help with after-school programs and educational activities for children of all ages.',
      icon: GraduationCap,
      image: 'https://img.volunteerworld.com/img/default/e0e63fd24397471cd16670480628ed8506733562/IMG4658.jpg?Height=560&Width=560'
    },
    {
      title: 'Healthcare',
      subtitle: 'Healing Hands',
      description: 'Assist in local clinics and health centers. Support medical professionals, participate in health education campaigns, and help improve community health.',
      icon: Heart,
      image: 'https://www.goodhopevolunteers.com/uploads/_processed_/2/4/csm_Health_Care_Project_1_3d5e9202e0.png'
    },
    {
      title: 'Conservation',
      subtitle: 'Protecting Heritage',
      description: 'Work on wildlife conservation, reforestation, and environmental education projects. Help protect Tanzania\'s incredible natural heritage.',
      icon: TreePine,
      image: 'https://vcotanzania.org/wp-content/uploads/2024/06/Screenshot-2024-06-19-105037.png'
    },
    {
      title: 'Development',
      subtitle: 'Building Futures',
      description: 'Support local communities with infrastructure projects, women\'s empowerment programs, and sustainable development initiatives.',
      icon: Users,
      image: 'https://img.volunteerworld.com/img/default/cc6992033cb60e750dc35ef1f2d091d4715063b4/IMG20190726125247.jpg?Width=722'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection 
        title="Volunteer Programs"
        description="Make a meaningful impact in Tanzania through our community-focused volunteer programs."
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
        ctaText="Apply Now"
        ctaLink="/contact"
      />

      {/* Intro Quote Section */}
      <section className="py-24 px-6 text-center bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">IMPACT</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            "The best way to find yourself is to lose yourself in the service of others."
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      {/* Programs - Editorial Vertical Layout */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto space-y-32">
          {programs.map((program, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#888] uppercase block mb-4">{program.subtitle}</span>
                  <h2 className="font-serif text-[48px] md:text-[60px] text-[#222] leading-tight mb-4">
                    {program.title} <span className="text-[#1f751f]">Projects</span>
                  </h2>
                </div>

                <div className="font-quattro text-[18px] text-[#444] leading-[1.8] space-y-6">
                  <p>{program.description}</p>
                </div>

                <div className="pt-6">
                  <Link href="/contact" className="inline-block border-b-2 border-[#1f751f] pb-2 font-['Poppins'] text-[14px] tracking-[4px] uppercase text-[#222] hover:text-[#1f751f] transition-colors">
                    Inquire About {program.title} —
                  </Link>
                </div>
              </div>

              <div className={`group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                  <img
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    src={program.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - Sage Grid Style */}
      <section className="py-24 px-6 bg-[#d1dcd0]">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="font-serif text-[38px] md:text-[48px] text-[#2c3e2c] opacity-80 mb-6">
            The Journey
          </h2>
          <div className="h-[1px] w-24 bg-[#2c3e2c]/30 mx-auto" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
                { icon: Globe, title: "Orientation", desc: "Thorough cultural training, language basics, and project guidance." },
                { icon: Users, title: "Local Living", desc: "Immersive experience living with local families or volunteer houses." },
                { icon: HelpingHand, title: "Sustainable Support", desc: "Fees directly support the communities you serve for long-term impact." },
                { icon: CheckCircle2, title: "Full Support", desc: "In-country team available 24/7 to support your journey." },
                { icon: CheckCircle2, title: "Cultural Events", desc: "Participate in local community events and learn Swahili." },
                { icon: CheckCircle2, title: "Certificate", desc: "Receive a certificate of completion acknowledging your contribution." }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group text-center">
                    <item.icon size={32} strokeWidth={1.5} className="text-[#2c3e2c] mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <h3 className="font-serif text-[20px] text-[#2c3e2c] mb-3">{item.title}</h3>
                    <p className="font-quattro text-[15px] text-[#2c3e2c]/70 leading-relaxed max-w-[280px]">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-[36px] text-[#222]">Requirements</h2>
            <ul className="space-y-4">
              {[
                'Minimum age: 18 years old',
                'Basic English proficiency',
                'Flexibility and cultural sensitivity',
                'Commitment to minimum program duration',
                'Clean criminal background check'
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-4 font-quattro text-[18px] text-[#666]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c97500]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h2 className="font-serif text-[36px] text-[#222]">What's Included</h2>
            <ul className="space-y-4">
              {[
                'Airport pickup and orientation',
                'Accommodation and meals',
                'In-country support',
                'Project placement and supervision',
                'Certificate of completion'
              ].map((inc, i) => (
                <li key={i} className="flex items-center gap-4 font-quattro text-[18px] text-[#666]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1f751f]" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-[40px] md:text-[55px] mb-8">Ready to make a <span className="italic text-[#1f751f]">difference?</span></h2>
          <p className="font-quattro text-white/50 text-[18px] mb-12">
            Join us in creating positive change in Tanzania. Your contribution matters.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#1f751f] text-white px-12 py-5 rounded-[50px] font-['Poppins'] uppercase tracking-[3px] text-[14px] hover:bg-[#c97500] transition-colors duration-500"
          >
            Apply to Volunteer
          </Link>
        </div>
      </section>
    </div>
  )
}
