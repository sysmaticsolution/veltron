"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Download,
  Code,
  Users,
  Activity,
  Wifi,
  Package,
  HardDrive,
  FileCode,
  BookOpen,
  Monitor,
  ShieldCheck,
  RefreshCcw,
  Wrench,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

/* -------------------------------------------------------------------------- */
/*  Animation helpers                                                         */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type Module = { title: string; icon: JSX.Element; topics: string[] };

const modules: Module[] = [
  {
    title: "Introduction to Linux",
    icon: <Terminal className="h-6 w-6" />,
    topics: [
      "History & distributions",
      "Kernel, shell & user-space",
      "Open-source philosophy",
    ],
  },
  {
    title: "Installation & First Steps",
    icon: <Download className="h-6 w-6" />,
    topics: ["VM / dual-boot", "Terminal basics", "Filesystem hierarchy"],
  },
  {
    title: "Essential Commands",
    icon: <Code className="h-6 w-6" />,
    topics: ["Navigation & file ops", "grep / pipes", "Text processing"],
  },
  {
    title: "Users & Permissions",
    icon: <Users className="h-6 w-6" />,
    topics: ["useradd / groupadd", "chmod / chown", "sudo best-practices"],
  },
  {
    title: "Process Management",
    icon: <Activity className="h-6 w-6" />,
    topics: ["ps / top", "Signals & priorities", "systemd intro"],
  },
  {
    title: "Networking Fundamentals",
    icon: <Wifi className="h-6 w-6" />,
    topics: ["ip / ping", "SSH hardening", "Firewall basics"],
  },
  {
    title: "Package Management",
    icon: <Package className="h-6 w-6" />,
    topics: ["apt / yum / dnf", "Repositories", "Version locking"],
  },
  {
    title: "Storage & Disks",
    icon: <HardDrive className="h-6 w-6" />,
    topics: ["Partitioning", "Mount points", "Filesystems (ext4, xfs)"],
  },
  {
    title: "Shell Scripting",
    icon: <FileCode className="h-6 w-6" />,
    topics: ["Variables & loops", "Functions", "Cron automation"],
  },
  {
    title: "Reading Docs Like a Pro",
    icon: <BookOpen className="h-6 w-6" />,
    topics: ["man & info pages", "tldr", "Built-in help flags"],
  },
  {
    title: "Monitoring & Logs",
    icon: <Monitor className="h-6 w-6" />,
    topics: ["journalctl", "vmstat / iostat", "Resource alerts"],
  },
  {
    title: "Security Essentials",
    icon: <ShieldCheck className="h-6 w-6" />,
    topics: ["Patch management", "SELinux / AppArmor", "Key-based auth"],
  },
  {
    title: "Backup & Recovery",
    icon: <RefreshCcw className="h-6 w-6" />,
    topics: ["tar & rsync", "Snapshots", "Disaster planning"],
  },
  {
    title: "Hands-on Labs",
    icon: <Wrench className="h-6 w-6" />,
    topics: ["LAMP stack deploy", "Automated backups", "Health-check script"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function LinuxMasonry() {
  return (
    <main className="min-h-screen pb-32 overflow-x-hidden">
      {/* header ------------------------------------------------------------ */}
      <header className="max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Linux Professional Training Program
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } }}
          className="mt-6 text-lg md:text-xl text-muted-foreground"
        >
          A step-by-step journey from terminal basics to production-ready
          server administration&nbsp;&mdash;&nbsp;100&nbsp;% hands-on.
        </motion.p>
      </header>

      {/* masonry grid ------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {modules.map((m, i) => (
            <motion.article
              key={m.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="break-inside-avoid rounded-2xl border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-md p-6 shadow transition duration-300 hover:shadow-lg"
            >
              {/* icon & title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {m.icon}
                </span>
                <h3 className="text-md font-semibold">{m.title}</h3>
              </div>

              {/* bullet list */}
              <motion.ul variants={list} initial="hidden" animate="show">
                {m.topics.map((t) => (
                  <motion.li
                    key={t}
                    variants={item}
                    className="pl-4 list-disc text-muted-foreground leading-relaxed"
                  >
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* enquiry form section ------------------------------------------------- */}
      <section className="mt-20 py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-2xl font-bold flex items-center justify-center gap-2 mb-2"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                Start Your Linux Journey Today
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-muted-foreground"
              >
                Fill out the form below to enquire about our Linux course or chat directly with a course advisor
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <EnquiryForm courseName="Linux Training" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
