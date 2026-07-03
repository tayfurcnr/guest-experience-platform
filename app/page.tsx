'use client';

import type { CSSProperties } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

type Item = {
  name: string;
  cuisine: string;
  time: string;
  distance: string;
  rating: string;
  image: string;
  badge?: string;
};

type SidebarCategory = {
  name: string;
  count: number;
};

const topNav = ['Keşfet', 'Kampanyalar', 'Favorilerim', 'Rezervasyon'] as const;

const categories: SidebarCategory[] = [
  { name: 'Tümü', count: 128 },
  { name: 'Burger', count: 32 },
  { name: 'Pizza', count: 28 },
  { name: 'Kebap', count: 18 },
  { name: 'Türk Mutfağı', count: 22 },
  { name: 'Kahve', count: 16 },
  { name: 'Tatlı', count: 12 },
  { name: 'Dünya Mutfağı', count: 20 },
  { name: 'Bar & Cafe', count: 14 },
];

const featureFilters = ['Kampanyası Var', 'QR Menü', 'Rezervasyon Yapılabilir', 'Açık Şubeler', 'Çok Dilli Menü', 'Engelli Dostu'];
const distances = ['500 m', '1 km', '3 km', '5 km', '10 km+'];

const popularItems: Item[] = [
  {
    name: 'Fiko Coffee Co.',
    cuisine: 'Kahve, Tatlı, Atıştırmalık',
    time: '20-30 dk',
    distance: '0.3 km',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    badge: 'Açık',
  },
  {
    name: 'Pizza Locale',
    cuisine: 'Pizza, İtalyan',
    time: '25-35 dk',
    distance: '0.5 km',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ocakbaşı Köz',
    cuisine: 'Türk Mutfağı, Kebap',
    time: '30-40 dk',
    distance: '1.2 km',
    rating: '4.6',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Burger House',
    cuisine: 'Burger, Amerikan',
    time: '20-30 dk',
    distance: '1.3 km',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sushi Mori',
    cuisine: 'Sushi, Asya Mutfağı',
    time: '30-40 dk',
    distance: '1.8 km',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
  },
];

const nearbyItems: Item[] = [
  {
    name: 'Meyhane 1930',
    cuisine: 'Türk Mutfağı',
    time: '20-30 dk',
    distance: '0.2 km',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
    badge: '0.2 km',
  },
  {
    name: 'Vegan Garden',
    cuisine: 'Vegan, Sağlıklı',
    time: '25-35 dk',
    distance: '0.4 km',
    rating: '4.6',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    badge: '0.4 km',
  },
  {
    name: 'Coffee Lab',
    cuisine: 'Kahve, Tatlı',
    time: '15-25 dk',
    distance: '0.6 km',
    rating: '4.5',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    badge: '0.5 km',
  },
  {
    name: 'Fit & Fresh',
    cuisine: 'Sağlıklı, Salata',
    time: '20-30 dk',
    distance: '0.7 km',
    rating: '4.6',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    badge: '0.7 km',
  },
  {
    name: "Bi' Makarna",
    cuisine: 'Makarna, İtalyan',
    time: '25-35 dk',
    distance: '0.9 km',
    rating: '4.4',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
    badge: '0.9 km',
  },
];

function Icon({
  name,
}: {
  name: 'grid' | 'flame' | 'pin' | 'heart' | 'bell' | 'user' | 'search' | 'refresh' | 'sort' | 'filter' | 'star' | 'clock' | 'menu' | 'chevron';
}) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

  switch (name) {
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="6" height="6" rx="1.5" {...common} />
          <rect x="14" y="4" width="6" height="6" rx="1.5" {...common} />
          <rect x="4" y="14" width="6" height="6" rx="1.5" {...common} />
          <rect x="14" y="14" width="6" height="6" rx="1.5" {...common} />
        </svg>
      );
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
    case 'user':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="3.4" {...common} />
          <path d="M5.5 19a6.5 6.5 0 0 1 13 0" {...common} />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.8" {...common} />
          <path d="m16.4 16.4 4.1 4.1" {...common} />
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
    case 'sort':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14" {...common} />
          <path d="M5 8l3-3 3 3" {...common} />
          <path d="M16 19V5" {...common} />
          <path d="M13 16l3 3 3-3" {...common} />
        </svg>
      );
    case 'filter':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16" {...common} />
          <path d="M7 12h10" {...common} />
          <path d="M10 18h4" {...common} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 4 2.7 5.4 6 .9-4.3 4.1 1 6-5.4-2.9-5.4 2.9 1-6L3.3 10.3l6-.9L12 4Z" {...common} />
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" {...common} />
          <path d="M12 8v4l3 2" {...common} />
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

function RatingBadge({ rating }: { rating: string }) {
  return (
    <span className="rating-badge">
      <Icon name="star" />
      {rating}
    </span>
  );
}

