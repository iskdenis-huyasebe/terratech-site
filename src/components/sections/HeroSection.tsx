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

      <div className="container-main relative z-10" style={{paddingTop: '120px', paddingBottom: '80px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] mb-8">
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

            <p className="text-white/55 text-lg leading-relaxed mb-10">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href={`/${locale}/contacts`} className="btn-primary text-base">
                {t('cta_primary')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={`/${locale}/products`}
                className="text-base font-semibold inline-flex items-center gap-2 transition-all"
                style={{
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: '4px',
                }}
              >
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

          {/* Right — industrial photo */}
          <div className="hidden lg:block relative h-[580px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80"
              alt="Industrial automation cabinets"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-3">
                {['Rittal', 'Legrand', 'Phoenix Contact', 'ZPAS', 'Weiss', 'Hitec'].map((brand) => (
                  <span key={brand} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/20">
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
