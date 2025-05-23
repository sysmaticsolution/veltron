"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Track route changes
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5, // Adjust the smoothness (higher = smoother but slower)
      effects: true, // Enable special effects like parallax
      normalizeScroll: true, // Normalize scroll behavior across devices
      ignoreMobileResize: true, // Prevent issues on mobile resize
    });
    
    // Store the smoother instance in a ref
    smootherRef.current = smoother;

    // Cleanup
    return () => {
      smoother.kill();
    };
  }, []);
  
  // Effect that runs on route change to scroll to top
  useEffect(() => {
    // When the pathname changes, scroll to the top
    if (smootherRef.current) {
      smootherRef.current.scrollTop(0);
    } else {
      // Fallback to standard window scroll if smoother is not available
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div ref={smoothWrapper} className="smooth-wrapper">
      <div ref={smoothContent} className="smooth-content">
        {children}
      </div>
    </div>
  );
}
