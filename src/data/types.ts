// Catalog data model — content lives in src/data/brands/*.ts, layout never changes.

export type CategoryId =
  | 'enclosures'   // шкафы и корпусы
  | 'racks'        // серверные стойки
  | 'climate'      // климатизация
  | 'floor'        // фальшполы
  | 'components'   // компоненты щитов
  | 'ups'          // ИБП
  | 'outdoor'      // уличные шкафы
  | 'accessories'  // аксессуары
  | 'batteries'    // аккумуляторы
  | 'generators';  // дизельные генераторы

export interface Article {
  code: string;          // 8615.000
  desc: string;          // RU описание исполнения
  descEn: string;        // EN
}

export interface Product {
  id: string;            // 'rittal-vx25' — уникален в пределах бренда
  categoryId: CategoryId;
  series: string;        // RU «VX25 — Шкафная система»
  seriesEn: string;
  name: string;          // RU полное имя
  nameEn: string;
  description: string;   // RU
  descriptionEn: string; // EN
  specs: string[];       // RU характеристики (пары «параметр: значение» как текст)
  specsEn: string[];     // EN
  articles?: Article[];  // артикулы исполнений (опционально)
  image: string;         // /products/<brand>/<id>.jpg или внешний URL
  datasheet?: string;    // /datasheets/<brand>-<id>.pdf
  officialUrl?: string;  // страница товара на сайте производителя
  featured?: boolean;    // «Топ продаж»
}

export interface Brand {
  id: string;            // 'rittal' — слаг для URL /products/rittal
  name: string;          // 'Rittal'
  country: string;       // RU «Германия»
  countryEn: string;     // 'Germany'
  color: string;         // акцент бренда (бейджи)
  logo: string;          // URL логотипа
  tagline: string;       // RU короткий слоган
  taglineEn: string;
  description: string;   // RU описание бренда
  descriptionEn: string;
  officialUrl: string;   // сайт бренда
  catalogPdf?: string;   // /catalogs/<brand>.pdf — кнопка «Скачать каталог»
  products: Product[];
}
