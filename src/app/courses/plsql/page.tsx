"use client";

import React from "react";
import Script from "next/script";
import { generateCourseSchema } from "../schema";
import { motion } from "framer-motion";
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
  Info,
  Database,
  ListTree,
  ChevronRight,
  Code,
  Users,
  MessageSquare,
  Sparkles,
  BookOpen
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function PLSQLCourse() {
  // Reusable Framer Motion variants
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  // Generate structured data schema for this course
  const courseSchema = generateCourseSchema({
    name: "PL/SQL Training Program",
    description: "Master Oracle PL/SQL programming with our comprehensive training course. Learn SQL basics, advanced queries, stored procedures, functions, and database management.",
    url: "https://veltron.in/courses/plsql"
  });

  // Course curriculum modules based on the provided syllabus
  const modules = [
    {
      number: 1,
      title: "SQL Basics",
      topics: [
        "SQL Introduction",
        "SQL Operators",
        "ALL and ANY Operators"
      ],
      icon: <Database />
    },
    {
      number: 2,
      title: "Data Types & Commands",
      topics: [
        "Data Types",
        "SQL DDL & DML/TCL Commands"
      ],
      icon: <ListTree />
    },
    {
      number: 3,
      title: "Functions",
      topics: [
        "Single Row Functions",
        "Aggregate Functions (avg(), GROUP BY, and HAVING)",
        "Analytical Functions"
      ],
      icon: <Code />
    },
    {
      number: 4,
      title: "Transactions & Access Control",
      topics: [
        "TCL & DCL",
        "DTT"
      ],
      icon: <Database />
    },
    {
      number: 5,
      title: "Constraints and External Operations",
      topics: [
        "Constraints",
        "External Tables",
        "SQL Loader"
      ],
      icon: <Database />
    },
    {
      number: 6,
      title: "Advanced SQL",
      topics: [
        "Joins",
        "Views",
        "Synonyms",
        "Materialized Views",
        "Subqueries",
        "Table Partitioning",
        "Indexing"
      ],
      icon: <Database />
    },
    {
      number: 7,
      title: "Basics & Blocks",
      topics: [
        "Variable Declaration",
        "Data Types, Records, Nested Blocks",
        "Control Statements"
      ],
      icon: <Code />
    },
    {
      number: 8,
      title: "Collections & Execution",
      topics: [
        "PL/SQL Collections - Nested Tables & Index-By Tables",
        "PL/SQL Collections - VARRAY",
        "EXECUTE IMMEDIATE",
        "Stored Procedures",
        "PRAGMA AUTONOMOUS TRANSACTION"
      ],
      icon: <ListTree />
    },
    {
      number: 9,
      title: "Modular Programming",
      topics: [
        "Functions",
        "Packages"
      ],
      icon: <Code />
    },
    {
      number: 10,
      title: "Advanced Topics",
      topics: [
        "DBMS Jobs",
        "UTL File",
        "XML File Handling",
        "Exception Handling"
      ],
      icon: <Database />
    },
    {
      number: 11,
      title: "Cursors & Triggers",
      topics: [
        "Cursor",
        "REF Cursor",
        "Bulk Collect, Bind, Save Exceptions",
        "Triggers",
        "External Table Functions"
      ],
      icon: <Code />
    }
  ];

  return (
    <>
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
              Oracle PL/SQL Programming
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master database programming and management with Oracle PL/SQL
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
                  <Database className="h-6 w-6" />
                </div>
                <span>Comprehensive Database Programming: From basics to advanced concepts</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UserCheck className="h-6 w-6" />
                </div>
                <span>Learn from Industry Experts: Oracle Certified Professionals</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <span>Hands-on Experience: Real-world Database Projects</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <span>Career Growth: Essential Skills for Database Developers and Administrators</span>
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

      {/* ================= Overview Section ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            {...fadeIn(0)}
          >
            Program Overview
          </motion.h2>

          <motion.div 
            className="prose prose-lg mx-auto text-muted-foreground"
            {...fadeIn(0.1)}
          >
            <p>
              Our comprehensive PL/SQL training program is designed to take you from SQL basics to advanced PL/SQL programming concepts. Whether you're aspiring to become a database developer, administrator, or data analyst, this course provides the essential skills needed to excel in database programming and management.
            </p>
            <p>
              Through hands-on exercises and real-world projects, you'll master SQL queries, stored procedures, functions, triggers, and advanced database concepts that are in high demand across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= Curriculum Section ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            {...fadeIn(0)}
          >
            Course Curriculum
          </motion.h2>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <motion.div 
                key={module.number}
                className="bg-card border border-border rounded-lg overflow-hidden"
                {...fadeIn(0.1 + index * 0.05)}
              >
                <div className="flex items-center gap-4 p-4 bg-muted/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {module.icon}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Module {module.number}</span>
                    <h3 className="text-xl font-semibold">{module.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Career Opportunities ================= */}
      <section className="container mx-auto px-4 mb-16 bg-muted/10 py-12 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            {...fadeIn(0)}
          >
            Career Opportunities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border shadow-sm"
              {...fadeIn(0.1)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Developer</h3>
              <p className="text-muted-foreground">Design and develop database structures, stored procedures, and triggers for enterprise applications.</p>
            </motion.div>

            <motion.div 
              className="bg-card p-6 rounded-lg border border-border shadow-sm"
              {...fadeIn(0.2)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Administrator</h3>
              <p className="text-muted-foreground">Manage, maintain, and secure enterprise database systems with advanced PL/SQL skills.</p>
            </motion.div>

            <motion.div 
              className="bg-card p-6 rounded-lg border border-border shadow-sm"
              {...fadeIn(0.3)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
              <p className="text-muted-foreground">Build robust data access layers and database-driven applications with PL/SQL expertise.</p>
            </motion.div>

            <motion.div 
              className="bg-card p-6 rounded-lg border border-border shadow-sm"
              {...fadeIn(0.4)}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
              <p className="text-muted-foreground">Write complex SQL queries to extract, transform, and analyze large datasets for business intelligence.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Enquiry Form ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            {...fadeIn(0)}
          >
            Ready to Upskill?
          </motion.h2>
          
          <motion.div {...fadeIn(0.1)}>
            <EnquiryForm courseName="PL/SQL Training" />
          </motion.div>
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            {...fadeIn(0)}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            <motion.div 
              className="bg-card rounded-lg p-6 border border-border"
              {...fadeIn(0.1)}
            >
              <h3 className="text-xl font-semibold mb-2">What prerequisites are needed for this course?</h3>
              <p className="text-muted-foreground">Basic understanding of databases and some programming experience is helpful but not required. We start from the basics and progressively move to advanced topics.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-lg p-6 border border-border"
              {...fadeIn(0.2)}
            >
              <h3 className="text-xl font-semibold mb-2">How long is the training program?</h3>
              <p className="text-muted-foreground">The complete PL/SQL training program spans approximately 10-12 weeks with regular classes and hands-on projects.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-lg p-6 border border-border"
              {...fadeIn(0.3)}
            >
              <h3 className="text-xl font-semibold mb-2">Will I get a certificate upon completion?</h3>
              <p className="text-muted-foreground">Yes, upon successful completion of the course and projects, you will receive a course completion certificate that validates your PL/SQL skills.</p>
            </motion.div>
            
            <motion.div 
              className="bg-card rounded-lg p-6 border border-border"
              {...fadeIn(0.4)}
            >
              <h3 className="text-xl font-semibold mb-2">Is there any placement assistance?</h3>
              <p className="text-muted-foreground">Yes, we provide placement assistance through resume building, interview preparation, and connections with our hiring partners looking for database professionals.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* JSON-LD Schema */}
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      </div>
    </>
  );
}
