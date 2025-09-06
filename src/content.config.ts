import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: z.string(),
    }),
});

const faq = defineCollection({
  // Load Markdown and MDX files in the `src/content/faq/` directory.
  loader: glob({ base: "./src/content/faq", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      question: z.string(),
      category: z.enum([
        "general",
        "training",
        "licensing",
        "costs",
        "safety",
        "careers",
        "aircraft",
        "scheduling",
      ]),
      order: z.number(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog, faq };
