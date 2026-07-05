export function DiscoverIcon({
  name,
}: {
  name:
    | 'flame'
    | 'pin'
    | 'heart'
    | 'bell'
    | 'refresh'
    | 'menu'
    | 'login'
    | 'chevron'
    | 'search'
    | 'target'
    | 'shield'
    | 'close'
    | 'google'
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
    case 'login':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="12" height="16" rx="2.5" {...common} />
          <path d="M12 12h8" {...common} />
          <path d="m17 8 4 4-4 4" {...common} />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" {...common} />
          <path d="m16 16 4 4" {...common} />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7" {...common} />
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M12 2v3" {...common} />
          <path d="M12 19v3" {...common} />
          <path d="M2 12h3" {...common} />
          <path d="M19 12h3" {...common} />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 5.5 5.8v5.7c0 4 2.5 7.7 6.5 9.5 4-1.8 6.5-5.5 6.5-9.5V5.8L12 3Z" {...common} />
          <path d="m9.5 12.2 1.8 1.8 3.4-3.8" {...common} />
        </svg>
      );
    case 'close':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 6 12 12" {...common} />
          <path d="M18 6 6 18" {...common} />
        </svg>
      );
    case 'google':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2.1 3.1v2.6h3.4c2-1.8 3-4.4 3-7.5Z" fill="#4285F4" />
          <path d="M12 22c2.7 0 4.9-.9 6.5-2.3l-3.4-2.6c-.9.6-2 .9-3.1.9-2.4 0-4.4-1.6-5.2-3.7H3.3v2.7A10 10 0 0 0 12 22Z" fill="#34A853" />
          <path d="M6.8 14.3A6 6 0 0 1 6.5 12c0-.8.1-1.6.3-2.3V7H3.3A10 10 0 0 0 2.2 12c0 1.7.4 3.4 1.1 5l3.5-2.7Z" fill="#FBBC05" />
          <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5L18.6 4.6A9.8 9.8 0 0 0 12 2a10 10 0 0 0-8.7 5l3.5 2.7C7.6 7.5 9.6 5.9 12 5.9Z" fill="#EA4335" />
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
