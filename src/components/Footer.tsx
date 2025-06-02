"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    setIsVisible(true);

    // Animate on scroll into view
    const handleScroll = () => {
      const el = document.getElementById("site-footer");
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="site-footer"
      className="bg-background border-t border-white/10 py-12 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div
          className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-40 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: '12s' }}
        />
      </div>

      {/* Main grid: About / Services / Training / Contact */}
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-center">
          <div className="relative h-20 w-36 group">
            <Image
              src="/veltron-logo.png"
              alt="Veltron Logo"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -rotate-15 group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
          </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-md font-bold bg-clip-text pl-2 text-center text-transparent bg-gradient-to-r from-white via-white/80 to-white animate-pulse"
            style={{ animationDuration: '3s' }}
          >
            Veltron Sysmatic Solution Pvt Ltd
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-center pl-2 text-muted-foreground max-w-xs mx-auto"
          >
            Empowering Businesses With Innovation & Strategic Empowerment.
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-4"
        >
          <h3 className="font-medium text-lg pl-4">Services</h3>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            <li><Link href="/services/data-analytics" className="hover:text-primary" aria-label="Explore our Data Analytics services">Data Analytics</Link></li>
            <li><Link href="/services/web-development" className="hover:text-primary" aria-label="Learn about our Web Development services">Web Development</Link></li>
            <li><Link href="/services/web-application" className="hover:text-primary" aria-label="View our Web Application development offerings">Web Application</Link></li>
            <li><Link href="/services/seo-services" className="hover:text-primary" aria-label="Discover our SEO Services">SEO Services</Link></li>
            <li><Link href="/services/digital-marketing" className="hover:text-primary" aria-label="Learn about our Digital Marketing services">Digital Marketing</Link></li>
            <li><Link href="/services/mobile-app-development" className="hover:text-primary" aria-label="Explore our Mobile App Development services">Mobile App Development</Link></li>
            <li><Link href="/services/corporate-training" className="hover:text-primary" aria-label="View our Corporate Training programs">Corporate Training</Link></li>
          </ul>
        </motion.div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="font-medium text-lg pl-4">Courses</h3>
          <ul className="space-y-2 text-sm text-muted-foreground pl-4">
            {/* Data Analytics */}
            <li><Link href="/courses/data-analytics" className="hover:text-primary" aria-label="Enroll in Data Analytics course">Data Analytics</Link></li>
            
            {/* Programming & Development */}
            <li><Link href="/courses/python" className="hover:text-primary" aria-label="Learn Python programming from basics to advanced">Python</Link></li>
            <li><Link href="/courses/dsa" className="hover:text-primary" aria-label="Master algorithms and data structures">DSA Training</Link></li>
            
            {/* Web Development */}
            <li><Link href="/courses/angular" className="hover:text-primary" aria-label="Master modern frontend development with Angular">Angular</Link></li>
            <li><Link href="/courses/react" className="hover:text-primary" aria-label="Build dynamic UIs with React">React</Link></li>
            <li><Link href="/courses/java-fullstack" className="hover:text-primary" aria-label="Full stack development with Java technologies">Java Fullstack</Link></li>
            
            {/* DevOps & Cloud */}
            <li><Link href="/courses/aws" className="hover:text-primary" aria-label="Master cloud computing with AWS">AWS</Link></li>
            
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="space-y-4"
        >
          <h3 className="font-medium text-lg pl-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-muted-foreground pl-4">
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> +91 93451 11211
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> info@veltron.in
            </motion.li>
            <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              330, 2nd Street, Swamy Ramalingam Colony, Kolathur, Chennai, Tamil Nadu 600110
            </motion.li>
          </ul>

          <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300">
            <Link href="/contact" aria-label="Contact Veltron for services or training inquiries">Contact Us →</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mt-8 pt-8 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-sm text-muted-foreground px-2 md:px-0">
            © {new Date().getFullYear()} Veltron Sysmatic Solution Pvt Ltd. All rights reserved.
          </div>
          </div>
      </motion.div>
    </footer>
  );
}
