import { getMockDiscoverContent } from '@/data/mock/discover-content';
import { getMockRestaurantContent } from '@/data/mock/restaurant-content';
import type { DiscoverContent, Locale, RestaurantContent } from '@/locales/types';

export interface ContentProvider {
  getDiscoverContent(locale: Locale): DiscoverContent;
  getRestaurantContent(locale: Locale): RestaurantContent;
}

const mockContentProvider: ContentProvider = {
  getDiscoverContent(locale) {
    return getMockDiscoverContent(locale);
  },
  getRestaurantContent(locale) {
    return getMockRestaurantContent(locale);
  },
};

function getContentProvider(): ContentProvider {
  return mockContentProvider;
}

export function getDiscoverContent(locale: Locale): DiscoverContent {
  return getContentProvider().getDiscoverContent(locale);
}

export function getRestaurantContent(locale: Locale): RestaurantContent {
  return getContentProvider().getRestaurantContent(locale);
}
