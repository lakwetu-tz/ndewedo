"use client";

import { useEffect, useState } from 'react';

interface PackageSubNavProps {
  sections?: {
    id: string;
    label: string;
  }[];
}

export default function PackageSubNav({ sections }: PackageSubNavProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSticky, setIsSticky] = useState(false);

  const defaultSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'rates', label: 'Rates' },
    { id: 'inclusions', label: 'Inclusions' }
  ];

  const navSections = sections || defaultSections;

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should show sticky nav
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 400);

      // Update active section based on scroll position
      const sectionElements = navSections.map(section =>
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(navSections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navSections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`sticky top-[80px] z-40 bg-white border-b border-gray-200 transition-all duration-300 ${
        isSticky ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-start gap-2 overflow-x-auto">
          {navSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-6 py-4 text-[15px] whitespace-nowrap border-b-2 transition-all ${
                activeSection === section.id
                  ? 'border-[#1f751f] text-[#1f751f]'
                  : 'border-transparent text-[#686868] hover:text-[#1f751f]'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
