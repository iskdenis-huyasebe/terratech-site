import type { Brand } from '../types';

const weiss: Brand = {
  id: 'weiss',
  name: 'Weiss',
  country: 'Германия',
  countryEn: 'Germany',
  color: '#4338CA',
  logo: 'https://www.weiss-dbs.com/wp-content/uploads/2019/10/weiss-logo.png',
  tagline: 'ЦОД',
  taglineEn: 'Data Centers',
  description:
    'Фальшполы и комплексные инфраструктурные решения для дата-центров и серверных помещений.',
  descriptionEn:
    'Raised floors and comprehensive infrastructure solutions for data centers and server rooms.',
  officialUrl: 'https://www.weiss-dbs.com/',
  products: [
    {
      id: 'rd',
      categoryId: 'floor',
      series: 'Серия RD',
      seriesEn: 'RD Series',
      name: 'Фальшпол RD (высокая нагрузка)',
      nameEn: 'RD Raised Floor (High Load)',
      description:
        'Системы поднятых полов для дата-центров с нагрузкой до 1500 кг/м². Антистатическое покрытие, регулируемые опоры высотой 150–1000 мм. Соответствуют стандартам ЦОД Tier III–IV.',
      descriptionEn:
        'Raised floor systems for data centers with load up to 1500 kg/m². Anti-static surface, adjustable pedestals 150–1000 mm. Compliant with Tier III–IV data center standards.',
      specs: ['До 1500 кг/м²', 'Высота: 150–1000 мм', 'Размер плиты: 600×600 мм', 'Антистатика < 10⁶ Ом', 'EN 12825'],
      specsEn: ['Up to 1500 kg/m²', 'Height: 150–1000 mm', 'Tile: 600×600 mm', 'Anti-static < 10⁶ Ω', 'EN 12825'],
      image: '/product-floor.svg',
      officialUrl: 'https://www.weiss-dbs.com/',
      featured: true,
    },
  ],
};

export default weiss;
