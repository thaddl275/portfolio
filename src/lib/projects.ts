import { getCollection } from 'astro:content';

/** Alle Projekte, sortiert nach `order`. Entwürfe nur in der lokalen Vorschau. */
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
