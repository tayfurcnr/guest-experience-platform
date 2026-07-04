import type { Messages } from './types';

export const tr: Messages = {
  common: {
    languageLabel: 'Dil',
    languages: {
      tr: 'TR',
      en: 'EN',
    },
    closed: 'Kapalı',
    discover: 'Keşfet',
    brand: 'Marka',
    login: 'Giriş yap',
  },
  discover: {
    topNav: ['Keşfet', 'Kampanyalar', 'Favorilerim', 'Rezervasyon'],
    location: 'Kadıköy, İstanbul',
    chooseLocation: 'Konum seç',
    locationModal: {
      title: 'Konumunu seç',
      description: '',
      useCurrentLocation: 'Mevcut konumu kullan',
      useCurrentLocationHint: '',
      addressPlaceholder: 'Adres, semt veya şehir yaz',
      saveAddress: 'Adresi kullan',
      close: 'Kapat',
      privacyNote: 'Konum bilgilerin gizli ve güvende tutulur.',
      learnMore: 'Daha fazla bilgi',
    },
    heroTitle: 'Şehrindeki en iyi mekanları keşfet',
    heroSubtitle: 'Lezzetli anlar seni bekliyor.',
    searchPlaceholder: 'Restoran, mutfak veya mekan ara...',
    emptyState: {
      title: 'Keşfetmeye başlamak için konum seç',
      description: 'Sağ üstteki konum alanından konumunu paylaş ya da adres gir. Ardından sana uygun mekanları gösterelim.',
      useMyLocation: 'Konumumu kullan',
      enterAddress: 'Adres gir',
    },
    filters: {
      categories: 'Kategoriler',
      features: 'Özellikler',
      distance: 'Mesafe',
      sortByPopular: 'Sıralama: En Popüler',
      sortOptions: {
        popular: 'En Popüler',
        nearest: 'En Yakın',
        topRated: 'En Yüksek Puan',
      },
      clear: 'Filtreleri Temizle',
    },
    sections: {
      popular: 'Popüler İşletmeler',
      nearby: 'Yakındaki İşletmeler',
      seeAll: 'Tümünü Gör',
    },
  },
  restaurant: {
    backToDiscover: 'Keşfet',
    eyebrow: 'Marka sayfası',
    description: 'Bu sayfa, markaya ait şube listesi ve tema önizlemesi için kullanılacak ana giriş noktasıdır.',
    tabs: ['Şubeler', 'Tema', 'Kampanyalar'],
    sectionTitle: 'Şubeler',
    sectionHint: 'Şube seçildiğinde direkt QR menüye geçilecek.',
  },
  branch: {
    backToBrand: 'Marka',
    backToDiscover: 'Keşfet',
    eyebrow: 'Şube menüsü',
    description: 'Burada kampanya barı, popup kampanyalar, kategori sekmeleri ve ürün kartları gösterilecek.',
    tabs: ['Günün Menüsü', 'Kampanyalar', 'Tüm Ürünler'],
    empty: 'Bu sayfa, gerçek menü verisi bağlandığında ürünleri, kategorileri ve kampanya akışlarını gösterecek.',
  },
};
