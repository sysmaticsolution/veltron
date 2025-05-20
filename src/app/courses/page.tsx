"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedParticles from "@/components/AnimatedParticles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Form states
type FormState = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";


// Course data
const courses = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "A comprehensive 3-month professional training program covering Data Analytics, Tableau, Power BI, SQL, and Python - all essential skills bundled in one complete package for aspiring data professionals.",
    duration: "12 Weeks (3 Months)",
    level: "Beginner to Advanced",
    curriculum: [
      "Tableau for Interactive Dashboards",
      "Power BI for Business Intelligence", 
      "SQL for Database Management & Queries",
      "Python for Data Analysis & Automation",
      "Data Collection & Preprocessing",
      "Statistical Analysis & Modeling",
      "Advanced Visualization Techniques",
      "Real-world Analytics Projects"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  },
  {
    id: "tableau",
    title: "Tableau",
    description: "Become proficient in Tableau, the leading data visualization platform, to create powerful, interactive dashboards and data storytelling solutions for business intelligence. This module is included in our comprehensive Data Analytics course.",
    duration: "Part of 3-Month Data Analytics",
    level: "Intermediate",
    curriculum: [
      "Tableau Desktop & Interface Study",
      "Data Types & Connection Methods",
      "Dimensions, Measures & Calculations",
      "LOD Expressions & Table Calculations",
      "Advanced Functions & Visualizations",
      "Data Modeling (Relationships, Joins, Unions)",
      "Dashboard Actions & Functions",
      "Real-time Dashboard Creation"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    )
  },
  {
    id: "power-bi",
    title: "Power BI",
    description: "Master Microsoft Power BI to transform raw data into stunning interactive visualizations and powerful business intelligence solutions. This module is included in our comprehensive Data Analytics course.",
    duration: "Part of 3-Month Data Analytics",
    level: "Beginner to Intermediate",
    curriculum: [
      "Power BI Components & Interface Study",
      "Power Query Editor (ETL Process)",
      "Data Modeling & Relationship Types",
      "DAX Calculations & Functions",
      "Advanced Visualizations & AI Visuals",
      "Cross Filter Directions",
      "Dashboard Creation & Publishing",
      "Power BI Service Integration"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    )
  },
  {
    id: "sql",
    title: "SQL",
    description: "Master Structured Query Language (SQL) for managing relational databases, writing complex queries, and extracting valuable business insights from your data. This module is included in our comprehensive Data Analytics course.",
    duration: "Part of 3-Month Data Analytics",
    level: "Beginner to Advanced",
    curriculum: [
      "Introduction to Databases & SQL",
      "SQL Statements (DDL, DML, DQL, TCL)",
      "SQL Functions & Data Manipulation",
      "Joins (Inner, Left, Right, Full, Self, Cross)",
      "Constraints & Database Relationships",
      "Set Operators (Union, Intersect, Minus)",
      "Views & Materialized Views",
      "Subqueries & Performance Optimization"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 14a8 3 0 0 0 16 0" />
        <path d="M4 10a8 3 0 0 0 16 0" />
      </svg>
    )
  },
  {
    id: "python",
    title: "Python",
    description: "Learn Python programming from scratch and master essential libraries for data analysis, machine learning, and automation to solve real-world business problems. This module is included in our comprehensive Data Analytics course.",
    duration: "Part of 3-Month Data Analytics",
    level: "Beginner to Advanced",
    curriculum: [
      "Python Fundamentals",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "File Handling & I/O",
      "Libraries (NumPy, Pandas)",
      "Web Scraping",
      "API Integration",
      "Python for Data Science"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  },
  {
    id: "plsql",
    title: "PL/SQL",
    description: "Master Oracle's Procedural Language extension for SQL to develop complex database applications and stored procedures.",
    duration: "8 Weeks",
    level: "Intermediate",
    curriculum: [
      "PL/SQL Fundamentals",
      "Procedures & Functions",
      "Triggers & Packages",
      "Error Handling",
      "Cursors & Collections",
      "Database Optimization",
      "Performance Tuning",
      "Real-world Applications"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M8 9h8" />
        <path d="M8 13h6" />
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
        <path d="m9 16 3 3 3-3" />
      </svg>
    )
  },
  {
    id: "java-fullstack",
    title: "Java Fullstack",
    description: "Comprehensive training in Java-based full-stack development covering Core Java, Spring Boot, Hibernate, and modern frontend frameworks for building enterprise applications.",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    curriculum: [
      "Core Java & OOP Fundamentals",
      "Collections Framework & Multi-threading",
      "Spring Framework & Spring Boot",
      "Hibernate ORM & JPA",
      "RESTful API Development",
      "Frontend with React/Angular",
      "Microservices Architecture",
      "Real-world Project Implementation"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M18 3v4c0 2-2 4-4 4s-4-2-4-4V3" />
        <path d="M14 21v-4c0-2-2-4-4-4s-4 2-4 4v4" />
        <path d="M3 7v4c0 2 2 4 4 4s4-2 4-4V7" />
        <path d="M21 17v-4c0-2-2-4-4-4s-4 2-4 4v4" />
      </svg>
    )
  },
  {
    id: "dotnet",
    title: ".NET - Complete",
    description: "Comprehensive training in .NET framework and C# for building enterprise applications, web services, and cloud-based solutions with modern architectural patterns.",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    curriculum: [
      "C# Programming Fundamentals",
      "Object-Oriented Programming Principles",
      "ASP.NET Core MVC & Web API",
      "Entity Framework Core & Database Design",
      "LINQ & Lambda Expressions",
      "Authentication & Authorization",
      "Azure Cloud Integration",
      "Enterprise Application Architecture"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M2 12h10" />
        <path d="M9 4v16" />
        <path d="m22 12-3-5" />
        <path d="m22 12-3 5" />
        <path d="m16 7-4 10" />
      </svg>
    )
  },
  {
    id: "salesforce",
    title: "Salesforce - Complete",
    description: "Comprehensive training in Salesforce development, administration, and implementation for building cloud-based enterprise solutions.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    curriculum: [
      "Salesforce Administration",
      "Apex Programming",
      "Lightning Components",
      "Visualforce",
      "Integration & API",
      "Data Management",
      "App Builder Certification Prep",
      "Real-world Implementation Projects"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M12 22v-5" />
        <path d="m9 8 3-5 3 5" />
        <path d="m19 11-5-3 5-3" />
        <path d="m5 11 5-3-5-3" />
        <path d="M12 13V8" />
        <path d="m15 19 2-2-2-2" />
        <path d="m9 19-2-2 2-2" />
      </svg>
    )
  },
  {
    id: "fullstack-java",
    title: "Fullstack Java",
    description: "Master full-stack development with Java, Spring Boot, and modern frontend frameworks to build complete web applications.",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    curriculum: [
      "Core Java Programming",
      "Spring Framework & Spring Boot",
      "RESTful API Development",
      "JPA & Hibernate",
      "Frontend Technologies (HTML, CSS, JavaScript)",
      "React/Angular Integration",
      "Microservices Architecture",
      "Full-stack Project Development"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M4 12h16" />
        <path d="M4 6h16" />
        <path d="M4 18h16" />
        <path d="M7 3v18" />
      </svg>
    )
  },
  {
    id: "fullstack-python",
    title: "Fullstack Python",
    description: "Master end-to-end web application development with Python, Django, and modern JavaScript frameworks for building scalable, secure, and responsive applications.",
    duration: "14 Weeks",
    level: "Intermediate",
    curriculum: [
      "Python Programming Foundations",
      "Django Framework & MTV Architecture",
      "Database Design & Django ORM",
      "Django REST Framework & API Development",
      "Frontend Development with HTML, CSS & JavaScript",
      "React.js Integration & Component Architecture",
      "Authentication, Authorization & Security",
      "Deployment, CI/CD & Performance Optimization"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M4 12h16" />
        <path d="M12 3v18" />
        <path d="m9 6 3-3 3 3" />
        <path d="m9 18 3 3 3-3" />
      </svg>
    )
  },
  {
    id: "selenium",
    title: "Selenium",
    description: "Learn automated testing with Selenium to ensure software quality and reliability across web applications.",
    duration: "8 Weeks",
    level: "Intermediate",
    curriculum: [
      "Introduction to Test Automation",
      "Selenium WebDriver",
      "Locating Elements & Interactions",
      "Test Frameworks (TestNG, JUnit)",
      "Page Object Model",
      "Data-Driven Testing",
      "Cross-Browser Testing",
      "CI/CD Integration"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m15 9-6 6" />
        <path d="m15 15-6-6" />
      </svg>
    )
  },
  {
    id: "snowflake",
    title: "Snowflake",
    description: "Master Snowflake cloud data platform for data warehousing, data lakes, and data engineering solutions.",
    duration: "6 Weeks",
    level: "Intermediate",
    curriculum: [
      "Snowflake Architecture",
      "Data Loading & Unloading",
      "SQL for Snowflake",
      "Performance Optimization",
      "Security & Access Control",
      "Data Sharing & Marketplace",
      "Integration with BI Tools",
      "Time Travel & Zero-Copy Cloning"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M2 12h20" />
        <path d="M12 2v20" />
        <path d="m4.93 4.93 14.14 14.14" />
        <path d="m19.07 4.93-14.14 14.14" />
      </svg>
    )
  },

  {
    id: "fullstack-java-advanced",
    title: "Fullstack Java Advanced",
    description: "Become a full-stack Java developer with expertise in both front-end and back-end technologies using Spring Boot and React.",
    duration: "24 Weeks",
    level: "Intermediate to Advanced",
    curriculum: [
      "Java Core Concepts",
      "Object-Oriented Programming",
      "Spring Framework",
      "Spring Boot",
      "RESTful API Development",
      "Frontend with React/Angular",
      "Database Integration",
      "Deployment & DevOps"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
      </svg>
    )
  },
  {
    id: "fullstack-python-advanced",
    title: "Fullstack Python Advanced",
    description: "Master full-stack development with Python, Django, and modern front-end technologies like React.",
    duration: "24 Weeks",
    level: "Intermediate to Advanced",
    curriculum: [
      "Python Programming",
      "Django Framework",
      "RESTful API Development",
      "Django ORM",
      "Frontend with React",
      "Database Integration",
      "Authentication & Authorization",
      "Deployment Strategies"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="15" x2="9" y1="9" y2="15" />
      </svg>
    )
  },
  {
    id: "selenium testing",
    title: "Selenium Testing",
    description: "Learn automated testing with Selenium for web applications, including test design, execution, and CI/CD integration.",
    duration: "12 Weeks",
    level: "Intermediate",
    curriculum: [
      "Selenium Fundamentals",
      "WebDriver API",
      "Test Automation Framework",
      "Page Object Model",
      "TestNG/JUnit Integration",
      "Data-Driven Testing",
      "CI/CD Pipeline Integration",
      "Test Reporting & Analysis"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v16.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
        <path d="M3 7.6v16.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
        <path d="M15 2v5h5" />
      </svg>
    )
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Master DevOps methodologies and tools for automating the software delivery lifecycle, improving collaboration, and ensuring continuous deployment of high-quality applications.",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    curriculum: [
      "DevOps Principles & Methodology",
      "Linux Administration & Shell Scripting",
      "Version Control with Git & GitHub",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (Terraform, Ansible)",
      "Containerization with Docker",
      "Kubernetes for Container Orchestration",
      "Monitoring, Logging & Cloud Integration"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
        <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
        <path d="M12 16v-8" />
        <path d="M12 8l-2 2" />
        <path d="M12 8l2 2" />
        <path d="M12 16l-2 -2" />
        <path d="M12 16l2 -2" />
      </svg>
    )
  }
];

