import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.truflightacademy.com/",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/pricing": "/about/pricing",
    "/careers": "/why-become-a-pilot",
    "/wecometoyou": "/#weComeToYou",
    "/registration": "/discovery-flight",
    "/videos": "/",
    "/book-now": "/about/pricing",
    "/add-ons": "/add-on/private-helicopter-add-on",
    "/about-us": "/about/our-story",
    "/services-9": "/pilot-training/external-load-training",
    "/about-the-pilot": "/about/our-chief-pilot",
    "/news": "/blog",
    "/pilot-training-old": "/pilot-training/private-pilot",
    "/slingloadtraining": "/pilot-training/external-load-training",
    "/general-9-1": "/pilot-training/external-load-training",
  },
});
