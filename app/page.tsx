"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import {
  ArrowRight
} from 'lucide-react';
import DestinationsCarousel from '@/components/DestinationsCarousel';
import TailorMadeSafariWizard from '@/components/TailorMadeSafariWizard';
import { posts } from './blog/data';
import ExperienceSection from '@/components/ExperienceSection';

export const experiences = [
  {
    label: "AVIAN SYMPHONY",
    title: "Scenic Views",
    description: "Tanzania is a sanctuary for bird lovers, boasting over 1,000 species. From the majestic Fish Eagle to the vibrant Lilac-breasted Roller, every moment is a discovery in the canopy of our great rift valley.",
    image: "https://images.unsplash.com/photo-1590606549564-aa4198e9b47c?q=80&w=1000&auto=format&fit=crop",
    link: "/safari-packages"
  },
  {
    label: "AQUATIC SERENITY",
    title: "River Sailing",
    description: "Drift silently along the ancient veins of the landscape. Experience the unique perspective of wildlife from the water, where hippos play and elephants come to drink at the golden hour of sunset.",
    image: "https://www.exploretanzaniatours.com/wp-content/uploads/2022/02/6f-705x470.jpg",
    link: "/safari-packages"
  },
  {
    label: "CLOSE ENCOUNTERS",
    title: "Walking Safari",
    description: "Feel the earth beneath your feet and the pulse of the bush. An intimate connection with nature, guided by experts who reveal the secrets of the small things often missed from a vehicle.",
    image: "https://images.unsplash.com/photo-1700221721339-087ad22b3908?q=80&w=1000&auto=format&fit=crop",
    link: "/safari-packages"
  },
  {
    label: "ANCIENT GIANTS",
    title: "Baobab View",
    description: "Stand in awe before the majestic Baobabs, the 'Trees of Life'. These ancient sentinels of the savannah have witnessed centuries of African history, standing tall against the horizon of Tarangire.",
    image: "https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/5e051405-5988-41a7-9e9c-46255bd5223c/**elle-leontiev-Wtv8wbxk-M4-unsplash-2.jpg?format=1000w",
    link: "/safari-packages"
  },
  {
    label: "CULTURAL HERITAGE",
    title: "Stone Town",
    description: "Lose yourself in the winding alleys of Zanzibar's heart. A melting pot of cultures, spices, and architectural marvels that tell the story of a bygone era and a vibrant present.",
    image: "https://safaris-r-us.com/wp-content/uploads/2021/11/stone-town.jpg",
    link: "/zanzibar-excursions"
  },
  {
    label: "AERIAL PERSPECTIVE",
    title: "Balloon Safari",
    description: "Rise with the sun and float silently over the Serengeti. Witness the great migration from above, a vast tapestry of life in motion across the endless plains of the savannah.",
    image: "https://safaris-r-us.com/wp-content/uploads/2022/01/ballon2.jpg",
    link: "/safari-packages"
  },
  {
    label: "THE CLASSIC SAFARI",
    title: "Game Drive",
    description: "Into the heart of the drama. Our expert guides translate the language of the wilderness, leading you to those rare, breathtaking moments where nature reveals its rawest truths.",
    image: "https://images.unsplash.com/photo-1661696710086-c84f5471aeb3?q=80&w=1000&auto=format&fit=crop",
    link: "/safari-packages"
  }
];


