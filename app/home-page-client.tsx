'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessCard } from '@/components/business-card/BusinessCard';
import { HeroSection } from '@/components/hero/HeroSection';
import { getHomeContent } from '@/lib/content';
import { getMessages } from '@/lib/i18n';
import type { Locale } from '@/locales/types';

function Icon({
  name,
}: {
  name:
    | 'flame'
    | 'pin'
    | 'heart'
    | 'bell'
    | 'refresh'
    | 'menu'
    | 'chevron'
    | 'calendar'
    | 'accessibility'
    | 'plus'
    | 'spark';
}) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

  switch (name) {
    case 'flame':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c1.6 3 .7 4.7-.4 6.2-1.1 1.5-2.1 2.8-2.1 4.8A4.5 4.5 0 0 0 14 18c2.2 0 4-1.8 4-4 0-2.6-1.2-4.7-2.8-6.8-.8 1.4-1.8 2.3-3.2 2.3.9-2.8.8-4.6 0-6.5Z" {...common} />
        </svg>
      );
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" {...common} />
          <circle cx="12" cy="10" r="2.2" {...common} />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 8.3c0 4.9-8.5 11-8.5 11S3.5 13.2 3.5 8.3A4.8 4.8 0 0 1 12 5a4.8 4.8 0 0 1 8.5 3.3Z" {...common} />
        </svg>
      );
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 17h12l-1.2-1.8A6.7 6.7 0 0 1 16 11V9a4 4 0 0 0-8 0v2a6.7 6.7 0 0 1-1.8 4.2L6 17Z" {...common} />
          <path d="M10 19a2 2 0 0 0 4 0" {...common} />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 12a7.5 7.5 0 0 1 12.9-5.3L19 8.3" {...common} />
          <path d="M19.5 12a7.5 7.5 0 0 1-12.9 5.3L5 15.7" {...common} />
          <path d="M16.7 5.5h2.7V8.2" {...common} />
          <path d="M7.3 18.5H4.5v-2.7" {...common} />
        </svg>
      );
    case 'menu':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16" {...common} />
          <path d="M4 12h16" {...common} />
          <path d="M4 17h16" {...common} />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="6" width="16" height="14" rx="2.5" {...common} />
          <path d="M8 4v4" {...common} />
          <path d="M16 4v4" {...common} />
          <path d="M4 10h16" {...common} />
        </svg>
      );
    case 'accessibility':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="5.5" r="1.8" {...common} />
          <path d="M7 9.5h10" {...common} />
          <path d="M12 7.5v6" {...common} />
          <path d="m10 13.5-3 5" {...common} />
          <path d="m14 13.5 3 5" {...common} />
          <path d="m9 9.5 3 2 3-2" {...common} />
        </svg>
      );
    case 'plus':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14" {...common} />
          <path d="M5 12h14" {...common} />
        </svg>
      );
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z" {...common} />
        </svg>
      );
    case 'chevron':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 6 6 6-6 6" {...common} />
        </svg>
      );
  }
}

