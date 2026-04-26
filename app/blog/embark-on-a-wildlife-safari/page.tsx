import BlogPostLayout from '@/components/BlogPostLayout';
import { posts } from '../data';

export default function Page() {
  const post = posts.find(p => p.slug === 'embark-on-a-wildlife-safari');
  if (!post) return null;
  return (
    <BlogPostLayout slug="embark-on-a-wildlife-safari">
      {post.content}
    </BlogPostLayout>
  );
}