export default function HomePage() {
  const [showWizard, setShowWizard] = useState(false);

  // Take the latest 3 blog posts
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="w-full font-open overflow-x-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.asiliaafrica.com/wp-content/uploads/2024/04/30sec-Teaser-2-master-clean.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-[1200px]">
          <h1 className="text-[36px] font-serif sm:text-[50px] md:text-[60px] lg:text-[70px] mb-4 sm:mb-6 leading-tight font-bold">
            Experience the Magic of <span className="text-[#c97500]">Tanzania</span>
          </h1>
          <p className="text-[18px] sm:text-[22px] md:text-[24px] mb-8 sm:mb-10 max-w-[800px] mx-auto font-light leading-relaxed">
            Discover breathtaking landscapes, majestic wildlife, and vibrant cultures with Ndewedo Tours and Safari.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/safari-packages"
              className="w-full sm:w-auto bg-[#1f751f] text-white px-10 py-4 rounded-[4px] text-[14px] font-bold uppercase tracking-[3px] hover:bg-[#c97500] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Explore Safaris <ArrowRight size={18} />
            </Link>
            <button
              onClick={() => setShowWizard(true)}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-[4px] text-[14px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-[#0f440f] transition-all"
            >
              Plan Your Trip
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-[10px] uppercase tracking-[4px] font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

        {/* WELCOME TO OUR WORLD SECTION */}
       
              
              {/* LEFT COLUMN: Text + Cabin image (exact stacked layout) */}
              {/* <div className="lg:col-span-5">
                <h2 className="text-[28px] sm:text-[45px] font-bold font-serif text-primary mb-6 text-start px-4">
                  Welcome to<br />Ndewedo Tour & Adventure 
                </h2>
                
                <div className="text-[#555] text-[18px] sm:text-[20px] leading-[1.8] font-light tracking-wide opacity-90 mb-12">
                  Discover the unique atmosphere of our private residential club communities. Once experienced, never forgotten. This is where comfortable, modern living in nature&apos;s most spectacular international settings. Seamlessly exclusive. Community welcoming. Find your unique world - a place where families love to be, creating unforgettable moments, together.
                </div> */}

                {/* Cabin image - exact position and size below text */}
                {/* <div className="mt-12 lg:mt-16 rounded-lg  overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/id/1016/700/460" 
                    alt="Man relaxing by fire pit outside luxury cabin at dusk"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div> */}

              {/* RIGHT COLUMN: Turquoise kayak image with mountain silhouette overlay */}
              {/* <div className="lg:col-span-7 relative"> */}
                {/* Main kayak image - tall and exact proportions */}
                {/* <img 
                  src="https://picsum.photos/id/1005/900/1100" 
                  alt="Yellow kayak and people in crystal turquoise ocean"
                  className="w-full lg:h-[640px] object-cover rounded-[4px] "
                /> */}

                {/* Mountain silhouette overlay - exact jagged decorative element on left side of image */}
                {/* <svg 
                  className="absolute -left-6 lg:-left-12 top-12 lg:top-20 w-52 lg:w-72 h-96 text-stone-300 z-10 drop-shadow-md"
                  viewBox="0 0 600 600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                > */}
                  {/* Multiple mountain peaks to match the design */}
                  {/* <path d="M0 600 L120 320 L250 480 L380 210 L520 390 L600 280 L600 600 Z" />
                  <path d="M80 600 L200 280 L320 420 L450 180 L580 350 L600 600 Z" opacity="0.85" />
                  <path d="M150 600 L270 250 L400 380 L500 160 L600 320 L600 600 Z" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </section> */}



      {/* Services Overview */}
      <section className="py-24 px-4 bg-white border-b border-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] sm:text-[45px] font-serif font-bold text-[#222] mb-4">
              Your Gateway to <span className="text-[#1f751f]">Authentic Tanzania</span>
            </h2>
            <p className="text-[#666] max-w-[800px] mx-auto text-[16px] sm:text-[18px]">
              From the endless plains of the Serengeti to the turquoise waters of Zanzibar, we create unforgettable journeys that connect you with the heart of Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[4px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765706730243-b8964b3d5692?q=80&w=1000&auto=format&fit=crop"
                  alt="Luxury Safari"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[#c97500] text-[12px] font-bold uppercase tracking-[2px] mb-2 block">Premium Experience</span>
                  <h3 className="text-[24px] font-serif font-bold">Luxury Safaris</h3>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed font-light mb-4">
                Experience the wild in unparalleled comfort with our handpicked luxury lodges and private guides.
              </p>
              <Link href="/safari-packages" className="text-[#1f751f] font-bold font-serif text-[13px] uppercase tracking-[2px] flex items-center gap-2 hover:gap-3 transition-all">
                Discover More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[4px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1735637082450-deeffc9fbc2a?q=80&w=1000&auto=format&fit=crop"
                  alt="Mount Kilimanjaro"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[#c97500] text-[12px] font-bold uppercase tracking-[2px] mb-2 block">Adventure</span>
                  <h3 className="text-[24px] font-serif font-bold">Kilimanjaro Treks</h3>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed mb-4">
                Conquer the Roof of Africa with our expert team of porters and guides. Safety and success are our priorities.
              </p>
              <Link href="/mountain-climbing" className="text-[#1f751f] font-serif font-bold text-[13px] uppercase tracking-[2px] flex items-center gap-2 hover:gap-3 transition-all">
                Discover More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-[4px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628531895979-af3fb7617ef7?q=80&w=1000&auto=format&fit=crop"
                  alt="Zanzibar Beach"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[#c97500] text-[12px] font-bold uppercase tracking-[2px] mb-2 block">Relaxation</span>
                  <h3 className="text-[24px] font-serif font-bold">Zanzibar Getaways</h3>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed mb-4">
                Unwind on pristine white sands and explore the historic Stone Town in our tailored beach packages.
              </p>
              <Link href="/zanzibar-excursions" className="text-[#1f751f] font-serif font-bold text-[13px] uppercase tracking-[2px] flex items-center gap-2 hover:gap-3 transition-all">
                Discover More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Carousel */}
      <DestinationsCarousel />

      {/* Experiences Section - Simbavati Inspired Layout */}
      <div className="bg-white">

        <div className='flex flex-col items-center'>
          {/* <h2 className="text-[28px] sm:text-[45px] font-bold text-[#222] mb-6 text-center px-4">
            Experience <span className="text-[#1f751f]">the heart of Africa</span>
          </h2>

          {/* Centered Decorative Line */}
          {/* <div className="w-42 h-[2px] bg-[#222] mb-10" /> */}
        </div>

        {experiences.map((exp, index) => (
          <ExperienceSection key={index} exp={exp} index={index} />
        ))}
      </div>

      {/* Blog/Stories Section - Travel Journal */}
      <section className="py-32 px-4 bg-[#fcfcfc] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>              
              <h2 className="text-[32px] sm:text-[45px] font-serif font-bold text-[#222]">Stories from <span className="text-[#1f751f]">The Wild</span></h2>
              <Link href="/blog" className="text-[#222] border-b-2 border-[#1f751f] pb-1 font-bold text-[13px] uppercase tracking-[2px] hover:text-[#1f751f] transition-all">View All Stories</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-[4px]">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3 text-[12px] text-[#888] font-medium uppercase tracking-[1px]">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-[#c97500] rounded-full" />
                </div>
                <h3 className="text-[20px] font-bold font-serif text-[#222] mb-3 group-hover:text-[#1f751f] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[#666] text-[15px] leading-relaxed line-clamp-2 font-light">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Tailor Made Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop"
            alt="Safari Background"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4">
          <div className="max-w-[700px]">
            <span className="text-[#c97500] text-[14px] font-bold uppercase tracking-[4px] mb-4 block">Tailor-Made Experience</span>
            <h2 className="text-[32px] sm:text-[50px] font-serif text-white leading-tight mb-6">
              Dreaming of a <span className="italic">Unique</span> Safari?
            </h2>
            <p className="text-[16px] sm:text-[18px] mb-10 text-white/90 leading-relaxed font-light drop-shadow-md">
              Let us help you plan the perfect Tanzania experience tailored exactly to your dreams. Your journey begins here.
            </p>
            <div className="flex justify-end md:justify-start">
              <button
                onClick={() => setShowWizard(true)}
                className="bg-[#c97500] text-white px-12 py-4 rounded-[4px] text-[14px] font-bold uppercase tracking-[3px] hover:bg-white hover:text-[#0f440f] transition-all shadow-2xl"
              >
                Inspire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard Modal */}
      {showWizard && (
        <TailorMadeSafariWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
      )}
    </div>
  );
}
