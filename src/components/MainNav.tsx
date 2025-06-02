"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Globe, Search, Megaphone, MonitorSmartphone, 
  Smartphone, GraduationCap, BookOpen, Database, LineChart, 
  PieChart, Code, Brackets, Braces, Server, Cloud, Layout, 
  FileCode, ChevronUp, ChevronDown, Menu, X 
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// ChevronIcon component for navigation menu
const ChevronIcon = ({ open }: { open: boolean }) => (
  open ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />
);

// Define services and courses data with icons
const services = [
  { 
    name: "Data Analytics", 
    href: "/services/data-analytics", 
    description: "Transform data into actionable insights",
    icon: <BarChart3 className="h-5 w-5" />
  },
  { 
    name: "Web Development", 
    href: "/services/web-development", 
    description: "Custom websites with modern technologies",
    icon: <Globe className="h-5 w-5" />
  },
  { 
    name: "SEO Services", 
    href: "/services/seo-services", 
    description: "Improve visibility and organic traffic",
    icon: <Search className="h-5 w-5" />
  },
  { 
    name: "Digital Marketing", 
    href: "/services/digital-marketing", 
    description: "Strategic marketing for measurable results",
    icon: <Megaphone className="h-5 w-5" />
  },
  { 
    name: "Web Application", 
    href: "/services/web-application", 
    description: "Enterprise-grade web applications",
    icon: <MonitorSmartphone className="h-5 w-5" />
  },
  { 
    name: "Mobile App Development", 
    href: "/services/mobile-app-development", 
    description: "Native and cross-platform mobile apps",
    icon: <Smartphone className="h-5 w-5" />
  },
  { 
    name: "Corporate Training", 
    href: "/services/corporate-training", 
    description: "Professional upskilling programs",
    icon: <GraduationCap className="h-5 w-5" />
  },
];

const courses = [
  { name: "Data Analytics", href: "/courses/data-analytics", icon: <BarChart3 className="h-6 w-6" /> },
  { name: "Tableau", href: "/courses#tableau", icon: <PieChart className="h-6 w-6" /> },
  { name: "Power BI", href: "/courses#power-bi", icon: <LineChart className="h-6 w-6" /> },
  { name: "SQL", href: "/courses#sql", icon: <Database className="h-6 w-6" /> },
  { name: "Python", href: "/courses#python", icon: <Code className="h-6 w-6" /> },
  { name: "React", href: "/courses#react", icon: <Brackets className="h-6 w-6" /> },
  { name: "Angular", href: "/courses#angular", icon: <Braces className="h-6 w-6" /> },
  { name: "Java Fullstack", href: "/courses#java-fullstack", icon: <FileCode className="h-6 w-6" /> },
  { name: "Python Fullstack", href: "/courses#python-fullstack", icon: <Code className="h-6 w-6" /> },
  { name: ".NET - Complete", href: "/courses#dotnet", icon: <Braces className="h-6 w-6" /> },
  { name: "DevOps", href: "/courses#devops", icon: <Server className="h-6 w-6" /> },
  { name: "AWS", href: "/courses#aws", icon: <Cloud className="h-6 w-6" /> },
  { name: "Azure", href: "/courses#azure", icon: <Cloud className="h-6 w-6" /> },
  { name: "UI UX - Complete", href: "/courses#ui-ux", icon: <Layout className="h-6 w-6" /> },
  { name: "Salesforce - Complete", href: "/courses#salesforce", icon: <Database className="h-6 w-6" /> },
];

// Icons for course categories
const categoryIcons: Record<string, React.ReactNode> = {
  "Data & Analytics": <BarChart3 className="h-5 w-5" />,
  "Web Development": <Globe className="h-5 w-5" />,
  "DevOps & More": <MonitorSmartphone className="h-5 w-5" />
};

