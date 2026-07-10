import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate - a.data.pubDate)
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/blog/${p.id}/`,
      })),
  });
}
