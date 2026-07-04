'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import type { HomeContent, Locale } from '@/locales/types';

type Category = HomeContent['categories'][number];

function CategoryGlyph({ categoryName }: { categoryName: string }) {
  const key = categoryName.toLowerCase();
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const;

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

export function CategoryCarousel({
  categories,
  selectedCategoryName,
  title,
  locale,
  renderChevronIcon,
  onSelectCategory,
}: {
  categories: Category[];
  selectedCategoryName: string;
  title: string;
  locale: Locale;
  renderChevronIcon: () => ReactNode;
  onSelectCategory: (category: Category) => void;
}) {
  const categoryCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCategories = (direction: 'prev' | 'next') => {
    categoryCarouselRef.current?.scrollBy({
      left: direction === 'next' ? 520 : -520,
      behavior: 'smooth',
    });
  };

  return (
    <section className="category-showcase" aria-label={title}>
      <div className="category-showcase__head">
        <h2>{title}</h2>
      </div>

      <div className="category-rail">
        <button
          className="category-rail__arrow category-rail__arrow--prev"
          type="button"
          aria-label={locale === 'tr' ? 'Önceki kategoriler' : 'Previous categories'}
          onClick={() => scrollCategories('prev')}
        >
          {renderChevronIcon()}
        </button>

        <div className="category-grid" ref={categoryCarouselRef}>
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`category-tile${selectedCategoryName === category.name ? ' active' : ''}`}
              onClick={() => onSelectCategory(category)}
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
          aria-label={locale === 'tr' ? 'Sonraki kategoriler' : 'Next categories'}
          onClick={() => scrollCategories('next')}
        >
          {renderChevronIcon()}
        </button>
      </div>
    </section>
  );
}
