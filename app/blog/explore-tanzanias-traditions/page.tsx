import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'explore-tanzanias-traditions');
  if (!post) return null;
  return (
    <BlogPostLayout slug="explore-tanzanias-traditions">
      {post.content}
    </BlogPostLayout>
  );
}