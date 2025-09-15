import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.truflightacademy.com/",
  integrations: [
    mdx(),
    sitemap({
      // Set SEO-friendly metadata for all pages
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),

      // Customize sitemap generation with a filter and serialize function
      filter: (page) => {
        // Exclude any admin or private pages if they exist
        return (
          !page.includes("/admin/") &&
          !page.includes("/private/") &&
          !page.includes("/404")
        );
      },

      serialize: (item) => {
        // Set higher priority for important pages
        if (
          item.url.endsWith("/") ||
          item.url.includes("/discovery-flight") ||
          item.url.includes("/pilot-training")
        ) {
          item.priority = 0.9;
          item.changefreq = "weekly";
        }

        // Set medium priority for blog posts
        if (item.url.includes("/blog/")) {
          item.priority = 0.6;
          item.changefreq = "monthly";
        }

        // Set lower priority for static pages
        if (
          item.url.includes("/privacy-policy") ||
          item.url.includes("/terms")
        ) {
          item.priority = 0.3;
          item.changefreq = "yearly";
        }

        return item;
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
