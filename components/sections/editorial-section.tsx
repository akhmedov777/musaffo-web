"use client";

import Image from "next/image";
import type { Dictionary } from "@/dictionaries/types";

export function EditorialSection({ dict }: { dict: Dictionary["editorial"] }) {
  return (
    <section className="bg-background">
      {/* Warm accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)] to-transparent" />

      {/* Specs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {dict.specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-display text-foreground text-4xl italic">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <h2 className="text-center text-3xl font-display italic tracking-tight text-foreground md:text-4xl mb-4">
          {dict.certificatesTitle}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          {dict.certificatesDescription}
        </p>
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-16">
          <div className="group flex flex-col items-center">
            <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/cert-halal.png"
                alt={dict.halalLabel}
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">{dict.halalLabel}</p>
          </div>
          <div className="group flex flex-col items-center">
            <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/cert-fssc22000.png"
                alt={dict.fsscLabel}
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">{dict.fsscLabel}</p>
          </div>
        </div>
      </div>

      {/* Full-width Video */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcdafadc-cb7e-4cb7-9cbf-edcbaf2360a5_1-cNBCz5fomcLRmm1cTXSBOKCq10VP91.mp4"
        />
      </div>
    </section>
  );
}
