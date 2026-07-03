import type { Locale, RestaurantContent } from '@/locales/types';

const restaurantContent: Record<Locale, RestaurantContent> = {
  tr: {
    branches: ['Merkez', 'Cadde', 'AVM'],
    branchSuffix: 'Şubesi',
    branchDescription: 'Menüye gir ve mağaza temasını otomatik uygula.',
  },
  en: {
    branches: ['Center', 'Street', 'Mall'],
    branchSuffix: 'Branch',
    branchDescription: 'Enter the menu and apply the store theme automatically.',
  },
};

export function getMockRestaurantContent(locale: Locale): RestaurantContent {
  return restaurantContent[locale];
}
