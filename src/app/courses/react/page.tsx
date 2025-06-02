"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Code,
  Laptop,
  Layers,
  ListTodo,
  Cloud,
  Server,
  Package,
  Rocket,
  Wifi,
  Globe,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/* helpers                                                                    */
/* -------------------------------------------------------------------------- */

const icons = [
  <Book key="0" className="h-5 w-5" />,
  <Code key="1" className="h-5 w-5" />,
  <Laptop key="2" className="h-5 w-5" />,
  <Layers key="3" className="h-5 w-5" />,
  <ListTodo key="4" className="h-5 w-5" />,
  <Cloud key="5" className="h-5 w-5" />,
  <Server key="6" className="h-5 w-5" />,
  <Package key="7" className="h-5 w-5" />,
  <Rocket key="8" className="h-5 w-5" />,
  <Wifi key="9" className="h-5 w-5" />,
  <Globe key="10" className="h-5 w-5" />,
];

const pick = (i: number) => icons[i % icons.length];

/* curriculum ----------------------------------------------------------------*/

type Module = { title: string; topics: string[]; icon: JSX.Element };
type Level = { name: string; modules: Module[] };

const data: Level[] = [
  {
    name: "Beginner",
    modules: [
      {
        title: "Introduction to Programming",
        topics: [
          "What is Programming?",
          "Compiler vs Interpreter",
          "Algorithms 101",
          "Computer architecture basics",
        ],
        icon: pick(0),
      },
      {
        title: "Getting Started with React",
        topics: ["Why React?", "Node + npm", "CRA vs Vite", "VS Code setup"],
        icon: pick(1),
      },
      {
        title: "JavaScript Essentials",
        topics: [
          "let / const",
          "Functions & arrows",
          "Arrays + objects",
          "ES modules",
        ],
        icon: pick(2),
      },
      {
        title: "React Components 101",
        topics: ["JSX", "Props & state", "Events", "First component"],
        icon: pick(3),
      },
      {
        title: "Mini-Project: To-Do App",
        topics: ["CRUD", "Local storage", "Component tree"],
        icon: <CheckCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Intermediate",
    modules: [
      {
        title: "React Router",
        topics: [
          "Nested routes",
          "Dynamic params",
          "Protected routes",
          "Link / NavLink",
        ],
        icon: pick(4),
      },
      {
        title: "Context API",
        topics: ["createContext", "useContext", "Avoid prop-drilling"],
        icon: pick(5),
      },
      {
        title: "Hooks in Depth",
        topics: ["useReducer", "useRef", "Custom hooks"],
        icon: pick(6),
      },
      {
        title: "Data Fetching",
        topics: ["fetch vs Axios", "Async/await", "SWR pattern"],
        icon: pick(7),
      },
      {
        title: "Mini-Project: Weather App",
        topics: ["OpenWeather API", "Router", "Context"],
        icon: <CheckCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Advanced",
    modules: [
      {
        title: "Redux & RTK",
        topics: [
          "Actions / reducers / store",
          "Thunk vs Saga",
          "Redux-Toolkit Query",
        ],
        icon: pick(8),
      },
      {
        title: "Next.js & SSR",
        topics: [
          "getServerSideProps",
          "File-system routing",
          "ISR caching",
        ],
        icon: pick(9),
      },
      {
        title: "TypeScript with React",
        topics: ["Typing props", "Generics", "Union & intersection"],
        icon: pick(10),
      },
      {
        title: "Testing • Jest + RTL",
        topics: [
          "Unit vs Integration",
          "Mocking fetch",
          "Coverage reports",
        ],
        icon: pick(1),
      },
      {
        title: "Mini-Project: E-Commerce",
        topics: ["Stripe", "Redux", "Lazy routes"],
        icon: <CheckCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    name: "Projects",
    modules: [
      {
        title: "Portfolio + Blog",
        topics: ["Markdown", "Dark-mode switch", "Deployment"],
        icon: pick(3),
      },
      {
        title: "Task Manager (Real-time)",
        topics: ["Socket.IO", "Material-UI", "Docker compose"],
        icon: pick(6),
      },
      {
        title: "Full-Stack Shop",
        topics: ["MongoDB", "Express API", "JWT auth", "Admin dashboard"],
        icon: pick(8),
      },
    ],
  },
];

/* animation variants --------------------------------------------------------*/

const slide = {
  hidden: { x: 40, opacity: 0 },
  show: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.45 },
  }),
};

/* -------------------------------------------------------------------------- */
/* component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ReactCoursePage() {
  const [openLevel, setOpenLevel] = useState(0);

  return (
    <div className="min-h-screen bg-background text-card-foreground">
      {/* hero ----------------------------------------------------------------*/}
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 tracking-tight">
          React Professional Training Program
        </h1>
        <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-3xl mx-auto">
          Learn React from scratch &mdash; then ship production-ready apps with
          TypeScript, testing and CI/CD.
        </p>
      </section>

      {/* layout grid ---------------------------------------------------------*/}
      <div className="container mx-auto px-4 lg:flex">
        {/* sidebar -----------------------------------------------------------*/}
        <aside className="lg:w-56 shrink-0 sticky top-24 self-start mb-12 lg:mb-0">
          <ul className="space-y-3">
            {data.map((lvl, idx) => (
              <li key={lvl.name}>
                <button
                  onClick={() => setOpenLevel(idx)}
                  className={`w-full px-4 py-2 rounded-lg font-medium text-left transition-colors
                    ${
                      idx === openLevel
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/10 hover:bg-muted/20"
                    }`}
                >
                  {lvl.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* accordion area ----------------------------------------------------*/}
        <div className="flex-1">
          {data.map((lvl, idx) => (
            <AnimatePresence key={lvl.name} mode="wait">
              {idx === openLevel && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {lvl.modules.map((mod, i) => (
                    <motion.div
                      key={mod.title}
                      custom={i}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={slide}
                      className="rounded-xl overflow-hidden border border-border/40 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur hover:shadow-lg transition-shadow"
                    >
                      <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer select-none">
                          <span className="flex items-center gap-3 font-semibold text-lg">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                              {mod.icon}
                            </span>
                            {mod.title}
                          </span>
                          <svg
                            className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </summary>

                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="px-10 pb-6 space-y-2 text-muted-foreground overflow-hidden"
                        >
                          {mod.topics.map((t) => (
                            <li
                              key={t}
                              className="flex items-start gap-2 leading-relaxed"
                            >
                              <svg
                                className="h-4 w-4 mt-1 shrink-0 text-primary"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                              {t}
                            </li>
                          ))}
                        </motion.ul>
                      </details>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
      
      {/* Enquiry Form Section */}
      <div className="bg-gradient-to-b from-background/80 to-background/60 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your React Development Journey
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our React Training course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="React Training" />
          </div>
        </div>
      </div>
    </div>
  );
}