function Card({ item, compact = false }: { item: Item; compact?: boolean }) {
  return (
    <article className={`spot-card${compact ? ' compact' : ''}`}>
      <div className="spot-card__media" style={{ '--card-image': `url(${item.image})` } as CSSProperties}>
        {item.badge ? <span className="spot-card__badge">{item.badge}</span> : null}
        <button className="spot-card__favorite" type="button" aria-label={`${item.name} favorilere ekle`}>
          <Icon name="heart" />
        </button>
        <RatingBadge rating={item.rating} />
      </div>
      <div className="spot-card__body">
        <h3>{item.name}</h3>
        <p>{item.cuisine}</p>
        <div className="spot-card__meta">
          <span>
            <Icon name="clock" />
            {item.time}
          </span>
          <span>
            <Icon name="pin" />
            {item.distance}
          </span>
        </div>
      </div>
    </article>
  );
}

function SectionHeader({
  title,
  icon,
}: {
  title: string;
  icon: keyof typeof iconMap;
}) {
  return (
    <div className="section-head">
      <h2>
        <span className="section-head__icon">{iconMap[icon]}</span>
        {title}
      </h2>
      <a href="#top">Tümünü Gör <Icon name="chevron" /></a>
    </div>
  );
}

const iconMap = {
  flame: <Icon name="flame" />,
  pin: <Icon name="pin" />,
} as const;

export default function HomePage() {
  const visiblePopular = useMemo(() => popularItems, []);
  const visibleNearby = useMemo(() => nearbyItems, []);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedFeature, setSelectedFeature] = useState(featureFilters[0]);
  const [selectedDistance, setSelectedDistance] = useState(distances[3]);
  const [openFilter, setOpenFilter] = useState<'category' | 'feature' | 'distance' | null>(null);
  const filtersMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!filtersMenuRef.current?.contains(event.target as Node)) {
        setOpenFilter(null);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <main className="shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Anlık Menü">
          <span className="brand-mark">
            <Icon name="menu" />
          </span>
          <span className="brand-text">
            <strong>Anlık</strong> <em>Menü</em>
          </span>
        </a>

        <nav className="top-nav" aria-label="Ana gezinme">
          {topNav.map((item, index) => (
            <a key={item} href="#top" className={index === 0 ? 'active' : ''}>
              {item}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button className="location-pill" type="button">
            <span className="location-pill__icon">
              <Icon name="pin" />
            </span>
            <span className="location-pill__text">Kadıköy, İstanbul</span>
            <span className="location-pill__chev">
              <Icon name="chevron" />
            </span>
          </button>

          <button className="top-icon" type="button" aria-label="Favoriler">
            <Icon name="heart" />
          </button>
          <button className="top-icon" type="button" aria-label="Bildirimler">
            <Icon name="bell" />
          </button>
          <button className="avatar" type="button" aria-label="Kullanıcı profili">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
              alt=""
            />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero__copy">
          <h1>Şehrindeki en iyi mekanları keşfet</h1>
          <p>Lezzetli anlar seni bekliyor.</p>
          <label className="search-bar">
            <Icon name="search" />
            <input placeholder="Restoran, mutfak veya mekan ara..." />
          </label>
        </div>
      </section>

      <section className="filters-row" aria-label="Filtreler">
        <div className="filters-strip" ref={filtersMenuRef}>
          <div className="filters-dropdown">
            <button
              className="select-field filters-category-trigger"
              type="button"
              aria-expanded={openFilter === 'category'}
              onClick={() => setOpenFilter((current) => (current === 'category' ? null : 'category'))}
            >
              <span className="select-field__label">Kategoriler</span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'category' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label="Kategoriler">
                {categories.map((category) => (
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
              <span className="select-field__label">Özellikler</span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'feature' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label="Özellikler">
                {featureFilters.map((feature) => (
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
              <span className="select-field__label">Mesafe</span>
              <span className="select-field__chevron">
                <Icon name="chevron" />
              </span>
            </button>

            {openFilter === 'distance' ? (
              <div className="filters-dropdown__menu" role="menu" aria-label="Mesafe">
                {distances.map((distance) => (
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
            <span className="select-field__label">Sıralama: En Popüler</span>
            <span className="select-field__chevron">
              <Icon name="chevron" />
            </span>
          </button>

          <button className="filters-reset" type="button">
            <Icon name="refresh" />
            Filtreleri Temizle
          </button>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Popüler İşletmeler" icon="flame" />
        <div className="section-row-wrap">
          <div className="card-row">
            {visiblePopular.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
          <button className="row-arrow" type="button" aria-label="Sağa kaydır">
            <Icon name="chevron" />
          </button>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="Yakındaki İşletmeler" icon="pin" />
        <div className="section-row-wrap">
          <div className="card-row">
            {visibleNearby.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
          <button className="row-arrow" type="button" aria-label="Sağa kaydır">
            <Icon name="chevron" />
          </button>
        </div>
      </section>
    </main>
  );
}
