export interface Product {
  id: string;
  category: string;
  name: {
    uz: string;
    ru: string;
  };
  description: {
    uz: string;
    ru: string;
  };
  fat: string;
  weight: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  name: {
    uz: string;
    ru: string;
  };
  description: {
    uz: string;
    ru: string;
  };
  image: string;
}

export const categories: ProductCategory[] = [
  {
    id: "milk",
    name: { uz: "Sut", ru: "Молоко" },
    description: {
      uz: "UHT sterilizatsiyalangan tabiiy sut",
      ru: "Натуральное UHT стерилизованное молоко",
    },
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800",
  },
  {
    id: "yogurt",
    name: { uz: "Yogurt", ru: "Йогурт" },
    description: {
      uz: "Tabiiy meva bo'laklari bilan yogurt",
      ru: "Йогурт с натуральными кусочками фруктов",
    },
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800",
  },
  {
    id: "kefir",
    name: { uz: "Kefir", ru: "Кефир" },
    description: {
      uz: "Foydali bakteriyalar bilan boyitilgan kefir",
      ru: "Кефир, обогащённый полезными бактериями",
    },
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800",
  },
  {
    id: "ayran",
    name: { uz: "Ayran", ru: "Айран" },
    description: {
      uz: "An'anaviy fermentlangan sut ichimlik",
      ru: "Традиционный кисломолочный напиток",
    },
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=800",
  },
  {
    id: "butter",
    name: { uz: "Maslo", ru: "Масло" },
    description: {
      uz: "Tabiiy sariyog' va eritilgan yog'",
      ru: "Натуральное сливочное и топлёное масло",
    },
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=800",
  },
  {
    id: "cream",
    name: { uz: "Slivki", ru: "Сливки" },
    description: {
      uz: "Pasterizatsiyalangan qaymoq",
      ru: "Пастеризованные сливки",
    },
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800",
  },
  {
    id: "tvorog",
    name: { uz: "Tvorog", ru: "Творог" },
    description: {
      uz: "Tabiiy tvorog va tvorog desertlari",
      ru: "Натуральный творог и творожные десерты",
    },
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=800",
  },
  {
    id: "katyk",
    name: { uz: "Qatiq", ru: "Катык" },
    description: {
      uz: "An'anaviy qatiq",
      ru: "Традиционный катык",
    },
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=800",
  },
  {
    id: "milkshake",
    name: { uz: "Musaffosha", ru: "Мусаффоша" },
    description: {
      uz: "Bolalar uchun sut kokteyli",
      ru: "Молочный коктейль для детей",
    },
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800",
  },
  {
    id: "suzma",
    name: { uz: "Suzma", ru: "Сюзьма" },
    description: {
      uz: "An'anaviy suzma",
      ru: "Традиционная сюзьма",
    },
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800",
  },
];

