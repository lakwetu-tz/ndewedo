"use client";

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { experiences } from '@/app/page';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ExperienceSection({ exp, index }: { exp: typeof experiences[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax reveal: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const smoothY = useSpring(imageY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const isEven = index % 2 === 0;

  return (
    <section
      ref={containerRef}
      className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}
        min-h-[50vh] md:h-[75vh] mt-12 md:mt-64 mb-12 md:mb-16 items-stretch overflow-hidden relative bg-white group `}
    >
      {/* Text Column (Exactly 50% width) */}
      <div className={`w-full md:w-3/4 flex items-start justify-center bg-white z-10
        py-24 md:py-0
        ${isEven
          ? 'md:pl-[22%] md:pr-[0%]'
          : 'md:pr-[22%] md:pl-[0%]'
        } px-6`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[480px] w-full"
        >
          {/* <span className="text-[#888] text-[11px] font-bold uppercase tracking-[8px] block mb-6 opacity-70">
            {exp.label}
          </span> */}
          <h2 className="text-[28px] sm:text-[45px] lg:text-[68px] font-serif text-primary leading-[1.05] tracking-tight font-light mb-10">
            {exp.title}
          </h2>
          <div className="w-32 h-[2px] bg-[#c97500]/40 mb-10" />
          <p className="text-[#555] text-[18px] sm:text-[20px] leading-[1.8] font-light tracking-wide opacity-90 mb-12">
            {exp.description}
          </p>
          <Link
            href={exp.link}
            className="group/link inline-flex items-center gap-8 text-[#111] text-[11px] font-bold font-serif uppercase tracking-[5px] hover:text-[#1f751f] transition-all"
          >
            <span className="relative">
              DISCOVER MORE
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1f751f] transition-all duration-500 group-hover/link:w-full" />
            </span>
            <div className="relative w-24 h-[1px] bg-[#eee] overflow-hidden">
              <div className="absolute inset-0 bg-[#1f751f] -translate-x-full group-hover/link:translate-x-0 transition-transform duration-700 ease-in-out" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-[#111] group-hover/link:bg-[#1f751f] transition-colors duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Image Column (Exactly 50% width) - Immersive Full Bleed */}
      <div className="w-full md:w-2/4 relative min-h-[400px] md:min-h-full rounded-[4px] overflow-hidden">
        <motion.div
          style={{ y: smoothY }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            scale: { duration: 1.8, ease: "easeOut" }
          }}
          className="absolute inset-0 w-full h-[124%] -top-[12%]"
        >
          <ImageWithFallback
            src={exp.image}
            alt={exp.label}
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03] ease-out"
          />
        </motion.div>

        {/* Subtle cinematic overlays */}
        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none transition-opacity group-hover:opacity-0" />

        {/*corner accents */}
        <div className={`absolute top-0 ${!isEven ? 'left-0' : 'right-0'} w-32 h-32 border-t border-white/10 hidden lg:block pointer-events-none`} />
        <div className={`absolute bottom-0 ${!isEven ? 'right-0' : 'left-0'} w-32 h-32 border-b border-white/10 hidden lg:block pointer-events-none`} />
      </div>
    </section>
  );
}