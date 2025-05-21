"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticlesBackground } from "@/components/particles-background";
import generateStructuredData from "./structured-data-gen";

// Service cards data
const services = [
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our comprehensive data analytics solutions.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Mini Dashboard Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          {/* Mini KPI Cards */}
          <div className="grid grid-cols-2 gap-1 mb-1">
            <div className="bg-blue-600/20 p-1 rounded border border-blue-600/40">
              <div className="text-[6px] text-blue-300 font-medium">Revenue</div>
              <div className="text-[8px] font-bold text-white">+28%</div>
            </div>
            <div className="bg-purple-600/20 p-1 rounded border border-purple-600/40">
              <div className="text-[6px] text-purple-300 font-medium">Users</div>
              <div className="text-[8px] font-bold text-white">1,245</div>
            </div>
          </div>
          
          {/* Mini Chart */}
          <div className="flex-1 flex items-end justify-around gap-0.5 mt-1 relative">
            <div className="w-1.5 bg-blue-600 rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.1s'}}></div>
            <div className="w-1.5 bg-purple-600 rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1.5 bg-teal-500 rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.3s'}}></div>
            <div className="w-1.5 bg-primary rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.4s'}}></div>
            <div className="w-1.5 bg-blue-600 rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.5s'}}></div>
            <div className="w-1.5 bg-purple-600 rounded-t-sm animate-dashboard-bar" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
      </div>
    ),
    link: "/services/data-analytics",
  },
  {
    title: "Web Development",
    description: "Custom, responsive, and high-performance websites designed to elevate your brand and deliver exceptional user experiences.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Code Editor Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">index.html</div>
          </div>
          
          {/* Code Content */}
          <div className="flex-1 flex flex-col text-left text-[6px] font-mono overflow-hidden">
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '0s'}}>&lt;<span className="text-red-400">html</span>&gt;<span className="animate-blink-cursor">|</span></div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '1s'}}> &nbsp;&lt;<span className="text-red-400">head</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '2s'}}> &nbsp; &nbsp;&lt;<span className="text-red-400">title</span>&gt;<span className="text-white">Veltron</span>&lt;/<span className="text-red-400">title</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '3s'}}> &nbsp;&lt;/<span className="text-red-400">head</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '4s'}}> &nbsp;&lt;<span className="text-red-400">body</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '5s'}}> &nbsp; &nbsp;&lt;<span className="text-red-400">div</span> <span className="text-yellow-400">class</span>=<span className="text-green-400">"container"</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '6s'}}> &nbsp; &nbsp; &nbsp;&lt;<span className="text-red-400">h1</span>&gt;<span className="text-white">Hello World</span>&lt;/<span className="text-red-400">h1</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '7s'}}> &nbsp; &nbsp;&lt;/<span className="text-red-400">div</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '8s'}}> &nbsp;&lt;/<span className="text-red-400">body</span>&gt;</div>
            <div className="text-blue-400 animate-typing-loop" style={{animationDelay: '9s'}}>&lt;/<span className="text-red-400">html</span>&gt;</div>
          </div>
        </div>
      </div>
    ),
    link: "/services/web-development",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to boost your online presence, reach your target audience, and drive measurable results.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* App Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">App Dashboard</div>
          </div>
          
          {/* App Sidebar */}
          <div className="flex-1 flex">
            <div className="w-1/4 bg-zinc-800 p-1 flex flex-col gap-1">
              <div className="w-full h-1.5 bg-primary/40 rounded-sm animate-pulse" style={{animationDuration: '1.5s'}}></div>
              <div className="w-full h-1.5 bg-zinc-700 rounded-sm hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="w-full h-1.5 bg-zinc-700 rounded-sm hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="w-full h-1.5 bg-zinc-700 rounded-sm hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="w-full h-1.5 bg-zinc-700 rounded-sm hover:bg-primary/20 transition-colors duration-300"></div>
            </div>
            
            {/* App Content */}
            <div className="w-3/4 p-1 flex flex-col gap-1">
              <div className="w-full h-2 bg-zinc-800 rounded-sm mb-1"></div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-primary/20 p-0.5 rounded-sm border border-primary/30 animate-pulse" style={{animationDuration: '2s'}}>
                  <div className="w-full h-1 bg-primary/30 rounded-sm mb-0.5"></div>
                  <div className="w-2/3 h-1 bg-primary/20 rounded-sm"></div>
                </div>
                <div className="bg-purple-600/20 p-0.5 rounded-sm border border-purple-600/30 animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}>
                  <div className="w-full h-1 bg-purple-600/30 rounded-sm mb-0.5"></div>
                  <div className="w-2/3 h-1 bg-purple-600/20 rounded-sm"></div>
                </div>
              </div>
              <div className="w-full h-8 bg-zinc-800 rounded-sm mt-1 p-0.5">
                <div className="w-full h-0.5 bg-blue-500/30 rounded-full mb-0.5 animate-typing-loop" style={{animationDelay: '0.3s', animationDuration: '6s'}}></div>
                <div className="w-full h-0.5 bg-purple-500/30 rounded-full mb-0.5 animate-typing-loop" style={{animationDelay: '1.5s', animationDuration: '5s'}}></div>
                <div className="w-full h-0.5 bg-green-500/30 rounded-full mb-0.5 animate-typing-loop" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
                <div className="w-full h-0.5 bg-yellow-500/30 rounded-full animate-typing-loop" style={{animationDelay: '4.5s', animationDuration: '8s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    link: "/courses#java-fullstack",
  },
  {
    title: "Web Application",
    description: "Scalable web applications with robust architecture, intuitive user interfaces, and powerful backend systems that drive business growth.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Marketing Dashboard Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">Marketing</div>
          </div>
          
          {/* Social Media Stats */}
          <div className="flex justify-between mb-1">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-blue-600/30 flex items-center justify-center mb-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 text-blue-400">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </div>
              <div className="text-[5px] text-blue-400 font-bold">2.4K</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-sky-500/30 flex items-center justify-center mb-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 text-sky-400">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>
              <div className="text-[5px] text-sky-400 font-bold">3.8K</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-pink-600/30 flex items-center justify-center mb-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 text-pink-400">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </div>
              <div className="text-[5px] text-pink-400 font-bold">5.2K</div>
            </div>
          </div>
          
          {/* Growth Chart */}
          <div className="flex-1 relative bg-zinc-800/50 rounded-sm p-0.5 overflow-hidden">
            <div className="absolute top-0.5 left-0 right-0 text-[4px] text-zinc-400 text-center">Audience Growth</div>
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M0,50 L10,45 L20,48 L30,40 L40,35 L50,30 L60,25 L70,20 L80,15 L90,10 L100,5" fill="none" stroke="#4f46e5" strokeWidth="1" className="animate-draw-path" strokeDasharray="1000" strokeDashoffset="1000" style={{animation: 'draw-path 8s ease-in-out infinite'}} />
              <circle cx="10" cy="45" r="1" fill="#4f46e5" className="animate-pulse" style={{animationDuration: '3s'}} />
              <circle cx="50" cy="30" r="1" fill="#4f46e5" className="animate-pulse" style={{animationDuration: '2s', animationDelay: '0.5s'}} />
              <circle cx="90" cy="10" r="1" fill="#4f46e5" className="animate-pulse" style={{animationDuration: '2.5s', animationDelay: '1s'}} />
            </svg>
          </div>
        </div>
      </div>
    ),
    link: "/courses#dotnet",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built for performance, usability, and seamless integration with your business systems.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Search Bar */}
          <div className="flex items-center justify-between mb-2 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">Search Results</div>
          </div>
          
          {/* Search Input */}
          <div className="w-full h-3 bg-zinc-800 rounded-full mb-2 flex items-center px-1">
            <div className="text-[5px] text-zinc-400 animate-pulse" style={{animationDuration: '2s', animationIterationCount: 'infinite'}}>veltron.in</div>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary/80"></div>
          </div>
          
          {/* Search Results */}
          <div className="flex-1 flex flex-col gap-1">
            <div className="w-full h-2 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '0s', animationDuration: '5s'}}></div>
            <div className="w-2/3 h-1 bg-zinc-700 rounded-sm animate-typing-loop" style={{animationDelay: '0.5s', animationDuration: '6s'}}></div>
            <div className="w-1/2 h-1 bg-green-600/30 rounded-sm animate-typing-loop" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
            
            <div className="w-full h-2 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
            <div className="w-3/4 h-1 bg-zinc-700 rounded-sm animate-typing-loop" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
            <div className="w-1/2 h-1 bg-green-600/30 rounded-sm animate-typing-loop" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
            
            <div className="w-full h-2 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '4s', animationDuration: '5s'}}></div>
            <div className="w-4/5 h-1 bg-zinc-700 rounded-sm animate-typing-loop" style={{animationDelay: '4.5s', animationDuration: '6s'}}></div>
            <div className="w-2/3 h-1 bg-green-600/30 rounded-sm animate-typing-loop" style={{animationDelay: '5s', animationDuration: '7s'}}></div>
          </div>
        </div>
      </div>
    ),
    link: "/courses#salesforce",
  },
  {
    title: "SEO Services",
    description: "Data-driven SEO strategies to improve search visibility, increase organic traffic, and maximize your online reach and conversions.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Mobile Phone Frame */}
          <div className="w-full h-full relative border-2 border-zinc-700 rounded-lg overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-1.5 bg-zinc-800 flex items-center justify-between px-1">
              <div className="text-[4px] text-zinc-400">9:41</div>
              <div className="flex items-center gap-0.5">
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="flex-1 bg-zinc-900 p-1 flex flex-col gap-1">
              {/* App Header */}
              <div className="w-full h-2 bg-primary/20 rounded-sm flex items-center justify-center">
                <div className="text-[4px] text-primary">Veltron App</div>
              </div>
              
              {/* App Cards */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-blue-600/20 p-0.5 rounded-sm border border-blue-600/40 animate-pulse" style={{animationDuration: '2.5s', animationIterationCount: 'infinite'}}>
                  <div className="w-full h-1 bg-blue-600/30 rounded-sm mb-0.5"></div>
                  <div className="w-2/3 h-0.5 bg-blue-600/20 rounded-sm"></div>
                </div>
                <div className="bg-purple-600/20 p-0.5 rounded-sm border border-purple-600/40 animate-pulse" style={{animationDuration: '3s', animationDelay: '0.5s', animationIterationCount: 'infinite'}}>
                  <div className="w-full h-1 bg-purple-600/30 rounded-sm mb-0.5"></div>
                  <div className="w-2/3 h-0.5 bg-purple-600/20 rounded-sm"></div>
                </div>
              </div>
              
              {/* App List */}
              <div className="flex flex-col gap-0.5 mt-0.5">
                <div className="w-full h-1.5 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-sm animate-typing-loop" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
              </div>
            </div>
            
            {/* Navigation Bar */}
            <div className="h-2 bg-zinc-800 flex items-center justify-around">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
              <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
              <div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    link: "/services/seo-services",
  },
  {
    title: "Corporate Training",
    description: "Customized technology training programs designed to upskill your workforce and keep your team at the cutting edge of industry developments.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Training Dashboard Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">Training Portal</div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-zinc-800 rounded-full mb-1.5 overflow-hidden">
            <div className="h-full bg-primary animate-grow-width" style={{width: '65%'}}></div>
          </div>
          
          {/* Course Cards */}
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="bg-blue-600/20 p-0.5 rounded-sm border border-blue-600/40 flex flex-col animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-[4px] text-blue-300 font-medium">React</div>
              <div className="text-[3px] text-zinc-400">8 modules</div>
              <div className="mt-auto w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 animate-grow-width" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="bg-purple-600/20 p-0.5 rounded-sm border border-purple-600/40 flex flex-col animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-[4px] text-purple-300 font-medium">Node.js</div>
              <div className="text-[3px] text-zinc-400">6 modules</div>
              <div className="mt-auto w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 animate-grow-width" style={{width: '45%'}}></div>
              </div>
            </div>
            <div className="bg-green-600/20 p-0.5 rounded-sm border border-green-600/40 flex flex-col animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-[4px] text-green-300 font-medium">Python</div>
              <div className="text-[3px] text-zinc-400">10 modules</div>
              <div className="mt-auto w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 animate-grow-width" style={{width: '30%'}}></div>
              </div>
            </div>
            <div className="bg-yellow-600/20 p-0.5 rounded-sm border border-yellow-600/40 flex flex-col animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-[4px] text-yellow-300 font-medium">DevOps</div>
              <div className="text-[3px] text-zinc-400">5 modules</div>
              <div className="mt-auto w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 animate-grow-width" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    link: "/services/corporate-training",
  },
  {
    title: "Skill Development",
    description: "Comprehensive technology training programs to enhance your team's capabilities with modern tools, languages, and frameworks for professional growth.",
    icon: (
      <div className="w-full aspect-square max-w-[150px] mx-auto relative bg-zinc-900/80 rounded-lg p-4 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20 hover:shadow-primary/20 transition-shadow duration-300">
        <div className="w-full h-full flex flex-col">
          {/* Skill Development Header */}
          <div className="flex items-center justify-between mb-1 border-b border-zinc-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[6px] text-zinc-400">Learning Path</div>
          </div>
          
          {/* Skill Progress */}
          <div className="flex-1 flex flex-col gap-1.5">
            {/* Skill Levels */}
            <div className="flex items-center gap-1">
              <div className="w-1/4 text-[5px] text-zinc-400">HTML/CSS</div>
              <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-typing-loop" style={{width: '85%', animationDuration: '6s'}}></div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1/4 text-[5px] text-zinc-400">JavaScript</div>
              <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full animate-typing-loop" style={{width: '75%', animationDuration: '7s', animationDelay: '0.5s'}}></div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1/4 text-[5px] text-zinc-400">React</div>
              <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full animate-typing-loop" style={{width: '65%', animationDuration: '8s', animationDelay: '1s'}}></div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1/4 text-[5px] text-zinc-400">Python</div>
              <div className="w-3/4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-typing-loop" style={{width: '70%', animationDuration: '7.5s', animationDelay: '1.5s'}}></div>
              </div>
            </div>
            
            {/* Certificate */}
            <div className="mt-1 p-1 border border-primary/30 rounded-sm bg-primary/5 flex items-center justify-center">
              <div className="text-[6px] text-primary animate-pulse" style={{animationDuration: '2s'}}>Certificate of Completion</div>
            </div>
          </div>
        </div>
      </div>
    ),
    link: "/services/skill-development",
  },
];

