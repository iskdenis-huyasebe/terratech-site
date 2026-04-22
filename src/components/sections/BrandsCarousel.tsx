'use client';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const brands = [
  {
    name: 'Rittal',
    country: 'Германия', countryEn: 'Germany',
    color: '#E8500A',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rittal_logo.svg/320px-Rittal_logo.svg.png',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    desc: 'Шкафы автоматики, серверные стойки, системы климатизации для промышленных объектов и ЦОД',
    descEn: 'Automation cabinets, server racks, climate control systems for industrial facilities and data centers',
    products: ['Шкафы TS8', 'Стойки TS IT', 'Климатизация', 'VX25'],
    productsEn: ['TS8 Enclosures', 'TS IT Racks', 'Climate Control', 'VX25'],
    tag: 'Лидер рынка',
    tagEn: 'Market Leader',
  },
  {
    name: 'Legrand',
    country: 'Франция', countryEn: 'France',
    color: '#1E40AF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Legrand_logo.svg/320px-Legrand_logo.svg.png',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    desc: 'Электроустановочные изделия, кабельные лотки, автоматические выключатели и компоненты для щитов',
    descEn: 'Wiring devices, cable trays, circuit breakers and switchgear components',
    products: ['Кабельные лотки', 'Автоматы', 'Розетки 19"', 'ИБП'],
    productsEn: ['Cable Trays', 'Circuit Breakers', '19" Outlets', 'UPS'],
    tag: 'Электрика',
    tagEn: 'Electrical',
  },
  {
    name: 'Phoenix Contact',
    country: 'Германия', countryEn: 'Germany',
    color: '#B91C1C',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Phoenix_Contact_Logo.svg/320px-Phoenix_Contact_Logo.svg.png',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    desc: 'Клеммные блоки, промышленные реле, блоки питания и коннекторы для промышленной автоматизации',
    descEn: 'Terminal blocks, industrial relays, power supplies and connectors for industrial automation',
    products: ['Клеммы', 'Реле', 'Блоки питания', 'Контроллеры'],
    productsEn: ['Terminal Blocks', 'Relays', 'Power Supplies', 'Controllers'],
    tag: 'Автоматизация',
    tagEn: 'Automation',
  },
  {
    name: 'ZPAS',
    country: 'Польша', countryEn: 'Poland',
    color: '#065F46',
    logo: 'https://www.zpas.pl/wp-content/uploads/2021/03/zpas-logo.png',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    desc: 'Промышленные шкафы, корпусы и стойки для систем автоматизации и электроснабжения',
    descEn: 'Industrial enclosures, cabinets and racks for automation and power supply systems',
    products: ['Шкафы WZ', 'Напольные стойки', 'Настенные боксы', 'Аксессуары'],
    productsEn: ['WZ Cabinets', 'Floor Racks', 'Wall Boxes', 'Accessories'],
    tag: 'Корпуса',
    tagEn: 'Enclosures',
  },
  {
    name: 'Weiss',
    country: 'Германия', countryEn: 'Germany',
    color: '#4338CA',
    logo: 'https://www.weiss-dbs.com/wp-content/uploads/2019/10/weiss-logo.png',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    desc: 'Фальшполы и комплексные инфраструктурные решения для дата-центров и серверных помещений',
    descEn: 'Raised floors and comprehensive infrastructure solutions for data centers and server rooms',
    products: ['Фальшполы', 'Подпольные каналы', 'Плитка', 'Опоры'],
    productsEn: ['Raised Floors', 'Underfloor Channels', 'Tiles', 'Pedestals'],
    tag: 'ЦОД',
    tagEn: 'Data Centers',
  },
  {
    name: 'Hitec',
    country: 'Израиль', countryEn: 'Israel',
    color: '#0369A1',
    logo: 'https://hitec-ups.com/wp-content/uploads/2020/01/hitec-logo.png',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    desc: 'Источники бесперебойного питания онлайн-типа для критически важных объектов инфраструктуры',
    descEn: 'Online UPS systems for mission-critical infrastructure facilities',
    products: ['ИБП онлайн', 'Модульные ИБП', 'Байпасы', 'Мониторинг'],
    productsEn: ['Online UPS', 'Modular UPS', 'Bypass', 'Monitoring'],
    tag: 'ИБП',
    tagEn: 'UPS',
  },
];

export default function BrandsCarousel() {
  const locale = useLocale();
  const isRu = locale === 'ru';
  const [active, setActive] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % brands.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const brand = brands[active];

  return (
    <section className="section-sm bg-[#F7F6F3] border-y border-[#E2DDD6]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-10">
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
          {brands.map((b, i) => (
            <button
              key={b.name}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              style={{
                background: active === i ? b.color : 'white',
                color: active === i ? 'white' : '#0A1628',
                border: `1.5px solid ${active === i ? b.color : '#E2DDD6'}`,
              }}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Active brand card */}
        <div
          key={active}
          className="rounded-2xl overflow-hidden border transition-all duration-300"
          style={{ borderColor: `${brand.color}30` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: info */}
            <div
              className="p-8 md:p-10"
              style={{ background: `${brand.color}08` }}
            >
              {/* Logo */}
              <div className="h-12 mb-6 flex items-center">
                {!imgError[active] ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 object-contain object-left"
                    onError={() => setImgError(prev => ({ ...prev, [active]: true }))}
                  />
                ) : (
                  <span className="font-bold text-2xl" style={{ color: brand.color }}>
                    {brand.name}
                  </span>
                )}
              </div>

              {/* Country + tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#0A1628]/40 text-sm">
                  {isRu ? brand.country : brand.countryEn}
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: brand.color }}
                >
                  {isRu ? brand.tag : brand.tagEn}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#0A1628]/65 text-base leading-relaxed mb-6">
                {isRu ? brand.desc : brand.descEn}
              </p>

              {/* Products */}
              <div className="flex flex-wrap gap-2 mb-8">
                {(isRu ? brand.products : brand.productsEn).map(p => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-full bg-white font-medium border"
                    style={{ color: brand.color, borderColor: `${brand.color}30` }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <Link
                href={`/${locale}/contacts`}
                className="btn-primary"
                style={{ background: brand.color }}
              >
                {isRu ? 'Запросить предложение' : 'Request Quote'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative h-64 md:h-auto min-h-64 overflow-hidden">
              <img
                src={brand.image}
                alt={brand.name + ' equipment'}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${brand.color}40 0%, transparent 60%)` }}
              />
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-bold text-3xl drop-shadow-lg">{brand.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {brands.map((b, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: active === i ? '24px' : '8px',
                height: '8px',
                background: active === i ? brand.color : '#D1C9BD',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
