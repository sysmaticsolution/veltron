"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WebDevelopmentPage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create code pattern background elements on client-side only
    const codePatternBg = document.getElementById('code-pattern-background');
    if (codePatternBg) {
      // Clear any existing elements first
      codePatternBg.innerHTML = '';
      
      // Create 100 random code elements
      for (let i = 0; i < 100; i++) {
        const element = document.createElement('div');
        element.className = 'text-xs font-mono opacity-20';
        element.style.position = 'absolute';
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        
        // Determine text content with fixed pattern to avoid additional randomness
        const randomVal = i % 4;
        if (randomVal === 0) element.textContent = '<div>';
        else if (randomVal === 1) element.textContent = '</div>';
        else if (randomVal === 2) element.textContent = '<span>';
        else element.textContent = '</span>';
        
        codePatternBg.appendChild(element);
      }
    }
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Add zoom effect to the hero image
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
    
    // Animate the header elements
    gsap.fromTo(
      ".header-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the code snippet typing effect - Enhanced with realistic website development sequence
    const codeExamples = [
      // HTML Structure (index.html)
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Veltron - Digital Solutions</title>
  <link rel="stylesheet" href="styles.css">
  <script src="main.js" defer></script>
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="logo">Veltron</div>
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1>Web Development <span>Services</span></h1>
        <p>Custom, responsive solutions for your business</p>
        <div class="cta-buttons">
          <button class="btn primary">Get Started</button>
          <button class="btn secondary">Learn More</button>
        </div>
      </div>
    </div>
  </section>
</body>
</html>`,

      // CSS Styling (styles.css)
      `:root {
  --primary: #3b82f6;
  --secondary: #10b981;
  --dark: #1f2937;
  --light: #f9fafb;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--dark);
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  background-color: var(--dark);
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light);
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav a {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav a:hover {
  color: var(--primary);
}

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--dark), #111827);
}

.hero__content {
  max-width: 600px;
  color: var(--light);
}

.hero__content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.hero__content span {
  color: var(--primary);
}

.hero__content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn.primary {
  background-color: var(--primary);
  color: white;
  border: none;
}

.btn.secondary {
  background-color: transparent;
  color: white;
  border: 1px solid var(--light);
}

.btn.primary:hover {
  background-color: #2563eb;
}

.btn.secondary:hover {
  background-color: rgba(255,255,255,0.1);
}`,

      // JavaScript Functionality (main.js)
      `// Create animated entrance for hero content
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero__content');
  const headings = heroContent.querySelectorAll('h1, p');
  const buttons = heroContent.querySelectorAll('.btn');

  // Apply fadeIn and slideUp animations
  headings.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 300 + (index * 200));
  });

  // Animate buttons with a delay
  buttons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, 800 + (index * 150));
  });

  // Add scroll animation
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
});`,

      // React Component (App.jsx)
      `import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">
            Web Development <span>Services</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Custom, responsive solutions for your business
          </motion.p>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button primary>Get Started</Button>
            <Button>Learn More</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;`,

      // Terminal Build & Deploy Commands
      `$ npm install
$ npm run build

> veltron@1.0.0 build
> next build

- Creating an optimized production build...
- Compiled successfully
- Collecting page data...
- Generating static pages (12/12)
- Finalizing page optimization...

✓ Done in 14.2s

$ npm start

> veltron@1.0.0 start
> next start

✓ Ready in 150ms
○ Listening on http://localhost:3000

