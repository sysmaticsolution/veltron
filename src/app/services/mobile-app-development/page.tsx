"use client";

import { useEffect, useRef, Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { 
  Smartphone, 
  Store, 
  Github, 
  Layers, 
  Zap, 
  Shield, 
  Repeat, 
  PanelLeft, 
  BadgeCheck, 
  Gauge,
  AppWindow,
  Code,
  Settings
} from "lucide-react";

// Dynamically import the 3D phone mockup component with no SSR
const PhoneMockup = dynamic(() => import("@/components/3d/PhoneMockup"), {
  ssr: false,
  loading: () => (
    <div className="w-60 h-[500px] mx-auto flex items-center justify-center">
      <div className="animate-pulse bg-muted/20 rounded-3xl w-48 h-96"></div>
    </div>
  )
});

export default function MobileAppDevelopmentPage() {
  const platformsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for hero image
    gsap.to(".hero-image", {
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Enhanced parallax effect for the hero content
    gsap.to(".header-content", {
      y: -50,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Subtle opacity change for the overlay for better depth perception
    gsap.to(".hero-overlay", {
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Enhanced header elements animation
    gsap.fromTo(
      ".header-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    gsap.fromTo(
      ".header-description",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
    
    gsap.fromTo(
      ".header-buttons",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
    );
    
    // Phone mockup animations
    gsap.fromTo(
      ".phone-mockup",
      { opacity: 0, scale: 0.8, y: 40 },
      { 
        opacity: 1, 
        scale: 1,
        y: 0, 
        duration: 1.2, 
        ease: "back.out(1.7)", 
        delay: 0.3 
      }
    );
    
    // Subtle floating animation for the phone
    gsap.to(
      ".phone-device",
      {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );
    
    // Animated elements inside the phone
    gsap.fromTo(
      ".app-icon",
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        delay: 1,
        ease: "back.out(1.7)" 
      }
    );
    
    // Shine effect on the phone
    gsap.fromTo(
      ".phone-shine",
      { x: -250, opacity: 0 },
      { 
        x: 250, 
        opacity: 0.3, 
        duration: 1.5, 
        delay: 1.5,
        repeat: -1,
        repeatDelay: 5,
        ease: "power2.inOut" 
      }
    );
    
    // Float element animation
    gsap.to(
      ".float-element",
      {
        y: -10,
        x: 5,
        rotation: 3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );
    
    // Animate floating particles
    gsap.fromTo(
      ".floating-particle",
      { y: 0 },
      { 
        y: -20, 
        duration: 2, 
        ease: "sine.inOut", 
        yoyo: true,
        repeat: -1,
        stagger: 0.1
      }
    );
    
    // Animate the platform badges
    const platformBadges = gsap.utils.toArray('.platform-badge') as HTMLElement[];
    platformBadges.forEach((badge, i) => {
      gsap.fromTo(
        badge,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: badge,
            start: "top 85%",
          },
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.1,
          ease: "back.out(1.7)"
        }
      );
    });
    
    // Animate the feature cards
    const featureCards = gsap.utils.toArray('.feature-card') as HTMLElement[];
    featureCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1
        }
      );
    });
    
    // Animate process steps
    const processSteps = gsap.utils.toArray('.process-step') as HTMLElement[];
    processSteps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2
        }
      );
    });
    
    // Floating animation for elements
    gsap.to(".float-element", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-60 transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl opacity-40"></div>
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl opacity-50"></div>
        
        {/* Mobile app symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap">
            {[
              '{}', '<>', '[]', '()', '//', 'app', '||', '&&', '=>', '+=', '.apk'
            ].map((symbol, i) => (
              <div key={i} className="text-xl font-mono opacity-20" style={{ position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}>
                {symbol}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center pt-24 pb-20">
        {/* Hero Background with improved overlay and effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-primary/10 z-10 hero-overlay"></div>
          <div className="absolute inset-0 hero-image">
            <img 
              src="/images/mobile-app-hero.jpg" 
              alt="Mobile App Development Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Light orbs and glowing effects */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl animate-float-slow"></div>

          {/* Floating tech particles */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute floating-particle text-primary/30"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + (Math.random() * 0.5)
              }}
            >
              <div className="transform rotate-12">
                {[<Code />, <Smartphone />, <Settings />][Math.floor(Math.random() * 3)]}
              </div>
            </div>
          ))}
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-2 inline-block">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">App Development</span>
              </div>
              <h1 className="header-title text-7xl sm:text-6xl font-bold mb-6 text-white leading-tight">
                Transform Ideas Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Powerful Apps</span>
              </h1>
              <p className="header-description text-xl text-white/90 mb-8">
                Build engaging, high-performance mobile applications that drive user engagement and business growth across iOS and Android platforms.
              </p>
              <div className="header-buttons flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10" asChild>
                  <Link href="/about">View Portfolio</Link>
                </Button>
              </div>
            </div>
            
            <div className="phone-mockup relative flex items-center justify-center">
              {/* Modern Phone Mockup */}
              <div className="relative w-72 h-[540px] mx-auto phone-device">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-[40px] blur-xl"></div>
                <div className="relative w-full h-full bg-black border-[6px] border-gray-800 rounded-[40px] shadow-2xl overflow-hidden">
                  {/* Phone shine effect */}
                  <div className="phone-shine absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"></div>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
                  
                  {/* Phone screen with animated content */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* App screen 1 */}
                    <div className="bg-gradient-to-b from-blue-600 to-indigo-900 h-full w-full p-4 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center text-xs text-primary font-bold">V</div>
                          <span className="text-base font-bold ml-2">Veltron</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-4 w-4 rounded-full bg-white/20"></div>
                          <div className="h-4 w-4 rounded-full bg-white/20"></div>
                        </div>
                      </div>
                      
                      {/* Hero banner */}
                      <div className="h-32 w-full rounded-xl bg-gradient-to-r from-[#4263EB] to-[#6B24C9] mb-4 flex items-center justify-center relative float-element overflow-hidden glow-effect shadow-lg shadow-primary/20">
                        <span className="text-base font-bold z-10">Mobile App Solutions</span>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/5"></div>
                      </div>
                      
                      {/* App features */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="app-card h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-primary/20 hover:to-blue-600/20 p-3 flex flex-col relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer overflow-hidden group">
                          <div className="card-glow absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                          <div className="w-8 h-8 rounded-lg bg-primary/30 mb-2 flex items-center justify-center app-icon relative z-10 group-hover:bg-primary/50 transition-all duration-300">
                            <Smartphone className="w-5 h-5 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                          </div>
                          <span className="text-xs font-medium relative z-10 group-hover:text-white transition-colors duration-300">iOS Development</span>
                        </div>
                        <div className="app-card h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-primary/20 hover:to-blue-600/20 p-3 flex flex-col relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer overflow-hidden group">
                          <div className="card-glow absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                          <div className="w-8 h-8 rounded-lg bg-primary/30 mb-2 flex items-center justify-center app-icon relative z-10 group-hover:bg-primary/50 transition-all duration-300">
                            <Github className="w-5 h-5 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                          </div>
                          <span className="text-xs font-medium relative z-10 group-hover:text-white transition-colors duration-300">Android Apps</span>
                        </div>
                        <div className="app-card h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-primary/20 hover:to-blue-600/20 p-3 flex flex-col relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer overflow-hidden group">
                          <div className="card-glow absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                          <div className="w-8 h-8 rounded-lg bg-primary/30 mb-2 flex items-center justify-center app-icon relative z-10 group-hover:bg-primary/50 transition-all duration-300">
                            <Zap className="w-5 h-5 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                          </div>
                          <span className="text-xs font-medium relative z-10 group-hover:text-white transition-colors duration-300">React Native</span>
                        </div>
                        <div className="app-card h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-primary/20 hover:to-blue-600/20 p-3 flex flex-col relative transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 cursor-pointer overflow-hidden group">
                          <div className="card-glow absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                          <div className="w-8 h-8 rounded-lg bg-primary/30 mb-2 flex items-center justify-center app-icon relative z-10 group-hover:bg-primary/50 transition-all duration-300">
                            <Repeat className="w-5 h-5 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                          </div>
                          <span className="text-xs font-medium relative z-10 group-hover:text-white transition-colors duration-300">Flutter Apps</span>
                        </div>
                      </div>
                      
                      {/* Bottom button */}
                      <div className="absolute bottom-6 left-4 right-4">
                        <div className="h-12 w-full bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center relative shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 overflow-hidden group">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                          <span className="text-sm font-bold">Get Started</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home button */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Phone shadow */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black/20 blur-xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Section */}
      <section ref={platformsRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cross-Platform Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We develop high-performance mobile apps across all major platforms, ensuring your solution reaches the widest possible audience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="platform-badge group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-primary/40 shadow-xl hover:shadow-primary/20 transition-all duration-500 text-center overflow-hidden transform hover:-translate-y-2 hover:scale-105">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              
              {/* Icon container with enhanced effects */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                <Store className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">iOS Development</h3>
              <p className="relative z-10 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Native iOS apps built with Swift for optimal performance and a seamless user experience.
              </p>
              
              {/* Decorative dot patterns */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="platform-badge group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-primary/40 shadow-xl hover:shadow-primary/20 transition-all duration-500 text-center overflow-hidden transform hover:-translate-y-2 hover:scale-105">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              
              {/* Icon container with enhanced effects */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                <Github className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Android Development</h3>
              <p className="relative z-10 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Kotlin-based Android applications that deliver high performance across the diverse Android ecosystem.
              </p>
              
              {/* Decorative dot patterns */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="platform-badge group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-primary/40 shadow-xl hover:shadow-primary/20 transition-all duration-500 text-center overflow-hidden transform hover:-translate-y-2 hover:scale-105">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              
              {/* Icon container with enhanced effects */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                <Repeat className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">React Native</h3>
              <p className="relative z-10 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Cross-platform solutions that deliver native-like experiences with faster development cycles.
              </p>
              
              {/* Decorative dot patterns */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="platform-badge group relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-primary/40 shadow-xl hover:shadow-primary/20 transition-all duration-500 text-center overflow-hidden transform hover:-translate-y-2 hover:scale-105">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              
              {/* Icon container with enhanced effects */}
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                <Zap className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Flutter</h3>
              <p className="relative z-10 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                Fast, beautiful UIs with Flutter's reactive framework for consistent cross-platform applications.
              </p>
              
              {/* Decorative dot patterns */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">App Features That Engage Users</h2>
              <p className="text-muted-foreground mb-8">
                Our mobile applications are built with advanced features that deliver exceptional user experiences and drive engagement.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                    <p className="text-muted-foreground">
                      Fast-loading, responsive applications optimized for performance across a range of devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                    <p className="text-muted-foreground">
                      Enterprise-grade security with data encryption, secure authentication, and reliable offline functionality.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <PanelLeft className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intuitive UX/UI</h3>
                    <p className="text-muted-foreground">
                      User-centric design with intuitive navigation and visually appealing interfaces that drive engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">API Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with third-party APIs and your existing business systems
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <AppWindow className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for various screen sizes and device orientations
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <BadgeCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Engage users with timely, personalized push notifications
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Native Device Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to camera, biometrics, GPS, and other device capabilities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section ref={processRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our App Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured, collaborative approach that ensures your app is delivered on time, within budget, and to your specifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="process-step bg-background rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
              <p className="text-muted-foreground mb-4">
                We identify your business goals, target audience, and app requirements to create a comprehensive development roadmap.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Market & competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>User personas & journey mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Feature prioritization</span>
                </li>
              </ul>
            </div>
            
            <div className="process-step bg-background rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
              <p className="text-muted-foreground mb-4">
                Our designers and developers work collaboratively to create an engaging user interface and robust backend functionality.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Wireframing & prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>UI/UX design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Agile development sprints</span>
                </li>
              </ul>
            </div>
            
            <div className="process-step bg-background rounded-lg p-6 shadow-md border-t-4 border-primary">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing & Launch</h3>
              <p className="text-muted-foreground mb-4">
                Rigorous testing ensures your app is bug-free, followed by a strategic launch and ongoing support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Quality assurance testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>User acceptance testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>App store optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-primary">•</span>
                  <span>Post-launch support & updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Smartphone className="w-[400px] h-[400px]" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how we can transform your idea into a powerful mobile application that engages users and drives business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
