import { useTranslations, useLocale } from 'next-intl';

const reasons = [
  { key: 'r1', icon: '📅' },
  { key: 'r2', icon: '🚚' },
  { key: 'r3', icon: '🔧' },
  { key: 'r4', icon: '✅' },
  { key: 'r5', icon: '🤝' },
  { key: 'r6', icon: '💰' },
];

export default function WhySection() {
  const t = useTranslations('why');
  const locale = useLocale();

  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#E8500A] text-xs font-semibold uppercase tracking-widest mb-3">
            {locale === 'ru' ? 'Наши преимущества' : 'Our Advantages'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#0A1628] mb-4">
            {t('title')}
          </h2>
          <p className="text-[#0A1628]/55 text-base leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div key={reason.key} className="group p-6 rounded-xl border border-[#E2DDD6] hover:border-[#E8500A]/30 hover:bg-[#F7F6F3] transition-all duration-300">
              <div className="w-12 h-12 bg-[#F7F6F3] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8500A]/10 transition-colors text-2xl">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-[#0A1628] mb-2 text-base">
                {t(`${reason.key}_title` as any)}
              </h3>
              <p className="text-[#0A1628]/55 text-sm leading-relaxed">
                {t(`${reason.key}_desc` as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
