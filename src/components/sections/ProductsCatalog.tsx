'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type Product = {
  id: string;
  brand: string;
  brandColor: string;
  seriesRu: string;
  seriesEn: string;
  nameRu: string;
  nameEn: string;
  descRu: string;
  descEn: string;
  specs: string[];
  specsEn: string[];
  category: string;
  url: string;
  image: string;
  highlight?: boolean;
};

const categories = [
  { id: 'all',        labelRu: 'Все',                  labelEn: 'All' },
  { id: 'cabinets',   labelRu: 'Шкафы и корпусы',      labelEn: 'Enclosures' },
  { id: 'racks',      labelRu: 'Серверные стойки',     labelEn: 'Server Racks' },
  { id: 'climate',    labelRu: 'Климатизация',          labelEn: 'Climate Control' },
  { id: 'floor',      labelRu: 'Фальшполы',            labelEn: 'Raised Floors' },
  { id: 'components', labelRu: 'Компоненты',           labelEn: 'Components' },
];

const products: Product[] = [
  // ── RITTAL (Системный каталог №36) ──────────────────────
  {
    id: 'rittal-vx25',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'VX25 — Шкафная система',
    seriesEn: 'VX25 — Baying Enclosure System',
    nameRu: 'Шкаф секционируемый VX25',
    nameEn: 'VX25 Baying Enclosure',
    descRu: 'Флагманская система Rittal для построения распределительных устройств любой сложности. Доступ со всех сторон, монтаж без инструментов, встроенная система заземления. Арт.: 8615.000 (600×500×1200), 8815.000 (800×500×1200), 8215.000 (1200×500×1200).',
    descEn: 'Rittal\'s flagship system for all switchgear configurations. Accessible from all sides, tool-free mounting, integrated earthing. Art.: 8615.000 (600×500×1200), 8815.000 (800×500×1200), 8215.000 (1200×500×1200).',
    specs: ['Ширина: 600–1200 мм', 'Высота: 1200–2200 мм', 'Глубина: 400–800 мм', 'IP55 / IP66', 'RAL 7035 / RAL 9005'],
    specsEn: ['Width: 600–1200 mm', 'Height: 1200–2200 mm', 'Depth: 400–800 mm', 'IP55 / IP66', 'RAL 7035 / RAL 9005'],
    category: 'cabinets',
    url: 'https://www.rittal.com/lt-en/products/enclosures/vx25/',
    image: '/product-cabinet.svg',
    highlight: true,
  },
  {
    id: 'rittal-vx-se',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'VX SE — Отдельностоящий шкаф',
    seriesEn: 'VX SE — Free-standing Enclosure',
    nameRu: 'Шкаф отдельностоящий VX SE',
    nameEn: 'VX SE Free-standing Enclosure',
    descRu: 'Система для одиночных применений шириной до 1800 мм. Общий диапазон аксессуаров с VX25. Арт.: серия 8886/8887 (IP66/NEMA 4). Исполнение из нержавеющей стали под заказ.',
    descEn: 'System for standalone applications up to 1800 mm wide. Shares full accessory range with VX25. Art.: 8886/8887 series (IP66/NEMA 4). Stainless steel version available on request.',
    specs: ['Ширина: 600–1800 мм', 'IP55 / IP66 / NEMA 4', 'RAL 7035', 'Нержавеющая сталь', 'IEC 62208'],
    specsEn: ['Width: 600–1800 mm', 'IP55 / IP66 / NEMA 4', 'RAL 7035', 'Stainless steel option', 'IEC 62208'],
    category: 'cabinets',
    url: 'https://www.rittal.com/lt-en/products/enclosures/vx25/',
    image: '/product-cabinet.svg',
  },
  {
    id: 'rittal-ax',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'AX — Компактный корпус',
    seriesEn: 'AX — Compact Enclosure',
    nameRu: 'Компактный корпус AX',
    nameEn: 'AX Compact Enclosure',
    descRu: 'Настенные корпуса для монтажа вне щитовых помещений. Дверь переворачивается на 180°, уплотнение PU по периметру. Варианты: листовая сталь, нержавеющая сталь, пластик. Арт.: от 1045.000 (300×300×210).',
    descEn: 'Wall-mounted enclosures for installation outside panel rooms. Door reversible 180°, all-round PU seal. Options: sheet steel, stainless steel, plastic. Art.: from 1045.000 (300×300×210).',
    specs: ['300×210 — 800×600 мм', 'IP66 / NEMA 4X', 'UL / cUL', 'RAL 7035', 'Петли 180°'],
    specsEn: ['300×210 — 800×600 mm', 'IP66 / NEMA 4X', 'UL / cUL', 'RAL 7035', '180° hinges'],
    category: 'cabinets',
    url: 'https://www.rittal.com/lt-en/products/enclosures/ax/',
    image: '/product-wallcab.svg',
  },
  {
    id: 'rittal-vx-it',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'VX IT — Серверная стойка',
    seriesEn: 'VX IT — Network/Server Rack',
    nameRu: 'Серверная стойка VX IT',
    nameEn: 'VX IT Server Rack',
    descRu: 'Стойки для сетевой инфраструктуры, Edge и ЦОД. Алюминиевая фронтальная дверь (перфорация 85%), стеклянная или перфорированная задняя. Арт.: 5303.114 (24U 800×1000×1200), 5329.111 (42U 800×1000×2000).',
    descEn: 'Racks for network infrastructure, edge and data centres. Aluminium front door (85% perforation), glass or vented rear. Art.: 5303.114 (24U 800×1000×1200), 5329.111 (42U 800×1000×2000).',
    specs: ['24U / 42U / 47U', 'Ширина 800 мм', 'Глубина 800–1200 мм', 'Нагрузка до 1500 кг', 'UL / cUL'],
    specsEn: ['24U / 42U / 47U', 'Width 800 mm', 'Depth 800–1200 mm', 'Load up to 1500 kg', 'UL / cUL'],
    category: 'racks',
    url: 'https://www.rittal.com/lt-en/products/it-infrastructure/server-racks/',
    image: '/product-rack.svg',
    highlight: true,
  },
  {
    id: 'rittal-lcp-dx',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'LCP DX — Жидкостное охлаждение',
    seriesEn: 'LCP DX — Liquid Cooling Package',
    nameRu: 'Жидкостный пакет охлаждения LCP DX',
    nameEn: 'Liquid Cooling Package LCP DX',
    descRu: 'In-row охлаждение ЦОД. Забирает тёплый воздух сзади стоек, подаёт холодный спереди. EC-вентиляторы, инверторный компрессор, SNMP-мониторинг, интеграция в RiZone. IP 20, хладагент R-410A.',
    descEn: 'In-row data centre cooling. Draws warm air from rear of racks, delivers cool air to the front. EC fans, inverter compressor, SNMP monitoring, RiZone integration. IP 20, refrigerant R-410A.',
    specs: ['До 25 кВт охлаждения', 'EC-вентиляторы', 'R-410A / фреон', 'SNMP / RiZone', 'IP 20'],
    specsEn: ['Up to 25 kW cooling', 'EC fan technology', 'R-410A refrigerant', 'SNMP / RiZone', 'IP 20'],
    category: 'climate',
    url: 'https://www.rittal.com/lt-en/products/it-infrastructure/cooling/',
    image: '/product-cooling.svg',
  },
  {
    id: 'rittal-blue-e-plus',
    brand: 'Rittal',
    brandColor: '#E8500A',
    seriesRu: 'Blue e+ — Кондиционер шкафа',
    seriesEn: 'Blue e+ — Enclosure Cooling Unit',
    nameRu: 'Кондиционер Blue e+ (настенный/крышный)',
    nameEn: 'Blue e+ Wall/Roof Cooling Unit',
    descRu: 'Энергоэффективное охлаждение щитов с тепловым насосом. КПД до 75% выше предыдущих серий. IoT-готовность, мониторинг через Rittal Connect. Арт.: 3185.530 (настенный 1600 Вт, RAL 9007).',
    descEn: 'Energy-efficient enclosure cooling with heat pump technology. Up to 75% more efficient than previous series. IoT-ready, monitoring via Rittal Connect. Art.: 3185.530 (wall-mount 1600 W, RAL 9007).',
    specs: ['1300–5800 Вт', 'КПД +75% vs Blue e', 'Настенный / крышный', 'IoT / Rittal Connect', 'EN 14511'],
    specsEn: ['1300–5800 W', 'Up to 75% more efficient', 'Wall / roof mount', 'IoT / Rittal Connect', 'EN 14511'],
    category: 'climate',
    url: 'https://www.rittal.com/lt-en/products/climate-control/',
    image: '/product-cooling.svg',
  },

  // ── ZPAS ─────────────────────────────────────────────────
  {
    id: 'zpas-wz',
    brand: 'ZPAS',
    brandColor: '#1D4ED8',
    seriesRu: 'Серия WZ',
    seriesEn: 'WZ Series',
    nameRu: 'Шкаф напольный WZ',
    nameEn: 'WZ Floor Standing Cabinet',
    descRu: 'Универсальные напольные шкафы польского производства. Применяются для автоматики, электроснабжения и связи. Широкий выбор размеров, лёгкая адаптация под проект.',
    descEn: 'Universal floor-standing cabinets manufactured in Poland. Used for automation, power supply and telecom. Wide size range, easy project customization.',
    specs: ['600–1200 мм (ширина)', 'IP54 / IP65', 'RAL 7035 / RAL 9005', 'Двойные двери', 'EN 62208'],
    specsEn: ['600–1200 mm (width)', 'IP54 / IP65', 'RAL 7035 / RAL 9005', 'Double doors', 'EN 62208'],
    category: 'cabinets',
    url: 'https://www.zpas.pl/en/products/cabinets/',
    image: '/product-cabinet.svg',
    highlight: true,
  },
  {
    id: 'zpas-szb',
    brand: 'ZPAS',
    brandColor: '#1D4ED8',
    seriesRu: 'Серия SZB',
    seriesEn: 'SZB Series',
    nameRu: 'Серверная стойка SZB IT',
    nameEn: 'SZB IT Server Rack',
    descRu: 'Серверные стойки для оборудования ЦОД. Стеклянная передняя дверь, перфорированная задняя, боковые панели с замком. Полная совместимость с 19" оборудованием.',
    descEn: 'Server racks for data center equipment. Glass front door, perforated rear, lockable side panels. Full compatibility with 19" equipment.',
    specs: ['600×1000×2000 мм', '42U', 'IP20', 'Нагрузка: 1200 кг', '19" EIA-310'],
    specsEn: ['600×1000×2000 mm', '42U', 'IP20', 'Load: 1200 kg', '19" EIA-310'],
    category: 'racks',
    url: 'https://www.zpas.pl/en/products/rack-cabinets/',
    image: '/product-rack.svg',
  },
  {
    id: 'zpas-wall',
    brand: 'ZPAS',
    brandColor: '#1D4ED8',
    seriesRu: 'Серия SWG',
    seriesEn: 'SWG Series',
    nameRu: 'Настенный шкаф SWG',
    nameEn: 'SWG Wall-Mount Enclosure',
    descRu: 'Настенные шкафы для монтажа в коридорах, небольших помещениях и точках доступа. Петли съёмные, дно выбивное. Применяются для сетевого оборудования и патч-панелей.',
    descEn: 'Wall-mount enclosures for corridors, small rooms and access points. Removable hinges, knock-out base. Used for network equipment and patch panels.',
    specs: ['450×600 — 600×600 мм', '9U / 12U / 15U', 'IP20', 'Глубина 300–450 мм', 'RAL 9005'],
    specsEn: ['450×600 — 600×600 mm', '9U / 12U / 15U', 'IP20', 'Depth 300–450 mm', 'RAL 9005'],
    category: 'cabinets',
    url: 'https://www.zpas.pl/en/products/wall-cabinets/',
    image: '/product-wallcab.svg',
  },
  {
    id: 'zpas-outdoor',
    brand: 'ZPAS',
    brandColor: '#1D4ED8',
    seriesRu: 'Серия WN',
    seriesEn: 'WN Series',
    nameRu: 'Уличный шкаф WN (термостатированный)',
    nameEn: 'WN Outdoor Thermostated Cabinet',
    descRu: 'Шкафы для уличной установки с встроенным обогревом и вентиляцией. Двойные стенки с теплоизоляцией. Применяются на объектах связи, энергетики и транспорта.',
    descEn: 'Outdoor cabinets with integrated heating and ventilation. Double-skin walls with thermal insulation. Used in telecom, energy and transport facilities.',
    specs: ['IP55 / IP65', 'Рабочая Т°: −40…+55°C', 'Двойная стенка', 'Обогрев встроен', 'IEC 62208'],
    specsEn: ['IP55 / IP65', 'Operating T°: −40…+55°C', 'Double-skin wall', 'Heating built-in', 'IEC 62208'],
    category: 'cabinets',
    url: 'https://www.zpas.pl/en/products/outdoor-cabinets/',
    image: '/product-outdoor.svg',
  },

  // ── WEISS (Raised Floors) ────────────────────────────────
  {
    id: 'weiss-rd',
    brand: 'Weiss',
    brandColor: '#065F46',
    seriesRu: 'Серия RD',
    seriesEn: 'RD Series',
    nameRu: 'Фальшпол RD (высокая нагрузка)',
    nameEn: 'RD Raised Floor (High Load)',
    descRu: 'Системы поднятых полов для дата-центров с нагрузкой до 1500 кг/м². Антистатическое покрытие, регулируемые опоры высотой 150–1000 мм. Полы соответствуют стандартам ЦОД Tier III–IV.',
    descEn: 'Raised floor systems for data centers with load up to 1500 kg/m². Anti-static surface, adjustable pedestals 150–1000 mm. Compliant with Tier III–IV data center standards.',
    specs: ['До 1500 кг/м²', 'Высота: 150–1000 мм', 'Размер плиты: 600×600 мм', 'Антистатика < 10⁶ Ом', 'EN 12825'],
    specsEn: ['Up to 1500 kg/m²', 'Height: 150–1000 mm', 'Tile: 600×600 mm', 'Anti-static < 10⁶ Ω', 'EN 12825'],
    category: 'floor',
    url: 'https://www.weiss-dbs.com/',
    image: '/product-floor.svg',
    highlight: true,
  },

  // ── PHOENIX CONTACT / LEGRAND (Components) ───────────────
  {
    id: 'phoenix-terminals',
    brand: 'Phoenix Contact',
    brandColor: '#991B1B',
    seriesRu: 'Серия CLIPLINE complete',
    seriesEn: 'CLIPLINE complete Series',
    nameRu: 'Клеммные блоки CLIPLINE',
    nameEn: 'CLIPLINE Terminal Blocks',
    descRu: 'Полная система монтажа на DIN-рейку: пружинные и винтовые клеммы, маркировка, мосты, концевые упоры. Сечение проводов от 0,08 до 185 мм². Сертификация UL, cUL, CSA.',
    descEn: 'Complete DIN rail mounting system: spring-clamp and screw terminals, marking, bridges, end stops. Wire cross-section from 0.08 to 185 mm². UL, cUL, CSA certified.',
    specs: ['0,08 — 185 мм²', '24 / 48 / 250 VDC', 'UL / CE / CSA', 'Пружинный / винтовой зажим', 'DIN EN 60947-7'],
    specsEn: ['0.08 — 185 mm²', '24 / 48 / 250 VDC', 'UL / CE / CSA', 'Spring / screw clamp', 'DIN EN 60947-7'],
    category: 'components',
    url: 'https://www.phoenixcontact.com/en-lt/',
    image: '/product-components.svg',
  },
  {
    id: 'phoenix-psu',
    brand: 'Phoenix Contact',
    brandColor: '#991B1B',
    seriesRu: 'Серия QUINT POWER',
    seriesEn: 'QUINT POWER Series',
    nameRu: 'Блоки питания QUINT POWER',
    nameEn: 'QUINT POWER Power Supplies',
    descRu: 'Промышленные источники питания DIN-рейка с активным мониторингом нагрузки. Защита от перегрузки, встроенный SFB (Selective Fuse Breaking). КПД до 95,5%.',
    descEn: 'Industrial DIN rail power supplies with active load monitoring. Overload protection, integrated SFB (Selective Fuse Breaking). Efficiency up to 95.5%.',
    specs: ['24 VDC (5–40 А)', 'КПД: 95,5%', 'SFB-технология', 'MTBF > 500 000 ч', 'IEC 62368-1'],
    specsEn: ['24 VDC (5–40 A)', 'Efficiency: 95.5%', 'SFB technology', 'MTBF > 500,000 h', 'IEC 62368-1'],
    category: 'components',
    url: 'https://www.phoenixcontact.com/en-lt/',
    image: '/product-components.svg',
  },
  {
    id: 'legrand-xform',
    brand: 'Legrand',
    brandColor: '#1E40AF',
    seriesRu: 'Серия XL³',
    seriesEn: 'XL³ Series',
    nameRu: 'Щит распределительный XL³',
    nameEn: 'XL³ Distribution Board',
    descRu: 'Модульная система щитового оборудования Legrand для промышленных и инфраструктурных объектов. Готовые решения для АВР, распределения питания и автоматики.',
    descEn: 'Legrand\'s modular switchgear system for industrial and infrastructure facilities. Ready-made solutions for ATS, power distribution and automation.',
    specs: ['160 / 400 / 800 / 4000 А', 'IP30 / IP43 / IP55', 'Медная / алюминиевая шина', 'Готов к АВР', 'IEC 61439'],
    specsEn: ['160 / 400 / 800 / 4000 A', 'IP30 / IP43 / IP55', 'Copper / aluminium busbar', 'ATS ready', 'IEC 61439'],
    category: 'components',
    url: 'https://www.legrandgroup.com/en',
    image: '/product-components.svg',
  },
];

