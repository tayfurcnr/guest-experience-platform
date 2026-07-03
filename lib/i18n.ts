import { en } from '@/locales/en';
import { tr } from '@/locales/tr';
import type { Locale, Messages } from '@/locales/types';

const dictionaries: Record<Locale, Messages> = {
  tr,
  en,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'tr' || value === 'en';
}

export function normalizeLocale(value: string | null | undefined): Locale {
  if (!value) {
    return 'tr';
  }

  const short = value.toLowerCase().split('-')[0];
  return isLocale(short) ? short : 'tr';
}

export function getMessages(locale: string | null | undefined): Messages {
  return dictionaries[normalizeLocale(locale)];
}

export function withLocale(path: string, locale: Locale): string {
  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}lang=${locale}`;
}
