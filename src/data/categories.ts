import type { CategoryId } from './types';

export interface Category {
  id: CategoryId;
  label: string;    // RU
  labelEn: string;  // EN
  icon: string;     // SVG path (Heroicons-style, stroke)
}

export const categories: Category[] = [
  { id: 'enclosures',  label: 'Шкафы и корпусы',    labelEn: 'Enclosures',      icon: 'M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM12 3.75v16.5M8 8.25h.01M8 12h.01' },
  { id: 'racks',       label: 'Серверные стойки',   labelEn: 'Server Racks',    icon: 'M4.5 3.75h15a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75zM4.5 8.25h15M4.5 12.75h15M7.5 6h.01M7.5 10.5h.01M7.5 15h.01' },
  { id: 'climate',     label: 'Климатизация',       labelEn: 'Climate Control', icon: 'M12 3v18m0-18a3 3 0 00-3 3m3-3a3 3 0 013 3M3 12h18m-18 0a3 3 0 003 3m-3-3a3 3 0 013-3m12 0a3 3 0 013 3m-3-3a3 3 0 00-3 3' },
  { id: 'floor',       label: 'Фальшполы',          labelEn: 'Raised Floors',   icon: 'M3.75 9.75h16.5M3.75 14.25h16.5M6 9.75v4.5M12 9.75v4.5M18 9.75v4.5M3.75 9.75L12 5.25l8.25 4.5' },
  { id: 'components',  label: 'Компоненты щитов',   labelEn: 'Components',      icon: 'M9 3.75v16.5M15 3.75v16.5M3.75 9h16.5M3.75 15h16.5M5.25 3.75h13.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5z' },
  { id: 'ups',         label: 'ИБП',                labelEn: 'UPS',             icon: 'M13.5 3l-7.5 9h6l-1.5 9 7.5-9h-6l1.5-9z' },
  { id: 'outdoor',     label: 'Уличные шкафы',      labelEn: 'Outdoor',         icon: 'M3.75 21h16.5M5.25 21V8.25L12 3.75l6.75 4.5V21M9.75 21v-6h4.5v6' },
  { id: 'accessories', label: 'Аксессуары',         labelEn: 'Accessories',     icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63' },
];

export const categoryById = (id: CategoryId): Category =>
  categories.find((c) => c.id === id) ?? categories[0];
