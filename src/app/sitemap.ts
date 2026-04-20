import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.terradstr.com';
  const locales = ['ru', 'en'];
  const pages = ['', '/products', '/projects', '/contacts'];

  const entries = locales.flatMap(locale =>
    pages.map(page => ({
      url: `${base}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );

  return entries;
}