export default function ProductsCatalog() {
  const locale = useLocale();
  const isRu = locale === 'ru';
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');

  const brands = ['all', 'Rittal', 'ZPAS', 'Weiss', 'Phoenix Contact', 'Legrand'];

  const filtered = products.filter(p => {
    const catOk = activeCategory === 'all' || p.category === activeCategory;
    const brandOk = activeBrand === 'all' || p.brand === activeBrand;
    return catOk && brandOk;
  });

  return (
    <>
      {/* ── Hero banner ── */}
      <section className="bg-[#0A1628] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8500A] opacity-[0.05] rounded-full blur-[120px]" />
        <div className="container-main relative z-10">
          <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-4">
            {isRu ? 'Каталог оборудования' : 'Equipment Catalog'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
            {isRu ? 'Продукция' : 'Products'}
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            {isRu
              ? 'Официальный поставщик Rittal, ZPAS, Phoenix Contact, Legrand, Weiss и Hitec. Поставка в Казахстан, Узбекистан, Грузию и страны СНГ.'
              : 'Authorized distributor of Rittal, ZPAS, Phoenix Contact, Legrand, Weiss and Hitec. Delivery to Kazakhstan, Uzbekistan, Georgia and CIS countries.'}
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-[#F7F6F3] border-b border-[#E2DDD6] sticky top-[80px] z-40">
        <div className="container-main py-3">
          <div className="flex flex-col gap-3">
            {/* Category filters */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#0A1628] text-white border-[#0A1628]'
                      : 'bg-white text-[#0A1628]/60 border-[#E2DDD6] hover:border-[#0A1628]/30'
                  }`}
                >
                  {isRu ? cat.labelRu : cat.labelEn}
                </button>
              ))}
            </div>
            {/* Brand filters */}
            <div className="flex flex-wrap gap-1.5">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded border transition-all ${
                    activeBrand === brand
                      ? 'bg-[#E8500A] text-white border-[#E8500A]'
                      : 'bg-white text-[#0A1628]/50 border-[#E2DDD6] hover:border-[#E8500A]/40'
                  }`}
                >
                  {brand === 'all' ? (isRu ? 'Все бренды' : 'All brands') : brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products grid ── */}
      <section className="section bg-[#F7F6F3]">
        <div className="container-main">
          {/* Count */}
          <p className="text-[#0A1628]/40 text-sm mb-8">
            {isRu ? `Показано: ${filtered.length} позиций` : `Showing: ${filtered.length} items`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map(product => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${
                  product.highlight ? 'border-[#E8500A]/30 ring-1 ring-[#E8500A]/20' : 'border-[#E2DDD6]'
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-[#F0EDE8]">
                  <img
                    src={product.image}
                    alt={isRu ? product.nameRu : product.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${product.brandColor}40 0%, transparent 60%)` }}
                  />
                  {/* Brand badge on image */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white shadow-sm"
                      style={{ background: product.brandColor }}
                    >
                      {product.brand}
                    </span>
                  </div>
                  {product.highlight && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-semibold text-white bg-[#E8500A] px-2 py-0.5 rounded shadow-sm">
                        {isRu ? 'Топ продаж' : 'Best seller'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card header */}
                <div className="p-6 pb-4 flex-1">
                  {/* Brand + series row */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-[#0A1628]/40 font-medium" style={{ color: product.brandColor }}>
                      {isRu ? product.seriesRu : product.seriesEn}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg text-[#0A1628] mb-3 leading-snug group-hover:text-[#E8500A] transition-colors">
                    {isRu ? product.nameRu : product.nameEn}
                  </h3>

                  {/* Description */}
                  <p className="text-[#0A1628]/55 text-sm leading-relaxed mb-4">
                    {isRu ? product.descRu : product.descEn}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1.5">
                    {(isRu ? product.specs : product.specsEn).map(spec => (
                      <span
                        key={spec}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#F7F6F3] border border-[#E2DDD6] text-[#0A1628]/60 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-6 pb-6 pt-4 border-t border-[#F0EDE8] flex items-center justify-between gap-3">
                  <Link
                    href={`/${locale}/contacts`}
                    className="btn-primary text-xs py-2.5 px-5 flex-1 text-center"
                    style={{ fontSize: '13px' }}
                  >
                    {isRu ? 'Запросить КП' : 'Request Quote'}
                  </Link>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0A1628]/40 hover:text-[#0A1628] transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    {isRu ? 'Сайт бренда' : 'Brand site'}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div className="mt-16 bg-[#0A1628] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
                {isRu ? 'Не нашли нужную позицию?' : 'Can\'t find what you need?'}
              </h2>
              <p className="text-white/45 text-sm">
                {isRu
                  ? 'Поставляем любое оборудование из каталогов Rittal, ZPAS, Phoenix Contact и других партнёров'
                  : 'We supply any equipment from the catalogs of Rittal, ZPAS, Phoenix Contact and other partners'}
              </p>
            </div>
            <Link href={`/${locale}/contacts`} className="btn-primary whitespace-nowrap">
              {isRu ? 'Написать нам' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
