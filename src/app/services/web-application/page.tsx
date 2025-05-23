"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layers, 
  Cloud, 
  Lock, 
  Settings, 
  Activity, 
  Smartphone, 
  Globe,
  Server
} from "lucide-react";

// Animation variants for different elements
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function WebApplicationPage() {
  // Keep refs that are still used in JSX
  const featuresRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Register ScrollTrigger for any remaining GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Add a separate effect for the floating animation that doesn't depend on cleanup
  useEffect(() => {
    // Animate the floating elements
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
        
        {/* Code symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap">
            {[
              { symbol: '<div>', top: 65, left: 93 },
              { symbol: '</div>', top: 93, left: 56 },
              { symbol: '{ }', top: 88, left: 25 },
              { symbol: '( )', top: 84, left: 12 },
              { symbol: '=>', top: 57, left: 35 },
              { symbol: '/*', top: 75, left: 37 },
              { symbol: '*/', top: 64, left: 54 },
              { symbol: '// ', top: 97, left: 79 },
              { symbol: '!=', top: 15, left: 78 },
              { symbol: '==', top: 89, left: 4 },
              { symbol: '.js', top: 42, left: 11 }
            ].map((item, i) => (
              <div key={i} className="text-xl font-mono opacity-20" style={{ position: 'absolute', top: `${item.top}%`, left: `${item.left}%` }}>
                {item.symbol}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax Image Background with Zoom Effect */}
        <div 
          ref={parallaxRef} 
          className="absolute inset-0 w-full h-full bg-black/50 z-0"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`, // Subtle zoom effect on scroll
            transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
            style={{
              backgroundImage: "url('/images/web-application-hero.jpg')",
              filter: 'brightness(0.6)',
              transform: `translateY(${scrollY * 0.3}px)`, // Parallax effect
            }}
          ></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-20 py-24 mt-16">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-7xl sm:text-6xl font-bold mb-6 drop-shadow-md">
                Enterprise Web Application Development
              </h1>
              <p className="text-xl text-zinc-200 mb-8 drop-shadow-sm">
                Custom web application solutions designed to streamline business operations, enhance user experiences, and drive digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20 text-white" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="app-preview relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-xl blur-lg"></div>
              <div className="relative w-full max-w-[520px] mx-auto aspect-[16/10] bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-muted/30 overflow-hidden">
                {/* Dashboard Header */}
                <div className="w-full h-12 bg-zinc-900 flex items-center justify-between px-4 border-b border-zinc-800/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-medium text-zinc-300">Enterprise Dashboard</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-primary/50"></div>
                    <div className="w-4 h-4 rounded-full bg-muted/30"></div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="grid grid-cols-12 h-[calc(100%-3rem)]">
                  {/* Sidebar */}
                  <div className="col-span-2 bg-zinc-900 border-r border-zinc-800/50 py-4 px-2">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-sm">VT</div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { active: true, icon: <div className="w-4 h-4 rounded-sm bg-primary"></div> },
                        { active: false, icon: <div className="w-4 h-4 rounded-sm bg-zinc-700"></div> },
                        { active: false, icon: <div className="w-4 h-4 rounded-sm bg-zinc-700"></div> },
                        { active: false, icon: <div className="w-4 h-4 rounded-sm bg-zinc-700"></div> },
                        { active: false, icon: <div className="w-4 h-4 rounded-sm bg-zinc-700"></div> },
                        { active: false, icon: <div className="w-4 h-4 rounded-sm bg-zinc-700"></div> }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-center p-2 rounded-md ${item.active ? 'bg-zinc-800' : 'hover:bg-zinc-800/50 transition-colors'}`}>
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="col-span-10 bg-zinc-900/70 p-4 overflow-hidden">
                    {/* Top Stats */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {[
                        { color: 'bg-blue-500', label: 'Users', value: '8.549k' },
                        { color: 'bg-emerald-500', label: 'Revenue', value: '$42.5k' },
                        { color: 'bg-yellow-500', label: 'Tasks', value: '245' },
                        { color: 'bg-purple-500', label: 'Active Projects', value: '12' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-zinc-800/70 rounded-md p-3 border border-zinc-700/50 flex items-start">
                          <div className={`w-8 h-8 ${stat.color} rounded-md flex items-center justify-center mr-3`}>
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <div>
                            <div className="text-xs text-zinc-400">{stat.label}</div>
                            <div className="text-sm font-semibold text-white">{stat.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Charts Row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {/* Area Chart */}
                      <div className="col-span-2 bg-zinc-800/70 rounded-md p-3 border border-zinc-700/50">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-xs font-medium text-zinc-300">Performance Analytics</div>
                          <div className="flex space-x-2">
                            <div className="w-6 h-4 bg-zinc-700 rounded"></div>
                            <div className="w-6 h-4 bg-zinc-700 rounded"></div>
                          </div>
                        </div>
                        <div className="h-24 relative">
                          {/* Chart mockup */}
                          <div className="absolute bottom-0 left-0 w-full h-[80%] flex items-end">
                            <div className="w-full flex items-end justify-between">
                              {[20, 45, 28, 80, 50, 65, 75, 35, 55, 70, 60, 90].map((h, i) => (
                                <div key={i} className="w-[6%] bg-primary/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                              ))}
                            </div>
                            {/* Trend line */}
                            <div className="absolute top-[25%] left-0 w-full h-[2px] bg-primary/30 z-10"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Donut Chart */}
                      <div className="bg-zinc-800/70 rounded-md p-3 border border-zinc-700/50">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-xs font-medium text-zinc-300">Usage Metrics</div>
                          <div className="w-4 h-4 bg-zinc-700 rounded"></div>
                        </div>
                        <div className="flex items-center justify-center h-24">
                          <div className="relative w-16 h-16 rounded-full">
                            <div className="absolute inset-0 border-[3px] border-primary rounded-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
                            <div className="absolute inset-0 border-[3px] border-emerald-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                            <div className="absolute inset-0 border-[3px] border-blue-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0, 20% 0, 0 20%, 0 50%)' }}></div>
                            <div className="absolute inset-[3px] bg-zinc-900 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Data Table */}
                    <div className="bg-zinc-800/70 rounded-md border border-zinc-700/50 overflow-hidden">
                      <div className="p-3 border-b border-zinc-700/50 flex justify-between items-center">
                        <div className="text-xs font-medium text-zinc-300">Recent Transactions</div>
                        <div className="w-20 h-4 bg-zinc-700 rounded"></div>
                      </div>
                      <div className="divide-y divide-zinc-700/50">
                        <div className="grid grid-cols-5 p-2 text-[0.65rem] font-medium text-zinc-400">
                          <div>ID</div>
                          <div>Customer</div>
                          <div>Date</div>
                          <div>Amount</div>
                          <div>Status</div>
                        </div>
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="grid grid-cols-5 p-2 text-[0.65rem] text-zinc-300">
                            <div className="w-6 h-2 bg-zinc-700 rounded"></div>
                            <div className="w-16 h-2 bg-zinc-700 rounded"></div>
                            <div className="w-12 h-2 bg-zinc-700 rounded"></div>
                            <div className="w-10 h-2 bg-zinc-700 rounded"></div>
                            <div className="w-4 h-2 bg-emerald-500/70 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
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
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our web applications are built with advanced features designed to meet complex business requirements and deliver exceptional user experiences
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
                  <p className="text-muted-foreground">
                    Implement robust authentication systems with role-based access control, single sign-on, and multi-factor authentication.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data Integration</h3>
                  <p className="text-muted-foreground">
                    Seamlessly connect with existing systems and databases to consolidate data and streamline operations across your organization.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                  <p className="text-muted-foreground">
                    Build on cloud-native architectures that can scale effortlessly as your business grows and user demands increase.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                  <p className="text-muted-foreground">
                    Create applications that deliver a consistent experience across all devices, from desktop computers to mobile phones.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights with built-in analytics dashboards and reporting tools that track key performance indicators.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={cardVariant}>
              <Card className="feature-card border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Automation & Workflows</h3>
                  <p className="text-muted-foreground">
                    Implement custom business logic and automated workflows to reduce manual tasks and increase operational efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section ref={technologiesRef} className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge Technology Stack</h2>
              <p className="text-muted-foreground mb-8">
                We leverage the latest technologies and frameworks to build robust, high-performance web applications that meet your business requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Frameworks</h3>
                    <p className="text-muted-foreground">
                      React, Angular, Vue.js for frontend, and Node.js, Django, Laravel, and .NET for backend development.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Database Solutions</h3>
                    <p className="text-muted-foreground">
                      SQL databases like PostgreSQL and MySQL, or NoSQL solutions like MongoDB and Firebase for flexible data storage.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
                    <p className="text-muted-foreground">
                      AWS, Azure, and Google Cloud for reliable, scalable hosting with global content delivery networks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: <Globe className="w-6 h-6 text-primary" />, name: "React" },
                { icon: <Globe className="w-6 h-6 text-primary" />, name: "Angular" },
                { icon: <Globe className="w-6 h-6 text-primary" />, name: "Vue.js" },
                { icon: <Server className="w-6 h-6 text-primary" />, name: "Node.js" },
                { icon: <Database className="w-6 h-6 text-primary" />, name: "MongoDB" },
                { icon: <Database className="w-6 h-6 text-primary" />, name: "PostgreSQL" },
                { icon: <Cloud className="w-6 h-6 text-primary" />, name: "AWS" },
                { icon: <Cloud className="w-6 h-6 text-primary" />, name: "Azure" },
                { icon: <Globe className="w-6 h-6 text-primary" />, name: "Next.js" }
              ].map((tech, i) => (
                <motion.div 
                  key={i} 
                  variants={cardVariant}
                  className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-3">
                    {tech.icon}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section ref={processRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collaborative, transparent approach focused on delivering quality solutions that meet your business objectives
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              <div className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business requirements, user needs, and project goals through workshops and detailed analysis.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10 float-element">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="relative order-1 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10 float-element">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2">
                  <h3 className="text-2xl font-bold mb-3">Design & Architecture</h3>
                  <p className="text-muted-foreground">
                    We create detailed wireframes, UI/UX designs, and system architecture that form the blueprint for development.
                  </p>
                </div>
              </div>
              
              <div className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Agile Development</h3>
                  <p className="text-muted-foreground">
                    Our development team uses agile methodologies to build your application in iterative cycles, allowing for regular feedback and adjustments.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10 float-element">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="relative order-1 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10 float-element">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-2">
                  <h3 className="text-2xl font-bold mb-3">Testing & Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Rigorous testing ensures your application is secure, reliable, and performs optimally under various conditions.
                  </p>
                </div>
              </div>
              
              <div className="process-step relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3">Deployment & Maintenance</h3>
                  <p className="text-muted-foreground">
                    We handle the deployment process and provide ongoing support to ensure your application continues to meet evolving business needs.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center z-10 float-element">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="relative p-8 md:p-12 rounded-xl overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 rounded-xl blur-lg"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how a custom web application can help streamline your operations and drive business growth.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
