"use client";

import React, { useState } from "react";
import Script from "next/script";
import { generateCourseSchema } from "../schema";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code2,
  Repeat,
  FunctionSquare,
  List as ListIcon,
  Quote,
  AlertTriangle,
  Layers,
  FileText,
  Package,
  Database,
  Lightbulb,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Data Model                                                                */
/* -------------------------------------------------------------------------- */

type Module = {
  title: string;
  icon: React.ReactNode;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "1 · Introduction to Python",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    topics: [
      "What is Python? History and features",
      "Installing Python & setting up the environment",
      "Running Python scripts",
      "IDEs overview (VS Code, PyCharm)",
    ],
  },
  {
    title: "2 · Basic Python Syntax",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    topics: [
      "Writing your first program (hello-world)",
      "Variables & primitive data-types",
      "Comments & doc-strings",
      "Input / output (input(), print())",
    ],
  },
  {
    title: "3 · Control Structures",
    icon: <Repeat className="h-5 w-5 text-primary" />,
    topics: [
      "Conditional statements: if / elif / else",
      "Loops: for-loop & while-loop",
      "Loop-control: break, continue, pass",
    ],
  },
  {
    title: "4 · Functions",
    icon: <FunctionSquare className="h-5 w-5 text-primary" />,
    topics: [
      "Defining & calling functions",
      "Arguments (positional, keyword, *args, **kwargs)",
      "Return values & scope",
      "Lambda expressions",
    ],
  },
  {
    title: "5 · Data Structures",
    icon: <ListIcon className="h-5 w-5 text-primary" />,
    topics: [
      "Lists & list-comprehensions",
      "Tuples & sets",
      "Dictionaries",
    ],
  },
  {
    title: "6 · String Handling",
    icon: <Quote className="h-5 w-5 text-primary" />,
    topics: [
      "String methods & formatting",
      "f-Strings",
      "Slicing",
      "Regex basics (re module)",
    ],
  },
  {
    title: "7 · Error Handling",
    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
    topics: ["try / except / finally", "Built-in vs custom exceptions"],
  },
  {
    title: "8 · Object-Oriented Programming",
    icon: <Layers className="h-5 w-5 text-primary" />,
    topics: [
      "Classes & objects",
      "Attributes & methods",
      "Inheritance & polymorphism",
      "Encapsulation",
    ],
  },
  {
    title: "9 · File Handling",
    icon: <FileText className="h-5 w-5 text-primary" />,
    topics: [
      "Reading & writing text / binary files",
      "Context-managers (with-statement)",
    ],
  },
  {
    title: "10 · Modules & Packages",
    icon: <Package className="h-5 w-5 text-primary" />,
    topics: [
      "import & from-import",
      "The standard library (math, datetime, os …)",
      "Creating your own packages",
      "pip & third-party installs",
    ],
  },
  {
    title: "11 · Working with Libraries",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    topics: ["requests", "pandas (basics)", "matplotlib (basics)"],
  },
  {
    title: "12 · Database Connectivity",
    icon: <Database className="h-5 w-5 text-primary" />,
    topics: [
      "SQLite & the sqlite3 module",
      "CRUD operations",
      "ORM fundamentals",
    ],
  },
  {
    title: "13 · Intro to Advanced Topics",
    icon: <Lightbulb className="h-5 w-5 text-primary" />,
    topics: ["Flask / Django basics", "REST APIs", "Data-analysis preview"],
  },
  {
    title: "14 · Projects & Assignments",
    icon: <FolderOpen className="h-5 w-5 text-primary" />,
    topics: [
      "CLI calculator",
      "To-Do List app",
      "Web scraper (requests + BeautifulSoup)",
      "SQLite mini-DB",
      "Optional Flask mini-web-app",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Helpers                                                         */
/* -------------------------------------------------------------------------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function PythonPage() {
  const [open, setOpen] = useState<number | null>(0);
  
  // Generate structured data schema for this course
  const courseSchema = generateCourseSchema({
    name: "Python Programming Training",
    description: "Master Python programming with our comprehensive training program in Chennai. Learn from fundamentals to advanced concepts with hands-on projects led by industry experts.",
    url: "https://veltron.in/courses/python"
  });

  return (
    <>
      <div className="relative min-h-screen bg-background text-foreground">
        {/* -------------------------- HERO -------------------------------- */}
        <section className="pt-24 pb-16 text-center relative overflow-hidden">
          <motion.h1
            {...fadeUp(0)}
            className="mx-auto max-w-3xl px-4 text-3xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Python Professional&nbsp;Training&nbsp;Program
          </motion.h1>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 mx-auto max-w-2xl px-4 text-lg text-muted-foreground"
          >
            A complete journey from&nbsp;"Hello-World" to database-driven apps —
            100% hands-on.
          </motion.p>
          {/* subtle background blob */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </section>

        {/* ------------------------- ACCORDION ---------------------------- */}
        <section className="mx-auto max-w-4xl px-4 pb-24 space-y-4">
          {modules.map((m, idx) => {
            const expanded = open === idx;
            return (
              <motion.div
                key={m.title}
                {...fadeUp(idx * 0.05)}
                className="rounded-xl border border-border/40 bg-background/60 backdrop-blur"
              >
                {/* header row */}
                <button
                  onClick={() => setOpen(expanded ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    {m.icon}
                    <h3 className="font-semibold text-lg md:text-xl">
                      {m.title.replace("·", ".")}
                    </h3>
                  </div>
                  {expanded ? (
                    <ChevronUp className="h-5 w-5 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0" />
                  )}
                </button>

                {/* animated content */}
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.ul
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      {m.topics.map((t) => (
                        <li
                          key={t}
                          className="relative pl-4 py-1 text-muted-foreground"
                        >
                          <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-primary" />
                          {t}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>

        {/* --------------------------- ENQUIRY FORM ------------------------------- */}
        <section className="relative pb-24">
          <motion.div
            {...fadeUp(0)}
            className="mx-auto max-w-3xl px-6 py-10 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-md"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                Start Your Python Journey Today
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Python course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Python Training" />
          </motion.div>
          {/* extra decorative blob */}
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-2xl" />
        </section>
      </div>
      
      {/* Structured Data Schema */}
      <Script id="course-schema" type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </Script>
    </>
  );
}
