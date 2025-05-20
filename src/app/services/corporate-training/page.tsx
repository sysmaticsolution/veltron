"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  GraduationCap, 
  Users, 
  BrainCircuit, 
  BarChart3, 
  Monitor, 
  Award,
  Timer,
  Library,
  Verified,
  CheckCircle
} from "lucide-react";

export default function CorporateTrainingPage() {
  const coursesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the header elements
    gsap.fromTo(
      ".header-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate the header image
    gsap.fromTo(
      ".header-image",
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "back.out(1.7)", 
        delay: 0.3 
      }
    );
    
    // Animate the course cards
    const courseCards = gsap.utils.toArray('.course-card') as HTMLElement[];
    courseCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1
        }
      );
    });
    
    // Animate the benefit cards
    const benefitCards = gsap.utils.toArray('.benefit-card') as HTMLElement[];
    benefitCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.1
        }
      );
    });
    
    // Animate testimonials
    const testimonials = gsap.utils.toArray('.testimonial') as HTMLElement[];
    testimonials.forEach((testimonial, i) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: testimonial,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2
        }
      );
    });
    
    // Floating animation for elements
    gsap.to(".float-element", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl opacity-60 transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/4 left-[-20%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl opacity-40"></div>
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl opacity-50"></div>
        
        {/* Education symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full flex flex-wrap">
            {[
              '📚', '🎓', '📊', '💻', '📝', '🔍', '📈', '🧠', '✅', '📱'
            ].map((symbol, i) => (
              <div key={i} className="text-3xl opacity-20" style={{ position: 'absolute', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}>
                {symbol}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="header-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Corporate <span className="text-primary">Training</span> Programs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Customized training solutions to upskill your workforce, enhance productivity, and drive innovation in your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Information</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/courses">View Course Catalog</Link>
                </Button>
              </div>
            </div>
            
            <div className="header-image relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-xl blur-lg"></div>
                <div className="relative bg-background rounded-xl shadow-xl p-6 border border-muted/20">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Expert-Led Training</h3>
                        <p className="text-sm text-muted-foreground">Industry professionals with real-world experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <BrainCircuit className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Practical Skills</h3>
                        <p className="text-sm text-muted-foreground">Hands-on learning with real-world applications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Customized Approach</h3>
                        <p className="text-sm text-muted-foreground">Programs tailored to your organization's needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Verified className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Certification</h3>
                        <p className="text-sm text-muted-foreground">Industry-recognized credentials for your team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section ref={coursesRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive corporate training programs cover a wide range of technical skills and business domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Monitor className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Equip your team with the skills to build modern, responsive web applications using the latest technologies and frameworks.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">HTML, CSS, JavaScript fundamentals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">React, Angular, Vue frameworks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Backend development with Node.js</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Develop your team's ability to analyze data, derive insights, and make data-driven decisions to drive business growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Data visualization techniques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">SQL and database fundamentals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Python for data analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Introduce your team to the fundamentals of machine learning and AI to build intelligent solutions for your business.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Supervised and unsupervised learning</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Neural networks and deep learning</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Model deployment and monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Library className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Computing</h3>
                <p className="text-muted-foreground mb-4">
                  Train your team on cloud technologies to leverage scalable, flexible infrastructure for your applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">AWS, Azure, Google Cloud</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Cloud architecture and security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Containerization and Kubernetes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Develop your team's digital marketing skills to increase brand awareness and drive customer acquisition.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">SEO and content marketing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Social media strategy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Analytics and performance tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="course-card border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Timer className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Management</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance your team's ability to plan, execute, and deliver projects on time and within budget.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Agile methodologies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Risk management and mitigation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm">Stakeholder communication</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits of Corporate Training</h2>
              <p className="text-muted-foreground mb-8">
                Investing in your employees' skills and knowledge delivers tangible benefits to your organization, from increased productivity to improved retention.
              </p>
              
              <div className="space-y-6">
                <div className="benefit-card flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Increased Productivity</h3>
                    <p className="text-muted-foreground">
                      Equip your employees with the skills and knowledge they need to work more efficiently and effectively.
                    </p>
                  </div>
                </div>
                
                <div className="benefit-card flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Employee Retention</h3>
                    <p className="text-muted-foreground">
                      Show your commitment to employee growth and development, increasing satisfaction and reducing turnover.
                    </p>
                  </div>
                </div>
                
                <div className="benefit-card flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation Culture</h3>
                    <p className="text-muted-foreground">
                      Foster a culture of continuous learning and innovation that keeps your organization competitive in a rapidly changing market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg blur-lg opacity-50"></div>
              <div className="relative bg-muted/10 rounded-lg p-6 border border-primary/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="float-element text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">94%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      of employees would stay longer if their company invested in their learning
                    </p>
                  </div>
                  
                  <div className="float-element text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">83%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      increase in productivity after implementing training programs
                    </p>
                  </div>
                  
                  <div className="float-element text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">70%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      of employees feel more engaged when given opportunities to develop
                    </p>
                  </div>
                  
                  <div className="float-element text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">3.5x</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      return on investment from comprehensive training programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-muted/10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from organizations that have transformed their teams through our corporate training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial bg-background rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <span className="text-primary-foreground text-lg">"</span>
              </div>
              <p className="text-muted-foreground italic mb-6">
                "The data analytics training program exceeded our expectations. Our team now has the skills to extract meaningful insights from our data, driving more informed business decisions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted/30 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">CTO, TechVision Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial bg-background rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <span className="text-primary-foreground text-lg">"</span>
              </div>
              <p className="text-muted-foreground italic mb-6">
                "The web development program transformed our team's capabilities. We're now building modern, responsive applications in-house, significantly reducing our development costs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted/30 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">IT Director, Global Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial bg-background rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                <span className="text-primary-foreground text-lg">"</span>
              </div>
              <p className="text-muted-foreground italic mb-6">
                "The instructor's expertise and the hands-on approach made our cloud computing training highly effective. Our team is now confidently managing our cloud infrastructure."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-muted/30 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Emily Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Cloud Architect, InnovateCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <GraduationCap className="w-[400px] h-[400px]" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Upskill Your Team?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how our corporate training programs can help your organization stay ahead in today's competitive landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/courses">Browse Course Catalog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
