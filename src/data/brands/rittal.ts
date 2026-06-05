import type { Brand } from '../types';

const rittal: Brand = {
  id: 'rittal',
  name: 'Rittal',
  country: 'Германия',
  countryEn: 'Germany',
  color: '#1F6FB2',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rittal_logo.svg/320px-Rittal_logo.svg.png',
  tagline: 'Лидер рынка',
  taglineEn: 'Market Leader',
  description:
    'Шкафы автоматики, серверные стойки, системы климатизации и инфраструктура ЦОД для промышленных объектов и дата-центров.',
  descriptionEn:
    'Automation cabinets, server racks, climate control systems and data center infrastructure for industrial facilities and data centres.',
  officialUrl: 'https://www.rittal.com/',
  products: [
    {
      id: 'vx25',
      categoryId: 'enclosures',
      series: 'VX25 — Шкафная система',
      seriesEn: 'VX25 — Baying Enclosure System',
      name: 'Шкаф секционируемый VX25',
      nameEn: 'VX25 Baying Enclosure',
      description:
        'Флагманская система Rittal для построения распределительных устройств любой сложности. Доступ со всех сторон, монтаж без инструментов, встроенная система заземления.',
      descriptionEn:
        "Rittal's flagship system for all switchgear configurations. Accessible from all sides, tool-free mounting, integrated earthing.",
      specs: ['Ширина: 600–1200 мм', 'Высота: 1200–2200 мм', 'Глубина: 400–800 мм', 'IP55 / IP66', 'RAL 7035 / RAL 9005'],
      specsEn: ['Width: 600–1200 mm', 'Height: 1200–2200 mm', 'Depth: 400–800 mm', 'IP55 / IP66', 'RAL 7035 / RAL 9005'],
      articles: [
        { code: '8615.000', desc: '600×500×1200', descEn: '600×500×1200' },
        { code: '8815.000', desc: '800×500×1200', descEn: '800×500×1200' },
        { code: '8215.000', desc: '1200×500×1200', descEn: '1200×500×1200' },
      ],
      image: '/rittal/rittal-vx25.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/vx25/',
      featured: true,
    },
    {
      id: 'vx-se',
      categoryId: 'enclosures',
      series: 'VX SE — Отдельностоящий шкаф',
      seriesEn: 'VX SE — Free-standing Enclosure',
      name: 'Шкаф отдельностоящий VX SE',
      nameEn: 'VX SE Free-standing Enclosure',
      description:
        'Система для одиночных применений шириной до 1800 мм. Общий диапазон аксессуаров с VX25. Исполнение из нержавеющей стали под заказ.',
      descriptionEn:
        'System for standalone applications up to 1800 mm wide. Shares full accessory range with VX25. Stainless steel version available on request.',
      specs: ['Ширина: 600–1800 мм', 'IP55 / IP66 / NEMA 4', 'RAL 7035', 'Нержавеющая сталь', 'IEC 62208'],
      specsEn: ['Width: 600–1800 mm', 'IP55 / IP66 / NEMA 4', 'RAL 7035', 'Stainless steel option', 'IEC 62208'],
      articles: [{ code: '8886 / 8887', desc: 'серия IP66 / NEMA 4', descEn: '8886/8887 series, IP66/NEMA 4' }],
      image: '/rittal/rittal-vx25.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/vx25/',
    },
    {
      id: 'ax',
      categoryId: 'enclosures',
      series: 'AX — Компактный корпус',
      seriesEn: 'AX — Compact Enclosure',
      name: 'Компактный корпус AX',
      nameEn: 'AX Compact Enclosure',
      description:
        'Настенные корпуса для монтажа вне щитовых помещений. Дверь переворачивается на 180°, уплотнение PU по периметру. Варианты: листовая сталь, нержавеющая сталь, пластик.',
      descriptionEn:
        'Wall-mounted enclosures for installation outside panel rooms. Door reversible 180°, all-round PU seal. Options: sheet steel, stainless steel, plastic.',
      specs: ['300×210 — 800×600 мм', 'IP66 / NEMA 4X', 'UL / cUL', 'RAL 7035', 'Петли 180°'],
      specsEn: ['300×210 — 800×600 mm', 'IP66 / NEMA 4X', 'UL / cUL', 'RAL 7035', '180° hinges'],
      articles: [{ code: '1045.000', desc: 'от 300×300×210', descEn: 'from 300×300×210' }],
      image: '/rittal/rittal-ax.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/ax/',
    },
    {
      id: 'vx-it',
      categoryId: 'racks',
      series: 'VX IT — Серверная стойка',
      seriesEn: 'VX IT — Network/Server Rack',
      name: 'Серверная стойка VX IT',
      nameEn: 'VX IT Server Rack',
      description:
        'Стойки для сетевой инфраструктуры, Edge и ЦОД. Алюминиевая фронтальная дверь (перфорация 85%), стеклянная или перфорированная задняя.',
      descriptionEn:
        'Racks for network infrastructure, edge and data centres. Aluminium front door (85% perforation), glass or vented rear.',
      specs: ['24U / 42U / 47U', 'Ширина 800 мм', 'Глубина 800–1200 мм', 'Нагрузка до 1500 кг', 'UL / cUL'],
      specsEn: ['24U / 42U / 47U', 'Width 800 mm', 'Depth 800–1200 mm', 'Load up to 1500 kg', 'UL / cUL'],
      articles: [
        { code: '5303.114', desc: '24U 800×1000×1200', descEn: '24U 800×1000×1200' },
        { code: '5329.111', desc: '42U 800×1000×2000', descEn: '42U 800×1000×2000' },
      ],
      image: '/rittal/rittal-vx-it.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/it-infrastructure/server-racks/',
      featured: true,
    },
    {
      id: 'lcp-dx',
      categoryId: 'climate',
      series: 'LCP DX — Жидкостное охлаждение',
      seriesEn: 'LCP DX — Liquid Cooling Package',
      name: 'Жидкостный пакет охлаждения LCP DX',
      nameEn: 'Liquid Cooling Package LCP DX',
      description:
        'In-row охлаждение ЦОД. Забирает тёплый воздух сзади стоек, подаёт холодный спереди. EC-вентиляторы, инверторный компрессор, SNMP-мониторинг, интеграция в RiZone.',
      descriptionEn:
        'In-row data centre cooling. Draws warm air from rear of racks, delivers cool air to the front. EC fans, inverter compressor, SNMP monitoring, RiZone integration.',
      specs: ['До 25 кВт охлаждения', 'EC-вентиляторы', 'R-410A / фреон', 'SNMP / RiZone', 'IP 20'],
      specsEn: ['Up to 25 kW cooling', 'EC fan technology', 'R-410A refrigerant', 'SNMP / RiZone', 'IP 20'],
      image: '/rittal/rittal-vx-it.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/it-infrastructure/cooling/',
    },
    {
      id: 'blue-e-plus',
      categoryId: 'climate',
      series: 'Blue e+ — Кондиционер шкафа',
      seriesEn: 'Blue e+ — Enclosure Cooling Unit',
      name: 'Кондиционер Blue e+ (настенный/крышный)',
      nameEn: 'Blue e+ Wall/Roof Cooling Unit',
      description:
        'Энергоэффективное охлаждение щитов с тепловым насосом. КПД до 75% выше предыдущих серий. IoT-готовность, мониторинг через Rittal Connect.',
      descriptionEn:
        'Energy-efficient enclosure cooling with heat pump technology. Up to 75% more efficient than previous series. IoT-ready, monitoring via Rittal Connect.',
      specs: ['1300–5800 Вт', 'КПД +75% vs Blue e', 'Настенный / крышный', 'IoT / Rittal Connect', 'EN 14511'],
      specsEn: ['1300–5800 W', 'Up to 75% more efficient', 'Wall / roof mount', 'IoT / Rittal Connect', 'EN 14511'],
      articles: [{ code: '3185.530', desc: 'настенный 1600 Вт, RAL 9007', descEn: 'wall-mount 1600 W, RAL 9007' }],
      image: '/rittal/rittal-toptherm.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/',
    },
    {
      id: 'ax-ss',
      categoryId: 'enclosures',
      series: 'AX — Нержавеющая сталь',
      seriesEn: 'AX — Stainless Steel',
      name: 'Корпус AX нержавеющая сталь',
      nameEn: 'AX Stainless Steel Enclosure',
      description:
        'Компактные корпуса из нержавеющей стали 1.4301 (AISI 304) для пищевой, химической и фармацевтической промышленности. Уплотнение PU по периметру, петли 180°.',
      descriptionEn:
        'Compact enclosures in stainless steel 1.4301 (AISI 304) for food, chemical and pharmaceutical industries. All-round PU seal, 180° hinges.',
      specs: ['300×210 — 800×600 мм', 'IP66 / NEMA 4X', 'Нержавеющая сталь 1.4301', 'UL / cUL', 'RAL 7035 / полир.'],
      specsEn: ['300×210 — 800×600 mm', 'IP66 / NEMA 4X', 'Stainless steel 1.4301', 'UL / cUL', 'RAL 7035 / polished'],
      articles: [{ code: '1045.600', desc: 'от 300×300×210 мм', descEn: 'from 300×300×210 mm' }],
      image: '/rittal/rittal-ax.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/ax/',
    },
    {
      id: 'outdoor',
      categoryId: 'outdoor',
      series: 'Уличные шкафы — Outdoor',
      seriesEn: 'Outdoor Enclosures',
      name: 'Уличный шкаф (напольный / настенный)',
      nameEn: 'Outdoor Enclosure (floor / wall)',
      description:
        'Шкафы из алюминия AlMg3 для уличной установки. Крыша с навесом, жалюзийные решётки для вентиляции, кронштейны для транспортировки краном. Применения: энергетика, водоснабжение, телеком.',
      descriptionEn:
        'AlMg3 aluminium enclosures for outdoor installation. Roof projection, louvred grilles for ventilation, crane transport brackets. Applications: energy, water, telecom.',
      specs: ['Алюминий AlMg3', 'IP 55 / NEMA 3R', 'RAL 7035, UV-стойкий', 'Крыша с навесом', 'Ширина 600–1200 мм'],
      specsEn: ['AlMg3 aluminium', 'IP 55 / NEMA 3R', 'RAL 7035, UV-resistant', 'Roof projection', 'Width 600–1200 mm'],
      image: '/rittal/rittal-outdoor.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/outdoor/',
    },
    {
      id: 'hd',
      categoryId: 'enclosures',
      series: 'HD — Hygienic Design',
      seriesEn: 'HD — Hygienic Design',
      name: 'Шкаф Hygienic Design (пищевая пром.)',
      nameEn: 'Hygienic Design Enclosure (food industry)',
      description:
        'Корпуса для пищевой и фармацевтической промышленности. Бесшовное силиконовое уплотнение (синее — легко отличить от продуктов), скрытые петли, гексагональные крепежи. Выдерживают мойку под давлением.',
      descriptionEn:
        'Enclosures for food and pharmaceutical industries. Seamless silicone seal (blue — easily distinguished from food), hidden hinges, hexagonal fasteners. Withstand high-pressure cleaning.',
      specs: ['IP 66', 'Нержавеющая сталь', 'Силиконовое уплотнение', 'Класс чистоты HD', 'Настенные / напольные'],
      specsEn: ['IP 66', 'Stainless steel', 'Silicone seal', 'HD cleanliness class', 'Wall / floor mount'],
      image: '/product-wallcab.svg',
      officialUrl: 'https://www.rittal.com/lt-en/products/enclosures/hygienic-design/',
    },
    {
      id: 'toptherm-wall',
      categoryId: 'climate',
      series: 'TopTherm Blue e — Настенный',
      seriesEn: 'TopTherm Blue e — Wall-mounted',
      name: 'Кондиционер настенный TopTherm Blue e',
      nameEn: 'TopTherm Blue e Wall-mounted Cooling Unit',
      description:
        'Настенные кондиционеры для промышленных шкафов. Нано-покрытие конденсатора для защиты от агрессивных сред.',
      descriptionEn:
        'Wall-mounted cooling units for industrial enclosures. Nano-coated condenser for harsh environments.',
      specs: ['300–2500 Вт', 'IP34 снаружи / IP54 внутри', 'Нано-конденсатор', 'RAL 7035 / нерж. ст.', 'DIN EN 14511'],
      specsEn: ['300–2500 W', 'IP34 external / IP54 internal', 'Nano-coated condenser', 'RAL 7035 / SS', 'DIN EN 14511'],
      articles: [
        { code: '3303.500', desc: '500 Вт', descEn: '500 W' },
        { code: '3332.210', desc: '1500 Вт', descEn: '1500 W' },
        { code: '3340.210', desc: '2500 Вт', descEn: '2500 W' },
      ],
      image: '/rittal/rittal-toptherm.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/cooling-units/',
      featured: true,
    },
    {
      id: 'toptherm-roof',
      categoryId: 'climate',
      series: 'TopTherm Blue e — Крышный',
      seriesEn: 'TopTherm Blue e — Roof-mounted',
      name: 'Кондиционер крышный TopTherm Blue e',
      nameEn: 'TopTherm Blue e Roof-mounted Cooling Unit',
      description: 'Крышные кондиционеры для установки поверх шкафа. Нано-покрытие конденсатора.',
      descriptionEn: 'Roof-mounted cooling units installed on top of enclosures. Nano-coated condenser.',
      specs: ['500–4000 Вт', 'IP34 снаружи / IP54 внутри', 'Установка на крышу шкафа', 'Нано-конденсатор', 'DIN EN 14511'],
      specsEn: ['500–4000 W', 'IP34 external / IP54 internal', 'Roof mounting', 'Nano-coated condenser', 'DIN EN 14511'],
      articles: [
        { code: '3382.500', desc: '500 Вт', descEn: '500 W' },
        { code: '3393.210', desc: '3000 Вт', descEn: '3000 W' },
        { code: '3395.210', desc: '4000 Вт', descEn: '4000 W' },
      ],
      image: '/rittal/rittal-toptherm.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/cooling-units/',
    },
    {
      id: 'outdoor-cooling',
      categoryId: 'climate',
      series: 'Blue e+ Outdoor — Уличный кондиционер',
      seriesEn: 'Blue e+ Outdoor — Outdoor Cooling Unit',
      name: 'Кондиционер уличный Blue e+ Outdoor',
      nameEn: 'Blue e+ Outdoor Cooling Unit',
      description:
        'Кондиционер для уличных шкафов. Алюминий с UV-стойким покрытием. Технология теплового насоса — экономия энергии до 75%. Испаритель конденсата встроен.',
      descriptionEn:
        'Cooling unit for outdoor enclosures. Aluminium with UV-resistant coating. Heat pump technology — up to 75% energy savings. Integrated condensate evaporator.',
      specs: ['IP 56 / UL Type 4/3R/12', 'Алюминий AlMg3', 'Тепловой насос', 'Экономия до 75%', 'RAL 7035 UV-стойкий'],
      specsEn: ['IP 56 / UL Type 4/3R/12', 'AlMg3 aluminium', 'Heat pump technology', 'Up to 75% energy savings', 'RAL 7035 UV-resistant'],
      image: '/rittal/rittal-blue-eplus-outdoor.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/cooling-units/',
    },
    {
      id: 'fan-filter',
      categoryId: 'climate',
      series: 'Вентиляторные агрегаты',
      seriesEn: 'Fan-and-Filter Units',
      name: 'Вентиляторный агрегат с фильтром',
      nameEn: 'Fan-and-Filter Unit',
      description:
        'Вентиляция шкафа для умеренных тепловых нагрузок. Smart-вентиляторы с EC-мотором — управление скоростью по температуре.',
      descriptionEn:
        'Enclosure ventilation for moderate heat loads. Smart fans with EC motor — speed control by temperature.',
      specs: ['20–1080 м³/ч', 'IP54', 'EC Smart-вентилятор', 'RAL 7035', 'Фильтр заменяемый'],
      specsEn: ['20–1080 m³/h', 'IP54', 'EC Smart fan', 'RAL 7035', 'Replaceable filter'],
      articles: [
        { code: '3237.100', desc: '20 м³/ч', descEn: '20 m³/h' },
        { code: '3238.100', desc: '55 м³/ч', descEn: '55 m³/h' },
      ],
      image: '/product-cooling.svg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/',
    },
    {
      id: 'heater',
      categoryId: 'accessories',
      series: 'Обогреватели шкафов',
      seriesEn: 'Enclosure Heaters',
      name: 'Обогреватель шкафа PTC',
      nameEn: 'PTC Enclosure Heater',
      description:
        'PTC-обогреватели для защиты от конденсата и поддержания температуры в холодных помещениях и на улице. Алюминий анодированный, класс защиты II. Рекомендуется с термостатом.',
      descriptionEn:
        'PTC heaters for condensation protection and temperature maintenance in cold and outdoor environments. Anodised aluminium, protection class II. Recommended with thermostat.',
      specs: ['10–150 Вт', 'IP 20', 'Алюминий анодированный', 'Класс защиты II', 'DIN-рейка / монтаж'],
      specsEn: ['10–150 W', 'IP 20', 'Anodised aluminium', 'Protection class II', 'DIN rail / direct mount'],
      articles: [{ code: '3105.310–3105.370', desc: '10–150 Вт', descEn: '10–150 W' }],
      image: '/rittal/rittal-heater.jpg',
      officialUrl: 'https://www.rittal.com/lt-en/products/climate-control/',
    },
  ],
};

export default rittal;
