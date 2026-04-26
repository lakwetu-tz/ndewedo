import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'conquer-the-roof-of-africa');
  if (!post) return null;
  return (
    <BlogPostLayout slug="conquer-the-roof-of-africa">
      {post.content}
    </BlogPostLayout>
  );
}