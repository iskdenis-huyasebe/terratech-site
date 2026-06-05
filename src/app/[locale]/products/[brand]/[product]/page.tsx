import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBrand, getProduct, productParams } from '@/data';
import { categoryById } from '@/data/categories';

export function generateStaticParams() {
  return productParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string; product: string }>;
}): Promise<Metadata> {
  const { locale, brand, product } = await params;
  const b = getBrand(brand);
  const p = getProduct(brand, product);
  if (!b || !p) return {};
  const isRu = locale === 'ru';
  return {
    title: isRu ? `${p.name} — ${b.name} | Terratech` : `${p.nameEn} — ${b.name} | Terratech`,
    description: isRu ? p.description : p.descriptionEn,
    alternates: { canonical: `https://www.terradstr.com/${locale}/products/${b.id}/${p.id}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string; product: string }>;
}) {
  const { locale, brand, product } = await params;
  const b = getBrand(brand);
  const p = getProduct(brand, product);
  if (!b || !p) notFound();
  const isRu = locale === 'ru';
  const cat = categoryById(p.categoryId);
  const related = b.products.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-[#05070E]">
        {/* Breadcrumb */}
        <div className="container-main pt-28 pb-2">
          <nav className="flex items-center gap-2 text-sm text-white/45 flex-wrap">
            <Link href={`/${locale}/products`} className="hover:text-white">{isRu ? 'Каталог' : 'Catalog'}</Link>
            <span>/</span>
            <Link href={`/${locale}/products/${b.id}`} className="hover:text-white">{b.name}</Link>
            <span>/</span>
            <span className="text-white/70">{isRu ? p.name : p.nameEn}</span>
          </nav>
        </div>

        {/* Main */}
        <section className="container-main py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1628] aspect-[4/3] lg:sticky lg:top-28">
            <img src={p.image} alt={isRu ? p.name : p.nameEn} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: b.color }}>{b.name}</span>
          </div>

          {/* Info */}
          <div>
            <Link href={`/${locale}/products/${b.id}`} className="text-xs font-semibold uppercase tracking-[0.14em] mb-3 inline-block" style={{ color: b.color }}>
              {isRu ? p.series : p.seriesEn}
            </Link>
            <h1 className="font-display text-3xl md:text-4xl text-white font-extrabold mb-4">{isRu ? p.name : p.nameEn}</h1>
            <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/70 mb-6">
              {isRu ? cat.label : cat.labelEn}
            </span>
            <p className="text-white/65 text-base leading-relaxed mb-8">{isRu ? p.description : p.descriptionEn}</p>

            {/* Specs */}
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">{isRu ? 'Характеристики' : 'Specifications'}</h2>
            <ul className="divide-y divide-white/10 border-y border-white/10 mb-8">
              {(isRu ? p.specs : p.specsEn).map((s) => (
                <li key={s} className="py-2.5 text-sm text-white/75">{s}</li>
              ))}
            </ul>

            {/* Articles */}
            {p.articles && p.articles.length > 0 && (
              <>
                <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">{isRu ? 'Артикулы' : 'Article numbers'}</h2>
                <div className="rounded-xl border border-white/10 overflow-hidden mb-8">
                  {p.articles.map((a, i) => (
                    <div key={a.code} className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${i % 2 ? 'bg-white/[0.02]' : ''}`}>
                      <span className="font-mono text-[#6FA0E0]">{a.code}</span>
                      <span className="text-white/60 text-right">{isRu ? a.desc : a.descEn}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/contacts`} className="btn-primary">
                {isRu ? 'Запросить КП' : 'Request Quote'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              {p.datasheet && (
                <a href={p.datasheet} target="_blank" rel="noopener" className="btn-secondary">
                  {isRu ? 'Даташит (PDF)' : 'Datasheet (PDF)'}
                </a>
              )}
              {p.officialUrl && (
                <a href={p.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/45 hover:text-white text-sm px-2 transition-colors">
                  {isRu ? 'На сайте производителя ↗' : 'Manufacturer page ↗'}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section pt-6">
            <div className="container-main">
              <h2 className="font-display text-2xl text-white mb-8">{isRu ? `Ещё от ${b.name}` : `More from ${b.name}`}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link key={r.id} href={`/${locale}/products/${b.id}/${r.id}`} className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E72C7]/50">
                    <div className="relative h-40 overflow-hidden bg-[#0A1628]">
                      <img src={r.image} alt={isRu ? r.name : r.nameEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070E]/80 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base text-white leading-snug group-hover:text-[#6FA0E0] transition-colors">{isRu ? r.name : r.nameEn}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
