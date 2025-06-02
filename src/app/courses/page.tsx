"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Code, GitBranch, Database, Brackets, Braces, FileCode, Server, CloudCog, NetworkIcon, Cpu, Bot, MessageSquare, ArrowRight, MoveRight, Sparkles, Star, GraduationCap, Clock, Users, MessageCircle } from "lucide-react";

// Define TypeScript interfaces for our course objects
interface CourseBase {
  name: string;
  href: string;
  icon: React.ReactNode;
  hasPage: boolean;
  description: string;
}

interface CourseWithTag extends CourseBase {
  tag: string;
}

// Type for course that may or may not have a tag
type Course = CourseBase | CourseWithTag;

// Helper function to type check if a course has a tag
function hasTag(course: Course): course is CourseWithTag {
  return 'tag' in course;
}

const courseCategories = {
  "Data Analytics": [
    { name: "Data Analytics", href: "/courses/data-analytics", icon: <BarChart3 className="h-6 w-6" />, hasPage: true, tag: "Most Popular", description: "Transform data into actionable insights" },
  ],
  "Programming & Development": [
    { name: "Python", href: "/courses/python", icon: <Code className="h-6 w-6" />, hasPage: true, description: "Learn Python programming from basics to advanced" },
    { name: "PL/SQL", href: "/courses/plsql", icon: <Database className="h-6 w-6" />, hasPage: true, tag: "New", description: "Master database programming with Oracle PL/SQL" },
    { name: "DSA Training", href: "/courses/dsa", icon: <GitBranch className="h-6 w-6" />, hasPage: true, description: "Master algorithms and ace technical interviews" },
    { name: "Java Training", href: "/courses/java-training", icon: <FileCode className="h-6 w-6" />, hasPage: true, description: "Core Java programming fundamentals" },
  ],
  "Web Development": [
    { name: "Python Full Stack", href: "/courses/python-fullstack", icon: <Code className="h-6 w-6" />, hasPage: true, description: "End-to-end web development with Python" },
    { name: "Angular", href: "/courses/angular", icon: <Brackets className="h-6 w-6" />, hasPage: true, tag: "Trending", description: "Master modern frontend development" },
    { name: "React Training", href: "/courses/react", icon: <Braces className="h-6 w-6" />, hasPage: true, description: "Build dynamic UIs with React and Redux" },
    { name: "Java Full Stack", href: "/courses/java-fullstack", icon: <FileCode className="h-6 w-6" />, hasPage: true, description: "Full stack development with Java technologies" },
    { name: "Java + Spring Boot", href: "/courses/java-spring", icon: <Server className="h-6 w-6" />, hasPage: true, description: "Enterprise application development with Spring" },
    { name: ".NET Training", href: "/courses/dotnet", icon: <Braces className="h-6 w-6" />, hasPage: true, description: "C# and .NET framework development" },
  ],
  "DevOps & Cloud": [
    { name: "AWS Course", href: "/courses/aws", icon: <CloudCog className="h-6 w-6" />, hasPage: true, tag: "In Demand", description: "Master cloud computing with AWS" },
    { name: "DevOps", href: "/courses/devops", icon: <NetworkIcon className="h-6 w-6" />, hasPage: true, description: "CI/CD pipelines and infrastructure automation" },
    { name: "Salesforce", href: "/courses/salesforce", icon: <CloudCog className="h-6 w-6" />, hasPage: true, description: "CRM development and administration" },
    { name: "Linux", href: "/courses/linux", icon: <Cpu className="h-6 w-6" />, hasPage: true, description: "Command line, system administration, and scripting" },
    { name: "CCNA Course", href: "/courses/ccna", icon: <NetworkIcon className="h-6 w-6" />, hasPage: true, description: "Master Cisco networking and security" },
  ],
  "Testing & Automation": [
    { name: "Java Selenium Basics", href: "/courses/java-selenium", icon: <Bot className="h-6 w-6" />, hasPage: true, description: "Web automation testing with Selenium WebDriver" },
    { name: "Interview Preparation", href: "/courses/interview-prep", icon: <MessageSquare className="h-6 w-6" />, hasPage: true, tag: "New", description: "Ace technical interviews across domains" },
  ]
};

const features = [
  { icon: <Star className="h-5 w-5" />, title: "Industry Expert Trainers", description: "Learn from professionals with extensive real-world experience" },
  { icon: <GraduationCap className="h-5 w-5" />, title: "Placement Assistance", description: "Resume building, mock interviews, and job referrals" },
  { icon: <Clock className="h-5 w-5" />, title: "Flexible Schedules", description: "Weekend and weekday batches to fit your schedule" },
  { icon: <Users className="h-5 w-5" />, title: "Small Batch Sizes", description: "Personalized attention with limited students per batch" },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Accelerate Your Career With Industry-Ready Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive, hands-on training programs designed by industry experts
            </p>
            <a 
              href="#course-categories" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
            >
              Explore Courses <MoveRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
        
        {/* Features */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="bg-card/50 backdrop-blur border border-border/30 rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="course-categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Course Catalog</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our wide range of courses designed to help you master in-demand skills
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {Object.entries(courseCategories).map(([category, courses], categoryIndex) => (
              <div key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-8">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xl mr-3">{categoryIndex + 1}</span>
                    {category}
                  </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course, index) => (
                    <motion.div 
                      key={course.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="group relative bg-card rounded-xl shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow duration-300"
                    >
                      {hasTag(course) && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          {course.tag}
                        </div>
                      )}
                      
                      <Link href={course.href} className="block p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            {course.icon}
                          </div>
                          <h3 className="text-xl font-bold">{course.name}</h3>
                        </div>
                        
                        <div className="mt-2">
                          <p className="text-muted-foreground">
                            {course.description || "Coming soon"}
                          </p>
                        </div>
                        
                        <div className="mt-4 inline-flex items-center text-primary font-medium gap-1 group-hover:translate-x-1 transition-transform duration-300">
                          {course.hasPage ? "View Course Details" : "Coming Soon"}
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Enhance Your Skills?</h2>
          <p className="text-muted-foreground mb-6">Choose from our wide range of courses and take the first step towards career growth</p>
          <a 
            href="https://wa.me/919345111211" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with Course Advisor
          </a>
        </div>
      </section>
    </main>
  );
}
