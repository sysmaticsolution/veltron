// ─── app/courses/python-fullstack/page.tsx ─────────────────────────────────────
"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  FileCode,
  Atom,
  Terminal,
  Layers3,
  Server,
  MoreHorizontal,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Fade-in helper                                                            */
/* -------------------------------------------------------------------------- */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

/* -------------------------------------------------------------------------- */
/*  Data model                                                                */
/* -------------------------------------------------------------------------- */
type Block = {
  title: string;
  hours: string;
  icon: JSX.Element;
  topics: string[];
};

const blocks: Block[] = [
  {
    title: "HTML",
    hours: "5 hrs",
    icon: <Code2 className="h-6 w-6" />,
    topics: [
      "Text, headings & paragraphs",
      "Styles, lists & links",
      "Images, tables & forms",
      "Audio, video & buttons",
    ],
  },
  {
    title: "CSS",
    hours: "15 hrs",
    icon: <Palette className="h-6 w-6" />,
    topics: [
      "Colours, text & fonts",
      "Flex-box & grid",
      "Transitions & animation",
      "Media-queries & responsiveness",
    ],
  },
  {
    title: "JavaScript",
    hours: "15 hrs",
    icon: <FileCode className="h-6 w-6" />,
    topics: [
      "ES 6+ syntax, classes & modules",
      "DOM & events, JSON & fetch",
      "Spread / rest, regex & timeout",
      "Array / string utilities",
    ],
  },
  {
    title: "React JS",
    hours: "15 hrs",
    icon: <Atom className="h-6 w-6" />,
    topics: [
      "Functional / class components",
      "Hooks & lifecycle",
      "Routing & forms",
      "Axios CRUD mini-project",
    ],
  },
  {
    title: "Core Python",
    hours: "15 hrs",
    icon: <Terminal className="h-6 w-6" />,
    topics: [
      "Data-types & control flow",
      "Collections & comprehensions",
      "Functions, lambda, map / filter / reduce",
      "File-IO & exception handling",
    ],
  },
  {
    title: "OOP in Python",
    hours: "5 hrs",
    icon: <Layers3 className="h-6 w-6" />,
    topics: [
      "Classes & objects",
      "Inheritance & polymorphism",
      "Abstraction & encapsulation",
      "Constructors & variables",
    ],
  },
  {
    title: "Django & REST",
    hours: "20 hrs",
    icon: <Server className="h-6 w-6" />,
    topics: [
      "Project / app setup",
      "Templates, static files & forms",
      "ORM & CRUD",
      "DRF, serialization & deployment",
    ],
  },
  {
    title: "Extras & Mock",
    hours: "15 hrs",
    icon: <MoreHorizontal className="h-6 w-6" />,
    topics: [
      "SQL refresher",
      "Git workflow",
      "Deployment tooling",
      "Mock interviews & preparation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */
export default function PythonFullStackPage() {
  return (
    <div className="relative overflow-hidden pb-32">
      {/* decorative radial gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <motion.h1
          {...fade(0)}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          Python Full-Stack Professional Program
        </motion.h1>
        <motion.p
          {...fade(0.15)}
          className="mx-auto mt-6 max-w-3xl text-muted-foreground text-lg md:text-xl"
        >
          A 90-hour journey covering HTML → React on the front-end & Python / 
          Django on the back-end — 100 % hands-on.
        </motion.p>
      </section>

      {/* ── syllabus grid ────────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            variants={fade(i * 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* details → native open / close */}
            <details className="group rounded-2xl border border-border bg-background/60 backdrop-blur p-6 shadow transition-shadow open:shadow-lg hover:shadow-lg">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center rounded-full bg-primary/10 p-2 text-primary">
                    {b.icon}
                  </span>
                  <span className="text-lg font-semibold">{b.title}</span>
                </div>
                <span className="text-sm text-muted-foreground">{b.hours}</span>
              </summary>

              {/* divider */}
              <div className="my-4 h-px w-full bg-border" />

              <ul className="space-y-2 pl-2 text-muted-foreground">
                {b.topics.map((t) => (
                  <li key={t} className="relative pl-4">
                    <span className="absolute left-0 top-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </details>
          </motion.div>
        ))}
      </section>

      {/* ── Enquiry Form ─────────────────────── */}
      <section className="mx-auto mt-24 max-w-3xl px-4">
        <motion.div
          {...fade(0)}
          className="rounded-2xl bg-primary/10 p-8 backdrop-blur"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Start Your Full-Stack Journey Today
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to enquire about our Python Full-Stack course or chat directly with a course advisor
            </p>
          </div>
          <EnquiryForm courseName="Python Full-Stack" />
        </motion.div>
      </section>
    </div>
  );
}
