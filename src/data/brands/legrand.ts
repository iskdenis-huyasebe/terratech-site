import type { Brand } from '../types';

const legrand: Brand = {
  id: 'legrand',
  name: 'Legrand',
  country: 'Франция',
  countryEn: 'France',
  color: '#1E40AF',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Legrand_logo.svg/320px-Legrand_logo.svg.png',
  tagline: 'Электрика',
  taglineEn: 'Electrical',
  description:
    'Электроустановочные изделия, кабельные лотки, автоматические выключатели и компоненты для щитов.',
  descriptionEn:
    'Wiring devices, cable trays, circuit breakers and switchgear components.',
  officialUrl: 'https://www.legrandgroup.com/en',
  products: [
    {
      id: 'xl3',
      categoryId: 'components',
      series: 'Серия XL³',
      seriesEn: 'XL³ Series',
      name: 'Щит распределительный XL³',
      nameEn: 'XL³ Distribution Board',
      description:
        'Модульная система щитового оборудования Legrand для промышленных и инфраструктурных объектов. Готовые решения для АВР, распределения питания и автоматики.',
      descriptionEn:
        "Legrand's modular switchgear system for industrial and infrastructure facilities. Ready-made solutions for ATS, power distribution and automation.",
      specs: ['160 / 400 / 800 / 4000 А', 'IP30 / IP43 / IP55', 'Медная / алюминиевая шина', 'Готов к АВР', 'IEC 61439'],
      specsEn: ['160 / 400 / 800 / 4000 A', 'IP30 / IP43 / IP55', 'Copper / aluminium busbar', 'ATS ready', 'IEC 61439'],
      image: '/product-components.svg',
      officialUrl: 'https://www.legrandgroup.com/en',
    },
  ],
};

export default legrand;
