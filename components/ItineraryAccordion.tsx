"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Utensils, Bed, Check } from 'lucide-react';
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

  return (
    <div className="space-y-4">
      {itinerary.map((day) => {
        const isOpen = openDay === day.day;
        const currentIndex = currentImageIndex[day.day] || 0;

        return (
          <div
            key={day.day}
            className="bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenDay(isOpen ? null : day.day)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#1f751f] text-white w-12 h-12 rounded-full flex items-center justify-center text-[18px]">
                  {day.day}
                </div>
                <div className="text-left">
                  <h3 className="text-[20px] sm:text-[22px] text-[#333333]">
                    Day {day.day}: {day.title}
                  </h3>
                  {day.location && (
                    <p className="text-[14px] text-[#686868] flex items-center gap-1 mt-1">
                      <MapPin size={14} />
                      {day.location}
                    </p>
                  )}
                </div>
              </div>
              {isOpen ? (
                <ChevronUp className="text-[#1f751f]" size={24} />
              ) : (
                <ChevronDown className="text-[#686868]" size={24} />
              )}
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="grid lg:grid-cols-2 gap-6 pt-6">
                  {/* Left: Image Carousel */}
                  <div className="relative">
                    <div className="relative h-[280px] sm:h-[340px] rounded-[15px] overflow-hidden">
                      <ImageWithFallback
                        src={day.images[currentIndex]}
                        alt={`Day ${day.day} - Image ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Navigation Arrows */}
                      {day.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrevImage(day.day, day.images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
                            aria-label="Previous image"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() => handleNextImage(day.day, day.images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#333333] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
                            aria-label="Next image"
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
                      <div className="flex gap-2 mt-3 overflow-x-auto">
                        {day.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({ ...prev, [day.day]: index }))
                            }
                            className={`flex-shrink-0 w-16 h-16 rounded-[8px] overflow-hidden border-2 transition-all ${
                              currentIndex === index
                                ? 'border-[#1f751f]'
                                : 'border-gray-300 opacity-60 hover:opacity-100'
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

                  {/* Right: Itinerary Information */}
                  <div className="space-y-5">
                    {/* Itinerary Information Section */}
                    <div>
                      <h4 className="text-[18px] text-[#333333] mb-3">Itinerary Information</h4>
                      <ul className="space-y-2">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-[15px] text-[#686868]">
                            <Check className="w-5 h-5 text-[#1f751f] mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lodge Information */}
                    {day.lodgeInfo && (
                      <div className="bg-[#1f751f]/5 rounded-[15px] p-4">
                        <h4 className="text-[18px] text-[#333333] mb-3">
                          {day.lodgeInfo.name}
                        </h4>
                        <ul className="space-y-2">
                          {day.lodgeInfo.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-[14px] text-[#686868]">
                              <Check className="w-4 h-4 text-[#1f751f] mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Meals & Accommodation */}
                    <div className="flex flex-col gap-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-[15px]">
                        <Utensils size={18} className="text-[#1f751f]" />
                        <span className="text-[#686868]">Meals:</span>
                        <span className="text-[#333333]">{day.meals}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[15px]">
                        <Bed size={18} className="text-[#1f751f]" />
                        <span className="text-[#686868]">Accommodation:</span>
                        <span className="text-[#333333]">{day.accommodation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
