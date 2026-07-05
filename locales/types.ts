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
    discover: string;
    brand: string;
    login: string;
    loginModal: {
      title: string;
      description: string;
      tabs: {
        user: string;
        business: string;
      };
      usernameLabel: string;
      usernamePlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      forgotPassword: string;
      submit: string;
      google: string;
      divider: string;
      signupPrompt: string;
      signupAction: string;
      close: string;
    };
  };
  discover: {
    topNav: {
      guest: string[];
      user: string[];
      business: string[];
    };
    location: string;
    chooseLocation: string;
    locationModal: {
      title: string;
      description: string;
      useCurrentLocation: string;
      useCurrentLocationHint: string;
      addressPlaceholder: string;
      saveAddress: string;
      close: string;
      privacyNote: string;
      learnMore: string;
    };
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    emptyState: {
      title: string;
      description: string;
      useMyLocation: string;
      enterAddress: string;
    };
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
    backToDiscover: string;
    eyebrow: string;
    description: string;
    tabs: string[];
    sectionTitle: string;
    sectionHint: string;
  };
  branch: {
    backToBrand: string;
    backToDiscover: string;
    eyebrow: string;
    description: string;
    tabs: string[];
    empty: string;
  };
};

export type DiscoverContent = {
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
