'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type Project = {
  id: string;
  titleRu: string;
  titleEn: string;
  category: string;
  categoryRu: string;
  categoryEn: string;
  clientRu: string;
  clientEn: string;
  country: string;
  countryRu: string;
  countryEn: string;
  flag: string;
  year: string;
  descRu: string;
  descEn: string;
  stats: { valueRu: string; valueEn: string; labelRu: string; labelEn: string }[];
  brands: string[];
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 'dc-almaty-tier3',
    titleRu: 'Модернизация ЦОД Tier III в Алматы',
    titleEn: 'Tier III Data Center Upgrade in Almaty',
    category: 'datacenter',
    categoryRu: 'Дата-центр',
    categoryEn: 'Data Center',
    clientRu: 'Крупный телеком-оператор',
    clientEn: 'Major telecom operator',
    country: 'kz',
    countryRu: 'Казахстан',
    countryEn: 'Kazakhstan',
    flag: '🇰🇿',
    year: '2024',
    descRu: 'Модернизация машинного зала дата-центра: поставка 48 серверных стоек Rittal TS IT 47U, системы in-row охлаждения LCP с холодным коридором, фальшпола Weiss под нагрузку 1500 кг/м² и комплекта PDU с SNMP-мониторингом.',
    descEn: 'Data center machine room upgrade: supply of 48 Rittal TS IT 47U server racks, LCP in-row cooling system with cold aisle containment, Weiss raised floor rated 1500 kg/m² and PDU set with SNMP monitoring.',
    stats: [
      { valueRu: '48', valueEn: '48', labelRu: 'серверных стоек', labelEn: 'server racks' },
      { valueRu: '720 м²', valueEn: '720 m²', labelRu: 'машинный зал', labelEn: 'machine room' },
      { valueRu: '1,2 МВт', valueEn: '1.2 MW', labelRu: 'IT-мощность', labelEn: 'IT load' },
      { valueRu: '90 дней', valueEn: '90 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['Rittal', 'Weiss'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
    featured: true,
  },
  {
    id: 'substation-tashkent',
    titleRu: 'Распределительная подстанция 110/10 кВ',
    titleEn: 'Distribution Substation 110/10 kV',
    category: 'power',
    categoryRu: 'Энергетика',
    categoryEn: 'Energy',
    clientRu: 'Энергораспределительная компания',
    clientEn: 'Power distribution company',
    country: 'uz',
    countryRu: 'Узбекистан',
    countryEn: 'Uzbekistan',
    flag: '🇺🇿',
    year: '2024',
    descRu: 'Комплектная поставка шкафов Rittal VX25 и ZPAS WZ для построения распределительных устройств 10 кВ. Сборка щитов с автоматами Legrand XL³ 400 А и клеммами Phoenix Contact. Полный пакет технической документации.',
    descEn: 'Complete supply of Rittal VX25 and ZPAS WZ enclosures for 10 kV switchgear assembly. Panel assembly with Legrand XL³ 400 A breakers and Phoenix Contact terminal blocks. Full technical documentation package.',
    stats: [
      { valueRu: '32', valueEn: '32', labelRu: 'шкафа', labelEn: 'enclosures' },
      { valueRu: '18', valueEn: '18', labelRu: 'секции РУ', labelEn: 'switchgear sections' },
      { valueRu: '110/10 кВ', valueEn: '110/10 kV', labelRu: 'классы напряжения', labelEn: 'voltage classes' },
      { valueRu: '60 дней', valueEn: '60 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['Rittal', 'ZPAS', 'Legrand', 'Phoenix Contact'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80',
    featured: true,
  },
  {
    id: 'factory-automation-tbilisi',
    titleRu: 'Автоматизация производственной линии',
    titleEn: 'Production Line Automation',
    category: 'automation',
    categoryRu: 'Автоматизация',
    categoryEn: 'Automation',
    clientRu: 'Завод пищевой промышленности',
    clientEn: 'Food processing plant',
    country: 'ge',
    countryRu: 'Грузия',
    countryEn: 'Georgia',
    flag: '🇬🇪',
    year: '2023',
    descRu: 'Поставка комплекта шкафов управления для модернизации производственной линии: шкафы ZPAS, клеммные блоки Phoenix Contact CLIPLINE, блоки питания QUINT POWER, промышленные реле и сигнальные колонны. Помощь в проектировании.',
    descEn: 'Supply of control cabinets for production line modernization: ZPAS enclosures, Phoenix Contact CLIPLINE terminal blocks, QUINT POWER supplies, industrial relays and signal towers. Engineering support included.',
    stats: [
      { valueRu: '14', valueEn: '14', labelRu: 'шкафов управления', labelEn: 'control cabinets' },
      { valueRu: '1200+', valueEn: '1200+', labelRu: 'клеммных зажимов', labelEn: 'terminal blocks' },
      { valueRu: '24 VDC', valueEn: '24 VDC', labelRu: 'основное питание', labelEn: 'main power' },
      { valueRu: '45 дней', valueEn: '45 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['ZPAS', 'Phoenix Contact'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80',
  },
  {
    id: 'datacenter-baku',
    titleRu: 'Серверная комната корпоративного заказчика',
    titleEn: 'Enterprise Server Room',
    category: 'datacenter',
    categoryRu: 'Дата-центр',
    categoryEn: 'Data Center',
    clientRu: 'Банковская группа',
    clientEn: 'Banking group',
    country: 'az',
    countryRu: 'Азербайджан',
    countryEn: 'Azerbaijan',
    flag: '🇦🇿',
    year: '2023',
    descRu: 'Построение серверной комнаты на 12 стоек. Поставка Rittal TS IT 42U, кондиционеров Rittal SK, ИБП Hitec 80 кВА с двойным преобразованием и системы мониторинга среды. Интеграция с существующей СКС.',
    descEn: 'Construction of a 12-rack server room. Supply of Rittal TS IT 42U, Rittal SK air conditioners, 80 kVA Hitec UPS with double conversion and environmental monitoring system. Integration with existing SCS.',
    stats: [
      { valueRu: '12', valueEn: '12', labelRu: 'стоек 42U', labelEn: 'racks 42U' },
      { valueRu: '80 кВА', valueEn: '80 kVA', labelRu: 'ИБП резерв', labelEn: 'UPS backup' },
      { valueRu: '2×8 кВт', valueEn: '2×8 kW', labelRu: 'кондиционеры', labelEn: 'cooling units' },
      { valueRu: '30 дней', valueEn: '30 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['Rittal', 'Hitec'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80',
  },
  {
    id: 'outdoor-telecom-yerevan',
    titleRu: 'Уличные шкафы связи',
    titleEn: 'Outdoor Telecom Cabinets',
    category: 'telecom',
    categoryRu: 'Связь',
    categoryEn: 'Telecom',
    clientRu: 'Оператор мобильной связи',
    clientEn: 'Mobile operator',
    country: 'am',
    countryRu: 'Армения',
    countryEn: 'Armenia',
    flag: '🇦🇲',
    year: '2024',
    descRu: 'Поставка термостатированных уличных шкафов ZPAS WN для установки базовых станций в условиях высокогорья. Двойная стенка с теплоизоляцией, встроенный обогрев, защита IP65. Подходят для −40…+55°C.',
    descEn: 'Supply of ZPAS WN thermostated outdoor cabinets for mountain base stations. Double-skin insulated walls, built-in heating, IP65 protection. Rated for −40…+55°C.',
    stats: [
      { valueRu: '24', valueEn: '24', labelRu: 'уличных шкафа', labelEn: 'outdoor cabinets' },
      { valueRu: 'IP65', valueEn: 'IP65', labelRu: 'степень защиты', labelEn: 'protection' },
      { valueRu: '−40…+55°C', valueEn: '−40…+55°C', labelRu: 'диапазон', labelEn: 'operating range' },
      { valueRu: '40 дней', valueEn: '40 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['ZPAS'],
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=900&q=80',
  },
  {
    id: 'warehouse-logistics',
    titleRu: 'Автоматизация склада класса A',
    titleEn: 'Class A Warehouse Automation',
    category: 'automation',
    categoryRu: 'Автоматизация',
    categoryEn: 'Automation',
    clientRu: 'Логистический оператор',
    clientEn: 'Logistics operator',
    country: 'kz',
    countryRu: 'Казахстан',
    countryEn: 'Kazakhstan',
    flag: '🇰🇿',
    year: '2023',
    descRu: 'Поставка компонентов для системы управления складом: электрощиты Legrand XL³, шкафы Rittal AE, клеммные блоки и блоки питания Phoenix Contact. Полная сборка и конфигурирование силами партнёров заказчика.',
    descEn: 'Supply of components for warehouse management system: Legrand XL³ switchboards, Rittal AE enclosures, Phoenix Contact terminal blocks and power supplies. Full assembly and configuration by client\'s partners.',
    stats: [
      { valueRu: '8', valueEn: '8', labelRu: 'распред. щитов', labelEn: 'distribution boards' },
      { valueRu: '22 000 м²', valueEn: '22,000 m²', labelRu: 'площадь склада', labelEn: 'warehouse area' },
      { valueRu: '400 А', valueEn: '400 A', labelRu: 'ввод питания', labelEn: 'power input' },
      { valueRu: '50 дней', valueEn: '50 days', labelRu: 'срок поставки', labelEn: 'lead time' },
    ],
    brands: ['Rittal', 'Legrand', 'Phoenix Contact'],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=900&q=80',
  },
];

const categories = [
  { id: 'all',        labelRu: 'Все проекты',   labelEn: 'All Projects' },
  { id: 'datacenter', labelRu: 'Дата-центры',   labelEn: 'Data Centers' },
  { id: 'power',      labelRu: 'Энергетика',    labelEn: 'Energy' },
  { id: 'automation', labelRu: 'Автоматизация', labelEn: 'Automation' },
  { id: 'telecom',    labelRu: 'Связь',         labelEn: 'Telecom' },
];

export default function ProjectsPage() {
  const locale = useLocale();
  const isRu = locale === 'ru';
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0A1628] pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8500A] opacity-[0.05] rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-4">
            {isRu ? 'Реализованные проекты' : 'Completed Projects'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 max-w-2xl">
            {isRu ? 'Проекты' : 'Projects'}
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            {isRu
              ? 'С 2018 года реализовали более 50 проектов в 6 странах — от серверных комнат до крупных ЦОД Tier III и подстанций 110 кВ.'
              : 'Since 2018, we\'ve delivered 50+ projects across 6 countries — from server rooms to major Tier III data centers and 110 kV substations.'}
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {[
              { v: '50+',  l: isRu ? 'проектов реализовано' : 'projects delivered' },
              { v: '6',    l: isRu ? 'стран присутствия'    : 'countries served' },
              { v: '2018', l: isRu ? 'год основания'        : 'founded' },
              { v: '€25М+',l: isRu ? 'объём поставок'       : 'deliveries value' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl text-white mb-1">{s.v}</p>
                <p className="text-white/40 text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-[#F7F6F3] border-b border-[#E2DDD6] sticky top-[80px] z-40">
        <div className="container-main py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0A1628] text-white border-[#0A1628]'
                    : 'bg-white text-[#0A1628]/60 border-[#E2DDD6] hover:border-[#0A1628]/30'
                }`}
              >
                {isRu ? cat.labelRu : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="section bg-[#F7F6F3]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <article
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
                  project.featured ? 'border-[#E8500A]/30 ring-1 ring-[#E8500A]/10' : 'border-[#E2DDD6]'
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#0A1628]">
                  <img
                    src={project.image}
                    alt={isRu ? project.titleRu : project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/95 text-[#0A1628] backdrop-blur-sm">
                      {isRu ? project.categoryRu : project.categoryEn}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E8500A] text-white shadow-md">
                        {isRu ? 'Ключевой' : 'Featured'}
                      </span>
                    )}
                  </div>

                  {/* Bottom meta */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-2xl leading-none">{project.flag}</span>
                      <div>
                        <p className="text-sm font-semibold">
                          {isRu ? project.countryRu : project.countryEn}
                        </p>
                        <p className="text-xs text-white/60">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                      {project.brands.map(b => (
                        <span key={b} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/15 text-white/90 border border-white/20 backdrop-blur-sm">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-[#0A1628]/40 text-xs uppercase tracking-widest mb-2 font-semibold">
                    {isRu ? project.clientRu : project.clientEn}
                  </p>
                  <h3 className="font-display text-xl text-[#0A1628] mb-4 leading-snug group-hover:text-[#E8500A] transition-colors">
                    {isRu ? project.titleRu : project.titleEn}
                  </h3>
                  <p className="text-[#0A1628]/60 text-sm leading-relaxed mb-6">
                    {isRu ? project.descRu : project.descEn}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-5 border-t border-[#E2DDD6]">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="font-display text-lg text-[#0A1628]">
                          {isRu ? stat.valueRu : stat.valueEn}
                        </p>
                        <p className="text-xs text-[#0A1628]/50">
                          {isRu ? stat.labelRu : stat.labelEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0A1628] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
                {isRu ? 'Обсудим ваш проект?' : 'Discuss your project?'}
              </h2>
              <p className="text-white/45 text-sm max-w-md">
                {isRu
                  ? 'Подготовим коммерческое предложение с техническими характеристиками и сроками поставки'
                  : 'We\'ll prepare a commercial proposal with technical specifications and delivery timelines'}
              </p>
            </div>
            <Link href={`/${locale}/contacts`} className="btn-primary whitespace-nowrap">
              {isRu ? 'Запросить КП' : 'Request Quote'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
