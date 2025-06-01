"use client";

import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Users,
  Settings2,
  CodeSquare,
  Repeat,
  Zap,
  FileCode,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Data model                                                                */
/* -------------------------------------------------------------------------- */

type Module = {
  id: string;
  title: string;
  hours?: string;
  icon: JSX.Element;
  topics: string[];
};

const modules: Module[] = [
  {
    id: "admin",
    title: "Salesforce Admin",
    hours: "≈ 30 hrs",
    icon: <Cloud className="h-5 w-5" />,
    topics: [
      "Cloud-computing & CRM primer",
      "Objects · Fields · Records",
      "Formulas & Validation Rules",
      "Record Types & Relationships",
      "Security model & Profiles",
      "Lightning Flows · Approval Process",
      "Data Loader & Import Wizard",
      "Reports · Dashboards · Sandboxes",
    ],
  },
  {
    id: "apex-core",
    title: "Apex Developer Fundamentals",
    hours: "≈ 20 hrs",
    icon: <CodeSquare className="h-5 w-5" />,
    topics: [
      "Syntax · Data-types · OOP basics",
      "SOQL - dynamic & static",
      "SOSL · DML · Governor limits",
      "Collections (List ⋅ Set ⋅ Map)",
      "Exception & Test classes",
    ],
  },
  {
    id: "triggers",
    title: "Apex Triggers",
    hours: "≈ 10 hrs",
    icon: <Repeat className="h-5 w-5" />,
    topics: [
      "Trigger events & context vars",
      "Handler pattern · Recursion guard",
      "Bulk-safe trigger design",
    ],
  },
  {
    id: "async",
    title: "Asynchronous Apex",
    hours: "≈ 10 hrs",
    icon: <Zap className="h-5 w-5" />,
    topics: [
      "Future methods",
      "Queueable Apex",
      "Batch Apex",
      "Scheduled Apex",
    ],
  },
  {
    id: "lwc",
    title: "Lightning Web Components (LWC)",
    hours: "≈ 20 hrs",
    icon: <Settings2 className="h-5 w-5" />,
    topics: [
      "Folder structure · SLDS",
      "Reactive props & conditional UI",
      "Parent ⇄ child communication",
      "Wire adapters & Apex wire",
      "Record forms · LMS",
      "Integration patterns",
    ],
  },
  {
    id: "integration",
    title: "Integration Basics",
    icon: <FileCode className="h-5 w-5" />,
    topics: ["REST / SOAP APIs", "Connected Apps", "Basic Flow Integrations"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation helpers                                                         */
/* -------------------------------------------------------------------------- */

const fadeSlide = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.2 } },
};

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default function SalesforceCoursePage() {
  const [active, setActive] = useState<Module>(modules[0]);

  return (
    <main className="min-h-screen bg-black text-gray-200">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative py-20 text-center bg-gradient-to-b from-black via-zinc-900/50 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Salesforce Professional Training
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto text-gray-400">
          Admin, Apex, LWC & Integrations — 100 % hands-on, 0 % fluff.
        </p>
      </section>

      {/* --------------------------- DESKTOP UI --------------------------- */}
      <section className="hidden lg:grid grid-cols-[260px_1fr] gap-10 max-w-6xl mx-auto py-16 px-6">
        {/* vertical tabs */}
        <nav className="flex flex-col gap-2 sticky top-24 self-start">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m)}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left hover:bg-zinc-800/60
                ${
                  active.id === m.id
                    ? "bg-zinc-800/80 text-primary"
                    : "text-gray-300"
                }`}
            >
              {m.icon}
              <span className="font-medium">{m.title}</span>
            </button>
          ))}
        </nav>

        {/* details pane */}
        <div>
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              {...fadeSlide}
              className="bg-zinc-900/60 backdrop-blur border border-zinc-700/40 rounded-2xl p-10"
            >
              <header className="flex items-baseline gap-4 mb-6">
                {active.icon}
                <h2 className="text-2xl font-semibold tracking-tight">
                  {active.title}
                </h2>
                {active.hours && (
                  <span className="ml-auto text-sm text-gray-400">
                    {active.hours}
                  </span>
                )}
              </header>

              <ul className="space-y-3 text-gray-300">
                {active.topics.map((t) => (
                  <li key={t} className="flex gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      {/* --------------------------- MOBILE UI --------------------------- */}
      <section className="lg:hidden max-w-2xl mx-auto py-12 px-4 space-y-4">
        {modules.map((m) => (
          <details
            key={m.id}
            className="group border border-zinc-700/60 rounded-xl bg-zinc-900/50 backdrop-blur"
          >
            <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none">
              {m.icon}
              <span className="font-medium flex-1">{m.title}</span>
              <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-6 pb-6 pt-1">
              <ul className="space-y-2 text-gray-300">
                {m.topics.map((t) => (
                  <li key={t} className="flex gap-2">
                    <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </section>

      {/* --------------------------- ENQUIRY FORM --------------------------- */}
      <section className="py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your Salesforce Journey Today
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Salesforce course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Salesforce" />
          </div>
        </div>
      </section>
    </main>
  );
}