function LanguageSwitcher({
  locale,
  languageLabel,
  labels,
}: {
  locale: Locale;
  languageLabel: string;
  labels: Record<Locale, string>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateLocale = (nextLocale: Locale) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', nextLocale);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="language-switcher" aria-label={languageLabel}>
      {(['tr', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={`language-switcher__button${locale === option ? ' active' : ''}`}
          onClick={() => updateLocale(option)}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}

function SectionHeader({
  title,
  actionLabel,
  icon,
}: {
  title: string;
  actionLabel: string;
  icon: 'flame' | 'pin';
}) {
  return (
    <div className="section-head">
      <h2>
        <span className="section-head__icon">
          <Icon name={icon} />
        </span>
        {title}
      </h2>
      <a href="#top">
        {actionLabel} <Icon name="chevron" />
      </a>
    </div>
  );
}

function CategoryGlyph({ categoryName }: { categoryName: string }) {
  const key = categoryName.toLowerCase();
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

  if (key.includes('tümü') || key.includes('all')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.4" {...common} />
        <rect x="14" y="4" width="6" height="6" rx="1.4" {...common} />
        <rect x="4" y="14" width="6" height="6" rx="1.4" {...common} />
        <rect x="14" y="14" width="6" height="6" rx="1.4" {...common} />
      </svg>
    );
  }

  if (key.includes('burger')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 11.5h14" {...common} />
        <path d="M6 15h12" {...common} />
        <path d="M7 9.5a5 5 0 0 1 10 0" {...common} />
        <path d="M6.5 15.5v1a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-1" {...common} />
      </svg>
    );
  }

  if (key.includes('pizza')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 5.5 19 9.5 9.5 19 4.5 5.5Z" {...common} />
        <circle cx="10.5" cy="10.5" r="1" {...common} />
        <circle cx="13.8" cy="11.8" r="1" {...common} />
      </svg>
    );
  }

  if (key.includes('kebap') || key.includes('kebab')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 5 14 14" {...common} />
        <path d="M8 7.5 6.2 9.3" {...common} />
        <path d="M11 10.5 9.2 12.3" {...common} />
        <path d="M14 13.5 12.2 15.3" {...common} />
        <path d="M17 16.5 15.2 18.3" {...common} />
      </svg>
    );
  }

  if (key.includes('kahve') || key.includes('coffee')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 10h9v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-4Z" {...common} />
        <path d="M15 11h1.5A2.5 2.5 0 0 1 19 13.5v0A2.5 2.5 0 0 1 16.5 16H15" {...common} />
        <path d="M9 6.5c0-1 1-1.3 1-2.5" {...common} />
        <path d="M12 6.5c0-1 1-1.3 1-2.5" {...common} />
      </svg>
    );
  }

  if (key.includes('tatlı') || key.includes('dessert')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10h10l-1.2 7H8.2L7 10Z" {...common} />
        <path d="M9 10a3 3 0 1 1 6 0" {...common} />
        <path d="M12 5.5v2" {...common} />
      </svg>
    );
  }

  if (key.includes('türk') || key.includes('turkish')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 15.5h13" {...common} />
        <path d="M7 15.5a5 5 0 0 1 10 0" {...common} />
        <path d="M6 15.5v1.5" {...common} />
        <path d="M18 15.5v1.5" {...common} />
        <path d="M4.5 18h15" {...common} />
      </svg>
    );
  }

  if (key.includes('dünya') || key.includes('world')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M4.5 12h15" {...common} />
        <path d="M12 4a12 12 0 0 1 0 16" {...common} />
        <path d="M12 4a12 12 0 0 0 0 16" {...common} />
      </svg>
    );
  }

  if (key.includes('bar') || key.includes('cafe')) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5h8l-1 5H9L8 5Z" {...common} />
        <path d="M10 10v6" {...common} />
        <path d="M14 10v6" {...common} />
        <path d="M8 18h8" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" {...common} />
      <path d="M8 12h8" {...common} />
      <path d="M12 8v8" {...common} />
    </svg>
  );
}

function getCategoryImage(categoryName: string) {
  const key = categoryName.toLowerCase();

  if (key.includes('tümü') || key.includes('all')) {
    return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('burger')) {
    return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('pizza')) {
    return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('kebap') || key.includes('kebab')) {
    return 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('kahve') || key.includes('coffee')) {
    return 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('tatlı') || key.includes('dessert')) {
    return 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('türk') || key.includes('turkish')) {
    return 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('dünya') || key.includes('world')) {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=320&q=80';
  }

  if (key.includes('bar') || key.includes('cafe')) {
    return 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=320&q=80';
  }

  return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=320&q=80';
}

