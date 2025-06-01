"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  Activity,
  GitBranch,
  Repeat,
  RefreshCcw,
  FileCode,
  Settings,
  Package,
  Cloud,
  Monitor,
  Rocket,
  Laptop,
  Award,
  UserCheck,
  Briefcase,
  ChevronRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

/* -------------------------------------------------------------------------- */
/*  Curriculum data                                                           */
/* -------------------------------------------------------------------------- */

type Module = {
  title: string;
  icon: React.ReactNode;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "1 · Introduction to DevOps",
    icon: <Activity className="h-6 w-6" />,
    topics: [
      "What is DevOps?",
      "DevOps vs Traditional IT",
      "Benefits of DevOps",
      "DevOps Lifecycle (Plan → Monitor)",
    ],
  },
  {
    title: "2 · Version Control with Git & GitLab/GitHub",
    icon: <GitBranch className="h-6 w-6" />,
    topics: [
      "Git fundamentals & commands",
      "Branching strategies (GitFlow, Trunk-based)",
      "Pull / Merge Requests",
      "CI/CD concepts overview",
    ],
  },
  {
    title: "3 · Continuous Integration (CI)",
    icon: <Repeat className="h-6 w-6" />,
    topics: [
      "What is CI?",
      "Setting-up CI pipelines",
      "Build & test automation",
      "Running unit tests",
      "Example pipelines (GitHub Actions / Jenkins)",
    ],
  },
  {
    title: "4 · Continuous Delivery & Deployment (CD)",
    icon: <RefreshCcw className="h-6 w-6" />,
    topics: [
      "CD vs Continuous Deployment",
      "Blue-green / Canary / Rolling updates",
      "Creating CD pipelines",
    ],
  },
  {
    title: "5 · Infrastructure as Code (IaC)",
    icon: <FileCode className="h-6 w-6" />,
    topics: [
      "IaC basics & benefits",
      "Terraform fundamentals",
      "Modules, remote-state, backends",
    ],
  },
  {
    title: "6 · Configuration Management",
    icon: <Settings className="h-6 w-6" />,
    topics: [
      "Why config-management?",
      "Ansible essentials",
      "Playbooks & inventories",
      "Managing fleets with Ansible",
    ],
  },
  {
    title: "7 · Containerisation with Docker",
    icon: <Package className="h-6 w-6" />,
    topics: [
      "Docker architecture",
      "Writing Dockerfiles",
      "Running & composing containers",
      "Best practices",
    ],
  },
  {
    title: "8 · Kubernetes Orchestration",
    icon: <Cloud className="h-6 w-6" />,
    topics: [
      "Kubernetes core concepts",
      "kubectl essentials",
      "Deployments, Services, ConfigMaps, Secrets",
      "Rolling-out apps on K8s",
    ],
  },
  {
    title: "9 · Monitoring & Logging",
    icon: <Monitor className="h-6 w-6" />,
    topics: [
      "Why monitoring matters",
      "Prometheus & Grafana basics",
      "Metrics, alerts, dashboards",
      "Centralised logging (ELK / Loki)",
    ],
  },
  {
    title: "10 · Real-world Projects",
    icon: <Rocket className="h-6 w-6" />,
    topics: [
      "Full CI/CD for a sample app",
      "Dockerise & deploy on K8s",
      "Provision infra with Terraform",
      "Wire up monitoring & alerts",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default function DevOpsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const hoverDelay = 120; // ms

  // helper to keep only one card open
  const openCard = (idx: number | null) => setOpen(idx);

  return (
    <div className="relative overflow-hidden bg-background pb-20">
      {/* ---------- Decorative blobs ---------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-xl" />
      </div>

      {/* ---------------- HEADER --------------- */}
      <header className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            DevOps Professional Training Program
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="text-xl text-muted-foreground mt-6"
          >
            Learn modern CI/CD, containerisation, IaC &amp; monitoring to become
            an end-to-end DevOps engineer.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#curriculum"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              View Curriculum
            </a>
            <a
              href="https://wa.me/919345111211"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              Enquire Now
            </a>
          </motion.div>
        </div>
      </header>

      {/* ----------- QUICK HIGHLIGHTS ---------- */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Laptop className="h-6 w-6" />, label: "Hands-on Labs" },
            { icon: <Award className="h-6 w-6" />, label: "Certification-ready" },
            { icon: <UserCheck className="h-6 w-6" />, label: "Expert Mentors" },
            { icon: <Briefcase className="h-6 w-6" />, label: "Placement Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.05)}
              className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- CURRICULUM ----------- */}
      <section id="curriculum" className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {modules.map((mod, idx) => (
            <motion.div key={mod.title} variants={fadeUp(idx * 0.05)} className="relative">
              {/* CARD HEADER ------------------------------------------- */}
              <button
                onMouseEnter={() => {
                  // small debounce to avoid accidental flicker
                  setTimeout(() => openCard(idx), hoverDelay);
                }}
                onMouseLeave={() => {
                  setTimeout(() => openCard(null), hoverDelay);
                }}
                // mobile: allow tap
                onClick={() => openCard(open === idx ? null : idx)}
                className={`w-full flex items-center gap-3 p-6 rounded-2xl border border-border/30 bg-background/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow text-left ${
                  open === idx ? "ring-2 ring-primary/50" : ""
                }`}
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {mod.icon}
                </div>
                <span className="font-semibold flex-1">{mod.title}</span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${
                    open === idx ? "rotate-90 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {/* CARD BODY -------------------------------------------- */}
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.25 } }}
                    className="overflow-hidden"
                  >
                    <div className="pl-20 pr-6 pb-6 pt-2">
                      <ul className="space-y-2 text-muted-foreground">
                        {mod.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- ENQUIRY FORM -------------- */}
      <section className="container mx-auto px-4 mt-24">
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Ready to Automate Everything?
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to enquire about our DevOps course or chat directly with a course advisor
            </p>
          </div>
          <EnquiryForm courseName="DevOps" />
        </motion.div>
      </section>
    </div>
  );
}
