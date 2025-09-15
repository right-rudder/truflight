import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, rssURL: URL) => `\
# Robots.txt for TruFlight Academy
# Generated dynamically by Astro

# Allow all crawlers to access the site
User-agent: *
Allow: /

# Prevent crawling of admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /.well-known/
Disallow: /api/

# Prevent crawling of confirmation pages (not useful for SEO)
Disallow: /contact-confirmation/
Disallow: /enrollment-confirmation/

# Prevent crawling of form processing endpoints
Disallow: /404/
Disallow: /500/

# Allow specific important paths explicitly
Allow: /discovery-flight/
Allow: /pilot-training/
Allow: /about/
Allow: /blog/

# Crawl delay to be respectful to server resources
Crawl-delay: 1

# Sitemap location
Sitemap: ${sitemapURL.href}

# RSS feed for blog content
Sitemap: ${rssURL.href}

# Additional sitemaps for specific content types
# (Future-proofing for when you might have separate sitemaps)
# Sitemap: ${new URL("blog-sitemap.xml", sitemapURL.origin).href}
# Sitemap: ${new URL("training-sitemap.xml", sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Site URL is required for robots.txt generation");
  }

  const sitemapURL = new URL("sitemap-index.xml", site);
  const rssURL = new URL("rss.xml", site);

  return new Response(getRobotsTxt(sitemapURL, rssURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
};
