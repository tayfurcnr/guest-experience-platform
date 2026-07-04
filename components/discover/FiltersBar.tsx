'use client';

import type { ReactNode, RefObject } from 'react';

export type SortOptionKey = 'popular' | 'nearest' | 'topRated';

export function FiltersBar({
  locale,
  filtersLabel,
  sortLabel,
  sortOptions,
  selectedSort,
  distanceLabel,
  distances,
  selectedDistance,
  customDistanceKm,
  numericDistanceValue,
  selectedFeatures,
  featureFilters,
  openFilter,
  openNowOnly,
  hasActiveFilters,
  openNowLabel,
  moreLabel,
  clearLabel,
  quickDistanceLabel,
  customDistanceLabel,
  distanceRangeHint,
  renderIcon,
  filtersMenuRef,
  setOpenFilter,
  setSelectedSort,
  setSelectedDistance,
  setCustomDistanceKm,
  applyCustomDistance,
  toggleFeature,
  setOpenNowOnly,
  resetFilters,
}: {
  locale: 'tr' | 'en';
  filtersLabel: string;
  sortLabel: string;
  sortOptions: Record<SortOptionKey, string>;
  selectedSort: SortOptionKey;
  distanceLabel: string;
  distances: string[];
  selectedDistance: string;
  customDistanceKm: number | null;
  numericDistanceValue: number;
  selectedFeatures: string[];
  featureFilters: string[];
  openFilter: 'distance' | 'sort' | null;
  openNowOnly: boolean;
  hasActiveFilters: boolean;
  openNowLabel: string;
  moreLabel: string;
  clearLabel: string;
  quickDistanceLabel: string;
  customDistanceLabel: string;
  distanceRangeHint: string;
  renderIcon: (name: 'spark' | 'chevron' | 'pin' | 'calendar' | 'accessibility' | 'plus' | 'refresh') => ReactNode;
  filtersMenuRef: RefObject<HTMLDivElement>;
  setOpenFilter: (value: 'distance' | 'sort' | null | ((current: 'distance' | 'sort' | null) => 'distance' | 'sort' | null)) => void;
  setSelectedSort: (value: SortOptionKey) => void;
  setSelectedDistance: (value: string) => void;
  setCustomDistanceKm: (value: number | null) => void;
  applyCustomDistance: (value: number) => void;
  toggleFeature: (value: string) => void;
  setOpenNowOnly: (value: boolean | ((current: boolean) => boolean)) => void;
  resetFilters: () => void;
}) {
  return (
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
            <span className="toolbar-pill__icon">{renderIcon('spark')}</span>
            <span className="toolbar-pill__label">{sortOptions[selectedSort]}</span>
            <span className="toolbar-pill__chevron">{renderIcon('chevron')}</span>
          </button>

          {openFilter === 'sort' ? (
            <div className="filters-dropdown__menu" role="menu" aria-label={sortLabel}>
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
            <span className="toolbar-pill__icon">{renderIcon('pin')}</span>
            <span className="toolbar-pill__label">{distanceLabel}</span>
            <span className="toolbar-pill__chevron">{renderIcon('chevron')}</span>
          </button>

          {openFilter === 'distance' ? (
            <div className="filters-dropdown__menu" role="menu" aria-label={filtersLabel}>
              <div className="filters-dropdown__presets">
                <div className="filters-dropdown__section-title">{quickDistanceLabel}</div>
                <div className="filters-dropdown__preset-list">
                  {distances.map((distance) => (
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

        {featureFilters.map((feature, index) => (
          <button
            key={feature}
            type="button"
            className={`toolbar-pill${selectedFeatures.includes(feature) ? ' active' : ''}`}
            onClick={() => toggleFeature(feature)}
          >
            <span className="toolbar-pill__icon">{renderIcon(index === 0 ? 'calendar' : 'accessibility')}</span>
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
          <span className="toolbar-pill__icon">{renderIcon('plus')}</span>
          <span className="toolbar-pill__label">{moreLabel}</span>
        </button>

        {hasActiveFilters ? (
          <button className="filters-reset filters-reset--inline" type="button" onClick={resetFilters}>
            {renderIcon('refresh')}
            {clearLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
}
