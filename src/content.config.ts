import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Strict frontmatter validation: the build FAILS if any required
// SEO field is missing — your "check engine light" for quality control.
// Shared schema for both blog (/blog/<slug>/) and guides (root /<slug>/).
const articleSchema = z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(50).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Louis F.'),
    category: z.enum([
      'ev-home-charging',
      'smart-home-energy',
      'solar-battery-backup',
      'ev-travel-camping',
      'cordless-tools-workshop',
    ]),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
});

// /blog/<slug>/ — original 90 articles. Untouched.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: articleSchema,
});

// Root /<slug>/ — fresh premium rewrites of already-indexed WordPress URLs.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: articleSchema,
});

export const collections = { blog, guides };
