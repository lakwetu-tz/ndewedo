// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

// Get all post folder names
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// Get one post by slug
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, slug, "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    frontmatter: data,
    contentHtml,
  };
}

// Get all posts metadata
export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, slug, "index.md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}
