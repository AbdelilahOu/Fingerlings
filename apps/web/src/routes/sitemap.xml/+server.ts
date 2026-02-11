import { experiences } from "$lib/data/experiences";
import { getPosts } from "$lib/data/posts";
import { projects } from "$lib/data/projects";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc: string, lastmod?: string): string {
  const locTag = `<loc>${escapeXml(loc)}</loc>`;
  const lastmodTag = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : "";
  return `<url>${locTag}${lastmodTag}</url>`;
}

function normalizeLastmod(value?: string | null): string | undefined {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  if (/^\d{4}-\d{2}$/.test(value)) return `${value}-01`;
  if (/^\d{4}$/.test(value)) return `${value}-01-01`;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

export async function GET({ url }) {
  const origin = url.origin;
  const posts = getPosts();

  const urls: string[] = [];

  urls.push(urlEntry(origin));
  urls.push(urlEntry(`${origin}/blog`));
  urls.push(urlEntry(`${origin}/projects`));
  urls.push(urlEntry(`${origin}/career`));

  for (const post of posts) {
    urls.push(urlEntry(`${origin}/blog/${post.slug}`, normalizeLastmod(post.date)));
  }

  for (const project of projects) {
    urls.push(urlEntry(`${origin}/projects/${project.slug}`, normalizeLastmod(project.createdAt)));
  }

  for (const experience of experiences) {
    const lastmod = experience.endDate ?? experience.startDate;
    urls.push(urlEntry(`${origin}/career/${experience.slug}`, normalizeLastmod(lastmod)));
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >` +
    urls.join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}

export const prerender = true;
