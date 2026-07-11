import { getCollection } from 'astro:content';
import { tools, calculatorUrl } from '../config/tools';
import { pillars } from '../config/site';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const index = [
    ...posts.map((p) => ({
      type: 'guide',
      title: p.data.title,
      description: p.data.description,
      category: pillars.find((x) => x.slug === p.data.category)?.title ?? p.data.category,
      url: `/blog/${p.id}/`,
    })),
    ...tools.map((t) => ({
      type: 'tool',
      title: t.name,
      description: t.description,
      category: t.group,
      url: calculatorUrl(t),
      status: t.status,
    })),
  ];
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
