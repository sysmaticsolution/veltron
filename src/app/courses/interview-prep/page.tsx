"use client";

import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ClipboardList,
  BookOpen,
  Code,
  Server,
  Terminal,
  Wrench,
  Users,
  Briefcase,
  MessageSquare,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Data Model                                                                */
/* -------------------------------------------------------------------------- */

type Module = {
  title: string;
  hours: string;
  icon: JSX.Element;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "Framework",
    hours: "≈ 20 hrs",
    icon: <Code className="h-5 w-5" />,
    topics: [
      "Maven installation & setup",
      "Excel read / write / update",
      "Base-class pattern & return concepts",
      "JUnit annotations & asserts",
      "Page-Object-Model design",
      "TestNG intro → parallel / groups / rerun",
      "Parameterisation & DataProvider",
      "Full TestNG project + written test",
    ],
  },
  {
    title: "Manual Testing",
    hours: "≈ 12 hrs",
    icon: <ClipboardList className="h-5 w-5" />,
    topics: [
      "SDLC & testing levels",
      "STLC & test-case design techniques",
      "Types of testing & defect life-cycle",
      "JIRA workflow",
      "Agile methodology (Scrum, real-time)",
      "Domain selection & explanation",
    ],
  },
  {
    title: "IPT-1 Mock Interview",
    hours: "≈ 3 hrs",
    icon: <Users className="h-5 w-5" />,
    topics: [
      "Framework mock interview",
      "Manual-testing mock interview",
      "How to answer framework questions",
    ],
  },
  {
    title: "BDD ― Cucumber",
    hours: "≈ 8 hrs",
    icon: <BookOpen className="h-5 w-5" />,
    topics: [
      "Cucumber intro & configuration",
      "Scenario / Scenario Outline",
      "Options, Hooks, Tags, Data Table",
      "Reporting & mini-project",
    ],
  },
  {
    title: "API Testing",
    hours: "≈ 17 hrs",
    icon: <Server className="h-5 w-5" />,
    topics: [
      "API basics & data types",
      "JSON read / write / (de)serialise",
      "Architecture – REST & tools (Postman)",
      "Auth, vars, pre-request, tests, chaining",
      "Real-time framework (TestNG + Cucumber)",
      "Status-codes & interview Qs",
    ],
  },
  {
    title: "Project Class",
    hours: "≈ 10 hrs",
    icon: <Wrench className="h-5 w-5" />,
    topics: [
      "OOPs real-time",
      "XPath axes & CSS selectors",
      "Selenium exceptions & architecture",
      "Collections (real-time)",
      "Git push / clone / conflict",
      "Jenkins intro",
      "Self-introduction + roles & responsibilities",
    ],
  },
  {
    title: "Mock Interview & Resume",
    hours: "≈ 5 hrs",
    icon: <Briefcase className="h-5 w-5" />,
    topics: [
      "Final mock interview",
      "Personal skill-set development",
      "Resume prep & Naukri upload",
      "Job-search strategy & call scheduling",
      "How to crack interviews",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

const accordion = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
};

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function IPTCoursePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative bg-background min-h-screen">
      {/* ----------- HERO ---------- */}
      <section className="py-20 text-center px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Interview Preparation Training (IPT-1 & IPT-2)
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
          75–80 hours of end-to-end guidance covering Frameworks, Manual &
          Automation Testing, API & BDD, real projects, plus mock interviews.
        </p>

        <a
          href="https://wa.me/919345111211"
          className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium"
        >
          <MessageSquare className="h-5 w-5" />
          Talk to an Advisor
        </a>
      </section>

      {/* -------- QUICK FACTS ------- */}
      <section className="container mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <GraduationCap className="h-6 w-6" />, label: "Job-Focused" },
          { icon: <Terminal className="h-6 w-6" />, label: "Hands-on Labs" },
          { icon: <Users className="h-6 w-6" />, label: "Mock Interviews" },
          { icon: <ClipboardList className="h-6 w-6" />, label: "Resume Help" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 border rounded-xl bg-background/70"
          >
            <div className="mb-3 text-primary">{item.icon}</div>
            <span className="font-medium">{item.label}</span>
          </motion.div>
        ))}
      </section>

      {/* -------- CURRICULUM -------- */}
      <section className="container mx-auto px-4 pb-24 max-w-4xl">
        {modules.map((m, idx) => (
          <Fragment key={m.title}>
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center bg-background/80 border border-border px-4 py-3 rounded-lg text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-primary">{m.icon}</span>
                <span className="font-semibold">{m.title}</span>
                <span className="text-sm text-muted-foreground">{m.hours}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIdx === idx && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={accordion}
                  className="overflow-hidden"
                >
                  <ul className="pl-10 pr-6 py-4 list-disc space-y-1 text-muted-foreground">
                    {m.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </Fragment>
        ))}
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Prepare for Your Next Interview
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Interview Preparation course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Interview Preparation Training" />
          </div>
        </div>
      </section>
    </div>
  );
}
