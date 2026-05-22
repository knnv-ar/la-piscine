import { getCollection } from 'astro:content';

export async function GET() {
  const projects = await getCollection('projects');
  
  const index = projects.map(p => ({
    slug: p.slug,
    title: p.data.title,
    author: p.data.author,
    year: p.data.year || (p.data.date ? new Date(p.data.date).getFullYear() : 2020),
    semester: p.data.semester || 'first',
    thumbnail: p.data.thumbnail || 'thumbnail.png'
  }));

  // Sort descending by year, then by semester (second first), then by title
  index.sort((a, b) => {
    if (b.year !== a.year) {
      return b.year - a.year;
    }
    if (a.semester !== b.semester) {
      return a.semester === 'second' ? 1 : -1;
    }
    return a.title.localeCompare(b.title);
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });
}
