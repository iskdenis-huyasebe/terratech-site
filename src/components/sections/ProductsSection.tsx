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
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&h=600&fit=crop&q=85&auto=format',
    color: '#E8500A',
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
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=85&auto=format',
    color: '#E8500A',
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
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&q=85&auto=format',
    color: '#E8500A',
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
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&q=85&auto=format',
    color: '#E8500A',
  },
];

export default function ProductsSection() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section className="section bg-[#0A1628] relative overflow-hidden">
      {/* BG accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#E8500A] opacity-[0.05] rounded-full blur-[160px]"></div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
              {isRu ? 'Каталог' : 'Catalog'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              {isRu ? 'Продукция' : 'Products'}
            </h2>
          </div>
          <p className="text-white/60 text-base max-w-sm leading-relaxed">
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
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] grid grid-cols-1 md:grid-cols-2 transition-all duration-300 hover:border-[#E8500A]/40 hover:bg-white/[0.05]"
            >
              {/* Image — alternating left/right */}
              <div className={`relative h-56 md:h-[340px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={product.image}
                  alt={isRu ? product.titleRu : product.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Blend toward the content panel */}
                <div
                  className={`absolute inset-0 ${i % 2 === 1 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-transparent to-[#0A1628]/90`}
                ></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A1628]/70 to-transparent md:hidden"></div>
                {/* Brand badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                    {product.brands}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 group-hover:text-[#FF6B2B] transition-colors">
                  {isRu ? product.titleRu : product.titleEn}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {isRu ? product.descRu : product.descEn}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(isRu ? product.specs : product.specsEn).map(spec => (
                    <span
                      key={spec}
                      className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/[0.06] border border-white/10 text-white/75"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${locale}/contacts`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8500A] hover:text-[#FF6B2B] transition-colors self-start"
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
