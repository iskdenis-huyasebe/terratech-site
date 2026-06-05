import type { Brand } from '../types';

const rid: Brand = {
  id: 'rid',
  name: 'RID',
  country: 'Германия',
  countryEn: 'Germany',
  color: '#1a1a1a',
  logo: 'https://www.rid-battery.com/wp-content/uploads/2019/05/RID-Logo.png',
  tagline: 'Аккумуляторы и генераторы',
  taglineEn: 'Batteries & Generators',
  description:
    'Немецкий производитель промышленных аккумуляторных систем и дизельных генераторов. RID Battery — аккумуляторы для телекома, ИБП, электропогрузчиков и возобновляемой энергетики. R.I.D. GmbH — дизельные генераторы 10–2500 кВА на двигателях Deutz, Mitsubishi, Doosan, John Deere, Volvo, MTU и Yanmar.',
  descriptionEn:
    'German manufacturer of industrial battery systems and diesel generator sets. RID Battery covers telecom, UPS, forklift and renewable-energy batteries; R.I.D. GmbH covers diesel gensets 10–2500 kVA on Deutz, Mitsubishi, Doosan, John Deere, Volvo, MTU and Yanmar engines.',
  officialUrl: 'https://www.rid-battery.com',
  catalogPdf: '/catalogs/rid-battery.pdf',
  products: [

    // ─── BATTERIES ────────────────────────────────────────────────────────────

    {
      id: 'opzs',
      categoryId: 'batteries',
      series: 'RID OPzS — Off-Grid / On-Grid',
      seriesEn: 'RID OPzS — Off-Grid / On-Grid Solutions',
      name: 'Аккумулятор OPzS (трубчатые пластины)',
      nameEn: 'OPzS Tubular Plate Battery',
      description:
        'Стационарные свинцово-кислотные аккумуляторы с трубчатыми положительными пластинами. Срок службы 20 лет. Ёмкость 213–3488 Ач. Применение: солнечная и ветровая энергетика, резервное электроснабжение.',
      descriptionEn:
        'Stationary lead-acid batteries with tubular positive plates. 20-year design life. Capacity range 213–3,488 Ah. Applications: solar/wind energy, back-up power supply.',
      specs: ['2 В / ячейка', '213–3488 Ач', 'Срок службы: 20 лет', 'Стандарт DIN', 'Класс: OPzS flooded'],
      specsEn: ['2 V per cell', '213–3,488 Ah', 'Design life: 20 years', 'DIN standard', 'Class: OPzS flooded'],
      articles: [
        { code: 'RID 4 OPzS 200', desc: '2 В, 213 Ач', descEn: '2 V, 213 Ah' },
        { code: 'RID 12 OPzS 1200', desc: '2 В, 1370 Ач', descEn: '2 V, 1,370 Ah' },
        { code: 'RID 26 OPzS 3250', desc: '2 В, 3488 Ач', descEn: '2 V, 3,488 Ah' },
      ],
      image: '/product-components.svg',
      officialUrl: 'https://www.rid-battery.com',
      featured: true,
    },

    {
      id: 'opzv',
      categoryId: 'batteries',
      series: 'RID OPzV — Телеком / VRLA',
      seriesEn: 'RID OPzV — Telecommunications / VRLA',
      name: 'Аккумулятор OPzV (гелевый VRLA)',
      nameEn: 'OPzV VRLA Gel Battery',
      description:
        'Необслуживаемые герметичные аккумуляторы класса VRLA с гелевым электролитом и трубчатыми пластинами. Срок службы 20 лет. Отличная циклируемость при частичном заряде (PSoC). Применение: телекоммуникации, деревенское электроснабжение, сигнализация.',
      descriptionEn:
        'Maintenance-free sealed VRLA gel batteries with tubular plates. 20-year design life. Excellent cycling under Partial State of Charge (PSoC). Applications: telecom, village power, signalling.',
      specs: ['12 В / моноблок', '224–3286 Ач', 'Срок службы: 20 лет', 'VRLA гель', 'Горизонтальная установка'],
      specsEn: ['12 V monobloc', '224–3,286 Ah', 'Design life: 20 years', 'VRLA gel', 'Horizontal installation possible'],
      articles: [
        { code: 'RID 4 OPzV 200', desc: '12 В, 224 Ач', descEn: '12 V, 224 Ah' },
        { code: 'RID 16 OPzV 2000', desc: '12 В, 2190 Ач', descEn: '12 V, 2,190 Ah' },
        { code: 'RID 24 OPzV 3000', desc: '12 В, 3286 Ач', descEn: '12 V, 3,286 Ah' },
      ],
      image: '/product-components.svg',
      officialUrl: 'https://www.rid-battery.com',
    },

    {
      id: 'xtreme',
      categoryId: 'ups',
      series: 'RID Xtreme — Резерв для ИБП',
      seriesEn: 'RID Xtreme — Reserved Power for UPS',
      name: 'Аккумулятор RID Xtreme (Pure Lead AGM)',
      nameEn: 'RID Xtreme Pure Lead AGM Battery',
      description:
        'AGM-аккумуляторы следующего поколения на основе чистого свинца (99,99%). Срок службы 15 лет. Диапазон рабочих температур −40…+55 °C. Вертикальная и горизонтальная установка. Применение: ИБП, центры обработки данных, критическая инфраструктура.',
      descriptionEn:
        'Next-generation AGM batteries using pure lead (99.99%). 15-year design life. Operating temperature −40 to +55 °C. Vertical and horizontal installation. Applications: UPS, data centres, critical infrastructure.',
      specs: ['12 В', '85–200 Ач', 'Срок службы: 15 лет', 'Pure Lead 99,99%', 'AGM, IP: Eurobat "Very Long Life"'],
      specsEn: ['12 V', '85–200 Ah', 'Design life: 15 years', 'Pure Lead 99.99%', 'AGM, Eurobat "Very Long Life"'],
      articles: [
        { code: 'RID Xtreme VR 12-85', desc: '12 В, 85 Ач', descEn: '12 V, 85 Ah' },
        { code: 'RID Xtreme VR 12-150', desc: '12 В, 150 Ач', descEn: '12 V, 150 Ah' },
        { code: 'RID Xtreme VR 12-200 FT', desc: '12 В, 200 Ач, Front Terminal', descEn: '12 V, 200 Ah, Front Terminal' },
      ],
      image: '/product-components.svg',
      officialUrl: 'https://www.rid-battery.com',
      featured: true,
    },

    {
      id: 'st-series',
      categoryId: 'batteries',
      series: 'RID ST — Коммерческий транспорт',
      seriesEn: 'RID ST Series — Commercial Vehicles',
      name: 'Стартерный аккумулятор RID ST',
      nameEn: 'RID ST Starter Battery for Commercial Vehicles',
      description:
        'Стартерные аккумуляторы для коммерческого транспорта с усиленными пластинами и высокой виброустойчивостью. Серии ST2, ST3, ST5, ST7, EFB (Stop&Go), AGM. Применение: грузовой транспорт, сельхозтехника, строительные машины.',
      descriptionEn:
        'Starter batteries for commercial vehicles with reinforced plates and high vibration resistance. ST2, ST3, ST5, ST7, EFB (Stop&Go), AGM variants. Applications: trucks, agricultural, construction.',
      specs: ['12 В', '25–240 Ач', 'Холодный пуск до 1300 А (EN)', 'Серии: ST2/ST3/ST5/ST7/EFB/AGM', 'Европейские стандарты качества'],
      specsEn: ['12 V', '25–240 Ah', 'CCA up to 1,300 A (EN)', 'Variants: ST2/ST3/ST5/ST7/EFB/AGM', 'European quality standards'],
      articles: [
        { code: 'RID ST2 12-65', desc: '12 В, 65 Ач, 650 А', descEn: '12 V, 65 Ah, 650 A' },
        { code: 'RID ST3 12-150', desc: '12 В, 150 Ач, 1050 А', descEn: '12 V, 150 Ah, 1,050 A' },
        { code: 'RID ST EFB 12-105', desc: '12 В, 105 Ач, Stop&Go', descEn: '12 V, 105 Ah, Stop&Go' },
      ],
      image: '/product-components.svg',
      officialUrl: 'https://www.rid-battery.com',
    },

    {
      id: 'pzs-forklift',
      categoryId: 'batteries',
      series: 'RID PzS — Тяговые (электропогрузчики)',
      seriesEn: 'RID PzS — Motive Power (Forklifts)',
      name: 'Тяговый аккумулятор PzS для погрузчиков',
      nameEn: 'PzS Motive Power Battery for Forklifts',
      description:
        'Тяговые аккумуляторы с трубчатыми пластинами для электропогрузчиков и напольного транспорта. Низкое внутреннее сопротивление обеспечивает длительные рабочие циклы и снижает нагрев. Совместимы со стандартными зарядными устройствами PzS. Ёмкость 100–1550 Ач на ячейку.',
      descriptionEn:
        'Tubular plate traction batteries for electric forklifts and floor transport. Low internal resistance ensures extended working cycles and reduced heat. Compatible with standard PzS chargers. 100–1,550 Ah per cell.',
      specs: ['2 В / ячейка', '100–1550 Ач', 'Ламели 50–150 Ач', 'Совместимость с зарядниками PzS', 'Срок службы увеличен'],
      specsEn: ['2 V per cell', '100–1,550 Ah', 'Plate groups 50–150 Ah', 'Standard PzS charger compatible', 'Extended service life'],
      articles: [
        { code: '2 PzS-100 L', desc: '2 В, 100 Ач', descEn: '2 V, 100 Ah' },
        { code: '5 PzS-500 L', desc: '2 В, 500 Ач', descEn: '2 V, 500 Ah' },
        { code: '10 PzS-1550 L', desc: '2 В, 1550 Ач', descEn: '2 V, 1,550 Ah' },
      ],
      image: '/product-components.svg',
      officialUrl: 'https://www.rid-battery.com',
    },

    // ─── GENERATORS ──────────────────────────────────────────────────────────

    {
      id: 'genset-deutz',
      categoryId: 'generators',
      series: 'S-Series — Deutz',
      seriesEn: 'S-Series — Deutz Engines',
      name: 'Дизельный генератор RID S-Series (Deutz)',
      nameEn: 'RID S-Series Diesel Genset (Deutz)',
      description:
        'Дизельные генераторные установки мощностью 15–315 кВА на двигателях Deutz. Открытое и бесшумное исполнение. Обслуживание каждые 1000 моточасов. Встроенный АВР по заказу. Мониторинг через систему RID 2000-A (LTE/Ethernet/SMS).',
      descriptionEn:
        'Diesel generator sets 15–315 kVA with Deutz engines. Open skid and silent enclosure versions. Maintenance every 1,000 operating hours. Integrated ATS available. Remote monitoring via RID 2000-A (LTE/Ethernet/SMS).',
      specs: ['15–315 кВА', 'Двигатель: Deutz', 'Открытое / бесшумное', '230/400 В, 50 Гц', 'IP 23, ISO 8528'],
      specsEn: ['15–315 kVA', 'Engine: Deutz', 'Open skid / silent', '230/400 V, 50 Hz', 'IP 23, ISO 8528'],
      articles: [
        { code: 'RID 15 S-Series', desc: '15 кВА, Deutz F3M2011', descEn: '15 kVA, Deutz F3M2011' },
        { code: 'RID 60 S-Series', desc: '60 кВА, Deutz BF4M2011C', descEn: '60 kVA, Deutz BF4M2011C' },
        { code: 'RID 100 S-Series S', desc: '100 кВА, бесшумное исп.', descEn: '100 kVA, silent version' },
      ],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
      featured: true,
    },

    {
      id: 'genset-mitsubishi',
      categoryId: 'generators',
      series: 'E-Series — Mitsubishi (Stage V)',
      seriesEn: 'E-Series — Mitsubishi Engines (Stage V)',
      name: 'Дизельный генератор RID E-Series (Mitsubishi)',
      nameEn: 'RID E-Series Diesel Genset (Mitsubishi)',
      description:
        'Генераторные установки 20–500 кВА на двигателях Mitsubishi соответствие EU Stage V. Открытое и бесшумное исполнение. Применение: промышленность, телеком, коммерческая недвижимость.',
      descriptionEn:
        'Generator sets 20–500 kVA with Mitsubishi engines, EU Stage V emission compliant. Open skid and silent versions. Applications: industry, telecom, commercial property.',
      specs: ['20–500 кВА', 'Двигатель: Mitsubishi', 'EU Stage V', '230/400 В, 50 Гц', 'Открытое / бесшумное'],
      specsEn: ['20–500 kVA', 'Engine: Mitsubishi', 'EU Stage V', '230/400 V, 50 Hz', 'Open skid / silent'],
      articles: [
        { code: 'RID 20 E-SERIES', desc: '20 кВА, Mitsubishi', descEn: '20 kVA, Mitsubishi' },
        { code: 'RID 200 E-SERIES S', desc: '200 кВА, бесшумное', descEn: '200 kVA, silent' },
      ],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-doosan',
      categoryId: 'generators',
      series: 'B-Series — Doosan (Stage V)',
      seriesEn: 'B-Series — Doosan Engines (Stage V)',
      name: 'Дизельный генератор RID B-Series (Doosan)',
      nameEn: 'RID B-Series Diesel Genset (Doosan)',
      description:
        'Генераторные установки 25–500 кВА на двигателях Doosan, соответствие EU Stage V. Открытое и бесшумное исполнение. Применение: строительные площадки, горнодобывающая промышленность, аварийное электроснабжение.',
      descriptionEn:
        'Generator sets 25–500 kVA with Doosan engines, EU Stage V compliant. Open and silent versions. Applications: construction sites, mining, emergency power.',
      specs: ['25–500 кВА', 'Двигатель: Doosan', 'EU Stage V', '230/400 В, 50 Гц', 'Открытое / бесшумное'],
      specsEn: ['25–500 kVA', 'Engine: Doosan', 'EU Stage V', '230/400 V, 50 Hz', 'Open skid / silent'],
      articles: [
        { code: 'RID 25 B-SERIES', desc: '25 кВА, Doosan', descEn: '25 kVA, Doosan' },
        { code: 'RID 250 B-SERIES S', desc: '250 кВА, бесшумное', descEn: '250 kVA, silent' },
      ],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-johndeere',
      categoryId: 'generators',
      series: 'J-Series — John Deere (Stage V)',
      seriesEn: 'J-Series — John Deere Engines (Stage V)',
      name: 'Дизельный генератор RID J-Series (John Deere)',
      nameEn: 'RID J-Series Diesel Genset (John Deere)',
      description:
        'Генераторные установки 50–250 кВА на двигателях John Deere, соответствие EU Stage V. Открытое и бесшумное исполнение.',
      descriptionEn:
        'Generator sets 50–250 kVA with John Deere engines, EU Stage V compliant. Open and silent versions.',
      specs: ['50–250 кВА', 'Двигатель: John Deere', 'EU Stage V', '230/400 В, 50 Гц', 'Открытое / бесшумное'],
      specsEn: ['50–250 kVA', 'Engine: John Deere', 'EU Stage V', '230/400 V, 50 Hz', 'Open skid / silent'],
      articles: [
        { code: 'RID 50 J-SERIES', desc: '50 кВА, John Deere', descEn: '50 kVA, John Deere' },
        { code: 'RID 250 J-SERIES S', desc: '250 кВА, бесшумное', descEn: '250 kVA, silent' },
      ],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-volvo',
      categoryId: 'generators',
      series: 'V-Series — Volvo (Stage V)',
      seriesEn: 'V-Series — Volvo Engines (Stage V)',
      name: 'Дизельный генератор RID V-Series (Volvo)',
      nameEn: 'RID V-Series Diesel Genset (Volvo)',
      description:
        'Генераторные установки 60–500 кВА на двигателях Volvo, соответствие EU Stage V. Открытое и бесшумное исполнение. Применение: объекты с высокими требованиями к надёжности и экологичности.',
      descriptionEn:
        'Generator sets 60–500 kVA with Volvo engines, EU Stage V compliant. Open and silent versions. Applications: sites with high reliability and environmental requirements.',
      specs: ['60–500 кВА', 'Двигатель: Volvo', 'EU Stage V', '230/400 В, 50 Гц', 'Открытое / бесшумное'],
      specsEn: ['60–500 kVA', 'Engine: Volvo', 'EU Stage V', '230/400 V, 50 Hz', 'Open skid / silent'],
      articles: [
        { code: 'RID 60 V-SERIES', desc: '60 кВА, Volvo', descEn: '60 kVA, Volvo' },
        { code: 'RID 400 V-SERIES S', desc: '400 кВА, бесшумное', descEn: '400 kVA, silent' },
      ],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-mtu',
      categoryId: 'generators',
      series: 'G-Series — MTU',
      seriesEn: 'G-Series — MTU Engines',
      name: 'Дизельный генератор RID G-Series (MTU)',
      nameEn: 'RID G-Series Diesel Genset (MTU)',
      description:
        'Мощные генераторные установки на двигателях MTU. Применение: крупные промышленные объекты, дата-центры, нефтегазовая отрасль.',
      descriptionEn:
        'High-power generator sets with MTU engines. Applications: large industrial facilities, data centres, oil & gas.',
      specs: ['Двигатель: MTU', '230/400 В, 50 Гц', 'Высокая мощность', 'Открытое / бесшумное', 'Индивидуальные решения'],
      specsEn: ['Engine: MTU', '230/400 V, 50 Hz', 'High output', 'Open skid / silent', 'Custom solutions'],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-yanmar',
      categoryId: 'generators',
      series: 'Y-Series — Yanmar',
      seriesEn: 'Y-Series — Yanmar Engines',
      name: 'Дизельный генератор RID Y-Series (Yanmar)',
      nameEn: 'RID Y-Series Diesel Genset (Yanmar)',
      description:
        'Компактные и надёжные генераторные установки малой и средней мощности на двигателях Yanmar. Экономичное решение для коммерческих и промышленных объектов.',
      descriptionEn:
        'Compact and reliable small-to-medium power generator sets with Yanmar engines. Cost-effective solution for commercial and industrial sites.',
      specs: ['Двигатель: Yanmar', '230/400 В, 50 Гц', 'Компактные габариты', 'Открытое / бесшумное', 'Низкие эксплуатационные расходы'],
      specsEn: ['Engine: Yanmar', '230/400 V, 50 Hz', 'Compact footprint', 'Open skid / silent', 'Low operating costs'],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
    },

    {
      id: 'genset-telecom',
      categoryId: 'generators',
      series: 'Telecom Genset — Телеком',
      seriesEn: 'Telecom Genset',
      name: 'Телеком-генератор RID',
      nameEn: 'RID Telecom Diesel Generator',
      description:
        'Специализированные дизельные генераторы для телекоммуникационных объектов. Расширенный бак топлива, бесшумное исполнение, мониторинг через LTE/SNMP. Индивидуальная комплектация под задачи оператора.',
      descriptionEn:
        'Specialised diesel generators for telecom sites. Extended fuel tank, silent enclosure, LTE/SNMP monitoring. Custom configuration for operator requirements.',
      specs: ['Телеком-исполнение', 'Расширенный бак', 'LTE / SNMP мониторинг', 'Бесшумный кожух', 'Индивидуальная комплектация'],
      specsEn: ['Telecom version', 'Extended fuel tank', 'LTE / SNMP monitoring', 'Acoustic enclosure', 'Custom configuration'],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.rid-gensets.com',
      featured: true,
    },
  ],
};

export default rid;
