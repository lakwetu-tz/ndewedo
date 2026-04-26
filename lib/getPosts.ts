import fs from 'fs';
import path from 'path';

export function getPosts() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(fileContent);
  return posts;
}
