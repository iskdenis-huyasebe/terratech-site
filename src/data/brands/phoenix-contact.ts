import type { Brand } from '../types';

const phoenixContact: Brand = {
  id: 'phoenix-contact',
  name: 'Phoenix Contact',
  country: 'Германия',
  countryEn: 'Germany',
  color: '#1F6FB2',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Phoenix_Contact_Logo.svg/320px-Phoenix_Contact_Logo.svg.png',
  tagline: 'Автоматизация',
  taglineEn: 'Automation',
  description:
    'Клеммные блоки, промышленные реле, блоки питания и коннекторы для промышленной автоматизации.',
  descriptionEn:
    'Terminal blocks, industrial relays, power supplies and connectors for industrial automation.',
  officialUrl: 'https://www.phoenixcontact.com/en-lt/',
  products: [
    {
      id: 'clipline',
      categoryId: 'components',
      series: 'Серия CLIPLINE complete',
      seriesEn: 'CLIPLINE complete Series',
      name: 'Клеммные блоки CLIPLINE',
      nameEn: 'CLIPLINE Terminal Blocks',
      description:
        'Полная система монтажа на DIN-рейку: пружинные и винтовые клеммы, маркировка, мосты, концевые упоры. Сечение проводов от 0,08 до 185 мм².',
      descriptionEn:
        'Complete DIN rail mounting system: spring-clamp and screw terminals, marking, bridges, end stops. Wire cross-section from 0.08 to 185 mm².',
      specs: ['0,08 — 185 мм²', '24 / 48 / 250 VDC', 'UL / CE / CSA', 'Пружинный / винтовой зажим', 'DIN EN 60947-7'],
      specsEn: ['0.08 — 185 mm²', '24 / 48 / 250 VDC', 'UL / CE / CSA', 'Spring / screw clamp', 'DIN EN 60947-7'],
      image: '/product-components.svg',
      officialUrl: 'https://www.phoenixcontact.com/en-lt/',
    },
    {
      id: 'quint-power',
      categoryId: 'components',
      series: 'Серия QUINT POWER',
      seriesEn: 'QUINT POWER Series',
      name: 'Блоки питания QUINT POWER',
      nameEn: 'QUINT POWER Power Supplies',
      description:
        'Промышленные источники питания DIN-рейка с активным мониторингом нагрузки. Защита от перегрузки, встроенный SFB (Selective Fuse Breaking). КПД до 95,5%.',
      descriptionEn:
        'Industrial DIN rail power supplies with active load monitoring. Overload protection, integrated SFB (Selective Fuse Breaking). Efficiency up to 95.5%.',
      specs: ['24 VDC (5–40 А)', 'КПД: 95,5%', 'SFB-технология', 'MTBF > 500 000 ч', 'IEC 62368-1'],
      specsEn: ['24 VDC (5–40 A)', 'Efficiency: 95.5%', 'SFB technology', 'MTBF > 500,000 h', 'IEC 62368-1'],
      image: '/product-components.svg',
      officialUrl: 'https://www.phoenixcontact.com/en-lt/',
    },
  ],
};

export default phoenixContact;
