# Как добавить бренд в каталог

Контент каталога вынесен в слой данных `src/data/`. Вёрстку трогать не нужно —
каталог, страница бренда и страницы товаров строятся автоматически.

## Структура

```
src/data/
  types.ts          типы Brand / Product / Article / CategoryId (не трогаем)
  categories.ts     единая таксономия категорий
  brands/
    rittal.ts       один файл = один бренд (мета + товары)
    ...
  index.ts          список брендов (тут регистрируем новый)
public/
  <brand>/          фото товаров: /public/rittal/rittal-vx25.jpg
  catalogs/         PDF-каталоги брендов: /public/catalogs/rittal.pdf
  datasheets/       PDF-даташиты товаров: /public/datasheets/rittal-vx25.pdf
```

Категории (`categoryId`): `enclosures`, `racks`, `climate`, `floor`,
`components`, `ups`, `outdoor`, `accessories`. Нужна новая — добавить в `categories.ts`.

## Шаги (это делает Claude)

1. Создать `src/data/brands/<brand>.ts` по образцу ниже.
2. Зарегистрировать в `src/data/index.ts`:
   ```ts
   import newbrand from './brands/newbrand';
   export const brands: Brand[] = [rittal, /* … */, newbrand];
   ```
3. Положить логотип, фото товаров в `public/<brand>/`, каталог в `public/catalogs/`.
4. Готово — товары появятся в каталоге, фильтрах, на странице бренда и в sitemap.

## Шаблон файла бренда

```ts
import type { Brand } from '../types';

const newbrand: Brand = {
  id: 'newbrand',                 // слаг для URL /products/newbrand
  name: 'NewBrand',
  country: 'Германия', countryEn: 'Germany',
  color: '#1F6FB2',               // цвет бейджа бренда
  logo: 'https://…/logo.png',
  tagline: 'Автоматизация', taglineEn: 'Automation',
  description: 'RU описание бренда', descriptionEn: 'EN description',
  officialUrl: 'https://…',
  catalogPdf: '/catalogs/newbrand.pdf',   // опционально
  products: [
    {
      id: 'series-x',             // уникален в пределах бренда
      categoryId: 'enclosures',
      series: 'Серия X', seriesEn: 'X Series',
      name: 'Полное имя', nameEn: 'Full name',
      description: 'RU', descriptionEn: 'EN',
      specs: ['Параметр: значение', '…'],
      specsEn: ['Spec: value', '…'],
      articles: [{ code: '1234.000', desc: 'исполнение', descEn: 'variant' }], // опц.
      image: '/newbrand/series-x.jpg',
      datasheet: '/datasheets/newbrand-series-x.pdf',  // опц.
      officialUrl: 'https://…',
      featured: true,             // опц. — бейдж «Топ»
    },
  ],
};

export default newbrand;
```

## Твой процесс

Просто пришли мне **PDF-каталог бренда** (и логотип, если есть) — я извлеку серии,
артикулы, характеристики и даташиты и соберу файл бренда по шаблону выше.
Фото товаров можно брать из каталога, с сайта производителя или сгенерировать.
