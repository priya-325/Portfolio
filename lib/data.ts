import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Software Engineer",
    location: "Various Clients",
    description:
      "Redesigned and developed responsive websites for three small businesses using React.js, Node.js, Supabase, Figma, and SEO-focused frontend practices. Built custom fare calculators, service pages, reusable UI sections, form workflows, and conversion-focused landing pages, helping improve user engagement and booking inquiries by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – Present",
  },
  {
    title: "Software Engineer",
    location: "Residence Essential Limited · London, UK",
    description:
      "Built a UK property valuation MVP from the ground up, including a full-stack web application, REST-style scoring APIs, pricing logic, and AWS EC2/S3 data infrastructure. Reduced property valuation time from days to under 30 seconds and helped reduce storage costs by 40%.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 – Aug 2024",
  },
  {
    title: "Associate Tutor",
    location: "University of Dundee · Dundee, UK",
    description:
      "Delivered practical labs covering UNIX, C++, system architecture, algorithms, programming fundamentals, and AWS services to 50+ undergraduate students. Provided debugging and code-review support that helped improve programming accuracy, confidence, and assignment pass rates.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Dec 2023",
  },
  {
    title: "Software Engineer",
    location: "Cloudtaru · Hyderabad, India",
    description:
      "Developed responsive React.js and React Native interfaces for franchise and ticketing platforms. Built an API-driven admin dashboard that reduced manual administrative tasks by 35% and integrated e-KYC APIs that accelerated customer onboarding by 50%.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 – Nov 2022",
  },
] as const;

export const projectsData = [
  {
    title: "AI-Powered PDF Knowledge Assistant",
    description:
      "Full-stack RAG application that lets users upload PDF documents and ask natural-language questions about their contents. Implements PDF ingestion, text chunking, embeddings, semantic retrieval, vector storage, and grounded AI answers with source-page references.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "LangChain",
      "Supabase",
      "pgvector",
      "LLM APIs",
      "RAG",
    ],
    imageUrl: "/pdf-knowledge-assistant.png",
    githubUrl:
      "https://github.com/priya-325/LangChainProjects/tree/main/AiPoweredPdfKnowledgeAssistant",
    demoUrl: "",
  },
  {
    title: "GitHub Repo Explorer",
    description:
      "Deployed full-stack TypeScript application for searching public GitHub repositories by username and saving repositories to personalised favourites. Includes secure authentication, protected Express.js routes, Prisma persistence, responsive states, and GitHub API integration.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Supabase",
    ],
    imageUrl: "/github-repo-explorer.png",
    githubUrl: "https://github.com/priya-325/GitHubRepoExplorer",
    demoUrl: "https://github-repo-explorer-by-priyanka.vercel.app",
  },
  {
    title: "JobTracker Application",
    description:
      "Full-stack job application tracking platform with secure registration, login, JWT authentication, protected job-management routes, relational PostgreSQL storage, filtering, sorting, status tracking, and complete CRUD functionality.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],
    imageUrl: "/job-tracker.png",
    githubUrl: "https://github.com/priya-325/JobTracker",
    demoUrl: "https://job-tracker-by-priyanka.vercel.app",
  },
  {
    title: "Assistive Technology Loan Library",
    description:
      "Full-stack inventory and equipment loan-management platform created for the MSc EduAT programme. Includes authentication, role-based access control, equipment tracking, and CRUD functionality, reducing loan processing time by 40% compared with spreadsheet-based workflows.",
    tags: ["React.js", "Node.js", "MongoDB", "Authentication", "RBAC", "CRUD"],
    imageUrl: "/edu-at-loan-library.png",
    githubUrl: "https://github.com/priya-325/EduAT-Loan-Library-System",
    demoUrl: "",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Prisma",
      "JWT Authentication",
    ],
  },
  {
    category: "AI Technologies",
    skills: [
      "LangChain",
      "LLM API Integration",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Prompt Engineering",
    ],
  },
  {
    category: "Cloud & Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "AWS EC2",
      "AWS S3",
      "Vercel",
      "Netlify",
      "Render",
      "API Testing",
      "Debugging",
      "Agile Development",
    ],
  },
] as const;
