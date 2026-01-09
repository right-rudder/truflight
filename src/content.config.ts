import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/!(_)*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: z.string(),
    }),
});

const flightTraining = defineCollection({
  // Load Markdown and MDX files in the `src/content/flight-training/` directory.
  loader: glob({
    base: "./src/content/flight-training",
    pattern: "**/!(_)*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      city: z.string(),
      stateShort: z.string(),
      stateLong: z.string(),
      description: z.string(),
      descriptions: z.array(z.string()),
      airportLocation: z.string(),
      distance: z.string(),
      locationKeywords: z.array(z.string()),
    }),
});

export const collections = { blog: blog, "flight-training": flightTraining };
