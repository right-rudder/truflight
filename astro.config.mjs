// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://truflightacademy.com",
  integrations: [
    mdx(),
    sitemap({
      customPages: [
        // Custom pages that might not be auto-discovered
      ],
      filter: (page) => {
        // Exclude any pages that shouldn't be indexed
        return !page.includes("/admin/") && !page.includes("/private/");
      },
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      // Custom function to set different priorities and change frequencies
      serialize(item) {
        const url = item.url;

        // Homepage gets highest priority
        if (url === "https://truflightacademy.com/") {
          return {
            ...item,
            priority: 1.0,
            changefreq: "daily",
          };
        }

        // Training programs are high priority
        if (url.includes("/pilot-training/")) {
          return {
            ...item,
            priority: 0.9,
            changefreq: "weekly",
          };
        }

        // Discovery flight is very important for conversions
        if (url.includes("/discovery-flight")) {
          return {
            ...item,
            priority: 0.9,
            changefreq: "weekly",
          };
        }

        // About pages are moderately important
        if (url.includes("/about/")) {
          return {
            ...item,
            priority: 0.8,
            changefreq: "monthly",
          };
        }

        // Add-on courses
        if (url.includes("/add-on/")) {
          return {
            ...item,
            priority: 0.8,
            changefreq: "weekly",
          };
        }

        // Contact and enrollment pages are important for conversions
        if (url.includes("/contact-us") || url.includes("/enrollment-form")) {
          return {
            ...item,
            priority: 0.8,
            changefreq: "weekly",
          };
        }

        // Blog posts change less frequently
        if (url.includes("/blog/") && !url.endsWith("/blog/")) {
          return {
            ...item,
            priority: 0.6,
            changefreq: "monthly",
          };
        }

        // Blog index page
        if (url.includes("/blog/") && url.endsWith("/blog/")) {
          return {
            ...item,
            priority: 0.7,
            changefreq: "weekly",
          };
        }

        // Other pages get default values
        return {
          ...item,
          priority: 0.7,
          changefreq: "weekly",
        };
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
