import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${site}sitemap-index.xml

# Block admin/private areas (if any in the future)
# Disallow: /admin/
# Disallow: /private/

# Block specific file types that shouldn't be indexed
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Allow important files
Allow: /sitemap-index.xml
Allow: /rss.xml

# Crawl-delay (optional - adjust based on server capacity)
# Crawl-delay: 1
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
