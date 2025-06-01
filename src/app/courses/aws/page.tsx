// components/AWS.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Box,
  Globe,
  Shield,
  Zap,
  Terminal,
  Key,
  MapPin,
  Menu,
  Layers,
  BarChart2,
  ZapOff,
  Info,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function AWS() {
  return (
    <div className="relative overflow-hidden bg-background pb-20">
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-xl" />
      </div>

      {/* Header Section */}
      <header className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional AWS Training Program
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Master Cloud Computing with AWS
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Gain hands-on experience with AWS services, architecture, and best practices.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://wa.me/919345111211"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                <Cloud className="h-5 w-5" />
                Enquire Now
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Highlights Bar */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Terminal className="h-6 w-6" />
            </div>
            <span className="font-medium">Hands-on Labs</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Shield className="h-6 w-6" />
            </div>
            <span className="font-medium">Security Best Practices</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Server className="h-6 w-6" />
            </div>
            <span className="font-medium">Scalable Architectures</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-4 rounded-lg bg-background/50 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Layers className="h-6 w-6" />
            </div>
            <span className="font-medium">Infrastructure as Code</span>
          </motion.div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto bg-background/50 border border-border/30 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Info className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold">Program Overview</h2>
          </div>
          <p className="text-muted-foreground mb-3">
            A complete AWS training program that covers core AWS services, best practices, and hands-on labs to prepare you for real-world cloud deployments.
          </p>
          <p className="text-muted-foreground">
            Learn from AWS-certified instructors, follow a skills-first approach, and build scalable, secure cloud architectures.
          </p>
        </div>
      </section>

      {/* Course Modules */}
      <div className="container mx-auto px-4 mb-16 space-y-12">
        {/* 1. Introduction to AWS */}
        <motion.section
          id="introduction"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Cloud className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">1. Introduction to Cloud Computing & AWS</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-4">
              <p>What is Cloud Computing?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Cloud Service Models (IaaS, PaaS, SaaS)</li>
                <li>Cloud Deployment Models (Public, Private, Hybrid)</li>
                <li>Overview of AWS</li>
                <li>AWS Global Infrastructure (Regions, Availability Zones, Edge Locations)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 2. Getting Started with AWS */}
        <motion.section
          id="getting-started"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">2. Getting Started with AWS</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-4">
              <p>● Creating an AWS Free Tier Account</p>
              <p>● Introduction to the AWS Management Console</p>
              <p>● AWS CLI and SDK Overview</p>
              <div>
                <p>● Identity and Access Management (IAM):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Users, Groups, Roles, Policies</li>
                  <li>Best Practices for IAM</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. Compute Services */}
        <motion.section
          id="compute-services"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Server className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">3. Compute Services</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon EC2 (Elastic Compute Cloud)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Launching and Connecting to EC2 Instances</li>
                  <li>Security Groups and Key Pairs</li>
                  <li>AMIs and EC2 Instance Types</li>
                  <li>EC2 Auto Scaling and Load Balancing (ELB)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS Lambda (Serverless Compute)</h3>
                <p>Run code without provisioning or managing servers, pay only for what you use.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Elastic Beanstalk (Platform as a Service)</h3>
                <p>Deploy, manage, and scale web applications and services without worrying about infrastructure.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Storage Services */}
        <motion.section
          id="storage-services"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Box className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">4. Storage Services</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon S3 (Simple Storage Service)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Buckets, Objects, Versioning</li>
                  <li>Storage Classes (Standard, Intelligent-Tiering, Glacier)</li>
                  <li>Lifecycle Policies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon EBS (Elastic Block Store)</h3>
                <p>Persistent block storage for use with Amazon EC2 instances.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon EFS (Elastic File System)</h3>
                <p>Fully managed, scalable, elastic NFS file system for Linux-based workloads.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Storage Gateway Basics</h3>
                <p>Hybrid storage service enabling on-premises applications to use AWS cloud storage.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Networking & Content Delivery */}
        <motion.section
          id="networking"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">5. Networking & Content Delivery</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon VPC (Virtual Private Cloud)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Subnets, Route Tables, Internet Gateway, NAT Gateway</li>
                  <li>Security Groups vs NACLs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Elastic IPs & Bastion Hosts</h3>
                <p>Static IPv4 addresses designed for dynamic cloud computing. Bastion Hosts for secure administrative access.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS CloudFront (CDN Service)</h3>
                <p>Global content delivery network to accelerate your website, APIs, and video content.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS Route 53 (DNS & Domain Registration)</h3>
                <p>Highly available and scalable cloud DNS web service.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 6. Databases */}
        <motion.section
          id="databases"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">6. Databases</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon RDS (Relational Database Service)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Supported Engines (MySQL, PostgreSQL, etc.)</li>
                  <li>Multi-AZ & Read Replicas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon DynamoDB (NoSQL Database)</h3>
                <p>Key-value and document database that delivers single-digit millisecond performance at any scale.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon Aurora</h3>
                <p>MySQL- and PostgreSQL-compatible relational database built for the cloud with performance and availability.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS Database Migration Service (DMS)</h3>
                <p>Helps you migrate databases to AWS easily and securely.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Monitoring & Management */}
        <motion.section
          id="monitoring"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">7. Monitoring & Management</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Amazon CloudWatch</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Metrics, Logs, Alarms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS CloudTrail</h3>
                <p>Audit and compliance service that logs all API calls in your AWS account.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AWS Config</h3>
                <p>Resource inventory, configuration history, and change notifications to enable security and governance.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 8. Security & Compliance */}
        <motion.section
          id="security"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">8. Security & Compliance</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <p>● AWS Shared Responsibility Model</p>
              <p>● AWS KMS (Key Management Service)</p>
              <p>● AWS Secrets Manager</p>
              <p>● AWS Shield & WAF (Web Application Firewall)</p>
              <p>● Best Practices for Securing AWS Resources</p>
            </div>
          </div>
        </motion.section>

        {/* 9. Automation & DevOps */}
        <motion.section
          id="automation"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">9. Automation & DevOps on AWS</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <p>● AWS CloudFormation (Infrastructure as Code)</p>
              <p>● Elastic Container Service (ECS) & Elastic Kubernetes Service (EKS)</p>
            </div>
          </div>
        </motion.section>

        {/* 10. Application Integration */}
        <motion.section
          id="integration"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ZapOff className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">10. Application Integration</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-6">
              <p>● Amazon SNS (Simple Notification Service)</p>
              <p>● Amazon SQS (Simple Queue Service)</p>
              <p>● AWS Step Functions (Orchestration)</p>
            </div>
          </div>
        </motion.section>

        {/* 11. Real-world Projects & Labs */}
        <motion.section
          id="projects"
          className="bg-background/50 border border-border/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Layers className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">11. Real-world Projects & Hands-On Labs</h2>
            </div>

            <div className="ml-0 md:ml-16 prose text-muted-foreground space-y-4">
              <ul className="list-disc list-inside space-y-1">
                <li>Host a Static Website on S3 + CloudFront + Route 53</li>
                <li>Deploy a Scalable Web App using EC2 Auto Scaling and ELB</li>
                <li>Set up Monitoring with CloudWatch and Alarms</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Enquiry Form Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-3xl mx-auto rounded-2xl p-8 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur border border-border/30 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Launch Your AWS Cloud Career
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to enquire about our AWS Cloud course or chat directly with a course advisor
            </p>
          </div>
          <EnquiryForm courseName="AWS Cloud" />
        </motion.div>
      </div>
    </div>
  );
}
