import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionWrapper, Heading, Button } from "@/components/ui";
import { services } from "@/content/services";
import { ServiceContactForm } from "@/components/ServiceContactForm";
import { PolyhouseCarousel } from "@/components/PolyhouseCarousel";

// Helper function to parse simple markdown bold syntax
function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Kamala Farms`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative flex min-h-[450px] items-center justify-center bg-light-gray">
        {/* Background image placeholder - replace with actual image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("")' }} />
        <div className="relative z-10 text-center text-dark px-4">
          <h1 className="font-heading text-5xl md:text-7xl uppercase mb-6">
            Our Services
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto font-heading uppercase">
            {service.tagline || "Laying the foundation for your farm's success"}
          </p>
          {service.heroButtonText && service.heroButtonLink && (
            <div className="mt-8 flex justify-center">
              <a
                href={service.heroButtonLink}
                className="inline-flex items-center gap-2 bg-primary px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
              >
                {service.heroButtonText}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      <SectionWrapper>
        {/* SERVICE SECTIONS */}
        {service.sections && service.sections.length > 0 && (
          <div className="space-y-20">
            {service.sections.map((section, index) => (
              section.fullWidth ? (
                // Full-width layout without image
                <div key={index} className="w-full">
                  {/* Subtitle if provided */}
                  {section.subtitle && (
                    <p className={`text-sm uppercase text-gray-500 mb-2 tracking-wide ${
                      section.centerHeading ? "text-center" : ""
                    }`}>
                      {section.subtitle}
                    </p>
                  )}

                  <h3 className={`font-heading uppercase text-dark mb-6 ${
                    section.largeHeading
                      ? "text-4xl md:text-5xl"
                      : "text-3xl md:text-4xl"
                  } ${section.centerHeading ? "text-center" : ""}`}>
                    {section.title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                    {section.description.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{parseMarkdown(paragraph)}</p>
                    ))}
                  </div>

                  {/* Process Gallery if enabled */}
                  {section.showProcessGallery && (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-0 w-full">
                      {[
                        { number: "01", label: "Planning & Design" },
                        { number: "02", label: "Construction" },
                        { number: "03", label: "Hydroponics Installation" },
                        { number: "04", label: "Systems Integration" },
                        { number: "05", label: "Training & Handover" },
                      ].map((step, idx) => (
                        <div
                          key={idx}
                          className="relative bg-light-gray flex flex-col items-center justify-center"
                          style={{ aspectRatio: "1/1" }}
                        >
                          <span className="text-6xl font-heading text-white mb-4">
                            {step.number}
                          </span>
                          <span className="absolute bottom-4 text-xs uppercase text-gray-600 text-center px-2">
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Carousel if enabled */}
                  {section.showCarousel && section.carouselItems && (
                    <PolyhouseCarousel items={section.carouselItems} />
                  )}

                  {/* Partnership Model if enabled */}
                  {section.showPartnershipModel && section.partnershipFeatures && (
                    <div className="mt-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {section.partnershipFeatures.map((feature, idx) => (
                          <div key={idx} className="flex flex-col items-center text-center">
                            {/* Icon placeholder circle */}
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-6">
                              <span className="text-gray-400 text-xs">[Icon]</span>
                            </div>
                            {/* Title */}
                            <h4 className="font-heading text-base uppercase tracking-wide text-dark mb-4 font-bold">
                              {feature.title}
                            </h4>
                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* Footer text */}
                      {section.footerText && (
                        <p className="mt-12 text-gray-600 text-lg">
                          {section.footerText}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Button if provided */}
                  {section.buttonText && section.buttonLink && (
                    <div className="mt-8">
                      <a
                        href={section.buttonLink}
                        className="relative inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center gap-3"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                          </svg>
                          <span>{section.buttonText}</span>
                        </span>
                        <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                // Two-column layout with image
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                    section.imagePosition === "right" ? "lg:auto" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`h-80 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden ${
                      section.imagePosition === "right" ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="w-full h-full bg-light-gray flex items-center justify-center">
                      <span className="text-gray-500">[{section.title} Image]</span>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={section.imagePosition === "right" ? "lg:order-1" : ""}>
                    <h3 className="font-heading text-3xl md:text-4xl uppercase text-dark mb-6">
                      {section.title}
                    </h3>
                    <div className="text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                      {section.description.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{parseMarkdown(paragraph)}</p>
                      ))}
                    </div>

                    {/* Bullet Points if provided */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {section.bulletPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-600 leading-relaxed">{parseMarkdown(point)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Crop Table if enabled */}
                    {section.showCropTable && section.cropCategories && (
                      <div className="mt-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                          {section.cropCategories.map((category, idx) => (
                            <div key={idx} className="flex flex-col">
                              {/* Category Header */}
                              <div className="font-heading font-bold text-dark text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-primary">
                                {category.name}
                              </div>
                              {/* Crop List */}
                              <div className="space-y-2">
                                {category.crops.map((crop, cropIdx) => (
                                  <div
                                    key={cropIdx}
                                    className={`py-2 px-3 text-sm text-gray-600 ${
                                      cropIdx % 2 === 1 ? "bg-gray-50" : ""
                                    }`}
                                  >
                                    {crop}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Footer Text */}
                        {section.cropFooterText && (
                          <p className="mt-8 text-gray-600 text-base">
                            {section.cropFooterText}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Button if provided */}
                    {section.buttonText && section.buttonLink && (
                      <div className="mt-8">
                        <a
                          href={section.buttonLink}
                          className="relative inline-flex bg-primary hover:bg-primary/90 text-white font-heading text-lg uppercase tracking-wide py-4 px-12 transition-all duration-300 overflow-hidden group items-center gap-3"
                        >
                          <span className="relative z-10 flex items-center gap-3">
                            <svg
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                            <span>{section.buttonText}</span>
                          </span>
                          <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* WHY IT MATTERS SECTION */}
      {service.whyItMatters && (
        <section className="bg-light-gray py-20">
          <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl uppercase text-dark mb-8">
                Why It Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.whyItMatters}
              </p>
            </div>
          </SectionWrapper>
        </section>
      )}

      {/* CONTACT SECTION */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Quote and Image */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading uppercase text-dark mb-4">
                Contact Us
              </h3>
              <blockquote className="text-3xl md:text-4xl font-heading uppercase text-dark leading-tight">
                {service.contactQuote ||
                  "Great farms don't happen by chance. They're designed. Let's plan yours together."}
              </blockquote>
            </div>
            <div className="h-80 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-light-gray flex items-center justify-center">
                <span className="text-gray-500">[Contact Image]</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-10 transition-all duration-300" style={{ marginLeft: '-50px' }}>
            <ServiceContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
