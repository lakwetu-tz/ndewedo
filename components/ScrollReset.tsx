"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration to ensure we always start at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Double check after a tiny delay to handle any layout shifts
    const rafId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}