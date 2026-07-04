export function HomeIcon({
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
