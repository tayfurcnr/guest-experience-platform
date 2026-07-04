export type Locale = 'tr' | 'en';

export type DiscoverItem = {
  name: string;
  cuisine: string;
  distance: string;
  rating: string;
  image: string;
  isOpen?: boolean;
};

export type Messages = {
  common: {
    languageLabel: string;
    languages: Record<Locale, string>;
    closed: string;
    home: string;
    brand: string;
  };
  home: {
    topNav: string[];
    location: string;
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    filters: {
      categories: string;
      features: string;
      distance: string;
      sortByPopular: string;
      sortOptions: {
        popular: string;
        nearest: string;
        topRated: string;
      };
      clear: string;
    };
    sections: {
      popular: string;
      nearby: string;
      seeAll: string;
    };
  };
  restaurant: {
    backToHome: string;
    eyebrow: string;
    description: string;
    tabs: string[];
    sectionTitle: string;
    sectionHint: string;
  };
  branch: {
    backToBrand: string;
    backToHome: string;
    eyebrow: string;
    description: string;
    tabs: string[];
    empty: string;
  };
};

export type HomeContent = {
  categories: Array<{ name: string; count: number }>;
  featureFilters: string[];
  distances: string[];
  items: {
    popular: DiscoverItem[];
    nearby: DiscoverItem[];
  };
};

export type RestaurantContent = {
  branches: string[];
  branchSuffix: string;
  branchDescription: string;
};
