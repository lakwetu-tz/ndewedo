"use client";

import Link from 'next/link';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { HeroSection } from '@/components/HeroSection';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { posts } from '@/app/blog/data';

interface BlogPostLayoutProps {
  slug: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ slug, children }: BlogPostLayoutProps) {
  const post = posts.find((p) => p.slug === slug);
  const popularPosts = posts.filter((p) => p.slug !== slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="w-full font-['Poppins']">
        <HeroSection
            title={post.title}
            description={post.excerpt}
            image={post.image}
            showCta={true}
            ctaText="Learn more"
            ctaLink="#content"
        />

      <div className="max-w-[1200px] mx-auto py-16 px-4 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <main id="content" className="w-full lg:w-2/3">
          <article className="prose lg:prose-xl max-w-none 
            prose-headings:font-bold prose-headings:text-[#222] 
            prose-h3:text-[28px] prose-h3:leading-tight prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-[22px] prose-h4:text-[#333] prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-[#444] prose-p:text-[17px] prose-p:leading-[1.8] prose-p:mb-5
            prose-ul:text-[#444] prose-ul:text-[17px] prose-ul:leading-[1.8]
            prose-ol:text-[#444] prose-ol:text-[17px] prose-ol:leading-[1.8]
            prose-li:my-2
            prose-a:text-[#1f751f] prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-[20px] prose-img:shadow-md prose-img:my-8">
            {children}
          </article>
          
          {/* Blog Sharing */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-[28px] font-bold mb-6 flex items-center gap-2 text-[#222]">Blog <span className="text-[#1f751f]">Sharing</span></h3>
            <div className="flex items-center gap-4">
                <Link href="#" className="bg-[#1f751f] text-white p-3 rounded-full hover:bg-[#0f440f] transition-colors transform hover:-translate-y-1 duration-300 shadow-md"><Facebook size={22} fill="white" strokeWidth={0} /></Link>
                <Link href="#" className="bg-[#1f751f] text-white p-3 rounded-full hover:bg-[#0f440f] transition-colors transform hover:-translate-y-1 duration-300 shadow-md"><Twitter size={22} fill="white" strokeWidth={0} /></Link>
                <Link href="#" className="bg-[#1f751f] text-white p-3 rounded-full hover:bg-[#0f440f] transition-colors transform hover:-translate-y-1 duration-300 shadow-md"><Linkedin size={22} fill="white" strokeWidth={0} /></Link>
                <Link href="#" className="bg-[#1f751f] text-white p-3 rounded-full hover:bg-[#0f440f] transition-colors transform hover:-translate-y-1 duration-300 shadow-md">
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M11.64 5.93h1.61v9.5h-1.61zm-5.74 9.5H7.5V9.41H5.9zm.81-11.06A1.18 1.18 0 0 1 8 5.56a1.18 1.18 0 0 1-1.28 1.19 1.18 1.18 0 0 1-1.29-1.19 1.19 1.19 0 0 1 1.29-1.19zM19.16 11c-1.16 0-1.88.62-2.19 1.41V9.41h-1.6v9.5h1.6v-5.28c0-1.39.52-2.14 1.63-2.14.86 0 1.22.63 1.22 1.66v5.76h1.6v-6.22c0-2.31-1.25-3.35-2.26-3.35z"/></svg>
                </Link>
            </div>
          </div>
        </main>

        {/* Popular Posts Sidebar */}
        <aside className="w-full lg:w-1/3">
          <div className="sticky top-28 lg:pl-8">
            <h3 className="text-[26px] font-bold mb-8 text-[#333]">Our Popular Blog Posts</h3>
            <div className="space-y-8">
              {popularPosts.map((p) => (
                <Link href={p.href} key={p.slug} className="block group">
                  <div className="flex gap-5 items-start">
                    <div className="w-[120px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0 relative shadow-sm">
                      <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                      <h4 className="font-bold text-[16px] text-[#222] leading-[1.4] group-hover:text-[#1f751f] transition-colors line-clamp-2">
                          {p.title}
                      </h4>
                       <p className="text-[12px] text-[#666] font-medium">{p.date}</p>
                      <span className="text-[13px] text-[#1f751f] font-bold group-hover:underline flex items-center gap-1 mt-0.5">
                          Read more <span className="text-[11px] transition-transform group-hover:translate-x-1">»</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12">
                <Link href="/blog" className="bg-[#1f751f] text-white text-center w-full block py-4 rounded-[50px] font-semibold text-[16px] hover:bg-[#0f440f] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    View Other Blogs
                </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}