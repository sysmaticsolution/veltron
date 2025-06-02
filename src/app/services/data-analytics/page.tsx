"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DataAnalyticsPage() {
  const chartRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const yearSelectRef = useRef<HTMLSelectElement>(null);
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const [chartData, setChartData] = useState({
    kpi: [
      { 
        year: 2023, 
        revenueGrowth: '+22%', 
        revenueChange: '+3.8% from LY',
        newCustomers: '980', 
        customerChange: '+8% this quarter',
        efficiencyRate: '94.2%', 
        efficiencyChange: '+1.5% from target',
        salesTarget: '75%', 
        salesStatus: 'Below target for Q4'
      },
      { 
        year: 2024, 
        revenueGrowth: '+25%', 
        revenueChange: '+4.5% from LY',
        newCustomers: '1,120', 
        customerChange: '+10% this quarter',
        efficiencyRate: '96.3%', 
        efficiencyChange: '+1.8% from target',
        salesTarget: '78%', 
        salesStatus: 'On track for Q4'
      },
      { 
        year: 2025, 
        revenueGrowth: '+28%', 
        revenueChange: '+5.2% from LY',
        newCustomers: '1,245', 
        customerChange: '+12% this quarter',
        efficiencyRate: '97.5%', 
        efficiencyChange: '+2.3% from target',
        salesTarget: '82%', 
        salesStatus: 'On track for Q4'
      }
    ],
    quarterly: [
      { year: 2023, values: [55, 60, 75, 65], labels: ['55%', '60%', '75%', '65%'] },
      { year: 2024, values: [65, 45, 80, 90], labels: ['65%', '45%', '80%', '90%'] },
      { year: 2025, values: [70, 45, 85, 95], labels: ['70%', '45%', '85%', '95%'] }
    ],
    monthly: [
      { year: 2023, path: "M0,85 C20,80 40,75 60,80 C80,85 100,75 120,65 C140,55 160,50 180,40 C200,30 220,25 240,20", points: [{x:0,y:85}, {x:40,y:75}, {x:80,y:85}, {x:120,y:65}, {x:160,y:50}, {x:200,y:30}] },
      { year: 2024, path: "M0,90 C20,85 40,80 60,70 C80,60 100,55 120,50 C140,45 160,40 180,25 C200,15 220,10 240,15", points: [{x:0,y:90}, {x:40,y:80}, {x:80,y:60}, {x:120,y:50}, {x:160,y:40}, {x:200,y:15}] },
      { year: 2025, path: "M0,80 C20,70 40,90 60,75 C80,60 100,65 120,45 C140,25 160,30 180,15 C200,5 220,10 240,5", points: [{x:0,y:80}, {x:40,y:90}, {x:80,y:60}, {x:120,y:45}, {x:160,y:30}, {x:200,y:5}] }
    ]
  });
  
  // Effect for auto-cycling through years
  useEffect(() => {
    const yearInterval = setInterval(() => {
      setCurrentYear(prevYear => {
        // Cycle through years: 2025 -> 2024 -> 2023 -> 2025
        if (prevYear === 2025) return 2024;
        if (prevYear === 2024) return 2023;
        return 2025;
      });
    }, 2000); // 2-second delay between years
    
    return () => clearInterval(yearInterval);
  }, []);
  
  // Update the year select dropdown when currentYear changes
  useEffect(() => {
    if (yearSelectRef.current) {
      yearSelectRef.current.value = currentYear.toString();
      
      // Get current data for all visualizations
      const currentKpiData = chartData.kpi.find(d => d.year === currentYear);
      const currentQuarterlyData = chartData.quarterly.find(d => d.year === currentYear);
      const currentMonthlyData = chartData.monthly.find(d => d.year === currentYear);
      
      // Animate KPI card numbers
      if (currentKpiData) {
        // Revenue Growth KPI
        const revenueGrowthEl = document.querySelector('.kpi-revenue-growth');
        const revenueChangeEl = document.querySelector('.kpi-revenue-change');
        if (revenueGrowthEl) {
          gsap.to(revenueGrowthEl, {
            innerText: currentKpiData.revenueGrowth,
            duration: 0.8,
            snap: { innerText: 1 },
            ease: "power2.out"
          });
        }
        if (revenueChangeEl) {
          gsap.to(revenueChangeEl, {
            innerText: currentKpiData.revenueChange,
            duration: 0.8,
            ease: "power2.out"
          });
        }
        
        // New Customers KPI
        const customersEl = document.querySelector('.kpi-customers');
        const customersChangeEl = document.querySelector('.kpi-customers-change');
        if (customersEl) {
          gsap.to(customersEl, {
            innerText: currentKpiData.newCustomers,
            duration: 0.8,
            snap: { innerText: 1 },
            ease: "power2.out"
          });
        }
        if (customersChangeEl) {
          gsap.to(customersChangeEl, {
            innerText: currentKpiData.customerChange,
            duration: 0.8,
            ease: "power2.out"
          });
        }
        
        // Efficiency Rate KPI
        const efficiencyEl = document.querySelector('.kpi-efficiency');
        const efficiencyChangeEl = document.querySelector('.kpi-efficiency-change');
        if (efficiencyEl) {
          gsap.to(efficiencyEl, {
            innerText: currentKpiData.efficiencyRate,
            duration: 0.8,
            snap: { innerText: 1 },
            ease: "power2.out"
          });
        }
        if (efficiencyChangeEl) {
          gsap.to(efficiencyChangeEl, {
            innerText: currentKpiData.efficiencyChange,
            duration: 0.8,
            ease: "power2.out"
          });
        }
        
        // Sales Target KPI
        const salesEl = document.querySelector('.kpi-sales');
        const salesStatusEl = document.querySelector('.kpi-sales-status');
        if (salesEl) {
          gsap.to(salesEl, {
            innerText: currentKpiData.salesTarget,
            duration: 0.8,
            snap: { innerText: 1 },
            ease: "power2.out"
          });
        }
        if (salesStatusEl) {
          gsap.to(salesStatusEl, {
            innerText: currentKpiData.salesStatus,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      }
      
      // Animate the chart bars changing
      const chartBars = document.querySelectorAll('.chart-bar-animated');
      if (currentQuarterlyData) {
        chartBars.forEach((bar, index) => {
          gsap.to(bar, {
            height: `${currentQuarterlyData.values[index]}%`,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
          });
          
          // Update the percentage text
          const percentText = bar.querySelector('div');
          if (percentText) {
            percentText.textContent = currentQuarterlyData.labels[index];
          }
        });
      }
      
      // Animate the trend line changing
      const trendLine = document.querySelector('.trend-line');
      const dataPoints = document.querySelectorAll('.data-point');
      if (trendLine && currentMonthlyData) {
        gsap.to(trendLine, {
          attr: { d: currentMonthlyData.path },
          duration: 0.8,
          ease: "power2.inOut"
        });
        
        dataPoints.forEach((point, index) => {
          if (currentMonthlyData.points[index]) {
            gsap.to(point, {
              attr: { 
                cx: currentMonthlyData.points[index].x,
                cy: currentMonthlyData.points[index].y 
              },
              duration: 0.8,
              ease: "power2.inOut"
            });
          }
        });
      }
    }
  }, [currentYear, chartData]);
  
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the header section
    gsap.fromTo(
      ".header-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    
    // Hero image parallax zoom effect
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
    
    // Initial animation for chart bars on scroll
    const bars = gsap.utils.toArray('.chart-bar') as HTMLElement[];
    bars.forEach((bar, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 70%",
        }
      });
      
      tl.fromTo(
        bar,
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 0.8, 
          delay: i * 0.1, 
          ease: "elastic.out(1, 0.5)"
        }
      );
    });
    
    // Animate the process steps
    const steps = gsap.utils.toArray('.process-step') as HTMLElement[];
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: i * 0.2
        }
      );
    });
    
    // Animate the benefits cards
    const cards = gsap.utils.toArray('.benefit-card') as HTMLElement[];
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1
        }
      );
    });
    
  }, []);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <div 
            className="hero-image absolute inset-0 bg-cover bg-center opacity-30 scale-100" 
            style={{ backgroundImage: 'url("/images/data-analytics-hero.jpg")' }}
          ></div>
        </div>
        {/* Overlay effects */}
        <div className="absolute inset-0 overflow-hidden z-1">
          <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl opacity-30"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl opacity-20"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-white">
                Data Analytics Solutions
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                Transform your raw data into actionable insights with our advanced analytics solutions that drive business growth and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="p-6 pt-4 bg-zinc-900/90 rounded-xl shadow-xl border border-zinc-800 relative overflow-hidden transition-all duration-300 hover:shadow-primary/20">
              {/* Dashboard Header with Controls - Power BI Style */}
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="text-white font-bold text-sm ml-2">Performance Dashboard</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-zinc-400 hover:text-white transition-colors p-1 rounded hover:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/><rect x="2" y="8" width="20" height="8" rx="1"/></svg>
                  </button>
                  <button className="text-zinc-400 hover:text-white transition-colors p-1 rounded hover:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /></svg>
                  </button>
                  <button className="text-zinc-400 hover:text-white transition-colors p-1 rounded hover:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  </button>
                </div>
              </div>

              {/* Dashboard Container - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4" ref={chartRef}>
                {/* KPI Cards Row - Animated on load */}
                <div className="dashboard-card col-span-2 grid grid-cols-4 gap-2">
                  <div className="bg-blue-600/20 p-3 rounded-lg border border-blue-600/40 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="text-xs text-blue-300 mb-1 font-medium">Revenue Growth</div>
                    <div className="text-xl font-bold text-white kpi-revenue-growth">+28%</div>
                    <div className="text-xs text-blue-300 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      <span className="kpi-revenue-change">+5.2% from last year</span>
                    </div>
                  </div>
                  <div className="bg-purple-600/20 p-3 rounded-lg border border-purple-600/40 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn" style={{animationDelay: '0.2s'}}>
                    <div className="text-xs text-purple-300 mb-1 font-medium">New Customers</div>
                    <div className="text-xl font-bold text-white kpi-customers">1,245</div>
                    <div className="text-xs text-purple-300 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      <span className="kpi-customers-change">+12% this quarter</span>
                    </div>
                  </div>
                  <div className="bg-teal-600/20 p-3 rounded-lg border border-teal-600/40 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn" style={{animationDelay: '0.3s'}}>
                    <div className="text-xs text-teal-300 mb-1 font-medium">Efficiency Rate</div>
                    <div className="text-xl font-bold text-white kpi-efficiency">97.5%</div>
                    <div className="text-xs text-teal-300 flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      <span className="kpi-efficiency-change">+2.3% from target</span>
                    </div>
                  </div>
                  <div className="bg-primary/20 p-3 rounded-lg border border-primary/40 transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn" style={{animationDelay: '0.4s'}}>
                    <div className="text-xs text-primary-foreground mb-1 font-medium">Sales Target</div>
                    <div className="text-xl font-bold text-white kpi-sales">82%</div>
                    <div className="text-xs text-primary-foreground flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      <span className="kpi-sales-status">On track for Q4</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart - Quarterly Performance */}
                <div className="dashboard-card bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:border-zinc-600">
                  <div className="text-xs text-zinc-400 mb-2 font-medium">Quarterly Growth (%)</div>
                  <div className="h-[140px] flex items-end justify-around gap-2 relative">
                    {/* Animation is applied in CSS */}
                    <div className="chart-bar-animated w-5 bg-blue-600 rounded-t-sm" style={{height: '70%', animationDelay: '0.1s'}}>
                      <div className="absolute -top-5 text-[10px] text-zinc-300 left-1/2 -translate-x-1/2">70%</div>
                    </div>
                    <div className="chart-bar-animated w-5 bg-purple-600 rounded-t-sm" style={{height: '45%', animationDelay: '0.2s'}}>
                      <div className="absolute -top-5 text-[10px] text-zinc-300 left-1/2 -translate-x-1/2">45%</div>
                    </div>
                    <div className="chart-bar-animated w-5 bg-teal-500 rounded-t-sm" style={{height: '85%', animationDelay: '0.3s'}}>
                      <div className="absolute -top-5 text-[10px] text-zinc-300 left-1/2 -translate-x-1/2">85%</div>
                    </div>
                    <div className="chart-bar-animated w-5 bg-primary rounded-t-sm" style={{height: '95%', animationDelay: '0.4s'}}>
                      <div className="absolute -top-5 text-[10px] text-zinc-300 left-1/2 -translate-x-1/2">95%</div>
                    </div>
                    {/* Grid lines */}
                    <div className="absolute w-full h-px bg-zinc-700/30 top-0"></div>
                    <div className="absolute w-full h-px bg-zinc-700/30 top-1/4"></div>
                    <div className="absolute w-full h-px bg-zinc-700/30 top-1/2"></div>
                    <div className="absolute w-full h-px bg-zinc-700/30 top-3/4"></div>
                  </div>
                  <div className="flex justify-around mt-2">
                    <span className="text-[10px] text-zinc-400">Q1</span>
                    <span className="text-[10px] text-zinc-400">Q2</span>
                    <span className="text-[10px] text-zinc-400">Q3</span>
                    <span className="text-[10px] text-zinc-400">Q4</span>
                  </div>
                </div>

                {/* Line Chart - Trend Analysis */}
                <div className="dashboard-card bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:border-zinc-600">
                  <div className="text-xs text-zinc-400 mb-2 font-medium">Monthly Trend Analysis</div>
                  <div className="h-[140px] relative flex items-center justify-center">
                    {/* SVG Line Chart */}
                    <svg width="100%" height="100%" viewBox="0 0 200 100" className="trend-line-chart">
                      {/* Grid Lines */}
                      <line x1="0" y1="0" x2="200" y2="0" stroke="rgba(113, 113, 122, 0.3)" />
                      <line x1="0" y1="25" x2="200" y2="25" stroke="rgba(113, 113, 122, 0.3)" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(113, 113, 122, 0.3)" />
                      <line x1="0" y1="75" x2="200" y2="75" stroke="rgba(113, 113, 122, 0.3)" />
                      <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(113, 113, 122, 0.3)" />
                      
                      {/* Line Path - animated with stroke-dasharray/stroke-dashoffset */}
                      <path className="trend-line" d="M0,80 C20,70 40,90 60,75 C80,60 100,65 120,45 C140,25 160,30 180,15 C200,5 220,10 240,5" fill="none" stroke="rgba(99, 102, 241, 0.8)" strokeWidth="3" />
                      
                      {/* Data Points */}
                      <circle className="data-point" cx="0" cy="80" r="4" fill="#818cf8" />
                      <circle className="data-point" cx="40" cy="90" r="4" fill="#818cf8" />
                      <circle className="data-point" cx="80" cy="60" r="4" fill="#818cf8" />
                      <circle className="data-point" cx="120" cy="45" r="4" fill="#818cf8" />
                      <circle className="data-point" cx="160" cy="30" r="4" fill="#818cf8" />
                      <circle className="data-point" cx="200" cy="5" r="4" fill="#818cf8" />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2 px-1">
                    <span className="text-[10px] text-zinc-400">Jan</span>
                    <span className="text-[10px] text-zinc-400">Mar</span>
                    <span className="text-[10px] text-zinc-400">May</span>
                    <span className="text-[10px] text-zinc-400">Jul</span>
                    <span className="text-[10px] text-zinc-400">Sep</span>
                    <span className="text-[10px] text-zinc-400">Nov</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Footer - Filter Controls */}
              <div className="flex items-center justify-between bg-zinc-800/50 p-2 rounded-md border border-zinc-700/30 text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <span className="mr-2">Year:</span>
                    <select 
                      ref={yearSelectRef}
                      className="bg-zinc-900 border border-zinc-700 rounded px-1 py-0.5 text-xs text-white"
                      value={currentYear.toString()}
                      onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                    >
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">Region:</span>
                    <select className="bg-zinc-900 border border-zinc-700 rounded px-1 py-0.5 text-xs text-white">
                      <option>All Regions</option>
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia Pacific</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Last updated: Live</span>
                </div>
              </div>

              {/* Add CSS for animations */}
              <style jsx>{`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes growUp {
                  from { transform: scaleY(0); }
                  to { transform: scaleY(1); }
                }
                
                @keyframes drawLine {
                  to { stroke-dashoffset: 0; }
                }
                
                @keyframes pulsePoint {
                  0% { r: 4; opacity: 1; }
                  50% { r: 6; opacity: 0.8; }
                  100% { r: 4; opacity: 1; }
                }
                
                .animate-fadeIn {
                  opacity: 0;
                  animation: fadeIn 0.5s forwards;
                }
                
                .chart-bar-animated {
                  transform-origin: bottom;
                  animation: growUp 1s forwards;
                }
                
                .trend-line {
                  stroke-dasharray: 500;
                  stroke-dashoffset: 500;
                  animation: drawLine 2s forwards;
                }
                
                .data-point {
                  animation: pulsePoint 2s infinite;
                }
                
                .dashboard-card {
                  transition: all 0.3s ease;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Dark Theme */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-700/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-700/5 blur-3xl"></div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Analytics Solutions</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our data analytics services help businesses make data-driven decisions with confidence.
            </p>
          </div>
          
          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card with parallax effect */}
            <div className="process-step relative p-6 bg-zinc-800/80 rounded-xl shadow-xl border border-zinc-700/50 overflow-hidden group parallax-card">
              {/* Card content that moves on hover */}
              <div className="card-content relative z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:translate-x-[-5px]">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white mb-4 shadow-lg transition-transform duration-500 ease-out group-hover:translate-y-[-8px] group-hover:translate-x-[-3px] group-hover:shadow-blue-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">Business Intelligence</h3>
                <p className="text-zinc-400 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                  Convert complex data into intuitive dashboards and reports that provide real-time insights into your business performance.
                </p>
              </div>
              
              {/* Parallax background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
            
            <div className="process-step relative p-6 bg-zinc-800/80 rounded-xl shadow-xl border border-zinc-700/50 overflow-hidden group parallax-card">
              {/* Card content that moves on hover */}
              <div className="card-content relative z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:translate-x-[-5px]">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 text-white mb-4 shadow-lg transition-transform duration-500 ease-out group-hover:translate-y-[-8px] group-hover:translate-x-[-3px] group-hover:shadow-purple-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 19 21 12 17 5 21 12 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">Predictive Analytics</h3>
                <p className="text-zinc-400 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                  Leverage advanced algorithms and machine learning to forecast trends, identify opportunities, and mitigate risks.
                </p>
              </div>
              
              {/* Parallax background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/5 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-600/10 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
            
            <div className="process-step relative p-6 bg-zinc-800/80 rounded-xl shadow-xl border border-zinc-700/50 overflow-hidden group parallax-card">
              {/* Card content that moves on hover */}
              <div className="card-content relative z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-5px] group-hover:translate-x-[-5px]">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-600 text-white mb-4 shadow-lg transition-transform duration-500 ease-out group-hover:translate-y-[-8px] group-hover:translate-x-[-3px] group-hover:shadow-teal-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-transform duration-500 ease-out group-hover:translate-y-[-3px]">Data Visualization</h3>
                <p className="text-zinc-400 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                  Transform raw data into compelling visual representations that communicate insights clearly and effectively.
                </p>
              </div>
              
              {/* Parallax background elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl transition-transform duration-500 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-zinc-800 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-zinc-800 blur-3xl"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Data Analytics Process</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A systematic approach to extracting meaningful insights from your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="relative pl-16 process-step p-6 bg-zinc-800/70 rounded-xl shadow-xl border border-zinc-700/50 group overflow-hidden">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 h-full bg-blue-600/80 rounded-full group-hover:h-[105%] transition-all duration-500"></div>
              
              {/* Step number */}
              <div className="absolute left-0 top-8 w-13 h-15 -ml-5 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-blue-500/30 group-hover:-translate-y-1">1</div>
              
              {/* Content with parallax effect */}
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-2px]">Data Collection & Integration</h3>
                <p className="text-zinc-400 mb-4 transition-all duration-700 ease-out group-hover:translate-y-[-1px]">
                  We collect and integrate data from various sources, ensuring a complete view of your business operations.
                </p>
              </div>
              
              {/* Background parallax elements */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-100 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[-10px] group-hover:translate-x-[15px]"></div>
                <div className="absolute bottom-0 left-20 w-40 h-40 bg-zinc-200 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
            
            <div className="relative pl-16 process-step p-6 bg-zinc-800/70 rounded-xl shadow-xl border border-zinc-700/50 group overflow-hidden">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 h-full bg-purple-600/80 rounded-full group-hover:h-[105%] transition-all duration-500"></div>
              
              {/* Step number */}
              <div className="absolute left-0 top-8 w-13 h-15 -ml-5 rounded-full bg-purple-600 shadow-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-purple-500/30 group-hover:-translate-y-1">2</div>
              
              {/* Content with parallax effect */}
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-2px]">Data Cleaning & Preparation</h3>
                <p className="text-zinc-400 mb-4 transition-all duration-700 ease-out group-hover:translate-y-[-1px]">
                  Our team meticulously cleans, validates, and structures your data to ensure accuracy and reliability.
                </p>
              </div>
              
              {/* Background parallax elements */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-100 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[-10px] group-hover:translate-x-[15px]"></div>
                <div className="absolute bottom-0 left-20 w-40 h-40 bg-zinc-200 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
            
            <div className="relative pl-16 process-step p-6 bg-zinc-800/70 rounded-xl shadow-xl border border-zinc-700/50 group overflow-hidden">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 h-full bg-teal-600/80 rounded-full group-hover:h-[105%] transition-all duration-500"></div>
              
              {/* Step number */}
              <div className="absolute left-0 top-8 w-13 h-15 -ml-5 rounded-full bg-teal-600 shadow-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-teal-500/30 group-hover:-translate-y-1">3</div>
              
              {/* Content with parallax effect */}
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-2px]">Advanced Analysis</h3>
                <p className="text-zinc-400 mb-4 transition-all duration-700 ease-out group-hover:translate-y-[-1px]">
                  Using statistical methods and machine learning, we identify patterns, correlations, and trends in your data.
                </p>
              </div>
              
              {/* Background parallax elements */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-100 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[-10px] group-hover:translate-x-[15px]"></div>
                <div className="absolute bottom-0 left-20 w-40 h-40 bg-zinc-200 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
            
            <div className="relative pl-16 process-step p-6 bg-zinc-800/70 rounded-xl shadow-xl border border-zinc-700/50 group overflow-hidden">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 h-[50%] bg-primary/80 rounded-full group-hover:h-[105%] transition-all duration-500"></div>
              
              {/* Step number */}
              <div className="absolute left-0 top-8 w-13 h-15 -ml-5 rounded-full bg-primary shadow-lg flex items-center justify-center text-black font-bold text-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-primary/30 group-hover:-translate-y-1">4</div>
              
              {/* Content with parallax effect */}
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:translate-x-2">
                <h3 className="text-2xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-[-2px]">Visualization & Reporting</h3>
                <p className="text-zinc-400 mb-4 transition-all duration-700 ease-out group-hover:translate-y-[-1px]">
                  We present insights through intuitive dashboards and reports that enable quick understanding and decision-making.
                </p>
              </div>
              
              {/* Background parallax elements */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-100 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[-10px] group-hover:translate-x-[15px]"></div>
                <div className="absolute bottom-0 left-20 w-40 h-40 bg-zinc-200 rounded-full blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-[10px] group-hover:translate-x-[-5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900 relative overflow-hidden">
        {/* Dark background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-zinc-800 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-zinc-800 blur-[120px]"></div>
          <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-zinc-800 blur-[50px]"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Our Data Analytics Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Discover how our analytics solutions create tangible value for your business
            </p>
          </div>
          
          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Improved Decision Making</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Make informed decisions with confidence based on data-driven insights rather than intuition alone.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
            
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="16 12 12 8 8 12" />
                    <line x1="12" y1="16" x2="12" y2="8" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Operational Efficiency</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Streamline operations and reduce costs by identifying inefficiencies and optimization opportunities.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
            
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-teal-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Cost Optimization</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Optimize resources and reduce unnecessary expenditure through data-driven insights.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
            
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-indigo-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Enhanced Customer Experience</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Understand customer behavior and preferences to deliver personalized experiences.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
            
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-violet-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-violet-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    <path d="M12 12 9 9" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Competitive Advantage</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Stay ahead of competitors by identifying market trends and opportunities early.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-violet-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
            
            <div className="benefit-card relative overflow-hidden group rounded-xl bg-zinc-800/70 border border-zinc-700/50 shadow-xl transition-all duration-500">
              <CardContent className="p-6 flex flex-col items-center text-center relative z-10 transition-all duration-500">
                {/* Icon with parallax effect */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-600 text-white mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-emerald-500/30 group-hover:translate-y-[-5px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
                    <path d="M3 3v18h18" />
                    <path d="m9 9 3-3 3 3" />
                    <path d="M9 9v6" />
                    <path d="M15 9v6" />
                  </svg>
                </div>
                
                {/* Text with parallax effect */}
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500 ease-out group-hover:translate-y-[-3px]">Growth Analytics</h3>
                <p className="text-zinc-400 transition-all duration-700 ease-out group-hover:translate-y-[-2px]">
                  Identify growth patterns and expansion opportunities with predictive analytics and trend forecasting.
                </p>
              </CardContent>
              
              {/* Parallax background elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[-15px] group-hover:translate-x-[10px]"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl transition-transform duration-700 ease-out group-hover:translate-y-[20px] group-hover:translate-x-[-10px]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 border-t border-zinc-800">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Data?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how our data analytics solutions can help your business make smarter decisions and achieve better results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-0" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800 hover:text-white" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
