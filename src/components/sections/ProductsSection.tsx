import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const products = [
  {
    key: 'cabinets',
    icon: '🗄️',
    brands: 'Rittal · ZPAS',
    color: 'from-blue-50 to-slate-50',
    accent: '#1E40AF',
  },
  {
    key: 'components',
    icon: '⚡',
    brands: 'Phoenix Contact · Legrand',
    color: 'from-orange-50 to-amber-50',
    accent: '#E8500A',
  },
  {
    key: 'datacenter',
    icon: '🖥️',
    brands: 'Weiss · Rittal',
    color: 'from-emerald-50 to-teal-50',
    accent: '#065F46',
  },
  {
    key: 'ups',
    icon: '🔋',
    brands: 'Hitec',
    color: 'from-purple-50 to-violet-50',
    accent: '#5B21B6',
  },
];

export default function ProductsSection() {
  const t = useTranslations('products');
  const locale = useLocale();

  return (
    <section className="section bg-[#F7F6F3]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
              {locale === 'ru' ? 'Каталог' : 'Catalog'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0A1628]">
              {t('title')}
            </h2>
          </div>
          <p className="text-[#0A1628]/55 text-base max-w-sm leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <div
              key={product.key}
              className={`card-hover rounded-2xl bg-gradient-to-br ${product.color} border border-[#E2DDD6] p-8 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{product.icon}</span>
                <span className="text-xs font-medium text-[#0A1628]/40 bg-white/60 px-3 py-1 rounded-full">
                  {product.brands}
                </span>
              </div>
              <h3 className="font-display text-2xl text-[#0A1628] mb-3">
                {t(`${product.key}_title` as any)}
              </h3>
              <p className="text-[#0A1628]/60 text-sm leading-relaxed mb-6">
                {t(`${product.key}_desc` as any)}
              </p>
              <Link
                href={`/${locale}/contacts`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: product.accent }}
              >
                {locale === 'ru' ? 'Запросить предложение' : 'Request Quote'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
