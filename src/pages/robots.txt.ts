import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${site}sitemap-index.xml
Sitemap: ${site}rss.xml

# Block admin/private areas (if any in the future)
# Disallow: /admin/
# Disallow: /private/

# Block specific file types that shouldn't be indexed
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Allow important files
Allow: /sitemap-index.xml
Allow: /sitemap-0.xml
Allow: /rss.xml

# Crawl-delay for respectful crawling
# Crawl-delay: 1

# Additional SEO optimizations
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Prevent crawling of duplicate parameters
Disallow: /*?*
Disallow: /*#*
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
