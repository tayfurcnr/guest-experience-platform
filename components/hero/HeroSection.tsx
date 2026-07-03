function Icon({ name }: { name: 'search' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

  switch (name) {
    case 'search':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.8" {...common} />
          <path d="m16.4 16.4 4.1 4.1" {...common} />
        </svg>
      );
  }
}

type HeroSectionProps = {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSection({
  title,
  subtitle,
  searchPlaceholder,
  imageSrc = 'https://museumofwander.com/wp-content/uploads/2023/05/DSC00693.jpg',
  imageAlt = 'Istanbul cafe',
}: HeroSectionProps) {
  return (
    <section className="hero">
      <img className="hero__image" src={imageSrc} alt={imageAlt} />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__copy">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <label className="search-bar">
          <Icon name="search" />
          <input placeholder={searchPlaceholder} />
        </label>
      </div>
    </section>
  );
}
