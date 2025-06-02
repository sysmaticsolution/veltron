"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Core expertise areas
const expertiseAreas = [
  {
    title: "Web Development",
    description: "Cutting-edge web solutions with modern frameworks and technologies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    )
  },
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable business intelligence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications with superior user experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  {
    title: "Professional Training",
    description: "Comprehensive technology training programs for modern workforce skills",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="m9 10 2 2 4-4" />
      </svg>
    )
  },
];

// Values data
const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client interactions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M7.5 12h9" />
        <path d="M7.5 9h9" />
        <path d="M7.5 15h9" />
      </svg>
    ),
    title: "Transparency",
    description: "Open communication with our clients, partners, and team members."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M6 12h12" />
        <path d="M12 6v12" />
      </svg>
    ),
    title: "Innovation",
    description: "Pushing boundaries and exploring new technologies to solve complex problems."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m5 5 14 14" />
        <path d="m5 19 14-14" />
      </svg>
    ),
    title: "Collaboration",
    description: "Working closely with clients to understand their unique needs and challenges."
  }
];

export default function AboutPage() {

  return (
    <main className="py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/5 border-b">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Veltron</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Founded in 2019, Veltron has been at the forefront of delivering innovative and results-driven IT services, empowering businesses with technology solutions and professional training.
            </p>
            <div className="inline-block bg-primary/10 rounded-lg px-4 py-2 text-primary font-medium">
              Trusted by clients since 2019
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-12 border-b">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground">
            <p>
              Founded in 2019, Veltron has been at the forefront of delivering innovative and results-driven IT services. Our core offerings span web development, data analytics, digital marketing, mobile and enterprise solutions—designed to help businesses streamline operations and accelerate growth.
            </p>
            <p>
              What began as a passion project by a group of tech enthusiasts has evolved into a full-service IT firm trusted by clients across various industries. With years of hands-on experience, we've built a reputation for reliability, transparency, and performance.
            </p>
            <p>
              At Veltron, we don't just follow technology trends—we help shape them. Our client-first approach, combined with deep technical expertise, allows us to deliver custom-tailored solutions that meet real business challenges.
            </p>
            <p>
              We proudly use the phrase "Trusted by clients since 2019", reflecting our long-standing commitment to excellence—even before our formal registration in 2024. Our journey and success have been fueled by client trust, strong referrals, and the consistent quality we deliver in every project.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-12 bg-muted/5 border-b">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background rounded-lg p-5 shadow-sm hover:shadow transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-12 border-b">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-muted/5 rounded-lg p-5 border border-muted shadow-sm hover:shadow"
              >
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with Veltron to leverage cutting-edge technology solutions and expert training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}