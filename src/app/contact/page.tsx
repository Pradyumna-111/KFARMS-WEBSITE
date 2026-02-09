import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Kamala Farms",
  description:
    "Get in touch with Kamala Farms. We're here to help with consultations, quotes, and inquiries about hydroponics farming solutions.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[400px] items-center justify-center bg-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-5xl md:text-7xl uppercase mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Reach out to us for farm consultations, quotes, and inquiries
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>

      {/* FAQ OR ADDITIONAL INFO SECTION */}
      <section className="bg-light-gray py-16 md:py-20">
        <SectionWrapper>
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-dark mb-2">What's your typical response time?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">Do you offer site consultations?</h3>
              <p className="text-gray-600">
                Yes! We provide free consultations for farm setup and planning. Contact us to schedule.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">What areas do you serve?</h3>
              <p className="text-gray-600">
                We serve Pan India with our services. Our office is based in Hyderabad, Telangana.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">How do I get a quote?</h3>
              <p className="text-gray-600">
                Submit the contact form with your project details, and our team will prepare a customized quote.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}