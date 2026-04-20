'use client';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const brands = [
  { name: 'Rittal', country: 'Германия', countryEn: 'Germany', color: '#E8500A', emoji: '🏭', desc: 'Шкафы, стойки, климатизация для ЦОД', descEn: 'Cabinets, racks, data center cooling' },
  { name: 'Legrand', country: 'Франция', countryEn: 'France', color: '#1E40AF', emoji: '⚡', desc: 'Электрика, кабельные лотки, автоматы', descEn: 'Electrical, cable trays, circuit breakers' },
  { name: 'Phoenix Contact', country: 'Германия', countryEn: 'Germany', color: '#B91C1C', emoji: '🔌', desc: 'Клеммы, реле, блоки питания', descEn: 'Terminal blocks, relays, power supplies' },
  { name: 'ZPAS', country: 'Польша', countryEn: 'Poland', color: '#065F46', emoji: '🗄️', desc: 'Промышленные шкафы и корпусы', descEn: 'Industrial enclosures and cabinets' },
  { name: 'Weiss', country: 'Германия', countryEn: 'Germany', color: '#4338CA', emoji: '🖥️', desc: 'Фальшполы для дата-центров', descEn: 'Raised floors for data centers' },
  { name: 'Hitec', country: 'Израиль', countryEn: 'Israel', color: '#0369A1', emoji: '🔋', desc: 'Источники бесперебойного питания', descEn: 'Uninterruptible power supplies' },
];

export default function BrandsCarousel() {
  const locale = useLocale();
  const isRu = locale === 'ru';
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-sm bg-[#F7F6F3] border-y border-[#E2DDD6]">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-2">
              {isRu ? 'Официальный поставщик' : 'Authorized Supplier'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[#0A1628]">
              {isRu ? 'Бренды в наличии' : 'Brands We Supply'}
            </h2>
          </div>
          <Link href={`/${locale}/contacts`} className="btn-primary text-sm py-2.5 px-5 self-start">
            {isRu ? 'Запросить прайс-лист' : 'Request Price List'}
          </Link>
        </div>

        {/* Brand tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {brands.map((brand, i) => (
            <button
              key={brand.name}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: active === i ? brand.color : 'white',
                color: active === i ? 'white' : '#0A1628',
                border: `1.5px solid ${active === i ? brand.color : '#E2DDD6'}`,
              }}
            >
              {brand.emoji} {brand.name}
            </button>
          ))}
        </div>

        {/* Active brand card */}
        <div
          className="rounded-2xl p-8 md:p-10 transition-all duration-300"
          style={{ background: `${brands[active].color}10`, border: `1.5px solid ${brands[active].color}30` }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${brands[active].color}20` }}
              >
                {brands[active].emoji}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-2xl text-[#0A1628]">{brands[active].name}</h3>
                  <span className="text-xs text-[#0A1628]/40 font-medium">
                    {isRu ? brands[active].country : brands[active].countryEn}
                  </span>
                </div>
                <p className="text-[#0A1628]/65 text-base">
                  {isRu ? brands[active].desc : brands[active].descEn}
                </p>
              </div>
            </div>
            <Link
              href={`/${locale}/contacts`}
              className="btn-primary whitespace-nowrap self-start md:self-center"
              style={{ background: brands[active].color }}
            >
              {isRu ? 'Запросить КП' : 'Get Quote'}
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {brands.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={{ background: active === i ? brands[active].color : '#D1C9BD' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
