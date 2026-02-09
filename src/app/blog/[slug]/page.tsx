import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionWrapper, Heading, Badge } from "@/components/ui";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

/**
 * INDIVIDUAL BLOG POST PAGE
 * =========================
 * Collaborator: [Assign Name]
 *
 * Sections to build:
 *
 * 1. HERO BANNER - Post title, date, author
 * 2. ARTICLE CONTENT - Rendered MDX content
 * 3. AUTHOR BIO - Short author card
 * 4. RELATED POSTS - Links to other blog posts
 *
 * Blog posts use MDX format. The content is parsed from
 * files in src/content/blog/ using gray-matter for frontmatter
 * and next-mdx-remote for rendering.
 */

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex min-h-[400px] items-center justify-center bg-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="mb-4">{post.category || "Article"}</Badge>
          <h1 className="font-heading text-4xl md:text-6xl uppercase mb-4">
            {post.title}
          </h1>
          <p className="text-white/70">
            {post.date} {post.author && `• ${post.author}`}
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT - TODO: Render MDX content with next-mdx-remote */}
      <SectionWrapper>
        <article className="mx-auto max-w-3xl prose prose-lg prose-green">
          <p className="text-gray-brand leading-relaxed">
            {post.content}
          </p>
          <p className="mt-8 text-sm text-gray-brand italic">
            [TODO: Implement MDX rendering with next-mdx-remote for rich content support]
          </p>
        </article>
      </SectionWrapper>

      {/* RELATED POSTS - TODO: Implement */}
      <SectionWrapper background="light">
        <Heading as="h2" className="text-center">
          Related Articles
        </Heading>
        <p className="text-center text-gray-brand">
          [TODO: Show related blog post cards]
        </p>
      </SectionWrapper>
    </>
  );
}
