'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { brands, allProducts } from '@/data';
import { categories } from '@/data/categories';

export default function ProductsCatalog() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  const [brand, setBrand] = useState('all');
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const usedCategories = useMemo(() => {
    const ids = new Set(allProducts.map((p) => p.categoryId));
    return categories.filter((c) => ids.has(c.id));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts.filter((p) => {
      if (brand !== 'all' && p.brand.id !== brand) return false;
      if (category !== 'all' && p.categoryId !== category) return false;
      if (q) {
        const hay = `${p.name} ${p.nameEn} ${p.series} ${p.seriesEn} ${p.brand.name} ${(p.articles ?? []).map((a) => a.code).join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [brand, category, query]);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#05070E] pt-32 pb-16 relative overflow-hidden">
        <div className="orb orb-a w-[500px] h-[500px] -top-32 right-0"></div>
        <div className="container-main relative z-10">
          <p className="text-[#6FA0E0] text-xs font-semibold uppercase tracking-[0.16em] mb-4">
            {isRu ? 'Каталог оборудования' : 'Equipment Catalog'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 font-extrabold">
            {isRu ? 'Продукция' : 'Products'}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {isRu
              ? 'Официальный поставщик Rittal, ZPAS, Phoenix Contact, Legrand, Weiss и Hitec. Поставка в Казахстан, Узбекистан, Грузию и страны СНГ.'
              : 'Authorized distributor of Rittal, ZPAS, Phoenix Contact, Legrand, Weiss and Hitec. Delivery to Kazakhstan, Uzbekistan, Georgia and CIS countries.'}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#0A1628] border-y border-white/10 sticky top-[80px] z-40">
        <div className="container-main py-4 space-y-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isRu ? 'Поиск по названию, серии, артикулу…' : 'Search by name, series, article…'}
            className="w-full md:max-w-sm bg-white/[0.06] border border-white/15 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#3E72C7]"
          />
          <div className="flex flex-wrap gap-1.5">
            <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
              {isRu ? 'Все категории' : 'All categories'}
            </FilterChip>
            {usedCategories.map((c) => (
              <FilterChip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {isRu ? c.label : c.labelEn}
              </FilterChip>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            <FilterChip subtle active={brand === 'all'} onClick={() => setBrand('all')}>
              {isRu ? 'Все бренды' : 'All brands'}
            </FilterChip>
            {brands.map((b) => (
              <FilterChip key={b.id} subtle active={brand === b.id} onClick={() => setBrand(b.id)}>
                {b.name}
              </FilterChip>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-[#05070E]">
        <div className="container-main">
          <p className="text-white/40 text-sm mb-8">
            {isRu ? `Показано: ${filtered.length} позиций` : `Showing: ${filtered.length} items`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <Link
                key={`${p.brand.id}-${p.id}`}
                href={`/${locale}/products/${p.brand.id}/${p.id}`}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E72C7]/50"
              >
                <div className="relative h-44 overflow-hidden bg-[#0A1628]">
                  <img
                    src={p.image}
                    alt={isRu ? p.name : p.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070E]/80 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white shadow-sm"
                    style={{ background: p.brand.color }}
                  >
                    {p.brand.name}
                  </span>
                  {p.featured && (
                    <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-[#3E72C7] px-2 py-0.5 rounded shadow-sm">
                      {isRu ? 'Топ' : 'Top'}
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium mb-2" style={{ color: p.brand.color }}>
                    {isRu ? p.series : p.seriesEn}
                  </span>
                  <h3 className="font-display text-lg text-white mb-3 leading-snug group-hover:text-[#6FA0E0] transition-colors">
                    {isRu ? p.name : p.nameEn}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {(isRu ? p.specs : p.specsEn).slice(0, 3).map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/65">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-5 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6FA0E0]">
                    {isRu ? 'Подробнее' : 'Details'}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-white/50 text-center py-16">
              {isRu ? 'Ничего не найдено. Сбросьте фильтры или напишите нам — поставим под заказ.' : 'Nothing found. Reset filters or contact us — we supply on request.'}
            </p>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#3E72C7]/15 to-[#1F4E8C]/10 border border-[#3E72C7]/30 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
                {isRu ? 'Не нашли нужную позицию?' : "Can't find what you need?"}
              </h2>
              <p className="text-white/55 text-sm">
                {isRu
                  ? 'Поставляем любое оборудование из каталогов наших партнёров'
                  : 'We supply any equipment from our partners’ catalogs'}
              </p>
            </div>
            <Link href={`/${locale}/contacts`} className="btn-primary whitespace-nowrap">
              {isRu ? 'Написать нам' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({
  active,
  subtle,
  onClick,
  children,
}: {
  active: boolean;
  subtle?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const base = 'text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all';
  if (active) {
    return (
      <button onClick={onClick} className={`${base} bg-[#3E72C7] text-white border-[#3E72C7]`}>
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${base} bg-white/[0.04] ${subtle ? 'text-white/55' : 'text-white/70'} border-white/15 hover:border-[#3E72C7]/50 hover:text-white`}
    >
      {children}
    </button>
  );
}
