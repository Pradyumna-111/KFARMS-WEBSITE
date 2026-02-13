import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper, Heading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Kamala Farms products: premium coco peat, hydroponic nutrients, and grow bags for sustainable farming.",
};

const PRODUCTS = [
  {
    title: "Coco Peat",
    description:
      "Premium-grade coco peat made from 100% natural coconut husk fibre. Ideal as a growing medium for hydroponics, nurseries, and home gardens. Excellent water retention, aeration, and pH-neutral properties ensure healthy root development.",
    image:
      "https://kamalafarms.com/wp-content/uploads/2025/09/benefits-starting-polyhouse.jpg",
    features: ["100% Natural", "High Water Retention", "pH Neutral"],
  },
  {
    title: "Hydroponic Nutrients",
    description:
      "Scientifically formulated nutrient solutions designed for all stages of plant growth. Our balanced macro and micronutrient blends ensure optimal yields in NFT, DWC, and drip hydroponic systems.",
    image:
      "https://kamalafarms.com/wp-content/uploads/2025/09/hydroponics-investments-in-hyderabad.jpg",
    features: ["Balanced Formula", "All Growth Stages", "High Yield"],
  },
  {
    title: "Grow Bags",
    description:
      "Durable, UV-stabilised grow bags available in multiple sizes for hydroponic and soil-based cultivation. Designed for excellent drainage and root aeration, perfect for terrace gardens, polyhouses, and commercial farms.",
    image:
      "https://kamalafarms.com/wp-content/uploads/2025/09/irrigation-01-890x664.jpg",
    features: ["UV Stabilised", "Multiple Sizes", "Great Drainage"],
  },
];

export default function ProductPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex h-[calc(90vh-88px)] min-h-[512px] mt-[88px] items-center justify-center bg-dark">
        <img
          src="/images/hero/our-services-hero.jpg"
          alt="Our Products"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Quality farming inputs to power your hydroponic and agricultural success
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <SectionWrapper>
        <Heading
          as="h2"
          subtitle="Everything you need to grow smarter and more sustainably"
        >
          Featured Products
        </Heading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary overflow-hidden"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl uppercase tracking-wide text-dark mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-brand text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="primary">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-6">
            Interested In Our Products?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Get in touch with our team for pricing, bulk orders, and custom requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-dark px-8 py-4 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-dark/80"
          >
            Contact Us
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
