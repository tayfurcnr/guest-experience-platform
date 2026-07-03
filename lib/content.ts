import { getMockHomeContent } from '@/data/mock/home-content';
import { getMockRestaurantContent } from '@/data/mock/restaurant-content';
import type { HomeContent, Locale, RestaurantContent } from '@/locales/types';

export interface ContentProvider {
  getHomeContent(locale: Locale): HomeContent;
  getRestaurantContent(locale: Locale): RestaurantContent;
}

const mockContentProvider: ContentProvider = {
  getHomeContent(locale) {
    return getMockHomeContent(locale);
  },
  getRestaurantContent(locale) {
    return getMockRestaurantContent(locale);
  },
};

function getContentProvider(): ContentProvider {
  return mockContentProvider;
}

export function getHomeContent(locale: Locale): HomeContent {
  return getContentProvider().getHomeContent(locale);
}

export function getRestaurantContent(locale: Locale): RestaurantContent {
  return getContentProvider().getRestaurantContent(locale);
}
