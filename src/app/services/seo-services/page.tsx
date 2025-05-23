"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, BarChart2, Award, TrendingUp, Globe, Target, Users, LineChart, ArrowUp, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SEOServicesPage() {
  const strategiesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  // State for audit modal
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [auditFormData, setAuditFormData] = useState({
    name: "",
    email: "",
    website: "",
    goals: ""
  });
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  
  // State for keyword positions to prevent hydration errors
  const [keywordPositions, setKeywordPositions] = useState<Array<{top: string, left: string}>>([]);
  const keywords = ['SEO', 'keywords', 'ranking', 'optimization', 'traffic', 'conversion', 'analytics', 'backlinks', 'content', 'performance'];
  
  useEffect(() => {
    // Generate keyword positions on client-side only
    const positions = keywords.map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }));
    setKeywordPositions(positions);
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Enhanced parallax effects for hero section
    
    // Zoom effect for the background image
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
      opacity: 0.85, // Start at 0.7 (defined in JSX) and increase to 0.85
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

    // Animate the SEO ranking
    gsap.to(".ranking-animation", {
      y: -20, 
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    gsap.to(".pulse-circle", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      repeat: -1, 
      ease: "power1.out"
    });
    
    // Animate the strategy cards
    const strategyCards = gsap.utils.toArray('.strategy-card') as HTMLElement[];
    strategyCards.forEach((card, i) => {
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
    
    // Animate the process steps
    const processSteps = gsap.utils.toArray('.process-step') as HTMLElement[];
    processSteps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
          opacity: 1,
          x: 0,
          duration: 0.5,
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
    
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-60 transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl opacity-40"></div>
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl opacity-50"></div>
        
        {/* Search Keywords Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full flex flex-wrap">
              {keywordPositions.length > 0 && keywords.map((keyword, i) => (
                <div key={i} className="text-xs font-mono opacity-20" style={{ 
                  position: 'absolute', 
                  top: keywordPositions[i]?.top || '0%', 
                  left: keywordPositions[i]?.left || '0%' 
                }}>
                  {keyword}
                </div>
              ))}
            </div>
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
              src="/images/seo-services-hero.jpg" 
              alt="SEO Services Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-7xl sm:text-6xl font-bold mb-6 text-white">
                <span className="text-primary">SEO</span> Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Elevate your online presence with our comprehensive search engine optimization strategies that drive targeted traffic and increase your conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 bg-background rounded-lg shadow-lg p-8 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-lg"></div>
                <div className="relative z-20">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Search className="w-16 h-16 text-primary mb-4" />
                      <div className="pulse-circle absolute inset-0 rounded-full border-2 border-primary/50"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted/40 h-8 rounded-md px-3 py-2 flex items-center justify-between">
                      <span className="text-sm">Your Website</span>
                      <div className="ranking-animation flex items-center text-primary">
                        <span className="text-xs font-semibold mr-1">#1</span>
                        <ArrowUp className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="bg-muted/30 h-8 rounded-md px-3 py-2 flex items-center justify-between">
                      <span className="text-sm">Competitor A</span>
                      <span className="text-xs">#2</span>
                    </div>
                    <div className="bg-muted/20 h-8 rounded-md px-3 py-2 flex items-center justify-between">
                      <span className="text-sm">Competitor B</span>
                      <span className="text-xs">#3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategies Section */}
      <section ref={strategiesRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Strategies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive approaches to improve your search engine rankings and drive qualified traffic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <TrendingUp className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Keyword Research & Analysis</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Strategic identification of high-value keywords that your target audience is searching for, optimized for intent and conversion potential.
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
            
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Globe className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">On-Page Optimization</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Fine-tuning your website's content, meta tags, headings, and internal linking structure to improve search visibility and user experience.
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
            
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Target className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Technical SEO</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Enhancing your site's backend structure, improving site speed, mobile-friendliness, and solving crawlability issues for better indexing.
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
            
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <Users className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Link Building</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Obtaining high-quality backlinks from authoritative websites to boost your domain authority and organic ranking potential.
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
            
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <BarChart2 className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Content Strategy</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Creating valuable, relevant content that attracts your target audience and naturally earns links and social shares.
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
            
            <div className="strategy-card group relative bg-background/80 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
              <div className="absolute -inset-px bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <Card className="border-none shadow-xl backdrop-blur-sm h-full relative z-10 bg-transparent">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-primary mb-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/30 group-hover:scale-110 transition-all duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/5 blur-md group-hover:bg-primary/15 group-hover:blur-xl transition-all duration-500"></div>
                    <LineChart className="w-10 h-10 relative z-10 group-hover:text-primary transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">SEO Analytics & Reporting</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    Comprehensive tracking of rankings, traffic, and conversions with detailed reports to measure success and refine strategies.
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
      
      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A methodical approach to improving your search engine visibility and driving sustainable results
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="process-step grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
                    <span className="text-3xl font-bold">01</span>
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 transform -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-4">SEO Audit & Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  We begin with a comprehensive audit of your website, analyzing current performance, identifying strengths and weaknesses, and benchmarking against competitors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Technical site evaluation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Competitor analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Content assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Backlink profile review</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="process-step grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start md:order-last">
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
                    <span className="text-3xl font-bold">02</span>
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 transform -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-4">Strategy Development</h3>
                <p className="text-muted-foreground mb-4">
                  Based on our findings, we develop a customized SEO strategy that aligns with your business goals, target audience, and competitive landscape.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Keyword targeting plan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Content calendar creation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Technical optimization roadmap</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Link building strategy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="process-step grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
                    <span className="text-3xl font-bold">03</span>
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 transform -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-4">Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  We execute the strategy with precision, making on-page optimizations, creating content, fixing technical issues, and building quality backlinks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Technical fixes & enhancements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Content optimization & creation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Link acquisition campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Schema markup implementation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="process-step grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start md:order-last">
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
                    <span className="text-3xl font-bold">04</span>
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 transform -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-4">Monitoring & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  We continuously track performance, providing transparent reports on rankings, traffic, and conversions with insights and recommendations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Rank tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Traffic analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Conversion tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Regular performance reports</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="process-step grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10 text-primary relative z-10">
                    <span className="text-3xl font-bold">05</span>
                  </div>
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-primary/5 transform -translate-x-2 -translate-y-2"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-semibold mb-4">Refinement & Growth</h3>
                <p className="text-muted-foreground mb-4">
                  We continuously refine our strategies based on data insights, adapting to algorithm changes and evolving business needs to ensure sustainable growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Strategy adjustments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Competitive gap analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">New opportunity identification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <span className="text-sm">Growth-focused optimizations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results & Metrics Section */}
      <section ref={metricsRef} className="py-20 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Results That Speak Volumes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our SEO strategies consistently deliver impressive results for businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="82">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Average increase in organic traffic within 6 months</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="65">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Improvement in search engine ranking positions</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="124">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Average increase in conversions from organic traffic</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <BarChart2 className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-baseline mb-2">
                <span className="metric-counter text-4xl font-bold" data-target="98">0</span>
                <span className="text-2xl font-bold text-primary ml-1">%</span>
              </div>
              <p className="text-muted-foreground">Client retention rate due to consistent performance</p>
            </div>
          </div>
          
          <div className="mt-16 bg-background rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Industry-Leading Expertise</h3>
                <p className="text-muted-foreground mb-6">
                  Our team stays at the forefront of SEO trends and algorithm changes, ensuring your strategy is always current and effective. We combine technical expertise with creative content strategies to deliver sustainable, long-term results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Certified SEO professionals with years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Constant monitoring of algorithm updates and industry changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Tailored strategies for your specific industry and objectives</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* SEO result cards */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1 text-primary">60%</div>
                  <p className="text-sm">Lower cost-per-acquisition compared to paid search</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1 text-primary">5x</div>
                  <p className="text-sm">Higher ROI compared to traditional marketing</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1 text-primary">73%</div>
                  <p className="text-sm">Of purchase decisions begin with online search</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1 text-primary">3.5x</div>
                  <p className="text-sm">More traffic for sites in the top 3 positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Search className="w-[400px] h-[400px]" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Online Visibility?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Get a complimentary SEO audit and discover untapped opportunities to improve your search rankings and drive more qualified traffic to your website.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free SEO Audit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-muted/10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our SEO services and process
            </p>
          </div>
          
          <div className="grid gap-6">
            {[
              {
                q: "How long does SEO take to show results?",
                a: "SEO is a long-term strategy. While some improvements can be seen within a few weeks (like technical fixes), significant ranking and traffic improvements typically take 3-6 months. This timeline varies based on your website's current state, competition, and target keywords."
              },
              {
                q: "How do you measure SEO success?",
                a: "We track multiple metrics including keyword rankings, organic traffic growth, visibility in search results, click-through rates, bounce rates, time on site, and most importantly, conversions from organic traffic. We provide regular reports with these metrics and analysis."
              },
              {
                q: "Do you guarantee first-page rankings?",
                a: "No ethical SEO company can guarantee specific rankings as search algorithms consider hundreds of factors outside our control. However, we have a proven track record of significantly improving rankings and visibility for our clients through tested and ethical SEO practices."
              },
              {
                q: "What makes your SEO services different?",
                a: "Our approach combines technical expertise with creative content strategies. We focus on sustainable, white-hat techniques that build long-term value rather than quick fixes that might be penalized. We also emphasize transparent reporting and education so you understand exactly what we're doing and why."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Have more questions about our SEO services?</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Our SEO Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* SEO Audit Modal */}
      {showAuditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background rounded-lg shadow-lg w-full max-w-md p-6 relative border border-white/10">
            <button 
              onClick={() => setShowAuditModal(false)} 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            
            {!auditSubmitted ? (
              <>
                <h3 className="text-xl font-bold mb-4">Free SEO Audit</h3>
                <p className="text-muted-foreground mb-6">Fill out this form to get a complimentary SEO audit for your website. Our team will analyze your site and provide actionable recommendations.</p>
                
                <form className="space-y-4" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setAuditSubmitted(true);
                  // In a real application, you would send this data to your backend
                  console.log("Audit form submitted:", auditFormData);
                }}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={auditFormData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuditFormData({...auditFormData, name: e.target.value})}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={auditFormData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuditFormData({...auditFormData, email: e.target.value})}
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input 
                      id="website" 
                      value={auditFormData.website}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuditFormData({...auditFormData, website: e.target.value})}
                      placeholder="https://your-website.com" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="goals">Your SEO Goals</Label>
                    <Textarea 
                      id="goals" 
                      value={auditFormData.goals}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAuditFormData({...auditFormData, goals: e.target.value})}
                      placeholder="What are you looking to achieve with SEO?" 
                      rows={3} 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Submit Request</Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">We've received your request for an SEO audit. One of our specialists will analyze your website and contact you within 2 business days with the results.</p>
                <Button onClick={() => {
                  setShowAuditModal(false);
                  setAuditSubmitted(false);
                  setAuditFormData({
                    name: "",
                    email: "",
                    website: "",
                    goals: ""
                  });
                }}>Close</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
