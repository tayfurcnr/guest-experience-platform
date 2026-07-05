import type { CSSProperties } from 'react';
import { useState } from 'react';
import type { DiscoverItem } from '@/locales/types';

function Icon({ name }: { name: 'heart' | 'star' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

  switch (name) {
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 8.3c0 4.9-8.5 11-8.5 11S3.5 13.2 3.5 8.3A4.8 4.8 0 0 1 12 5a4.8 4.8 0 0 1 8.5 3.3Z" {...common} />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 4 2.7 5.4 6 .9-4.3 4.1 1 6-5.4-2.9-5.4 2.9 1-6L3.3 10.3l6-.9L12 4Z" {...common} />
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

type BusinessCardProps = {
  item: DiscoverItem;
  closedLabel: string;
  favoriteLabel?: string;
  initialIsFavorite?: boolean;
  favoriteDisabled?: boolean;
  onFavoriteClick?: () => void;
  onFavoriteToggle?: (nextValue: boolean) => void;
};

export function BusinessCard({
  item,
  closedLabel,
  favoriteLabel,
  initialIsFavorite = false,
  favoriteDisabled = false,
  onFavoriteClick,
  onFavoriteToggle,
}: BusinessCardProps) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  return (
    <article className={`spot-card${item.isOpen === false ? ' spot-card--closed' : ''}`}>
      <div className="spot-card__media" style={{ '--card-image': `url(${item.image})` } as CSSProperties}>
        <span className="spot-card__badge">{item.distance}</span>
        {item.isOpen === false ? <span className="spot-card__state">{closedLabel}</span> : null}
        <button
          className={`spot-card__favorite${isFavorite ? ' is-active' : ''}${favoriteDisabled ? ' is-disabled' : ''}`}
          type="button"
          aria-label={favoriteLabel ?? `${item.name} favorite`}
          aria-pressed={isFavorite}
          onClick={() => {
            if (favoriteDisabled) {
              onFavoriteClick?.();
              return;
            }

            const nextValue = !isFavorite;
            setIsFavorite(nextValue);
            onFavoriteToggle?.(nextValue);
          }}
        >
          <Icon name="heart" />
        </button>
        <RatingBadge rating={item.rating} />
      </div>
      <div className="spot-card__body">
        <h3>{item.name}</h3>
        <p>{item.cuisine}</p>
      </div>
    </article>
  );
}