export default function CoursesPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  
  const courseWrapperRef = useRef<HTMLDivElement>(null);
  const courseSectionRefs = useRef<Array<HTMLDivElement | null>>(courses.map(() => null));
  const formRef = useRef<HTMLDivElement>(null);
  
  // Handle input change for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission - redirects to WhatsApp with prefilled message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name || !formState.email || !formState.phone || !formState.course) {
      alert('Please fill in all required fields');
      return;
    }
    
    setFormStatus('submitting');
    
    // Create formatted message for WhatsApp
    const message = `Hello! I'm interested in your ${formState.course} course.\n\nDetails:\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n${formState.message ? `\nMessage: ${formState.message}` : ''}`;
    
    // Phone number for WhatsApp (replace with actual number)
    const phoneNumber = '919345111211'; // India format: 91 + number
    
    // Create WhatsApp URL with prefilled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form status and show success message
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
        setFormStatus('idle');
      }, 2000);
    }, 500);
  };
  
  // Reference for the scrollable middle container
  const middleContainerRef = useRef<HTMLDivElement>(null);

  // Handle course selection
  const handleCourseClick = (index: number) => {
    setActiveSection(index);
    if (courseSectionRefs.current[index] && middleContainerRef.current) {
      // Update the form to match the selected course
      setFormState(prev => ({ ...prev, course: courses[index].title }));
      
      // Calculate the scroll position relative to the container
      const container = middleContainerRef.current;
      const targetElement = courseSectionRefs.current[index];
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      
      // Scroll the middle container to show the selected course section (without smooth behavior)
      container.scrollTo({
        top: targetElement.offsetTop - container.offsetTop
        // smooth behavior removed
      });
    }
  };
  
  // Effect to update form selection when active section changes
  useEffect(() => {
    // Update the form dropdown to match the current active section
    if (activeSection >= 0 && activeSection < courses.length) {
      setFormState(prev => ({ ...prev, course: courses[activeSection].title }));
    }
  }, [activeSection]);

  // Function to handle separate scrolling
  const handleSeparateScrolling = () => {
    // Handle mouse wheel events
    const handleWheelOnContainer = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      const container = e.currentTarget as HTMLElement;
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      // Check if we're at the top or bottom of the container
      if (
        (wheelEvent.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) || // At bottom, scrolling down
        (wheelEvent.deltaY < 0 && scrollTop <= 0) // At top, scrolling up
      ) {
        // We're at the edge, don't prevent default to allow page scrolling
        return;
      }
      
      // Otherwise, prevent page scrolling when inside container
      e.stopPropagation();
    };
    
    // Variables for touch handling
    let touchStartY = 0;
    let touchStartX = 0;
    
    // Handle touch start event
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };
    
    // Handle touch move event for scrolling on mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      
      const container = e.currentTarget as HTMLElement;
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      
      // Calculate touch direction and distance
      const deltaY = touchStartY - touchY;
      const deltaX = touchStartX - touchX;
      
      // If horizontal scrolling is greater than vertical, let the browser handle it
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;
      
      // Check if we're at the top or bottom of the container
      if (
        (deltaY > 0 && scrollTop + clientHeight >= scrollHeight) || // Scrolling down at bottom
        (deltaY < 0 && scrollTop <= 0) // Scrolling up at top
      ) {
        // We're at the edge, don't prevent default to allow page scrolling
        return;
      }
      
      // Otherwise prevent default to enable container scrolling without page scrolling
      e.preventDefault();
    };
    
    // Middle section scroll handler to sync the left sidebar
    const handleMiddleSectionScroll = () => {
      if (!middleContainerRef.current) return;
      
      // Find which course is most visible in the viewport
      const container = middleContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerMidpoint = containerRect.top + containerRect.height / 2;
      
      // Find the course section closest to the middle of the viewport
      let closestSection = 0;
      let closestDistance = Infinity;
      
      courseSectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const sectionRect = section.getBoundingClientRect();
        const sectionMidpoint = sectionRect.top + sectionRect.height / 2;
        const distance = Math.abs(containerMidpoint - sectionMidpoint);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      
      // Only update if different from current active section
      if (closestSection !== activeSection) {
        setActiveSection(closestSection);
        
        // Scroll the sidebar to show the new active item
        const sidebarItem = document.getElementById(`sidebar-course-${courses[closestSection].id}`);
        if (sidebarItem) {
          const sidebarContainer = document.querySelector('.courses-sidebar');
          if (sidebarContainer) {
            sidebarItem.scrollIntoView({ block: 'center' }); // Removed smooth behavior
          }
        }
      }
    };
    
    // Apply events to all course scroll containers
    const containers = document.querySelectorAll('.courses-scroll-container');
    containers.forEach(container => {
      // Add mouse wheel event
      container.addEventListener('wheel', handleWheelOnContainer);
      
      // Add touch events for mobile
      container.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
      container.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false }); // non-passive to allow preventDefault
    });
    
    // Make middle container touch-action: pan-y to improve native scrolling
    if (middleContainerRef.current) {
      middleContainerRef.current.style.touchAction = 'pan-y';
      middleContainerRef.current.addEventListener('scroll', handleMiddleSectionScroll);
    }
    
    return () => {
      containers.forEach(container => {
        // Clean up all event listeners
        container.removeEventListener('wheel', handleWheelOnContainer);
        container.removeEventListener('touchstart', handleTouchStart as EventListener);
        container.removeEventListener('touchmove', handleTouchMove as EventListener);
      });
      
      if (middleContainerRef.current) {
        middleContainerRef.current.removeEventListener('scroll', handleMiddleSectionScroll);
      }
    };
  };
  
  useEffect(() => {
    // Set up separate scrolling
    const cleanup = handleSeparateScrolling();
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Hero title and subtitle animation
    heroTimeline
      .fromTo(".hero-title", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(".hero-subtitle", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(".hero-line-left", 
        { width: 0 }, 
        { width: 64, duration: 0.8 }, 
        "-=0.4"
      )
      .fromTo(".hero-line-right", 
        { width: 0 }, 
        { width: 64, duration: 0.8 }, 
        "-=0.8"
      )
      .fromTo(".bg-gradient-circle", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: (i) => [0.6, 0.4, 0.5][i % 3], duration: 1.5, stagger: 0.2 }, 
        "-=1"
      );
    
    // Removed smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Set initial active section
    if (window.location.hash) {
      const courseId = window.location.hash.substring(1);
      const courseIndex = courses.findIndex(c => c.id === courseId);
      if (courseIndex !== -1) {
        setActiveSection(courseIndex);
      }
    }
    
    // Animate in the course items
    const courseItems = gsap.utils.toArray('.course-item');
    gsap.fromTo(
      courseItems,
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.1, 
        ease: "power2.out", 
        duration: 0.6 
      }
    );
    
    // Animate in the main content
    gsap.fromTo(
      '.courses-content > div',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out" 
      }
    );
    
    // Animate the form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out" 
      }
    );
    
    // Set up scroll observer for middle container to track visible courses
    if (middleContainerRef.current) {
      // Create a new IntersectionObserver for the scrollable container
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Find the index of the course that is currently visible
              const courseElement = entry.target as HTMLElement;
              const courseId = courseElement.id;
              const courseIndex = courses.findIndex(c => c.id === courseId);
              
              if (courseIndex !== -1) {
                // Update the active section
                setActiveSection(courseIndex);
                
                // Update active section state only, let React handle the dropdown value
                // Direct DOM manipulation can cause React reconciliation issues with keys
              }
            }
          });
        },
        {
          root: middleContainerRef.current,
          threshold: 0.3, // Element is considered visible when 30% is in view (reduced for better mobile experience)
          rootMargin: '-5% 0px -5% 0px' // Add some margin for better detection
        }
      );
      
      // Observe each course section
      courseSectionRefs.current.forEach(section => {
        if (section) observer.observe(section);
      });
      
      return () => {
        // Clean up the observer
        courseSectionRefs.current.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }
    
    // Check URL hash for direct course access
    if (window.location.hash) {
      const courseId = window.location.hash.substring(1);
      const courseIndex = courses.findIndex(c => c.id === courseId);
      if (courseIndex !== -1) {
        handleCourseClick(courseIndex);
      }
    }
    
    return () => {
      // Clean up scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-gradient-circle absolute top-40 right-[-20%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-60"></div>
        <div className="bg-gradient-circle absolute bottom-1/3 left-[-30%] w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl opacity-40"></div>
        <div className="bg-gradient-circle absolute top-[70%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl opacity-50"></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: 'url("/images/courses-hero.jpg")' }}
          ></div>
        </div>
        
        {/* Animated particles - Client-side only component to fix hydration mismatch */}
        <AnimatedParticles count={20} />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-30">
          <div className="text-center">
            <div className="hero-title-reveal overflow-hidden mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold hero-title text-white drop-shadow-lg">Professional Training Programs</h1>
            </div>
            <div className="hero-subtitle-reveal overflow-hidden">
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto hero-subtitle drop-shadow-md">
                Industry-relevant courses designed to build skills that match today's job market demands
              </p>
            </div>
            
            {/* Animated accent lines */}
            <div className="mt-12 relative flex justify-center items-center">
              <div className="w-16 h-[2px] bg-primary/80 hero-line-left"></div>
              <div className="w-4 h-4 rounded-full bg-primary/60 mx-2 animate-pulse"></div>
              <div className="w-16 h-[2px] bg-primary/80 hero-line-right"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Course Selector (visible only on small screens) */}
      <section className="py-8 bg-muted/10 md:hidden sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">Our Courses</h2>
          <div className="relative">
            <select 
              className="w-full p-3 bg-background border border-input rounded-md appearance-none pr-10"
              value={activeSection.toString()}
              onChange={(e) => handleCourseClick(parseInt(e.target.value))}
            >
              {courses.map((course, index) => (
                <option key={`mobile-course-${course.id}-${index}`} value={index.toString()}>
                  {course.title}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section with Scrollable Middle Section */}
      <section className="py-8 md:py-16 bg-muted/10">
        <div className="container max-w-[1440px] mx-auto px-0 sm:px-2">
          <div ref={courseWrapperRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
            
            {/* Course List (Left Side - Fixed - Hidden on Mobile) */}
            <div className="hidden md:block md:col-span-2 lg:col-span-2 pl-0 md:pl-3 lg:pl-5">
              <div className="courses-sidebar overflow-y-auto px-6 py-8 flex-1 h-full courses-scroll-container touch-pan-y">
                <h2 className="text-xl font-semibold mb-6">Our Courses</h2>
                <div className="space-y-2 pr-4">
                    {courses.map((course, index) => (
                      <div
                        key={course.id}
                        id={`sidebar-course-${course.id}`}
                        className={`course-item p-3 rounded-lg transition-all duration-300 cursor-pointer relative ${activeSection === index ? 'active-course-item pl-4' : 'hover:bg-muted border-l-4 border-transparent pl-4'}`}
                        onClick={() => handleCourseClick(index)}
                        ref={(el) => {
                          // Store reference to sidebar course item for scrolling sync
                          if (el && index === activeSection) {
                            // This is the active course item
                            const sidebarElement = el;
                            const sidebarContainer = document.querySelector('.courses-sidebar');
                            if (sidebarContainer) {
                              // Keep active course visible in sidebar
                              const containerRect = sidebarContainer.getBoundingClientRect();
                              const elementRect = sidebarElement.getBoundingClientRect();
                              
                              // Check if element is outside visible area
                              if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
                                sidebarElement.scrollIntoView({ block: 'center' }); // Removed smooth behavior
                              }
                            }
                          }
                        }}
                      >
                        {/* Active indicator */}
                        {activeSection === index && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
                        )}
                        <div className="flex items-center gap-3">
                          <div className="shrink-0">
                            {course.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{course.title}</h3>
                            <p className="text-xs text-muted-foreground">{course.duration}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
            
            {/* Course Details (Middle Section - Scrollable) */}
            <div 
              ref={middleContainerRef} 
              className="col-span-1 md:col-span-7 lg:col-span-8 courses-content courses-scroll-container max-h-[calc(100vh-100px)] md:max-h-[calc(100vh-100px)] px-4 overflow-y-auto overflow-x-hidden"
              style={{ 
                WebkitOverflowScrolling: 'touch', /* Enable smooth scrolling on iOS */
                touchAction: 'pan-y', /* Allow vertical touch scrolling */
                overscrollBehavior: 'contain' /* Prevent pull-to-refresh */
              }}
              onMouseEnter={(e) => {
                // Prevent page scrolling when hovering over course content
                document.body.classList.add('prevent-scroll');
              }}
              onMouseLeave={(e) => {
                // Re-enable page scrolling when mouse leaves course content
                document.body.classList.remove('prevent-scroll');
              }}
            >
              {/* Individual Course Sections */}
              {courses.map((course, index) => (
                <div 
                  key={course.id} 
                  id={course.id} 
                  ref={(el) => { courseSectionRefs.current[index] = el; }}
                  className={`min-h-[calc(100vh-200px)] py-6 md:py-10 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'} rounded-xl mb-10 p-4 md:p-6 border-l-4 ${activeSection === index ? 'border-primary' : 'border-transparent'} transition-all duration-300 course-section-scroll touch-pan-y mobile-course-section`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 md:mb-8 mobile-course-header">
                    <div className="p-3 md:p-4 rounded-full bg-primary/10">
                      {course.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{course.title}</h2>
                      <div className="flex flex-wrap gap-3 md:gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          <span>{course.level}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Student Performance section removed */}
                  
                  <Card className="border-none shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
                        <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed mobile-course-description">{course.description}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                          {course.curriculum.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary mt-0.5 shrink-0">
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4">Course Format</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mobile-course-content">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                                <path d="M12 20v-6M6 20V10M18 20V4" />
                              </svg>
                              <h4 className="font-medium">Skill Level</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">{course.level}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                              </svg>
                              <h4 className="font-medium">Duration</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">{course.duration}</p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                              </svg>
                              <h4 className="font-medium">Certification</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">Industry Recognized Certificate</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Career Opportunities */}
                  <Card className="border-none shadow-md overflow-hidden mt-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
                      <p className="text-muted-foreground mb-4">
                        Graduates of this program have gone on to secure roles as {course.title} Specialists, 
                        Consultants, and Team Leads in various industries including technology, finance, 
                        healthcare, and manufacturing.
                      </p>
                      
                      <Button size="lg" className="mt-4">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Enquiry Form (Right Side - Fixed on Desktop, Bottom on Mobile) */}
            <div className="lg:col-span-2 mt-8 md:mt-0 pr-0 md:pr-3 lg:pr-5">
              <div ref={formRef} className="bg-zinc-900/70 p-6 rounded-xl shadow-lg border border-zinc-800 lg:sticky lg:top-20 courses-scroll-container max-h-[calc(100vh-8rem)] mx-auto md:mx-0">
                <h3 className="text-xl font-semibold mb-4 text-primary">Enquire Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-1">Interested Course</label>
                    <div className="relative">
                      {/* Current Course Display (replaces the standard dropdown) */}
                      <div className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary flex items-center justify-between text-white">
                        <span>
                          {activeSection >= 0 && activeSection < courses.length 
                            ? courses[activeSection].title 
                            : "Select a course"}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                      
                      {/* Hidden actual select for form submission */}
                      <select 
                        id="course" 
                        name="course" 
                        value={activeSection >= 0 ? courses[activeSection].title : ""}
                        onChange={handleInputChange}
                        required
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={`opt-${course.id}-${index}`} value={course.title}>{course.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg flex items-center justify-center gap-2"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        WhatsApp Opened
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="h-5 w-5">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                        Send WhatsApp
                      </>
                    )}
                  </Button>
                  
                  {formStatus === 'success' && (
                    <div className="text-center text-sm text-primary">
                      Thank you for your enquiry! We'll get back to you shortly.
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="text-center text-sm text-destructive">
                      There was an error submitting your enquiry. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
