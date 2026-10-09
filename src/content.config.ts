import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Kategorien für den Filter auf der Startseite.
// Neue Kategorie? Hier ergänzen – Filter-Buttons entstehen automatisch.
export const CATEGORIES = {
  licht: 'Technik & Licht',
  produktion: 'Produktion & Regie',
  kamera: 'Kamera & Bild',
  development: 'Development',
} as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string(),
      category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES]),
      year: z.number().optional(),
      location: z.string().optional(),
      // Kleiner = weiter oben in der Liste
      order: z.number().default(100),
      // Entwürfe sind nur lokal (npm run dev) sichtbar, nicht auf der Live-Seite
      draft: z.boolean().default(false),
      cover: image(),
      gallery: z.array(image()).default([]),
      credits: z.string().optional(),
      // Kennzahlen, die groß über dem Text erscheinen (optional)
      stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

export const collections = { projects };
