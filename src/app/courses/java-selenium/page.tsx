"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  MousePointer,
  Package,
  Clipboard,
  Database,
  Terminal,
  ChevronRight,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Small animation helper                                                    */
/* -------------------------------------------------------------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

/* -------------------------------------------------------------------------- */
/*  Curriculum data                                                           */
/* -------------------------------------------------------------------------- */
type Module = {
  title: string;
  hours: string;
  icon: JSX.Element;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "Core Java",
    hours: "≈ 20 hrs",
    icon: <Code className="h-6 w-6" />,
    topics: [
      "Packages & Access Modifiers",
      "Scanner / Input & Data Types",
      "OOP pillars (inheritance, etc.)",
      "Collections – List, Set, Map",
      "Exception Handling & Constructors",
    ],
  },
  {
    title: "Selenium Essentials",
    hours: "≈ 13 hrs",
    icon: <MousePointer className="h-6 w-6" />,
    topics: [
      "WebDriver basics & browsers",
      "Locators, X-Path, CSS selectors",
      "Actions API & keyboard events",
      "Alerts, frames, windows",
      "JS Executor & screenshots",
    ],
  },
  {
    title: "Testing Frameworks",
    hours: "≈ 12 hrs",
    icon: <Package className="h-6 w-6" />,
    topics: [
      "Maven project structure",
      "Page-Object Model (POM)",
      "JUnit / TestNG suites & groups",
      "Excel utilities for data-driven tests",
      "Cucumber BDD fundamentals",
    ],
  },
  {
    title: "Manual-Testing Basics",
    hours: "≈ 7 hrs",
    icon: <Clipboard className="h-6 w-6" />,
    topics: [
      "SDLC vs STLC & Agile",
      "Test-case design techniques",
      "Defect life-cycle (JIRA)",
      "Testing levels & types overview",
    ],
  },
  {
    title: "SQL for Testers",
    hours: "≈ 5 hrs",
    icon: <Database className="h-6 w-6" />,
    topics: [
      "SELECT, INSERT, UPDATE, DELETE",
      "GROUP BY & analytic functions",
      "Joins & sub-queries",
      "Basic JDBC connectivity idea",
    ],
  },
  {
    title: "Programming Drills",
    hours: "≈ 3 hrs",
    icon: <Terminal className="h-6 w-6" />,
    topics: [
      "String puzzles: reverse, palindrome",
      "Number series – Fibonacci, factorial",
      "Array & pattern challenges",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */
export default function JavaSeleniumBasicPage() {
  return (
    <div className="relative overflow-hidden bg-background pb-24">
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-56 -right-56 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-primary/5 rounded-full blur-xl" />
      </div>

      {/* header */}
      <header className="relative z-10 py-16 md:py-24 text-center container mx-auto px-4 max-w-4xl">
        <motion.h1
          {...fadeUp(0)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          Java + Selenium
        </motion.h1>
        <motion.p
          {...fadeUp(0.15)}
          className="text-xl text-muted-foreground mt-6"
        >
          A 70-hour, hands-on path from Core Java foundations to Selenium
          automation and real interview practice.
        </motion.p>
      </header>

      {/* curriculum – 2 × 2 grid */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <motion.article
              key={m.title}
              variants={fadeUp(i * 0.06)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="group bg-background/60 backdrop-blur border border-border/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <header className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {m.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{m.title}</h2>
                  <p className="text-sm text-muted-foreground">{m.hours}</p>
                </div>
              </header>

              <ul className="space-y-2 text-muted-foreground pl-6">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* small footer note */}
        <p className="text-center text-sm text-muted-foreground mt-16">
          + 10 hrs of mock interviews & preparation sessions.
        </p>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <motion.h2
                {...fadeUp(0)}
                className="text-2xl font-bold flex items-center justify-center gap-2 mb-2"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your Testing Journey Today
              </motion.h2>
              <motion.p
                {...fadeUp(0.1)}
                className="text-muted-foreground"
              >
                Fill out the form below to enquire about our Java Selenium Testing course or chat directly with a course advisor
              </motion.p>
            </div>
            <motion.div {...fadeUp(0.2)}>
              <EnquiryForm courseName="Java Selenium Testing" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
