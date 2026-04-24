import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.terradstr.com';
  const locales = ['ru', 'en', 'kz'];
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contacts', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const entries = locales.flatMap(locale =>
    pages.map(page => ({
      url: `${base}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  return entries;
}
