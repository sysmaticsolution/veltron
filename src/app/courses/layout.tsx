import type { Metadata } from 'next';

// Course data for SEO generation
const coursesData = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "A comprehensive 3-month professional training program covering Data Analytics, Tableau, Power BI, SQL, and Python - all essential skills bundled in one complete package for aspiring data professionals.",
    keywords: "data analytics training, tableau course, power bi training, sql training, python for data analysis"
  },
  {
    id: "dotnet",
    title: ".NET - Complete",
    description: "Comprehensive training in .NET framework and C# for building enterprise applications, web services, and cloud-based solutions with modern architectural patterns.",
    keywords: "dotnet training, c# programming, asp.net course, entity framework core, enterprise application development"
  },
  {
    id: "salesforce",
    title: "Salesforce - Complete",
    description: "Comprehensive training in Salesforce development, administration, and implementation for building cloud-based enterprise solutions.",
    keywords: "salesforce training, salesforce administration, apex programming, lightning components, visualforce"
  },
  {
    id: "fullstack-java",
    title: "Fullstack Java",
    description: "Master full-stack development with Java, Spring Boot, and modern frontend frameworks to build complete web applications.",
    keywords: "java training, spring boot course, fullstack development, java web development, REST API development"
  },
  {
    id: "fullstack-python",
    title: "Fullstack Python",
    description: "Master end-to-end web application development with Python, Django, and modern JavaScript frameworks for building scalable, secure, and responsive applications.",
    keywords: "python training, django framework, fullstack python, web application development, REST framework"
  }
];

// Base metadata object (not exported, just used in generateMetadata)  
const baseMetadata = {
  title: 'Professional Training Programs | Veltron Sysmatic',
  description: 'Industry-relevant courses designed to build skills that match today\'s job market demands. Learn Data Analytics, Web Development, and more.',
  keywords: 'professional training, data analytics courses, web development training, IT training programs, career development courses',
  openGraph: {
    title: 'Professional Training Programs | Veltron Sysmatic',
    description: 'Industry-relevant courses designed to build skills that match today\'s job market demands',
    url: 'https://veltron-app.windsurf.build/courses',
    siteName: 'Veltron Sysmatic Solution',
    images: [
      {
        url: '/images/courses-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Veltron Professional Training Programs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Generate dynamic metadata based on the URL hash for better SEO per course
export function generateMetadata({ params = {}, searchParams = {} }: { params?: any, searchParams?: { [key: string]: string | string[] | undefined } } = {}): Metadata {
  // Check if there's a course ID in the URL (e.g., /courses?course=data-analytics)
  // Handle case when searchParams is undefined
  const courseId = searchParams?.course as string;
  
  if (courseId) {
    const course = coursesData.find(c => c.id === courseId);
    
    if (course) {
      return {
        title: `${course.title} Training Program | Veltron Sysmatic`,
        description: course.description,
        keywords: course.keywords,
        openGraph: {
          title: `${course.title} Training Program | Veltron Sysmatic`,
          description: course.description,
          url: `https://veltron-app.windsurf.build/courses?course=${course.id}`,
          siteName: 'Veltron Sysmatic Solution',
          images: [
            {
              url: `/images/courses/${course.id}.jpg`,
              width: 1200,
              height: 630,
              alt: `${course.title} Training Program`,
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
      };
    }
  }
  
  // Return the default metadata if no course ID is found
  return baseMetadata;
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
