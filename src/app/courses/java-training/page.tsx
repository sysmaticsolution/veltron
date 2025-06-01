"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Terminal,
  Keyboard,
  SquareStack,
  Hash,
  Layers,
  Cpu,
  FileText,
  FileCode,
  Bug,
  Database,
  FileUp,
  Users,
  ListChecks,
  Sparkles,
  Award,
  MessageSquare,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Data Model                                                                */
/* -------------------------------------------------------------------------- */

type Block = {
  title: string;
  icon: React.ReactElement;
  topics: string[];
};

const syllabus: Block[] = [
  // ─── Beginner ────────────────────────────────────────────────────────────
  {
    title: "Module 1  ·  Intro to Programming & Java",
    icon: <Code2 className="h-6 w-6" />,
    topics: [
      "What is Programming?",
      "Java history & WORA philosophy",
      "JDK - JRE - JVM explained",
      "IDE setup (IntelliJ / Eclipse)",
      "Your first Java program",
    ],
  },
  {
    title: "Module 2  ·  Java Fundamentals",
    icon: <Hash className="h-6 w-6" />,
    topics: [
      "Variables & Constants",
      "Primitive data-types",
      "Type-casting",
      "Operators & Expressions",
    ],
  },
  {
    title: "Module 3  ·  I/O & Flow Control",
    icon: <Terminal className="h-6 w-6" />,
    topics: [
      "Scanner input",
      "Console output & formatting",
      "if / switch",
      "for, while, do-while",
      "break, continue, return",
    ],
  },
  {
    title: "Mini-Project · ATM Console App",
    icon: <CreditCardIcon />,
    topics: [
      "Balance check",
      "Withdraw & Deposit",
      "Looping + conditional logic",
    ],
  },
  {
    title: "Module 4  ·  Methods & Recursion",
    icon: <Keyboard className="h-6 w-6" />,
    topics: [
      "Defining / calling methods",
      "Parameters & return values",
      "Method overloading",
      "Variable scope",
      "Recursion basics",
    ],
  },
  {
    title: "Module 5  ·  Arrays & ArrayList",
    icon: <SquareStack className="h-6 w-6" />,
    topics: [
      "1-D & 2-D arrays",
      "CRUD operations",
      "ArrayList basics",
      "Arrays vs Collections",
    ],
  },
  {
    title: "Mini-Project · Student Grade Analyzer",
    icon: <Users className="h-6 w-6" />,
    topics: ["Average / min / max grades", "Arrays + loops + methods"],
  },

  // ─── Intermediate ────────────────────────────────────────────────────────
  {
    title: "Module 6  ·  OOP Basics",
    icon: <Layers className="h-6 w-6" />,
    topics: [
      "Abstraction / Encapsulation",
      "Classes & Objects",
      "Constructors",
      "this keyword",
    ],
  },
  {
    title: "Module 7  ·  Advanced OOP",
    icon: <Cpu className="h-6 w-6" />,
    topics: [
      "Inheritance & Polymorphism",
      "Abstract classes",
      "Interfaces",
      "Access modifiers",
      "final keyword",
    ],
  },
  {
    title: "Mini-Project · Library System",
    icon: <BookOpen className="h-6 w-6" />,
    topics: [
      "Borrow / return books",
      "Class hierarchies",
      "Interface implementation",
    ],
  },
  {
    title: "Module 8  ·  Exception Handling",
    icon: <Bug className="h-6 w-6" />,
    topics: [
      "Checked vs Unchecked",
      "try-catch-finally",
      "throw / throws",
      "Custom exceptions",
    ],
  },
  {
    title: "Module 9  ·  File I/O",
    icon: <FileText className="h-6 w-6" />,
    topics: [
      "FileReader / FileWriter",
      "Buffered streams",
      "Directories & paths",
      "Serialization basics",
    ],
  },
  {
    title: "Mini-Project · Payroll System",
    icon: <FileUp className="h-6 w-6" />,
    topics: ["Store + retrieve salaries", "File-based persistence"],
  },

  // ─── Advanced ────────────────────────────────────────────────────────────
  {
    title: "Module 10  ·  Collections Deep-Dive",
    icon: <Database className="h-6 w-6" />,
    topics: [
      "List, Set, Map interfaces",
      "ArrayList vs LinkedList",
      "HashSet / TreeSet",
      "HashMap / TreeMap",
      "Comparable & Comparator",
    ],
  },
  {
    title: "Module 11  ·  Java 8+ Features",
    icon: <Sparkles className="h-6 w-6" />,
    topics: [
      "Lambda expressions",
      "Functional interfaces",
      "Stream API",
      "Optional class",
      "java.time API",
    ],
  },
  {
    title: "Module 12  ·  Multithreading",
    icon: <Layers className="h-6 w-6 rotate-90" />,
    topics: [
      "Thread life-cycle",
      "Runnable vs Thread",
      "synchronized & deadlocks",
      "Executor framework",
    ],
  },
  {
    title: "Mini-Project · Bank Simulation",
    icon: <ListChecks className="h-6 w-6" />,
    topics: [
      "Concurrent transactions",
      "Thread management & sync",
    ],
  },

  // ─── Capstone ────────────────────────────────────────────────────────────
  {
    title: "Capstone · Student Management System",
    icon: <Award className="h-6 w-6" />,
    topics: [
      "File persistence",
      "CRUD operations",
      "OOP design",
    ],
  },
  {
    title: "Capstone · Inventory Management",
    icon: <ListChecks className="h-6 w-6" />,
    topics: [
      "Product add/edit/delete",
      "Reporting",
    ],
  },
  {
    title: "Capstone · Mini Banking Console App",
    icon: <Layers className="h-6 w-6" />,
    topics: [
      "Acct creation / deposit / withdraw",
      "Multithreading for simulation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const fadeCard = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function JavaCompletePage() {
  return (
    <main className="relative min-h-screen bg-background py-20">
      {/* ---------- Heading ---------- */}
      <header className="mb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Java Complete Training Course
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
          A step-by-step journey from absolute beginner to confident Java
          developer – packed with hands-on mini-projects and capstones.
        </p>
      </header>

      {/* ---------- Grid ---------- */}
      <section className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {syllabus.map((block, i) => (
            <motion.article
              key={block.title}
              custom={i}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeCard}
              className="group rounded-2xl border border-border/40 bg-background/60 backdrop-blur
                         p-6 shadow-sm transition duration-300
                         hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {block.icon}
                </div>
                <h3 className="font-semibold text-base">{block.title}</h3>
              </div>

              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {block.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------- Enquiry Form Section ---------- */}
      <section className="mt-24 py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your Java Development Journey
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Java Training course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Java Training" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Local Helper Icon (lucide lacks “CreditCard” with chip)                   */
/* -------------------------------------------------------------------------- */

function CreditCardIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h2" />
      <path d="M10 15h2" />
    </svg>
  );
}
