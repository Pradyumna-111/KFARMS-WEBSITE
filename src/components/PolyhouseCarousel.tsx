"use client";

import { useRef } from "react";

interface CarouselItem {
  title: string;
  image?: string;
}

interface PolyhouseCarouselProps {
  items: CarouselItem[];
}

export function PolyhouseCarousel({ items }: PolyhouseCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.32; // Scroll by one card width
      const newScrollLeft =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-12 w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-0 snap-x snap-mandatory scroll-smooth carousel-scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-[83.33%] md:w-[32%]"
          >
            <div
              className="relative bg-light-gray flex items-center justify-center"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                <h4 className="text-white text-xl md:text-2xl font-heading uppercase text-center px-4">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Centered vertically in the carousel */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 pointer-events-none z-10">
        <button
          onClick={() => scroll("left")}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark text-white flex items-center justify-center hover:bg-dark/80 transition-colors duration-200 shadow-lg"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-dark text-white flex items-center justify-center hover:bg-dark/80 transition-colors duration-200 shadow-lg"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .carousel-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
