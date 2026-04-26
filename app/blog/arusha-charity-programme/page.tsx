import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'arusha-charity-programme');
  if (!post) return null;
  return (
    <BlogPostLayout slug="arusha-charity-programme">
      {post.content}
    </BlogPostLayout>
  );
}