export const products: Product[] = [
  // === MILK ===
  {
    id: "milk-1",
    category: "milk",
    name: { uz: "Musaffo Sut 1%", ru: "Musaffo Молоко 1%" },
    description: {
      uz: "Sterilizatsiyalangan kamyog'li sut, 1 litr, Tetra Pak",
      ru: "Стерилизованное нежирное молоко, 1 литр, Тетра Пак",
    },
    fat: "1%",
    weight: "1 L",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600",
  },
  {
    id: "milk-2",
    category: "milk",
    name: { uz: "Musaffo Sut 2%", ru: "Musaffo Молоко 2%" },
    description: {
      uz: "Sterilizatsiyalangan kamyog'li sut, 1 litr, Tetra Pak",
      ru: "Стерилизованное маложирное молоко, 1 литр, Тетра Пак",
    },
    fat: "2%",
    weight: "1 L",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600",
  },
  {
    id: "milk-3",
    category: "milk",
    name: { uz: "Musaffo Sut 3.2%", ru: "Musaffo Молоко 3.2%" },
    description: {
      uz: "Sterilizatsiyalangan klassik sut, 1 litr, Tetra Pak",
      ru: "Стерилизованное классическое молоко, 1 литр, Тетра Пак",
    },
    fat: "3.2%",
    weight: "1 L",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600",
  },
  {
    id: "milk-4",
    category: "milk",
    name: { uz: "Musaffo Sut 4%", ru: "Musaffo Молоко 4%" },
    description: {
      uz: "Sterilizatsiyalangan yog'li sut, 1 litr, Tetra Pak",
      ru: "Стерилизованное жирное молоко, 1 литр, Тетра Пак",
    },
    fat: "4%",
    weight: "1 L",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600",
  },

  // === YOGURT ===
  {
    id: "yogurt-strawberry",
    category: "yogurt",
    name: { uz: "Yogurt Qulupnayli", ru: "Йогурт Клубника" },
    description: {
      uz: "Termizatsiyalangan yogurt, qulupnay bo'laklari bilan, 2%",
      ru: "Термизированный йогурт с кусочками клубники, 2%",
    },
    fat: "2%",
    weight: "280 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-banana",
    category: "yogurt",
    name: { uz: "Yogurt Bananli", ru: "Йогурт Банан" },
    description: {
      uz: "Termizatsiyalangan yogurt, banan bo'laklari bilan, 2%",
      ru: "Термизированный йогурт с кусочками банана, 2%",
    },
    fat: "2%",
    weight: "280 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-peach",
    category: "yogurt",
    name: { uz: "Yogurt Shaftolili", ru: "Йогурт Персик" },
    description: {
      uz: "Termizatsiyalangan yogurt, shaftoli bo'laklari bilan, 2%",
      ru: "Термизированный йогурт с кусочками персика, 2%",
    },
    fat: "2%",
    weight: "280 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-cherry",
    category: "yogurt",
    name: { uz: "Yogurt Olchali", ru: "Йогурт Вишня" },
    description: {
      uz: "Termizatsiyalangan yogurt, olcha bo'laklari bilan, 1.5%",
      ru: "Термизированный йогурт с кусочками вишни, 1.5%",
    },
    fat: "1.5%",
    weight: "270 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-pineapple",
    category: "yogurt",
    name: { uz: "Yogurt Ananasli", ru: "Йогурт Ананас" },
    description: {
      uz: "Termizatsiyalangan yogurt, ananas bo'laklari bilan, 1.5%",
      ru: "Термизированный йогурт с кусочками ананаса, 1.5%",
    },
    fat: "1.5%",
    weight: "270 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-forest",
    category: "yogurt",
    name: { uz: "Yogurt O'rmon Mevali", ru: "Йогурт Лесные Ягоды" },
    description: {
      uz: "Termizatsiyalangan yogurt, o'rmon mevalari bilan, 2%",
      ru: "Термизированный йогурт с лесными ягодами, 2%",
    },
    fat: "2%",
    weight: "115 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-engil-strawberry",
    category: "yogurt",
    name: { uz: "Engil Yogurt Qulupnayli", ru: "Engil Йогурт Клубника" },
    description: {
      uz: "Yengil yogurt, qulupnay ta'mli, 0.8%",
      ru: "Лёгкий йогурт со вкусом клубники, 0.8%",
    },
    fat: "0.8%",
    weight: "270 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },
  {
    id: "yogurt-fresh-peach-mango",
    category: "yogurt",
    name: { uz: "Fresh Yogurt Shaftoli-Mango", ru: "Фреш Йогурт Персик-Манго" },
    description: {
      uz: "Qoshiq yogurt, shaftoli-mango ta'mli, 4%",
      ru: "Ложковой йогурт с персиком и манго, 4%",
    },
    fat: "4%",
    weight: "110 g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600",
  },

  // === KEFIR ===
  {
    id: "kefir-1",
    category: "kefir",
    name: { uz: "Kefir 1%", ru: "Кефир 1%" },
    description: {
      uz: "Normallashtirilgan sutdan kamyog'li kefir",
      ru: "Нежирный кефир из нормализованного молока",
    },
    fat: "1%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600",
  },
  {
    id: "kefir-25",
    category: "kefir",
    name: { uz: "Kefir 2.5%", ru: "Кефир 2.5%" },
    description: {
      uz: "Normallashtirilgan sutdan kamyog'li kefir",
      ru: "Маложирный кефир из нормализованного молока",
    },
    fat: "2.5%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600",
  },
  {
    id: "biokefir",
    category: "kefir",
    name: { uz: "Biokefir 2.5%", ru: "Биокефир 2.5%" },
    description: {
      uz: "Foydali bakteriyalar bilan boyitilgan biokefir",
      ru: "Биокефир, обогащённый полезными бактериями",
    },
    fat: "2.5%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600",
  },

  // === AYRAN ===
  {
    id: "ayran-plain",
    category: "ayran",
    name: { uz: "Ayran", ru: "Айран" },
    description: {
      uz: "Normallashtirilgan sut va suvdan tayyorlangan ayran, 2.2%",
      ru: "Айран из нормализованного молока и воды, 2.2%",
    },
    fat: "2.2%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600",
  },
  {
    id: "ayran-spiced",
    category: "ayran",
    name: { uz: "Ayran Tuzli va Ziravorli", ru: "Айран с солью и специями" },
    description: {
      uz: "Tuz va ziravorlar bilan ayran, 2.2%",
      ru: "Айран с солью и специями, 2.2%",
    },
    fat: "2.2%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=600",
  },

  // === BUTTER ===
  {
    id: "butter-825",
    category: "butter",
    name: { uz: "Sariyog' 82.5%", ru: "Масло сливочное 82.5%" },
    description: {
      uz: "Shirin-sariyog' tuzlanmagan, oliy nav",
      ru: "Сладко-сливочное несолёное масло, в/с",
    },
    fat: "82.5%",
    weight: "200 g",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=600",
  },
  {
    id: "ghee",
    category: "butter",
    name: { uz: "Eritilgan yog'", ru: "Масло топлёное" },
    description: {
      uz: "Tabiiy eritilgan yog', 99%",
      ru: "Натуральное топлёное масло, 99%",
    },
    fat: "99%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=600",
  },

  // === CREAM ===
  {
    id: "cream-35",
    category: "cream",
    name: { uz: "Slivki 35%", ru: "Сливки 35%" },
    description: {
      uz: "Pasterizatsiyalangan yog'li qaymoq",
      ru: "Пастеризованные жирные сливки",
    },
    fat: "35%",
    weight: "400 g",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=600",
  },

  // === TVOROG ===
  {
    id: "tvorog-lowfat",
    category: "tvorog",
    name: { uz: "Tvorog kamyog'li", ru: "Творог нежирный" },
    description: {
      uz: "Sigir sutidan kamyog'li tvorog",
      ru: "Нежирный творог из коровьего молока",
    },
    fat: "0.5%",
    weight: "200 g",
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=600",
  },
  {
    id: "tvorog-sweet",
    category: "tvorog",
    name: { uz: "Tvorog massasi Assorti", ru: "Масса творожная Ассорти" },
    description: {
      uz: "Shirin tvorog massasi, 23%",
      ru: "Сладкая творожная масса, 23%",
    },
    fat: "23%",
    weight: "400 g",
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=600",
  },
  {
    id: "sirok-vanilla",
    category: "tvorog",
    name: { uz: "Glazirlangan sirok Vanil", ru: "Сырок глазированный Ваниль" },
    description: {
      uz: "Shokoladli qoplamali tvorog sirok, vanil ta'mli, 23%",
      ru: "Глазированный сырок со вкусом ванили, 23%",
    },
    fat: "23%",
    weight: "40 g",
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=600",
  },
  {
    id: "sirok-cocoa",
    category: "tvorog",
    name: { uz: "Glazirlangan sirok Kakao", ru: "Сырок глазированный Какао" },
    description: {
      uz: "Shokoladli qoplamali tvorog sirok, kakao bilan, 23%",
      ru: "Глазированный сырок с какао, 23%",
    },
    fat: "23%",
    weight: "40 g",
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=600",
  },
  {
    id: "sirok-strawberry",
    category: "tvorog",
    name: { uz: "Glazirlangan sirok Qulupnay", ru: "Сырок глазированный Клубника" },
    description: {
      uz: "Shokoladli qoplamali tvorog sirok, qulupnay bilan, 23%",
      ru: "Глазированный сырок с клубникой, 23%",
    },
    fat: "23%",
    weight: "40 g",
    image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?q=80&w=600",
  },

  // === KATYK ===
  {
    id: "katyk",
    category: "katyk",
    name: { uz: "Qatiq 3%", ru: "Катык 3%" },
    description: {
      uz: "Normallashtirilgan sigir sutidan qatiq",
      ru: "Катык из нормализованного коровьего молока",
    },
    fat: "3%",
    weight: "900 g",
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=600",
  },

  // === MUSAFFOSHA ===
  {
    id: "musaffosha-banana",
    category: "milkshake",
    name: { uz: "Musaffosha Banan", ru: "Мусаффоша Банан" },
    description: {
      uz: "Sterilizatsiyalangan sut kokteyli, banan ta'mli, 2%",
      ru: "Стерилизованный молочный коктейль со вкусом банана, 2%",
    },
    fat: "2%",
    weight: "200 ml",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600",
  },
  {
    id: "musaffosha-strawberry",
    category: "milkshake",
    name: { uz: "Musaffosha Qulupnay", ru: "Мусаффоша Клубника" },
    description: {
      uz: "Sterilizatsiyalangan sut kokteyli, qulupnay ta'mli, 2%",
      ru: "Стерилизованный молочный коктейль со вкусом клубники, 2%",
    },
    fat: "2%",
    weight: "200 ml",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600",
  },
  {
    id: "musaffosha-chocolate",
    category: "milkshake",
    name: { uz: "Musaffosha Shokolad", ru: "Мусаффоша Шоколад" },
    description: {
      uz: "Sterilizatsiyalangan sut kokteyli, shokolad ta'mli, 2%",
      ru: "Стерилизованный молочный коктейль со вкусом шоколада, 2%",
    },
    fat: "2%",
    weight: "200 ml",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600",
  },

  // === SUZMA ===
  {
    id: "suzma",
    category: "suzma",
    name: { uz: "Suzma 5%", ru: "Сюзьма 5%" },
    description: {
      uz: "Normallashtirilgan sutdan suzma",
      ru: "Сюзьма из нормализованного молока",
    },
    fat: "5%",
    weight: "180 g",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600",
  },
];
