"use client";

import React from "react";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/EnquiryForm";
import {
  GraduationCap,
  UserCheck,
  Layers,
  Gift,
  Trophy,
  MapPin,
  Laptop,
  Award,
  Briefcase,
  Calendar,
  Info,
  ChevronRight,
  Users,
  MessageSquare,
  Code,
  Layout,
  Globe,
  Database,
  FileCode,
  Server,
  Phone,
  Repeat,
  Zap,
  LayoutGrid,
  Brackets,
  Braces,
  Sparkles,
  TestTube,
  LineChart,
  Router,
  Rocket,
} from "lucide-react";

export default function AngularCourse() {
  // Reusable Framer Motion variants
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  return (
    <div className="relative overflow-hidden bg-background pb-20">
      {/* ================= Header Section ================= */}
      <header className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Training Program
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Angular Web Development
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master modern frontend development with Google's powerful Angular framework.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <span>Skills-First Approach: Your degree and marks don't define your potential</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UserCheck className="h-6 w-6" />
                </div>
                <span>Learn from Industry Experts: Certified Angular Developers & Working Professionals</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <span>Hands-on Experience: Build Real-world Angular Applications</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Gift className="h-6 w-6" />
                </div>
                <span>Added Value: TypeScript Mastery Included</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <span>Career Growth: Guaranteed 10+ Professional Skills for Your Resume</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <span>Clear Path Forward: Comprehensive Career Roadmap for Angular Developers</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://wa.me/919345111211"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                Enquire Now
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ================= Highlights Bar ================= */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Laptop className="h-6 w-6" />
            </div>
            <span className="font-medium">Hands-on Training</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Award className="h-6 w-6" />
            </div>
            <span className="font-medium">Industry Certification</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <UserCheck className="h-6 w-6" />
            </div>
            <span className="font-medium">Expert Instructors</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Briefcase className="h-6 w-6" />
            </div>
            <span className="font-medium">Job Placement Assistance</span>
          </motion.div>
        </div>
      </div>

      {/* ================= Program Overview ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto bg-background/50 border border-border/30 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Info className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Program Overview</h2>
          </div>
          <p className="text-muted-foreground mb-3">
            A comprehensive professional training on Angular, TypeScript, RxJS, and modern web development practices—
            essential skills for the professional frontend developer.
          </p>
          <p className="text-muted-foreground">
            Our industry-aligned curriculum ensures you're ready to build enterprise-grade single-page applications.
          </p>
        </div>
      </section>
      
      {/* ================= Angular Module ================= */}
      <div className="container mx-auto px-4 mb-16">
        <motion.section
          id="angular-intro"
          className="mb-12 bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Brackets className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Angular Framework</h2>
            </div>

            <div className="ml-0 md:ml-16">
              <h3 className="text-xl font-semibold mb-3">What is Angular?</h3>
              <p className="text-muted-foreground mb-4">
                Angular is a powerful TypeScript-based framework for building single-page applications (SPAs) and enterprise-scale web applications with a component-based architecture.
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You create reusable components that encapsulate functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You design robust applications with TypeScript's type safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You manage data flow with reactive programming patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You build performant applications with Angular's change detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You create seamless user experiences with advanced routing capabilities</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/5 p-4 rounded-lg border border-border/50">
                <p className="text-card-foreground">
                  Learn Angular from the ground up, mastering component architecture, services, dependency injection,
                  state management, routing, and reactive programming with RxJS. Develop skills to build enterprise-grade
                  single-page applications that are maintainable, testable, and scalable.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Layout className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Topics Covered</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Introduction to Angular & TypeScript</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Component Architecture & Lifecycle</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Directives, Pipes & Template Syntax</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Services & Dependency Injection</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reactive Programming with RxJS</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Forms & Validation (Template & Reactive)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Routing & Navigation</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Skills You&apos;ll Gain</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Angular component development</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>TypeScript & static typing</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reactive programming patterns</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>State management & data flow</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>SPA architecture & best practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* ================= Core Modules Side by Side ================= */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Core Angular Technologies & Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* TypeScript Module */}
          <motion.section
            id="typescript"
            {...fadeIn(0.1)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">TypeScript</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. TypeScript Fundamentals</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Static Typing & Type Safety</li>
                  <li>Interfaces & Type Aliases</li>
                  <li>Classes & Access Modifiers</li>
                  <li>Generics & Advanced Types</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Object-Oriented Concepts</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Inheritance & Polymorphism</li>
                  <li>Encapsulation & Abstraction</li>
                  <li>Decorators & Metadata</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Modern JavaScript Features</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>ES6+ Syntax & Features</li>
                  <li>Modules & Namespaces</li>
                  <li>Async Programming Patterns</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Angular Components Module */}
          <motion.section
            id="components"
            {...fadeIn(0.2)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <LayoutGrid className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Components & UI</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Component Architecture</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Component Lifecycle Hooks</li>
                  <li>Component Communication</li>
                  <li>Content Projection</li>
                  <li>Dynamic Components</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Templates & Styling</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Template Syntax & Directives</li>
                  <li>Angular Pipes</li>
                  <li>Component Styling & View Encapsulation</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. UI Libraries Integration</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Angular Material</li>
                  <li>Bootstrap with Angular</li>
                  <li>Custom UI Components</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* RxJS Module */}
          <motion.section
            id="rxjs"
            {...fadeIn(0.3)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Repeat className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">RxJS & State</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Reactive Programming</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Observables & Subscribers</li>
                  <li>Subjects & BehaviorSubjects</li>
                  <li>Operators & Pipeable Operations</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. State Management</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Services & Singleton Pattern</li>
                  <li>State Storage Patterns</li>
                  <li>NgRx Store (Introduction)</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Async Data Handling</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>HTTP Client & Interceptors</li>
                  <li>Error Handling Strategies</li>
                  <li>Caching & Performance Optimization</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Advanced Features Module */}
          <motion.section
            id="advanced"
            {...fadeIn(0.4)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Advanced Features</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Routing & Navigation</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Route Configuration & Guards</li>
                  <li>Lazy Loading & Preloading</li>
                  <li>Route Parameters & Resolvers</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Forms & Validation</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Template-driven Forms</li>
                  <li>Reactive Forms</li>
                  <li>Custom Validators & Async Validation</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Testing & Deployment</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Unit Testing with Jasmine & Karma</li>
                  <li>E2E Testing with Protractor/Cypress</li>
                  <li>Deployment Strategies & CI/CD</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* ================= Course Structure ================= */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          className="max-w-3xl mx-auto bg-background/50 border border-border/30 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Layers className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Course Structure</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Learning Format</h3>
                <p className="text-sm text-muted-foreground">Live Online Training + Hands-on Projects + Assignments</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Duration</h3>
                <p className="text-sm text-muted-foreground">12 Weeks (60+ Hours of Live Sessions)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileCode className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Projects</h3>
                <p className="text-sm text-muted-foreground">5+ Real-world Projects & Case Studies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= Career Opportunities ================= */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Career Opportunities</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Angular developers are in high demand across industries. After completing this course, you'll be qualified for roles such as:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Frontend Developer</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Angular Specialist</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <span>UI Developer</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/50">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Full Stack Developer</span>
            </div>
          </div>
          
          <div className="bg-background/50 p-4 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Average Salary Range:</strong> ₹5-15 LPA depending on experience and location
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* ================= FAQs ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            <motion.div 
              className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">Is prior programming experience required?</h3>
              <p className="text-muted-foreground">Basic knowledge of HTML, CSS, and JavaScript is recommended. We'll cover TypeScript and Angular fundamentals from the ground up, but familiarity with web development concepts will help you progress faster.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">How is this course different from free online tutorials?</h3>
              <p className="text-muted-foreground">Our course offers live instruction from industry professionals, hands-on projects with real-world applications, personalized feedback, and career guidance. You'll build a comprehensive portfolio and gain skills that are directly applicable to enterprise-level development.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">Will I get a certificate after completing the course?</h3>
              <p className="text-muted-foreground">Yes, you'll receive an industry-recognized certificate upon successful completion of the course, including all assignments and projects. This certificate validates your proficiency in Angular development and can be added to your resume and LinkedIn profile.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">Do you provide job placement assistance?</h3>
              <p className="text-muted-foreground">Yes, we offer job placement assistance including resume building, interview preparation, and connections with our hiring partners. While we cannot guarantee job placement, our career services team will work with you to maximize your opportunities in the job market.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* ================= CTA Section ================= */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div 
          className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl p-8 shadow-lg border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Ready to Become an Angular Expert?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to enquire about our Angular course or chat directly with a course advisor
            </p>
          </div>
          <EnquiryForm courseName="Angular" />
        </motion.div>
      </section>
    </div>
  );
}
