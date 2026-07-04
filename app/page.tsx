import { redirect } from 'next/navigation';

export default function Page({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const params = new URLSearchParams();

  if (searchParams?.lang) {
    params.set('lang', searchParams.lang);
  }

  redirect(params.toString() ? `/discover?${params.toString()}` : '/discover');
}
