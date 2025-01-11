import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        // Transform string to Date object
        pubDate: z
          .string()
          .or(z.date())
          .transform((val) => new Date(val)),
        updatedDate: z
          .string()
          .optional()
          .transform((str) => (str ? new Date(str) : undefined)),
        eyeCatchImg: image().optional(),
        eyeCatchAlt: z.string().optional(),
      })
      .refine(
        (data) => {
          if (data.eyeCatchImg && !data.eyeCatchAlt) {
            return false;
          }
          return true;
        },
        {
          message: "eyeCatchAlt is required when eyeCatchImg is set",
          path: ["eyeCatchAlt"],
        }
      ),
});

export const collections = { blog };
