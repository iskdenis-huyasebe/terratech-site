import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const markets = [
  { name: 'Казахстан', nameEn: 'Kazakhstan', flag: '🇰🇿', desc: 'Алматы, Астана', active: true },
  { name: 'Узбекистан', nameEn: 'Uzbekistan', flag: '🇺🇿', desc: 'Ташкент', active: true },
  { name: 'Грузия', nameEn: 'Georgia', flag: '🇬🇪', desc: 'Тбилиси', active: true },
  { name: 'Азербайджан', nameEn: 'Azerbaijan', flag: '🇦🇿', desc: 'Баку', active: true },
  { name: 'Армения', nameEn: 'Armenia', flag: '🇦🇲', desc: 'Ереван', active: true },
  { name: 'Литва', nameEn: 'Lithuania', flag: '🇱🇹', desc: 'Вильнюс', active: true },
];

export default function GeographySection() {
  const t = useTranslations('geography');
  const locale = useLocale();

  return (
    <section className="section bg-[#0A1628] relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8500A] opacity-[0.04] rounded-full blur-[150px]"></div>

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
              {locale === 'ru' ? 'Поставки' : 'Deliveries'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              {t('title')}
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-xs">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {markets.map((market) => (
            <div key={market.name} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/8 hover:border-[#E8500A]/30 transition-all">
              <span className="text-3xl mb-3 block">{market.flag}</span>
              <p className="text-white font-semibold text-sm mb-1">
                {locale === 'ru' ? market.name : market.nameEn}
              </p>
              <p className="text-white/35 text-xs">{market.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
              {locale === 'ru' ? 'Нужна поставка в вашу страну?' : 'Need delivery to your country?'}
            </h3>
            <p className="text-white/45 text-sm">
              {locale === 'ru'
                ? 'Организуем логистику и таможенное оформление под ключ'
                : 'We handle logistics and customs clearance end-to-end'}
            </p>
          </div>
          <Link href={`/${locale}/contacts`} className="btn-primary whitespace-nowrap">
            {locale === 'ru' ? 'Обсудить поставку' : 'Discuss Delivery'}
          </Link>
        </div>
      </div>
    </section>
  );
}