// Group courses by category
const courseCategories: Record<string, string[]> = {
  "Data & Analytics": ["Data Analytics", "Tableau", "Power BI", "SQL", "Python"],
  "Web Development": ["React", "Angular", "Java Fullstack", "Python Fullstack", ".NET - Complete"],
  "DevOps & More": ["DevOps", "AWS", "Azure", "UI UX - Complete", "Salesforce - Complete"]
};

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Enhanced function to prevent scroll propagation completely
  const preventScrollPropagation = (e: React.WheelEvent) => {
    e.stopPropagation();
    
    // Get the current target element
    const element = e.currentTarget as HTMLElement;
    const { scrollTop, scrollHeight, clientHeight } = element;
    
    // Check if scroll reached the top or bottom boundary
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollHeight - scrollTop === clientHeight;
    
    // Prevent default behavior only if trying to scroll beyond boundaries
    if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
      e.preventDefault();
    }
  };

  // Function to handle menu item click and close dropdown
  const handleItemClick = () => {
    setActiveItem(undefined);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b-0 bg-transparent backdrop-blur-sm backdrop-filter">
      {/* Gradient background effect that appears on scroll */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/70 opacity-90 pointer-events-none"></div>
      <div className="container mx-auto px-4" ref={navRef}>
        <div className="flex h-20 items-center justify-between relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-10" aria-label="Veltron Sysmatic Solution - Home Page">
            <div className="relative h-10 w-24 transition-transform duration-300 group-hover:scale-105">
              <Image src="/veltron-logo.png" alt="Veltron Logo" fill priority className="object-contain" />
            </div>
            <div className="overflow-hidden">
              <span className="text-4xl font-extrabold text-shine ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex" value={activeItem} onValueChange={setActiveItem}>
            <NavigationMenuList className="bg-transparent p-1 rounded-full">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full bg-background/10 hover:bg-background/30 hover:text-primary data-[active]:bg-primary/90 data-[active]:text-primary-foreground font-medium",
                    pathname === "/" && "bg-primary/90 text-primary-foreground"
                  )}
                >
                  <Link href="/" aria-label="Go to Veltron Home page">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="rounded-full bg-background/10 hover:bg-background/30 hover:text-primary data-[state=open]:bg-primary/90 data-[state=open]:text-primary-foreground font-medium"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-xl shadow-black/5 z-50 w-screen max-w-[94vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden">
                  <div 
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 services-dropdown-content" 
                    style={{ 
                      maxHeight: 'calc(70vh - 20px)', 
                      overflowY: 'auto', 
                      scrollbarWidth: 'thin',
                      overscrollBehavior: 'contain'
                    }}
                    onWheel={preventScrollPropagation}
                  >
                    <div className="col-span-full mb-2">
                      <h3 className="text-base font-semibold text-primary/80">Our Services</h3>
                      <p className="text-xs text-muted-foreground">Comprehensive technology solutions</p>
                    </div>

                    {services.map(service => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-start p-3 rounded-md hover:bg-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/10 group"
                        onClick={handleItemClick}
                      >
                        <div className="h-10 w-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-primary shrink-0 shadow-inner transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary/40 group-hover:to-primary/20 group-hover:scale-110">
                          {service.icon}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">{service.name}</div>
                          <p className="text-xs text-muted-foreground">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
                {/* Courses Link - Changed from dropdown to direct link */}
                <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full bg-background/10 hover:bg-background/30 hover:text-primary data-[active]:bg-primary/90 data-[active]:text-primary-foreground font-medium",
                    pathname.includes("/courses") && "bg-primary/90 text-primary-foreground"
                  )}
                >
                  <Link href="/courses" aria-label="Browse all courses">Courses</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full bg-background/10 hover:bg-background/30 hover:text-primary data-[active]:bg-primary/90 data-[active]:text-primary-foreground font-medium",
                    pathname === "/about" && "bg-primary/90 text-primary-foreground"
                  )}
                >
                  <Link href="/about" aria-label="About Veltron Sysmatic Solution">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-full bg-background/10 hover:bg-background/30 hover:text-primary data-[active]:bg-primary/90 data-[active]:text-primary-foreground font-medium",
                    pathname === "/contact" && "bg-primary/90 text-primary-foreground"
                  )}
                >
                  <Link href="/contact" aria-label="Contact Veltron Sysmatic Solution">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="flex items-center justify-center p-2 rounded-md hover:bg-accent/50"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 px-1 space-y-4 bg-background/60 backdrop-blur-md rounded-xl mt-3 border border-white/10 shadow-lg">
                <MobileNavItem href="/" active={pathname === "/"}>Home</MobileNavItem>
                
                {/* Mobile Courses Link - Changed from accordion to direct link */}
                <MobileNavItem 
                  href="/courses" 
                  active={pathname.includes("/courses")} 
                  icon={<BookOpen className="h-4 w-4 mr-2" />}
                >
                  Courses
                </MobileNavItem>
                
                <MobileAccordion 
                  title="Services" 
                  icon={<Globe className="h-4 w-4 mr-2" />}
                  onItemClick={() => setMobileMenuOpen(false)}
                >
                  <div className="pl-4 space-y-2 py-2">
                    {services.map(s => (
                      <Link 
                        key={s.name} 
                        href={s.href} 
                        className="flex items-center py-1 text-sm hover:text-primary transition-colors"
                        aria-label={`${s.name} - ${s.description}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="h-5 w-5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-primary mr-2 shrink-0" aria-hidden="true">
                          {s.icon}
                        </div>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </MobileAccordion>
                
                <MobileNavItem href="/about" active={pathname === "/about"}>About</MobileNavItem>
                <MobileNavItem href="/contact" active={pathname === "/contact"}>Contact</MobileNavItem>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-medium py-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                    <Link href="/contact" aria-label="Contact Veltron to get started with our services">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// Reusable subcomponents
function MobileNavItem({ href, active, children, icon }: { href: string; active?: boolean; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Link href={href} className={cn(
      "block py-3 px-4 rounded-lg transition-all duration-200 flex items-center",
      active 
        ? "bg-gradient-to-r from-primary/20 to-primary/5 text-primary font-medium border-l-4 border-primary pl-5" 
        : "hover:bg-accent/20 hover:text-accent-foreground hover:pl-5"
    )}>
      {icon && icon}
      {children}
    </Link>
  );
}

interface AccordionProps { 
  title: string; 
  icon?: React.ReactNode; 
  children: React.ReactNode; 
  onItemClick?: () => void; 
}

function MobileAccordion({ title, icon, children, onItemClick }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to handle child clicks and close the accordion
  const handleChildClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };
  
  // Clone children and add the click handler
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        onClick: handleChildClick 
      });
    }
    return child;
  });
  
  return (
    <div className="border-b border-white/10 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2 hover:bg-accent/30 rounded-md transition-colors"
      >
        <span className="font-medium flex items-center">
          {icon && icon}
          {title}
        </span>
        <span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {childrenWithProps}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
