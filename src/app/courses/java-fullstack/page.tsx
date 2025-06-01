"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {
  FileCode,      // HTML
  Palette,       // CSS
  Braces,        // JavaScript
  Atom,          // React
  Package,       // Core Java
  Rocket,        // Advanced Java
  TreePine,      // Spring Boot
  ListTree,      // Other / Mock
  Sparkles,      // Sparkle icon
  MessageSquare, // Message icon
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* ────────────────────────────── helpers & data ───────────────────────────── */

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: d },
  },
});

type Module = { title: string; icon: JSX.Element; topics: string[] };

const modules: Module[] = [
  {
    title: "HTML · 5 hrs",
    icon: <FileCode className="w-6 h-6" />,
    topics: [
      "Text, Headings, Paragraphs",
      "Styles & Links",
      "Lists, Images, Tables",
      "Forms, Audio / Video",
      "Buttons",
    ],
  },
  {
    title: "CSS · 15 hrs",
    icon: <Palette className="w-6 h-6" />,
    topics: [
      "Colours, Fonts, Boxes",
      "Position / Float / Flex / Grid",
      "Transitions & Animations",
      "Pseudo-classes & Pseudo-elements",
      "Media-queries & Responsive tricks",
    ],
  },
  {
    title: "JavaScript · 15 hrs",
    icon: <Braces className="w-6 h-6" />,
    topics: [
      "Variables, Types, Operators",
      "Control flow & Functions",
      "Arrays, Objects, Classes",
      "DOM & Events, JSON",
      "Fetch, Regex, Timers, ...spread / rest",
    ],
  },
  {
    title: "React.js · 15 hrs",
    icon: <Atom className="w-6 h-6" />,
    topics: [
      "Functional & Class components",
      "Props, State, Hooks",
      "Lifecycle & Props-drilling",
      "Routing, Forms, Axios CRUD",
      "Mini project with custom CSS",
    ],
  },
  {
    title: "Core Java · 20 hrs",
    icon: <Package className="w-6 h-6" />,
    topics: [
      "OOP – Inheritance, Polymorphism, Encapsulation, Abstraction",
      "Collections (List / Set / Map)",
      "Strings & Arrays, Exception handling",
      "Access modifiers & Packages",
      "File I/O, Singleton, Scanner, …",
    ],
  },
  {
    title: "Advanced Java · 10 hrs",
    icon: <Rocket className="w-6 h-6" />,
    topics: [
      "J2EE intro, JSP & Servlets",
      "GET vs POST, Scriptlets ",
      "Response writer / dispatcher",
      "JDBC (Read / Write)",
      "Core SQL operations",
    ],
  },
  {
    title: "Spring Boot · 15 hrs",
    icon: <TreePine className="w-6 h-6" />,
    topics: [
      "SpringBoot architecture & setup",
      "MVC pattern, Maven & Lombok",
      "REST API – CRUD (GET, POST, PUT, PATCH, DELETE)",
      "DB connectivity (MySQL / Oracle)",
      "Loose vs Tight coupling, Debugging tips",
    ],
  },
  {
    title: "Other topics / Mock-prep · 15 hrs",
    icon: <ListTree className="w-6 h-6" />,
    topics: [
      "Interview prep & coding rounds",
      "Version control &  best practices",
      "Mini full-stack capstone",
      "Timed mocks & feedback",
    ],
  },
];

/* ──────────────────────────────── component ─────────────────────────────── */

export default function JavaFullStackPage() {
  return (
    <main className="relative bg-background text-card-foreground">
      {/* fuzzy blobs – purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-52 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-primary/10 rounded-full blur-2xl" />
      </div>

      {/* header */}
      <section className="py-20 text-center">
        <motion.h1
          {...fade(0)}
          className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent"
        >
          Java Full-Stack Training Syllabus
        </motion.h1>
        <motion.p
          {...fade(0.15)}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          90 – 100&nbsp;hrs of end-to-end web-engineering: front-end, back-end,
          REST APIs & Spring Boot – packaged to make you production ready.
        </motion.p>
      </section>

      {/* content grid */}
      <section className="container mx-auto max-w-5xl columns-1 md:columns-2 gap-6 px-4 pb-32">
        {modules.map((m, i) => (
          <motion.article
            key={m.title}
            {...fade(i * 0.05)}
            className="mb-6 inline-block w-full break-inside-avoid rounded-2xl border border-border/30 bg-background/50 p-6 shadow-sm backdrop-blur"
          >
            <header className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                {m.icon}
              </span>
              <h2 className="text-xl font-semibold">{m.title}</h2>
            </header>

            <ul className="space-y-1 pl-4 text-muted-foreground list-disc">
              {m.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <motion.h2
                {...fade(0)}
                className="text-2xl font-bold flex items-center justify-center gap-2 mb-2"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your Java Fullstack Journey
              </motion.h2>
              <motion.p
                {...fade(0.1)}
                className="text-muted-foreground"
              >
                Fill out the form below to enquire about our Java Fullstack course or chat directly with a course advisor
              </motion.p>
            </div>
            <motion.div {...fade(0.2)}>
              <EnquiryForm courseName="Java Fullstack" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
