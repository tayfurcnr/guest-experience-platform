'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
    | 'chevron';
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

export function HomePageClient({ locale }: { locale: Locale }) {
  const messages = useMemo(() => getMessages(locale), [locale]);
  const content = useMemo(() => getHomeContent(locale), [locale]);
  const [selectedCategory, setSelectedCategory] = useState(content.categories[0]);
  const [selectedFeature, setSelectedFeature] = useState(content.featureFilters[0]);
  const [selectedDistance, setSelectedDistance] = useState(content.distances[3]);
  const [openFilter, setOpenFilter] = useState<'category' | 'feature' | 'distance' | null>(null);
  const filtersMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedCategory(content.categories[0]);
    setSelectedFeature(content.featureFilters[0]);
    setSelectedDistance(content.distances[3]);
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
    setSelectedFeature(content.featureFilters[0]);
    setSelectedDistance(content.distances[3]);
    setOpenFilter(null);
  };
  const [sortCaption, sortValue] = messages.home.filters.sortByPopular.includes(':')
    ? messages.home.filters.sortByPopular.split(/:\s(.+)/)
    : ['Sort', messages.home.filters.sortByPopular];

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

      <section className="filters-row" aria-label="Filters">
        <div className="filters-row__header">
          <div className="filters-row__intro">
            <strong>{messages.home.filters.categories}</strong>
            <span>
              {selectedCategory.name} • {selectedFeature} • {selectedDistance}
            </span>
          </div>

          <button className="filters-reset filters-reset--header" type="button" onClick={resetFilters}>
            <Icon name="refresh" />
            {messages.home.filters.clear}
          </button>
        </div>

        <div className="filters-strip" ref={filtersMenuRef}>
          <div className="filters-dropdown">
            <button
              className="select-field filters-category-trigger"
              type="button"
              aria-expanded={openFilter === 'category'}
              onClick={() => setOpenFilter((current) => (current === 'category' ? null : 'category'))}
            >
              <span className="select-field__content">
                <span className="select-field__caption">{messages.home.filters.categories}</span>
                <span className="select-field__value">{selectedCategory.name}</span>
              </span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'category' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label={messages.home.filters.categories}>
                {content.categories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    className={`filters-dropdown__item${selectedCategory.name === category.name ? ' active' : ''}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenFilter(null);
                    }}
                  >
                    <span>{category.name}</span>
                    <span>{category.count}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="filters-dropdown">
            <button
              className="select-field filters-category-trigger"
              type="button"
              aria-expanded={openFilter === 'feature'}
              onClick={() => setOpenFilter((current) => (current === 'feature' ? null : 'feature'))}
            >
              <span className="select-field__content">
                <span className="select-field__caption">{messages.home.filters.features}</span>
                <span className="select-field__value">{selectedFeature}</span>
              </span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'feature' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label={messages.home.filters.features}>
                {content.featureFilters.map((feature) => (
                  <button
                    key={feature}
                    type="button"
                    className={`filters-dropdown__item${selectedFeature === feature ? ' active' : ''}`}
                    onClick={() => {
                      setSelectedFeature(feature);
                      setOpenFilter(null);
                    }}
                  >
                    <span>{feature}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="filters-dropdown">
            <button
              className="select-field filters-category-trigger"
              type="button"
              aria-expanded={openFilter === 'distance'}
              onClick={() => setOpenFilter((current) => (current === 'distance' ? null : 'distance'))}
            >
              <span className="select-field__content">
                <span className="select-field__caption">{messages.home.filters.distance}</span>
                <span className="select-field__value">{selectedDistance}</span>
              </span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'distance' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label={messages.home.filters.distance}>
                {content.distances.map((distance) => (
                  <button
                    key={distance}
                    type="button"
                    className={`filters-dropdown__item${selectedDistance === distance ? ' active' : ''}`}
                    onClick={() => {
                      setSelectedDistance(distance);
                      setOpenFilter(null);
                    }}
                  >
                    <span>{distance}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <button className="select-field filters-sort" type="button">
            <span className="select-field__content">
              <span className="select-field__caption">{sortCaption}</span>
              <span className="select-field__value">{sortValue}</span>
            </span>
            <span className="select-field__chevron">
              <Icon name="chevron" />
            </span>
          </button>
        </div>

        <div className="filters-active">
          <span className="filters-active__chip">{selectedCategory.name}</span>
          <span className="filters-active__chip">{selectedFeature}</span>
          <span className="filters-active__chip">{selectedDistance}</span>
        </div>
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
