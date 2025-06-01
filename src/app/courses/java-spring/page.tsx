"use client";

import React, { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Book,
  Code2,
  Repeat,
  List,
  Layers3,
  Database,
  Terminal,
  Brain,
  FileText,
  Settings2,
  ShieldCheck,
  Cloud,
  Rocket,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

type Module = { title: string; icon: JSX.Element; topics: string[] };
type Level = {
  name: string;
  color: string;
  icon: JSX.Element;
  description: string;
  modules: Module[];
};

const levels: Level[] = [
  /* ------------------------------ BEGINNER ------------------------------ */
  {
    name: "Beginner",
    color: "from-emerald-500 to-emerald-600",
    icon: <Book className="w-6 h-6" />,
    description:
      "Grasp programming basics, Java syntax and core OOP principles through mini-projects.",
    modules: [
      {
        title: "Java Basics & Tooling",
        icon: <Book className="w-4 h-4" />,
        topics: [
          "JDK / JRE / JVM",
          "IntelliJ / Eclipse setup",
          "Variables & operators",
          "Compile vs. run",
        ],
      },
      {
        title: "Flow-Control & Methods",
        icon: <Repeat className="w-4 h-4" />,
        topics: ["Branching", "Loops", "Method overloading", "CLI mini-lab"],
      },
      {
        title: "Arrays · Strings · Collections Intro",
        icon: <Layers3 className="w-4 h-4" />,
        topics: [
          "1-D / 2-D arrays",
          "StringBuilder vs. StringBuffer",
          "ArrayList & HashMap preview",
        ],
      },
      {
        title: "Object-Oriented Programming Fundamentals",
        icon: <Brain className="w-4 h-4" />,
        topics: [
          "Encapsulation, Inheritance, Polymorphism",
          "Interfaces & abstract classes",
          "Student-manager console app",
        ],
      },
    ],
  },

  /* ---------------------------- INTERMEDIATE ---------------------------- */
  {
    name: "Intermediate",
    color: "from-sky-500 to-sky-600",
    icon: <Settings2 className="w-6 h-6" />,
    description:
      "Tackle files, exceptions, JDBC and your first servlet-based web application.",
    modules: [
      {
        title: "Exception Handling & Debugging",
        icon: <ShieldCheck className="w-4 h-4" />,
        topics: [
          "try / catch / finally",
          "Custom exceptions",
          "IDE break-points",
        ],
      },
      {
        title: "File I/O & JSON Processing",
        icon: <FileText className="w-4 h-4" />,
        topics: ["Buffered I/O", "Serialisation", "Gson / Jackson"],
      },
      {
        title: "Collections Deep Dive + Stream API",
        icon: <Layers3 className="w-4 h-4" />,
        topics: [
          "Lists • Sets • Maps",
          "Stream filter / map / reduce",
          "Custom comparators",
        ],
      },
      {
        title: "Databases & JDBC",
        icon: <Database className="w-4 h-4" />,
        topics: [
          "MySQL schema & CRUD",
          "Prepared statements",
          "SQL error handling",
        ],
      },
      {
        title: "Servlets · JSP · Task-Tracker Web App",
        icon: <Terminal className="w-4 h-4" />,
        topics: ["HTTP basics", "Servlet lifecycle", "JSP forms + JDBC"],
      },
    ],
  },

  /* ------------------------------ ADVANCED ------------------------------ */
  {
    name: "Advanced",
    color: "from-fuchsia-500 to-fuchsia-600",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Enter the Spring ecosystem, build secure REST APIs and containerise your services.",
    modules: [
      {
        title: "Spring Boot & REST API Development",
        icon: <Code2 className="w-4 h-4" />,
        topics: [
          "Spring Initializr",
          "Controllers • Services",
          "CRUD endpoints",
          "Validation",
        ],
      },
      {
        title: "Spring Data JPA & Hibernate",
        icon: <Database className="w-4 h-4" />,
        topics: [
          "Entities & repositories",
          "JPQL / Criteria",
          "Relationships & cascades",
        ],
      },
      {
        title: "Spring Security Essentials",
        icon: <ShieldCheck className="w-4 h-4" />,
        topics: ["Password encoders", "JWT intro", "Role-based access"],
      },
      {
        title: "Cloud & Deployment",
        icon: <Cloud className="w-4 h-4" />,
        topics: ["Dockerfile", "AWS Elastic Beanstalk", "CI / CD overview"],
      },
    ],
  },

  /* ---------------------------- CAPSTONE --------------------------- */
  {
    name: "Capstone Projects",
    color: "from-amber-500 to-amber-600",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Work on real-world, end-to-end projects to solidify skills and build your portfolio.",
    modules: [
      {
        title: "Course Registration Portal",
        icon: <List className="w-4 h-4" />,
        topics: [
          "Spring Boot + MySQL",
          "JWT security",
          "Student / Admin roles",
        ],
      },
      {
        title: "E-Commerce Backend Service",
        icon: <List className="w-4 h-4" />,
        topics: [
          "Product catalog",
          "Cart & checkout APIs",
          "RBAC & Swagger docs",
        ],
      },
      {
        title: "Hospital Appointment Micro-services",
        icon: <Layers3 className="w-4 h-4" />,
        topics: [
          "Patient / Doctor / Appointment services",
          "API Gateway basics",
          "Per-service databases",
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  ANIMATION UTIL                                                            */
/* -------------------------------------------------------------------------- */

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function JavaSpringBootPage() {
  return (
    <div className="relative overflow-hidden pb-24">
      {/* decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* ----------------------------- HEADER ----------------------------- */}
      <header className="relative z-10 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Java&nbsp;+&nbsp;Spring&nbsp;Boot Complete Course
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A project-heavy pathway from “Hello World” to deploying secure
          micro-services in the cloud.
        </p>
      </header>

      {/* -------------------------- CURRICULUM --------------------------- */}
      <main className="relative z-10 container max-w-5xl mx-auto px-4 space-y-24">
        {levels.map((lvl, levelIdx) => (
          <Fragment key={lvl.name}>
            {/* level banner */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={levelIdx}
              className={`rounded-2xl p-6 text-white bg-gradient-to-r ${lvl.color}`}
            >
              <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
                {lvl.icon}
                {lvl.name}
              </h2>
              <p className="mt-2 opacity-90">{lvl.description}</p>
            </motion.div>

            {/* modules */}
            <div className="space-y-10">
              {lvl.modules.map((mod, modIdx) => (
                <motion.div
                  key={mod.title}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={modIdx}
                  className="rounded-2xl border border-border/30 bg-background/60 backdrop-blur p-6 md:p-8 shadow-sm"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                    {mod.icon}
                    {mod.title}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-muted-foreground">
                    {mod.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Fragment>
        ))}
      </main>

      {/* ----------------------------- ENQUIRY FORM ----------------------------- */}
      <section className="relative z-10 mt-24">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-primary" />
                Start Your Spring Boot Journey
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to enquire about our Java Spring Boot course or chat directly with a course advisor
              </p>
            </div>
            <EnquiryForm courseName="Java Spring Boot" />
          </div>
        </div>
      </section>
    </div>
  );
}
