import Link from 'next/link';
import { useLocale } from 'next-intl';
import Reveal from '@/components/ui/Reveal';

const products = [
  {
    key: 'cabinets',
    titleRu: 'Шкафы и корпусы',
    titleEn: 'Cabinets & Enclosures',
    descRu: 'Шкафы автоматики, электрощиты и серверные стойки. Степень защиты IP54–IP66.',
    descEn: 'Automation cabinets, switchgear and server racks. Protection IP54–IP66.',
    brands: 'Rittal · ZPAS',
    image: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ed1MfQuMeZ6hFbOxes5FTm4qpI/hf_20260605_080404_6806b284-38fb-4527-932b-68bf1a2ab763.png',
  },
  {
    key: 'components',
    titleRu: 'Компоненты для щитов',
    titleEn: 'Switchgear Components',
    descRu: 'Клеммные блоки, реле, блоки питания и автоматы для сборки щитов управления.',
    descEn: 'Terminal blocks, relays, power supplies and breakers for control panel assembly.',
    brands: 'Phoenix Contact · Legrand',
    image: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ed1MfQuMeZ6hFbOxes5FTm4qpI/hf_20260605_080406_c97a1f23-581b-4eaa-b22f-8a48c9ebd6f0.png',
  },
  {
    key: 'datacenter',
    titleRu: 'Решения для ЦОД',
    titleEn: 'Data Center Solutions',
    descRu: 'Фальшполы до 1500 кг/м², системы охлаждения и инфраструктура дата-центров.',
    descEn: 'Raised floors up to 1500 kg/m², cooling systems and data center infrastructure.',
    brands: 'Weiss · Rittal',
    image: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ed1MfQuMeZ6hFbOxes5FTm4qpI/hf_20260605_080407_e4469790-9fef-4f12-a70f-8110e3fdb6e0.png',
  },
  {
    key: 'ups',
    titleRu: 'Бесперебойное питание',
    titleEn: 'Uninterruptible Power',
    descRu: 'ИБП онлайн-типа двойного преобразования для критически важных объектов.',
    descEn: 'Online double-conversion UPS for mission-critical facilities.',
    brands: 'Hitec',
    image: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Ed1MfQuMeZ6hFbOxes5FTm4qpI/hf_20260605_080409_f551a738-3a56-44be-b467-61035cfec1d7.png',
  },
];

export default function ProductsSection() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section className="section bg-[#05070E] relative overflow-hidden">
      <div className="orb orb-a w-[460px] h-[460px] top-1/4 -left-40"></div>

      <div className="container-main relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#6FA0E0] text-xs font-semibold uppercase tracking-[0.16em] mb-3">
              {isRu ? 'Каталог' : 'Catalog'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              {isRu ? 'Что мы поставляем' : 'What we supply'}
            </h2>
          </div>
          <p className="text-white/60 text-base max-w-sm leading-relaxed">
            {isRu
              ? 'Оборудование ведущих мировых производителей с полной документацией и гарантией.'
              : 'Equipment from leading global manufacturers with full documentation and warranty.'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <Reveal key={product.key} delay={(i % 2) * 120}>
              <Link
                href={`/${locale}/products`}
                className="group relative block h-[340px] rounded-[20px] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#3E72C7]/55"
              >
                <img
                  src={product.image}
                  alt={isRu ? product.titleRu : product.titleEn}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.09]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05070E]/15 via-[#05070E]/55 to-[#05070E]/95"></div>

                <span className="absolute top-6 right-6 w-11 h-11 rounded-full border border-white/15 bg-[#080C16]/50 backdrop-blur-md grid place-items-center -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:bg-[#3E72C7] group-hover:border-[#3E72C7]">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

                <div className="absolute left-7 right-7 bottom-7">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6FA0E0] bg-[#3E72C7]/10 border border-[#3E72C7]/30 px-3 py-1.5 rounded-full mb-3.5">
                    {product.brands}
                  </span>
                  <h3 className="font-display text-2xl text-white mb-2">
                    {isRu ? product.titleRu : product.titleEn}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {isRu ? product.descRu : product.descEn}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
