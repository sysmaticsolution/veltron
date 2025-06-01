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
  BarChart3,
  ListTree,
  ChevronRight,
  Database,
  LineChart,
  PieChart,
  Code,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function DataAnalyticsCourse() {
  // Reusable Framer Motion variants
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: "easeOut" },
  });

  // Generate structured data schema for this course
  const courseSchema = generateCourseSchema({
    name: "Data Analytics Training",
    description: "Master Data Analytics with our comprehensive training program in Chennai. Learn data visualization, statistical analysis, and business intelligence from industry experts.",
    url: "https://veltron.in/courses/data-analytics"
  });

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
              Data Analytics & Business Intelligence
            </motion.h2>

            {/* Tagline */}
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master the tools and technologies to turn raw data into actionable insights.
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
                <span>Learn from Industry Experts: Microsoft Certified Data Analysts & Working Professionals</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <span>Hands-on Experience: Work on Real-world Projects</span>
              </div>
              <div className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Gift className="h-6 w-6" />
                </div>
                <span>Added Value: Complimentary Course Included</span>
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
                <span>Clear Path Forward: Comprehensive Career Roadmap for Freshers</span>
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
            A comprehensive professional training on Data Analytics, Business Intelligence Tools, SQL, and Python—
            essential skills for the modern data professional.
          </p>
          <p className="text-muted-foreground">
            Our industry-aligned curriculum ensures you're ready for real-world challenges.
          </p>
        </div>
      </section>

      {/* ================= Data Analytics Module ================= */}
      <div className="container mx-auto px-4 mb-16">
        <motion.section
          id="data-analytics"
          className="mb-12 bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Data Analytics</h2>
            </div>

            <div className="ml-0 md:ml-16">
              <h3 className="text-xl font-semibold mb-3">What is Data Analytics?</h3>
              <p className="text-muted-foreground mb-4">
                The process of analyzing raw data to find trends, answer questions, and derive actionable insights
                for business decision-making.
              </p>

              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You collect data (from websites, sales, surveys, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You clean it (remove mistakes or missing values)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You analyze it using tools (Excel, SQL, Power BI, Python, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You visualize it (with charts, graphs, dashboards)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>You get insights (like what's working, what's not, what to improve)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/5 p-4 rounded-lg border border-border/50">
                <p className="text-card-foreground">
                  Learn the fundamentals of data analytics, including data collection, cleaning, transformation,
                  and visualization. Master statistical analysis techniques to extract meaningful insights from
                  complex datasets.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <ListTree className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">Topics Covered</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-10">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Introduction to Data Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data Collection and Cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Exploratory Data Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Statistical Analysis Techniques</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data Visualization Principles</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dashboard Creation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Report Generation and Storytelling</span>
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
                      <span>Data preprocessing and cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Statistical analysis and interpretation</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Critical thinking and problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Creating effective data visualizations</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data-driven decision making</span>
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
          Core Tools: Power BI, SQL, Tableau, Python
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Power BI Module */}
          <motion.section
            id="power-bi"
            {...fadeIn(0.1)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <LineChart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Power BI</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Introduction</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Power BI Components & Interface</li>
                  <li>Front-end & Back-end Overview</li>
                  <li>Data Connectivity Modes</li>
                  <li>Importing Data into Power BI</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Power Query Editor (ETL)</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Query Editing Tools (Home & View Tabs)</li>
                  <li>Transform Tab Functions</li>
                  <li>Add Column Tab Functions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Data Modeling</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Relating Tables from Multiple Sources</li>
                  <li>Relationship Types & Cross-Filter Directions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>4. DAX & Visualization</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>DAX Calculations & Functions</li>
                  <li>Advanced Chart Visualizations</li>
                  <li>AI Visuals (KPIs, Q&A, etc.)</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* SQL Module */}
          <motion.section
            id="sql"
            {...fadeIn(0.2)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">SQL</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Introduction to SQL</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Introduction to Databases</li>
                  <li>Installing a Database Engine</li>
                  <li>Data Types & Operators</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. SQL Statements</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>DDL, DML, DQL, TCL Commands</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Functions</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Case & Character Functions</li>
                  <li>Date, Null, Number & General Functions</li>
                  <li>Aggregate & Analytical Functions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>4. Joins & Constraints</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Joins: Inner, Left, Right, Full, Self, Cross</li>
                  <li>Constraints: Primary Key, Foreign Key, etc.</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>5. Advanced SQL</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Set Operators: Union, Intersect, Minus</li>
                  <li>Views & Materialized Views</li>
                  <li>Subqueries & Pseudo Columns</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Tableau Module */}
          <motion.section
            id="tableau"
            {...fadeIn(0.3)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <PieChart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Tableau</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Introduction</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Tableau Desktop & Products</li>
                  <li>Data Types in Tableau</li>
                  <li>Connection Types</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Interface Study</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Dimensions & Measures</li>
                  <li>File Extensions</li>
                  <li>Sets, Parameters, Groups, Bins, Hierarchies</li>
                  <li>Sorting, Maps & Chart Types</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Calculations</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>LOD (Level of Detail) Calculations</li>
                  <li>Quick Table Calculations</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>4. Functions</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Windows, Analytics & Date Functions</li>
                  <li>String, Numeric & Logical Functions</li>
                  <li>Table Calculation Functions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>5. Data Modelling & Actions</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Relationships, Joins, Unions & Blending</li>
                  <li>Dashboard Actions & Interactivity</li>
                  <li>Publishing to Tableau Server/Online</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>6. Dashboard Creation</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Create Dashboards from Scratch</li>
                  <li>Real-world Scenario Implementation</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Python Module */}
          <motion.section
            id="python"
            {...fadeIn(0.4)}
            className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Python</h3>
              </div>
              <div className="space-y-3 ml-10">
                <p className="text-muted-foreground">
                  <strong>1. Introduction & Setup</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Literate Programming Concepts</li>
                  <li>Anaconda Installation & Jupyter Notebook</li>
                  <li>Basic Syntax & Structure</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>2. Data Types & Structures</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Strings, Lists, Tuples, Dictionaries, Sets</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>3. Control Flow & Functions</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Conditional Statements (if, else, elif)</li>
                  <li>Loops (for, while)</li>
                  <li>Defining & Using Functions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>4. Modules & Packages</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Creating & Importing Modules</li>
                  <li>Package Management</li>
                  <li>Built-in Common Modules</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>5. File & Data Handling</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>File I/O (Read/Write/Append)</li>
                  <li>Processing File Data</li>
                  <li>Regular Expressions</li>
                </ul>

                <p className="text-muted-foreground mt-3">
                  <strong>6. Data Analysis & Visualization</strong>
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>NumPy for Numerical Operations</li>
                  <li>Pandas for DataFrames</li>
                  <li>Matplotlib & Seaborn for Charts</li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* ================= Testimonials Section ================= */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <p className="text-muted-foreground italic">
                "The training program at Sysmatic Solution completely transformed my career. The
                hands-on approach and industry-relevant curriculum helped me secure a job as a data
                analyst."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Praveen Kumar</h4>
                <p className="text-sm text-muted-foreground">Data Analyst at TCS</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-background/50 border border-border/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <p className="text-muted-foreground italic">
                "Exceptional training with real-world projects. The instructors are industry
                professionals who provide practical insights beyond textbook knowledge."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Priyadharshini</h4>
                <p className="text-sm text-muted-foreground">BI Developer at Infosys</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= Enquiry Form Section ================= */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Ready to Start Your Data Journey?
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to enquire about our Data Analytics course or chat directly with a course advisor
            </p>
          </div>
          <EnquiryForm courseName="Data Analytics" />
        </div>
      </section>
      </div>
      <Script id="course-schema" type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </Script>
    </>
  );
}
