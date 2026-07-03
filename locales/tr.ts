import type { Messages } from './types';

export const tr: Messages = {
  common: {
    languageLabel: 'Dil',
    languages: {
      tr: 'TR',
      en: 'EN',
    },
    closed: 'Kapalı',
    home: 'Ana sayfa',
    brand: 'Marka',
  },
  home: {
    topNav: ['Keşfet', 'Kampanyalar', 'Favorilerim', 'Rezervasyon'],
    location: 'Kadıköy, İstanbul',
    heroTitle: 'Şehrindeki en iyi mekanları keşfet',
    heroSubtitle: 'Lezzetli anlar seni bekliyor.',
    searchPlaceholder: 'Restoran, mutfak veya mekan ara...',
    filters: {
      categories: 'Kategoriler',
      features: 'Özellikler',
      distance: 'Mesafe',
      sortByPopular: 'Sıralama: En Popüler',
      clear: 'Filtreleri Temizle',
    },
    sections: {
      popular: 'Popüler İşletmeler',
      nearby: 'Yakındaki İşletmeler',
      seeAll: 'Tümünü Gör',
    },
  },
  restaurant: {
    backToHome: 'Ana sayfa',
    eyebrow: 'Marka sayfası',
    description: 'Bu sayfa, markaya ait şube listesi ve tema önizlemesi için kullanılacak ana giriş noktasıdır.',
    tabs: ['Şubeler', 'Tema', 'Kampanyalar'],
    sectionTitle: 'Şubeler',
    sectionHint: 'Şube seçildiğinde direkt QR menüye geçilecek.',
  },
  branch: {
    backToBrand: 'Marka',
    backToHome: 'Ana sayfa',
    eyebrow: 'Şube menüsü',
    description: 'Burada kampanya barı, popup kampanyalar, kategori sekmeleri ve ürün kartları gösterilecek.',
    tabs: ['Günün Menüsü', 'Kampanyalar', 'Tüm Ürünler'],
    empty: 'Bu sayfa, gerçek menü verisi bağlandığında ürünleri, kategorileri ve kampanya akışını gösterecek.',
  },
};
