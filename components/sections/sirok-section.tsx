"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface SirokFlavor {
  id: string;
  name: { uz: string; ru: string };
  flavor: { uz: string; ru: string };
  color: string;
  weight: string;
  fat: string;
}

const flavors: SirokFlavor[] = [
  {
    id: "vanilla",
    name: { uz: "Vanil", ru: "Ваниль" },
    flavor: { uz: "Vanil ta'mli glazirlangan sirok", ru: "Глазированный сырок со вкусом ванили" },
    color: "#F5DEB3",
    weight: "40g",
    fat: "23%",
  },
  {
    id: "cocoa",
    name: { uz: "Kakao", ru: "Какао" },
    flavor: { uz: "Kakao bilan glazirlangan sirok", ru: "Глазированный сырок с какао" },
    color: "#6B3A2A",
    weight: "40g",
    fat: "23%",
  },
  {
    id: "coconut",
    name: { uz: "Kokos", ru: "Кокос" },
    flavor: { uz: "Kokos qirindig'i bilan sirok", ru: "Сырок с кокосовой стружкой" },
    color: "#FAEBD7",
    weight: "40g",
    fat: "23%",
  },
  {
    id: "strawberry",
    name: { uz: "Qulupnay", ru: "Клубника" },
    flavor: { uz: "Qulupnay bilan glazirlangan sirok", ru: "Глазированный сырок с клубникой" },
    color: "#DC4A6A",
    weight: "40g",
    fat: "23%",
  },
  {
    id: "cherry",
    name: { uz: "Olcha", ru: "Вишня" },
    flavor: { uz: "Olcha bilan glazirlangan sirok", ru: "Глазированный сырок с вишней" },
    color: "#8B0000",
    weight: "40g",
    fat: "23%",
  },
  {
    id: "peach",
    name: { uz: "Shaftoli", ru: "Персик" },
    flavor: { uz: "Shaftoli bilan glazirlangan sirok", ru: "Глазированный сырок с персиком" },
    color: "#FFCC80",
    weight: "40g",
    fat: "23%",
  },
];

function SirokCard({ flavor, lang }: { flavor: SirokFlavor; lang: Locale }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
      style={{
        backgroundColor: isHovered ? flavor.color : "#1A1A1A",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span
          className="text-xs px-3 py-1 rounded-full transition-all duration-500"
          style={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.1)",
            color: "#fff",
          }}
        >
          {flavor.weight}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full transition-all duration-500"
          style={{
            backgroundColor: isHovered ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.1)",
            color: "#fff",
          }}
        >
          {flavor.fat}
        </span>
      </div>

      {/* Image area */}
      <div
        className="relative h-[320px] flex items-center justify-center overflow-hidden"
        style={{ transform: "rotate(-12deg)" }}
      >
        {/* Open bar (behind — smooth chocolate side) */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isHovered ? "translateX(15%)" : "translateX(0%)",
          }}
        >
          <Image
            src="/images/sirok-open.png"
            alt={flavor.name[lang]}
            width={400}
            height={240}
            className="object-contain drop-shadow-2xl -rotate-90"
            style={{ height: "80%", width: "auto" }}
          />
        </div>

        {/* Closed bar (wrapper — clips from right like it's been torn open) */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            clipPath: isHovered
              ? "inset(0 40% 0 0)"
              : "inset(0 0% 0 0)",
            transition: "clip-path 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src="/images/sirok-closed.png"
            alt={flavor.name[lang]}
            width={400}
            height={240}
            className="object-contain drop-shadow-2xl -rotate-90"
            style={{ height: "80%", width: "auto" }}
          />
        </div>
      </div>

      {/* Info */}
      <div className="px-5 pb-5 pt-2">
        <h3
          className="font-display text-lg transition-colors duration-500"
          style={{ color: isHovered ? "#1A1A1A" : "#fff" }}
        >
          {flavor.name[lang]}
        </h3>
        <p
          className="text-sm mt-1 transition-all duration-500 overflow-hidden"
          style={{
            color: isHovered ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.5)",
            maxHeight: isHovered ? "40px" : "0px",
            opacity: isHovered ? 1 : 0,
          }}
        >
          {flavor.flavor[lang]}
        </p>
      </div>
    </div>
  );
}

export function SirokSection({ lang }: { lang: Locale }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const title = lang === "uz" ? "Glazirlangan sirok." : "Глазированный сырок.";
  const subtitle =
    lang === "uz"
      ? "Shokoladli qoplamali tvorog desserti — 6 xil ta'mda"
      : "Творожный десерт в шоколадной глазури — 6 вкусов";

  return (
    <section className="bg-foreground py-20 md:py-28">
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-12 lg:px-20 mb-10">
        <div>
          <h2 className="font-display italic text-4xl md:text-5xl text-background">
            {title}
          </h2>
          <p className="mt-2 text-sm text-background/50">
            {subtitle}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/60 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/60 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrolling cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {flavors.map((flavor) => (
          <div key={flavor.id} className="snap-start">
            <SirokCard flavor={flavor} lang={lang} />
          </div>
        ))}
      </div>
    </section>
  );
}