export function HomePageClient({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const content = getHomeContent(locale);
  const [selectedCategory, setSelectedCategory] = useState(content.categories[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedDistance, setSelectedDistance] = useState(content.distances[3]);
  const [selectedSort, setSelectedSort] = useState<'popular' | 'nearest' | 'topRated'>('popular');
  const [customDistanceKm, setCustomDistanceKm] = useState<number | null>(null);
  const [openFilter, setOpenFilter] = useState<'distance' | 'sort' | null>(null);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const categoryCarouselRef = useRef<HTMLDivElement | null>(null);
  const filtersMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedCategory(content.categories[0]);
    setSelectedFeatures([]);
    setSelectedDistance(content.distances[3]);
    setSelectedSort('popular');
    setCustomDistanceKm(null);
    setOpenNowOnly(false);
  }, [content]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!filtersMenuRef.current?.contains(event.target as Node)) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const resetFilters = () => {
    setSelectedCategory(content.categories[0]);
    setSelectedFeatures([]);
    setSelectedDistance(content.distances[3]);
    setSelectedSort('popular');
    setCustomDistanceKm(null);
    setOpenNowOnly(false);
    setOpenFilter(null);
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature],
    );
  };

  const applyCustomDistance = (nextDistance: number) => {
    const safeDistance = Math.max(1, Math.min(50, nextDistance));
    setCustomDistanceKm(safeDistance);
    setSelectedDistance(`${safeDistance} km`);
  };

  const sortOptions = messages.home.filters.sortOptions;
  const sortValue = sortOptions[selectedSort];

  const defaultCategoryName = content.categories[0]?.name;
  const defaultDistance = content.distances[3];
  const numericDistanceValue = customDistanceKm ?? (Number.parseInt(selectedDistance, 10) || 5);
  const distanceLabel = customDistanceKm ? `${customDistanceKm} km` : selectedDistance;
  const hasActiveFilters =
    selectedCategory.name !== defaultCategoryName ||
    distanceLabel !== defaultDistance ||
    openNowOnly ||
    selectedFeatures.length > 0;

  const filtersLabel = locale === 'tr' ? 'Filtreler' : 'Filters';
  const moreLabel = locale === 'tr' ? 'Daha Fazla' : 'More';
  const openNowLabel = locale === 'tr' ? 'Açık Olanlar' : 'Open Now';
  const featureSummary = selectedFeatures.length > 0 ? selectedFeatures.join(' • ') : messages.home.filters.features;

  const quickDistanceLabel = locale === 'tr' ? 'Hızlı seçim' : 'Quick select';
  const customDistanceLabel = locale === 'tr' ? 'Özel mesafe' : 'Custom distance';
  const distanceRangeHint = locale === 'tr' ? '1 km ile 50 km arası ayarla' : 'Adjust between 1 km and 50 km';
  const cuisinesLabel = locale === 'tr' ? 'Kategoriler' : 'Categories';

  const scrollCategories = (direction: 'prev' | 'next') => {
    categoryCarouselRef.current?.scrollBy({
      left: direction === 'next' ? 520 : -520,
      behavior: 'smooth',
    });
  };

  return (
    <main className="shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Anlik Menu">
          <span className="brand-mark">
            <Icon name="menu" />
          </span>
          <span className="brand-text">
            <strong>Anlik</strong> <em>Menu</em>
          </span>
        </a>

        <nav className="top-nav" aria-label="Main navigation">
          {messages.home.topNav.map((item, index) => (
            <a key={item} href="#top" className={index === 0 ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <LanguageSwitcher
            locale={locale}
            languageLabel={messages.common.languageLabel}
            labels={messages.common.languages}
          />

          <button className="location-pill" type="button">
            <span className="location-pill__icon">
              <Icon name="pin" />
            </span>
            <span className="location-pill__text">{messages.home.location}</span>
            <span className="location-pill__chev">
              <Icon name="chevron" />
            </span>
          </button>

          <button className="top-icon" type="button" aria-label="Favorites">
            <Icon name="heart" />
          </button>
          <button className="top-icon" type="button" aria-label="Notifications">
            <Icon name="bell" />
          </button>
          <button className="avatar" type="button" aria-label="Profile">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
              alt=""
            />
          </button>
        </div>
      </header>

      <HeroSection
        title={messages.home.heroTitle}
        subtitle={messages.home.heroSubtitle}
        searchPlaceholder={messages.home.searchPlaceholder}
      />

      <section className="browse-surface">
        <section className="category-showcase" aria-label={messages.home.filters.categories}>
          <div className="category-showcase__head">
            <h2>{cuisinesLabel}</h2>
          </div>

          <div className="category-rail">
            <button
              className="category-rail__arrow category-rail__arrow--prev"
              type="button"
              aria-label={locale === 'tr' ? 'Önceki mutfaklar' : 'Previous cuisines'}
              onClick={() => scrollCategories('prev')}
            >
              <Icon name="chevron" />
            </button>

            <div className="category-grid" ref={categoryCarouselRef}>
              {content.categories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  className={`category-tile${selectedCategory.name === category.name ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="category-tile__media">
                    <img src={getCategoryImage(category.name)} alt="" />
                    <span className="category-tile__icon">
                      <CategoryGlyph categoryName={category.name} />
                    </span>
                  </span>
                  <span className="category-tile__content">
                    <strong>{category.name}</strong>
                  </span>
                </button>
              ))}
            </div>

            <button
              className="category-rail__arrow category-rail__arrow--next"
              type="button"
              aria-label={locale === 'tr' ? 'Sonraki mutfaklar' : 'Next cuisines'}
              onClick={() => scrollCategories('next')}
            >
              <Icon name="chevron" />
            </button>
          </div>
        </section>

        <section className="filters-surface" aria-label={filtersLabel}>
          <div className="filters-surface__label">{filtersLabel}</div>

          <div className={`filters-toolbar${openFilter ? ' filters-toolbar--menu-open' : ''}`} ref={filtersMenuRef}>
            <div className="filters-dropdown">
              <button
                className="toolbar-pill toolbar-pill--select"
                type="button"
                aria-expanded={openFilter === 'sort'}
                onClick={() => setOpenFilter((current) => (current === 'sort' ? null : 'sort'))}
              >
                <span className="toolbar-pill__icon">
                  <Icon name="spark" />
                </span>
                <span className="toolbar-pill__label">{sortValue}</span>
                <span className="toolbar-pill__chevron">
                  <Icon name="chevron" />
                </span>
              </button>

              {openFilter === 'sort' ? (
                <div className="filters-dropdown__menu" role="menu" aria-label={messages.home.filters.sortByPopular}>
                  {(['popular', 'nearest', 'topRated'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`filters-dropdown__item${selectedSort === option ? ' active' : ''}`}
                      onClick={() => {
                        setSelectedSort(option);
                        setOpenFilter(null);
                      }}
                    >
                      <span>{sortOptions[option]}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="filters-dropdown">
              <button
                className="toolbar-pill toolbar-pill--select"
                type="button"
                aria-expanded={openFilter === 'distance'}
                onClick={() => setOpenFilter((current) => (current === 'distance' ? null : 'distance'))}
              >
                <span className="toolbar-pill__icon">
                  <Icon name="pin" />
                </span>
                <span className="toolbar-pill__label">{distanceLabel}</span>
                <span className="toolbar-pill__chevron">
                  <Icon name="chevron" />
                </span>
              </button>

              {openFilter === 'distance' ? (
                <div className="filters-dropdown__menu" role="menu" aria-label={messages.home.filters.distance}>
                  <div className="filters-dropdown__presets">
                    <div className="filters-dropdown__section-title">{quickDistanceLabel}</div>
                    <div className="filters-dropdown__preset-list">
                      {content.distances.map((distance) => (
                        <button
                          key={distance}
                          type="button"
                          className={`filters-dropdown__preset${customDistanceKm === null && selectedDistance === distance ? ' active' : ''}`}
                          onClick={() => {
                            setSelectedDistance(distance);
                            setCustomDistanceKm(null);
                            setOpenFilter(null);
                          }}
                        >
                          {distance}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="filters-dropdown__custom">
                    <div className="filters-dropdown__custom-head">
                      <strong>{customDistanceLabel}</strong>
                      <span>{distanceLabel}</span>
                    </div>

                    <div className="filters-dropdown__range-row">
                      <button
                        type="button"
                        className="filters-dropdown__stepper"
                        aria-label={locale === 'tr' ? 'Mesafeyi azalt' : 'Decrease distance'}
                        onClick={() => applyCustomDistance(numericDistanceValue - 1)}
                      >
                        -
                      </button>

                      <input
                        className="filters-dropdown__range"
                        type="range"
                        min={1}
                        max={50}
                        step={1}
                        value={numericDistanceValue}
                        onChange={(event) => {
                          applyCustomDistance(Number(event.target.value));
                        }}
                        aria-label={locale === 'tr' ? 'Özel mesafe seç' : 'Choose custom distance'}
                      />

                      <button
                        type="button"
                        className="filters-dropdown__stepper"
                        aria-label={locale === 'tr' ? 'Mesafeyi artır' : 'Increase distance'}
                        onClick={() => applyCustomDistance(numericDistanceValue + 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="filters-dropdown__range-scale" aria-hidden="true">
                      <span>1 km</span>
                      <span>50 km</span>
                    </div>

                    <div className="filters-dropdown__range-hint">{distanceRangeHint}</div>
                  </div>
                </div>
              ) : null}
            </div>

            {content.featureFilters.map((feature, index) => (
              <button
                key={feature}
                type="button"
                className={`toolbar-pill${selectedFeatures.includes(feature) ? ' active' : ''}`}
                onClick={() => toggleFeature(feature)}
              >
                <span className="toolbar-pill__icon">
                  <Icon name={index === 0 ? 'calendar' : 'accessibility'} />
                </span>
                <span className="toolbar-pill__label">{feature}</span>
              </button>
            ))}

            <button
              type="button"
              className={`toolbar-pill${openNowOnly ? ' active toolbar-pill--success' : ''}`}
              onClick={() => setOpenNowOnly((current) => !current)}
            >
              <span className={`toolbar-pill__dot${openNowOnly ? ' active' : ''}`} />
              <span className="toolbar-pill__label">{openNowLabel}</span>
            </button>

            <button className="toolbar-pill toolbar-pill--more" type="button">
              <span className="toolbar-pill__icon">
                <Icon name="plus" />
              </span>
              <span className="toolbar-pill__label">{moreLabel}</span>
            </button>

            {hasActiveFilters ? (
              <button className="filters-reset filters-reset--inline" type="button" onClick={resetFilters}>
                <Icon name="refresh" />
                {messages.home.filters.clear}
              </button>
            ) : null}
          </div>
        </section>
      </section>

      <section className="section">
        <SectionHeader
          title={messages.home.sections.popular}
          actionLabel={messages.home.sections.seeAll}
          icon="flame"
        />
        <div className="section-row-wrap">
          <div className="card-row">
            {content.items.popular.map((item) => (
              <BusinessCard key={item.name} item={item} closedLabel={messages.common.closed} />
            ))}
          </div>
          <button className="row-arrow" type="button" aria-label="Scroll right">
            <Icon name="chevron" />
          </button>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title={messages.home.sections.nearby}
          actionLabel={messages.home.sections.seeAll}
          icon="pin"
        />
        <div className="section-row-wrap">
          <div className="card-row">
            {content.items.nearby.map((item) => (
              <BusinessCard key={item.name} item={item} closedLabel={messages.common.closed} />
            ))}
          </div>
          <button className="row-arrow" type="button" aria-label="Scroll right">
            <Icon name="chevron" />
          </button>
        </div>
      </section>
    </main>
  );
}
