import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'tanzanias-hidden-gems');
  if (!post) return null;
  return (
    <BlogPostLayout slug="tanzanias-hidden-gems">
      {post.content}
    </BlogPostLayout>
  );
}