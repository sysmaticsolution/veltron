"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CourseType = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  curriculum: string[];
  icon: React.ReactNode;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

interface MobileCourseViewProps {
  courses: CourseType[];
  activeSection: number;
  setActiveSection: (index: number) => void;
  formState: FormState;
  setFormState: (state: React.SetStateAction<FormState>) => void;
}

export default function MobileCourseView({
  courses,
  activeSection,
  setActiveSection,
  formState,
  setFormState
}: MobileCourseViewProps) {
  const courseSectionRefs = useRef<Array<HTMLDivElement | null>>(courses.map(() => null));
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Handle course selection from dropdown
  const handleCourseSelection = (index: number) => {
    setActiveSection(index);
    
    // Update the form to match the selected course
    setFormState((prev: FormState) => ({ ...prev, course: courses[index].title }));
      
    // Scroll to top of the page with a slight offset for the header
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Navigate to the next course
  const handleNextCourse = () => {
    const nextIndex = (activeSection + 1) % courses.length;
    setActiveSection(nextIndex);
    setFormState((prev: FormState) => ({ ...prev, course: courses[nextIndex].title }));
    
    // Scroll back to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Navigate to the previous course
  const handlePrevCourse = () => {
    const prevIndex = (activeSection - 1 + courses.length) % courses.length;
    setActiveSection(prevIndex);
    setFormState((prev: FormState) => ({ ...prev, course: courses[prevIndex].title }));
    
    // Scroll back to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effect to add mobile-specific class to body
  useEffect(() => {
    document.body.classList.add('mobile-courses-view');
    
    return () => {
      document.body.classList.remove('mobile-courses-view');
    };
  }, []);
  
  return (
    <>
      {/* Mobile Course Selector (visible only on small screens) */}
      <section className="py-4 sm:py-6 bg-muted/10 md:hidden sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4 text-primary">Our Courses</h2>
          <div className="relative">
            <select 
              className="w-full p-3 bg-background border border-input rounded-md appearance-none pr-10 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary-focus"
              value={activeSection.toString()}
              onChange={(e) => handleCourseSelection(parseInt(e.target.value))}
            >
              {courses.map((course, index) => (
                <option key={`mobile-course-${course.id}-${index}`} value={index.toString()}>
                  {course.title}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Course Content Container - No scroller */}
      <div 
        ref={mobileContainerRef} 
        className="mobile-course-container w-full px-4 pb-20"
      >
        {/* Show only the active course section - no scrolling */}
        <div 
          key={courses[activeSection].id}
          id={courses[activeSection].id}
          ref={(el) => { courseSectionRefs.current[activeSection] = el; }}
          className="py-6 bg-background rounded-xl mb-10 p-4 border-l-4 border-primary transition-all duration-300 mobile-course-section"
        >
            <div className="flex flex-col items-center gap-4 mb-6 mobile-course-header">
              <div className="p-4 rounded-full bg-primary/10">
                {courses[activeSection].icon}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">{courses[activeSection].title}</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{courses[activeSection].duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span>{courses[activeSection].level}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mobile-course-description">{courses[activeSection].description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 mb-8">
                    {courses[activeSection].curriculum.map((item: string, i: number) => (
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
                  <div className="grid grid-cols-1 gap-4 mobile-course-content">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                          <path d="M12 20v-6M6 20V10M18 20V4" />
                        </svg>
                        <h4 className="font-medium">Skill Level</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{courses[activeSection].level}</p>
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
                      <p className="text-sm text-muted-foreground">{courses[activeSection].duration}</p>
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
                  Graduates of this program have gone on to secure roles as {courses[activeSection].title} Specialists, 
                  Consultants, and Team Leads in various industries including technology, finance, 
                  healthcare, and manufacturing.
                </p>
                
                <Button 
                  size="lg" 
                  className="mt-4 w-full"
                  onClick={() => {
                    // Set the form course value to the currently selected course
                    setFormState(prev => ({ ...prev, course: courses[activeSection].title }));
                    
                    // Scroll to the form section with a smooth animation
                    const formSection = document.querySelector('.enquiry-form-section');
                    if (formSection) {
                      const formPosition = formSection.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: formPosition - 80, // Offset for header
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
            
            {/* Course Navigation Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              {/* Next Course Button */}
              <Button 
                onClick={handleNextCourse}
                className="w-full bg-primary/90 hover:bg-primary text-white py-6 flex items-center justify-center gap-2"
              >
                <span>Next Course: {courses[(activeSection + 1) % courses.length].title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              
              {/* Previous Course Button */}
              <Button 
                onClick={handlePrevCourse}
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 py-6 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5"></path>
                  <path d="m12 19-7-7 7-7"></path>
                </svg>
                <span>Previous: {courses[(activeSection - 1 + courses.length) % courses.length].title}</span>
              </Button>
              
              {/* All Courses Button */}
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Other available courses:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {courses.map((course, idx) => (
                    idx !== activeSection && (
                      <Button 
                        key={`nav-${course.id}`}
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleCourseSelection(idx)}
                        className="border border-muted bg-muted/10 hover:bg-primary/10"
                      >
                        {course.title}
                      </Button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
