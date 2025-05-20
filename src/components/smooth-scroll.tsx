"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);

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

    // Cleanup
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={smoothWrapper} className="smooth-wrapper">
      <div ref={smoothContent} className="smooth-content">
        {children}
      </div>
    </div>
  );
}
