import { useLocale } from 'next-intl';
import Link from 'next/link';

const reasons = [
  {
    titleRu: 'Опыт с 2018 года',
    titleEn: 'Since 2018',
    descRu: '50+ проектов в 6 странах. Знаем специфику рынков ЦА и Кавказа.',
    descEn: '50+ projects in 6 countries. Deep knowledge of Central Asian and Caucasus markets.',
  },
  {
    titleRu: 'Поставка точно в срок',
    titleEn: 'On-Time Delivery',
    descRu: 'Отлаженная логистика в Казахстан, Узбекистан, Грузию, Азербайджан и Армению.',
    descEn: 'Reliable logistics to Kazakhstan, Uzbekistan, Georgia, Azerbaijan and Armenia.',
  },
  {
    titleRu: 'Технические консультации',
    titleEn: 'Technical Consulting',
    descRu: 'Подберём оптимальное решение под задачи и бюджет вашего проекта.',
    descEn: 'We select the optimal solution for your project requirements and budget.',
  },
  {
    titleRu: 'Только оригинал',
    titleEn: 'Only Original',
    descRu: 'Сертифицированное оборудование напрямую от производителей с документацией.',
    descEn: 'Certified equipment directly from manufacturers with full documentation.',
  },
  {
    titleRu: 'Полное сопровождение',
    titleEn: 'Full Support',
    descRu: 'От подбора и проектирования до сборки, монтажа и ввода в эксплуатацию.',
    descEn: 'From selection and design to assembly, installation and commissioning.',
  },
  {
    titleRu: 'Конкурентные цены',
    titleEn: 'Competitive Pricing',
    descRu: 'Прямые контракты с производителями — честные цены без лишних наценок.',
    descEn: 'Direct manufacturer contracts — fair prices without unnecessary markups.',
  },
];

const stats = [
  { value: '50+', labelRu: 'проектов', labelEn: 'projects' },
  { value: '2018', labelRu: 'год основания', labelEn: 'founded' },
  { value: '6', labelRu: 'стран поставки', labelEn: 'countries' },
  { value: '24/7', labelRu: 'поддержка', labelEn: 'support' },
];

export default function WhySection() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section className="section bg-[#0A1628]">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
              {isRu ? 'Наши преимущества' : 'Our Advantages'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              {isRu ? 'Почему выбирают Terratech' : 'Why Choose Terratech'}
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-xs leading-relaxed">
            {isRu
              ? 'Мы не просто продаём оборудование — мы обеспечиваем полное сопровождение проекта'
              : 'We don\'t just sell equipment — we provide complete project support'}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-white/8 hover:border-[#E8500A]/40 hover:bg-white/3 transition-all duration-300"
              style={{ borderLeft: '2px solid #E8500A' }}
            >
              <h3 className="text-white font-semibold text-base mb-2">
                {isRu ? r.titleRu : r.titleEn}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {isRu ? r.descRu : r.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-4xl text-white mb-1">{s.value}</div>
                <div className="text-white/35 text-sm">{isRu ? s.labelRu : s.labelEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-white font-display text-2xl md:text-3xl">
            {isRu ? 'Готовы обсудить ваш проект?' : 'Ready to discuss your project?'}
          </p>
          <Link href={`/${locale}/contacts`} className="btn-primary whitespace-nowrap">
            {isRu ? 'Написать нам' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </section>
  );
}
