"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Utensils, Bed, Check, Sun, Moon, CloudSun, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ItineraryDay {
  day: number;
  title: string;
  location?: string;
  activities: string[];
  meals: string;
  accommodation: string;
  images: string[];
  lodgeInfo?: {
    name: string;
    features: string[];
  };
}

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const handlePrevImage = (day: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [day]: ((prev[day] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleNextImage = (day: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [day]: ((prev[day] || 0) + 1) % totalImages,
    }));
  };

  const getTimeIcon = (dayNum: number) => {
    if (dayNum === 1) return { icon: Sun, label: 'Arrival', color: 'text-[#c97500]' };
    if (dayNum === itinerary.length) return { icon: Moon, label: 'Departure', color: 'text-[#686868]' };
    return { icon: CloudSun, label: 'Exploration', color: 'text-[#1f751f]' };
  };

  const getDayType = (dayNum: number) => {
    if (dayNum === 1) return 'arrival';
    if (dayNum === itinerary.length) return 'departure';
    if (dayNum % 2 === 0) return 'even';
    return 'odd';
  };

  return (
    <div className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[#e5e5e5] hidden lg:block" />
      
      {/* Timeline Progress Line */}
      {openDay && (
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: `calc(${openDay * 100}% - ${(openDay - 1) * 20}px)` }}
          className="absolute left-[27px] top-[20px] w-[2px] bg-[#1f751f] hidden lg:block"
        />
      )}

      <div className="space-y-3">
        {itinerary.map((day, idx) => {
          const isOpen = openDay === day.day;
          const currentIndex = currentImageIndex[day.day] || 0;
          const dayInfo = getTimeIcon(day.day);
          const dayType = getDayType(day.day);

          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot - Desktop */}
              <button
                onClick={() => setOpenDay(isOpen ? null : day.day)}
                className="hidden lg:flex absolute left-[14px] top-6 z-10 w-10 h-10 rounded-full items-center justify-center transition-all duration-300 group"
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#1f751f] border-[#1f751f]' 
                    : 'bg-white border-[#ccc] group-hover:border-[#1f751f]'
                }`}>
                  {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-[#1f751f] scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-300" />
                  )}
                </div>
              </button>

              {/* Card */}
              <div
                className={`relative lg:pl-20 transition-all duration-500 ${
                  isOpen ? '' : ''
                }`}
              >
                {/* Compact Header - Always Visible */}
                <button
                  onClick={() => setOpenDay(isOpen ? null : day.day)}
                  className={`w-full px-6 py-5 flex items-center justify-between rounded-[2px] transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#0f440f] text-white' 
                      : 'bg-white border border-gray-100 hover:border-[#1f751f]/30 hover:shadow-lg'
                  }`}
                >
                  {/* Day Number & Title */}
                  <div className="flex items-center gap-4">
                    {/* Mobile Day Indicator */}
                    <div className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[18px] ${
                      isOpen ? 'bg-[#c97500] text-white' : 'bg-[#1f751f] text-white'
                    }`}>
                      {day.day}
                    </div>
                    
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-['Poppins'] text-[11px] tracking-[3px] uppercase ${
                          isOpen ? 'text-[#c97500]' : 'text-[#888]'
                        }`}>
                          Day {day.day} — {dayInfo.label}
                        </span>
                      </div>
                      <h3 className={`text-[18px] sm:text-[20px] ${isOpen ? 'text-white' : 'text-[#222]'}`}>
                        {day.title}
                      </h3>
                      {day.location && (
                        <p className={`flex items-center gap-1 text-[14px] mt-1 ${
                          isOpen ? 'text-white/60' : 'text-[#686868]'
                        }`}>
                          <MapPin size={14} />
                          {day.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex items-center gap-4">
                    {/* Meals Badge */}
                    <span className={`hidden sm:block text-[12px] tracking-[1px] px-3 py-1 rounded-full ${
                      isOpen ? 'bg-white/10 text-white/80' : 'bg-[#f5f5f5] text-[#666]'
                    }`}>
                      {day.meals}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="text-[#c97500]" size={22} />
                    ) : (
                      <ChevronDown className="text-[#888]" size={22} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="lg:grid lg:grid-cols-12 gap-6 pt-6 pb-2">
                        {/* Left: Image Carousel */}
                        <div className="lg:col-span-7">
                          <div className="relative aspect-[16/10] rounded-[2px] overflow-hidden">
                            <ImageWithFallback
                              src={day.images[currentIndex]}
                              alt={`Day ${day.day} - ${day.title}`}
                              className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            
                            {/* Navigation Arrows */}
                            {day.images.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.stopPropagation(); handlePrevImage(day.day, day.images.length); }}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
                                >
                                  ‹
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleNextImage(day.day, day.images.length); }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
                                >
                                  ›
                                </button>
                              </>
                            )}
                            {/* Image Counter */}
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-[13px]">
                              {currentIndex + 1} / {day.images.length}
                            </div>
                          </div>

                          {/* Thumbnail Strip */}
                          {day.images.length > 1 && (
                            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                              {day.images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => { 
                                    e.stopPropagation();
                                    setCurrentImageIndex((prev) => ({ ...prev, [day.day]: index })) 
                                  }}
                                  className={`flex-shrink-0 w-16 h-16 rounded-[4px] overflow-hidden border-2 transition-all ${
                                    currentIndex === index
                                      ? 'border-[#1f751f]'
                                      : 'border-gray-200 opacity-60 hover:opacity-100'
                                  }`}
                                >
                                  <ImageWithFallback
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Right: Itinerary Details */}
                        <div className="lg:col-span-5 space-y-5">
                          {/* Activities */}
                          <div>
                            <h4 className="font-['Poppins'] text-[12px] tracking-[3px] text-[#888] uppercase mb-4">Experiences</h4>
                            <ul className="space-y-3">
                              {day.activities.map((activity, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] text-[#444]">
                                  <Check size={16} className="text-[#1f751f] mt-0.5 flex-shrink-0" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Meals & Accommodation - Summary Cards */}
                          <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="bg-[#f9f9f7] p-4 rounded-[2px]">
                              <div className="flex items-center gap-2 mb-2">
                                <Utensils size={16} className="text-[#c97500]" />
                                <span className="font-['Poppins'] text-[11px] tracking-[2px] text-[#888] uppercase">Meals</span>
                              </div>
                              <p className="text-[14px] text-[#333]">{day.meals}</p>
                            </div>
                            <div className="bg-[#f9f9f7] p-4 rounded-[2px]">
                              <div className="flex items-center gap-2 mb-2">
                                <Bed size={16} className="text-[#1f751f]" />
                                <span className="font-['Poppins'] text-[11px] tracking-[2px] text-[#888] uppercase">Stay</span>
                              </div>
                              <p className="text-[14px] text-[#333] line-clamp-2">{day.accommodation}</p>
                            </div>
                          </div>

                          {/* Lodge Info if available */}
                          {day.lodgeInfo && (
                            <div className="bg-[#0f440f]/5 border border-[#0f440f]/10 p-4 rounded-[2px]">
                              <h4 className="font-serif text-[16px] text-[#0f440f] mb-2">
                                {day.lodgeInfo.name}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {day.lodgeInfo.features.slice(0, 3).map((feature, i) => (
                                  <span key={i} className="text-[12px] text-[#666] bg-white px-2 py-1 rounded-full border border-gray-200">
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}