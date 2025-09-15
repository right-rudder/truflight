// Schema Components Index
// This file provides easy access to all schema markup components

export { default as LocalBusinessSchema } from './LocalBusinessSchema.astro';
export { default as CourseSchema } from './CourseSchema.astro';
export { default as FAQSchema } from './FAQSchema.astro';
export { default as ServiceSchema } from './ServiceSchema.astro';
export { default as BlogPostingSchema } from './BlogPostingSchema.astro';
export { default as OrganizationSchema } from './OrganizationSchema.astro';

// Schema Data Types
export interface CourseData {
  name: string;
  description: string;
  url: string;
  duration?: string;
  cost?: string;
  prerequisites?: string[];
  outcomes?: string[];
  flightHours?: number;
  groundHours?: number;
}

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  price?: string;
  duration?: string;
  category?: string;
  areaServed?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogData {
  title: string;
  description: string;
  content: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  keywords?: string[];
}

/**
 * Schema Implementation Guide
 * 
 * LocalBusinessSchema: Use on all pages (already in BaseHead.astro)
 * CourseSchema: Use on training program pages (implemented in CourseLayout.astro)
 * ServiceSchema: Use on service-specific pages like discovery-flight.astro
 * FAQSchema: Use on pages with FAQ sections
 * BlogPostingSchema: Use on individual blog post pages
 * OrganizationSchema: Use on about pages and corporate information pages
 * 
 * Example Usage:
 * 
 * ```astro
 * ---
 * import { CourseSchema } from '../components/schema/index.js';
 * 
 * const courseData = {
 *   name: "Private Pilot License",
 *   description: "Learn to fly helicopters...",
 *   url: "https://www.truflightacademy.com/pilot-training/private-pilot"
 * };
 * ---
 * 
 * <CourseSchema course={courseData} />
 * ```
 */