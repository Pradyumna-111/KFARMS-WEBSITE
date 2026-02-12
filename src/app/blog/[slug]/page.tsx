import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getBlogPostBySlug,
} from "@/content/blog/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `Read about ${post.title} on Kamala Farms blog.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* BLOG POST HEADER - style-3 with featured image */}
      <div className="blog-header">
        <div
          className="blog-header__featured"
          style={{ backgroundImage: `url(${post.coverImage})` }}
        />
        <div className="blog-header__content">
          <div className="blog-header__inner">
            <div className="blog-header__category">
              <span>{post.category}</span>
            </div>
            <h1 className="blog-header__title">{post.title}</h1>
            <div className="blog-header__meta">
              <span className="blog-header__author">
                <span className="blog-header__author-by">By</span>
                <span className="blog-header__author-name">kamalafarms</span>
              </span>
              <span className="blog-header__date">{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-16 md:py-24">
        <div className="px-8 sm:px-12 lg:px-20 text-left">
          <article className="max-w-none">
            {slug === "benefits-of-starting-hydroponic-farming" ? (
              <>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponics is a method of growing plants in a nutrient-rich solution, without soil. Kamala Farms is a hydroponic business located in Hyderabad. If you are thinking of starting a hydroponics farm in Hyderabad, then you should consider the benefits of this method. In this blog, we will discuss the benefits of starting a hydroponics farm in Hyderabad and how Kamala Farms can help you achieve your goals.
                </p>

                <h2 className="font-heading uppercase tracking-wide text-dark text-3xl md:text-4xl mt-10 mb-6">Benefits of Starting a Hydroponics Farm in Hyderabad</h2>

                <h3 className="font-heading uppercase tracking-wide text-dark text-2xl md:text-3xl mt-8 mb-3">Higher Yields</h3>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponics can produce up to ten times more plants per acre than traditional soil-based farming. This is because plants receive all the nutrients they need directly from the nutrient-rich solution.
                </p>

                <h3 className="font-heading uppercase tracking-wide text-dark text-2xl md:text-3xl mt-8 mb-3">Water Efficiency</h3>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponics uses up to 90% less water than traditional soil-based farming. This is because the nutrient-rich solution is recycled and reused, reducing the amount of water needed.
                </p>

                <h3 className="font-heading uppercase tracking-wide text-dark text-2xl md:text-3xl mt-8 mb-3">Space Efficiency</h3>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponics can be set up in a small space, making it an ideal option for urban farming. This is especially important in cities like Hyderabad, where space is at a premium.
                </p>

                <h3 className="font-heading uppercase tracking-wide text-dark text-2xl md:text-3xl mt-8 mb-3">Pest Control</h3>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponic plants are less susceptible to pests and diseases than traditional soil-based farming. This is because the plants are grown in a controlled environment, free from soil-borne pests.
                </p>

                <h3 className="font-heading uppercase tracking-wide text-dark text-2xl md:text-3xl mt-8 mb-3">Environmentally Friendly</h3>
                <p className="text-[#656565] leading-[1.7em] text-base">
                  Hydroponics is an environmentally friendly method of farming. It reduces the use of pesticides, herbicides, and fertilizers, reducing the impact on the environment.
                </p>

                <h2 className="font-heading uppercase tracking-wide text-dark text-3xl md:text-4xl mt-10 mb-6">Kamala Farms and Hydroponics Farm Setup in Hyderabad</h2>

                <p className="text-[#656565] leading-[1.7em] text-base">
                  If you are interested in starting a hydroponics farm in Hyderabad, Kamala Farms can help. They offer a range of hydroponic solutions, including farm setup and consulting services. With years of experience in the industry, they can help you design and set up a hydroponic farm that meets your specific needs.
                </p>

                <p className="text-[#656565] leading-[1.7em] text-base mt-4">
                  Their team of experts can assist you in choosing the right hydroponic system for your farm, based on the crops you want to grow, the available space, and your budget. They can also provide ongoing support and maintenance services to ensure that your hydroponic farm is running smoothly.
                </p>

                <h2 className="font-heading uppercase tracking-wide text-dark text-3xl md:text-4xl mt-10 mb-6">Conclusion</h2>

                <p className="text-[#656565] leading-[1.7em] text-base">
                  In conclusion, starting a hydroponics farm in Hyderabad has many benefits. Higher yields, water efficiency, space efficiency, pest control, and environmental friendliness are some of the advantages of hydroponics. Kamala Farms can help you set up and maintain your hydroponics farm in Hyderabad. With their expertise and support, you can start a successful hydroponics farm in Hyderabad.
                </p>
              </>
            ) : (
              <p className="text-[#656565] leading-[1.7em] text-base">
                Blog content coming soon. Stay tuned for the full article.
              </p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
