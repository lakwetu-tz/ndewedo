"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const destinations = [
  {
    name: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNhZmFyaSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MjU5MzI2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    slug: 'tanzania'
  },
  {
    name: 'Kenya',
    image: 'https://www.tourismupdate.com/files/styles/article_large/public/article/headline/2018-05/kenya-tourism-growing-despite-political-unrest.jpg?itok=jJOCaFUr',
    slug: 'kenya'
  },
  {
    name: 'Rwanda',
    image: 'https://africaadventurevacations.com/wp-content/uploads/2022/10/Is-Rwanda-destination-open-for-tourism.jpg',
    slug: 'rwanda'
  },
  {
    name: 'Uganda',
    image: 'https://ugandawildlife.org/wp-content/uploads/2022/05/gorilla-trekking-uganda-portrait-scaled.webp',
    slug: 'uganda'
  },
  {
    name: 'Zanzibar',
    image: 'https://arungaexpeditions.com/wp-content/uploads/2023/11/pongwe-beach-.jpeg',
    slug: 'zanzibar'
  }
];

export default function DestinationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % destinations.length);
    } else if (info.offset.x > threshold) {
      setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    }
  };

  const getDisplayItems = () => {
    const prev = (activeIndex - 1 + destinations.length) % destinations.length;
    const next = (activeIndex + 1) % destinations.length;
    return [
      { ...destinations[prev], position: 'left' },
      { ...destinations[activeIndex], position: 'center' },
      { ...destinations[next], position: 'right' }
    ];
  };

  return (
    <div className="w-full select-none overflow-hidden py-8 bg-[#ffffff]">
  <div className="my-8 flex flex-col items-center">
    {/* Title */}
    <h2 className="text-[28px] sm:text-[45px] font-bold font-serif text-[#222] mb-6 text-center px-4">
      Experience <span className="text-[#1f751f]">the heart of Africa</span>
    </h2>

    {/* Centered Decorative Line */}
    <div className="w-42 h-[2px] bg-[#c97500]/40 mb-10" />

    {/* Destination Names Navigation */}
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8 px-4">
      {destinations.map((dest, index) => (
        <button
          key={dest.slug}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center gap-3 text-[16px] font-['poppins'] sm:text-[18px] transition-all duration-500 group ${
            activeIndex === index
              ? 'text-[#222] font-medium'
              : 'text-[#999] hover:text-[#666]'
          }`}
        >
          {activeIndex === index && (
            <motion.div
              layoutId="activeIndicator"
              className="w-8 h-[1px] bg-[#222]"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          {dest.name}
        </button>
      ))}
    </div>
  </div>

  {/* Dragging Container */}
  <div className="relative w-full cursor-grab active:cursor-grabbing">
    <motion.div
      className="flex items-center justify-center gap-2"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {getDisplayItems().map((dest) => (
          <motion.div
            key={dest.slug + dest.position}
            layout
            initial={{ opacity: 1 }}
            animate={{
              opacity: dest.position === 'center' ? 1 : 0.8,
            }}
            exit={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              opacity: { duration: 0.7, ease: "easeOut" }
            }}
            className={`relative rounded-[4px] overflow-hidden flex-shrink-0 w-[75%] aspect-[16/10] sm:aspect-[2/1] md:aspect-[2.35/1] ${
              dest.position === 'center' ? 'z-10 shadow-md' : 'z-0'
            }`}
          >
            <Link
              href={`/destinations/${dest.slug}`}
              className="block w-full h-full"
              onClick={(e) => {
                if (dest.position !== 'center') e.preventDefault();
              }}
            >
              <ImageWithFallback
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />

              {dest.position === 'center' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8 text-white pointer-events-none">
                    <h3 className="text-[24px] sm:text-[32px] font-medium font-serif border-b border-white/20 pb-1 mb-4 inline-block">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-[12px] font-bold uppercase tracking-[3px]">Discover</span>
                      <div className="h-[1px] w-12 bg-white" />
                    </div>
                  </div>
                </>
              )}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</div>
  );
}
