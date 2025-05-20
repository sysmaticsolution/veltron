"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Moon, Sun } from "lucide-react";
import { createPortal } from "react-dom";
import { useTheme } from "next-themes";

// Fixed Floating Buttons that stick to the viewport
export default function FloatingButtons() {
  // Only run DOM operations on the client side
  const [isMounted, setIsMounted] = useState(false);
  const [isClientMobile, setIsClientMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Setup client-side detection and portal container
  useEffect(() => {
    setIsMounted(true);

    // Create fixed styles
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      .veltron-floating-buttons-fixed {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
        pointer-events: none !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        width: auto !important;
        height: auto !important;
      }
      .veltron-floating-buttons-fixed * {
        pointer-events: auto !important;
      }
      .veltron-floating-button {
        width: 56px !important;
        height: 56px !important;
      }
    `;
    document.head.appendChild(styleEl);

    // Create portal container
    let container = document.getElementById('veltron-floating-buttons');
    if (!container) {
      container = document.createElement('div');
      container.id = 'veltron-floating-buttons';
      container.className = 'veltron-floating-buttons-fixed';
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    // Detect mobile
    const checkMobile = () => setIsClientMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      // Don't remove the container or styles to keep buttons present across navigation
    };
  }, []);

  // Setup animations
  useEffect(() => {
    if (!isMounted) return;

    // Initial entrance animation
    gsap.fromTo(
      ".floating-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.5 }
    );

    // Setup pulse animations
    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to(".pulse-effect", {
      scale: 1.3,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2
    });

    // Setup floating motion
    const buttons = document.querySelectorAll('.floating-button');
    buttons.forEach((button, index) => {
      gsap.to(button, {
        y: "random(-8, 8)",
        x: "random(-3, 3)",
        rotation: "random(-3, 3)",
        duration: 2 + index * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });

    return () => timeline.kill();
  }, [isMounted]);

  // Early return if not mounted or no portal container
  if (!isMounted || !portalContainer) return null;

  // The actual buttons component
  const ButtonsComponent = (
    <div 
      ref={buttonRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="flex flex-col gap-4"
    >
      {/* WhatsApp Button and Label */}
      <div className="relative">
        <AnimatePresence>
          {(isHovering || isClientMobile) && (
            <motion.div 
              className={`absolute right-16 top-1 ${isDarkMode ? 'bg-[#128C7E] bg-opacity-90' : 'bg-[#25D366]'} text-white px-3 py-1 rounded-lg shadow-lg`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm whitespace-nowrap">Chat on WhatsApp</div>
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#25D366]"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse effect background */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-[#128C7E]' : 'bg-[#25D366]'} rounded-full pulse-effect opacity-70`}></div>
          
          <a 
            href="https://wa.me/919345111211" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`floating-button veltron-floating-button rounded-full ${isDarkMode ? 'bg-gradient-to-br from-[#128C7E]/90 to-[#075E54]/90' : 'bg-gradient-to-br from-[#25D366] to-[#128C7E]'} text-white flex items-center justify-center shadow-lg`}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>

      {/* Call Button and Label */}
      <div className="relative">
        <AnimatePresence>
          {(isHovering || isClientMobile) && (
            <motion.div 
              className={`absolute right-16 top-1 ${isDarkMode ? 'bg-primary/70' : 'bg-primary'} text-white px-3 py-1 rounded-lg shadow-lg`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm whitespace-nowrap">Call Us</div>
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-primary"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse effect background */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-primary/70' : 'bg-primary'} rounded-full pulse-effect opacity-70`}></div>
          
          <a 
            href="tel:+919345111211" 
            className={`floating-button veltron-floating-button rounded-full ${isDarkMode ? 'bg-gradient-to-br from-primary/80 to-primary/60' : 'bg-gradient-to-br from-primary to-primary/80'} text-white flex items-center justify-center shadow-lg`}
            aria-label="Call Us"
          >
            <Phone className="w-6 h-6" />
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );

  // Render the buttons through a portal to ensure they're always visible
  return createPortal(ButtonsComponent, portalContainer);
}
