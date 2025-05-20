"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  BarChart3, 
  Mail, 
  Share2, 
  Search, 
  Megaphone, 
  MessageSquare, 
  Target, 
  TrendingUp, 
  DollarSign 
} from "lucide-react";

export default function DigitalMarketingPage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for hero image
    gsap.to(".hero-image", {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Parallax effect for the hero content - subtle upward movement
    gsap.to(".header-content", {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Subtle opacity change for the overlay to create depth
    gsap.to(".hero-overlay", {
      opacity: 0.85,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    // Animate the header elements
    gsap.fromTo(
      ".header-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the marketing channels
    const channelIcons = gsap.utils.toArray('.channel-icon') as HTMLElement[];
    channelIcons.forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
          },
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.05,
          ease: "back.out(1.7)"
        }
      );
    });
    
    // Animate the service cards
    const serviceCards = gsap.utils.toArray('.service-card') as HTMLElement[];
    serviceCards.forEach((card, i) => {
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
    
    // Animate the metric counters
    const metricCounters = gsap.utils.toArray('.metric-counter') as HTMLElement[];
    metricCounters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      
      gsap.fromTo(
        counter,
        { innerText: "0" },
        {
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out"
        }
      );
    });
    
    // Pulse animation for marketing elements
    gsap.to(".pulse-element", {
      scale: 1.1,
      duration: 1.5,
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
        
        {/* Marketing symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap">
            {[
              '#', '@', '<>', '{}', '[]', '+', '%', '$', '&', '|', '/'
            ].map((symbol, i) => (
              <div key={i} className="text-4xl font-mono opacity-20" style={{ position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}>
                {symbol}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative pt-32 pb-20">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10 hero-overlay"></div> {/* Dark overlay with parallax effect */}
          <div className="absolute inset-0 hero-image">
            <img 
              src="/images/digital-marketing-hero.jpg" 
              alt="Digital Marketing Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-white">
                Digital <span className="text-primary">Marketing</span> Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Strategic digital marketing solutions that drive brand awareness, engage your audience, and convert prospects into loyal customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white" asChild>
                  <Link href="/about">Our Approach</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 bg-background rounded-lg shadow-lg p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-lg"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="channel-icon flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Search className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">SEO</span>
                    </div>
                    <div className="channel-icon flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">Social</span>
                    </div>
                    <div className="channel-icon flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">Email</span>
                    </div>
                    <div className="channel-icon flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Megaphone className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">Ads</span>
                    </div>
                    <div className="channel-icon flex flex-col items-center pulse-element">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Target className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">Strategy</span>
                    </div>
                    <div className="channel-icon flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <span className="text-xs mt-2">Content</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to enhance your online presence and drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Search className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Search Engine Marketing</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Increase your visibility in search engine results with strategic SEO and paid search campaigns that drive targeted traffic to your website.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Share2 className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Social Media Marketing</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Build brand awareness and engage with your audience through strategic social media campaigns across all major platforms.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Mail className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Email Marketing</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Connect directly with your prospects and customers through personalized, targeted email campaigns that drive conversions.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Megaphone className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Pay-Per-Click Advertising</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Maximize your ROI with carefully managed PPC campaigns across search and display networks to reach your ideal customers.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <MessageSquare className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Content Marketing</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Attract and engage your target audience with valuable, relevant content that establishes your brand as an industry authority.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="service-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <BarChart3 className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Analytics & Reporting</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Gain valuable insights with comprehensive tracking and reporting to measure the effectiveness of your marketing campaigns.
                  </p>
                  
                  {/* Decorative dot patterns */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Digital Marketing Services?</h2>
              <p className="text-muted-foreground mb-8">
                Our data-driven approach ensures your marketing budget is invested in strategies that deliver measurable results and maximize your ROI.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Targeted Approach</h3>
                    <p className="text-muted-foreground">
                      We focus on reaching your ideal customers with personalized messaging that resonates with their needs and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                    <p className="text-muted-foreground">
                      Our strategies maximize your marketing budget, focusing on channels and tactics that deliver the highest return on investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Measurable Results</h3>
                    <p className="text-muted-foreground">
                      We provide detailed analytics and regular reports that demonstrate the impact of your marketing campaigns on business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg blur-lg opacity-50"></div>
              <div className="relative bg-background rounded-lg shadow-lg p-6 border border-primary/10">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Growth Framework</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                      <span className="font-bold">1</span>
                    </div>
                    <h4 className="text-lg font-medium text-center mb-2">Research</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Market analysis and competitor research to establish a strategic baseline
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                      <span className="font-bold">2</span>
                    </div>
                    <h4 className="text-lg font-medium text-center mb-2">Strategy</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Custom marketing plan aligned with your business goals and target audience
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                      <span className="font-bold">3</span>
                    </div>
                    <h4 className="text-lg font-medium text-center mb-2">Implementation</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Execution of campaigns across selected channels with creative excellence
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3 mx-auto">
                      <span className="font-bold">4</span>
                    </div>
                    <h4 className="text-lg font-medium text-center mb-2">Optimization</h4>
                    <p className="text-sm text-muted-foreground text-center">
                      Continuous monitoring and refinement based on performance analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section ref={metricsRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Driving Measurable Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our digital marketing strategies consistently deliver impressive results for businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="197">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Average increase in organic traffic</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Target className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="145">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Improvement in conversion rates</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="42">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Reduction in customer acquisition cost</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="323">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Average ROI on marketing spend</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Share2 className="w-[400px] h-[400px]" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's create a customized digital marketing strategy that aligns with your business goals and drives sustainable growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Consultation</Link>
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
