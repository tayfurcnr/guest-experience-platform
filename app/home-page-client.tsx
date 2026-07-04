'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessCard } from '@/components/business-card/BusinessCard';
import { HeroSection } from '@/components/hero/HeroSection';
import { CategoryCarousel } from '@/components/home/CategoryCarousel';
import { FiltersBar } from '@/components/home/FiltersBar';
import { HomeIcon } from '@/components/home/HomeIcon';
import { getHomeContent } from '@/lib/content';
import { getMessages } from '@/lib/i18n';
import type { Locale } from '@/locales/types';

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
          <HomeIcon name={icon} />
        </span>
        {title}
      </h2>
      <a href="#top">
        {actionLabel} <HomeIcon name="chevron" />
      </a>
    </div>
  );
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
  const numericDistanceValue = customDistanceKm ?? (Number.parseInt(selectedDistance, 10) || 5);
  const distanceLabel = customDistanceKm ? `${customDistanceKm} km` : selectedDistance;
  const hasActiveFilters =
    selectedCategory.name !== content.categories[0]?.name ||
    distanceLabel !== content.distances[3] ||
    openNowOnly ||
    selectedFeatures.length > 0 ||
    selectedSort !== 'popular';

  const filtersLabel = locale === 'tr' ? 'Filtreler' : 'Filters';
  const moreLabel = locale === 'tr' ? 'Daha Fazla' : 'More';
  const openNowLabel = locale === 'tr' ? 'Açık Olanlar' : 'Open Now';
  const quickDistanceLabel = locale === 'tr' ? 'Hızlı seçim' : 'Quick select';
  const customDistanceLabel = locale === 'tr' ? 'Özel mesafe' : 'Custom distance';
  const distanceRangeHint = locale === 'tr' ? '1 km ile 50 km arası ayarla' : 'Adjust between 1 km and 50 km';
  const categoriesLabel = locale === 'tr' ? 'Kategoriler' : 'Categories';

  return (
    <main className="shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Anlik Menu">
          <span className="brand-mark">
            <HomeIcon name="menu" />
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
              <HomeIcon name="pin" />
            </span>
            <span className="location-pill__text">{messages.home.location}</span>
            <span className="location-pill__chev">
              <HomeIcon name="chevron" />
            </span>
          </button>

          <button className="top-icon" type="button" aria-label="Favorites">
            <HomeIcon name="heart" />
          </button>
          <button className="top-icon" type="button" aria-label="Notifications">
            <HomeIcon name="bell" />
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
        <CategoryCarousel
          categories={content.categories}
          selectedCategoryName={selectedCategory.name}
          title={categoriesLabel}
          locale={locale}
          renderChevronIcon={() => <HomeIcon name="chevron" />}
          onSelectCategory={setSelectedCategory}
        />

        <FiltersBar
          locale={locale}
          filtersLabel={filtersLabel}
          sortLabel={messages.home.filters.sortByPopular}
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          distanceLabel={distanceLabel}
          distances={content.distances}
          selectedDistance={selectedDistance}
          customDistanceKm={customDistanceKm}
          numericDistanceValue={numericDistanceValue}
          selectedFeatures={selectedFeatures}
          featureFilters={content.featureFilters}
          openFilter={openFilter}
          openNowOnly={openNowOnly}
          hasActiveFilters={hasActiveFilters}
          openNowLabel={openNowLabel}
          moreLabel={moreLabel}
          clearLabel={messages.home.filters.clear}
          quickDistanceLabel={quickDistanceLabel}
          customDistanceLabel={customDistanceLabel}
          distanceRangeHint={distanceRangeHint}
          renderIcon={(name) => <HomeIcon name={name} />}
          filtersMenuRef={filtersMenuRef}
          setOpenFilter={setOpenFilter}
          setSelectedSort={setSelectedSort}
          setSelectedDistance={setSelectedDistance}
          setCustomDistanceKm={setCustomDistanceKm}
          applyCustomDistance={applyCustomDistance}
          toggleFeature={toggleFeature}
          setOpenNowOnly={setOpenNowOnly}
          resetFilters={resetFilters}
        />
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
            <HomeIcon name="chevron" />
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
            <HomeIcon name="chevron" />
          </button>
        </div>
      </section>
    </main>
  );
}