[GET] /services/web-development 200 in 124ms
[GET] /_next/static/chunks/main.js 200 in 32ms
[GET] /_next/static/css/app.css 200 in 18ms`
    ];

    let currentExampleIndex = 0;
    let charIndex = 0;
    const codeElement = document.querySelector('.code-snippet');
    const cursorElement = document.querySelector('.typing-cursor');
    
    if (codeElement) {
      // Tab elements
      const htmlTab = document.getElementById('html-tab');
      const cssTab = document.getElementById('css-tab');
      const jsTab = document.getElementById('js-tab');
      const reactTab = document.getElementById('react-tab');
      const terminalTab = document.getElementById('terminal-tab');
      const fileType = document.getElementById('file-type');
      const linterType = document.getElementById('linter-type');
      const previewContent = document.getElementById('preview-content');
      
      // Active tab indicator styles
      const activeTabClass = 'bg-blue-600/30 text-white/80 border-t border-l border-r border-blue-500/30 rounded-t-md';
      const inactiveTabClass = 'text-white/60 hover:text-white/80';
      
      // Helper for syntax highlighting
      function applyHighlighting(code: string, type: string): string {
        let highlightedCode = code;
        
        // Set file type indicator
        if (fileType) {
          fileType.textContent = type;
        }
        
        // Set linter type
        if (linterType) {
          linterType.textContent = type === 'HTML' ? 'HTMLHint' : 
                                  type === 'CSS' ? 'Stylelint' : 
                                  type === 'JavaScript' ? 'ESLint' : 
                                  type === 'JSX' ? 'ESLint' : 'Terminal';
        }
        
        if (type === 'HTML') {
          // Highlight HTML tags
          highlightedCode = highlightedCode
            .replace(/(&lt;!DOCTYPE[^>]+&gt;)/g, '<span class="text-zinc-500">$1</span>')
            .replace(/(&lt;\/?[\w\s="':\.\-]+&gt;)/g, '<span class="text-orange-500">$1</span>')
            .replace(/(&lt;\/?|&gt;)/g, '<span class="text-blue-500">$1</span>')
            .replace(/("[^"]*")/g, '<span class="text-yellow-500">$1</span>')
            .replace(/(=)/g, '<span class="text-white">$1</span>');
        } else if (type === 'CSS') {
          // Highlight CSS properties and values
          highlightedCode = highlightedCode
            .replace(/([\w-]+)\s*:/g, '<span class="text-blue-500">$1</span>:')
            .replace(/(:[^;]*)([;}])/g, '<span class="text-green-500">$1</span>$2')
            .replace(/(@\w+)/g, '<span class="text-fuchsia-500">$1</span>')
            .replace(/(\d+(\.\d+)?(px|rem|em|vh|vw|%|s|ms))/g, '<span class="text-yellow-500">$1</span>')
            .replace(/(#[0-9a-fA-F]{3,8})/g, '<span class="text-pink-500">$1</span>')
            .replace(/(\.([\w-]+))/g, '<span class="text-amber-300">$1</span>');
        } else if (type === 'JavaScript') {
          // Highlight JavaScript syntax
          highlightedCode = highlightedCode
            .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|async|await)\b/g, '<span class="text-fuchsia-500">$1</span>')
            .replace(/\b(document|window|console|setTimeout|forEach|querySelector|querySelectorAll|addEventListener)\b/g, '<span class="text-cyan-500">$1</span>')
            .replace(/('[^']*'|"[^"]*")/g, '<span class="text-yellow-500">$1</span>')
            .replace(/\b(true|false|null|undefined|\d+)\b/g, '<span class="text-orange-400">$1</span>')
            .replace(/(\/\/[^\n]*)/g, '<span class="text-zinc-500">$1</span>')
            .replace(/\b([\w]+)\s*\(/g, '<span class="text-blue-400">$1</span>(');
        } else if (type === 'JSX') {
          // Highlight React JSX syntax
          highlightedCode = highlightedCode
            .replace(/\b(import|export|from|const|let|function|return|if|else|for|while|async|await)\b/g, '<span class="text-fuchsia-500">$1</span>')
            .replace(/\b(React|useState|useEffect|useRef|motion)\b/g, '<span class="text-cyan-500">$1</span>')
            .replace(/(&lt;\/?[A-Z][\w]*)/g, '<span class="text-green-500">$1</span>')
            .replace(/(&lt;\/?[a-z][\w]*)/g, '<span class="text-orange-500">$1</span>')
            .replace(/('[^']*'|"[^"]*")/g, '<span class="text-yellow-500">$1</span>')
            .replace(/(\{[^{}]*\})/g, '<span class="text-blue-400">$1</span>')
            .replace(/\b(true|false|null|undefined|\d+)\b/g, '<span class="text-orange-400">$1</span>')
            .replace(/(className|initial|animate|transition|variants|key|id)=/g, '<span class="text-blue-300">$1</span>=');
        } else if (type === 'Terminal') {
          // Highlight terminal output
          highlightedCode = highlightedCode
            .replace(/(\$[^\n]*)/g, '<span class="text-green-500">$1</span>')
            .replace(/(>[^\n]*)/g, '<span class="text-blue-500">$1</span>')
            .replace(/(npm\s+\w+)/g, '<span class="text-red-500">$1</span>')
            .replace(/(✓[^\n]*)/g, '<span class="text-green-500">$1</span>')
            .replace(/(\[[A-Z]+\])/g, '<span class="text-yellow-500">$1</span>')
            .replace(/(https?:\/\/[^\s]+)/g, '<span class="text-blue-400">$1</span>');
        }
        
        return highlightedCode;
      }
      
      // Function to update the preview panel based on code examples
      function updatePreview(exampleIndex: number): void {
        if (!previewContent) return;
        
        // Clear preview content first
        while (previewContent.firstChild) {
          previewContent.removeChild(previewContent.firstChild);
        }
        
        // Create preview based on which example is showing
        if (exampleIndex === 0) { // HTML structure
          // Basic structure preview
          previewContent.innerHTML = `
            <div class="h-full relative overflow-auto">
              <div class="bg-zinc-800 p-4 h-full">
                <div class="text-white p-4 font-bold flex justify-between items-center">
                  <div>Veltron</div>
                  <div class="flex space-x-4 text-sm font-normal">
                    <span>Home</span>
                    <span class="text-blue-400">Services</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>
                <div class="flex items-center justify-center h-[200px] text-white">
                  <div class="text-center">
                    <h2 class="text-xl font-bold mb-2">Starting to code the page structure...</h2>
                    <p class="text-zinc-400">Building the HTML foundation</p>
                  </div>
                </div>
              </div>
            </div>
          `;
        } else if (exampleIndex === 1) { // CSS styling
          // Styled preview with CSS
          previewContent.innerHTML = `
            <div class="h-full relative overflow-auto">
              <div class="bg-[#1f2937] p-0 h-full">
                <div class="p-4 font-bold flex justify-between items-center border-b border-zinc-700">
                  <div class="text-[#f9fafb] text-lg">Veltron</div>
                  <div class="flex space-x-6 text-sm font-normal">
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Home</span>
                    <span class="text-[#3b82f6]">Services</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">About</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Contact</span>
                  </div>
                </div>
                <div class="flex items-center justify-start h-[200px] text-white p-8">
                  <div class="max-w-md">
                    <h2 class="text-3xl font-bold mb-3">Web Development <span class="text-[#3b82f6]">Services</span></h2>
                    <p class="text-[#f9fafb] text-lg opacity-80 mb-4">Custom, responsive solutions for your business</p>
                    <div class="flex space-x-3">
                      <button class="px-4 py-2 rounded bg-[#3b82f6] text-white font-medium">Get Started</button>
                      <button class="px-4 py-2 rounded bg-transparent text-white font-medium border border-white/50">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        } else if (exampleIndex === 2) { // JavaScript functionality
          // Interactive preview with JS animations
          previewContent.innerHTML = `
            <div class="h-full relative overflow-auto">
              <div class="bg-[#1f2937] p-0 h-full">
                <div class="p-4 font-bold flex justify-between items-center border-b border-zinc-700">
                  <div class="text-[#f9fafb] text-lg">Veltron</div>
                  <div class="flex space-x-6 text-sm font-normal">
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Home</span>
                    <span class="text-[#3b82f6]">Services</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">About</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Contact</span>
                  </div>
                </div>
                <div class="flex items-center justify-start h-[200px] text-white p-8">
                  <div class="max-w-md animated-content">
                    <h2 class="text-3xl font-bold mb-3 animate-slide-up">Web Development <span class="text-[#3b82f6]">Services</span></h2>
                    <p class="text-[#f9fafb] text-lg opacity-80 mb-4 animate-slide-up animation-delay-200">Custom, responsive solutions for your business</p>
                    <div class="flex space-x-3 animate-slide-up animation-delay-400">
                      <button class="px-4 py-2 rounded bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-colors">Get Started</button>
                      <button class="px-4 py-2 rounded bg-transparent text-white font-medium border border-white/50 hover:bg-white/5 transition-colors">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          // Add animations
          setTimeout(() => {
            const animatedElements = document.querySelectorAll('.animated-content > *');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('opacity-100', 'translate-y-0');
              }, 300 * index);
            });
          }, 100);
        } else if (exampleIndex === 3) { // React component
          // Full React preview with animations
          previewContent.innerHTML = `
            <div class="h-full relative overflow-auto">
              <div class="bg-[#1f2937] p-0 h-full">
                <div class="p-4 font-bold flex justify-between items-center border-b border-zinc-700">
                  <div class="text-[#f9fafb] text-lg">Veltron</div>
                  <div class="flex space-x-6 text-sm font-normal">
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Home</span>
                    <span class="text-[#3b82f6]">Services</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">About</span>
                    <span class="text-[#f9fafb] hover:text-[#3b82f6] transition-colors">Contact</span>
                  </div>
                </div>
                <div class="flex items-center justify-start h-[200px] text-white p-8">
                  <div class="max-w-md react-animated">
                    <h2 class="text-3xl font-bold mb-3 react-fade-in">Web Development <span class="text-[#3b82f6]">Services</span></h2>
                    <p class="text-[#f9fafb] text-lg opacity-80 mb-4 react-fade-in react-delay-1">Custom, responsive solutions for your business</p>
                    <div class="flex space-x-3 react-fade-in react-delay-2">
                      <button class="px-4 py-2 rounded bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-all transform hover:scale-105">Get Started</button>
                      <button class="px-4 py-2 rounded bg-transparent text-white font-medium border border-white/50 hover:bg-white/5 transition-all transform hover:scale-105">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          // Add React-style animations
          setTimeout(() => {
            const reactElements = document.querySelectorAll('.react-fade-in');
            reactElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              htmlEl.style.opacity = '0';
              htmlEl.style.transform = 'translateY(20px)';
              htmlEl.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });
            
            setTimeout(() => {
              const el1 = document.querySelector('.react-fade-in') as HTMLElement;
              if (el1) {
                el1.style.opacity = '1';
                el1.style.transform = 'translateY(0)';
              }
            }, 100);
            
            setTimeout(() => {
              const el2 = document.querySelector('.react-delay-1') as HTMLElement;
              if (el2) {
                el2.style.opacity = '1';
                el2.style.transform = 'translateY(0)';
              }
            }, 500);
            
            setTimeout(() => {
              const el3 = document.querySelector('.react-delay-2') as HTMLElement;
              if (el3) {
                el3.style.opacity = '1';
                el3.style.transform = 'translateY(0)';
              }
            }, 900);
          }, 100);
        } else if (exampleIndex === 4) { // Terminal
          // Terminal preview showing deployed app
          previewContent.innerHTML = `
            <div class="h-full relative overflow-auto">
              <div class="bg-[#1f2937] p-0 h-full">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-3 text-green-500">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div class="text-xl font-bold text-white mb-2">Deployment Complete!</div>
                    <div class="text-green-400 text-sm">Build successful</div>
                    <div class="text-zinc-400 text-xs mt-1">Listening on http://localhost:3000</div>
                    <div class="mt-4 border-t border-zinc-700 pt-3">
                      <div class="text-blue-400 text-xs inline-block px-3 py-1 rounded-md bg-blue-400/10">
                        Open website
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      }
      
      // Set up tab switching
      function setupTabs() {
        const tabs = [
          { tab: htmlTab, index: 0, type: 'HTML' },
          { tab: cssTab, index: 1, type: 'CSS' },
          { tab: jsTab, index: 2, type: 'JavaScript' },
          { tab: reactTab, index: 3, type: 'JSX' },
          { tab: terminalTab, index: 4, type: 'Terminal' }
        ];
        
        // Add click handlers to tabs
        tabs.forEach(({ tab, index, type }) => {
          if (tab) {
            tab.addEventListener('click', () => {
              // Update active tab styling
              tabs.forEach(t => {
                if (t.tab) t.tab.className = `tab-item px-3 py-1 text-xs ${index === t.index ? activeTabClass : inactiveTabClass} transition-colors ml-1 flex items-center`;
              });
              
              // Stop current animation
              clearInterval(currentAnimation);
              typedCharacters = 0;
              currentExampleIndex = index;
              
              // Update code content
              if (codeElement) {
                codeElement.innerHTML = '';
                startTypingAnimation(type);
              }
              
              // Update preview
              updatePreview(index);
            });
          }
        });
      }
      
      // Variable to keep track of animation interval
      let currentAnimation: any;
      // Variable to keep track of typed characters
      let typedCharacters = 0;
      
      // Initialize with syntax highlighting and variable typing speed
      function startTypingAnimation(type = 'HTML') {
        if (!codeElement) return;
        
        const currentExample = codeExamples[currentExampleIndex];
        currentAnimation = setInterval(() => {
          const currentPosition = typedCharacters;
          
          if (currentPosition < currentExample.length && codeElement) {
            // Calculate typing speed: faster for spaces, slower for complex code
            const char = currentExample[currentPosition];
            let typingSpeed = 20; // Base speed
            
            // Vary typing speed based on characters
            if (char === ' ' || char === '\n') typingSpeed = 5;
            else if (char === '{' || char === '}') typingSpeed = 30;
            else if (currentPosition > 0 && currentExample[currentPosition-1] === '\n') typingSpeed = 40;
            
            // Add next character
            let newContent = escapeHTML(currentExample.substring(0, currentPosition + 1));
            
            // Determine code type based on currentExampleIndex
            let codeType = 'HTML';
            if (currentExampleIndex === 1) codeType = 'CSS';
            else if (currentExampleIndex === 2) codeType = 'JavaScript';
            else if (currentExampleIndex === 3) codeType = 'JSX';
            else if (currentExampleIndex === 4) codeType = 'Terminal';
            
            // Apply syntax highlighting
            codeElement.innerHTML = applyHighlighting(newContent, codeType);
            typedCharacters++;
            
            // Adjust the timeout for next character
            clearInterval(currentAnimation);
            currentAnimation = setTimeout(() => {
              startTypingAnimation(codeType);
            }, typingSpeed);
          } else {
            // Example completed, reset for next example after delay
            clearInterval(currentAnimation);
            
            setTimeout(() => {
              // Reset and move to next example automatically
              typedCharacters = 0;
              currentExampleIndex = (currentExampleIndex + 1) % codeExamples.length;
              codeElement.innerHTML = '';
              
              // Update tabs to reflect current example
              const tabs = document.querySelectorAll('.tab-item');
              tabs.forEach((tab, i) => {
                tab.className = `tab-item px-3 py-1 text-xs ${i === currentExampleIndex ? activeTabClass : inactiveTabClass} transition-colors ml-1 flex items-center`;
              });
              
              // Update preview
              updatePreview(currentExampleIndex);
              
              // Determine next code type
              let nextCodeType = 'HTML';
              if (currentExampleIndex === 1) nextCodeType = 'CSS';
              else if (currentExampleIndex === 2) nextCodeType = 'JavaScript';
              else if (currentExampleIndex === 3) nextCodeType = 'JSX';
              else if (currentExampleIndex === 4) nextCodeType = 'Terminal';
              
              // Start typing next example
              startTypingAnimation(nextCodeType);
            }, 3000); // Wait 3 seconds between examples
          }
        }, 20); // Initial typing speed
      }
      
      // Helper function to escape HTML chars
      function escapeHTML(text: string): string {
        return text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;');
      }
      
      // Start cursor blink animation
      const cursor = document.querySelector('.typing-cursor');
      if (cursor) {
        setInterval(() => {
          cursor.classList.toggle('opacity-0');
        }, 500);
      }
      
      // Set up the tabs
      setupTabs();
      
      // Initial preview
      updatePreview(0);
      
      // Start the initial animation
      startTypingAnimation();
      
      // Add custom CSS for animations
      const style = document.createElement('style');
      style.textContent = `
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .animation-delay-200 { transition-delay: 0.2s; }
        .animation-delay-400 { transition-delay: 0.4s; }
        .opacity-100 { opacity: 1; }
        .translate-y-0 { transform: translateY(0); }
      `;
      document.head.appendChild(style);
    }   
    
    // Animate the features cards
    const featureCards = gsap.utils.toArray('.feature-card') as HTMLElement[];
    featureCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power1.out',
          delay: i * 0.2
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
    
    // Animate the technology icons
    const techIcons = gsap.utils.toArray('.tech-icon') as HTMLElement[];
    techIcons.forEach((icon, i) => {
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
    
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-60 transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl opacity-40"></div>
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl opacity-50"></div>
        
        {/* Code pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full flex flex-wrap" id="code-pattern-background">
              {/* Code pattern elements will be added by useEffect */}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative pt-32 pb-20">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 z-10"></div> {/* Dark overlay */}
          <div className="absolute inset-0 hero-image">
            <img 
              src="/images/web-development-hero.jpg" 
              alt="Web Development Background" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Web <span className="text-primary">Development</span> Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Custom, responsive, and high-performance web solutions designed to elevate your digital presence and drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div>
              {/* IDE-like window with code typing effect */}
              <div id="hero-ide" className="relative bg-zinc-900 rounded-xl shadow-xl border border-zinc-800/50 overflow-hidden">
                {/* IDE Header */}
                <div className="h-10 bg-zinc-800/90 flex items-center justify-between px-3 border-b border-zinc-700/50">
                  {/* Window controls */}
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
                  </div>
                  
                  {/* Filename */}
                  <div className="text-xs text-zinc-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    index.html
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-center space-x-1">                  
                    <div className="p-1 rounded text-xs text-white/80 bg-zinc-700/50 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-[10px]">Live</span>
                    </div>
                  </div>
                </div>
                
                {/* Tab bar */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center h-full space-x-1">
                  <div id="html-tab" className="tab-item px-3 py-1 text-xs text-white/80 bg-blue-600/30 rounded-t-md border-t border-l border-r border-blue-500/30 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                    </svg>
                    index.html
                  </div>
                  <div id="css-tab" className="tab-item px-3 py-1 text-xs text-white/60 hover:text-white/80 transition-colors ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                    </svg>
                    styles.css
                  </div>
                  <div id="js-tab" className="tab-item px-3 py-1 text-xs text-white/60 hover:text-white/80 transition-colors ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                      <line x1="8" x2="8" y1="16" y2="16" />
                      <line x1="8" x2="16" y1="16" y2="16" />
                      <line x1="8" x2="16" y1="20" y2="20" />
                    </svg>
                    main.js
                  </div>
                  <div id="react-tab" className="tab-item px-3 py-1 text-xs text-white/60 hover:text-white/80 transition-colors ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                      <path d="M12 13a5 5 0 0 0 0-10 4.5 4.5 0 0 0-4.5 4.5c0 1.5 1.5 3 1.5 5.5 0 2-1.5 4.5-1.5 4.5" />
                      <path d="M9 10.5V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.5" />
                    </svg>
                    App.jsx
                  </div>
                </div>
                
                {/* Code content with typing effect */}
                <div className="flex h-[300px]">
                  {/* Line numbers */}
                  <div className="bg-zinc-950/90 w-8 pt-3 pl-2 text-right">
                    {Array(15).fill(0).map((_, i) => (
                      <div key={i} className="text-[11px] leading-6 text-zinc-600 font-mono">{i+1}</div>
                    ))}
                  </div>
                  
                  {/* Code content */}
                  <div className="flex-1 p-3 font-mono text-[13px] leading-6 overflow-x-auto bg-zinc-950/90">
                    <pre className="text-white" id="code-content">
                      <code>
                        <span className="text-blue-400">&lt;!DOCTYPE <span className="text-green-400">html</span>&gt;</span>
                        <br />
                        <span className="text-blue-400">&lt;<span className="text-red-400">html</span> <span className="text-yellow-400">lang</span>=<span className="text-green-400">"en"</span>&gt;</span>
                        <br />
                        <span className="text-blue-400">&lt;<span className="text-red-400">head</span>&gt;</span>
                        <br />
                        <span className="ml-4 text-blue-400">&lt;<span className="text-red-400">meta</span> <span className="text-yellow-400">charset</span>=<span className="text-green-400">"UTF-8"</span>&gt;</span>
                        <br />
                        <span className="ml-4 text-blue-400">&lt;<span className="text-red-400">meta</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">"viewport"</span> <span className="text-yellow-400">content</span>=<span className="text-green-400">"width=device-width, initial-scale=1.0"</span>&gt;</span>
                        <br />
                        <span className="ml-4 text-blue-400">&lt;<span className="text-red-400">title</span>&gt;</span><span className="text-white">Veltron | Web Development</span><span className="text-blue-400">&lt;/<span className="text-red-400">title</span>&gt;</span>
                        <br />
                        <span className="ml-4 text-blue-400">&lt;<span className="text-red-400">link</span> <span className="text-yellow-400">rel</span>=<span className="text-green-400">"stylesheet"</span> <span className="text-yellow-400">href</span>=<span className="text-green-400">"styles.css"</span>&gt;</span>
                        <br />
                        <span className="text-blue-400">&lt;/<span className="text-red-400">head</span>&gt;</span>
                        <br />
                        <span className="text-blue-400">&lt;<span className="text-red-400">body</span>&gt;</span>
                        <br />
                        <span className="ml-4 text-blue-400">&lt;<span className="text-red-400">div</span> <span className="text-yellow-400">class</span>=<span className="text-green-400">"container"</span>&gt;</span>
                        <br />
                        <span className="ml-8 typing-effect text-blue-400">&lt;<span className="text-red-400">h1</span>&gt;</span><span className="typing-effect text-white">Welcome to Veltron</span><span className="typing-effect text-blue-400">&lt;/<span className="text-red-400">h1</span>&gt;</span>
                        <br />
                        <span className="typing-cursor inline-block w-[2px] h-[18px] bg-blue-500 ml-[1px] relative top-[4px] animate-cursor-blink"></span>
                      </code>
                    </pre>
                  </div>
                </div>
                                 {/* Status bar */}
                <div className="absolute bottom-0 left-0 w-full h-6 bg-zinc-800/90 flex items-center justify-between px-4 text-[10px] text-zinc-400">
                  <div className="flex items-center space-x-3">
                    <span id="file-type" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      HTML
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M12 2H2v10h10V2Z" />
                        <path d="M12 12H2v10h10V12Z" />
                        <path d="M22 12h-10v10h10V12Z" />
                        <path d="M22 2h-10v10h10V2Z" />
                      </svg>
                      Spaces: 2
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>UTF-8</span>
                    <span>LF</span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9Z" />
                        <path d="M9 12a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3Z" />
                        <path d="M15 12a3 3 0 0 0 3-3 3 3 0 0 0-3-3" />
                        <path d="m12 12-3 9" />
                        <path d="M14.67 14.67 18 21" />
                      </svg>
                      <span id="linter-type">HTMLHint</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Web Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver end-to-end web development services tailored to your specific business needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card-container perspective-container relative h-[340px] md:h-[380px] lg:h-[360px]">
              <div className="feature-card group h-full w-full relative transform-style-3d transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] hover:scale-[1.02]">
                <div className="parallax-glow absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-secondary/10 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-2xl -z-10 transform -translate-z-[-50px]"></div>
                
                <Card className="h-full border-white/10 bg-background/50 backdrop-blur-md border border-white/5 shadow-xl group-hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transform translate-x-20 -translate-y-20 transition-all duration-500 group-hover:translate-x-16 group-hover:-translate-y-16"></div>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transform transition-all duration-1000 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
                  </div>
                  
                  {/* Light shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out transform-gpu"></div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col items-center text-center relative h-full z-10">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary/10 text-primary mb-6 transform transition-all duration-500 group-hover:translate-z-20 group-hover:translate-y-[-10px] group-hover:scale-110">
                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform transition-all duration-700 group-hover:scale-110">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <rect width="8" height="4" x="8" y="10" />
                        <line x1="4" x2="20" y1="8" y2="8" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 transform transition-all duration-500 group-hover:translate-z-15 group-hover:translate-y-[-5px] group-hover:text-primary">Responsive Web Design</h3>
                    
                    <p className="text-muted-foreground transform transition-all duration-500 group-hover:translate-z-10 group-hover:text-foreground/80">
                      Beautifully crafted websites that adapt seamlessly to all devices and screen sizes, ensuring optimal user experience.
                    </p>
                    
                    {/* Decorative elements with parallax effect */}
                    <div className="absolute right-4 bottom-4 w-16 h-16 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:translate-z-5 group-hover:translate-x-2 group-hover:translate-y-2">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="feature-card-container perspective-container relative h-[340px] md:h-[380px] lg:h-[360px]">
              <div className="feature-card group h-full w-full relative transform-style-3d transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] hover:scale-[1.02]">
                <div className="parallax-glow absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-secondary/10 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-2xl -z-10 transform -translate-z-[-50px]"></div>
                
                <Card className="h-full border-white/10 bg-background/50 backdrop-blur-md border border-white/5 shadow-xl group-hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transform translate-x-20 -translate-y-20 transition-all duration-500 group-hover:translate-x-16 group-hover:-translate-y-16"></div>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transform transition-all duration-1000 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
                  </div>
                  
                  {/* Light shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out transform-gpu"></div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col items-center text-center relative h-full z-10">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary/10 text-primary mb-6 transform transition-all duration-500 group-hover:translate-z-20 group-hover:translate-y-[-10px] group-hover:scale-110">
                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform transition-all duration-700 group-hover:scale-110">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 transform transition-all duration-500 group-hover:translate-z-15 group-hover:translate-y-[-5px] group-hover:text-primary">E-Commerce Development</h3>
                    
                    <p className="text-muted-foreground transform transition-all duration-500 group-hover:translate-z-10 group-hover:text-foreground/80">
                      Custom online stores with secure payment gateways, inventory management, and seamless shopping experiences.
                    </p>
                    
                    {/* Decorative elements with parallax effect */}
                    <div className="absolute right-4 bottom-4 w-16 h-16 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:translate-z-5 group-hover:translate-x-2 group-hover:translate-y-2">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="feature-card-container perspective-container relative h-[340px] md:h-[380px] lg:h-[360px]">
              <div className="feature-card group h-full w-full relative transform-style-3d transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] hover:scale-[1.02]">
                <div className="parallax-glow absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:to-secondary/10 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500 rounded-2xl -z-10 transform -translate-z-[-50px]"></div>
                
                <Card className="h-full border-white/10 bg-background/50 backdrop-blur-md border border-white/5 shadow-xl group-hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transform translate-x-20 -translate-y-20 transition-all duration-500 group-hover:translate-x-16 group-hover:-translate-y-16"></div>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transform transition-all duration-1000 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
                  </div>
                  
                  {/* Light shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out transform-gpu"></div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col items-center text-center relative h-full z-10">
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary/10 text-primary mb-6 transform transition-all duration-500 group-hover:translate-z-20 group-hover:translate-y-[-10px] group-hover:scale-110">
                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform transition-all duration-700 group-hover:scale-110">
                        <path d="M2 12h20" />
                        <path d="M12 2v20" />
                        <rect width="3" height="3" x="14" y="14" rx="1" />
                        <rect width="3" height="7" x="7" y="14" rx="1" />
                        <rect width="3" height="10" x="14" y="4" rx="1" />
                        <rect width="3" height="3" x="7" y="4" rx="1" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 transform transition-all duration-500 group-hover:translate-z-15 group-hover:translate-y-[-5px] group-hover:text-primary">Custom Web Applications</h3>
                    
                    <p className="text-muted-foreground transform transition-all duration-500 group-hover:translate-z-10 group-hover:text-foreground/80">
                      Tailored web applications that automate processes, improve efficiency, and solve complex business challenges.
                    </p>
                    
                    {/* Decorative elements with parallax effect */}
                    <div className="absolute right-4 bottom-4 w-16 h-16 opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:translate-z-5 group-hover:translate-x-2 group-hover:translate-y-2">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section ref={technologiesRef} className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies We Work With</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build powerful, scalable web solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#61DAFB]">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-sm font-medium">React</span>
            </div>
            
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#000000]">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-medium">Next.js</span>
            </div>
            
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#3178C6]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M10 8h4" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#38BDF8]">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#41B883]">
                  <polygon points="12 2 22 12 12 22 2 12 12 2" />
                  <polygon points="12 7 17 12 12 17 7 12 12 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Vue.js</span>
            </div>
            
            <div className="tech-icon flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#8511FA]">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="text-sm font-medium">Angular</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Process Section */}
      <section ref={processRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver high-quality web solutions that meet your business objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and requirements through in-depth consultations and research.
              </p>
            </div>
            
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Our designers create wireframes and prototypes focused on user experience, intuitive navigation, and visual appeal.
              </p>
            </div>
            
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-muted-foreground">
                Our developers bring the designs to life using clean, efficient code and the most appropriate technologies for your project.
              </p>
            </div>
            
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing & QA</h3>
              <p className="text-muted-foreground">
                Rigorous testing across devices and browsers ensures your website functions flawlessly and provides an optimal user experience.
              </p>
            </div>
            
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-muted-foreground">
                We handle the deployment process, ensuring a smooth and successful launch of your web application or website.
              </p>
            </div>
            
            <div className="process-step relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                6
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance & Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing maintenance, updates, and support to keep your web solution secure, up-to-date, and performing optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Portfolio Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our successful web development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden bg-muted/20 aspect-video shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
                  <h3 className="text-xl font-semibold text-white">Project {i}</h3>
                  <p className="text-white/80 text-sm mt-2">E-commerce website with custom product configurator</p>
                  <Button variant="outline" className="mt-4 self-start bg-white/10 text-white border-white/20 hover:bg-white/20">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button>
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Web Presence?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how our web development services can help your business achieve its digital goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
