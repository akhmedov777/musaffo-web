export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    products: string;
    technology: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    titleLine2: string;
    subtitle: string;
    tagline: string;
    taglineLine2: string;
  };
  philosophy: {
    sectionTitle: string;
    productLabel1: string;
    productLabel2: string;
    productCount: string;
    description: string;
  };
  featuredProducts: {
    title: string;
    titleLine2: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  technology: {
    titleWords: string[];
    descriptionText: string;
  };
  gallery: {
    images: { alt: string }[];
  };
  collection: {
    sectionTitle: string;
    products: {
      name: string;
      description: string;
    }[];
  };
  editorial: {
    specs: { label: string; value: string }[];
    certificatesTitle: string;
    certificatesDescription: string;
    halalLabel: string;
    fsscLabel: string;
  };
  testimonials: {
    statement: string;
  };
  footer: {
    brandDescription: string;
    phone: string;
    address: string;
    sectionsTitle: string;
    companyTitle: string;
    servicesTitle: string;
    exploreLinks: { label: string }[];
    aboutLinks: { label: string }[];
    serviceLinks: { label: string }[];
    copyright: string;
  };
}
