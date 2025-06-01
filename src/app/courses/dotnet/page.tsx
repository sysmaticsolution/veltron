"use client";

import { motion } from "framer-motion";
import {
  Code,
  Boxes,
  BookOpen,
  AlertTriangle,
  FileText,
  Filter,
  Database,
  Globe,
  Send,
  ShieldCheck,
  Cpu,
  Cloud,
  Award,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

/* ------------------------------------------------------------- */
/* util animation helpers                                        */
/* ------------------------------------------------------------- */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

/* ------------------------------------------------------------- */
/* course data                                                   */
/* ------------------------------------------------------------- */
type Module = {
  title: string;
  icon: JSX.Element;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "Intro to Programming & C# Basics",
    icon: <Code className="w-6 h-6" />,
    topics: [
      "What is programming?",
      "C# & .NET Framework/Core",
      "Visual Studio setup",
      '"Hello World" program',
      "Variables • Data types",
      "Operators & user I/O",
      "Conditionals & loops",
      "Methods / functions",
    ],
  },
  {
    title: "Deeper C# Fundamentals",
    icon: <Boxes className="w-6 h-6" />,
    topics: [
      "Scope & lifetime",
      "Arrays, Lists, Dictionaries",
      "Strings & operations",
      "Enums • Structs",
      'Mini-project: "Contact Book"',
    ],
  },
  {
    title: "Object-Oriented Programming",
    icon: <BookOpen className="w-6 h-6" />,
    topics: [
      "Classes & objects",
      "Constructors / overload",
      "Inheritance • Interfaces",
      "Access modifiers",
      'Mini-project: "Student Manager"',
    ],
  },
  {
    title: "Exception Handling & Debugging",
    icon: <AlertTriangle className="w-6 h-6" />,
    topics: [
      "Try / Catch / Finally",
      "Custom exceptions",
      "VS debugger tools",
    ],
  },
  {
    title: "File I/O & JSON",
    icon: <FileText className="w-6 h-6" />,
    topics: [
      "Read / write files",
      "Directories & streams",
      "JSON (de)serialise",
      'Mini-project: "Payroll Manager"',
    ],
  },
  {
    title: "LINQ Fundamentals",
    icon: <Filter className="w-6 h-6" />,
    topics: [
      "Query vs method syntax",
      "Where • Select • GroupBy",
      "LINQ with collections",
    ],
  },
  {
    title: "Databases & SQL Basics",
    icon: <Database className="w-6 h-6" />,
    topics: [
      "SQL Server intro",
      "CRUD with SQL",
      "Keys & relationships",
      "EF Core (code-first)",
    ],
  },
  {
    title: "ASP.NET Core MVC",
    icon: <Globe className="w-6 h-6" />,
    topics: [
      "HTTP & MVC pattern",
      "Controllers • Razor views",
      "Forms & validation",
      'Mini-project: "To-Do Web App"',
    ],
  },
  {
    title: "Building REST APIs",
    icon: <Send className="w-6 h-6" />,
    topics: [
      "Routing & endpoints",
      "HTTP verbs – GET/POST…",
      "Postman • Swagger docs",
    ],
  },
  {
    title: "Auth & Identity",
    icon: <ShieldCheck className="w-6 h-6" />,
    topics: [
      "Login / registration",
      "Role-based auth",
      "ASP.NET Identity",
    ],
  },
  {
    title: "Advanced C# Features",
    icon: <Cpu className="w-6 h-6" />,
    topics: [
      "Delegates • Events",
      "Lambda expressions",
      "Generics, Func, Action",
    ],
  },
  {
    title: "Deployment & Azure Basics",
    icon: <Cloud className="w-6 h-6" />,
    topics: [
      "Publish to IIS",
      "Azure portal intro",
      "Deploy ASP.NET apps",
    ],
  },
];

/* capstone summary card         */
const capstone = {
  title: "Capstone Projects",
  icon: <Award className="w-7 h-7" />,
  topics: [
    "Online Course Management System",
    "E-Commerce Store (mini)",
    "Hospital Appointment Booking",
  ],
};

/* ------------------------------------------------------------- */
/* component                                                     */
/* ------------------------------------------------------------- */
export default function DotNetPage() {
  return (
    <div className="relative bg-background pb-24 overflow-hidden">
      {/* --- decorative blobs --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-52 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* ---------------- header -------------- */}
      <header className="relative z-10 pt-20 pb-16 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          {...fade(0)}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
        >
          .NET Complete Training
        </motion.h1>
        <motion.p
          {...fade(0.15)}
          className="text-lg md:text-2xl text-muted-foreground mt-6"
        >
          Zero-to-hero course covering C#, ASP.NET Core, databases, REST APIs &
          cloud deployment — packed with hands-on mini-projects.
        </motion.p>

        {/* cta buttons */}
        <motion.div
          {...fade(0.3)}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="#modules"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View Modules
          </a>
          <a
            href="https://wa.me/919345111211"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Enquire Now
          </a>
        </motion.div>
      </header>

      {/* --------------- modules grid ---------- */}
      <section
        id="modules"
        className="relative z-10 container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            variants={fade(i * 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* card */}
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group h-full cursor-pointer rounded-2xl bg-background/60 backdrop-blur border border-border/30 shadow-sm hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              {/* header row */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {m.icon}
                </div>
                <h3 className="font-semibold text-lg flex-1">{m.title}</h3>
              </div>

              {/* expandable body */}
              <motion.ul
                variants={{
                  rest: { height: 0, opacity: 0 },
                  hover: {
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
                className="overflow-hidden ml-2 mt-4 space-y-2 text-muted-foreground"
              >
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-1">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        ))}

        {/* capstone card */}
        <motion.div
          variants={fade(modules.length * 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="h-full rounded-2xl bg-primary/10 border border-primary/20 p-8 text-center flex flex-col justify-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              {capstone.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{capstone.title}</h3>
            <ul className="space-y-2 text-primary/50 font-medium">
              {capstone.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* --------------- bottom CTA ------------ */}
      <section className="relative z-10 container mx-auto px-4 mt-24">
        <motion.div
          {...fade(0)}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build .NET apps?
          </h2>
          <p className="text-muted-foreground mb-6">
            Secure your seat today and start coding with confidence.
          </p>
          <a
            href="https://wa.me/919345111211"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Register for Training
          </a>
        </motion.div>
      </section>
    </div>
  );
}
