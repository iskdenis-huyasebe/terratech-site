import type { Brand } from '../types';

const hitec: Brand = {
  id: 'hitec',
  name: 'Hitec',
  country: 'Израиль',
  countryEn: 'Israel',
  color: '#0369A1',
  logo: 'https://hitec-ups.com/wp-content/uploads/2020/01/hitec-logo.png',
  tagline: 'ИБП',
  taglineEn: 'UPS',
  description:
    'Источники бесперебойного питания онлайн-типа для критически важных объектов инфраструктуры.',
  descriptionEn:
    'Online UPS systems for mission-critical infrastructure facilities.',
  officialUrl: 'https://hitec-ups.com/',
  products: [
    {
      id: 'online-ups',
      categoryId: 'ups',
      series: 'ИБП онлайн-типа',
      seriesEn: 'Online UPS',
      name: 'Источник бесперебойного питания (двойное преобразование)',
      nameEn: 'Online Double-Conversion UPS',
      description:
        'ИБП онлайн-типа двойного преобразования для критически важных объектов: серверных, производств, медицинских учреждений. SNMP-мониторинг.',
      descriptionEn:
        'Online double-conversion UPS for mission-critical facilities: server rooms, manufacturing, medical institutions. SNMP monitoring.',
      specs: ['1–800 кВА', 'Онлайн (двойное преобразование)', 'КПД до 96%', 'SNMP мониторинг', 'Модульная архитектура'],
      specsEn: ['1–800 kVA', 'Online (double conversion)', 'Efficiency up to 96%', 'SNMP monitoring', 'Modular architecture'],
      image: '/product-rack.svg',
      officialUrl: 'https://hitec-ups.com/',
      featured: true,
    },
  ],
};

export default hitec;
