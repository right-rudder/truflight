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

const locationsCollection = defineCollection({
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

      meta: z.object({
        description: z.string(),
        keywords: z.string(),
      }).optional(),

      header: z.object({
        title: z.string(),
        subtitle: z.string(),
        primaryImage: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        button: z.object({
          href: z.string(),
          text: z.string(),
        })
      }).optional(),

      whyUs: z.object({
        title: z.string(),
        features: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          link: z.string().optional(),
        })),
      }).optional(),

      aboutUs: z.object({
        upperHeader: z.string(),
        title: z.string(),
        description: z.string().optional(),
        bulletPoints: z.array(z.string()).optional(),
        secondDescription: z.string().optional(),
        cta: z.object({
          text: z.string(),
          url: z.string(),
        }),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
      }).optional(),

      weComeToYou: z.object({
        upperHeader: z.string(),
        title: z.string(),
        description: z.string(),
        cta: z.object({
          text: z.string(),
          url: z.string(),
        }),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
      }).optional(),

      googleMaps: z.object({
        upperHeader: z.string(),
        title: z.string(),
        description: z.string(),
        mapsLink: z.string(),
      }).optional(),

      faqs: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })).optional(),

      finalCTA: z.object({
        title: z.string(),
        description: z.string(),
        ctas: z.array(z.object({
          text: z.string(),
          url: z.string(),
        })),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
      }).optional(),
    }),
});

export const collections = { blog: blog, "flight-training": locationsCollection };
