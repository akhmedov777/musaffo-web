"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/dictionaries/types";

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000",
    alt: "Milk glass",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1000",
    alt: "Dairy products",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1000",
    alt: "Natural milk",
    position: "right",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=1000",
    alt: "Yogurt",
    position: "right",
    span: 1,
  },
];

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - scrollProgress / 0.2);

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - imageProgress * 58;
  const centerHeight = 100 - imageProgress * 30;
  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const borderRadius = imageProgress * 24;
  const gap = imageProgress * 16;
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + imageProgress * 40}px` }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter((img) => img.position === "left").map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/image-hero.png"
                alt="Musaffo"
                fill
                className="object-cover"
                style={{ objectPosition: "center 56%" }}
                priority
              />

              <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[rgba(7,24,43,0.68)] via-[rgba(7,24,43,0.26)] to-transparent md:w-[42%]" />
                <div className="absolute inset-x-0 top-0 h-[34%] bg-gradient-to-b from-[rgba(7,24,43,0.34)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-[rgba(7,24,43,0.18)] to-transparent" />
              </div>

              {/* Overlay Text - Fades out first */}
              <div
                className="absolute inset-0 flex items-start justify-start overflow-hidden px-6 pt-28 md:px-10 md:pt-36 lg:px-16 lg:pt-40"
                style={{ opacity: textOpacity }}
              >
                <div className="max-w-[18rem] text-white md:max-w-[28rem] lg:max-w-[34rem]">
                  <h1
                    className="animate-[slideUp_0.8s_ease-out_forwards] text-5xl font-display leading-[0.92] tracking-tight text-white opacity-0 drop-shadow-[0_10px_35px_rgba(0,0,0,0.38)] md:text-6xl lg:text-7xl"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {dict.title}
                    <br />
                    <em>{dict.titleLine2}</em>
                  </h1>
                  <div
                    className="mt-6 h-px w-20 animate-[slideUp_0.8s_ease-out_forwards] bg-white/45 opacity-0"
                    style={{ animationDelay: "0.45s" }}
                  />
                  <p
                    className="mt-5 max-w-[16rem] animate-[slideUp_0.8s_ease-out_forwards] text-sm leading-relaxed text-white/80 opacity-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.32)] md:max-w-[20rem] md:text-base lg:text-lg"
                    style={{ animationDelay: "0.6s" }}
                  >
                    {dict.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter((img) => img.position === "right").map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-2xl text-center font-display text-4xl leading-relaxed md:text-5xl lg:text-[4rem] lg:leading-snug text-foreground">
          {dict.tagline}
          <br />
          <em className="text-[var(--brand-blue)]">{dict.taglineLine2}</em>
        </p>
      </div>
    </section>
  );
}
