"use client";

import { FadeImage } from "@/components/fade-image";
import type { Dictionary } from "@/dictionaries/types";

const productImages = [
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800",
  "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800",
  "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=800",
  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800",
  "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=800",
];

export function CollectionSection({ dict }: { dict: Dictionary["collection"] }) {
  return (
    <section id="accessories" className="bg-transparent">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-4xl font-display italic tracking-tight text-foreground md:text-5xl">
          {dict.sectionTitle}
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {dict.products.map((product, index) => (
            <div key={index} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={productImages[index] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {dict.products.map((product, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={productImages[index] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
