'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessCard } from '@/components/business-card/BusinessCard';
import { CategoryCarousel } from '@/components/discover/CategoryCarousel';
import { DiscoverIcon } from '@/components/discover/DiscoverIcon';
import { LoginModal } from '@/components/discover/LoginModal';
import { LocationModal } from '@/components/discover/LocationModal';
import { FiltersBar } from '@/components/discover/FiltersBar';
import { HeroSection } from '@/components/hero/HeroSection';
import { getDiscoverContent } from '@/lib/content';
import { getMessages } from '@/lib/i18n';
import type { Locale } from '@/locales/types';

function LanguageSwitcher({
  locale,
  languageLabel,
  labels,
  className = 'language-switcher',
}: {
  locale: Locale;
  languageLabel: string;
  labels: Record<Locale, string>;
  className?: string;
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
    <div className={className} aria-label={languageLabel}>
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
          <DiscoverIcon name={icon} />
        </span>
        {title}
      </h2>
      <a href="#top">
        {actionLabel} <DiscoverIcon name="chevron" />
      </a>
    </div>
  );
}

export function DiscoverPageClient({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const content = getDiscoverContent(locale);
  const [selectedCategory, setSelectedCategory] = useState(content.categories[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedDistance, setSelectedDistance] = useState(content.distances[3]);
  const [selectedSort, setSelectedSort] = useState<'popular' | 'nearest' | 'topRated'>('popular');
  const [customDistanceKm, setCustomDistanceKm] = useState<number | null>(null);
  const [openFilter, setOpenFilter] = useState<'distance' | 'sort' | null>(null);
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginModalReason, setLoginModalReason] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const filtersMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedCategory(content.categories[0]);
    setSelectedFeatures([]);
    setSelectedDistance(content.distances[3]);
    setSelectedSort('popular');
    setCustomDistanceKm(null);
    setOpenNowOnly(false);
    setSelectedLocation(null);
    setIsLocationModalOpen(false);
    setIsLoginModalOpen(false);
    setLoginModalReason(null);
    setIsMobileMenuOpen(false);
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

  const closeLocationModal = () => {
    setIsLocationModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setLoginModalReason(null);
  };

  const openLoginModal = (reason?: string) => {
    setLoginModalReason(reason ?? null);
    setIsLoginModalOpen(true);
  };

  const useCurrentLocation = () => {
    setSelectedLocation(messages.discover.location);
    closeLocationModal();
  };

  const useEnteredAddress = (address: string) => {
    setSelectedLocation(address);
    closeLocationModal();
  };

  const applyCustomDistance = (nextDistance: number) => {
    const safeDistance = Math.max(1, Math.min(50, nextDistance));
    setCustomDistanceKm(safeDistance);
    setSelectedDistance(`${safeDistance} km`);
  };

  const sortOptions = messages.discover.filters.sortOptions;
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
  const distanceRangeHint = locale === 'tr' ? '1 km ile 50 km arasını ayarla' : 'Adjust between 1 km and 50 km';
  const categoriesLabel = locale === 'tr' ? 'Kategoriler' : 'Categories';
  const hasLocation = selectedLocation !== null;
  const isLoggedIn = false;
  const locationPillText = selectedLocation ?? messages.discover.chooseLocation;
  const discoverGateTitle = messages.discover.emptyState.title;
  const activeTopNav = messages.discover.topNav.guest;

  return (
    <main className="shell" id="top">
      <header className="topbar">
        <div className="topbar-main">
          <button
            className="menu-toggle"
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <DiscoverIcon name={isMobileMenuOpen ? 'close' : 'menu'} />
          </button>

          <a className="brand" href="#top" aria-label="Venuego">
            <Image className="brand-logo" src="/logo-wordmark.png" alt="Venuego logo" width={853} height={212} priority />
          </a>

          <span className="topbar-main__spacer" aria-hidden="true" />
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          {activeTopNav.map((item, index) => (
            <a key={item} href="#top" className={index === 0 ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button className="location-pill" type="button" onClick={() => setIsLocationModalOpen(true)}>
            <span className="location-pill__icon">
              <DiscoverIcon name="pin" />
            </span>
            <span className="location-pill__text">{locationPillText}</span>
            <span className="location-pill__chev">
              <DiscoverIcon name="chevron" />
            </span>
          </button>

          <button className="top-primary-action" type="button" onClick={() => openLoginModal()}>
            <span className="top-primary-action__icon">
              <DiscoverIcon name="login" />
            </span>
            {messages.common.login}
          </button>
        </div>

        <div
          id="mobile-drawer"
          className={`mobile-drawer${isMobileMenuOpen ? ' is-open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            className="mobile-drawer__backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
            <a className="mobile-drawer__brand" href="#top" aria-label="Venuego" onClick={() => setIsMobileMenuOpen(false)}>
              <Image className="mobile-drawer__brand-logo" src="/logo-wordmark.png" alt="Venuego logo" width={853} height={212} />
            </a>

            {activeTopNav.map((item, index) => (
              <a
                key={item}
                href="#top"
                className={index === 0 ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="mobile-drawer__footer">
              <div className="mobile-drawer__separator" aria-hidden="true" />

              <div className="mobile-drawer__footer-actions">
                <button
                  className="mobile-drawer__action"
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openLoginModal();
                  }}
                >
                  <span className="top-primary-action__icon">
                    <DiscoverIcon name="login" />
                  </span>
                  {messages.common.login}
                </button>

                <LanguageSwitcher
                  locale={locale}
                  languageLabel={messages.common.languageLabel}
                  labels={messages.common.languages}
                  className="language-switcher language-switcher--minimal"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <HeroSection
        title={messages.discover.heroTitle}
        subtitle={messages.discover.heroSubtitle}
        searchPlaceholder={messages.discover.searchPlaceholder}
      />

      {hasLocation ? (
        <>
          <section className="browse-surface">
            <CategoryCarousel
              categories={content.categories}
              selectedCategoryName={selectedCategory.name}
              title={categoriesLabel}
              locale={locale}
              renderChevronIcon={() => <DiscoverIcon name="chevron" />}
              onSelectCategory={setSelectedCategory}
            />

            <FiltersBar
              locale={locale}
              filtersLabel={filtersLabel}
              sortLabel={messages.discover.filters.sortByPopular}
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
              clearLabel={messages.discover.filters.clear}
              quickDistanceLabel={quickDistanceLabel}
              customDistanceLabel={customDistanceLabel}
              distanceRangeHint={distanceRangeHint}
              renderIcon={(name) => <DiscoverIcon name={name} />}
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
              title={messages.discover.sections.popular}
              actionLabel={messages.discover.sections.seeAll}
              icon="flame"
            />
            <div className="section-row-wrap">
              <div className="card-row">
                {content.items.popular.map((item) => (
                  <BusinessCard
                    key={item.name}
                    item={item}
                    closedLabel={messages.common.closed}
                    favoriteDisabled={!isLoggedIn}
                    onFavoriteClick={() => openLoginModal(messages.common.loginModal.reasons.favorite)}
                  />
                ))}
              </div>
              <button className="row-arrow" type="button" aria-label="Scroll right">
                <DiscoverIcon name="chevron" />
              </button>
            </div>
          </section>

          <section className="section">
            <SectionHeader
              title={messages.discover.sections.nearby}
              actionLabel={messages.discover.sections.seeAll}
              icon="pin"
            />
            <div className="section-row-wrap">
              <div className="card-row">
                {content.items.nearby.map((item) => (
                  <BusinessCard
                    key={item.name}
                    item={item}
                    closedLabel={messages.common.closed}
                    favoriteDisabled={!isLoggedIn}
                    onFavoriteClick={() => openLoginModal(messages.common.loginModal.reasons.favorite)}
                  />
                ))}
              </div>
              <button className="row-arrow" type="button" aria-label="Scroll right">
                <DiscoverIcon name="chevron" />
              </button>
            </div>
          </section>
        </>
      ) : null}

      <div className="floating-locale">
        <LanguageSwitcher
          locale={locale}
          languageLabel={messages.common.languageLabel}
          labels={messages.common.languages}
          className="language-switcher"
        />
      </div>

      <LocationModal
        isOpen={isLocationModalOpen}
        messages={messages.discover.locationModal}
        currentLocationLabel={messages.discover.location}
        onClose={closeLocationModal}
        onUseCurrentLocation={useCurrentLocation}
        onUseAddress={useEnteredAddress}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        messages={messages.common.loginModal}
        reason={loginModalReason}
        onClose={closeLoginModal}
      />
    </main>
  );
}
