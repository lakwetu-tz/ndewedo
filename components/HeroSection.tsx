"use client";

import Link from 'next/link';
import svgPaths from "@/imports/svg-qq1qf7danv";

interface HeroSectionProps {
  title: string;
  description?: React.ReactNode;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
  onCtaClick?: () => void;
}

function ArrowRightSvg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]">
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[8.84%_2.96%]">
          <div className="absolute inset-0" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20">
              <path d={svgPaths.p32591580} stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection({ title, description, image, ctaText = "Learn more", ctaLink = "/contact", showCta = true, onCtaClick }: HeroSectionProps) {
  const CtaButton = () => (
    <div className="box-border content-center flex flex-wrap gap-[20px] items-center justify-center px-[30px] py-[16px] relative rounded-[50px] shrink-0 border border-solid border-white hover:bg-[#1f751f] transition-all duration-300 group cursor-pointer">
      <div className="flex flex-col font-['Poppins'] justify-center leading-none not-italic relative shrink-0 text-[14px] font-medium uppercase tracking-[2px] text-center text-nowrap text-white">
        {ctaText}
      </div>
      <ArrowRightSvg />
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[85vh] w-full relative">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            alt={title}
            className="h-full w-full object-cover"
            src={image}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Centered */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center gap-6 max-w-[900px]">
            <h1 className="font-serif text-[42px] md:text-[68px] text-white font-bold leading-[1.1] drop-shadow-md">
              {title}
            </h1>

            {description && (
              <div className="font-quattro text-[18px] md:text-[22px] text-white/90 leading-relaxed max-w-[700px]">
                {description}
              </div>
            )}

            {showCta && (
              <div className="mt-8">
                {onCtaClick ? (
                  <button onClick={onCtaClick} className="appearance-none border-none bg-transparent p-0"><CtaButton /></button>
                ) : (
                  <Link href={ctaLink}><CtaButton /></Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Minimalist Logo/Icon Accent */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 opacity-30">
             <img alt="" className="h-[40px] w-auto brightness-0 invert" src="/assets/5e9bdb8ec0de5cb6f763bdda7c8e2df02f49cb5d.png" />
        </div>
      </div>
    </section>
  );
}
