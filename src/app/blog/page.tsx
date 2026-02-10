import type { Metadata } from "next";
import { SectionWrapper, Heading, Card } from "@/components/ui";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles, case studies, and insights on hydroponics, sustainable agriculture, and smart farming from Kamala Farms.",
};

/**
 * BLOG LISTING PAGE
 * =================
 * Collaborator: [Assign Name]
 *
 * Sections to build (reference: kamalafarms.com/blog):
 *
 * 1. HERO BANNER
 *    - "Blog" title with background
 *
 * 2. FEATURED POST
 *    - Large card for the latest/featured blog post
 *
 * 3. BLOG GRID
 *    - Grid of blog post cards (3 columns on desktop)
 *    - Each card shows: image, title, date, excerpt
 *    - Link to /blog/[slug]
 *    - Use the <Card> component
 *
 * 4. PAGINATION
 *    - Page navigation for older posts
 *
 * Blog posts are stored as MDX files in src/content/blog/
 * Use the getBlogPosts() helper from @/lib/blog to fetch them
 */

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center bg-dark">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl uppercase mb-4">Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Insights, case studies, and tips on sustainable agriculture
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <SectionWrapper>
        <Heading as="h2" subtitle="Stay updated with the latest in sustainable farming">
          Latest Articles
        </Heading>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                description={post.excerpt}
                href={`/blog/${post.slug}`}
                image={post.coverImage}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-brand py-12">
            Blog posts coming soon. Add MDX files to{" "}
            <code className="bg-light-gray px-2 py-1 rounded text-sm">
              src/content/blog/
            </code>{" "}
            to get started.
          </p>
        )}
      </SectionWrapper>
    </>
  );
}
