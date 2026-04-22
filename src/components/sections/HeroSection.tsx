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
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E8500A] rounded-full opacity-[0.05] blur-[150px]"></div>
      </div>

      <div className="container-main relative z-10" style={{paddingTop: '100px', paddingBottom: '60px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl xl:text-7xl text-white leading-[1.05] mb-6">
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

            <p className="text-white/55 text-base leading-relaxed mb-8">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href={`/${locale}/contacts`} className="btn-primary text-sm">
                {t('cta_primary')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={`/${locale}/products`}
                className="text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '4px',
                }}
              >
                {t('cta_secondary')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { value: t('stat1_value'), label: t('stat1_label') },
                { value: t('stat2_value'), label: t('stat2_label') },
                { value: t('stat3_value'), label: t('stat3_label') },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-2xl md:text-3xl text-white">{stat.value}</span>
                  <span className="text-white/45 text-sm mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — data center illustration */}
          <div className="hidden lg:block relative h-[580px] rounded-2xl overflow-hidden">
            <img
              src="/datacenter-hero.svg"
              alt="Modern data center server racks with blue lighting"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to blend with dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/40 to-transparent"></div>

            {/* Top badge */}
            <div className="absolute top-5 right-5">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#E8500A]/90 backdrop-blur-sm text-white border border-[#E8500A]/30">
                {locale === 'ru' ? 'Поставка под ключ' : 'Turnkey Supply'}
              </span>
            </div>

            {/* Bottom brands */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold">
                {locale === 'ru' ? 'Партнёры' : 'Partners'}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS', 'Weiss', 'Hitec'].map((brand) => (
                  <span key={brand} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/15">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
