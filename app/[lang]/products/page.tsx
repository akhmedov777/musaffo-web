"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, X } from "lucide-react";
import { categories, products, type Product } from "@/lib/products";
import type { Locale } from "@/lib/i18n";

export default function ProductsPage() {
  const params = useParams();
  const lang = (params.lang as Locale) || "uz";
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Close panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const getCategoryName = useCallback(
    (categoryId: string) => {
      const cat = categories.find((c) => c.id === categoryId);
      return cat ? cat.name[lang] : categoryId;
    },
    [lang]
  );

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const title = lang === "uz" ? "Mahsulotlarimiz" : "Наша продукция";
  const subtitle =
    lang === "uz"
      ? "30 dan ortiq turdagi sut mahsulotlari"
      : "Более 30 видов молочной продукции";
  const allLabel = lang === "uz" ? "Hammasi" : "Все";
  const backLabel = lang === "uz" ? "Bosh sahifa" : "Главная";
  const fatLabel = lang === "uz" ? "Yog'lilik" : "Жирность";

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.opacity = "0";
      gridRef.current.style.transform = "translateY(20px)";
      requestAnimationFrame(() => {
        if (gridRef.current) {
          gridRef.current.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          gridRef.current.style.opacity = "1";
          gridRef.current.style.transform = "translateY(0)";
        }
      });
    }
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
          <Link href={`/${lang}`}>
            <Image
              src="/logo.png"
              alt="Musaffo"
              width={120}
              height={34}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md">
          {subtitle}
        </p>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[65px] z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all ${
                activeCategory === null
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {allLabel}
            </button>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap rounded-full transition-all ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.name[lang]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-12 max-w-[1400px] mx-auto">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name[lang]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                {/* Fat badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-full">
                    {fatLabel}: {product.fat}
                  </span>
                </div>
                {/* Weight badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-foreground/80 backdrop-blur-sm text-background text-xs px-3 py-1.5 rounded-full">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-4 pb-2">
                <h3 className="font-display text-lg text-foreground group-hover:text-[var(--brand-blue)] transition-colors">
                  {product.name[lang]}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {product.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[1400px] mx-auto text-center">
        <h2 className="font-display italic text-4xl md:text-5xl text-foreground mb-6">
          {lang === "uz" ? "Savol bormi?" : "Есть вопросы?"}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {lang === "uz"
            ? "Biz bilan bog'laning va mahsulotlarimiz haqida batafsil ma'lumot oling"
            : "Свяжитесь с нами для получения подробной информации о продукции"}
        </p>
        <a
          href="tel:+998781203334"
          className="inline-block bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
        >
          (+998) 78-120-33-34
        </a>
      </section>

      {/* Bottom */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20 text-center">
        <p className="text-xs text-muted-foreground">
          {lang === "uz"
            ? "2026 MUSAFFO. Barcha huquqlar himoyalangan."
            : "2026 MUSAFFO. Все права защищены."}
        </p>
      </div>

      {/* Product Detail Slide-over */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProduct(null)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[480px] md:w-[540px] bg-background shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Product Image */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-secondary">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name[lang]}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fat badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm px-4 py-2 rounded-full font-medium">
                    {fatLabel}: {selectedProduct.fat}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="px-6 py-8 sm:px-8">
                {/* Category tag */}
                <span className="inline-block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {getCategoryName(selectedProduct.category)}
                </span>

                <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight">
                  {selectedProduct.name[lang]}
                </h2>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {selectedProduct.description[lang]}
                </p>

                {/* Details */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {fatLabel}
                    </p>
                    <p className="text-2xl font-display text-foreground">
                      {selectedProduct.fat}
                    </p>
                  </div>
                  <div className="bg-secondary rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {lang === "uz" ? "Og'irligi" : "Вес"}
                    </p>
                    <p className="text-2xl font-display text-foreground">
                      {selectedProduct.weight}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="tel:+998781203334"
                    className="block w-full text-center bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    {lang === "uz" ? "Buyurtma berish" : "Заказать"} — (+998) 78-120-33-34
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
