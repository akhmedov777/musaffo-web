"use client";

import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";
import type { Locale } from "@/lib/i18n";

const exploreHrefs = ["/products", "#technology", "#gallery", "#about"];
const aboutHrefs = ["#", "#", "#", "#"];
const serviceHrefs = ["#", "#", "#", "#"];

export function FooterSection({ dict, lang }: { dict: Dictionary["footer"]; lang: Locale }) {
  return (
    <footer className="bg-transparent">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href={`/${lang}`}>
              <Image
                src="/logo.png"
                alt="Musaffo"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dict.brandDescription}
            </p>
            <div id="contact" className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{dict.phone}</p>
              <p>{dict.address}</p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">{dict.sectionsTitle}</h4>
            <ul className="space-y-3">
              {dict.exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={index === 0 ? `/${lang}/products` : exploreHrefs[index]}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">{dict.companyTitle}</h4>
            <ul className="space-y-3">
              {dict.aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={aboutHrefs[index]}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">{dict.servicesTitle}</h4>
            <ul className="space-y-3">
              {dict.serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={serviceHrefs[index]}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {dict.copyright}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/musaffo.uz/"
              target="_blank"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/MusaffoUz/"
              target="_blank"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </Link>
            <Link
              href="https://t.me/musaffo_uzb"
              target="_blank"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
