"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/i18n";

export function Header({ dict, lang }: { dict: Dictionary["header"]; lang: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const otherLang = lang === "uz" ? "ru" : "uz";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href={`/${lang}`} className="transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Musaffo"
            width={140}
            height={40}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href={`/${lang}/products`}
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {dict.products}
          </Link>
          <Link
            href="#technology"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {dict.technology}
          </Link>
          <Link
            href="#gallery"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {dict.gallery}
          </Link>
          <Link
            href="#about"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {dict.about}
          </Link>
        </nav>

        {/* CTA + Language Switcher */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher */}
          <div className={`flex items-center gap-1 text-sm ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            <Link
              href={`/${lang}`}
              className={`px-1.5 py-0.5 rounded transition-colors ${isScrolled ? "font-medium text-foreground" : "font-medium text-white"}`}
            >
              {lang.toUpperCase()}
            </Link>
            <span>|</span>
            <Link
              href={`/${otherLang}`}
              className={`px-1.5 py-0.5 rounded transition-colors ${isScrolled ? "hover:text-foreground" : "hover:text-white"}`}
            >
              {otherLang.toUpperCase()}
            </Link>
          </div>
          <Link
            href="#contact"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-foreground text-background hover:opacity-80" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            {dict.contact}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href={`/${lang}/products`}
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.products}
            </Link>
            <Link
              href="#technology"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.technology}
            </Link>
            <Link
              href="#gallery"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.gallery}
            </Link>
            <Link
              href="#about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.about}
            </Link>
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link
                href={`/${lang}`}
                className="font-medium text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {lang.toUpperCase()}
              </Link>
              <span>|</span>
              <Link
                href={`/${otherLang}`}
                className="hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {otherLang.toUpperCase()}
              </Link>
            </div>
            <Link
              href="#contact"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {dict.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
