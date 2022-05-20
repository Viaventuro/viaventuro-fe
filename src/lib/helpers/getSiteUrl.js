import { defaultLocale } from '@/locales/index';

export default function getSiteUrl(locale) {
  let url = '';

  if (!locale) {
    locale = defaultLocale;
  }

  if (process.env.SITE_URL) {
    url = process.env.SITE_URL;
  } else if (typeof window !== 'undefined') {
    url = `${window.location.protocol}//${window.location.hostname}`;
  } else {
    url = '';
  }

  url += locale != defaultLocale ? `/${locale}/` : '/';

  return url;
}
