import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(folder: string, slug: string) {
  const filePath = path.join(process.cwd(), 'content', folder, slug, 'index.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}

export function getAllSlugs(folder: string) {
  const dir = path.join(process.cwd(), 'content', folder);
  return fs.readdirSync(dir).filter((f) => {
    return fs.existsSync(path.join(dir, f, 'index.md'));
  });
}
