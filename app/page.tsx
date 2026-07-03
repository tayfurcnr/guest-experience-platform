import { Suspense } from 'react';
import { HomePageClient } from './home-page-client';
import { normalizeLocale } from '@/lib/i18n';

export default function Page({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const locale = normalizeLocale(searchParams?.lang);

  return (
    <Suspense fallback={null}>
      <HomePageClient locale={locale} />
    </Suspense>
  );
}
