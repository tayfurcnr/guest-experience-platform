import type { Messages } from './types';

export const en: Messages = {
  common: {
    languageLabel: 'Language',
    languages: {
      tr: 'TR',
      en: 'EN',
    },
    closed: 'Closed',
    home: 'Home',
    brand: 'Brand',
  },
  home: {
    topNav: ['Discover', 'Offers', 'Favorites', 'Reservations'],
    location: 'Kadikoy, Istanbul',
    heroTitle: 'Discover the best places in your city',
    heroSubtitle: 'Great flavors are waiting for you.',
    searchPlaceholder: 'Search restaurants, cuisines, or places...',
    filters: {
      categories: 'Categories',
      features: 'Features',
      distance: 'Distance',
      sortByPopular: 'Sort: Most Popular',
      sortOptions: {
        popular: 'Most Popular',
        nearest: 'Nearest',
        topRated: 'Top Rated',
      },
      clear: 'Clear Filters',
    },
    sections: {
      popular: 'Popular Spots',
      nearby: 'Nearby Spots',
      seeAll: 'See All',
    },
  },
  restaurant: {
    backToHome: 'Home',
    eyebrow: 'Brand page',
    description: 'This page will be the main entry point for the branch list and theme preview of the brand.',
    tabs: ['Branches', 'Theme', 'Offers'],
    sectionTitle: 'Branches',
    sectionHint: 'When a branch is selected, the user will go directly to the QR menu.',
  },
  branch: {
    backToBrand: 'Brand',
    backToHome: 'Home',
    eyebrow: 'Branch menu',
    description: 'This screen will show promo bars, campaign popups, category tabs, and product cards.',
    tabs: ["Today's Menu", 'Offers', 'All Products'],
    empty: 'When real menu data is connected, this page will display products, categories, and campaign flows.',
  },
};
