import { Suspense } from 'react';
import { DiscoverPageClient } from '../discover-page-client';
import { normalizeLocale } from '@/lib/i18n';

export default function DiscoverPage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = normalizeLocale(searchParams?.lang);

  return (
    <Suspense fallback={null}>
      <DiscoverPageClient locale={locale} />
    </Suspense>
  );
}
