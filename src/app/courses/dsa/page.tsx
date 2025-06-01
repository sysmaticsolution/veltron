/* -------------------------------------------------------------------------- */
/*  File:   app/courses/dsa/page.tsx                                          */
/* -------------------------------------------------------------------------- */
"use client";

import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  Terminal,
  Brain,
  List,
  Layers3,
  Search,
  SortAsc,
  Layers,
  Repeat,
  Link as LinkIcon,
  TreePine,
  Zap,
  DollarSign,
  Map,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Data Model                                                                */
/* -------------------------------------------------------------------------- */
type Module = {
  id: string;
  title: string;
  icon: JSX.Element;
  topics: string[];
  project?: string;
};
type Level = { name: "Beginner" | "Intermediate" | "Advanced"; modules: Module[] };

const curriculum: Level[] = [
  {
    name: "Beginner",
    modules: [
      {
        id: "m1",
        title: "Introduction to Programming & Computers",
        icon: <Book className="w-5 h-5" />,
        topics: [
          "What is Programming?",
          "How Computers Work",
          "Programming Languages",
          "Setting-up an IDE",
          "Compilers vs Interpreters",
        ],
        project: '"Hello World" program',
      },
      {
        id: "m2",
        title: "Basic Programming Concepts",
        icon: <Terminal className="w-5 h-5" />,
        topics: [
          "Variables & Data Types",
          "Operators",
          "Input / Output",
          "Control-Flow",
          "Loops",
        ],
        project: "Simple Calculator",
      },
      {
        id: "m3",
        title: "Introduction to Algorithms",
        icon: <Brain className="w-5 h-5" />,
        topics: [
          "What is an Algorithm?",
          "Algorithm Steps",
          "Pseudocode & Flowcharts",
          "Time-Complexity (Big-O)",
        ],
        project: '"Guess the Number" game',
      },
      {
        id: "m4",
        title: "Arrays & Lists",
        icon: <List className="w-5 h-5" />,
        topics: [
          "1-D & 2-D Arrays",
          "Searching / Sorting",
          "Insertion & Deletion",
          "Intro to Linked-Lists",
        ],
        project: "Array manipulation utility",
      },
    ],
  },
  {
    name: "Intermediate",
    modules: [
      {
        id: "m5",
        title: "Searching & Sorting Algorithms",
        icon: <Search className="w-5 h-5" />,
        topics: [
          "Linear vs Binary Search",
          "Bubble / Selection / Insertion Sort",
          "MergeSort & QuickSort",
        ],
        project: "Sorting visualiser",
      },
      {
        id: "m6",
        title: "Stacks & Queues",
        icon: <Layers className="w-5 h-5" />,
        topics: [
          "LIFO vs FIFO",
          "Array & Linked-List impl",
          "Real-world use-cases",
        ],
        project: "Stack-based expression evaluator",
      },
      {
        id: "m7",
        title: "Recursion",
        icon: <Repeat className="w-5 h-5" />,
        topics: [
          "Base / Recursive case",
          "Factorial & Fibonacci",
          "Recursion vs Iteration",
        ],
        project: "Recursive number printer",
      },
      {
        id: "m8",
        title: "Linked Lists",
        icon: <LinkIcon className="w-5 h-5" />,
        topics: [
          "Singly / Doubly / Circular",
          "Insertion, Deletion, Traversal",
          "Reverse a Linked-List",
        ],
        project: "Student-list manager",
      },
    ],
  },
  {
    name: "Advanced",
    modules: [
      {
        id: "m9",
        title: "Trees & Graphs",
        icon: <TreePine className="w-5 h-5" />,
        topics: [
          "Binary Trees & Traversals",
          "Binary Search Trees",
          "Graphs & Types",
          "BFS / DFS",
        ],
        project: "BST CRUD app",
      },
      {
        id: "m10",
        title: "Dynamic Programming",
        icon: <Zap className="w-5 h-5" />,
        topics: [
          "DP philosophy",
          "Memoisation vs Tabulation",
          "Fibonacci / Knapsack",
        ],
        project: "DP Fibonacci series",
      },
      {
        id: "m11",
        title: "Greedy Algorithms",
        icon: <DollarSign className="w-5 h-5" />,
        topics: ["Greedy paradigm", "Coin-Change", "Fractional Knapsack"],
        project: "Coin-change solver",
      },
      {
        id: "m12",
        title: "Graph Algorithms",
        icon: <Map className="w-5 h-5" />,
        topics: [
          "Dijkstra & Bellman-Ford",
          "Minimum Spanning Tree",
          "Topological Sort",
        ],
        project: "Dijkstra path-finder",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation helpers                                                         */
/* -------------------------------------------------------------------------- */
const ease = [0.22, 0.61, 0.36, 1]; // expo-ish

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease },
  }),
};

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */
export default function DSAPage() {
  return (
    <main className="min-h-screen bg-background text-card-foreground relative overflow-hidden">
      {/* -- decorative gradient blob -- */}
      <div className="absolute -top-40 right-[-20%] w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {/* ---------------------- HEADER / HERO ---------------------- */}
      <section className="py-20 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Data Structures & Algorithms Bootcamp
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
          Beginner-friendly, project-driven roadmap that takes you from{" "}
          <span className="font-medium">"Hello World"</span> to writing performant
          graph algorithms.
        </p>
      </section>

      {/* ---------------------- BEGINNER MODULES ------------------------ */}
      <section className="container max-w-5xl mx-auto px-4 relative z-10 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Beginner Level</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum[0].modules.map((m, idx) => (
            <motion.div
              key={m.id}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="rounded-xl bg-background/60 backdrop-blur border border-border/30 p-5 h-full overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {m.icon}
                  </div>
                  <h3 className="font-semibold leading-tight">{m.title}</h3>
                </div>

                <ul className="pl-4 list-disc text-sm space-y-1 text-muted-foreground">
                  {m.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {m.project && (
                  <p className="mt-3 text-sm text-primary font-medium">
                    Mini-Project:&nbsp;{m.project}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------- INTERMEDIATE MODULES ------------------------ */}
      <section className="container max-w-5xl mx-auto px-4 relative z-10 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Intermediate Level</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum[1].modules.map((m, idx) => (
            <motion.div
              key={m.id}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="rounded-xl bg-background/60 backdrop-blur border border-border/30 p-5 h-full overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {m.icon}
                  </div>
                  <h3 className="font-semibold leading-tight">{m.title}</h3>
                </div>

                <ul className="pl-4 list-disc text-sm space-y-1 text-muted-foreground">
                  {m.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {m.project && (
                  <p className="mt-3 text-sm text-primary font-medium">
                    Mini-Project:&nbsp;{m.project}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------- ADVANCED MODULES ------------------------ */}
      <section className="container max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Advanced Level</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum[2].modules.map((m, idx) => (
            <motion.div
              key={m.id}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <div className="rounded-xl bg-background/60 backdrop-blur border border-border/30 p-5 h-full overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {m.icon}
                  </div>
                  <h3 className="font-semibold leading-tight">{m.title}</h3>
                </div>

                <ul className="pl-4 list-disc text-sm space-y-1 text-muted-foreground">
                  {m.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {m.project && (
                  <p className="mt-3 text-sm text-primary font-medium">
                    Mini-Project:&nbsp;{m.project}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------ ENQUIRY FORM ----------------------------- */}
      <section className="mt-24 pb-20 relative z-10">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Start Your DSA Journey Today
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Data Structures & Algorithms course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Data Structures & Algorithms" />
          </div>
        </div>
      </section>
    </main>
  );
}
