import type { Messages } from './types';

export const en: Messages = {
  common: {
    languageLabel: 'Language',
    languages: {
      tr: 'TR',
      en: 'EN',
    },
    closed: 'Closed',
    discover: 'Discover',
    brand: 'Brand',
    login: 'Log in',
  },
  discover: {
    topNav: ['Discover', 'Offers', 'Favorites', 'Reservations'],
    location: 'Kadikoy, Istanbul',
    chooseLocation: 'Choose location',
    locationModal: {
      title: 'Choose your location',
      description: '',
      useCurrentLocation: 'Use current location',
      useCurrentLocationHint: '',
      addressPlaceholder: 'Type an address, district, or city',
      saveAddress: 'Use address',
      close: 'Close',
      privacyNote: 'Your location details are kept private and secure.',
      learnMore: 'Learn more',
    },
    heroTitle: 'Discover the best places in your city',
    heroSubtitle: 'Great flavors are waiting for you.',
    searchPlaceholder: 'Search restaurants, cuisines, or places...',
    emptyState: {
      title: 'Choose a location to start exploring',
      description: 'Use the location control at the top right to share your location or enter an address. Then we will show venues for you.',
      useMyLocation: 'Use my location',
      enterAddress: 'Enter address',
    },
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
    backToDiscover: 'Discover',
    eyebrow: 'Brand page',
    description: 'This page will be the main entry point for the branch list and theme preview of the brand.',
    tabs: ['Branches', 'Theme', 'Offers'],
    sectionTitle: 'Branches',
    sectionHint: 'When a branch is selected, the user will go directly to the QR menu.',
  },
  branch: {
    backToBrand: 'Brand',
    backToDiscover: 'Discover',
    eyebrow: 'Branch menu',
    description: 'This screen will show promo bars, campaign popups, category tabs, and product cards.',
    tabs: ["Today's Menu", 'Offers', 'All Products'],
    empty: 'When real menu data is connected, this page will display products, categories, and campaign flows.',
  },
};
