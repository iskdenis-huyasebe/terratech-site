import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1E35] to-[#071020]"></div>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E8500A] rounded-full opacity-[0.06] blur-[120px]"></div>
      </div>

      <div className="container-main relative z-10 pt-36 pb-24">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
            {locale === 'ru' ? (
              <>Профессиональное<br />
              <span className="text-[#E8500A]">оборудование</span><br />
              для IT-инфраструктуры</>
            ) : (
              <>Professional<br />
              <span className="text-[#E8500A]">Equipment</span><br />
              for IT Infrastructure</>
            )}
          </h1>

          <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href={`/${locale}/contacts`} className="btn-primary text-base">
              {t('cta_primary')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/products`} className="btn-secondary text-base border-white/30 text-white hover:bg-white hover:text-[#0A1628]">
              {t('cta_secondary')}
            </Link>
          </div>

          <div className="flex flex-wrap gap-10">
            {[
              { value: t('stat1_value'), label: t('stat1_label') },
              { value: t('stat2_value'), label: t('stat2_label') },
              { value: t('stat3_value'), label: t('stat3_label') },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl text-white">{stat.value}</span>
                <span className="text-white/45 text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-6">
            {locale === 'ru' ? 'Официальный поставщик' : 'Authorized Supplier'}
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS', 'Weiss', 'Hitec'].map((brand) => (
              <span key={brand} className="text-white/25 font-semibold text-sm tracking-wide hover:text-white/60 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
