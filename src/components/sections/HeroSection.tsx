import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#05070E]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0B1A30] to-[#05070E]"></div>
        <div className="absolute inset-0 grid-pan opacity-100"></div>
        <div className="orb orb-a w-[620px] h-[620px] -top-32 -right-16"></div>
        <div className="orb orb-b w-[520px] h-[520px] -bottom-40 -left-28"></div>
      </div>

      <div className="container-main relative z-10" style={{ paddingTop: '110px', paddingBottom: '60px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#6FA0E0] mb-7 border border-[#3E72C7]/30 bg-[#3E72C7]/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6FA0E0] live-dot"></span>
              {isRu ? 'Промышленная инфраструктура · с 2018' : 'Industrial infrastructure · since 2018'}
            </span>

            <h1 className="font-display text-4xl md:text-5xl xl:text-[68px] text-white leading-[1.04] font-extrabold mb-7">
              {isRu ? (
                <>
                  <span className="h-line"><span>Ваш надёжный партнёр</span></span>
                  <span className="h-line h-d1"><span>по поставке</span></span>
                  <span className="h-line h-d2"><span className="grad-text">промышленного оборудования</span></span>
                </>
              ) : (
                <>
                  <span className="h-line"><span>Your reliable partner</span></span>
                  <span className="h-line h-d1"><span>for industrial</span></span>
                  <span className="h-line h-d2"><span className="grad-text">equipment supply</span></span>
                </>
              )}
            </h1>

            <p className="h-fade h-fade-1 text-white/70 text-base md:text-lg leading-relaxed mb-9 max-w-xl">
              {t('subtitle')}
            </p>

            <div className="h-fade h-fade-2 flex flex-col sm:flex-row gap-3 mb-12">
              <Link href={`/${locale}/contacts`} className="btn-primary text-sm">
                {t('cta_primary')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={`/${locale}/products`} className="btn-secondary text-sm">
                {t('cta_secondary')}
              </Link>
            </div>

            <div className="h-fade h-fade-3 flex flex-wrap gap-8 sm:gap-12">
              {[
                { value: t('stat1_value'), label: t('stat1_label') },
                { value: t('stat2_value'), label: t('stat2_label') },
                { value: t('stat3_value'), label: t('stat3_label') },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-3xl md:text-4xl text-white leading-none">{stat.value}</span>
                  <span className="w-8 h-0.5 bg-[#3E72C7] my-2.5 rounded"></span>
                  <span className="text-white/60 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — data center visual */}
          <div className="hidden lg:block relative h-[600px] rounded-[22px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 h-fade">
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3Ed1MfQuMeZ6hFbOxes5FTm4qpI/hf_20260605_080407_e4469790-9fef-4f12-a70f-8110e3fdb6e0.png"
              alt={isRu ? 'Современный дата-центр' : 'Modern data center'}
              className="w-full h-full object-cover scale-105 hero-img"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#05070E]/85 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#05070E] via-[#05070E]/40 to-transparent"></div>
            <div className="scanline absolute left-0 right-0 h-[120px]"></div>

            <div className="absolute top-5 left-5">
              <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#3E72C7] text-white shadow-lg shadow-[#3E72C7]/40">
                {isRu ? 'Поставка под ключ' : 'Turnkey supply'}
              </span>
            </div>

            <div className="absolute left-5 right-5 bottom-5 flex items-center gap-4 bg-[#080C16]/65 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3ad06a] live-dot shadow-[0_0_12px_#3ad06a]"></span>
              <div className="leading-tight">
                <p className="font-display text-sm text-white">{isRu ? 'ЦОД Tier III · Алматы' : 'Tier III Data Center · Almaty'}</p>
                <p className="text-xs text-white/55 mt-0.5">{isRu ? '48 стоек · 1.2 МВт · онлайн' : '48 racks · 1.2 MW · online'}</p>
              </div>
              <div className="eq ml-auto flex items-end gap-1 h-6">
                <i></i><i></i><i></i><i></i><i></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
