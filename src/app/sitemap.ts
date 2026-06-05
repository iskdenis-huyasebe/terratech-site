import { MetadataRoute } from 'next';
import { brands, allProducts } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.terradstr.com';
  const locales = ['ru', 'en'];

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contacts', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const staticEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${base}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  const brandEntries = locales.flatMap((locale) =>
    brands.map((b) => ({
      url: `${base}/${locale}/products/${b.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  const productEntries = locales.flatMap((locale) =>
    allProducts.map((p) => ({
      url: `${base}/${locale}/products/${p.brand.id}/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...brandEntries, ...productEntries];
}
