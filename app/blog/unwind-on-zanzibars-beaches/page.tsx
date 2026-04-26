import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'unwind-on-zanzibars-beaches');
  if (!post) return null;
  return (
    <BlogPostLayout slug="unwind-on-zanzibars-beaches">
      {post.content}
    </BlogPostLayout>
  );
}