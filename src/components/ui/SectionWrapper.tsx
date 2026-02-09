import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "primary";
}

const bgStyles = {
  white: "bg-white",
  light: "bg-light-gray",
  dark: "bg-dark text-white",
  primary: "bg-primary text-white",
};

export default function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", bgStyles[background], className)}>
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
