import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1E35] to-[#071020]"></div>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        ></div>
        {/* Accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E8500A] rounded-full opacity-[0.06] blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-[0.04] blur-[100px]"></div>
      </div>

      <div className="container-main relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-8 animate-fade-up opacity-0">
            <div className="w-1.5 h-1.5 bg-[#E8500A] rounded-full"></div>
            <span className="text-white/70 text-xs font-medium tracking-wide uppercase">{t('badge')}</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 animate-fade-up opacity-0 delay-100">
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

          {/* Subtitle */}
          <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up opacity-0 delay-200">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up opacity-0 delay-300">
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

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-fade-up opacity-0 delay-400">
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

        {/* Brand logos strip */}
        <div className="mt-20 pt-8 border-t border-white/10 animate-fade-up opacity-0 delay-500">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-6">
            {locale === 'ru' ? 'Официальный поставщик' : 'Authorized Supplier'}
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS', 'Weiss', 'Hitec'].map((brand) => (
              <span key={brand} className="text-white/25 font-semibold text-sm tracking-wide hover:text-white/60 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-500">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20"></div>
      </div>
    </section>
  );
}
