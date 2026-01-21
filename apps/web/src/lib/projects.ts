export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  challenges: string[];
  github?: string;
  web?: string;
  ogImage?: string;
}

export const projects: Project[] = [
  {
    slug: "dbmcp",
    title: "DBMcp",
    description:
      "Golang MCP server for secure PostgreSQL/MySQL connections. Run queries and explore databases programmatically — great for AI-driven testing without a GUI.",
    longDescription: `DBMcp is a Model Context Protocol (MCP) server written in Go that enables secure, programmatic access to PostgreSQL and MySQL databases. It was designed to bridge the gap between AI assistants and database operations, allowing for intelligent query execution and schema exploration without requiring a traditional GUI.

The server implements the MCP specification, making it compatible with AI tools that support the protocol. This allows developers to interact with their databases through natural language queries, automated testing scripts, or AI-driven development workflows.

Key design decisions included prioritizing security through parameterized queries, implementing connection pooling for performance, and providing a clean API that abstracts away database-specific differences between PostgreSQL and MySQL.`,
    tech: ["Golang", "MCP", "PostgreSQL", "MySQL"],
    features: [
      "Secure database connections with parameterized queries",
      "Support for both PostgreSQL and MySQL",
      "Schema exploration and introspection",
      "Query execution with result formatting",
      "MCP protocol compliance for AI integration",
    ],
    challenges: [
      "Implementing the MCP protocol specification in Go",
      "Handling differences between PostgreSQL and MySQL query syntax",
      "Ensuring security while providing flexible query capabilities",
      "Optimizing connection pooling for concurrent requests",
    ],
    github: "https://github.com/AbdelilahOu/DBMcp",
  },
  {
    slug: "mahalli",
    title: "Mahalli",
    description:
      "Tauri desktop app for small businesses. Manages inventory, customers, quotes, and orders using Nuxt 3, TypeScript, Rust, and SQLite.",
    longDescription: `Mahalli is a comprehensive desktop application built for small businesses to manage their daily operations. The name "Mahalli" means "local" in Arabic, reflecting its focus on helping local businesses streamline their workflows.

Built with Tauri, the application combines a Nuxt 3 frontend with a Rust backend, delivering native performance while maintaining a modern, responsive UI. SQLite provides reliable local data storage without requiring external database servers.

The application handles the complete business workflow from customer management to quote generation and order tracking. The inventory system includes low-stock alerts, while the reporting features provide insights into sales trends and customer behavior.`,
    tech: ["Nuxt 3", "TypeScript", "Tailwind CSS", "Tauri", "SQLite", "Rust"],
    features: [
      "Complete inventory management with stock tracking",
      "Customer database with purchase history",
      "Quote generation and conversion to orders",
      "Order tracking and fulfillment workflow",
      "Sales reports and analytics dashboard",
      "Offline-first architecture with local SQLite storage",
    ],
    challenges: [
      "Integrating Nuxt 3 with Tauri IPC for seamless communication",
      "Designing an intuitive UI for non-technical users",
      "Implementing efficient SQLite queries for reporting",
      "Building a printable quote/invoice system",
    ],
    web: "https://mahalli-web.pages.dev/",
    github: "https://github.com/AbdelilahOu/Mahalli",
  },
  {
    slug: "cobracase",
    title: "Cobracase",
    description:
      "Custom phone case e-commerce store. Users upload images, add text, preview, and buy. Built with Next.js, PostgreSQL, Drizzle ORM, and Stripe.",
    longDescription: `Cobracase is a full-featured e-commerce platform that allows customers to design and purchase custom phone cases. The platform provides an intuitive design tool where users can upload their own images, add text overlays, and see a real-time preview of their custom case before purchasing.

The technical stack centers on Next.js for the frontend and API routes, with PostgreSQL as the database managed through Drizzle ORM. Payment processing is handled securely through Stripe, supporting multiple payment methods and currencies.

The image processing pipeline handles uploads, applies transformations for the case preview, and generates production-ready files for manufacturing. The system includes order management, shipping integration, and customer notifications.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "Stripe", "Kinde"],
    features: [
      "Drag-and-drop image upload for case customization",
      "Real-time case preview with accurate mockups",
      "Text overlay with font and color options",
      "Secure checkout with Stripe payment processing",
      "Order tracking and email notifications",
      "Admin dashboard for order management",
    ],
    challenges: [
      "Building an intuitive drag-and-drop design interface",
      "Generating accurate phone case mockup previews",
      "Handling image uploads and processing at scale",
      "Implementing a robust Stripe checkout flow",
    ],
    web: "https://case-ecommerce.vercel.app/",
    github: "https://github.com/AbdelilahOu/Case-ecommerce",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
