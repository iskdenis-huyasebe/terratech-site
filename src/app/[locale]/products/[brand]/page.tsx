import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBrand, brandSlugs } from '@/data';
import { categoryById } from '@/data/categories';

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}): Promise<Metadata> {
  const { locale, brand } = await params;
  const b = getBrand(brand);
  if (!b) return {};
  const isRu = locale === 'ru';
  const title = isRu
    ? `${b.name} — поставка в Казахстан и СНГ | Terratech`
    : `${b.name} — supply to Kazakhstan & CIS | Terratech`;
  const description = isRu ? b.description : b.descriptionEn;
  return {
    title,
    description,
    alternates: { canonical: `https://www.terradstr.com/${locale}/products/${b.id}` },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string; brand: string }>;
}) {
  const { locale, brand } = await params;
  const b = getBrand(brand);
  if (!b) notFound();
  const isRu = locale === 'ru';

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#05070E] pt-32 pb-16 relative overflow-hidden">
          <div className="orb orb-a w-[500px] h-[500px] -top-32 right-0"></div>
          <div className="container-main relative z-10">
            <Link href={`/${locale}/products`} className="text-white/50 hover:text-white text-sm inline-flex items-center gap-1.5 mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              {isRu ? 'Каталог' : 'Catalog'}
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center bg-white rounded-lg px-4 py-2.5 mb-6">
                  <img src={b.logo} alt={b.name} className="h-7 object-contain" />
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/45 text-sm">{isRu ? b.country : b.countryEn}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: b.color }}>
                    {isRu ? b.tagline : b.taglineEn}
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-6xl text-white mb-5 font-extrabold">{b.name}</h1>
                <p className="text-white/60 text-lg leading-relaxed">{isRu ? b.description : b.descriptionEn}</p>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <Link href={`/${locale}/contacts`} className="btn-primary justify-center">
                  {isRu ? 'Запросить прайс' : 'Request Price List'}
                </Link>
                {b.catalogPdf && (
                  <a href={b.catalogPdf} target="_blank" rel="noopener" className="btn-secondary justify-center">
                    {isRu ? 'Скачать каталог (PDF)' : 'Download Catalog (PDF)'}
                  </a>
                )}
                <a href={b.officialUrl} target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white text-sm text-center transition-colors">
                  {isRu ? 'Сайт производителя ↗' : 'Manufacturer site ↗'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section bg-[#05070E]">
          <div className="container-main">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-8">
              {isRu ? `Продукция ${b.name}` : `${b.name} products`}
              <span className="text-white/40 text-lg font-sans ml-3">{b.products.length}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {b.products.map((p) => {
                const cat = categoryById(p.categoryId);
                return (
                  <Link
                    key={p.id}
                    href={`/${locale}/products/${b.id}/${p.id}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3E72C7]/50"
                  >
                    <div className="relative h-44 overflow-hidden bg-[#0A1628]">
                      <img src={p.image} alt={isRu ? p.name : p.nameEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070E]/80 to-transparent" />
                      <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                        {isRu ? cat.label : cat.labelEn}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-medium mb-2" style={{ color: b.color }}>{isRu ? p.series : p.seriesEn}</span>
                      <h3 className="font-display text-lg text-white mb-3 leading-snug group-hover:text-[#6FA0E0] transition-colors">{isRu ? p.name : p.nameEn}</h3>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {(isRu ? p.specs : p.specsEn).slice(0, 3).map((s) => (
                          <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/65">{s}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
