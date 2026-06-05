import type { Brand } from '../types';

const zpas: Brand = {
  id: 'zpas',
  name: 'ZPAS',
  country: 'Польша',
  countryEn: 'Poland',
  color: '#0E7C5A',
  logo: 'https://www.zpas.pl/wp-content/uploads/2021/03/zpas-logo.png',
  tagline: 'Корпуса',
  taglineEn: 'Enclosures',
  description:
    'Промышленные шкафы, корпусы и стойки для систем автоматизации и электроснабжения. Широкий выбор размеров, лёгкая адаптация под проект.',
  descriptionEn:
    'Industrial enclosures, cabinets and racks for automation and power supply systems. Wide size range, easy project customization.',
  officialUrl: 'https://www.zpas.pl/en/',
  products: [
    {
      id: 'wz',
      categoryId: 'enclosures',
      series: 'Серия WZ',
      seriesEn: 'WZ Series',
      name: 'Шкаф напольный WZ',
      nameEn: 'WZ Floor Standing Cabinet',
      description:
        'Универсальные напольные шкафы польского производства. Применяются для автоматики, электроснабжения и связи.',
      descriptionEn:
        'Universal floor-standing cabinets manufactured in Poland. Used for automation, power supply and telecom.',
      specs: ['600–1200 мм (ширина)', 'IP54 / IP65', 'RAL 7035 / RAL 9005', 'Двойные двери', 'EN 62208'],
      specsEn: ['600–1200 mm (width)', 'IP54 / IP65', 'RAL 7035 / RAL 9005', 'Double doors', 'EN 62208'],
      image: '/product-cabinet.svg',
      officialUrl: 'https://www.zpas.pl/en/products/cabinets/',
      featured: true,
    },
    {
      id: 'szb',
      categoryId: 'racks',
      series: 'Серия SZB',
      seriesEn: 'SZB Series',
      name: 'Серверная стойка SZB IT',
      nameEn: 'SZB IT Server Rack',
      description:
        'Серверные стойки для оборудования ЦОД. Стеклянная передняя дверь, перфорированная задняя, боковые панели с замком. Полная совместимость с 19" оборудованием.',
      descriptionEn:
        'Server racks for data center equipment. Glass front door, perforated rear, lockable side panels. Full compatibility with 19" equipment.',
      specs: ['600×1000×2000 мм', '42U', 'IP20', 'Нагрузка: 1200 кг', '19" EIA-310'],
      specsEn: ['600×1000×2000 mm', '42U', 'IP20', 'Load: 1200 kg', '19" EIA-310'],
      image: '/product-rack.svg',
      officialUrl: 'https://www.zpas.pl/en/products/rack-cabinets/',
    },
    {
      id: 'wall',
      categoryId: 'enclosures',
      series: 'Серия SWG',
      seriesEn: 'SWG Series',
      name: 'Настенный шкаф SWG',
      nameEn: 'SWG Wall-Mount Enclosure',
      description:
        'Настенные шкафы для монтажа в коридорах, небольших помещениях и точках доступа. Петли съёмные, дно выбивное.',
      descriptionEn:
        'Wall-mount enclosures for corridors, small rooms and access points. Removable hinges, knock-out base.',
      specs: ['450×600 — 600×600 мм', '9U / 12U / 15U', 'IP20', 'Глубина 300–450 мм', 'RAL 9005'],
      specsEn: ['450×600 — 600×600 mm', '9U / 12U / 15U', 'IP20', 'Depth 300–450 mm', 'RAL 9005'],
      image: '/product-wallcab.svg',
      officialUrl: 'https://www.zpas.pl/en/products/wall-cabinets/',
    },
    {
      id: 'outdoor',
      categoryId: 'outdoor',
      series: 'Серия WN',
      seriesEn: 'WN Series',
      name: 'Уличный шкаф WN (термостатированный)',
      nameEn: 'WN Outdoor Thermostated Cabinet',
      description:
        'Шкафы для уличной установки с встроенным обогревом и вентиляцией. Двойные стенки с теплоизоляцией. Применяются на объектах связи, энергетики и транспорта.',
      descriptionEn:
        'Outdoor cabinets with integrated heating and ventilation. Double-skin walls with thermal insulation. Used in telecom, energy and transport facilities.',
      specs: ['IP55 / IP65', 'Рабочая Т°: −40…+55°C', 'Двойная стенка', 'Обогрев встроен', 'IEC 62208'],
      specsEn: ['IP55 / IP65', 'Operating T°: −40…+55°C', 'Double-skin wall', 'Heating built-in', 'IEC 62208'],
      image: '/product-outdoor.svg',
      officialUrl: 'https://www.zpas.pl/en/products/outdoor-cabinets/',
    },
  ],
};

export default zpas;