// Course categories data
const courseCategories = [
  {
    title: "Data Analytics",
    count: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    link: "/courses#data-analytics",
  },
  {
    title: "Java Fullstack",
    count: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M18 3v4c0 2-2 4-4 4s-4-2-4-4V3" />
        <path d="M14 21v-4c0-2-2-4-4-4s-4 2-4 4v4" />
        <path d="M3 7v4c0 2 2 4 4 4s4-2 4-4V7" />
        <path d="M21 17v-4c0-2-2-4-4-4s-4 2-4 4v4" />
      </svg>
    ),
    link: "/courses#java-fullstack",
  },
  {
    title: ".NET Complete",
    count: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 12h10" />
        <path d="M9 4v16" />
        <path d="m22 12-3-5" />
        <path d="m22 12-3 5" />
        <path d="m16 7-4 10" />
      </svg>
    ),
    link: "/courses#dotnet",
  },
  {
    title: "Salesforce",
    count: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22v-5" />
        <path d="m9 8 3-5 3 5" />
        <path d="m19 11-5-3 5-3" />
        <path d="m5 11 5-3-5-3" />
        <path d="M12 13V8" />
        <path d="m15 19 2-2-2-2" />
        <path d="m9 19-2-2 2-2" />
      </svg>
    ),
    link: "/courses#salesforce",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const coursesRef = useRef(null);
  const statsRef = useRef(null);
  
  // Generate structured data for SEO
  const structuredData = generateStructuredData();
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax background effect for hero section
    gsap.to(".hero-parallax-bg", {
      yPercent: -30,
      xPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
    });
    
    // Parallax background effect for services-courses section
    gsap.to(".services-courses-parallax-bg", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".bg-services-courses-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
    });
    
    // Hero section animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    
    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7 }
    );
    
    // Services section - removed scroll animations per user request
    const serviceCards = gsap.utils.toArray('.service-card') as HTMLElement[];
    serviceCards.forEach((card) => {
      // Set cards to be visible by default without animation
      gsap.set(card, { opacity: 1, y: 0 });
    });
    
    // Course categories - removed scroll animations per user request
    const courseCards = gsap.utils.toArray('.course-card') as HTMLElement[];
    courseCards.forEach((card) => {
      // Set cards to be visible by default without animation
      gsap.set(card, { opacity: 1, scale: 1 });
    });
    
    // Stats counter animation
    const statsItems = gsap.utils.toArray('.stat-item') as HTMLElement[];
    statsItems.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.2
        }
      );
    });
    
  }, []);

  return (
    <main>
      {/* Add JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section with Particles Background */}
      <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-background/90 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hero-parallax-bg" 
            style={{ 
              backgroundImage: "url('/images/home-background.jpg')",
              opacity: 0.7,
              filter: "brightness(1) contrast(1)",
              transform: "scale(1.6)" // Slightly larger to allow movement without showing edges
            }}
          />
        </div>
        
        {/* Interactive Particles Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 1 }}>
          <ParticlesBackground />
        </div>
        
        {/* Decorative Gradient Elements */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
          
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20 text-center">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-10xl font-bold tracking-tight mb-6">
            
              Veltron Sysmatic Solution 
          </h1>
          <p className="hero-text text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Empowering Businesses With Innovation & Strategic Empowerment
          </p>
          <p className="hero-text text-primary text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-5">
          Web Development | Digital Marketing | SEO Services | Data Analytics | Mobile App Development | Web Application Development</p>
          <div className="hero-buttons flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 glow-button relative overflow-hidden group"
              asChild
            >
              <Link href="services/data-analytics">
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 border border-white/50 rounded-md glow-border"></span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 glow-button-outline relative overflow-hidden group"
              asChild
            >
              <Link href="#courses">
                <span className="relative z-10">Explore Courses</span>
                <span className="absolute inset-0 border border-white/50 rounded-md glow-border-outline"></span>
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center">
            <Link href="#services" aria-label="Scroll down to services section" className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="animate-bounce w-6 h-6 text-muted-foreground"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
              <span className="sr-only">Scroll down to explore our services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Shared Background Container - wraps both services and courses sections */}
      <div className="relative bg-services-courses-section">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden parallax-bg-container" style={{ zIndex: 0 }}>
          <Image
            src="/images/home-service-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
            className="opacity-80 services-courses-parallax-bg"
          />
        </div>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 0 }}></div>
        
        {/* Services Section */}
        <section 
          ref={servicesRef} 
          className="py-20 relative"
        >
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to elevate your business in the digital landscape
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="service-card border border-white/20 bg-background shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 relative overflow-hidden group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left; 
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Animated shine effect */}
                  <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1s_ease-in-out]"></div>
                  
                  <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 service-card-icon" style={{animationDelay: `${index * 0.3}s`}}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link href={service.link} className="text-primary hover:underline mt-auto flex items-center" aria-label={`Learn more about ${service.title} services`}>
                      Learn more about {service.title}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            
          </div>
        </section>

        {/* Stats Section */}
        {/*<section ref={statsRef} className="py-20 bg-primary/5 relative z-10">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Trainers</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="stat-item text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Courses Section */}
        <section ref={coursesRef} className="py-20 relative z-10">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Training</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-relevant courses designed to build skills that match today's job market demands
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category, index) => (
              <Link key={index} href={category.link} aria-label={`Explore ${category.title} courses - ${category.count} available`}>
                <Card className="course-card h-full overflow-hidden border border-white/20 bg-background shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4 p-2 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center" aria-hidden="true">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{category.count} Courses</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/courses" aria-label="View our complete catalog of professional training courses">Explore All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      </div>
      {/* End of shared background container */}
      
     {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how Veltron can help you achieve your technology goals or enhance your skills through professional training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact" aria-label="Contact Veltron for technology solutions or training inquiries">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about" aria-label="Learn more about Veltron Sysmatic Solution and our services">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  
  );
}
