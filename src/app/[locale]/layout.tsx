import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/request';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL('https://www.terradstr.com'),
    title: { default: t('home_title'), template: '%s | Terratech' },
    description: t('home_desc'),
    keywords: [
      'Rittal Казахстан', 'Rittal Алматы', 'Rittal поставка',
      'Legrand Казахстан', 'Legrand Алматы', 'Legrand поставка СНГ',
      'Phoenix Contact Казахстан', 'Phoenix Contact СНГ',
      'ZPAS Казахстан', 'шкафы управления Казахстан',
      'промышленное оборудование Казахстан', 'промышленное оборудование Алматы',
      'шкафы автоматики', 'электрощиты Казахстан', 'электрощиты Алматы',
      'IT инфраструктура Казахстан', 'серверные стойки Казахстан',
      'поставка электрооборудования Казахстан', 'поставка электрооборудования СНГ',
      'Terratech', 'Terratech Казахстан',
    ],
    authors: [{ name: 'Terratech' }],
    creator: 'Terratech',
    openGraph: {
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: 'https://www.terradstr.com',
      siteName: 'Terratech',
      title: t('home_title'),
      description: t('home_desc'),
    },
    twitter: { card: 'summary_large_image', title: t('home_title'), description: t('home_desc') },
    alternates: {
      canonical: `https://www.terradstr.com/${locale}`,
      languages: { 'ru': 'https://www.terradstr.com/ru', 'en': 'https://www.terradstr.com/en' }
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as 'ru' | 'en')) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E8500A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Terratech",
              "url": "https://www.terradstr.com",
              "email": "dkislenko@terradstr.com",
              "description": "Поставщик профессионального оборудования для IT-инфраструктуры и промышленной автоматизации",
              "foundingDate": "2018",
              "areaServed": ["KZ", "UZ", "GE", "AZ", "AM", "LT", "ES"],
              "address": [
                { "@type": "PostalAddress", "streetAddress": "Airiu 10C", "addressLocality": "Vilnius", "addressCountry": "LT" },
                { "@type": "PostalAddress", "streetAddress": "Ermita 22, 5-10", "addressLocality": "Gandia", "addressCountry": "ES" }
              ],
              "contactPoint": [
                { "@type": "ContactPoint", "telephone": "+37065288897", "contactType": "sales", "areaServed": "LT" },
                { "@type": "ContactPoint", "telephone": "+34641005590", "contactType": "sales", "areaServed": "ES" },
                { "@type": "ContactPoint", "telephone": "+77775755748", "contactType": "sales", "areaServed": "KZ" }
              ],
              "sameAs": ["https://www.linkedin.com/company/terratech"]
            })
          }}
        />
      </head>
      <body className="font-manrope antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
