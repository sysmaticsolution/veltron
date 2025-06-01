"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layers3,
  Cable,
  SwitchCamera,
  Router,
  Cpu,
  Wifi,
  ShieldCheck,
  CircuitBoard,
  TrendingUp,
  ClipboardEdit,
  Laptop,
  Award,
  UserCheck,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Info,
  Clock,
  Users,
  GraduationCap,
  CheckCircle,
  Phone,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

type Module = {
  title: string;
  icon: JSX.Element;
  topics: string[];
};

const modules: Module[] = [
  {
    title: "1 · Introduction to Networking",
    icon: <Globe className="h-6 w-6" />,
    topics: [
      "What is Networking?",
      "LAN, WAN, MAN, and PAN",
      "OSI Model and TCP/IP Model",
      "Network Topologies (Star, Bus, Ring, Mesh)",
      "Introduction to Cisco Devices (Router, Switch, Firewall)",
    ],
  },
  {
    title: "2 · Network Fundamentals",
    icon: <Layers3 className="h-6 w-6" />,
    topics: [
      "IP Addressing and Subnetting",
      "IPv4 Address Classes and Private/Public Addresses",
      "Subnet Masks, CIDR Notation",
      "Basic IPv6 Concepts",
      "MAC Address and ARP",
    ],
  },
  {
    title: "3 · Ethernet and Switching Basics",
    icon: <Cable className="h-6 w-6" />,
    topics: [
      "Ethernet Standards and Cabling",
      "Frame Structure",
      "Switching Concepts",
      "MAC Address Table",
      "Collision Domains and Broadcast Domains",
    ],
  },
  {
    title: "4 · Switching Technologies",
    icon: <SwitchCamera className="h-6 w-6" />,
    topics: [
      "VLANs and Trunking",
      "VLAN Configuration",
      "VLAN Tagging (802.1Q)",
      "Inter-VLAN Routing",
      "Spanning Tree Protocol (STP)",
      "Rapid Spanning Tree Protocol (RSTP)",
    ],
  },
  {
    title: "5 · Routing Technologies",
    icon: <Router className="h-6 w-6" />,
    topics: [
      "Router Basics",
      "Static Routing",
      "Dynamic Routing Overview",
      "Routing Protocols: RIP, OSPF, EIGRP",
      "Route Summarization",
      "Administrative Distance",
    ],
  },
  {
    title: "6 · IP Services",
    icon: <Cpu className="h-6 w-6" />,
    topics: [
      "DHCP (Dynamic Host Configuration Protocol)",
      "NAT & PAT",
      "DNS Overview",
      "NTP",
      "Syslog and SNMP Basics",
    ],
  },
  {
    title: "7 · Wireless Networking",
    icon: <Wifi className="h-6 w-6" />,
    topics: [
      "Wireless Standards (802.11a/b/g/n/ac/ax)",
      "Wireless Topologies",
      "Wireless Security Basics",
      "Configuring Access Points",
    ],
  },
  {
    title: "8 · Security Fundamentals",
    icon: <ShieldCheck className="h-6 w-6" />,
    topics: [
      "Threats and Vulnerabilities",
      "Securing Network Devices",
      "Access Control Lists (Standard & Extended ACLs)",
      "VPN Fundamentals",
      "Basic Firewall Concepts",
    ],
  },
  {
    title: "9 · Automation & Programmability",
    icon: <CircuitBoard className="h-6 w-6" />,
    topics: [
      "Introduction to Network Automation",
      "APIs and Controllers",
      "Cisco DNA Center",
      "Software-Defined Networking (SDN) Basics",
      "Configuration-Management Tools (Ansible, Puppet, Chef)",
    ],
  },
  {
    title: "10 · Infrastructure Services",
    icon: <TrendingUp className="h-6 w-6" />,
    topics: [
      "QoS Basics",
      "High Availability (HSRP, VRRP)",
      "IP SLA Overview",
    ],
  },
  {
    title: "11 · Infrastructure Management",
    icon: <ClipboardEdit className="h-6 w-6" />,
    topics: [
      "Device Management (Telnet, SSH)",
      "Backing-up & Restoring Configs",
      "Upgrading Cisco IOS",
      "Licensing Basics",
    ],
  },
  {
    title: "12 · Hands-on Labs & Projects",
    icon: <Laptop className="h-6 w-6" />,
    topics: [
      "Packet Tracer / GNS3 topology build",
      "Configuring VLANs & Trunks",
      "Setting-up RIP & OSPF",
      "Configuring DHCP & NAT",
      "Basic ACL setup",
      "Wireless AP simulation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function CCNAPage() {
  return (
    <div className="relative overflow-hidden bg-background pb-20">
      {/* --- decorative blobs ------------------------------------------------ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-xl" />
      </div>

      {/* ------------------------------ HEADER ------------------------------ */}
      <header className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            CCNA Professional Training Program
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="text-xl text-muted-foreground mt-6"
          >
            Master Cisco-centric networking concepts, routing, switching &
            security to clear the CCNA and launch your network-engineering
            career.
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

      {/* -------------------------- QUICK HIGHLIGHTS ------------------------- */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <Laptop className="h-6 w-6" />, label: "Hands-on Labs" },
            {
              icon: <Award className="h-6 w-6" />,
              label: "Certification-ready Content",
            },
            { icon: <UserCheck className="h-6 w-6" />, label: "Expert Mentors" },
            {
              icon: <Briefcase className="h-6 w-6" />,
              label: "Job-placement Support",
            },
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

      {/* ---------------------------- CURRICULUM ---------------------------- */}
      <section
        id="curriculum"
        className="container mx-auto px-4 max-w-5xl space-y-16"
      >
        {modules.map((m, idx) => (
          <motion.div
            key={m.title}
            variants={fadeUp(idx * 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-start gap-6 ${
              idx % 2 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* timeline / line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 border-l border-dashed border-primary/30" />

            {/* icon */}
            <div className="shrink-0 z-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {m.icon}
              </div>
            </div>

            {/* card */}
            <div className="flex-1 bg-background/60 backdrop-blur border border-border/30 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {m.title}
              </h3>
              <ul className="space-y-2 text-muted-foreground pl-5 list-disc">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ----------------------------- CTA ---------------------------------- */}
      <section className="container mx-auto px-4 mt-24">
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Become a Network Engineer?
          </h2>
          <p className="text-muted-foreground mb-6">
            Enroll now and take the first step toward CCNA certification!
          </p>
          <a
            href="https://wa.me/919345111211"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Register for Training
          </a>
        </motion.div>
      </section>
    </div>
  );
}
