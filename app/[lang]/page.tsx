import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { SirokSection } from "@/components/sections/sirok-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-background">
      <Header dict={dict.header} lang={lang} />
      <HeroSection dict={dict.hero} />
      <PhilosophySection dict={dict.philosophy} />
      <FeaturedProductsSection dict={dict.featuredProducts} />
      <TechnologySection dict={dict.technology} />
      <GallerySection dict={dict.gallery} />
      <CollectionSection dict={dict.collection} />
      <SirokSection lang={lang} />
      <EditorialSection dict={dict.editorial} />
      <TestimonialsSection dict={dict.testimonials} />
      <FooterSection dict={dict.footer} lang={lang} />
    </main>
  );
}
