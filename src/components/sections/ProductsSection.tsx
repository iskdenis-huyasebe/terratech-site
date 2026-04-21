import Link from 'next/link';
import { useLocale } from 'next-intl';

const products = [
  {
    key: 'cabinets',
    titleRu: 'Шкафы и корпусы',
    titleEn: 'Cabinets & Enclosures',
    descRu: 'Шкафы автоматики, электрощиты и серверные стойки для промышленных объектов, подстанций и ЦОД. Степень защиты IP54–IP66.',
    descEn: 'Automation cabinets, switchgear and server racks for industrial facilities, substations and data centers. Protection IP54–IP66.',
    brands: 'Rittal · ZPAS',
    specs: ['IP54 / IP66', 'от 6U до 47U', 'RAL 7035', 'Нержавеющая сталь'],
    specsEn: ['IP54 / IP66', '6U to 47U', 'RAL 7035', 'Stainless Steel'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: '#1E40AF',
    bg: '#EFF6FF',
  },
  {
    key: 'components',
    titleRu: 'Компоненты для щитов',
    titleEn: 'Switchgear Components',
    descRu: 'Клеммные блоки, промышленные реле, блоки питания DIN-рейка, автоматические выключатели для сборки щитов управления.',
    descEn: 'Terminal blocks, industrial relays, DIN rail power supplies, circuit breakers for control panel assembly.',
    brands: 'Phoenix Contact · Legrand',
    specs: ['DIN-рейка 35мм', '24VDC / 48VDC', 'до 63А', 'UL / CE'],
    specsEn: ['DIN Rail 35mm', '24VDC / 48VDC', 'up to 63A', 'UL / CE'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    color: '#E8500A',
    bg: '#FFF7ED',
  },
  {
    key: 'datacenter',
    titleRu: 'Решения для ЦОД',
    titleEn: 'Data Center Solutions',
    descRu: 'Фальшполы с нагрузкой до 1500 кг/м², системы кабельного управления и инфраструктурные решения для дата-центров.',
    descEn: 'Raised floors with load up to 1500 kg/m², cable management systems and infrastructure solutions for data centers.',
    brands: 'Weiss · Rittal',
    specs: ['до 1500 кг/м²', 'Высота 150–1000мм', 'Антистатика', 'Пожаростойкость'],
    specsEn: ['up to 1500 kg/m²', 'Height 150–1000mm', 'Anti-static', 'Fire resistant'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    color: '#065F46',
    bg: '#ECFDF5',
  },
  {
    key: 'ups',
    titleRu: 'Источники бесперебойного питания',
    titleEn: 'Uninterruptible Power Supplies',
    descRu: 'ИБП онлайн-типа двойного преобразования для критически важных объектов: серверных, производств, медицинских учреждений.',
    descEn: 'Online double-conversion UPS for mission-critical facilities: server rooms, manufacturing, medical institutions.',
    brands: 'Hitec',
    specs: ['1–800 кВА', 'Онлайн (двойное преобразование)', 'КПД до 96%', 'SNMP мониторинг'],
    specsEn: ['1–800 kVA', 'Online (double conversion)', 'Efficiency up to 96%', 'SNMP monitoring'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    color: '#0369A1',
    bg: '#F0F9FF',
  },
];

export default function ProductsSection() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section className="section bg-[#F7F6F3]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
              {isRu ? 'Каталог' : 'Catalog'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0A1628]">
              {isRu ? 'Продукция' : 'Products'}
            </h2>
          </div>
          <p className="text-[#0A1628]/55 text-base max-w-sm leading-relaxed">
            {isRu
              ? 'Поставляем оборудование ведущих мировых производителей с полной документацией и гарантией'
              : 'We supply equipment from leading global manufacturers with full documentation and warranty'}
          </p>
        </div>

        {/* Products — alternating layout */}
        <div className="space-y-6">
          {products.map((product, i) => (
            <div
              key={product.key}
              className="card-hover rounded-2xl overflow-hidden border border-[#E2DDD6] grid grid-cols-1 md:grid-cols-2"
              style={{ background: product.bg }}
            >
              {/* Image — alternating left/right */}
              <div className={`relative h-56 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={product.image}
                  alt={isRu ? product.titleRu : product.titleEn}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${product.color}50 0%, transparent 70%)` }}
                />
                {/* Brand badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#0A1628]">
                    {product.brands}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl text-[#0A1628] mb-3">
                  {isRu ? product.titleRu : product.titleEn}
                </h3>
                <p className="text-[#0A1628]/60 text-sm leading-relaxed mb-5">
                  {isRu ? product.descRu : product.descEn}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(isRu ? product.specs : product.specsEn).map(spec => (
                    <span
                      key={spec}
                      className="text-xs px-3 py-1.5 rounded-full font-medium bg-white border"
                      style={{ color: product.color, borderColor: `${product.color}30` }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${locale}/contacts`}
                  className="inline-flex items-center gap-2 text-sm font-semibold group self-start"
                  style={{ color: product.color }}
                >
                  {isRu ? 'Запросить предложение' : 'Request Quote'}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
