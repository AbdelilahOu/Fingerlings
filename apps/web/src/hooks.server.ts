import {
  buildHomepageLinkHeader,
  renderMarkdownResponse,
  shouldServeMarkdown,
} from "$lib/server/agent-discovery";
import type { Handle } from "@sveltejs/kit";

const HTML_PAGE_RE = /^\/(?:$|blog(?:\/[^./]+)?|career(?:\/[^./]+)?|projects(?:\/[^./]+)?)$/;

export const handle: Handle = async ({ event, resolve }) => {
  if (shouldServeMarkdown(event.request) && HTML_PAGE_RE.test(event.url.pathname)) {
    const markdown = renderMarkdownResponse(event.url.pathname, event.url.origin);

    if (markdown) {
      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=0, s-maxage=3600",
          Vary: "Accept",
          Link: buildHomepageLinkHeader(event.url.origin),
        },
      });
    }
  }

  const response = await resolve(event);

  if (HTML_PAGE_RE.test(event.url.pathname)) {
    const headers = new Headers(response.headers);
    headers.set("Vary", mergeVary(headers.get("Vary"), "Accept"));

    if (event.url.pathname === "/") {
      headers.set("Link", buildHomepageLinkHeader(event.url.origin));
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
};

function mergeVary(current: string | null, value: string): string {
  if (!current) return value;

  const parts = new Set(
    current
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean),
  );

  parts.add(value);
  return Array.from(parts).join(", ");
}
