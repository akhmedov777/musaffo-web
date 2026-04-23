"use client";

import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";

export function TestimonialsSection({ dict }: { dict: Dictionary["testimonials"] }) {
  return (
    <section id="about" className="bg-transparent">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl font-display leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          &ldquo;{dict.statement}&rdquo;
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2000"
          alt="Musaffo"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
