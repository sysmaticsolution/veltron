"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect mobile and iOS devices
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Detect iOS devices
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(iOS);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Skip smooth scrolling on iOS devices to use native scrolling
    if (isIOS) {
      // Apply styles to make native iOS scrolling feel better
      if (smoothContent.current) {
        // Use setAttribute for non-standard properties
        smoothContent.current.setAttribute('style', '-webkit-overflow-scrolling: touch; overflow-y: auto;');
      }
      return;
    }

    // Create the smooth scroller with optimized settings for different devices
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: isMobile ? 0.8 : 1.2, // Lower smoothness on mobile for better performance
      effects: !isMobile, // Disable effects on mobile devices
      normalizeScroll: !isIOS, // Don't normalize scroll on iOS devices
      ignoreMobileResize: true
    });
    
    // Store the smoother instance in a ref
    smootherRef.current = smoother;

    // Cleanup
    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, [isMobile, isIOS]);
  
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
