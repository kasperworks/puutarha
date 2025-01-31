import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Transform string to Date object
    publishedAt: z.string(),
    // Optional fields
    lastUpdated: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const works = defineCollection({
  loader: file("src/content/works/coding_works.json"),
  schema: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
      what: z.string(),
      description: z.string(),
    })
  ),
});

export const collections = { blog, works };
