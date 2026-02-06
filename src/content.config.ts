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
      order: z.number().default(0),

      meta: z.object({
        description: z.string(),
        keywords: z.string(),
      }),

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
      }),

      whyUs: z.object({
        title: z.string(),
        features: z.array(z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
          link: z.string().optional(),
        })),
      }),

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
      }),

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
      }),

      googleMaps: z.object({
        upperHeader: z.string(),
        title: z.string(),
        description: z.string(),
        mapsLink: z.string(),
      }),

      faqs: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })),

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
      }),
    }),
});

export const collections = { blog: blog, "flight-training": locationsCollection };
