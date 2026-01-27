export interface Experience {
  slug: string;
  title: string;
  company: string;
  companyUrl?: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  description: string;
  longDescription: string;
  startDate: string;
  endDate: string | null;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
 {
  slug: "dev-up",
  title: "Full Stack Engineer",
  company: "DEV-UP",
  companyUrl: "https://www.linkedin.com/company/80668205/",
  type: "Full-time",
  description:
    "Build backend-heavy apps for clients with Go and TypeScript. Design APIs, model data in PostgreSQL, and build AI-powered automation helpers.",
  longDescription: `I work with a remote team building backend-heavy apps for clients. Most of my time is spent in Go and TypeScript, designing APIs, modelling data in PostgreSQL, and wiring everything up to clean frontends.

Lately I also build small AI agents that plug into existing tools (dashboards, CRMs, internal panels) to automate boring tasks like data entry and reporting. I'm usually the person making sure these agents have the right backend hooks, permissions, and observability so they're safe to run in production.`,
  startDate: "2025-04",
  endDate: null,
  location: "Netherlands",
  locationType: "Remote",
  technologies: ["Go", "TypeScript", "PostgreSQL", "Next.js", "AI/LLM"],
  highlights: [
    "Build backend-heavy applications for various clients",
    "Design and implement REST APIs with Go and TypeScript",
    "Model data and shape database architecture with PostgreSQL",
    "Build AI-powered automation tools for internal workflows",
    "Implement observability and permissions for production AI agents",
  ],
},
  {
    slug: "modoock-solutions",
    title: "Full Stack Engineer",
    company: "Modoock Solutions",
    companyUrl: "https://www.linkedin.com/company/102614308/",
    type: "Full-time",
    description:
      "Built an Electronic Medical Record and hospital management platform using Node.js, Go, Docker, PostgreSQL, and Kafka for event-driven architecture.",
    longDescription: `We built an Electronic Medical Record and hospital management platform. I worked on the backend services using Node.js and Go, with Dockerized microservices talking to PostgreSQL.

I designed and maintained an event-driven pipeline with Kafka so patient data, billing, and appointments stayed in sync across services. On top of that, I exposed these services through clear REST APIs and collaborated with the frontend/DevOps teams whenever something weird happened in production.`,
    startDate: "2023-06",
    endDate: "2025-04",
    location: "Marrakesh, Morocco",
    locationType: "Hybrid",
    technologies: ["Node.js", "Go", "Docker", "PostgreSQL", "Kafka", "REST APIs"],
    highlights: [
      "Built backend services for an Electronic Medical Record system",
      "Designed an event-driven architecture with Kafka for data synchronization",
      "Implemented Dockerized microservices communicating with PostgreSQL",
      "Exposed services through clean REST APIs",
      "Collaborated with frontend and DevOps teams for production troubleshooting",
    ],
  },
  {
    slug: "atoms-it",
    title: "Full Stack Engineer",
    company: "Atoms IT",
    companyUrl: "https://www.linkedin.com/company/96692614/",
    type: "Full-time",
    description:
      "Built a school management system with a Rust backend and React frontend, featuring bracelet-based scanner integration for automated attendance tracking.",
    longDescription: `I built a school management system with a Rust backend and a React frontend to handle things like attendance and basic student records.

The most fun bit was integrating bracelet-based scanners so attendance was recorded automatically when students walked in, no more manual lists. I also added simple dashboards for staff so they could quickly see who's in, who's late, and export data when they needed it.`,
    startDate: "2022-02",
    endDate: "2023-01",
    location: "Marrakesh, Morocco",
    locationType: "On-site",
    technologies: ["Rust", "React", "TypeScript", "PostgreSQL"],
    highlights: [
      "Built a complete school management system from scratch",
      "Implemented a Rust backend for high performance",
      "Integrated bracelet-based RFID scanners for automated attendance",
      "Created staff dashboards for attendance monitoring and reporting",
      "Built data export functionality for administrative needs",
    ],
  },
  {
    slug: "sotralait",
    title: "Frontend Developer",
    company: "SOTRALAIT",
    companyUrl: "https://www.linkedin.com/company/3280125/",
    type: "Internship",
    description:
      "Helped migrate a legacy AngularJS codebase to modern Angular with TypeScript, including multi-language support implementation.",
    longDescription: `I joined the team during a big migration from an old AngularJS codebase to modern Angular with TypeScript. I spent most days refactoring controllers into components, cleaning up templates, and fixing UI bugs that showed up during the migration.

I also helped add multi-language support using Angular's i18n tools so the app could be used comfortably in more than one language, without duplicating views.`,
    startDate: "2022-07",
    endDate: "2022-08",
    location: "Morocco",
    locationType: "Remote",
    technologies: ["Angular", "AngularJS", "TypeScript", "i18n"],
    highlights: [
      "Migrated a legacy AngularJS codebase to modern Angular",
      "Refactored controllers into Angular components",
      "Fixed UI bugs during the migration process",
      "Implemented multi-language support using Angular i18n",
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const endStr = endDate
    ? end.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "Present";

  return `${startStr} - ${endStr}`;
}

export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
  } else if (remainingMonths === 0) {
    return `${years} yr${years !== 1 ? "s" : ""}`;
  } else {
    return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
  }
}