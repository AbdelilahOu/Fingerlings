import { PUBLIC_SERVER_URL } from "$env/static/public";
import { calculateDuration, experiences, formatDateRange } from "$lib/data/experiences";
import { getPostBySlug, getPosts, getLatestPosts } from "$lib/data/posts";
import { getProjectBySlug, getLatestProjects, projects } from "$lib/data/projects";

const rawPostSources = import.meta.glob<string>("/src/posts/*.md", {
  eager: true,
  as: "raw",
});

const SITE_NAME = "Abdelilah Ouaadouch";

function absolute(origin: string, path: string): string {
  return new URL(path, origin).toString();
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function listItems(values: string[]): string {
  return values.map((value) => `- ${value}`).join("\n");
}

function section(title: string, body: string): string {
  return `## ${title}\n\n${body}`.trim();
}

function renderHomeMarkdown(origin: string): string {
  const latestProjects = getLatestProjects(2);
  const latestPosts = getLatestPosts(2);

  return [
    `# ${SITE_NAME}`,
    "",
    "Fullstack Developer specializing in Go, Rust, and TypeScript.",
    "",
    "2+ years building production APIs, full-stack products, desktop apps, and AI tools.",
    "",
    `Currently working at [DEV-UP](https://dev-up.io/).`,
    "",
    section(
      "Contact",
      [
        `- Email: [abdelilah4dev@gmail.com](mailto:abdelilah4dev@gmail.com)`,
        `- LinkedIn: [Abdelilah Ouaadouch](https://www.linkedin.com/in/ar7al/)`,
        `- GitHub: [@AbdelilahOu](https://github.com/AbdelilahOu)`,
        `- X: [@Abdelilah4dev](https://x.com/Abdelilah4dev)`,
      ].join("\n"),
    ),
    "",
    section(
      "Skills",
      [
        "- Languages: Golang, Rust, TypeScript, JavaScript, HTML, CSS",
        "- Frameworks: Next.js, Tauri, Hono.js, Nuxt.js, Gin, Chi, Actix, Express.js, Tailwind CSS",
        "- Tools: Docker, Git, GitHub, Postman",
      ].join("\n"),
    ),
    "",
    section(
      "Featured Projects",
      latestProjects
        .map(
          (project) =>
            `- [${project.title}](${absolute(origin, `/projects/${project.slug}`)}): ${project.description}`,
        )
        .join("\n"),
    ),
    "",
    section(
      "Latest Posts",
      latestPosts
        .map(
          (post) =>
            `- [${post.title}](${absolute(origin, `/blog/${post.slug}`)}): ${post.description}`,
        )
        .join("\n"),
    ),
  ]
    .filter(Boolean)
    .join("\n");
}

function renderBlogIndexMarkdown(origin: string): string {
  const posts = getPosts();

  return [
    "# Blog",
    "",
    "Technical articles about Go, Rust, TypeScript, and fullstack development.",
    "",
    section(
      "Posts",
      posts
        .map(
          (post) =>
            `- [${post.title}](${absolute(origin, `/blog/${post.slug}`)}) (${formatDate(post.date)}): ${post.description} [${post.tags.join(", ")}]`,
        )
        .join("\n"),
    ),
  ].join("\n");
}

function renderBlogPostMarkdown(slug: string, origin: string): string | null {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const raw = rawPostSources[`/src/posts/${slug}.md`];
  if (typeof raw === "string" && raw.trim().length > 0) {
    return raw;
  }

  return [
    `# ${post.title}`,
    "",
    post.description,
    "",
    `Published: ${formatDate(post.date)}`,
    "",
    section("Tags", listItems(post.tags)),
    "",
    `Read the HTML version at [${post.title}](${absolute(origin, `/blog/${slug}`)}).`,
  ].join("\n");
}

function renderProjectsIndexMarkdown(origin: string): string {
  return [
    "# Projects",
    "",
    "Portfolio of software projects including desktop apps, web applications, and developer tools.",
    "",
    section(
      "Projects",
      projects
        .map(
          (project) =>
            `- [${project.title}](${absolute(origin, `/projects/${project.slug}`)}): ${project.description} [${project.tech.join(", ")}]`,
        )
        .join("\n"),
    ),
  ].join("\n");
}

function renderProjectMarkdown(slug: string, origin: string): string | null {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  return [
    `# ${project.title}`,
    "",
    project.description,
    "",
    section(
      "Overview",
      project.longDescription
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .join("\n\n"),
    ),
    "",
    section("Key Features", listItems(project.features)),
    "",
    section("Challenges", listItems(project.challenges)),
    "",
    section("Tech Stack", listItems(project.tech)),
    "",
    section(
      "Links",
      [
        project.github ? `- GitHub: ${project.github}` : null,
        project.web ? `- Live demo: ${project.web}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    ),
    "",
    `Read the HTML version at [${project.title}](${absolute(origin, `/projects/${slug}`)}).`,
  ]
    .filter(Boolean)
    .join("\n");
}

function renderCareerIndexMarkdown(origin: string): string {
  return [
    "# Career",
    "",
    "Professional experience as a Full Stack Engineer.",
    "",
    section(
      "Experience",
      experiences
        .map(
          (experience) =>
            `- [${experience.title} at ${experience.company}](${absolute(origin, `/career/${experience.slug}`)}) (${formatDateRange(experience.startDate, experience.endDate)}): ${experience.description} [${experience.technologies.join(", ")}]`,
        )
        .join("\n"),
    ),
  ].join("\n");
}

function renderCareerMarkdown(slug: string, origin: string): string | null {
  const experience = experiences.find((entry) => entry.slug === slug);
  if (!experience) return null;

  return [
    `# ${experience.title} at ${experience.company}`,
    "",
    experience.description,
    "",
    `Duration: ${formatDateRange(experience.startDate, experience.endDate)} (${calculateDuration(experience.startDate, experience.endDate)})`,
    "",
    `Location: ${experience.location} - ${experience.locationType}`,
    "",
    section(
      "Overview",
      experience.longDescription
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .join("\n\n"),
    ),
    "",
    section("Highlights", listItems(experience.highlights)),
    "",
    section("Tech Stack", listItems(experience.technologies)),
    "",
    section(
      "Links",
      [
        experience.companyWebsite ? `- Website: ${experience.companyWebsite}` : null,
        experience.companyUrl ? `- LinkedIn: ${experience.companyUrl}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    ),
    "",
    `Read the HTML version at [${experience.title} at ${experience.company}](${absolute(origin, `/career/${slug}`)}).`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildHomepageLinkHeader(origin: string): string {
  return [
    `<${absolute(origin, "/.well-known/api-catalog")}>; rel="api-catalog"; type="application/linkset+json"`,
    `<${absolute(origin, "/docs/api")}>; rel="service-doc"; type="text/html"`,
    `<${absolute(origin, "/status")}>; rel="status"; type="application/json"`,
    `<${absolute(origin, "/.well-known/agent-skills/index.json")}>; rel="describedby"; type="application/json"`,
  ].join(", ");
}

export function shouldServeMarkdown(request: Request): boolean {
  if (request.method !== "GET") return false;

  const accept = request.headers.get("accept") ?? "";
  return accept.includes("text/markdown");
}

export function renderMarkdownResponse(pathname: string, origin: string): string | null {
  if (pathname === "/") return renderHomeMarkdown(origin);
  if (pathname === "/blog") return renderBlogIndexMarkdown(origin);
  if (pathname === "/projects") return renderProjectsIndexMarkdown(origin);
  if (pathname === "/career") return renderCareerIndexMarkdown(origin);

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) return renderBlogPostMarkdown(blogMatch[1], origin);

  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) return renderProjectMarkdown(projectMatch[1], origin);

  const careerMatch = pathname.match(/^\/career\/([^/]+)$/);
  if (careerMatch) return renderCareerMarkdown(careerMatch[1], origin);

  return null;
}

export async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function buildAgentSkillsIndex(origin: string) {
  const skills = [
    {
      name: "link-headers",
      type: "markdown",
      description: "Explains the homepage Link headers that advertise the API catalog and docs.",
      path: "/.well-known/agent-skills/link-headers.md",
      content: `# Link Headers\n\nThis site advertises agent-facing resources with RFC 8288 Link headers on the homepage.\n\nUse the homepage Link header to discover the API catalog, API docs, status endpoint, and skills index.\n`,
    },
    {
      name: "markdown-negotiation",
      type: "markdown",
      description:
        "Describes how the site serves Markdown when Accept: text/markdown is requested.",
      path: "/.well-known/agent-skills/markdown-negotiation.md",
      content: `# Markdown Negotiation\n\nRequests that send \`Accept: text/markdown\` receive a Markdown representation of the requested HTML page.\n\nHTML remains the default representation for browsers.\n`,
    },
    {
      name: "content-signals",
      type: "markdown",
      description: "Documents the Content-Signal directives published in robots.txt.",
      path: "/.well-known/agent-skills/content-signals.md",
      content: `# Content Signals\n\nThe site's robots.txt publishes Content-Signal directives for ai-train, search, and ai-input.\n`,
    },
    {
      name: "api-catalog",
      type: "markdown",
      description: "Explains the RFC 9727 API catalog published at /.well-known/api-catalog.",
      path: "/.well-known/agent-skills/api-catalog.md",
      content: `# API Catalog\n\nThe site publishes an RFC 9727 API catalog in \`application/linkset+json\` format.\n\nIt advertises the API spec, human docs, and health endpoint for automated discovery.\n`,
    },
  ] as const;

  return {
    $schema: "https://agentskills.io/schemas/agent-skills-discovery-v0.2.0.json",
    generatedAt: new Date().toISOString(),
    origin,
    skills: await Promise.all(
      skills.map(async (skill) => ({
        name: skill.name,
        type: skill.type,
        description: skill.description,
        url: absolute(origin, skill.path),
        sha256: await sha256Hex(skill.content),
      })),
    ),
  };
}

export function getSkillDocument(name: string): string | null {
  const documents: Record<string, string> = {
    "link-headers":
      "# Link Headers\n\nThis site advertises agent-facing resources with RFC 8288 Link headers on the homepage.\n\nUse the homepage Link header to discover the API catalog, API docs, status endpoint, and skills index.\n",
    "markdown-negotiation":
      "# Markdown Negotiation\n\nRequests that send `Accept: text/markdown` receive a Markdown representation of the requested HTML page.\n\nHTML remains the default representation for browsers.\n",
    "content-signals":
      "# Content Signals\n\nThe site's robots.txt publishes Content-Signal directives for ai-train, search, and ai-input.\n",
    "api-catalog":
      "# API Catalog\n\nThe site publishes an RFC 9727 API catalog in `application/linkset+json` format.\n\nIt advertises the API spec, human docs, and health endpoint for automated discovery.\n",
  };

  return documents[name] ?? null;
}

export function buildApiCatalog(origin: string) {
  return {
    linkset: [
      {
        anchor: new URL("/", PUBLIC_SERVER_URL).toString(),
        profile: [
          {
            href: "https://www.rfc-editor.org/info/rfc9727",
          },
        ],
        "service-desc": [
          {
            href: new URL("/api-reference", PUBLIC_SERVER_URL).toString(),
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: absolute(origin, "/docs/api"),
            type: "text/html",
          },
        ],
        status: [
          {
            href: absolute(origin, "/status"),
            type: "application/json",
          },
        ],
      },
    ],
  };
}

export function buildMcpServerCard(origin: string) {
  return {
    $schema: "https://modelcontextprotocol.io/schemas/2025-03-26/server-card.json",
    serverInfo: {
      name: "Fingerlings portfolio",
      version: "0.0.1",
    },
    transport: {
      type: "http",
      url: absolute(origin, "/mcp"),
    },
    capabilities: {
      tools: [],
      resources: [],
      prompts: [],
    },
  };
}

export function buildProtectedResourceMetadata() {
  return {
    resource: new URL("/", PUBLIC_SERVER_URL).toString(),
    resource_documentation: new URL("/api-reference", PUBLIC_SERVER_URL).toString(),
  };
}
