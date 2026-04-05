"use client";

import { FadeImage } from "@/components/fade-image";
import type { Dictionary } from "@/dictionaries/types";

const featureImages = [
  "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800",
  "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=800",
  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800",
  "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=800",
  "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=800",
];

export function FeaturedProductsSection({ dict }: { dict: Dictionary["featuredProducts"] }) {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-4xl font-display tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {dict.title}
          <br />
          <em className="text-[var(--brand-blue)]">
            {dict.titleLine2}
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          {dict.subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {dict.features.map((feature, index) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={featureImages[index] || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">

      </div>
    </section>
  );
}
